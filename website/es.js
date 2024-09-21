exports.data = {
	Version: '2.9.6',
	LastUpdate: '21.09.2024',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://sefinek.net)',
		'ChatGPT (https://chat.openai.com)',
		'MayiVT (https://github.com/MayiVT)'
	]
};

// Main
exports.default = {
	And: 'y',
	From: 'desde',
	In: 'en',

	Back: 'Atrás',
	GoBack: 'Volver',
	GoBackTo: 'Regresar hasta {0}',
	GoToHomePage: 'Volver a la pagina principal',
	Next: 'Siguiente',

	DiscordServer: 'Servidor de Discord',
	DiscordServerTooltip: 'Invitación a nuestro servidor de Discord',

	YourBrowserDoesNotSupportVideoTag: 'Your browser does not support the video tag.',
	YourBrowserDoesNotSupportAudioTag: 'Your browser does not support the audio tag.',

	tooltips: {
		OfficialDiscordServer: 'Servidor oficial de Discord',
		GitHubRepositories: 'Repositorios de GitHub'
	}
};

// Errors
exports.errors = {
	400: {
		BadRequest: 'Error 400: Petición Inválida',
		InvalidURL: 'La URL de retorno es inválida.',
		ReferrerURL: 'Tú URL de referencia',
		CorrectRefURL: 'URL correcta'
	},

	wrongOs: {
		DeviceIsNotSupported: 'El dispositivo no es compatible',
		OperatingSysIsNotSupported: 'We\'re sorry! Your operating system {0}, is not yet supported.',
		ViewSupportedSystems: 'View supported systems »'
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'No se puede encontrar el archivo ZIP en el servidor',
		NewUpdateIsComing: '¿Se acerca una nueva actualización? Quizás...\nNo te preocupes, puedes intentar de nuevo o informar de este problema en nuestro servidor de Discord.'
	}
};

// GET /genshin-stella-mod
exports.home = {
	Header: 'Genshin Stella Mod - Step into a New World',
	Text1: 'Enhanced graphics, meticulously crafted shaders, impressive FPS unlocking, and mods provide players with an even better gaming experience than ever before!',
	Text2: 'Rediscover the world of Teyvat with new graphics that make your gameplay more realistic. A dedicated launcher streamlines the entire process, allowing players to jump into the action quickly and easily.',
	FinalText: 'Don\'t wait, download it now! Take your gameplay to the next level. Immerse yourself in the enhanced world of Teyvat and create unforgettable moments. Have fun!',

	Download: 'Descargar',
	DownloadTooltip: 'Haz clic aquí para descargar el instalador de 64 bits para Windows 10 y 11.',

	StelaModPlusTooltip: '¡Obtén acceso a la versión de pago de Stella Mod Plus y disfruta de numerosos beneficios y experiencias de juego mejoradas!',

	Documentation: 'Documentación',
	DocumentationTooltip: 'Consulta los requisitos del sistema, configuraciones de juego recomendadas y más.',

	Gallery: 'Galería',
	GalleryTooltip: 'Mira las capturas de pantalla del juego con ReShade inyectado.',

	Videos: 'Videos',
	VideosTooltip: 'Mira nuestros videos sobre el mod y el programa de lanzamiento.',

	Statistics: 'Statistics',
	StatisticsTooltip: 'Check how many people are currently playing Genshin Impact with the Stella mod activated.',

	Feedback: 'Comentarios',
	FeedbackTooltip: 'Comparte tu opinión sobre mi trabajo y Stella Mod.',

	Support: 'Soporte',
	SupportTooltip: 'Haz clic aquí si necesitas ayuda.',

	MainPage: 'Página principal',
	MainPageTooltip: 'Inicio - Sitio web oficial de Sefinek',

	PleaseSupportMe: 'Por favor, apoya mi trabajo',
	SupportMyWork: 'Apoya mi trabajo',

	DownloadingData: 'Descargando datos...',
	Version: 'Versión',
	TheVersionWithoutCaps: 'la versión',
	DownloadCount: 'Recuento de descargas',
	LastDownload: 'Última descarga',

	FeedbackOnTrustpilot: 'Feedback on Trustpilot',

	captchaModal: {
		AreYouARobot: 'Are you a robot?',
		FailedToVerifyCaptcha: 'Failed to verify captcha: {0}',
		FailedToVerifyCaptchaStatusCode: 'Failed to verify captcha (status code: {0}). Reload the website and try again.'
	},

	mirrorModal: {
		SelectDownloadServer: 'Select the download server',
		Companies: 'Companies',
		Countries: 'Countries',
		LauncherVersion: 'Launcher version:',
		MirrorsAreCurrentlyUnavailable: 'Mirrors are currently unavailable for this category.',
		ChecksumHasBeenSuccessfullyCopied: 'The {0} checksum has been successfully copied to the clipboard!',
		FailedToCopyChecksumTryAgain: 'Failed to copy the {0} checksum to the clipboard. Please try again.'
	},

	finalModal: {
		ThankYouForDownloading: 'Thank you for downloading',
		BecomeAStellaModSubscriber: 'Become a Stella Mod Plus subscriber to gain access to additional benefits such as the ability to use 3DMigoto, FPS Unlocker, and ReShade simultaneously, a large collection of error-free mods, enhanced security (blocking telemetry and analytics), a package of the latest shaders, an add-on to prevent filter overlays on the user interface (UI), Ray Tracing presets, and much more!',
		JoinOurDiscordServerToReceiveNotifications: 'Join our Discord server to receive notifications about the latest updates, features, and other announcements. Contact the creator if you have any questions or encounter any issues. We are always ready to help. Wishing you a great day or night!',
		IfYouReEnjoyingStellaModConsiderLeavingAReview: 'Leave a review at {a}trustpilot.com{/a} after testing the software!',
		TheTotalNumberOfDownloadsNowIs: 'The total number of downloads is now',
		NoProblem: 'No problem'
	},

	tooltips: {
		PageViews: 'Page views. Statistics have been collected since January 19, 2024.',
		ShareYourFeedbackOnTrustpilot: 'Share your feedback on Trustpilot! We would greatly appreciate it.'
	}
};

