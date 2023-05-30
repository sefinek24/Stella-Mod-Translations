module.exports.data = {
	FileVersion: '2.0.0',
	LastUpdate: '30.05.2023',
	Contributors: [{
		ShizuKoto: {
			GitHub: 'https://github.com/ShizuKoto',
			Website: null,
		},
		ChatGPT: true,
	}],
};

// Main
module.exports.default = {
	tooltips: {
		OfficialDiscordServer: 'Offizieller Discord-Server',
		GitHubRepositories: 'GitHub-Repositorys"',
	},

	And: 'und',
	From: 'von',
	In: 'in',
	Back: 'Zurück',
	Next: 'Weiter',
	DiscordServer: 'Discord Server',
};

// Errors
module.exports.errors = {
	400: {
		BadRequest: 'Error 400: Bad Request',
		InvalidURL: 'Die Antwort-URL ist ungültig.',
		ReferrerURL: 'Deine referrer URL',
		CorrectRefURL: 'Korrekte URL',
	},

	wrongOs: {
		DeviceIsNotSupported: '❎ Gerät wird nicht unterstützt.',
		SorryYourDeviceIsNotSupported: 'Ups. Dein Gerät wird nicht unterstützt.',
		ViewSupportedOperatingSystems: 'Hier findest du alle unterstützten Geräte.',
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'Wir können die ZIP-Datei nicht auf dem Server finden',
		NewUpdateIsComing: 'Kommt ein neues Update? Wahrscheinlich...\nJedenfalls.. Bitte versuche es später erneut, oder melde diesen Fehler auf dem Discord Server.',
	},

	missingLang: {
		OhNoSomethingWentWrong: 'Oh nein! Etwas ist schief gelaufen...',
		WereSorryButWeCouldFindTheCorrectTranslation: 'Entschuldigung, wir konnten leider keine Übersetzung für deine Sprache {0} finden. Für mehr Details prüfe bitte die Konsole. (≧◡≦) ♡',
		IfYouWouldLikeToContributeYourOwnTranslationOrHelpUsFixThisIssue: 'Wenn du uns helfen möchtest und eine eigene Übersetzung bereitstellen willst, erstelle bitte einen <a href="https://github.com/sefinek24/Genshin-Stella-Mod_Translations/pulls">Pull Request</a> auf unserem <a href="https://github.com/sefinek24/Genshin-Stella-Mod_Translations">GitHub Repository</a>. Vielen Dank für deine Hilfe! o(>ω<)o',
		SwitchLanguageToEnglish: 'Sprache zu Englisch wechseln',
		YesClickMe: 'Ja, klick mich!',
	},
};

// GET /genshin-impact-reshade
module.exports.home = {
	tooltips: {
		ClickHereToDownloadSetup: 'Klicken Sie hier, um den x64-Bit-Installer für Windows 10 und 11 herunterzuladen.',
		ViewScreenshotsFromTheGameWithInjectedReShade: 'Sehen Sie sich Screenshots aus dem Spiel mit injiziertem ReShade an.',
		WatchMyVideosAboutTheModAndLauncher: 'Schauen Sie sich meine Videos über das Mod und den Launcher an.',
		CheckSysRequirementsRecommendedSettingsForTheGameAndMore: 'Überprüfen Sie die Systemanforderungen, empfohlene Einstellungen für das Spiel und mehr!',
		LeaveYourFeedback: 'Teilen Sie Ihre Meinung mit.',
		ClickHereIfYouNeedHelp: 'Klicken Sie hier, wenn Sie Hilfe benötigen.',
		InvitationToDiscordServer: 'Einladung zum Discord-Server.',
	},

	TheBestGIRSModPack: 'Der beste Mod für Genshin Impact mit ReShade, eigenen Grafik-Voreinstellungen, FPS unlock, eigener Launcher, und mehr!',
	JoinOurDiscordServer: 'Trete uns auf unserem {a}Discord Server{/a} bei und erhalte Infos zu neuen Updates, Features und Nachrichten.',

	Download: 'Herunterladen',
	DownloadTooltip: 'Lade die offizielle Installation für Windows 10 or 11 mit 64-bit CPU herunter.',
	Gallery: 'Galerie',
	Tutorial: 'Anleitung',
	WatchVideos: 'Schaue Videos',
	ReadMore: 'Lese mehr',
	Feedback: 'Feedback',
	Support: 'Unterstützung',
	MainPage: 'Hauptseite',

	PleaseSupportMe: 'Bitte unterstützte meine Arbeit',
	SupportMyWork: 'Unterstütze meine Arbeit',
	SupportMe: 'Unterstütze mich',

	DownloadingData: 'Lade Daten herunter...',
	Version: 'Version',
	TheVersionWithoutCaps: 'die Version',
	DownloadCount: 'Anzahl downloads',
	LastDownload: 'Letzter Download',

	modal: {
		Notification: 'Mitteilung',
		ThankYouForDownloading: 'Vielen Dank fürs herunterladen. Trete uns jetzt auf unserem {a}Discord Server{/a} bei und erhalte Infos zu neuen Updates, Features und Nachrichten. Habe einen schönen Tag oder eine schöne Nacht!',
		TheTotalNumberOfDownloadsNowIs: 'Die aktuell gesamte Anzahl an Downloads ist',
		NoProblem: 'Kein Problem',
	},
};

