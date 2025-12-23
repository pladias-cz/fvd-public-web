<?php declare(strict_types = 1);

namespace App\UI\Base;

use App\Services\FSGTaxonsService;
use Nette\Neon\Exception;
use Pladias\ORM\Entity\Bayernflora\FSGTaxons;

abstract class UnsecuredPresenter extends BasePresenter
{

    protected FSGTaxons $taxon;

    /**  @inject    */
    public FSGTaxonsService $taxonsService;

    protected function findTaxon($id){
        try {
            if ("" == $id) {
                throw new Exception("taxon.empty_name");
            }
            $this->taxon = $this->taxonsService->find($id);
        } catch (Exception $e) {
            $this->flashMessage($this->translator->translate($e->getMessage()));
            $this->redirect('Taxon:default');
        }
    }

}
