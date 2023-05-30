module.exports.data = {
	FileVersion: '2.0.0',
	LastUpdate: '30.05.2023',
	Contributors: [{
		Sefinek: {
			GitHub: 'https://github.com/sefinek24',
			Website: 'https://sefinek.net',
		},
		ChatGPT: true,
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
		DeviceIsNotSupported: '❎ El dispositivo no es compatible',
		SorryYourDeviceIsNotSupported: 'Lo sentimos. Tu dispositivo no es compatible.',
		ViewSupportedOperatingSystems: 'Ver los sistemas operativos suportados compatibles.',
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'No se puede encontrar el archivo ZIP en el servidor',
		NewUpdateIsComing: '¿Se acerca una nueva actualización? Quizás...\nNo te preocupes, puedes intentar de nuevo o informar de este problema en nuestro servidor de Discord.',
	},

	missingLang: {
		OhNoSomethingWentWrong: '¡Vaya! Algo ha salido mal...',
		WereSorryButWeCouldFindTheCorrectTranslation: 'Lo sentimos, no hemos podido encontrar una traducción acorde a tu idioma - {0}. Para más información, consulta los detalles de la consola (≧◡≦) ♡',
		IfYouWouldLikeToContributeYourOwnTranslationOrHelpUsFixThisIssue: 'Si te gustaria contribuir con tu propia traducción o ayudarnos a solucionar este problema, por favor, crea un nuevo <a href="https://github.com/sefinek24/Genshin-Stella-Mod_Translations/pulls">Pull Request</a> en nuestro <a href="https://github.com/sefinek24/Genshin-Stella-Mod_Translations">repositorio de Github</a>. ¡Gracias por tu ayuda! o(>ω<)o',
		SwitchLanguageToEnglish: 'Cambiar el idioma a inglés',
		YesClickMe: '¡Sí, clicame!',
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
		ThankYouForDownloading: 'Gracias por descargar. Forma parte de {a}Discord server{/a} nuestra comunidad en Discord para recibir las últimas actualizaciones, funciones y noticias.<br>¡Que tengas un buen día o noche!',
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
	tooltips: {
		ClickHereToGoToTheYTPage: 'Kliknij tutaj, aby przejść do strony YouTube.',
		GiveAStarToMyReposOnGitHub: 'Nadaj gwiazdkę moim repozytoriom na GitHubie, tym, które lubisz.',
	},

	LeaveYourFeedback: 'Deja tus comentarios',
	IfYouLikeThisProjectSupportMe: 'Si te ha gustado el proyecto, considera suscribirte a mi {1}canal de Youtube{/1}, dandole una estrella {2}on GitHub{/2} o {3}ayudandome{/3} de otras maneras.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Además, si tienes algún comentario o sugerencia, no dudes en utilizar la función del chat para enviarlos directamente a mi.', // TODO

	btn: {
		BelowYTVideo: 'Pod filmem na YouTube',
		OnTheDiscordServer: 'Na serwerze Discord',
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	tooltips: {
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

// GET /genshin-impact-reshade/read-more
module.exports.readMore = {
	tooltips: {
		TheBiggestSourceOfKnowledge: 'The biggest source of knowledge and information is hidden right behind this button!',
	},

	ReadMoreInformation: 'Leer mas información',
	MoreInfoIsAvailableOnGHWiki: 'Więcej informacji znajdziesz w repozytorium {1}sefinek24/Genshin-Impact-ReShade{/1} na stronie {2}GitHub Wiki{/2}.',
	HowToInstall: '¿Cómo se instala?',
	ViewChangelog: 'Revisar el registro de cambios',
	PrivacyPolicy: 'Política de privacidad',
	SeeContents: 'Ver contenidos',
	GameCompatibility: '️Compatibilidad del juego',
	RecommendedGameSettings: 'Configuraciones recomendadas del juego',
	PCRequirements: 'Requisitos de PC',
	SupportedOperatingSystems: 'Sistemas compatibles',
};
// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'Todos los repositorios de GitHub',
	IfYouWantToBecomeContributor: 'Si te gustaria convertirte en un colaborador, solo tienes que crear un nuevo Pull Request en Github. Muchas gracias y ¡Feliz codificación!',
};