module.exports.data = {
	Version: '2.7.0',
	LastUpdate: '16.12.2023',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://github.com/sefinek24)',
		'MayiVT (https://github.com/MayiVT)',
	],
};

// Main
module.exports.default = {
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
		CorrectRefURL: 'URL correcta',
	},

	wrongOs: {
		DeviceIsNotSupported: 'El dispositivo no es compatible',
		SorryYourDeviceIsNotSupported: 'Lo sentimos. Tu dispositivo no es compatible.',
		ViewSupportedOperatingSystems: 'Ver los sistemas operativos soportados compatibles.',
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'No se puede encontrar el archivo ZIP en el servidor',
		NewUpdateIsComing: '¿Se acerca una nueva actualización? Quizás...\nNo te preocupes, puedes intentar de nuevo o informar de este problema en nuestro servidor de Discord.',
	},
};

// GET /genshin-impact-reshade
module.exports.home = {
	Header: 'Genshin Impact Stella Mod made by Sefinek',
	Text1: 'Safe features such as ReShade enhancements, carefully crafted custom graphics, and impressive FPS unlocking provide gamers with the best in-game experience!',
	Text2: '3DMigoto enhances the mod for a more immersive experience. Additionally, our own launcher streamlines the entire process, helping players get into the action quickly.',
	FinalText: 'Don\'t hesitate! Immerse yourself in the upgraded world of Teyvat today and craft unforgettable experiences. Enjoy!',

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

	DownloadingData: 'Descargando datos...',
	Version: 'Versión',
	TheVersionWithoutCaps: 'la versión',
	DownloadCount: 'Recuento de descargas',
	LastDownload: 'Última descarga',

	modal: {
		ThankYouForDownloading: 'Gracias por descargar',
		BecomeAStellaModSubscriber: 'Become a Stella Mod Plus subscriber to gain access to additional benefits such as: the ability to use 3DMigoto, FPS Unlocker, and ReShade simultaneously & a large collection of error-free mods & enhanced security (blocking telemetry and analytics) & a pack of the latest shaders & an add-on to prevent filter overlays on the user interface (UI) & Ray Tracing presets, and much more!',
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
	ChooseYourSubscriptionTier: 'Elige tu grado de suscripción',
	IfYouAreInterestedInTheBenefits: 'Si estás interesado en los beneficios, por favor explora todos los grados de suscripción para ver cual se rige más a tus preferencias. Con suerte encontrarás a alguno que sea de tu interés!',
	IfYouHaveAnyQuestions: 'Si tienes alguna pregunta, no dudes en contactarnos mediante discord o correo electrónico. Puedes encontrar la información de contacto en la pagina principal.',

	Recommended: 'Recommended',
	tiers: {
		1: 'Pequeño gato',
		2: 'Gato favorito',
		3: 'Gato de confianza',
		4: 'Gato ordenador',
		5: 'Gato muy seguro',
	},
	UnknownBenefit: 'Unknown benefit',

	prices: {
		MonthlyPrice: 'Precio mensual',
		Every3Months: 'Cada 3 meses',
		YearlyPrice: 'Precio anual',
	},

	Everything: {
		FromTier: 'Todo sobre el grado {0}',
		FromTier12: 'Todo sobre los grados 1 y 2',
		FromTier123: 'Todo sobre los grados 1, 2 y 3',
		FromAllTiers: 'Todo sobre todos los grados',
	},

	TierName: 'Nombre del grado',
	benefitsFull: {
		PrivateClipsFromCSGO: 'Clips privados de CS:GO y CS2',
		EarlyAccessToStellaMod: 'Acceso anticipado a Stella Mod',
		CompletePostArchive: 'Archivo completo de post (en el servidor de discord)',

		RayTracingForGenshin: 'Trazado de Rayos para Genshin',
		MigotoInStellaModMoreMods: '3DMigoto en Stella Mod (más mods y más diversión)',
		BigCollectionOfShadersMods: 'Gran colección de shaders y mods',
		GameUIWithoutVisibleShaders: 'Interfaz del juego sin shaders visibles',
		HideYourUIDInTheGame: 'Esconder tu UID en el juego',
		PresetsFromPreviousVersions: 'Presets de versiones anteriores',
		PhotosOfMyCats: 'Fotos adorables de mis gatos',
		AnimePicturesGeneratedByAI: 'Fotos de animé generadas por IA',

		SecuritySystemToAvoidBan: 'Archivo de seguridad para evitar bans (archivos de hosts)',
		VariousGenshinImpactAccountGiveaways: 'Varios sorteos de cuentas de Genshin',
		NewWindowsTerminalAppearance: 'Nueva apariencia de la Terminal de Windows (WT) ',
		MorePhotosOfMyCats: 'Photos de mis gatos',

		PrivateDNSInEurope: 'Mejor sistema de seguridad (DNS privado en Europa)',
		OptimizationOfYourComputerForBestPerformance: 'Optimization of your PC for the best performance',
		AssistanceRelatedToPCsOrLaptops: 'Asistencia relacionada a ordenadores',

		ActivationPossibleOn: 'Activación posible en {u}{0} dispositivos{/u}',
	},

	CompareAvailablePlans: 'Compara planes disponibles',
	benefitsShort: {
		IntDevice: '{0} dipositivo',
		IntDevices: '{0} dispositivos',

		PrivateClipsFromCSGO: 'Clips privados de CS:GO y CS2',
		EarlyAccessToStellaMod: 'Acceso antivipado a Stella Mod',
		CompletePostArchive: 'Archivo completo de post',

		RayTracingForGenshin: 'Trazado de Rayos para Genshin',
		BigCollectionOfShadersMods: 'Gran colección de shaders y mods',
		MigotoInStellaModMoreMods: '3DMigoto en Stella Mod',
		GameUIWithoutVisibleShaders: 'Interfaz del juego sin shaders',
		HideYourUIDInTheGame: 'Esconder tu UID en partida',
		PresetsFromPreviousVersions: 'Presets de versiones anteriores',
		PhotosOfMyCats: 'Imagenes de mis gatos',
		AnimePicturesGeneratedByAI: 'Imagenes de animé generadas por IA',

		SecuritySystemToAvoidBan: 'Sistema de seguridad para evitar bans',
		VariousGenshinImpactAccountGiveaways: 'Sorteos de cuentas de Genshin Impact',
		NewWindowsTerminalAppearance: 'Nueva apariencia en la Terminal de Windows',
		MorePhotosOfMyCats: 'Más fotos de mis gatos',

		PrivateDNSInEurope: 'Mejor sistema de seguridad (DNS en Europa)',
		OptimizationOfYourComputerForBestPerformance: 'Optimización de tu ordenador',
		AssistanceRelatedToPCsOrLaptops: 'Asistencia relacionada a ordenadores y portatiles',
		ActivationPossibleOn: 'Activación possible en',
	},

	SubscribeNow: 'Subscribete ahora',
	ChangeYourTier: 'Cambia tu plan',

	Crypto: 'Crypto',
	IfYouWantToMakeAPaymentUsingCrypto: 'If you want to make a payment using cryptocurrency, please contact the developer.',
	IAcceptPaymentsOnlyOnBinance: 'I accept payments only on Binance.',
	CloseModal: 'Close modal',

	PaymentSystem: {
		Header: 'Sistema de pago',
		1: 'Nos complace anunciar que nuestro sistema de pago funciona con {0}. Con Stripe, puedes hacer pagos de forma segura, sabiendo que tu información de pago está gestionada de la manera más segura.',
		2: 'Stripe es una plataforma de procesamiento de pago reconocida globalmente y seguura, que promete rapidez y seguridad en las transaciones de nuestros usuarios. Aunque estés comprando productos, suscribiendote a servicios o haciendo donaciones, la robusta infraestructura de Stripe asegura una experiencia de pagos segura y sin problemas.',
		3: 'Tenga la seguridad de que sus datos confidenciales de pago están encriptados y protegidos durante todo el proceso de pago. Su privacidad y seguridad son nuestras principales prioridades.',
	},

	AcceptedPaymentMethods: 'Accepted payment methods',
	IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer: 'If you wish to make a payment using cryptocurrencies or a direct bank transfer, please contact the developer.',
	BankName: 'Bank Name:',
	AccountNumber: 'Account Number:',
	SWIFTOrBICCode: 'SWIFT/BIC Code:',
	IBAN: 'IBAN',
	AskTheAdministratorForIt: 'Ask the administrator for it',
	PleaseBeAwareThatTheBuyerIsResponsibleForCoveringAbyBankFees: 'Please be aware that the buyer is responsible for covering any bank fees associated with the transaction.',

	RulesForUsingOurBenefitsAndPatronage: {
		HeaderText1: 'Rules for using our benefits and patronage',
		SubText1: 'We would like to express our heartfelt gratitude to all our subscribers for their support and trust. Before proceeding with the Stella Mod Plus subscription, please take a moment to familiarize yourself with a few important guidelines.',

		HeaderText2: 'Benefits are intended exclusively for subscribers:',
		SubText2: 'Each benefit redemption token is assigned to a subscriber and should be kept confidential. Please do not share your benefits with others or distribute them online. Utilize them solely for your personal use and in accordance with our guidelines.',

		HeaderText3: 'Subscribing does not equate to purchasing the 3DMigoto software:',
		SubText3: 'By becoming a subscriber to Stella Mod Plus, you are not acquiring 3DMigoto as a digital product for purchase. Instead, as our subscriber, you solely gain access to use 3DMigoto within the Stella Mod Launcher application.',

		Footer: 'We appreciate your presence in our community and your support for our work. If you have any questions or concerns, please {a}contact us{/a}. Your participation and understanding of these rules are incredibly important to our project.',
	},

	request: {
		WeAreProcessingYourRequest: 'We are processing your request...',
		SubscribingInProgress: 'We need a little bit of time to get everything ready. Please remain on this page and give us a moment!\nShortly, we will redirect you to a secure payment page where you can safely complete your transaction. ^w^',
		ChangingTheTierInProgress: 'We need some time to change your tier! Give us a moment, and we promise everything will go smoothly. ^w^',
	},
};