<?php

declare(strict_types=1);

use Latte\Runtime as LR;

/** source: /srv/App/UI/Front/@layout.latte */
final class Template_37910a0933 extends Latte\Runtime\Template
{
	public const Source = '/srv/App/UI/Front/@layout.latte';

	public const Blocks = [
		['navigation' => 'blockNavigation'],
	];


	public function main(array $ʟ_args): void
	{
		extract($ʟ_args);
		unset($ʟ_args);

		if ($this->global->snippetDriver?->renderSnippets($this->blocks[self::LayerSnippet], $this->params)) {
			return;
		}

		$this->renderBlock('navigation', get_defined_vars()) /* line 2 */;
	}


	public function prepare(): array
	{
		extract($this->params);

		$this->parentName = '../Base/@layout.latte';
		return get_defined_vars();
	}


	/** {block navigation} on line 2 */
	public function blockNavigation(array $ʟ_args): void
	{
		extract($this->params);
		extract($ʟ_args);
		unset($ʟ_args);

		echo '<nav>
<div class="container">

<a href="';
		echo LR\Filters::escapeHtmlAttr($this->global->uiControl->link('Home:')) /* line 6 */;
		echo '" class="logo"><img src="';
		echo LR\Filters::escapeHtmlAttr(LR\Filters::safeUrl($basePath)) /* line 6 */;
		echo '/images/project-logo-light.svg"></a>

<div class="nav-links">
<div>
<a href="';
		echo LR\Filters::escapeHtmlAttr($this->global->uiControl->link('Home:')) /* line 10 */;
		echo '" class="';
		if ($presenter->isLinkCurrent('Home:')) /* line 10 */ {
			echo 'active';
		}
		echo '">';
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('menu.homepage', $ᴛ_contributteTranslationPrefix ?? null))) /* line 10 */;
		echo '</a>
<a href="';
		echo LR\Filters::escapeHtmlAttr($this->global->uiControl->link('Home:contact')) /* line 12 */;
		echo '" class="';
		if ($presenter->isLinkCurrent('Home:contact')) /* line 12 */ {
			echo 'active';
		}
		echo '">';
		echo LR\Filters::escapeHtmlText(($this->filters->translate)(\Contributte\Translation\Helpers::prefixMessage('menu.contact', $ᴛ_contributteTranslationPrefix ?? null))) /* line 12 */;
		echo '</a>

</div>


<div>
<a data-language="cs" class="';
		if ($locale == 'cs') /* line 27 */ {
			echo 'active';
		}
		echo '" href="';
		echo LR\Filters::escapeHtmlAttr($this->global->uiControl->link('this', ['locale' => 'cs'])) /* line 27 */;
		echo '">cs</a>
<a data-language="de" class="';
		if ($locale == 'de') /* line 28 */ {
			echo 'active';
		}
		echo '" href="';
		echo LR\Filters::escapeHtmlAttr($this->global->uiControl->link('this', ['locale' => 'de'])) /* line 28 */;
		echo '">de</a>
</div>

</div>

</div>
</nav>
';
	}
}