// GET /genshin-stella-mod/gallery
exports.gallery = {
	GalleryPage: 'Galería - Página número',
	GalleryCompareReleases: 'Galería - Comparar lanzamientos:',
	ScreenshotsAreAvailableInHighQuality: 'Las capturas de pantalla están disponibles en alta calidad, por lo que podrián tardar un poco en cargar.',
	WebsiteIsNotSupportedOnMobileDevices: 'Este sitio web no es compatible en dispositivos moviles.',
	SomeImageCanBeOutdated: '¡Algunas imágenes pueden estar desactualizadas!',

	SeeComparesFromTheOtherVersions: 'Ver comparaciones sobre las nuevas versiones',
	SeeTheComparisonBetween: 'Ver la comparación entre...',
	ThePageYouAreCurrentlyOnDisplaysAComparison: 'La página en la que estás actualmente muestra una comparación de distintas versiones de lanzamiento',
	OldVersion: 'Versión antigua',
	NewVersion: 'Nueva versión',

	WithMod: 'Con mods',
	WithoutMod: 'Sin mods',

	BonusScreenshot: 'Captura de pantalla extra',

	tooltips: {
		GoBackToMainGalleryPage: 'Go back to main gallery page'
	}
};

// GET /genshin-stella-mod/feedback
exports.feedback = {
	LeaveYourFeedback: 'Deja tus comentarios',
	IfYouLikeThisProjectSupportMe: 'Si te ha gustado el proyecto, considera suscribirte a mi {1}canal de Youtube{/1}, dándole una estrella {2}en GitHub{/2} o {3}ayudándome{/3} de otras maneras.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Además, si tienes algún comentario o sugerencia, no dudes en utilizar la función de chat para enviarlos directamente.',

	btn: {
		BelowYTVideo: 'Debajo de mi video de YouTube',
		OnTheDiscordServer: 'En el servidor de Discord'
	},

	tooltips: {
		ClickHereToGoToTheYTPage: 'Haz clic aquí para ir a la página de YouTube.',
		GiveAStarToMyReposOnGitHub: 'Dale una estrella a mis repositorios en GitHub, a los que te gusten.'
	}
};

