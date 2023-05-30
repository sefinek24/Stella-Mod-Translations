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

module.exports.errors = {
	400: {
		BadRequest: '❎ Error 400: Bad Request',
		InvalidURL: 'Die Antwort-URL ist ungültig.',
		ReferrerURL: 'Deine referrer URL',
		CorrectRefURL: 'Korrekte URL',
	},

	deviceNotSupported: {
		DeviceIsNotSupported: '❎ Gerät wird nicht unterstützt.',
		SorryYourDeviceIsNotSupported: 'Ups. Dein Gerät wird nicht unterstützt.',
		ViewSupportedOperatingSystems: 'Hier findest du alle unterstützten Geräte.',
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'Wir können die ZIP-Datei nicht auf dem Server finden',
		NewUpdateIsComing: 'Kommt ein neues Update? Wahrscheinlich...<br>Jedenfalls.. Bitte versuche es später erneut, oder melde diesen Fehler auf dem Discord Server.',
	},

	missingLang: {
		OhNoSomethingWentWrong: 'Oh nein! Etwas ist schief gelaufen...',
		WereSorryButWeCouldFindTheCorrectTranslation: 'Entschuldigung, wir konnten leider keine Übersetzung für deine Sprache {0} finden. Für mehr Details prüfe bitte die Konsole. (≧◡≦) ♡',
		IfYouWouldLikeToContributeYourOwnTranslationOrHelpUsFixThisIssue: 'Wenn du uns helfen möchtest und eine eigene Übersetzung bereitstellen willst, erstelle bitte einen <a href="https://github.com/sefinek24/Genshin-Stella-Mod_Translations/pulls">Pull Request</a> auf unserem <a href="https://github.com/sefinek24/Genshin-Stella-Mod_Translations">GitHub Repository</a>. Vielen Dank für deine Hilfe! o(>ω<)o',
		SwitchLanguageToEnglish: 'Sprache zu Englisch wechseln',
		YesClickMe: 'Ja, klick mich!',
	},
};

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
	JoinOurDiscordServer: 'Trete uns auf unserem <a href="https://discord.gg/SVcbaRc7gH" target="_blank" data-toggle="tooltip" title="Invitation to our Discord server.">Discord Server</a> bei und erhalte Infos zu neuen Updates, Features und Nachrichten.',

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
		ThankYouForDownloading: 'Vielen Dank fürs herunterladen. Trete uns jetzt auf unserem <a href="https://discord.gg/SVcbaRc7gH" target="_blank" data-toggle="tooltip" title="Invitation to our Discord server.">Discord Server</a> bei und erhalte Infos zu neuen Updates, Features und Nachrichten. Habe einen schönen Tag oder eine schöne Nacht!',
		TheTotalNumberOfDownloadsNowIs: 'Die aktuell gesamte Anzahl an Downloads ist',
		NoProblem: 'Kein Problem',
	},
};

module.exports.gallery = {
	GalleryPage: 'Galerie - Seite',
	GalleryCompareReleases: 'Galerie - Vergleiche Versionen -',
	GalleryCompares: 'Galerie - Vergleiche',
	ScreenshotsAreAvailableInHighQuality: 'Bildschirmaufnahmen stehen in hoher Auflösung zur Verfügung. Es könnte eine Weile dauern, bis sie erscheinen.',
	WebsiteIsNotSupportedOnMobileDevices: 'Diese Website wird nicht auf mobilen Endgeräten unterstützt.',
	SomeImageCanBeOutdated: 'Einige Bilder könnten nicht mehr dem neusten Stand entsprechen!',

	SeeComparesFromTheNewVersions: 'Schau dir Vergleiche zwischen verschiedenen Versionen an',
	ViewCompareFromTheLatestVersions: 'Schau dir den Vergleich zu der neusten Version an',
	SeeTheComparisonBetween: '\uD83C\uDF0C Sichte Vergleiche zwischen ...',
	ThePageYouAreCurrentlyOnDisplaysAComparison: 'Die Seite, auf der du dich befindest, stellt einen Vergleich dar.',
	OldVersion: 'Alte Version',
	NewVersion: 'Neue Version',

	WithMod: 'Mit mod',
	WithoutMod: 'Ohne mod',

	BonusScreenshot: '\uD83D\uDE40 Bonus Bildschirmaufnahme',
};

module.exports.feedback = {
	LeaveYourFeedback: 'Meinung hinterlassen \uD83D\uDD16',
	IfYouLikeThisProjectSupportMe: 'Wenn dir dieses Projekt zusagt, folge mir bitte auf meinem <a href="https://www.youtube.com/channel/UClrAIcAzcqIMbvGXZqK7e0A?sub_confirmation=1" target="_blank">YouTube Kanal</a>, gib dem Projekt einen Stern <a href="https://github.com/sefinek24/Genshin-Impact-ReShade" target="_blank">auf GitHub</a>, oder <a href="/support-me">unterstützte mich</a> auf anderen Wegen.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Außerdem: Wenn du irgendeine Art von Feedback, Verbesserungsvorschlägen oder sonstiges hast oder loswerden willst, kontaktiere uns gerne auf einem der verfügbaren Wege. Zum Beispiel im Chat.',
};

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

module.exports.videos = {
	WatchVideosOnYT: 'Schaue Videos auf YouTube \uD83C\uDFA5',
	IfYouWantToRecordNewVideo: 'Wenn du ein Video aufnehmen und hier veröffentlichen möchtest, lade es auf YouTube hoch und sende mir eine Nachricht.',
	DeprecatedMovies: 'Veraltete Filme',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'Die Filme sind von älteren Versionen von Stella Mod und werden als veraltet angesehen.',
	FirstModRelease: 'Erster Mod release',
	Gameplay: 'Spiel',
};


module.exports.readMore = {
	ReadMoreInformation: 'Mehr Infos lesen \uD83D\uDE3A',
	HowToInstall: 'Wie installieren?',
	ViewChangelog: '\uD83D\uDCDD Änderungshistorie ansehen',
	PrivacyPolicy: '\uD83D\uDC65 Datenschutzrichtlinie',
	SeeContents: '\uD83D\uDCE6 Inhalt sehen',
	GameCompatibility: '\uD83D\uDEE0 Spiele Kompatibilität',
	RecommendedGameSettings: '⚙️ Spieleinstellung vorschlagen',
	PCRequirements: '\uD83D\uDCBB PC Voraussetzungen',
	SupportedOperatingSystems: '\uD83D\uDD27 Unterstützte Systeme',
};


module.exports.github = {
	AllReposOnGithub: '\uD83D\uDC08 Alle Repositories auf GitHub',
	IfYouWantToBecomeContributor: 'Wenn du zu dem Projekt beitragen möchtest, erstelle gerne einen Pull-Request. Vielen Dank und happy coding!',
};