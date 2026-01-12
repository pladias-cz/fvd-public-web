<?php declare(strict_types=1);

namespace App\Services;

use Contributte\Translation\Translator;
use Doctrine\ORM\EntityManagerInterface;
use Pladias\ORM\Entity\Bayernflora\FSGTaxons;

class FSGTaxonsService extends BaseService
{
    protected string $entityClassName = FSGTaxons::class;

    public function __construct(EntityManagerInterface $entityManager, Translator $translator)
    {
        parent::__construct($entityManager, $translator);
    }

    public function findAll()
    {
        return parent::findBy(["autocomplete" => TRUE]);
    }

    public function lookupAutocomplete($search)
    {
        $needle = '%' . trim($search) . '%';
        $sql = "SELECT * FROM (
                select DISTINCT ON (value) value, id FROM(

                (SELECT name_lat as value, id
                FROM bayernflora.taxons_fsg
 			    WHERE
 			          autocomplete = true AND
 			    (lower(unaccent(name_lat)) LIKE lower(unaccent(:name))
 			    OR
 			    lower(unaccent(replace(name_lat,'×','x'))) LIKE (unaccent(:name))))
 			    UNION
                (SELECT name_cz as value, id
                FROM bayernflora.taxons_fsg
 			    WHERE
 			        autocomplete = true AND
 			    (lower(unaccent(name_cz)) LIKE lower(unaccent(:name))
 			    OR
 			    lower(unaccent(replace(name_cz,'×','x'))) LIKE (unaccent(:name))))
                UNION
                (SELECT name_de as value, id
                FROM bayernflora.taxons_fsg
 			    WHERE
                      autocomplete = true AND
 			    (lower(unaccent(name_de)) LIKE lower(unaccent(:name))
 			    OR
 			    lower(unaccent(replace(name_de,'×','x'))) LIKE (unaccent(:name))))
 			    ) as ss
                ) as tt
                ORDER BY value ";

