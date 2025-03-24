<?php
// source: /srv/config/env/dev.neon
// source: /srv/config/local.neon
// source: array

/** @noinspection PhpParamsInspection,PhpMethodMayBeStaticInspection */

declare(strict_types=1);

class Container_3dbde46c17 extends Nette\DI\Container
{
	protected array $tags = [
		'nette.inject' => [
			'application.1' => true,
			'application.2' => true,
			'application.3' => true,
			'application.4' => true,
			'application.5' => true,
		],
	];

	protected array $aliases = [
		'application' => 'application.application',
		'cacheStorage' => 'cache.storage',
		'httpRequest' => 'http.request',
		'httpResponse' => 'http.response',
		'nette.cacheJournal' => 'cache.journal',
		'nette.httpRequestFactory' => 'http.requestFactory',
		'nette.latteFactory' => 'latte.latteFactory',
		'nette.presenterFactory' => 'application.presenterFactory',
		'nette.templateFactory' => 'latte.templateFactory',
		'session' => 'session.session',
	];

	protected array $wiring = [
		'Nette\DI\Container' => [['container']],
		'Nette\Application\Application' => [['application.application']],
		'Nette\Application\IPresenterFactory' => [['application.presenterFactory']],
		'Nette\Application\LinkGenerator' => [['application.linkGenerator']],
		'Nette\Caching\Storages\Journal' => [['cache.journal']],
		'Nette\Caching\Storage' => [['cache.storage']],
		'Nette\Caching\Storages\DevNullStorage' => [['cache.storage']],
		'Nette\Http\RequestFactory' => [['http.requestFactory']],
		'Nette\Http\IRequest' => [['http.request']],
		'Nette\Http\Request' => [['http.request']],
		'Nette\Http\IResponse' => [['http.response']],
		'Nette\Http\Response' => [['http.response']],
		'Nette\Bridges\ApplicationLatte\LatteFactory' => [['latte.latteFactory']],
		'Nette\Application\UI\TemplateFactory' => [['latte.templateFactory']],
		'Nette\Bridges\ApplicationLatte\TemplateFactory' => [['latte.templateFactory']],
		'Nette\Http\Session' => [['session.session']],
		'Tracy\ILogger' => [['tracy.logger']],
		'Tracy\BlueScreen' => [['tracy.blueScreen']],
		'Tracy\Bar' => [['tracy.bar']],
		'Contributte\Translation\LocaleResolver' => [['translation.localeResolver']],
		'Contributte\Translation\LocalesResolvers\ResolverInterface' => [
			[
				'translation.localeResolverSession',
				'translation.localeResolverRouter',
				'translation.localeResolverParameter',
				'translation.localeResolverHeader',
			],
		],
		'Contributte\Translation\LocalesResolvers\Session' => [['translation.localeResolverSession']],
		'Contributte\Translation\LocalesResolvers\Router' => [['translation.localeResolverRouter']],
		'Contributte\Translation\LocalesResolvers\Parameter' => [['translation.localeResolverParameter']],
		'Contributte\Translation\LocalesResolvers\Header' => [['translation.localeResolverHeader']],
		'Contributte\Translation\FallbackResolver' => [['translation.fallbackResolver']],
		'Symfony\Component\Config\ConfigCacheFactoryInterface' => [['translation.configCacheFactory']],
		'Symfony\Component\Config\ConfigCacheFactory' => [['translation.configCacheFactory']],
		'Symfony\Component\Translation\Translator' => [['translation.translator']],
		'Symfony\Contracts\Translation\TranslatorInterface' => [['translation.translator']],
		'Symfony\Component\Translation\TranslatorBagInterface' => [1 => ['translation.translator']],
		'Symfony\Contracts\Translation\LocaleAwareInterface' => [1 => ['translation.translator']],
		'Nette\Localization\Translator' => [['translation.translator']],
		'Contributte\Translation\Translator' => [['translation.translator']],
		'Symfony\Component\Translation\Loader\ArrayLoader' => [['translation.loaderNeon']],
		'Symfony\Component\Translation\Loader\LoaderInterface' => [['translation.loaderNeon']],
		'Contributte\Translation\Loaders\Neon' => [['translation.loaderNeon']],
		'Tracy\IBarPanel' => [['translation.tracyPanel']],
		'Contributte\Translation\Tracy\Panel' => [['translation.tracyPanel']],
		'Symfony\Component\Asset\VersionStrategy\VersionStrategyInterface' => [2 => ['asset.version_strategy._default']],
		'Symfony\Component\Asset\PackageInterface' => [2 => ['asset.package._default']],
		'Symfony\Component\Asset\Packages' => [['asset.packages']],
		'Psr\Cache\CacheItemPoolInterface' => [2 => ['encore.cache', 'encore.cache.default', 'encore.cache.fallback']],
		'Symfony\Component\Cache\Adapter\AdapterInterface' => [2 => ['encore.cache.fallback']],
		'Symfony\Contracts\Cache\CacheInterface' => [2 => ['encore.cache.fallback']],
		'Symfony\Component\Cache\Adapter\NullAdapter' => [2 => ['encore.cache.fallback']],
		'SixtyEightPublishers\WebpackEncoreBundle\Asset\TagRenderer' => [2 => ['encore.tag_renderer']],
		'SixtyEightPublishers\WebpackEncoreBundle\Asset\EntryPointLookupCollectionInterface' => [
			0 => ['encore.entrypoint_lookup_collection'],
			2 => [1 => 'encore.entrypoint_lookup_collection.default'],
		],
		'SixtyEightPublishers\WebpackEncoreBundle\Asset\EntryPointLookupCollection' => [
			2 => ['encore.entrypoint_lookup_collection.default'],
		],
		'SixtyEightPublishers\WebpackEncoreBundle\Asset\EntryPointLookupInterface' => [
			2 => ['encore.entrypoint_lookup._default'],
		],
		'SixtyEightPublishers\WebpackEncoreBundle\Asset\IntegrityDataProviderInterface' => [
			2 => ['encore.entrypoint_lookup._default'],
		],
		'SixtyEightPublishers\WebpackEncoreBundle\Asset\EntryPointLookup' => [2 => ['encore.entrypoint_lookup._default']],
		'Symfony\Component\Console\Command\Command' => [['encore.console.command.warmup_cache']],
		'SixtyEightPublishers\WebpackEncoreBundle\Bridge\Symfony\Console\Command\WarmupCacheCommand' => [
			['encore.console.command.warmup_cache'],
		],
		'Nette\Routing\RouteList' => [['01']],
		'Nette\Routing\Router' => [['01']],
		'ArrayAccess' => [2 => ['01', 'application.1', 'application.3']],
		'Nette\Application\Routers\RouteList' => [['01']],
		'App\Services\WebDir' => [['02']],
		'App\Services\TempDir' => [['03']],
		'Nette\Application\UI\Presenter' => [2 => ['application.1', 'application.3']],
		'Nette\Application\UI\Control' => [2 => ['application.1', 'application.3']],
		'Nette\Application\UI\Component' => [2 => ['application.1', 'application.3']],
		'Nette\ComponentModel\Container' => [2 => ['application.1', 'application.3']],
		'Nette\ComponentModel\Component' => [2 => ['application.1', 'application.3']],
		'Nette\Application\IPresenter' => [
			2 => ['application.1', 'application.2', 'application.3', 'application.4', 'application.5'],
		],
		'Nette\Application\UI\Renderable' => [2 => ['application.1', 'application.3']],
		'Nette\Application\UI\StatePersistent' => [2 => ['application.1', 'application.3']],
		'Nette\Application\UI\SignalReceiver' => [2 => ['application.1', 'application.3']],
		'Nette\ComponentModel\IContainer' => [2 => ['application.1', 'application.3']],
		'Nette\ComponentModel\IComponent' => [2 => ['application.1', 'application.3']],
		'App\UI\Base\Error\Error4xx\Error4xxPresenter' => [2 => ['application.1']],
		'App\UI\Base\Error\Error5xx\Error5xxPresenter' => [2 => ['application.2']],
		'App\UI\Base\UnsecuredPresenter' => [2 => ['application.3']],
		'App\UI\Base\BasePresenter' => [2 => ['application.3']],
		'App\UI\Front\Home\HomePresenter' => [2 => ['application.3']],
		'NetteModule\ErrorPresenter' => [2 => ['application.4']],
		'NetteModule\MicroPresenter' => [2 => ['application.5']],
		'Contributte\Translation\Latte\Filters' => [['translation.latte.filters']],
		'Latte\Extension' => [['translation.latte.extension']],
		'Contributte\Translation\Latte\TranslatorExtension' => [['translation.latte.extension']],
	];


