<?php declare(strict_types=1);


namespace App\Services;

use Contributte\Translation\Translator;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Settings;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;

class ExcelService
{

    public function __construct(protected readonly Translator $translator)
    {
    }

    public function prepareExcel($title = "FVF")
    {
        Settings::setLocale('cs_CZ.utf8');
        $spreadsheet = new Spreadsheet();
        $spreadsheet->setActiveSheetIndex(0);
        $spreadsheet->getActiveSheet()->setTitle($this->translator->translate('download.excel.title'));

        $spreadsheet->getProperties()
            ->setCreator($this->translator->translate('download.excel.creator'))
            ->setLastModifiedBy($this->translator->translate('download.excel.contributors'))
            ->setTitle($title)
            ->setSubject(date('d.j.Y', time()))
            ->setDescription("")
            ->setKeywords("fsg export");

        $spreadsheet->getActiveSheet()->getStyle('A1:DD1')->getFont()->setBold(true);
        return $spreadsheet;
    }

    public function easyFillExcel(Spreadsheet $spreadsheet, array $header, array $body): Spreadsheet
    {
        try {
            $spreadsheet->getActiveSheet()->fromArray($header, NULL, 'A1');
            $spreadsheet->getActiveSheet()->fromArray($body, NULL, 'A2');
        } catch (Exception $exception) {
        }
        return $spreadsheet;
    }

    public function setItalic(Spreadsheet $spreadsheet, string $range): Spreadsheet
    {
        try {
            $spreadsheet->getActiveSheet()->getStyle($range)->getFont()->setItalic(TRUE);
        } catch (Exception $exception) {
        }
        return $spreadsheet;
    }

    public function setBold(Spreadsheet $spreadsheet, string $range): Spreadsheet
    {
        try {
            $spreadsheet->getActiveSheet()->getStyle($range)->getFont()->setBold(TRUE);
        } catch (Exception $exception) {
        }
        return $spreadsheet;
    }

    public function setAutosize(Spreadsheet $spreadsheet, array $columns): Spreadsheet
    {
        try {
            foreach ($columns as $column) {
                $spreadsheet->getActiveSheet()->getColumnDimension($column)->setAutoSize(true);
            }
        } catch (Exception $exception) {
        }
        return $spreadsheet;
    }

    public function setAsText(Spreadsheet $spreadsheet, array $columns): Spreadsheet
    {
        try {
            foreach ($columns as $column) {
                $spreadsheet->getActiveSheet()->getStyle($column)->getNumberFormat()
                    ->setFormatCode(NumberFormat::FORMAT_TEXT);
            }
        } catch (Exception $exception) {
        }
        return $spreadsheet;
    }
}
