<?php

declare(strict_types=1);

namespace App\UI\Front\Autocomplete;

use App\Services\FSGTaxonsService;
use App\UI\Base\UnsecuredPresenter;

final class AutocompletePresenter extends UnsecuredPresenter
{
    public const int MIN_LENGHT = 2;

    /** @inject */
    public FSGTaxonsService $fsgTaxonService;

    private function emptyResponse()
    {
        $this->sendJson([]);
    }

    public function actionFSGTaxa(?string $term = null)
    {
        if (null === $term || strlen($term) < self::MIN_LENGHT) {
            $this->emptyResponse();
        }
        $this->sendJson($this->fsgTaxonService->lookupAutocomplete($term));
    }
}
