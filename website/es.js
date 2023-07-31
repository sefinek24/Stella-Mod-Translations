module.exports.data = {
	FileVersion: '2.0.5',
	LastUpdate: '29.07.2023',
	Contributors: [{
		Sefinek: {
			GitHub: 'https://github.com/sefinek24',
			Website: 'https://sefinek.net',
		},
	}],
};

// Main
module.exports.default = {
	tooltips: {
		OfficialDiscordServer: 'Servidor oficial de Discord',
		GitHubRepositories: 'Repositorios de GitHub',
	},

	And: 'y',
	From: 'desde',
	In: 'en',
	Back: 'Atrás',
	Next: 'Siguiente',
	DiscordServer: 'Servidor de Discord',
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
	tooltips: {
		ClickHereToDownloadSetup: 'Haz clic aquí para descargar el instalador de 64 bits para Windows 10 y 11.',
		ViewScreenshotsFromTheGameWithInjectedReShade: 'Mira las capturas de pantalla del juego con ReShade aplicado.',
		WatchMyVideosAboutTheModAndLauncher: 'Mira mis videos sobre el mod y el programa de inicio.',
		CheckSysRequirementsRecommendedSettingsForTheGameAndMore: 'Comprueba los requisitos del sistema, la configuración recomendada del juego y más.',
		LeaveYourFeedback: 'Comparte tu opinión.',
		ClickHereIfYouNeedHelp: 'Haz clic aquí si necesitas ayuda.',
		InvitationToDiscordServer: 'Invitación a nuestro servidor de Discord.',
	},

	TheBestGIRSModPack: 'El mejor conjunto de mods para Genshin Impact, el cual incluye Reshade con ajustes gráficos totalmente personalizados, desbloqueo de FPS, lanzador propio y ¡Mucho mas!',
	JoinOurDiscordServer: 'Forma parte de {a}nuestra comunidad en Discord{/a} para recibir las últimas actualizaciones, funciones y noticias.',

	Download: 'Descargar',
	DownloadTooltip: 'Descarga la configuración oficial para Windows 10 o 11 usando una CPU de 64 bits',
	Gallery: 'Galería',
	Tutorial: 'Tutorial',
	WatchVideos: 'Ver videos',
	ReadMore: 'Leer más',
	Feedback: 'Sugerencias',
	Support: 'Soporte',
	MainPage: 'Página principal',

	PleaseSupportMe: 'Por favor, apoya mi trabajo',
	SupportMyWork: 'Apoya mi trabajo',
	SupportMe: 'Apóyame',

	DownloadingData: 'Descargando datos...',
	Version: 'Versión',
	TheVersionWithoutCaps: 'la versión',
	DownloadCount: 'Cantidad de descargas',
	LastDownload: 'Última descarga',

	modal: {
		Notification: 'Notificación',
		ThankYouForDownloading: 'Thank you for downloading! Join our Discord server to receive notifications about the latest updates, features, and other announcements. Don\'t hesitate to reach out to the creator if you have any questions or issues. If you enjoy Stella Mod, consider writing a review on {a}trustpilot.com{/a}. This program is free only thanks to your donations. Have a nice day or night!', // TODO
		TheTotalNumberOfDownloadsNowIs: 'The total number of downloads now is',
		NoProblem: 'No han habido problemas',
	},
};

// GET /genshin-impact-reshade/gallery
module.exports.gallery = {
	GalleryPage: 'Galería - Página número',
	GalleryCompareReleases: 'Galería - Comparar lanzamientos -',
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
};

