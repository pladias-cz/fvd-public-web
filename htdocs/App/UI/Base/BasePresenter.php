<?php declare(strict_types = 1);

namespace App\UI\Base;

use Nette\Application\UI\Presenter;
use Contributte\Translation\Translator;

abstract class BasePresenter extends Presenter
{
    const LOCALE_CS = "cs";
    const LOCALE_EN = "en";
    const LOCALE_DE = "de";
    const LOCALES = [
        self::LOCALE_CS => self::LOCALE_CS,
        self::LOCALE_EN => self::LOCALE_EN,
        self::LOCALE_DE => self::LOCALE_DE];


    const DEFAULT_DATE_FORMAT = 'j_m_Y';
    const CS_DATE_FORMAT="j.n.Y";
    const DE_DATE_FORMAT="j.n.Y";
    const EN_DATE_FORMAT="j/n/Y";

    /** @persistent */
    public $locale;

    /** @var Translator @inject */
    public $translator;

    public function beforeRender()
    {
        $this->setLocale();
        parent::beforeRender();
    }

private function setLocale()
{
    switch ($this->locale) {
        case self::LOCALE_CS:
            setlocale(LC_ALL, "cs_CZ.UTF-8");
            break;
        case self::LOCALE_DE:
            setlocale(LC_ALL, 'de_DE', 'de', 'German', 'de.UTF-8');
            break;
        case self::LOCALE_EN:
            setlocale(LC_ALL, "en_US.UTF-8");
            break;
        default:
            $this->locale = self::LOCALE_CS;
            setlocale(LC_ALL, "cs_CZ.UTF-8");
            break;
    }
    $this->template->locale = $this->locale;
}
}