        $query = $this->getEntityManager()->getConnection()->prepare($sql);
        $query->bindValue('name', $needle);
        $result = $query->executeQuery();
        return $result->fetchAllAssociative();
    }

    public function findInNames($search)
    {
        $sql = "SELECT id
                FROM bayernflora.taxons_fsg
 			    WHERE
                  autocomplete = true AND
 			    (lower(unaccent(name_lat)) = lower(unaccent(:name))
 			    OR
 			    lower(unaccent(name_cz)) = lower(unaccent(:name))
 			    OR
 			    lower(unaccent(name_de)) = lower(unaccent(:name)))
                LIMIT 1";

        $query = $this->getEntityManager()->getConnection()->prepare($sql);
        $query->bindValue('name', $search);
        $result = $query->executeQuery();
        return $result->fetchOne();
    }

    public function highestOccurence(FSGTaxons $taxon)
    {
        $pladiasTaxa = $this->convertFSG2PladiasIds($taxon);
        if (count($pladiasTaxa) === 0) {
            return null;
        }
        $id = implode(",", $pladiasTaxa);
        $sql = "SELECT max(r.altitude_max) as altitude
                FROM atlas.records r,
                     geodata.regions g
 			    WHERE
 			          g.id = 1 AND
 			    r.taxon_id IN (" . $id . ") AND
 			    r.validation_status IN (0,3) AND
 			    ST_Intersects(r.coords_wgs, g.geom)";

        $query = $this->getEntityManager()->getConnection()->prepare($sql);
        $result = $query->executeQuery();
        return $result->fetchOne();
    }

    protected function convertFSG2PladiasIds(FSGTaxons $taxon)
    {
        $sql = "SELECT c.pladias_taxon
                FROM bayernflora.taxons_convertor c
 			    WHERE
 			    fsg_taxon_id = (:fsg) AND pladias_taxon IS NOT NULL";
        $query = $this->getEntityManager()->getConnection()->prepare($sql);
        $query->bindValue('fsg', $taxon->id);
        $result = $query->executeQuery();
        return $result->fetchFirstColumn();
    }

    public function lowestOccurence(FSGTaxons $taxon)
    {
        $pladiasTaxa = $this->convertFSG2PladiasIds($taxon);
        if (count($pladiasTaxa) === 0) {
            return null;
        }
        $id = implode(",", $pladiasTaxa);
        $sql = "SELECT min(r.altitude_min) as altitude
                FROM atlas.records r,
                     geodata.regions g
 			    WHERE
 			          g.id = 1 AND
 			    r.taxon_id IN (" . $id . ") AND
 			    r.validation_status IN (0,3) AND
 			    ST_Intersects(r.coords_wgs, g.geom)";

        $query = $this->getEntityManager()->getConnection()->prepare($sql);
        $result = $query->executeQuery();
        return $result->fetchOne();
    }

    public function yearOfOldestRecord(FSGTaxons $taxon): ?int
    {
        $sql = "select min(year) FROM
        (
        (with sub as (select pladias_taxon as t from bayernflora.taxons_convertor WHERE fsg_taxon_id =  (:fsg))
        select EXTRACT(YEAR FROM min(r.datum))::int as year from sub JOIN atlas.records r ON (r.taxon_id=sub.t))
        UNION
        (with sub as (select bayernflora_taxon as t from bayernflora.taxons_convertor WHERE fsg_taxon_id =  (:fsg))
        select substring(date from 1 for 4)::int as year from sub JOIN bayernflora.records r ON (r.taxon_id=sub.t) WHERE substring(r.date from 1 for 4)~E'^\\d+$')
        ) as united";
        $query = $this->getEntityManager()->getConnection()->prepare($sql);
        $query->bindValue('fsg', $taxon->id);
        $result = $query->executeQuery();
        return $result->fetchOne();
    }

    public function getPladiasConvertor()
    {
        $sql = "select * FROM bayernflora.convertor_pladias";
        $query = $this->entityManager->getConnection()->prepare($sql);
        $result = $query->executeQuery();
        return $result->fetchAllNumeric();
    }

    public function getBayernConvertor()
    {
        $sql = "select * FROM bayernflora.convertor_bayern";
        $query = $this->entityManager->getConnection()->prepare($sql);
        $result = $query->executeQuery();
        return $result->fetchAllNumeric();
    }

    public function getQuadrantOccupation(FSGTaxons $taxon)
    {
        $sql = "SELECT  :name, s.code , (SELECT ss.description
                         from bayernflora.fvd_geoserver_distribution_aggregated v
                         JOIN atlas.record_validation_status ss ON (ss.id =  v.max_valid_status)
                         WHERE v.fsg_taxon=:fsg
                           AND v.code = s.code
                         ORDER BY v.layer_of_aggregation DESC LIMIT 1)
                FROM geodata.quadrants_full  s
                JOIN geodata.regions reg ON st_intersects(s.geom_wgs, reg.geom)
                WHERE reg.id = 4
                ORDER BY s.code";
        $query = $this->entityManager->getConnection()->prepare($sql);
        $query->bindValue('fsg', $taxon->id);
        $query->bindValue('name', $taxon->nameLat);
        $result = $query->executeQuery();
        return $result->fetchAllNumeric();
    }

    public function getRedlistByCategory($category)
    {
        $query = $this->getRepository()->createQueryBuilder('fsg')
            ->join('fsg.redListCategory', 'rl')
            ->where('rl.abbreviation = :abbreviation')
            ->setParameter('abbreviation', $category)
            ->getQuery();

        return $query->getResult();
    }

    public function getTaxaLatinSorted()
    {
        $taxa = $this->findBy(["autocomplete" => TRUE], []);
        $coll = new \Collator('en_US');
        $coll->sort($taxa, \Collator::SORT_REGULAR);
        //        usort($taxa, function($a, $b) { return (substr($a->nameLat, 0, 1) < substr($b->nameLat, 0, 1)) ? -1 : 1;});
        return $taxa;
    }
}
