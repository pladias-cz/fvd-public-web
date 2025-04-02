<?php declare(strict_types=1);

namespace App\UI\Front\Species;

use App\UI\Base\UnsecuredPresenter;

final class SpeciesPresenter extends UnsecuredPresenter
{
    public function beforeRender(): void
    {
        parent::beforeRender();
        $this->hideCzechNames();
    }

    public function hideCzechNames() {
        if ($this->template->locale == "de") {$this->template->hideCzechNames = "hide-czech-name";} else {$this->template->hideCzechNames = "";}
    }
}