// GET /genshin-stella-mod/support
exports.support = {
	SomeQuestions: '¿Tienes alguna pregunta? ¿Necesitas soporte?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: '¿Tienes algún problema con Stella Mod o solo una pregunta? ¡Si es así, no dudes en contactarnos! El equipo está aquí para asistirte con cualquier pregunta o inquietud.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Ya sea que necesites ayuda para instalar el mod o tengas preguntas sobre sus características, estamos aquí para ayudarte.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Ten en cuenta que nuestra comunidad también está lista para responder a tus preguntas. Para hacerlo, únete a nuestro servidor de Discord o crea un nuevo issue en GitHub.',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Simplemente crea una cuenta o inicia sesión en Sefinek Patron Center y {a}envía un ticket{/a} en polaco o inglés. Ten en cuenta que Stella Mod no está afiliado con Hoyoverse.',

	CreatANewTicket: 'Crear un nuevo ticket',
	JoinToDiscordServer: 'Unirse al servidor de Discord',
	SendAnEmail: 'Enviar un correo electrónico',

	tooltips: {
		CreateANewTicket: 'Haz clic aquí para crear un nuevo ticket en el sitio web de SPC.',
		JoinOurOfficialDiscordServer: 'Únete a nuestro servidor oficial de Discord.',
		SendAnEmailToTheDeveloper: 'Envía un correo electrónico al desarrollador si esperas una respuesta más detallada.',
		ReturnTo: 'Volver a: Genshin Stella Mod - Aquí comienza tu aventura.'
	}
};

// GET /genshin-stella-mod/videos
exports.videos = {
	WatchVideosOnYT: 'Ver videos en YouTube',
	IfYouWantToRecordNewVideo: 'If you want to record and upload a video about Stella Mod to YouTube, please contact me. The link to your video will be added to this page.',
	DeprecatedMovies: 'Videos obsoletos',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'Estos videos pertenecen a versiones anteriores de Stella Mod y se consideran obsoletos.',
	FirstModRelease: 'Primer lanzamiento del mod',
	Gameplay: 'Gameplay'
};

// GET /genshin-stella-mod/stats
exports.stats = {
	ToggleBlur: 'Toggle blur',
	ToggleShadows: 'Toggle shadows',
	ToggleBorder: 'Toggle border',
	ToggleBackground: 'Toggle background',

	LiveStats: 'Live stats',
	OnlineNow: 'Online now',
	InTheGame: 'In the game',
	AllDownloadsNow: 'All downloads now',
	Player: 'player',
	Players: 'players',

	BelowYouFindTheStatsOfStellaMod: 'Below you will find the statistics of Stella Mod. Timezone: Europe/Warsaw GMT+01:00 (Poland). Have a nice day!',

	PerCountry: 'Per country',
	PerHour: 'Per hour',
	PerDay: 'Per day',
	PerMonth: 'Per month',
	PerYear: 'Per year',

	All: 'All',
	Unique: 'Unique',
	FirstOpens: 'First opens',
	Peak: 'Peak',
	Connections: 'Connections',
	NumberOfGameLaunches: 'Number of game launches',
	FullDate: 'Full date',

	Version: 'Version',
	NumerOfDownloads: 'Number of downloads',

	DownloadsPerCountry: 'Downloads per country',
	DownloadsPerCountryAll: 'Downloads per country [All]',
	DownloadsPerVersionAll: 'Downloads per version [All]',
	DownloadsPerVersionUnique: 'Downloads per version [Unique]',
	DownloadsPerDayAll: 'Downloads per day [All]',
	DownloadsPerDayUnique: 'Downloads per day [Unique]',
	DownloadsPerMonthAll: 'Downloads per month [All]',
	DownloadsPerMonthUnique: 'Downloads per month [Unique]',
	DownloadsPerYearAll: 'Downloads per year [All]',
	DownloadsPerYearUnique: 'Downloads per year [Unique]',

	StellaModDownloadsHeader: '📥 Stella Mod downloads',
	StellaModDownloadsText: 'Here are the download statistics for Stella Mod directly from our official website. The history of some data may be incomplete, as the collection of statistics was introduced a significant time after the global release of Stella Mod.<br>Always ensure that you download Stella Mod from a trusted source such as <a href=\'https://sefinek.net\'>sefinek.net</a>.',
	TotalDownloads: '🔢 Total downloads',
	LastDownload: '⏰ Last download',
	YourTimezone: '🪐 Your timezone',

	StellaModLauncherStatsHeader: '😻 Stella Mod Launcher stats',
	StellaModLauncherStatsText: 'In this category, we present detailed statistics related to the number of times the Stella Mod Launcher program has been initiated. This includes data on how frequently the application is opened, and any notable patterns in user engagement with the launcher.',
	AllStellaLauncherOpens: 'All Stella Launcher opens',
	UniqueStellaLauncherOpens: 'Unique Stella Launcher opens',
	OpensPerCountry: 'Opens per country',
	OpensPerVersion: 'Opens per version',
	OpensPerSysVersion: 'Opens per system version',
	OpensPerSysBuild: 'Opens per system build',

	OnlineUsersWSHeader: '🌍 Online users - WebSocket',
	OnlineUsersWSText: 'This section provides a comprehensive overview of user connectivity through our WebSocket server, offering real-time insights into active users. Explore dynamic statistics that reveal the current online user count, peak concurrency levels, and geographical distribution of users. Additionally, temporal patterns of usage are visualized, showcasing trends in daily, hourly, monthly, and yearly online activity.',
	Online: '🔑 Online',
	Peak1: '🍭 Peak',
	OnlinePerCountry: 'Online per country',
	OnlinePerHour: 'Online per hour',
	OnlinePerDay: 'Online per day',
	OnlinePerMonth: 'Online per month',
	OnlinePerYear: 'Online per year',

	PlayersInTheGameHeader: '🎮 Players in the game',
	PlayersInTheGameText: 'Discover how many individuals are currently engaged in the game with the Stella Mod activated. Rest assured, the Stella Mod Launcher operates transparently, performing no undesired actions in the background without your knowledge. This feature ensures a seamless gaming experience, enhancing your play with added functionalities while maintaining a high standard of privacy and security. With Stella Mod, players gain access to a suite of enhancements that elevate the gaming experience. This real-time statistic reflects the popularity and trust in Stella Mod within our community, showcasing the number of active users who have chosen to bring this additional layer of innovation into their gaming sessions.',
	PlayingNow: '💙 Playing now',
	Peak2: '⬆️ Peak',

	WsConnectionsHeader: '🌍 WebSocket connections and operations',
	WsConnectionsText: 'Familiarize yourself with WebSocket metrics in this section, which includes charts displaying the frequency of messages and heartbeats on an hourly, daily, monthly, and yearly basis.',
	Broadcast: 'Broadcast',
	Heartbeats: 'Heartbeats',

	CryptographicOperationsHeader: '🔠 Cryptographic operations',
	CryptographicOperationsText: 'This section offers a comprehensive overview of cryptographic activities in our systems, presenting statistical data related to encryption and decryption processes. Visitors can view charts that display the frequency and success of cryptographic operations across various timeframes. Cryptography is essential in applications and communication for ensuring data confidentiality, integrity, and authenticity, thereby protecting against unauthorized access and cyber threats. It is pivotal in securing digital transactions and maintaining the privacy of sensitive information.',
	Encryption: '🧶 Encryption',
	Decryption: '🔧 Decryption',
	Misc: '🧵 Misc',

	PerOneHour: 'Per hour',
	PerOneDay: 'Per day',
	PerOneMonth: 'Per month',
	PerOneYear: 'Per year',

	ErrorRatePerDay: 'Error rate per day'
};