// GET /genshin-impact-reshade/feedback
module.exports.feedback = {
	tooltips: { // TODO
		ClickHereToGoToTheYTPage: 'Click here to go to the YouTube page.',
		GiveAStarToMyReposOnGitHub: 'Give a star to my repositories on GitHub, the ones you like.',
	},

	LeaveYourFeedback: 'Deja tus comentarios',
	IfYouLikeThisProjectSupportMe: 'Si te ha gustado el proyecto, considera suscribirte a mi {1}canal de Youtube{/1}, dandole una estrella {2}on GitHub{/2} o {3}ayudandome{/3} de otras maneras.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Además, si tienes algún comentario o sugerencia, no dudes en utilizar la función del chat para enviarlos directamente a mi.', // TODO

	btn: {
		BelowYTVideo: 'Below my YouTube video', // TODO
		OnTheDiscordServer: 'On the Discord server', // TODO
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	tooltips: { // TODO
		JoinOurOfficialDiscordServer: 'Join our official Discord server.',
		LeaveACommendBelowMyVideo: 'Leave a comment below my video.',
		ReturnTo: 'Return to: Genshin Stella Mod - Here begins your adventure.',
	},

	SomeQuestions: '¿Tienes preguntas? ¿Necesitas ayuda?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: '¿Tienes algún problema o alguna pregunta sobre Stella Mod? Si es así, ¡no dudes en contactarnos! Nuestro equipo está a tu disposición para cualquier pregunta.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Tanto si necesitas ayuda para instalar Stella, como si tienes preguntas acerca de sus características, estamos aqui para asistirte.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Ten en cuenta que nuestra comunidad también es capaz de responder tus preguntas. Unete a nuestro servidor de Discord o crea un nuevo problema a través de Github',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Simplemente haz clic en el ícono del chat en la esquina inferior derecha para iniciar una nueva conversación, tanto en polaco como en inglés. ¡Esperamos tus comentarios!',
	StellaModIsNotAffiliatedWithHoyoverse: 'Por favor, ten en cuenta que Stella Mod no está afiliado con Hoyoverse (MiHoYo) de ninguna manera.',
	JoinToDiscordServer: 'Únete al servidor de Discord',
	CommentMyYTVideo: 'Comenta mi video en YouTube',
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
	TableOfContents: 'Table of Contents',
	1: {
		Welcome: '{0}. {1} Welcome',
		ReadMe: '{0}. {1} README.md',
		Introduction: '{0}. {1} Introduction to Stella Mod',
		Support: '{0}. {1} Support',
		FAQ: '{0}. {1} FAQ',
		WhatIs: '{0}. {1} What is...',
		HowToAvoidABan: '{0}. {1} How to avoid a ban?',
		ToS: '{0}. {1} ToS',
		PrivacyPolicy: '{0}. {1} Privacy policy',
		Installation: '{0}. {1} Installation',
	},

	Changelogs: 'Changelogs',
	2: {
		Versions: '{0}. {1} Versions {2}.x.x',
	},

	DocumentCreationDate: 'Document creation date: {0}',
	LastUpdate: 'Last update: {0}',
	DocumentSize: 'Document size: {0}',

	GoToHomePage: 'Go to home page',
	GoBack: 'Go back',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'Todos los repositorios de GitHub',
	IfYouWantToBecomeContributor: 'Si te gustaria convertirte en un colaborador, solo tienes que crear un nuevo Pull Request en Github. Muchas gracias y ¡Feliz codificación!',
};

// TODO: For patrons
module.exports.forPatrons = {
	// captcha.ejs
	AreUARobot: 'Are you a robot?',
	Status: 'Status',
	WaitingForUser: 'Waiting for user interaction...',
	VerifyingSession: 'Verifying session...',
	Success: 'Success',
	ValidateRequest: 'Validate request',
	NextPage: 'Next page',
	WrongStatusCode: 'Error. Received wrong status code ({0}) from sefinek.net.',
	Failed: 'Failed',
	Expired: 'Session expired. Please refresh this page.',
	Canceled: 'Session was canceled by the user. Try again.',
	FatalError: 'Fatal error. Please try again or refresh this page.',

	// index.ejs
	Header: 'Receive your benefits {0}',

	1: 'Thank you so much for supporting me! Your generosity and encouragement are invaluable to me, and I truly appreciate your trust in me.',
	2: 'As a token of my gratitude, you gain access to benefits.',
	3: 'If you have any questions, concerns, or feedback regarding my work, please feel free to contact me at any time.',

	4: 'Please remember that benefits can only be obtained once from a single generated token (link).',
	5: 'However, if you use the appropriate command on the Discord server and provide a reason why you want to claim the benefits again, you can generate a new key.',
	6: 'When will I lose access to the benefits? Here\'s the answer. Your subscription on Patreon must expire.',

	7: 'After downloading the application, take some time to familiarize yourself with the terms of the license.',
	8: 'This will help you understand how you can use the application and the rights and responsibilities associated with it.',

	9: 'If for any reason you need to download the benefits again, you can simply invoke the command {code};receive{/code} on the Discord server.',
	10: 'I also inform you that the link will automatically expire at 00:00 Polish time.',

	ThankYouForYourSupport: 'Thank you again for your support!',
	SefinekOwO: '~ Sefinek',

	clickHereToDownload: 'Click here to download',

	// received.ejs
	ThisMethodIsNotAllowed: 'This method is not allowed',
	YourBenefitsHaveAlreadyBeenReceived: 'Your benefits have already been received at {0}, {1}.',
	Country: 'Country: {0}',
	ThankUForYourSupport: 'Thank you for your support!',

	// error.ejs
	SomethingWentWrong: 'Sad cat >~~< Something went wrong...',
	InvalidUserId: 'Invalid user ID provided.',
	InvalidKeyProvided: 'Invalid key provided.',
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'This link has expired and will no longer be active.',
	ErrorOccurredPleaseTryAgain: 'Error occurred. Please try again.',
};