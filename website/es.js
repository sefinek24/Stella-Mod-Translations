module.exports.data = {
	FileVersion: '2.1.0',
	LastUpdate: '20.08.2023',
	Contributors: [{
		Sefinek: {
			GitHub: 'https://github.com/sefinek24',
			Website: 'https://sefinek.net',
		},
		ChatGPT: {},
	}],
};

// Main
module.exports.default = {
	And: 'y',
	From: 'desde',
	In: 'en',
	Back: 'Atrás',
	Next: 'Siguiente',

	DiscordServer: 'Servidor de Discord',
	DiscordServerTooltip: 'Invitation to our Discord server',

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
	Header: 'Genshin Impact Stella Mod made by Sefinek',
	Text1: 'Safe and unique features like ReShade enhancements, carefully designed custom graphics, and impressive FPS unlocking offer players the best gaming experience!',
	Text2: 'The 3DMigoto add-on elevates the mod even further, providing immersive gameplay. Plus, the mod\'s custom launcher streamlines the process, helping players jump right into action.',
	// Text3: 'Stay updated with the latest news and join the {a}Discord server{/a} for a community of like-minded players aiming to maximize their Genshin Impact enjoyment.',
	FinalText: 'Don\'t wait! Dive into Teyvat\'s enhanced world now and have an unforgettable time!',

	Download: 'Download',
	DownloadTooltip: 'Click here to download the x64-bit installer for Windows 10 and 11.',

	Gallery: 'Gallery',
	GalleryTooltip: 'See the screenshots from the game with ReShade injected.',

	WatchVideos: 'Watch videos',
	WatchVideosTooltip: 'Watch my videos about the mod and the launching program.',

	ReadMore: 'Read more',
	ReadMoreTooltip: 'Check the system requirements, recommended game settings, and more!',

	Feedback: 'Feedback',
	FeedbackTooltip: 'Share your opinion.',

	Support: 'Support',
	SupportTooltip: 'Click here if you need help.',

	MainPage: 'Main page',
	MainPageTooltip: 'Home - Sefinek Official Website',

	PleaseSupportMe: 'Please support my work',
	SupportMyWork: 'Support my work',
	SupportMe: 'Support me',

	DownloadingData: 'Downloading data...',
	Version: 'Version',
	TheVersionWithoutCaps: 'the version',
	DownloadCount: 'Download count',
	LastDownload: 'Last download',

	modal: {
		ThankYouForDownloading: 'Thank you for downloading',
		BecomeMyPatronToGainMoreBenefits: 'Become my patron to gain more benefits such as the ability to use 3DMigoto together with FPS Unlocker & ReShade + a large collection of error-free mods + a collection of the latest 300 shaders + an add-on that prevents filters from overlapping with the user interface (UI) + Ray Tracing preset, and much more!',
		JoinOurDiscordServerToReceiveNotifications: 'Join our Discord server to receive notifications about the latest updates, features, and other announcements. Feel free to contact the creator if you have any questions or encounter any issues.',
		IfYouReEnjoyingStellaModConsiderLeavingAReview:	'Leave a review on {a}trustpilot.com{/a} after testing the software!',
		WishingYouAWonderfulDayOrNight:	'Wishing you a wonderful day or night!',
		TheTotalNumberOfDownloadsNowIs: 'The total number of downloads now is',
		NoProblem: 'No problem',
	},

	tooltips: {
		PageViews: 'Page views',
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
	StellaModIsNotAffiliatedWithHoyoverse: 'Por favor, ten en cuenta que Stella Mod no está afiliado con Hoyoverse (MiHoYo) de ninguna manera.',
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
	TableOfContents: 'Table of Contents',
	1: {
		Introduction: '{0}. {1} Introduction to Stella Mod',
		ReadMe: '{0}. {1} README.md',
		Support: '{0}. {1} Support',
		FAQ: '{0}. {1} FAQ',
		WhatIs: '{0}. {1} What is...',
		HowToAvoidABan: '{0}. {1} How to avoid a ban?',
		ToS: '{0}. {1} ToS',
		PrivacyPolicy: '{0}. {1} Privacy policy',
		SoftwareLicense: '{0}. {1} Software license',
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
	WaitingForUser: 'Waiting for user interaction...',
	VerifyingCaptcha: 'Verifying captcha...',
	VerifyingSession: 'Verifying session...',
	Successfully: 'Successfully',
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