// GET /genshin-stella-mod/docs
exports.docs = {
	TableOfContents: 'Table of Contents',
	1: {
		Introduction: '{0}. {1} Introduction',
		Requirements: '{0}. {1} Requirements',
		WhatIs: '{0}. {1} What is...',
		FAQ: '{0}. {1} FAQ',
		Support: '{0}. {1} Support',
		TermsOfUse: '{0}. {1} Terms of use',
		PrivacyPolicy: '{0}. {1} Privacy policy',
		Installation: '{0}. {1} Installation',
		Compilation: '{0}. {1} Compilation',
		HowToAvoidABan: '{0}. {1} How to avoid a ban?'
	},

	Changelogs: 'Changelogs',
	2: {
		Versions: '{0}. {1} Versions {2}.x.x',
		DeprecatedReleases: '{0}. {1} Deprecated releases'
	},

	LicensesAndCredits: 'Licenses & Credits',
	3: {
		StellaModLicense: '{0}. {1} Stella Mod license',
		ReShadeLicense: '{0}. {1} ReShade license',
		FPSUnlockerLicense: '{0}. {1} FPS Unlocker license',
		MigotoLicense: '{0}. {1} 3DMigoto license',
		Credits: '{0}. {1} Credits',
		Contributors: '{0}. {1} Contributors',
		Attributions: '{0}. {1} Attributions'
	},

	DocumentCreationDate: 'Document creation date: {0}',
	LastUpdate: 'Last update: {0}',
	DocumentSize: 'File size: {0}',
	bytes: 'bytes'
};

