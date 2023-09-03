module.exports.data = {
	FileVersion: '2.1.1',
	LastUpdate: '03.09.2023',
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
	Text1: 'Funciones seguras y únicas como mejoras de ReShade, gráficos personalizados cuidadosamente elaborados e impresionante desbloqueo de FPS brindan a los jugadores la mejor experiencia en el juego.',
	Text2: '3DMigoto lleva el mod a un nivel aún más alto, ofreciendo una experiencia inmersiva. Además, nuestro propio lanzador agiliza todo el proceso, ayudando a los jugadores a entrar en acción rápidamente.',
	// Text3: 'Mantente actualizado con las últimas noticias y únete al {a}servidor de Discord{/a} para formar parte de una comunidad de jugadores con ideas afines que buscan maximizar su disfrute de Genshin Impact.',
	FinalText: '¡No esperes más! Sumérgete ahora en el mundo mejorado de Teyvat y crea momentos inolvidables. ¡Buena suerte!',

	Download: 'Descargar',
	DownloadTooltip: 'Haz clic aquí para descargar el instalador de 64 bits para Windows 10 y 11.',

	Gallery: 'Galería',
	GalleryTooltip: 'Mira las capturas de pantalla del juego con ReShade aplicado.',

	WatchVideos: 'Ver videos',
	WatchVideosTooltip: 'Mira mis videos sobre el mod y el programa de lanzamiento.',

	ReadMore: 'Leer más',
	ReadMoreTooltip: 'Consulta los requisitos del sistema, las configuraciones recomendadas y más.',

	Feedback: 'Comentarios',
	FeedbackTooltip: 'Comparte tu opinión.',

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
	DownloadCount: 'Número de descargas',
	LastDownload: 'Última descarga',

	modal: {
		ThankYouForDownloading: 'Gracias por descargar',
		BecomeMyPatronToGainMoreBenefits: 'Conviértete en mi patrón para obtener más beneficios, como la capacidad de usar 3DMigoto junto con FPS Unlocker & ReShade + una gran colección de mods sin errores + una colección de los últimos 300 shaders + un complemento que evita que los filtros se superpongan con la interfaz de usuario (UI) + una configuración preestablecida de Ray Tracing y mucho más.',
		JoinOurDiscordServerToReceiveNotifications: 'Únete a nuestro servidor de Discord para recibir notificaciones sobre las últimas actualizaciones, características y otros anuncios. Si tienes alguna pregunta o encuentras algún problema, no dudes en contactar al creador.',
		IfYouReEnjoyingStellaModConsiderLeavingAReview:	'Deja una reseña en {a}trustpilot.com{/a} después de probar el software.',
		WishingYouAWonderfulDayOrNight:	'¡Te deseo un maravilloso día o noche!',
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

	GoToHomePage: 'Ir a la página de inicio',
	GoBack: 'Volver',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'Todos los repositorios de GitHub',
	IfYouWantToBecomeContributor: 'Si te gustaria convertirte en un colaborador, solo tienes que crear un nuevo Pull Request en Github. Muchas gracias y ¡Feliz codificación!',
};

module.exports.forPatrons = {
	// captcha.ejs
	AreUARobot: '¿Eres un robot?',
	WaitingForUser: 'Esperando interacción del usuario...',
	VerifyingCaptcha: 'Verificando captcha...',
	VerifyingSession: 'Verificando sesión...',
	Successfully: 'Éxito',
	ValidateRequest: 'Validar solicitud',
	NextPage: 'Página siguiente',
	WrongStatusCode: 'Error. Se recibió un código de estado incorrecto ({0}) de sefinek.net.',
	Failed: 'Falló',
	Expired: 'La sesión ha caducado. Por favor, actualiza esta página.',
	Canceled: 'La sesión fue cancelada por el usuario. Inténtalo de nuevo.',
	FatalError: 'Error fatal. Por favor, inténtalo de nuevo o actualiza esta página.',

	// index.ejs
	Header: 'Recibe tus beneficios {0}',

	1: '¡Muchas gracias por tu apoyo! Tu generosidad y ánimo son invaluables para mí, y realmente aprecio tu confianza en mí.',
	2: 'Como muestra de mi gratitud, obtienes acceso a beneficios.',
	3: 'Si tienes alguna pregunta, inquietud o comentario sobre mi trabajo, no dudes en contactarme en cualquier momento.',

	4: 'Por favor, recuerda que los beneficios solo se pueden obtener una vez a partir de un solo enlace generado (token).',
	5: 'Sin embargo, si utilizas el comando apropiado en el servidor de Discord y proporcionas una razón por la que deseas reclamar los beneficios nuevamente, puedes generar una nueva clave.',
	6: '¿Cuándo perderé el acceso a los beneficios? Aquí tienes la respuesta. Tu suscripción en Patreon debe expirar.',

	7: 'Después de descargar la aplicación, tómate un tiempo para familiarizarte con los términos de la licencia.',
	8: 'Esto te ayudará a entender cómo puedes utilizar la aplicación y los derechos y responsabilidades asociados con ella.',

	9: 'Si por alguna razón necesitas descargar los beneficios nuevamente, simplemente puedes invocar el comando {code};receive{/code} en el servidor de Discord.',
	10: 'También te informo que el enlace caducará automáticamente a las 00:00 hora polaca.',

	ThankYouForYourSupport: '¡Gracias de nuevo por tu apoyo!',
	SefinekOwO: '~ Sefinek',

	clickHereToDownload: 'Haz clic aquí para descargar',

	// received.ejs
	ThisMethodIsNotAllowed: 'Este método no está permitido',
	YourBenefitsHaveAlreadyBeenReceived: 'Tus beneficios ya se han recibido el {0}, {1}.',
	Country: 'País: {0}',
	ThankUForYourSupport: '¡Gracias por tu apoyo!',

	// error.ejs
	SomethingWentWrong: 'Gatito triste >~~< Algo salió mal...',
	InvalidUserId: 'Se proporcionó un ID de usuario no válido.',
	InvalidKeyProvided: 'Se proporcionó una clave no válida.',
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'Este enlace ha caducado y ya no estará activo.',
	ErrorOccurredPleaseTryAgain: 'Ocurrió un error. Por favor, inténtalo de nuevo.',
};