	public function __construct(array $params = [])
	{
		parent::__construct($params);
	}


	public function createService01(): Nette\Application\Routers\RouteList
	{
		return App\Core\RouterFactory::createRouter();
	}


	public function createService02(): App\Services\WebDir
	{
		return new App\Services\WebDir('/srv/www');
	}


	public function createService03(): App\Services\TempDir
	{
		return new App\Services\TempDir('/srv/temp');
	}


	public function createServiceApplication__1(): App\UI\Base\Error\Error4xx\Error4xxPresenter
	{
		$service = new App\UI\Base\Error\Error4xx\Error4xxPresenter;
		$service->injectPrimary(
			$this->getService('http.request'),
			$this->getService('http.response'),
			$this->getService('application.presenterFactory'),
			$this->getService('01'),
			$this->getService('session.session'),
			templateFactory: $this->getService('latte.templateFactory'),
		);
		$service->invalidLinkMode = 5;
		return $service;
	}


	public function createServiceApplication__2(): App\UI\Base\Error\Error5xx\Error5xxPresenter
	{
		return new App\UI\Base\Error\Error5xx\Error5xxPresenter($this->getService('tracy.logger'));
	}


	public function createServiceApplication__3(): App\UI\Front\Home\HomePresenter
	{
		$service = new App\UI\Front\Home\HomePresenter;
		$service->injectPrimary(
			$this->getService('http.request'),
			$this->getService('http.response'),
			$this->getService('application.presenterFactory'),
			$this->getService('01'),
			$this->getService('session.session'),
			templateFactory: $this->getService('latte.templateFactory'),
		);
		$service->translator = $this->getService('translation.translator');
		$service->invalidLinkMode = 5;
		return $service;
	}


