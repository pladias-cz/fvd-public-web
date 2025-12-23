<?php declare(strict_types=1);

namespace App\Services;

use Doctrine\ORM\EntityManagerInterface;
use Contributte\Translation\Translator;
use Doctrine\ORM\EntityRepository;
use Nette\Caching\Cache;

abstract class BaseService
{

    protected EntityRepository $repository;

    protected Cache $cache;

    protected string $entityClassName;

    public function __construct(protected readonly EntityManagerInterface $entityManager, protected readonly Translator $translator)//, FileStorage $storage)
    {
        $this->repository = $entityManager->getRepository($this->entityClassName);
        //$this->cache=new Cache($storage, 'floracz_model');
    }

    public function getEntityManager()
    {
        return $this->entityManager;
    }

    public function getRepository()
    {
        return $this->repository;
    }

    public function findAll()
    {
        return $this->repository->findAll();
    }

    public function find($id)
    {
        return $this->repository->find($id);
    }

    public function findOneBy(array $criteria){
        return $this->repository->findOneBy($criteria);
    }

    public function findBy(array $criteria, array $orderBy, $limit = null, $offset = null){
        return $this->repository->findBy($criteria, $orderBy, $limit, $offset);
    }

}
