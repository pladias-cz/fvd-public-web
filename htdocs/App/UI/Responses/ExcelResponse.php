<?php declare(strict_types=1);

namespace App\UI\Responses;

use Nette;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

class ExcelResponse implements Nette\Application\Response
{

    private Spreadsheet $spreadsheet;
    private string $filename;

    public function __construct(Spreadsheet $spreadsheet, $filename)
    {
        $this->spreadsheet = $spreadsheet;
        $this->filename = $filename;
    }

    public function send(Nette\Http\IRequest $httpRequest, Nette\Http\IResponse $httpResponse): void
    {
        $httpResponse->setContentType('application/force-download', 'utf-8')
            ->setHeader('Content-Disposition', 'attachment;filename=' .
                Nette\Utils\Strings::webalize($this->filename) . ".xlsx")
            ->setHeader('CacheControl', 'max-age=0')
            ->setHeader('Content-Transfer-Encoding', 'binary');
        $writer = IOFactory::createWriter($this->spreadsheet, 'Xlsx');
        $writer->save('php://output');
    }
}
