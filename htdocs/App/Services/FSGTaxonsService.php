<?php

declare(strict_types=1);

namespace App\Services;

use Contributte\Translation\Translator;
use Doctrine\ORM\EntityManagerInterface;
use Pladias\ORM\Entity\Bayernflora\FSGTaxons;
use Pladias\ORM\Entity\Gbif\Taxa;

class FSGTaxonsService extends BaseService
{
    protected string $entityClassName = FSGTaxons::class;

    public function __construct(EntityManagerInterface $entityManager, Translator $translator)
    {
        parent::__construct($entityManager, $translator);
    }

    public function findAll()
    {
        return parent::findBy(['isFvd' => true]);
    }

    public function lookupAutocomplete($search)
    {
        $needle = '%' . trim($search) . '%';
        $sql = "SELECT * FROM (
                select DISTINCT ON (value) value, id FROM(

                (SELECT name_lat as value, id
                FROM bayernflora.taxons_fsg
 			    WHERE
 			          is_fvd = true AND
 			    (lower(unaccent(name_lat)) LIKE lower(unaccent(:name))
 			    OR
 			    lower(unaccent(replace(name_lat,'×','x'))) LIKE (unaccent(:name))))
 			    UNION
                (SELECT name_cz as value, id
                FROM bayernflora.taxons_fsg
 			    WHERE
 			        is_fvd = true AND
 			    (lower(unaccent(name_cz)) LIKE lower(unaccent(:name))
 			    OR
 			    lower(unaccent(replace(name_cz,'×','x'))) LIKE (unaccent(:name))))
                UNION
                (SELECT name_de as value, id
                FROM bayernflora.taxons_fsg
 			    WHERE
                      is_fvd = true AND
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
        $sql = 'SELECT id
                FROM bayernflora.taxons_fsg
 			    WHERE
                  is_fvd = true AND
 			    (lower(unaccent(name_lat)) = lower(unaccent(:name))
 			    OR
 			    lower(unaccent(name_cz)) = lower(unaccent(:name))
 			    OR
 			    lower(unaccent(name_de)) = lower(unaccent(:name)))
                LIMIT 1';

        $query = $this->getEntityManager()->getConnection()->prepare($sql);
        $query->bindValue('name', $search);
        $result = $query->executeQuery();

        return $result->fetchOne();
    }

    public function highestOccurence(FSGTaxons $taxon)
    {
        $pladiasTaxa = $this->convertFSG2PladiasIds($taxon);
        if (0 === count($pladiasTaxa)) {
            return null;
        }
        $id = implode(',', $pladiasTaxa);
        $sql = 'SELECT max(r.altitude_max) as altitude
                FROM atlas.records r,
                     geodata.regions g
 			    WHERE
 			          g.id = 1 AND
 			    r.taxon_id IN (' . $id . ') AND
 			    r.validation_status IN (0,3) AND
 			    ST_Intersects(r.coords_wgs, g.geom)';

        $query = $this->getEntityManager()->getConnection()->prepare($sql);
        $result = $query->executeQuery();

        return $result->fetchOne();
    }

    protected function convertFSG2PladiasIds(FSGTaxons $taxon)
    {
        $sql = 'SELECT c.pladias_taxon
                FROM bayernflora.taxons_convertor c
 			    WHERE
 			    fsg_taxon_id = (:fsg) AND pladias_taxon IS NOT NULL';
        $query = $this->getEntityManager()->getConnection()->prepare($sql);
        $query->bindValue('fsg', $taxon->id);
        $result = $query->executeQuery();

        return $result->fetchFirstColumn();
    }

    public function lowestOccurence(FSGTaxons $taxon)
    {
        $pladiasTaxa = $this->convertFSG2PladiasIds($taxon);
        if (0 === count($pladiasTaxa)) {
            return null;
        }
        $id = implode(',', $pladiasTaxa);
        $sql = 'SELECT min(r.altitude_min) as altitude
                FROM atlas.records r,
                     geodata.regions g
 			    WHERE
 			          g.id = 1 AND
 			    r.taxon_id IN (' . $id . ') AND
 			    r.validation_status IN (0,3) AND
 			    ST_Intersects(r.coords_wgs, g.geom)';

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

    public function getQuadrantOccupation(FSGTaxons $taxon)
    {
        /**
         * přidává se tam vždy odkaz na jeden záznam z daného zdroje aby šlo dohledat čím je daný kvadrant podpořený
         * u GBIF je velmi pravděpodobně ještě špatně že se neodfiltrovávají jen ZOBODAT zázamy- alae zase může být užitečné vidět že jiný GBIF zdroj to poskytuje..?
         */
        $sql = 'SELECT  :name, s.code , (SELECT ss.description
                         from bayernflora.fvd_geoserver_distribution_aggregated v
                         JOIN atlas.record_validation_status ss ON (ss.id =  v.max_valid_status)
                         WHERE v.fsg_taxon=:fsg
                           AND v.code = s.code
                         ORDER BY v.layer_of_aggregation DESC LIMIT 1),
                         --zmizik
                        (SELECT vs.description from bayernflora.distribution_nonautomatic z JOIN atlas.record_validation_status vs
                              ON vs.id = z.validation_status WHERE z.taxon_fsg=:fsg AND z.quadrant = s.id),
                        --pladias
                        (
                             SELECT \'https://pladias.ibot.cas.cz/recordEdit/recordId/\' || r.id
                            FROM bayernflora.taxons_convertor tc
                            JOIN atlas.records r
                              ON r.taxon_id = tc.pladias_taxon
                            JOIN atlas.record_validation_status vs
                              ON vs.id = r.validation_status
                            WHERE tc.fsg_taxon_id = :fsg
                              AND ST_Contains(s.geom_wgs, r.coords_wgs)
                            ORDER BY vs.priority DESC, r.id
                            LIMIT 1
                        ),
                        --SNSB
                        (  SELECT r.id
                            FROM bayernflora.records r
                            JOIN bayernflora.taxons_convertor tc
                              ON tc.bayernflora_taxon = r.taxon_id
                            WHERE tc.fsg_taxon_id = :fsg
                              AND r.quadrant = s.id
                            ORDER BY r.last_edit DESC NULLS LAST, r.id
                            LIMIT 1),
                        --GBIF
                        (
                        SELECT r.id
                            FROM bayernflora.taxons_convertor tc
                            JOIN gbif.taxa gt
                              ON gt.pladias_taxon_id = tc.pladias_taxon
                            JOIN gbif.records r
                              ON r.taxon_col_id = gt.col_id
                            WHERE tc.fsg_taxon_id = :fsg
                              AND ST_Contains(s.geom_wgs, r.coords)
                            ORDER BY
                                r.coords_precision DESC NULLS LAST,
                                r.id
                            LIMIT 1
                        ),
                        --GBIF Austria only
                        (
                        SELECT r.id
                            FROM gbif.taxa t
                            JOIN gbif.records r
                              ON r.taxon_col_id = t.col_id
                            WHERE t.fsg_taxon_id = :fsg
                              AND ST_Contains(s.geom_wgs, r.coords)
                            LIMIT 1
                        )
                FROM geodata.quadrants_full  s
                JOIN geodata.regions reg ON st_intersects(s.geom_wgs, reg.geom)
                WHERE reg.id = 4
                ORDER BY s.code';
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

    public function getGbifConvertor(): array
    {
        $sql = 'select g.*, p.name_lat FROM gbif.taxa g JOIN public.taxons p on (p.id=g.pladias_taxon_id)';
        $query = $this->entityManager->getConnection()->prepare($sql);
        $result = $query->executeQuery();

        return $result->fetchAllNumeric();
    }

    public function getAustriaOnlyMapping(FSGTaxons $taxon): array
    {
        $sql = 'SELECT id FROM gbif.taxa WHERE fsg_taxon_id = :fsg';

        $ids = $this->entityManager
            ->getConnection()
            ->executeQuery($sql, ['fsg' => $taxon->id])
            ->fetchFirstColumn();

        if ($ids === []) {
            return [];
        }

        return $this->entityManager
            ->getRepository(Taxa::class)
            ->findBy(['id' => $ids]);
    }
}