// GET /genshin-stella-mod/repositories
exports.github = {
	AllReposOnGithub: 'All repositories on GitHub',
	IfYouWantToBecomeContributor: 'If you want to become contributor, just create a new {a}Pull Request{/a}. Thank you very much and happy coding!',

	Translations: 'Translations',
	Resources: 'Resources',
	Documentation: 'Documentation',
	More: 'More »',

	Deprecated: 'Deprecated',

	InstallationWizard: 'Installation wizard',
	UnlockedReShade: 'Unlocked ReShade'
};

// GET /genshin-stella-mod/subscription
exports.subscription = {
	ChooseYourSubscriptionTier: 'Elige tu grado de suscripción',
	IfYouAreInterestedInTheBenefits: 'Si estás interesado en los beneficios, por favor explora todos los grados de suscripción para ver cual se rige más a tus preferencias. Con suerte encontrarás a alguno que sea de tu interés!',
	IfYouHaveAnyQuestions: 'Si tienes alguna pregunta, no dudes en contactarnos mediante discord o correo electrónico. Puedes encontrar la información de contacto en la pagina principal.',

	Recommended: 'Recommended',
	tiers: {
		1: {
			name: 'Little Kitten',
			description: 'Basic tier for those who just want to support the project. This is a good solution, for example, if you stopped playing Genshin Impact and no longer need the benefits from the game, but still want to support the project voluntarily.'
		},
		2: {
			name: 'Favorite Cat',
			description: 'Medium tier that offers most of the basic benefits associated with the game Genshin Impact. Ideal for players who want to enjoy additional modifications and enhancements in the game.'
		},
		3: {
			name: 'Safety Kitten',
			description: 'Advanced tier for trusted users, which offers special benefits such as systems to protect against bans, giveaways for Genshin Impact accounts, and a custom appearance for the Windows Terminal interface.'
		},
		4: {
			name: 'Keyboard Cat',
			description: 'For players who want to maximize the capabilities of their devices and enjoy the game without any disruptions. This option offers computer optimization services (via TeamViewer or AnyDesk), technical support, and the ability to use batch files in Stella Mod Launcher.'
		},
		5: {
			name: 'Cute Kitty',
			description: 'Provides access to all the benefits offered in lower tiers, and also allows activation on the most devices. Ideal for players who appreciate the work of Stella Mod creator and want to support further development and the project’s server infrastructure.'
		}
	},

	UnknownBenefit: 'Unknown benefit',

	prices: {
		MonthlyPrice: 'Precio mensual',
		Every3Months: 'Cada 3 meses',
		YearlyPrice: 'Precio anual'
	},

	Everything: {
		FromTheTier: 'Todo sobre el grado {0}',
		FromTheTier12: 'Todo sobre los grados 1 y 2',
		FromTheTier12And3: 'Todo sobre los grados 1, 2 y 3',
		FromAllTheTiers: 'Todo sobre todos los grados'
	},

	TierName: 'Tier name',
	benefitsFull: {
		RoleOnTheDiscordServer: 'Role on the Discord server',
		VisibilityOnTheSubscriberList: 'Visibility on the subscriber list',
		NoAdsOnTheWebsiteForPatrons: 'No ads on the website for patrons (SPC)',
		PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',
		CompletePostArchive: 'Complete post archive',

		RayTracingForGenshin: 'Ray Tracing for Genshin',
		AbilityToUseMods: 'Ability to use mods in the game (enhances fun)',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods without any bugs',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',
		FasterDownloadServers: 'Faster download servers',

		CarefullyDesignedSecuritySystem: 'Carefully designed security system',
		MuchGreaterPrivacy: 'Much greater privacy',
		VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
		NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
		PhotosAndInterestingVideosOfTheDevsCats: 'Photos and interesting videos of the developer\'s cats',

		AbilityToUseBatchFiles: 'Ability to use batch files in Stella',
		OptimizationOfYourComputerForBestPerformance: 'Optimization of your PC for the best performance',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',

		ActivationPossibleOn: 'Activation possible on {u}{0} devices{/u}'
	},

	CompareAvailablePlans: 'Compare available plans',
	benefitsShort: {
		IntDevice: '{0} device',
		IntDevices: '{0} devices',

		RoleOnTheDiscordServer: 'Role on the Discord server',
		VisibilityOnTheSubscriberList: 'Visibility on the subscriber list',
		NoAdsOnTheWebsiteForPatrons: 'No ads on the website for patrons',
		PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',
		CompletePostArchive: 'Complete post archive',

		RayTracingForGenshin: 'Ray Tracing for Genshin',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods',
		AbilityToUseMods: 'Ability to use mods',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',
		FasterDownloadServers: 'Faster download servers',

		CarefullyDesignedSecuritySystem: 'Carefully designed security system',
		MuchGreaterPrivacy: 'Much greater privacy',
		VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
		NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
		PhotosAndInterestingVideosOfTheDevsCats: 'Dev\'s cat photos & interesting videos',

		AbilityToUseBatchFiles: 'Usage of batch files',
		OptimizationOfYourComputerForBestPerformance: 'Optimization of your computer',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
		ActivationPossibleOn: 'Activation possible on'
	},

	SubscribeNow: 'Subscribete ahora',
	ChangeYourTier: 'Cambia tu plan',

	SubscriptionIsTreatedAsVoluntarySupport: 'Subscription is treated as voluntary support, not as a purchase of a service or product. The benefits you receive are solely as a token of appreciation.',
	IfYouWishYouCanContinueToUseTheFreeVersionAtNoCost: 'If you wish, you can continue to use the free version at no cost. The decision is entirely up to you.',

	Crypto: 'Crypto',
	IfYouWantToMakeAPaymentUsingCrypto: 'If you want to make a payment using cryptocurrency, please contact the developer.',
	IAcceptPaymentsOnlyOnBinance: 'I accept payments only on Binance.',
	CloseModal: 'Close modal',

	PaymentSystem: {
		Header: 'Sistema de pago',
		1: 'Nos complace anunciar que nuestro sistema de pago funciona con {0}. Con Stripe, puedes hacer pagos de forma segura, sabiendo que tu información de pago está gestionada de la manera más segura.',
		2: 'Stripe es una plataforma de procesamiento de pago reconocida globalmente y seguura, que promete rapidez y seguridad en las transaciones de nuestros usuarios. Aunque estés comprando productos, suscribiendote a servicios o haciendo donaciones, la robusta infraestructura de Stripe asegura una experiencia de pagos segura y sin problemas.',
		3: 'Tenga la seguridad de que sus datos confidenciales de pago están encriptados y protegidos durante todo el proceso de pago. Su privacidad y seguridad son nuestras principales prioridades.'
	},

	AcceptedPaymentMethods: 'Accepted payment methods',
	IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer: 'If you wish to make a payment using cryptocurrencies or a direct bank transfer, please contact the developer.',
	BankName: 'Bank Name:',
	AccountNumber: 'Account Number:',
	SWIFTOrBICCode: 'SWIFT/BIC Code:',
	IBAN: 'IBAN:',
	AskTheAdministratorForIt: 'Ask the administrator for it',
	PleaseNoteThatTheBuyerIsResponsibleForCoveringAnyBankFees: 'Please note that the buyer is responsible for covering any bank fees associated with any transaction.',

	RulesForUsingOurBenefitsAndPatronage: {
		HeaderText1: 'Rules for using our benefits and patronage',
		SubText1: 'We would like to express our heartfelt gratitude to all our subscribers for their support and trust. Before proceeding with the Stella Mod Plus subscription, please take a moment to familiarize yourself with a few important guidelines.',

		HeaderText2: 'Benefits are intended exclusively for subscribers:',
		SubText2: 'Each benefit redemption token is assigned to a subscriber and should be kept confidential. Please do not share your benefits with others or distribute them online. Utilize them solely for your personal use and in accordance with our guidelines.',

		HeaderText3: 'Subscribing does not equate to purchasing the 3DMigoto software:',
		SubText3: 'By becoming a subscriber to Stella Mod Plus, you are not acquiring 3DMigoto as a digital product for purchase. Instead, as our subscriber, you solely gain access to use 3DMigoto within the Stella Mod Launcher application.',

		Footer: 'We appreciate your presence in our community and your support for our work. If you have any questions or concerns, please {a}contact us{/a}. Your participation and understanding of these rules are incredibly important to our project.'
	},

	request: {
		WeAreProcessingYourRequest: 'We are processing your request...',
		SubscribingInProgress: 'We need a little bit of time to get everything ready. Please remain on this page and give us a moment!\nShortly, we will redirect you to a secure payment page where you can safely complete your transaction. ^w^',
		ChangingTheTierInProgress: 'We need some time to change your tier! Give us a moment, and we promise everything will go smoothly. ^w^'
	}
};