	public function createServiceApplication__4(): NetteModule\ErrorPresenter
	{
		return new NetteModule\ErrorPresenter($this->getService('tracy.logger'));
	}


	public function createServiceApplication__5(): NetteModule\MicroPresenter
	{
		return new NetteModule\MicroPresenter($this, $this->getService('http.request'), $this->getService('01'));
	}


	public function createServiceApplication__application(): Nette\Application\Application
	{
		$service = new Nette\Application\Application(
			$this->getService('application.presenterFactory'),
			$this->getService('01'),
			$this->getService('http.request'),
			$this->getService('http.response'),
		);
		Nette\Bridges\ApplicationDI\ApplicationExtension::initializeBlueScreenPanel(
			$this->getService('tracy.blueScreen'),
			$service,
		);
		$this->getService('tracy.bar')->addPanel(new Nette\Bridges\ApplicationTracy\RoutingPanel(
			$this->getService('01'),
			$this->getService('http.request'),
			$this->getService('application.presenterFactory'),
		));
		SixtyEightPublishers\WebpackEncoreBundle\Bridge\Nette\Application\ApplicationErrorHandler::register($service, $this->getService('encore.entrypoint_lookup_collection'), [
			'_default',
		]);
		return $service;
	}


	public function createServiceApplication__linkGenerator(): Nette\Application\LinkGenerator
	{
		return new Nette\Application\LinkGenerator(
			$this->getService('01'),
			$this->getService('http.request')->getUrl()->withoutUserInfo(),
			$this->getService('application.presenterFactory'),
		);
	}


	public function createServiceApplication__presenterFactory(): Nette\Application\IPresenterFactory
	{
		$service = new Nette\Application\PresenterFactory(new Nette\Bridges\ApplicationDI\PresenterFactoryCallback($this, 5, '/srv/temp/cache/nette.application/touch'));
		$service->setMapping(['Front' => 'App\UI\Front\**Presenter', 'Base' => 'App\UI\Base\*\**Presenter']);
		return $service;
	}


	public function createServiceAsset__package___default(): Symfony\Component\Asset\PackageInterface
	{
		return new Symfony\Component\Asset\PathPackage('', $this->getService('asset.version_strategy._default'));
	}


	public function createServiceAsset__packages(): Symfony\Component\Asset\Packages
	{
		return new Symfony\Component\Asset\Packages($this->getService('asset.package._default'), []);
	}


	public function createServiceAsset__version_strategy___default(
	): Symfony\Component\Asset\VersionStrategy\VersionStrategyInterface
	{
		return new Symfony\Component\Asset\VersionStrategy\JsonManifestVersionStrategy('/srv/www/dist/manifest.json', strictMode: false);
	}


	public function createServiceCache__journal(): Nette\Caching\Storages\Journal
	{
		return new Nette\Caching\Storages\SQLiteJournal('/srv/temp/cache/journal.s3db');
	}


