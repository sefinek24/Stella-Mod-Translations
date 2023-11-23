module.exports.data = {
	Version: '2.5.0',
	LastUpdate: '23.11.2023',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://github.com/sefinek24)',
		'ChatGPT (https://chat.openai.com)',
	],
};

// Main
module.exports.default = {
	And: 'y',
	From: 'desde',
	In: 'en',

	Back: 'Atrás',
	GoBack: 'Go back',
	GoBackTo: 'Go back to {0}',
	GoToHomePage: 'Go to home page',
	Next: 'Siguiente',

	DiscordServer: 'Servidor de Discord',
	DiscordServerTooltip: 'Invitación a nuestro servidor de Discord',

	tooltips: {
		OfficialDiscordServer: 'Servidor oficial de Discord',
		GitHubRepositories: 'Repositorios de GitHub',
	},
};

// Errors
module.exports.errors = {
	400: {
		BadRequest: 'Error 400: Petición Inválida',
		InvalidURL: 'La URL de retorno es inválida.',
		ReferrerURL: 'Tú URL de referencia',
		CorrectRefURL: 'URL Correcta',
	},

	wrongOs: {
		DeviceIsNotSupported: 'El dispositivo no es compatible',
		SorryYourDeviceIsNotSupported: 'Lo sentimos. Tu dispositivo no es compatible.',
		ViewSupportedOperatingSystems: 'Ver los sistemas operativos suportados compatibles.',
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'No se puede encontrar el archivo ZIP en el servidor',
		NewUpdateIsComing: '¿Se acerca una nueva actualización? Quizás...\nNo te preocupes, puedes intentar de nuevo o informar de este problema en nuestro servidor de Discord.',
	},
};

// GET /genshin-impact-reshade
module.exports.home = {
	Header: 'Genshin Impact Stella Mod creado por Sefinek',
	Text1: 'Características seguras y únicas como mejoras de ReShade, gráficos personalizados cuidadosamente elaborados y desbloqueo impresionante de FPS brindan a los jugadores la mejor experiencia en el juego.',
	Text2: '3DMigoto lleva el mod a un nivel aún más alto, proporcionando una experiencia inmersiva. Además, nuestro propio lanzador simplifica todo el proceso, ayudando a los jugadores a sumergirse rápidamente en la acción.',
	FinalText: '¡No esperes! ¡Sumérgete ahora en el mundo mejorado de Teyvat y crea momentos inolvidables! ¡Diviértete!',

	Download: 'Descargar',
	DownloadTooltip: 'Haz clic aquí para descargar el instalador de 64 bits para Windows 10 y 11.',

	StelaModPlusTooltip: '¡Obtén acceso a la versión de pago de Stella Mod Plus y disfruta de numerosos beneficios y experiencias de juego mejoradas!',

	Documentation: 'Documentación',
	DocumentationTooltip: 'Consulta los requisitos del sistema, configuraciones de juego recomendadas y más.',

	Gallery: 'Galería',
	GalleryTooltip: 'Mira las capturas de pantalla del juego con ReShade inyectado.',

	Videos: 'Videos',
	VideosTooltip: 'Mira nuestros videos sobre el mod y el programa de lanzamiento.',

	Feedback: 'Comentarios',
	FeedbackTooltip: 'Comparte tu opinión sobre mi trabajo y Stella Mod.',

	Support: 'Soporte',
	SupportTooltip: 'Haz clic aquí si necesitas ayuda.',

	MainPage: 'Página principal',
	MainPageTooltip: 'Inicio - Sitio web oficial de Sefinek',

	PleaseSupportMe: 'Por favor, apoya mi trabajo',
	SupportMyWork: 'Apoya mi trabajo',
	SupportMe: 'Apóyame',

	DownloadingData: 'Descargando datos...',
	Version: 'Versión',
	TheVersionWithoutCaps: 'la versión',
	DownloadCount: 'Recuento de descargas',
	LastDownload: 'Última descarga',

	modal: {
		ThankYouForDownloading: 'Gracias por descargar',
		BecomeMyPatronToGainMoreBenefits: '¡Conviértete en mi patrón para obtener más beneficios, como la capacidad de usar 3DMigoto junto con FPS Unlocker & ReShade + una gran colección de mods sin errores + una colección de los últimos 300 shaders + un complemento que evita que los filtros se superpongan a la interfaz de usuario (UI) + preset de trazado de rayos y mucho más!',
		JoinOurDiscordServerToReceiveNotifications: 'Únete a nuestro servidor de Discord para recibir notificaciones sobre las últimas actualizaciones, características y otros anuncios. No dudes en ponerte en contacto con el creador si tienes alguna pregunta o te encuentras con algún problema.',
		IfYouReEnjoyingStellaModConsiderLeavingAReview: '¡Deja una reseña en {a}trustpilot.com{/a} después de probar el software!',
		WishingYouAWonderfulDayOrNight: '¡Te deseamos un maravilloso día o noche!',
		TheTotalNumberOfDownloadsNowIs: 'El número total de descargas ahora es',
		NoProblem: 'Sin problema',
	},

	tooltips: {
		PageViews: 'Vistas de página',
	},
};

