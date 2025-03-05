<?php declare(strict_types = 1);

namespace App\UI\Base;

use Nette\Application\UI\Presenter;

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
}