	public function createServiceCache__storage(): Nette\Caching\Storages\DevNullStorage
	{
		return new Nette\Caching\Storages\DevNullStorage;
	}


	public function createServiceContainer(): Nette\DI\Container
	{
		return $this;
	}


	public function createServiceEncore__cache(): Psr\Cache\CacheItemPoolInterface
	{
		return $this->getService('encore.cache.default');
	}


	public function createServiceEncore__cache__default(): Psr\Cache\CacheItemPoolInterface
	{
		return Symfony\Component\Cache\Adapter\PhpArrayAdapter::create(
			'/srv/temp/cache/webpack_encore.cache.php',
			$this->getService('encore.cache.fallback'),
		);
	}


	public function createServiceEncore__cache__fallback(): Symfony\Component\Cache\Adapter\NullAdapter
	{
		return new Symfony\Component\Cache\Adapter\NullAdapter;
	}


	public function createServiceEncore__console__command__warmup_cache(
	): SixtyEightPublishers\WebpackEncoreBundle\Bridge\Symfony\Console\Command\WarmupCacheCommand
	{
		return new SixtyEightPublishers\WebpackEncoreBundle\Bridge\Symfony\Console\Command\WarmupCacheCommand(
			[
			'_default' => '/srv/www/dist/entrypoints.json',
		],
			'/srv/temp/cache/webpack_encore.cache.php',
		);
	}


	public function createServiceEncore__entrypoint_lookup___default(
	): SixtyEightPublishers\WebpackEncoreBundle\Asset\EntryPointLookup
	{
		return new SixtyEightPublishers\WebpackEncoreBundle\Asset\EntryPointLookup(
			'/srv/www/dist/entrypoints.json',
			null,
			'_default',
			true,
		);
	}


	public function createServiceEncore__entrypoint_lookup_collection(
	): SixtyEightPublishers\WebpackEncoreBundle\Asset\EntryPointLookupCollectionInterface
	{
		return $this->getService('encore.entrypoint_lookup_collection.default');
	}


	public function createServiceEncore__entrypoint_lookup_collection__default(
	): SixtyEightPublishers\WebpackEncoreBundle\Asset\EntryPointLookupCollection
	{
		return new SixtyEightPublishers\WebpackEncoreBundle\Asset\EntryPointLookupCollection(
			[
			'_default' => $this->getService('encore.entrypoint_lookup._default'),
		],
			'_default',
		);
	}


	public function createServiceEncore__tag_renderer(): SixtyEightPublishers\WebpackEncoreBundle\Asset\TagRenderer
	{
		return new SixtyEightPublishers\WebpackEncoreBundle\Asset\TagRenderer(
			$this->getService('encore.entrypoint_lookup_collection'),
			$this->getService('asset.packages'),
			[],
			[],
			[],
		);
	}


	public function createServiceHttp__request(): Nette\Http\Request
	{
		return $this->getService('http.requestFactory')->fromGlobals();
	}


	public function createServiceHttp__requestFactory(): Nette\Http\RequestFactory
	{
		$service = new Nette\Http\RequestFactory;
		$service->setProxy([]);
		return $service;
	}


	public function createServiceHttp__response(): Nette\Http\Response
	{
		$service = new Nette\Http\Response;
		$service->cookieSecure = $this->getService('http.request')->isSecured();
		return $service;
	}


	public function createServiceLatte__latteFactory(): Nette\Bridges\ApplicationLatte\LatteFactory
	{
		return new class ($this) implements Nette\Bridges\ApplicationLatte\LatteFactory {
			public function __construct(
				private Container_3dbde46c17 $container,
			) {
			}


			public function create(): Latte\Engine
			{
				$service = new Latte\Engine;
				$service->setTempDirectory('/srv/temp/cache/latte');
				$service->setAutoRefresh(true);
				$service->setStrictTypes(true);
				$service->setStrictParsing(false);
				$service->enablePhpLinter(null);
				$service->setLocale('cs');
				func_num_args() && $service->addExtension(new Nette\Bridges\ApplicationLatte\UIExtension(func_get_arg(0)));
				$service->addExtension(new Nette\Bridges\CacheLatte\CacheExtension($this->container->getService('cache.storage')));
				$service->addExtension($this->container->getService('translation.latte.extension'));
				$service->addExtension(new SixtyEightPublishers\Asset\Bridge\Latte\AssetLatte3Extension($this->container->getService('asset.packages')));
				$service->addExtension(new SixtyEightPublishers\WebpackEncoreBundle\Bridge\Latte\WebpackEncoreLatte3Extension(
					$this->container->getService('encore.entrypoint_lookup_collection'),
					$this->container->getService('encore.tag_renderer'),
				));
				return $service;
			}
		};
	}