// GET /genshin-impact-reshade/gallery
module.exports.gallery = {
	GalleryPage: 'Galerie - Seite',
	GalleryCompareReleases: 'Galerie - Vergleiche Versionen -',
	GalleryCompares: 'Galerie - Vergleiche',
	ScreenshotsAreAvailableInHighQuality: 'Bildschirmaufnahmen stehen in hoher Auflösung zur Verfügung. Es könnte eine Weile dauern, bis sie erscheinen.',
	WebsiteIsNotSupportedOnMobileDevices: 'Diese Website wird nicht auf mobilen Endgeräten unterstützt.',
	SomeImageCanBeOutdated: 'Einige Bilder könnten nicht mehr dem neusten Stand entsprechen!',

	SeeComparesFromTheOtherVersions: 'Schau dir Vergleiche zwischen verschiedenen Versionen an',
	SeeTheComparisonBetween: 'Sichte Vergleiche zwischen ...',
	ThePageYouAreCurrentlyOnDisplaysAComparison: 'Die Seite, auf der du dich befindest, stellt einen Vergleich dar.',
	OldVersion: 'Alte Version',
	NewVersion: 'Neue Version',

	WithMod: 'Mit mod',
	WithoutMod: 'Ohne mod',

	BonusScreenshot: 'Bonus Bildschirmaufnahme',
};

// GET /genshin-impact-reshade/feedback
module.exports.feedback = {
	tooltips: {
		ClickHereToGoToTheYTPage: 'Kliknij tutaj, aby przejść do strony YouTube.',
		GiveAStarToMyReposOnGitHub: 'Nadaj gwiazdkę moim repozytoriom na GitHubie, tym, które lubisz.',
	},

	LeaveYourFeedback: 'Meinung hinterlassen',
	IfYouLikeThisProjectSupportMe: 'Wenn dir dieses Projekt zusagt, folge mir bitte auf meinem {1}YouTube Kanal{/1}, gib dem Projekt einen Stern {2}auf GitHub{/2}, oder {3}unterstützte mich{/3} auf anderen Wegen.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Außerdem: Wenn du irgendeine Art von Feedback, Verbesserungsvorschlägen oder sonstiges hast oder loswerden willst, kontaktiere uns gerne auf einem der verfügbaren Wege. Zum Beispiel im Chat.',

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

	SomeQuestions: 'Fragen? Brauchst du Hilfe?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Hast du Probleme, oder Fragen zu Stella Mod? Wenn ja, dann zögere nicht uns zu kontaktieren. Unser Team steht für sämtliche Fragen oder Bedenken zur Verfügung.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Ob du Hilfe bei der Installation brauchst, oder einfach Fragen zu den Features hast. Wir sind hier um dich zu unterstützen.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Auch unsere Community steht dir zur Seite und beantwortet deine Fragen gerne. Erstelle einfach ein Ticket auf GitHub, oder tritt unserem Discord Server bei.',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Klicke einfach auf das Chat-Icon unten rechts, um einen neuen Chat auf polnisch oder englisch zu starten. Wir freuen uns von dir zu hören.',
	StellaModIsNotAffiliatedWithHoyoverse: 'Bitte beachte, dass Stella Mod in keiner Weise in Verbindung mit Hoyoverse (MiHoYo) steht.',
	JoinToDiscordServer: 'Tritt unserem Discord Server bei',
	CommentMyYTVideo: 'Kommentiere meine Videos auf YouTube',
};

// GET /genshin-impact-reshade/videos
module.exports.videos = {
	WatchVideosOnYT: 'Schaue Videos auf YouTube',
	IfYouWantToRecordNewVideo: 'Wenn du ein Video aufnehmen und hier veröffentlichen möchtest, lade es auf YouTube hoch und sende mir eine Nachricht.',
	DeprecatedMovies: 'Veraltete Filme',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'Die Filme sind von älteren Versionen von Stella Mod und werden als veraltet angesehen.',
	FirstModRelease: 'Erster Mod release',
	Gameplay: 'Spiel',
};

// GET /genshin-impact-reshade/read-more
module.exports.readMore = {
	tooltips: {
		TheBiggestSourceOfKnowledge: 'The biggest source of knowledge and information is hidden right behind this button!',
	},

	ReadMoreInformation: 'Mehr Infos lesen',
	MoreInfoIsAvailableOnGHWiki: 'Więcej informacji znajdziesz w repozytorium {1}sefinek24/Genshin-Impact-ReShade{/1} na stronie {2}GitHub Wiki{/2}.',
	HowToInstall: 'Wie installieren?',
	ViewChangelog: 'Änderungshistorie ansehen',
	PrivacyPolicy: 'Datenschutzrichtlinie',
	SeeContents: 'Inhalt sehen',
	GameCompatibility: 'Spiele Kompatibilität',
	RecommendedGameSettings: 'Spieleinstellung vorschlagen',
	PCRequirements: 'PC Voraussetzungen',
	SupportedOperatingSystems: 'Unterstützte Systeme',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'Alle Repositories auf GitHub',
	IfYouWantToBecomeContributor: 'Wenn du zu dem Projekt beitragen möchtest, erstelle gerne einen Pull-Request. Vielen Dank und happy coding!',
};
