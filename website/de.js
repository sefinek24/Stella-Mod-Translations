module.exports.data = {
	FileVersion: '2.0.3',
	LastUpdate: '21.06.2023',
	Contributors: [{
		ShizuKoto: {
			GitHub: 'https://github.com/ShizuKoto',
			Website: null,
		},
	}],
};

// Main
module.exports.default = {
	tooltips: {
		OfficialDiscordServer: 'Offizieller Discord-Server',
		GitHubRepositories: 'GitHub-Repositories',
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
		BadRequest: 'Fehler 400: Bad Request',
		InvalidURL: 'Die Antwort-URL ist ungültig.',
		ReferrerURL: 'Deine referrer URL',
		CorrectRefURL: 'Korrekte URL',
	},

	wrongOs: {
		DeviceIsNotSupported: 'Gerät wird nicht unterstützt.',
		SorryYourDeviceIsNotSupported: 'Ups. Dein Gerät wird nicht unterstützt.',
		ViewSupportedOperatingSystems: 'Hier findest du alle unterstützten Geräte.',
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'Wir können die ZIP-Datei nicht auf dem Server finden',
		NewUpdateIsComing: 'Kommt ein neues Update? Wahrscheinlich...\nJedenfalls.. Bitte versuche es später erneut, oder melde diesen Fehler auf dem Discord Server.',
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
		ClickHereToGoToTheYTPage: 'Kick hier, um auf die YouTube Seite zu gelangen.',
		GiveAStarToMyReposOnGitHub: 'Gib meinem Repo auf GitHub einen Stern.',
	},

	LeaveYourFeedback: 'Meinung hinterlassen',
	IfYouLikeThisProjectSupportMe: 'Wenn dir dieses Projekt zusagt, folge mir bitte auf meinem {1}YouTube Kanal{/1}, gib dem Projekt einen Stern {2}auf GitHub{/2}, oder {3}unterstützte mich{/3} auf anderen Wegen.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Außerdem: Wenn du irgendeine Art von Feedback, Verbesserungsvorschlägen oder sonstiges hast oder loswerden willst, kontaktiere uns gerne auf einem der verfügbaren Wege. Zum Beispiel im Chat.',

	btn: {
		BelowYTVideo: 'Unter dem YouTube Video',
		OnTheDiscordServer: 'Auf dem Discord Server',
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	tooltips: {
		JoinOurOfficialDiscordServer: 'Trete unserem offiziellen Discord Server bei.',
		LeaveACommendBelowMyVideo: 'Hinterlasse einen Kommentar unter meinem Video.',
		ReturnTo: 'Zurück zu: Genshin Stella Mod - Hier beginnt dein Abenteuer.',
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
		TheBiggestSourceOfKnowledge: 'Die größte Quelle an Infos und Wissen verbirgt sich direkt hinter diesem Button!',
	},

	ReadMoreInformation: 'Mehr Infos lesen',
	MoreInfoIsAvailableOnGHWiki: 'Mehr Infos kannst du im GitHub Repository {1}sefinek24/Genshin-Impact-ReShade{/1} auf der Seite {2}GitHub Wiki{/2} finden.',
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

// For patrons
module.exports.forPatrons = {
	// captcha.ejs
	AreUARobot: 'Bist du ein Roboter?',
	Status: 'Status',
	WaitingForUser: 'Waiting for user interaction...', // TODO
	VerifyingSession: 'Verifying session...', // TODO
	Success: 'Erfolg',
	ValidateRequest: 'Validate request', // TODO
	NextPage: 'Next page',
	WrongStatusCode: 'Fehler. Habe falschen Status ({0}) von sefinek.net erhalten.',
	Failed: 'Fehlgeschlagen',
	Expired: 'Sitzung abgelaufen. Bitte aktualisiere diese Seite.',
	Canceled: 'Sitzung wurde vom Nutzer abgebrochen. Bitte erneut versuchen.',
	FatalError: 'Fehler. Bitte versuche es erneut und aktualisiere diese Seite..',

	// index.ejs
	Header: 'Fordere deine Vorteile {0} an!',

	1: 'Vielen Dank für deine Unterstützung! IDeinehre Großzügigkeit und Ermutigung sind für mich von unschätzbarem Wert und ich schätze dein Vertrauen in mich wirklich.',
	2: 'Als Zeichen meiner Dankbarkeit erhältst du Zugang zu Vorteilen.',
	3: 'Wenn du Fragen, Bedenken oder Anmerkungen zu meiner Arbeit hast, zögere bitte nicht, mich jederzeit zu kontaktieren.',

	4: 'Denk daran, dass Vorteile nur einmal mit einem generierten Token abgeholt werden können (Link).',
	5: 'Wenn du jedoch den entsprechenden Befehl auf dem Discord-Server verwendest und einen Grund angibst, warum du die Vorteile erneut in Anspruch nehmen möchtest, kannst du einen neuen Schlüssel generieren.',
	6: 'Wann verliere ich den Zugang zu meinen Vorteilen? Wenn dein Patron-Abonnement abläuft.',

	7: 'Nachdem du die App heruntergeladen hast, nimm dir bitte etwas Zeit, die Lizenzbedingungen zu lesen.',
	8: 'Dies hilft dir zu verstehen, wie du die Anwendung nutzen kannst und welche Rechte und Pflichten damit verbunden sind.',

	9: 'Wenn du deine Vorteile aus irgendeinem Grund erneut anfordern musst, kannst du {code};receive{/code} erneut auf unserem Discord-Server ausführen.',
	10: 'Ich informiere dich außerdem darüber, dass der Link automatisch um 00:00 Uhr polnischer Zeit abläuft.',

	ThankYouForYourSupport: 'Nochmals! Vielen Dank für deine Unterstützung!',
	SefinekOwO: '~ Sefinek',

	clickHereToDownload: 'Zum downloaden hier klicken',

	// received.ejs
	ThisMethodIsNotAllowed: 'Diese Methode ist nicht erlaubt.',
	YourBenefitsHaveAlreadyBeenReceived: 'Deine Benefits wurden bereits empfangen {0}, {1}.',
	Country: 'Zeit für das Land: {0}',
	ThankUForYourSupport: 'Vielen Dank für deine Unterstützung!',

	// error.ejs
	SomethingWentWrong: 'Sad cat >~~< Something went wrong...', // TODO
	InvalidKeyProvided: 'Invalid key provided.', // TODO
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'This link has expired and will no longer be active.', // TODO
	ErrorOccurredPleaseTryAgain: 'Error occurred. Please try again.', // TODO
};