	public function createServiceLatte__templateFactory(): Nette\Bridges\ApplicationLatte\TemplateFactory
	{
		$service = new Nette\Bridges\ApplicationLatte\TemplateFactory(
			$this->getService('latte.latteFactory'),
			$this->getService('http.request'),
			cacheStorage: $this->getService('cache.storage'),
			templateClass: null,
		);
		Nette\Bridges\ApplicationDI\LatteExtension::initLattePanel($service, $this->getService('tracy.bar'), false);
		return $service;
	}


	public function createServiceSession__session(): Nette\Http\Session
	{
		$service = new Nette\Http\Session($this->getService('http.request'), $this->getService('http.response'));
		$service->setExpiration('14 days');
		$this->getService('tracy.bar')->addPanel(new Nette\Bridges\HttpTracy\SessionPanel);
		$service->setOptions(['cookieSamesite' => 'Lax']);
		return $service;
	}


	public function createServiceTracy__bar(): Tracy\Bar
	{
		return Tracy\Debugger::getBar();
	}


	public function createServiceTracy__blueScreen(): Tracy\BlueScreen
	{
		return Tracy\Debugger::getBlueScreen();
	}


	public function createServiceTracy__logger(): Tracy\ILogger
	{
		return Tracy\Debugger::getLogger();
	}


	public function createServiceTranslation__configCacheFactory(): Symfony\Component\Config\ConfigCacheFactory
	{
		return new Symfony\Component\Config\ConfigCacheFactory(true);
	}


	public function createServiceTranslation__fallbackResolver(): Contributte\Translation\FallbackResolver
	{
		return new Contributte\Translation\FallbackResolver;
	}


	public function createServiceTranslation__latte__extension(): Contributte\Translation\Latte\TranslatorExtension
	{
		return new Contributte\Translation\Latte\TranslatorExtension($this->getService('translation.translator'));
	}


	public function createServiceTranslation__latte__filters(): Contributte\Translation\Latte\Filters
	{
		return new Contributte\Translation\Latte\Filters($this->getService('translation.translator'));
	}


	public function createServiceTranslation__loaderNeon(): Contributte\Translation\Loaders\Neon
	{
		return new Contributte\Translation\Loaders\Neon;
	}


	public function createServiceTranslation__localeResolver(): Contributte\Translation\LocaleResolver
	{
		$service = new Contributte\Translation\LocaleResolver($this);
		$service->addResolver('Contributte\Translation\LocalesResolvers\Session');
		$service->addResolver('Contributte\Translation\LocalesResolvers\Router');
		$service->addResolver('Contributte\Translation\LocalesResolvers\Parameter');
		$service->addResolver('Contributte\Translation\LocalesResolvers\Header');
		return $service;
	}


	public function createServiceTranslation__localeResolverHeader(): Contributte\Translation\LocalesResolvers\Header
	{
		return new Contributte\Translation\LocalesResolvers\Header($this->getService('http.request'));
	}


	public function createServiceTranslation__localeResolverParameter(
	): Contributte\Translation\LocalesResolvers\Parameter
	{
		return new Contributte\Translation\LocalesResolvers\Parameter($this->getService('http.request'));
	}


	public function createServiceTranslation__localeResolverRouter(): Contributte\Translation\LocalesResolvers\Router
	{
		return new Contributte\Translation\LocalesResolvers\Router($this->getService('http.request'), $this->getService('01'));
	}


	public function createServiceTranslation__localeResolverSession(): Contributte\Translation\LocalesResolvers\Session
	{
		return new Contributte\Translation\LocalesResolvers\Session(
			$this->getService('http.response'),
			$this->getService('session.session'),
		);
	}


