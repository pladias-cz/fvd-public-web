<?php declare(strict_types=1);

namespace App\UI\Front\Download;

use App\Services\ExcelService;
use App\Services\FSGTaxonsService;
use App\UI\Base\BasePresenter;
use App\UI\Responses\ExcelResponse;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use Pladias\ORM\Entity\Bayernflora\FSGTaxons;

class DownloadPresenter extends BasePresenter
{
    /**  @inject */
    public ExcelService $excelService;

    /**  @inject */
    public FSGTaxonsService $FSGTaxonsService;

    protected FSGTaxons $taxon;

    public function actionDistribution(int $id)
    {
        $this->taxon = $this->FSGTaxonsService->find($id);
        $spreadsheet = $this->excelService->prepareExcel(
            $this->translator->translate('download.excel.distribution.filename')
        );

        $spreadsheet->getActiveSheet()->setTitle($this->translator->translate('download.excel.title'));
        $header = [$this->translator->translate('download.excel.distribution.head.taxon'),
            $this->translator->translate('download.excel.distribution.head.quadrant'),
            $this->translator->translate('download.excel.distribution.head.present')
        ];
        $data = $this->FSGTaxonsService->getQuadrantOccupation($this->taxon);
        $spreadsheet = $this->excelService->easyFillExcel($spreadsheet, $header, $data);

        $spreadsheet = $this->excelService->setItalic($spreadsheet, 'A2:A10000');
        $spreadsheet = $this->excelService->setAutosize($spreadsheet, ['A', 'B', 'C']);

        $filename = $this->translator->translate('download.excel.distribution.filename')
            . "-" . $this->getFilenameSuffix();

        $this->sendSpreadsheet($spreadsheet, $filename);
    }

    private function getFilenameSuffix(string $quadFullName = ""): string
    {
        return $quadFullName . date(BasePresenter::DEFAULT_DATE_FORMAT, time());
    }

    private function sendSpreadsheet(Spreadsheet $spreadsheet, string $fileName)
    {
        $response = new ExcelResponse($spreadsheet, $fileName);
        $this->sendResponse($response);
    }
}