// GET /genshin-impact-reshade/gallery
module.exports.gallery = {
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
		GoBackToMainGalleryPage: 'Go back to main gallery page',
	},
};

// GET /genshin-impact-reshade/feedback
module.exports.feedback = {
	LeaveYourFeedback: 'Deja tus comentarios',
	IfYouLikeThisProjectSupportMe: 'Si te ha gustado el proyecto, considera suscribirte a mi {1}canal de Youtube{/1}, dándole una estrella {2}en GitHub{/2} o {3}ayudándome{/3} de otras maneras.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Además, si tienes algún comentario o sugerencia, no dudes en utilizar la función de chat para enviarlos directamente.',

	btn: {
		BelowYTVideo: 'Debajo de mi video de YouTube',
		OnTheDiscordServer: 'En el servidor de Discord',
	},

	tooltips: {
		ClickHereToGoToTheYTPage: 'Haz clic aquí para ir a la página de YouTube.',
		GiveAStarToMyReposOnGitHub: 'Dale una estrella a mis repositorios en GitHub, a los que te gusten.',
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	SomeQuestions: '¿Tienes preguntas? ¿Necesitas ayuda?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: '¿Tienes algún problema o alguna pregunta sobre Stella Mod? Si es así, ¡no dudes en contactarnos! Nuestro equipo está a tu disposición para cualquier pregunta.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Tanto si necesitas ayuda para instalar Stella, como si tienes preguntas acerca de sus características, estamos aqui para asistirte.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Ten en cuenta que nuestra comunidad también es capaz de responder tus preguntas. Unete a nuestro servidor de Discord o crea un nuevo problema a través de Github',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Simplemente haz clic en el ícono del chat en la esquina inferior derecha para iniciar una nueva conversación, tanto en polaco como en inglés. ¡Esperamos tus comentarios!',
	StellaModIsNotAffiliatedWithHoyoverse: 'Por favor, ten en cuenta que Stella Mod no está afiliado con Hoyoverse de ninguna manera.',
	JoinToDiscordServer: 'Únete al servidor de Discord',
	CommentMyYTVideo: 'Comenta mi video en YouTube',

	tooltips: {
		JoinOurOfficialDiscordServer: 'Únete a nuestro servidor oficial de Discord.',
		LeaveACommendBelowMyVideo: 'Deja un comentario debajo de mi video.',
		ReturnTo: 'Volver a: Genshin Stella Mod - Aquí comienza tu aventura.',
	},
};

// GET /genshin-impact-reshade/videos
module.exports.videos = {
	WatchVideosOnYT: 'Ver videos en YouTube',
	IfYouWantToRecordNewVideo: 'Si te gustaria grabar un video y subirlo a YouTube, envíame un mensaje. ¡Puedo incluir el enlace aqui!',
	DeprecatedMovies: 'Videos obsoletos',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'Estos videos pertenecen a versiones anteriores de Stella Mod y se consideran obsoletos.',
	FirstModRelease: 'Primer lanzamiento del mod',
	Gameplay: 'Gameplay',
};

// GET /genshin-impact-reshade/docs
module.exports.docs = {
	TableOfContents: 'Tabla de Contenidos',
	1: {
		Introduction: '{0}. {1} Introducción al Mod Stella',
		ReadMe: '{0}. {1} README.md',
		Support: '{0}. {1} Soporte',
		FAQ: '{0}. {1} Preguntas Frecuentes',
		WhatIs: '{0}. {1} ¿Qué es...',
		HowToAvoidABan: '{0}. {1} Cómo evitar un ban?',
		ToS: '{0}. {1} Términos de Servicio',
		PrivacyPolicy: '{0}. {1} Política de Privacidad',
		SoftwareLicense: '{0}. {1} Licencia de Software',
		Installation: '{0}. {1} Instalación',
	},

	Changelogs: 'Registro de Cambios',
	2: {
		Versions: '{0}. {1} Versiones {2}.x.x',
	},

	DocumentCreationDate: 'Fecha de creación del documento: {0}',
	LastUpdate: 'Última actualización: {0}',
	DocumentSize: 'Tamaño del documento: {0}',
	bytes: 'bytes',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'Todos los repositorios de GitHub',
	IfYouWantToBecomeContributor: 'Si te gustaria convertirte en un colaborador, solo tienes que crear un nuevo Pull Request en Github. Muchas gracias y ¡Feliz codificación!',
};

// GET /genshin-impact-reshade/subscription
module.exports.subscription = {
	ChooseYourSubscriptionTier: 'Choose your subscription tier',
	IfYouAreInterestedInTheBenefits: 'If you\'re interested in the benefits, please explore all the available tiers to see which one suits your preferences. Hopefully, you\'ll find one that piques your interest!',
	IfYouHaveAnyQuestions: 'If you have any questions, don\'t hesitate to join our Discord server or reach out via email. You can find the contact information on the homepage of my website.',
	PricesMayVaryForUsersResidingInPoland: 'Prices may vary for users residing in Poland.',

	tiers: {
		1: 'Little Kitten',
		2: 'Favorite Kitten',
		3: 'Trusted Cat',
		4: 'Computer Cat',
		5: 'Very Safe Kitten',
	},

	prices: {
		MonthlyPrice: 'Monthly price',
		Every3Months: 'Every 3 months',
		YearlyPrice: 'Yearly price',
	},

	Everything: {
		FromTier: 'Everything from Tier {0}',
		FromTier12: 'Everything from Tier 1 and 2',
		FromTier123: 'Everything from Tier 1, 2 & 3',
		FromAllTiers: 'Everything from all Tiers',
	},

	TierName: 'Tier name',
	benefitsFull: {
		PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',
		CompletePostArchive: 'Complete post archive (on the Discord server)',

		RayTracingForGenshin: 'Ray Tracing for Genshin',
		MigotoInStellaModMoreMods: '3DMigoto in Stella Mod (more mods & more fun)',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		PhotosOfMyCats: 'Cute photos of my cats',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',

		SecuritySystemToAvoidBan: 'Security system to avoid ban (hosts file)',
		VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
		NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
		MorePhotosOfMyCats: 'Photos of my cats',

		PrivateDNSInEurope: 'Much better security system (private DNS in Europe)',
		OptimizationOfYourComputerForBestPerformance: 'Optimization of your PC for the best performance',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',

		ActivationPossibleOnManyDevices: 'Activation possible on {u}{maxDevices} devices{/u}',
	},

	CompareAvailablePlans: 'Compare available plans',
	benefitsShort: {
		IntDevice: '{0} device',
		IntDevices: '{0} devices',

		PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',
		CompletePostArchive: 'Complete post archive',

		RayTracingForGenshin: 'Ray Tracing for Genshin',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods',
		MigotoInStellaModMoreMods: '3DMigoto in Stella Mod',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		PhotosOfMyCats: 'Photos of my cats',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',

		SecuritySystemToAvoidBan: 'Security system to avoid ban',
		VariousGenshinImpactAccountGiveaways: 'Genshin Impact account giveaways',
		NewWindowsTerminalAppearance: 'New Windows Terminal appearance',
		MorePhotosOfMyCats: 'More photos of my cats',

		PrivateDNSInEurope: 'Better security system (DNS in Europe)',
		OptimizationOfYourComputer: 'Optimization of your computer',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
		ActivationPossibleOn: 'Activation possible on',
	},

	SubscribeNow: 'Subscribe now',
	ChangeYourTier: 'Change your tier',

	PaymentSystem: {
		Header: 'Payment system',
		1: 'We are delighted to announce that our secure payment system is powered by {0}. With Stripe, you can confidently make payments, knowing that your financial information is handled with the highest level of security.',
		2: 'Stripe is a well-trusted and globally recognized payment processing platform that guarantees smooth and secure transactions for our customers. Whether you\'re buying products, subscribing to services, or making donations, Stripe\'s robust infrastructure ensures a dependable and trouble-free payment experience.',
		3: 'Please be assured that your sensitive payment details are encrypted and safeguarded throughout the entire payment process. Your privacy and security are our top priorities.',
	},

	RulesForUsingOurBenefitsAndPatronage: {
		HeaderText1: 'Rules for Using Our Benefits and Patronage',
		SubText1: 'We would like to thank all our wonderful patrons for their support and trust in us. However, before you join our patronage program, please take a moment to familiarize yourself with some important guidelines.',

		HeaderText2: 'Benefits are intended exclusively for subscribers:',
		SubText2: 'Each benefit redemption token is assigned to a subscriber and should be kept confidential. Please do not share your benefits with others or distribute them online. Utilize them solely for your personal use and in accordance with our guidelines.',

		HeaderText3: 'Patronage is not a purchase of 3DMigoto:',
		SubText3: 'By becoming our patron, you are not acquiring 3DMigoto as a digital product that can be bought. Our benefits are granted solely as a token of gratitude for your support, just like any other benefit. By becoming a patron, you gain access to 3DMigoto within the "Stella Mod Launcher" application.',

		Footer: 'We appreciate your presence in our community and your support for our work. If you have any questions or concerns, please {a}contact us{/a}. Your participation and understanding of these rules are incredibly important to our project.',
	},
};