	public function createServiceTranslation__tracyPanel(): Contributte\Translation\Tracy\Panel
	{
		$service = new Contributte\Translation\Tracy\Panel($this->getService('translation.translator'));
		$service->addLocaleResolver($this->getService('translation.localeResolverSession'));
		$service->addLocaleResolver($this->getService('translation.localeResolverRouter'));
		$service->addLocaleResolver($this->getService('translation.localeResolverParameter'));
		$service->addLocaleResolver($this->getService('translation.localeResolverHeader'));
		$service->addResource('/srv/App/lang/menu.de_DE.neon', 'de_DE', 'menu');
		$service->addResource('/srv/App/lang/base.en_US.neon', 'en_US', 'base');
		$service->addResource('/srv/App/lang/base.cs_CZ.neon', 'cs_CZ', 'base');
		$service->addResource('/srv/App/lang/menu.cs_CZ.neon', 'cs_CZ', 'menu');
		$service->addResource('/srv/App/lang/contacts.de_DE.neon', 'de_DE', 'contacts');
		$service->addResource('/srv/App/lang/home.cs_CZ.neon', 'cs_CZ', 'home');
		$service->addResource('/srv/App/lang/about.de_DE.neon', 'de_DE', 'about');
		$service->addResource('/srv/App/lang/about.cs_CZ.neon', 'cs_CZ', 'about');
		$service->addResource('/srv/App/lang/contacts.cs_CZ.neon', 'cs_CZ', 'contacts');
		$service->addResource('/srv/App/lang/base.de_DE.neon', 'de_DE', 'base');
		return $service;
	}


	public function createServiceTranslation__translator(): Contributte\Translation\Translator
	{
		$service = new Contributte\Translation\Translator(
			$this->getService('translation.localeResolver'),
			$this->getService('translation.fallbackResolver'),
			'cs',
			'/srv/temp/cache/translation',
			true,
			[],
		);
		$service->setLocalesWhitelist(['cs', 'en', 'de']);
		$service->setConfigCacheFactory($this->getService('translation.configCacheFactory'));
		$service->setFallbackLocales(['cs_CZ', 'cs']);
		$service->returnOriginalMessage = true;
		$service->addLoader('neon', $this->getService('translation.loaderNeon'));
		$service->addResource('neon', '/srv/App/lang/menu.de_DE.neon', 'de_DE', 'menu');
		$service->addResource('neon', '/srv/App/lang/base.en_US.neon', 'en_US', 'base');
		$service->addResource('neon', '/srv/App/lang/base.cs_CZ.neon', 'cs_CZ', 'base');
		$service->addResource('neon', '/srv/App/lang/menu.cs_CZ.neon', 'cs_CZ', 'menu');
		$service->addResource('neon', '/srv/App/lang/contacts.de_DE.neon', 'de_DE', 'contacts');
		$service->addResource('neon', '/srv/App/lang/home.cs_CZ.neon', 'cs_CZ', 'home');
		$service->addResource('neon', '/srv/App/lang/about.de_DE.neon', 'de_DE', 'about');
		$service->addResource('neon', '/srv/App/lang/about.cs_CZ.neon', 'cs_CZ', 'about');
		$service->addResource('neon', '/srv/App/lang/contacts.cs_CZ.neon', 'cs_CZ', 'contacts');
		$service->addResource('neon', '/srv/App/lang/base.de_DE.neon', 'de_DE', 'base');
		return $service;
	}


	public function initialize(): void
	{
		// di.
		(function () {
			$this->getService('tracy.bar')->addPanel(new Nette\Bridges\DITracy\ContainerPanel($this));
		})();
		// http.
		(function () {
			$response = $this->getService('http.response');
			$response->setHeader('X-Powered-By', 'Nette Framework 3');
			$response->setHeader('Content-Type', 'text/html; charset=utf-8');
			$response->setHeader('X-Frame-Options', 'SAMEORIGIN');
			Nette\Http\Helpers::initCookie($this->getService('http.request'), $response);
		})();
		// php.
		(function () {
			ini_set('date.timezone', (string) ('Europe/Prague'));
		})();
		// session.
		(function () {
			$this->getService('session.session')->start();
		})();
		// tracy.
		(function () {
			if (!Tracy\Debugger::isEnabled()) { return; }
			$logger = $this->getService('tracy.logger');
		})();
		$this->getService('tracy.bar')->addPanel($this->getService('translation.tracyPanel'));
	}


	protected function getStaticParameters(): array
	{
		return [
			'environment' => 'development',
			'appDir' => '/srv/App',
			'wwwDir' => '/srv/www',
			'vendorDir' => '/srv/vendor',
			'rootDir' => '/srv',
			'debugMode' => true,
			'productionMode' => false,
			'consoleMode' => false,
			'tempDir' => '/srv/temp',
		];
	}


	protected function getDynamicParameter(string|int $key): mixed
	{
		return match($key) {
			'env' => null,
			default => parent::getDynamicParameter($key),
		};
	}


	public function getParameters(): array
	{
		array_map($this->getParameter(...), ['env']);
		return parent::getParameters();
	}
}
