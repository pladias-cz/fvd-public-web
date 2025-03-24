<?php

declare(strict_types=1);

use Latte\Runtime as LR;

/** source: /srv/App/UI/Base/@layout.latte */
final class Template_c9e0c5961e extends Latte\Runtime\Template
{
	public const Source = '/srv/App/UI/Base/@layout.latte';

	public const Blocks = [
		['footer' => 'blockFooter'],
	];


	public function main(array $ʟ_args): void
	{
		extract($ʟ_args);
		unset($ʟ_args);

		if ($this->global->snippetDriver?->renderSnippets($this->blocks[self::LayerSnippet], $this->params)) {
			return;
		}

		echo '<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Emoji:wght@300..700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,700,700i&display=swap&subset=latin-ext" rel="stylesheet">
    <link rel="shortcut icon" href="';
		echo LR\Filters::escapeHtmlAttr(LR\Filters::safeUrl($basePath)) /* line 10 */;
		echo '/images/favicon.svg">
';
		echo $this->global->webpackEncoreTagRenderer->renderLinkTags('app') /* line 11 */;
		echo '    <title>';
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('base.project.name', $ᴛ_contributteTranslationPrefix ?? null))) /* line 12 */;
		echo '</title>
</head>

<body>
';
		$this->renderBlock('navigation', [], 'html') /* line 16 */;
		echo '
<div id="content" class="container">
';
		$this->renderBlock('content', [], 'html') /* line 19 */;
		echo '</div>

';
		$this->renderBlock('footer', get_defined_vars()) /* line 22 */;
		echo '
</body>
';
		echo $this->global->webpackEncoreTagRenderer->renderScriptTags('app') /* line 29 */;
		echo '</html>
';
	}


	/** {block footer} on line 22 */
	public function blockFooter(array $ʟ_args): void
	{
		extract($this->params);
		extract($ʟ_args);
		unset($ʟ_args);

		echo '<footer class="container">
2025';
		if (date('Y') > 2025) /* line 24 */ {
			echo '&ndash;';
			echo LR\Filters::escapeHtmlText(date('Y')) /* line 24 */;
		}
		echo ' &bullet; ';
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('base.project.name', $ᴛ_contributteTranslationPrefix ?? null))) /* line 24 */;
		echo '
</footer>
';
	}
}
