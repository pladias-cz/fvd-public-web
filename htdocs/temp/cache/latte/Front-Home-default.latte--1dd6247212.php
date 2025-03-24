<?php

declare(strict_types=1);

use Latte\Runtime as LR;

/** source: /srv/App/UI/Front/Home/default.latte */
final class Template_1dd6247212 extends Latte\Runtime\Template
{
	public const Source = '/srv/App/UI/Front/Home/default.latte';

	public const Blocks = [
		['content' => 'blockContent'],
	];


	public function main(array $ʟ_args): void
	{
		extract($ʟ_args);
		unset($ʟ_args);

		if ($this->global->snippetDriver?->renderSnippets($this->blocks[self::LayerSnippet], $this->params)) {
			return;
		}

		$this->renderBlock('content', get_defined_vars()) /* line 1 */;
		echo "\n";
	}


	/** {block content} on line 1 */
	public function blockContent(array $ʟ_args): void
	{
		extract($this->params);
		extract($ʟ_args);
		unset($ʟ_args);

		echo '
<h1>Projekt: ';
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('about.subtitle', $ᴛ_contributteTranslationPrefix ?? null))) /* line 7 */;
		echo '</h1>

<img src="';
		echo LR\Filters::escapeHtmlAttr(LR\Filters::safeUrl($basePath)) /* line 9 */;
		echo '/images/interreg.jpg" style="height: 8rem">

<pre>
';
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('about.line', $ᴛ_contributteTranslationPrefix ?? null))) /* line 12 */;
		echo "\n";
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('about.line2', $ᴛ_contributteTranslationPrefix ?? null))) /* line 13 */;
		echo "\n";
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('about.line3', $ᴛ_contributteTranslationPrefix ?? null))) /* line 14 */;
		echo "\n";
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('about.line4', $ᴛ_contributteTranslationPrefix ?? null))) /* line 15 */;
		echo "\n";
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('about.line5', $ᴛ_contributteTranslationPrefix ?? null))) /* line 16 */;
		echo "\n";
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('about.line6', $ᴛ_contributteTranslationPrefix ?? null))) /* line 17 */;
		echo '
</pre>

<p>
';
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('about.description', $ᴛ_contributteTranslationPrefix ?? null))) /* line 21 */;
		echo '
</p>

<div class="project-logos">

<img src="';
		echo LR\Filters::escapeHtmlAttr(LR\Filters::safeUrl($basePath)) /* line 26 */;
		echo '/images/flag_eu.svg">
<img src="';
		echo LR\Filters::escapeHtmlAttr(LR\Filters::safeUrl($basePath)) /* line 27 */;
		echo '/images/jcu.jpg">
<img src="';
		echo LR\Filters::escapeHtmlAttr(LR\Filters::safeUrl($basePath)) /* line 28 */;
		echo '/images/oo-landeskultur.png">

</div>

';
	}
}
