<?php declare(strict_types=1);

namespace App\UI\Front\Taxon;

use App\Services\FSGTaxonsService;
use App\UI\Base\UnsecuredPresenter;
use Pladias\ORM\Entity\Bayernflora\FSGTaxons;


final class TaxonPresenter extends UnsecuredPresenter
{
    /**  @inject */
    public FSGTaxonsService $fsgTaxonService;

    public function actionFindInNames(?string $id)
    {
        $taxonId=$this->fsgTaxonService->findInNames($id);
        $taxon = $this->fsgTaxonService->find($taxonId);
        if (null == $taxon) {
            $this->redirect('Home:');
        }
        $this->redirect(':info', [$taxon->nameLat]);

    }

    public function renderInfo(string $id)
    {
        if (null == $id) {
            $this->redirect('Home:');
        }
        /** @var  $taxon FSGTaxons */
        $taxon=$this->fsgTaxonService->findOneBy(["nameLat"=>$id]);
        if (null===$taxon){
            $this->redirect('Home:');
        }
        $this->template->title = $taxon->nameLat;
        $this->template->taxon = $taxon;
        $this->template->oldestRecord = $this->fsgTaxonService->yearOfOldestRecord($taxon);
    }
}
