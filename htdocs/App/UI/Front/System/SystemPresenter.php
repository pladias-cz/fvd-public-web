<?php

declare(strict_types=1);

namespace App\UI\Front\System;

use App\Services\CacheCleaner;
use App\UI\Base\BasePresenter;
use Nette\Application\BadRequestException;

final class SystemPresenter extends BasePresenter
{
    /** @var CacheCleaner @inject */
    public CacheCleaner $cacheCleaner;

    private ?bool $cleared = null;

    public function actionClearCache(): void
    {
        if (!$this->cacheCleaner->isEnabled()) {
            throw new BadRequestException();
        }

        if ($this->getHttpRequest()->isMethod('POST')) {
            $password = (string) $this->getHttpRequest()->getPost('password');
            if ($this->cacheCleaner->verifyPassword($password)) {
                $this->cacheCleaner->clear();
                $this->cleared = true;
            } else {
                usleep(500000);
                $this->cleared = false;
            }
        }
    }

    public function renderClearCache(): void
    {
        $this->template->cleared = $this->cleared;
    }
}
