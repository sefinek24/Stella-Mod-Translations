module.exports.data = {
	FileVersion: '2.1.2',
	LastUpdate: '03.09.2023',
	Contributors: [{
		ShizuKoto: {
			GitHub: 'https://github.com/ShizuKoto',
			Website: null,
		},
		ChatGPT: {},
	}],
};

// Main
module.exports.default = {
	And: 'und',
	From: 'von',
	In: 'in',
	Back: 'Zurück',
	Next: 'Weiter',

	DiscordServer: 'Discord Server',
	DiscordServerTooltip: 'Einladung zu unserem Discord-Server',

	tooltips: {
		OfficialDiscordServer: 'Offizieller Discord-Server',
		GitHubRepositories: 'GitHub-Repositorys',
	},
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
	Header: 'Genshin Impact Stella Mod erstellt von Sefinek',
	Text1: 'Sichere und einzigartige Funktionen wie ReShade-Verbesserungen, sorgfältig gestaltete benutzerdefinierte Grafiken und beeindruckendes Freischalten von FPS bieten Spielern das beste Spielerlebnis!',
	Text2: '3DMigoto bringt die Mod noch auf ein höheres Level und bietet ein immersives Erlebnis. Zusätzlich optimiert unser eigener Launcher den gesamten Prozess und hilft den Spielern, schnell ins Geschehen einzutauchen.',
	// Text3: 'Bleiben Sie auf dem neuesten Stand mit den neuesten Nachrichten und schließen Sie sich dem {a}Discord-Server{/a} an, um Teil einer Gemeinschaft gleichgesinnter Spieler zu sein, die ihr Genshin Impact-Erlebnis maximieren möchten.',
	FinalText: 'Warte nicht! Tauche jetzt in die verbesserte Welt von Teyvat ein und schaffe unvergessliche Momente! Viel Spaß!',

	Download: 'Herunterladen',
	DownloadTooltip: 'Hier klicken, um den x64-Bit-Installer für Windows 10 und 11 herunterzuladen.',

	Gallery: 'Galerie',
	GalleryTooltip: 'Sehen Sie sich die Screenshots aus dem Spiel mit ReShade-Einspritzung an.',

	WatchVideos: 'Videos ansehen',
	WatchVideosTooltip: 'Sehen Sie sich meine Videos über den Mod und das Startprogramm an.',

	ReadMore: 'Mehr lesen',
	ReadMoreTooltip: 'Überprüfen Sie die Systemanforderungen, empfohlene Spieleinstellungen und mehr!',

	Feedback: 'Feedback',
	FeedbackTooltip: 'Teilen Sie Ihre Meinung mit.',

	Support: 'Unterstützung',
	SupportTooltip: 'Hier klicken, wenn Sie Hilfe benötigen.',

	MainPage: 'Hauptseite',
	MainPageTooltip: 'Startseite - Offizielle Website von Sefinek',

	PleaseSupportMe: 'Bitte unterstützen Sie meine Arbeit',
	SupportMyWork: 'Unterstützen Sie meine Arbeit',
	SupportMe: 'Unterstützen Sie mich',

	DownloadingData: 'Daten werden heruntergeladen...',
	Version: 'Version',
	TheVersionWithoutCaps: 'die Version',
	DownloadCount: 'Anzahl der Downloads',
	LastDownload: 'Letzter Download',

	modal: {
		ThankYouForDownloading: 'Vielen Dank fürs Herunterladen',
		BecomeMyPatronToGainMoreBenefits: 'Werden Sie mein Patron, um weitere Vorteile wie die Möglichkeit zu erhalten, 3DMigoto zusammen mit FPS Unlocker & ReShade zu nutzen + eine große Sammlung von fehlerfreien Mods + eine Sammlung der neuesten 300 Shader + ein Add-On, das verhindert, dass Filter mit der Benutzeroberfläche (UI) überlappen + Ray Tracing Voreinstellung und vieles mehr!',
		JoinOurDiscordServerToReceiveNotifications: 'Treten Sie unserem Discord-Server bei, um Benachrichtigungen über die neuesten Updates, Funktionen und andere Ankündigungen zu erhalten. Zögern Sie nicht, den Schöpfer zu kontaktieren, wenn Sie Fragen haben oder auf Probleme stoßen.',
		IfYouReEnjoyingStellaModConsiderLeavingAReview: 'Hinterlassen Sie eine Bewertung auf {a}trustpilot.com{/a}, nachdem Sie die Software getestet haben!',
		WishingYouAWonderfulDayOrNight: 'Ich wünsche Ihnen einen wundervollen Tag oder eine gute Nacht!',
		TheTotalNumberOfDownloadsNowIs: 'Die Gesamtzahl der Downloads beträgt jetzt',
		NoProblem: 'Kein Problem',
	},

	tooltips: {
		PageViews: 'Seitenaufrufe',
	},
};

// GET /genshin-impact-reshade/gallery
module.exports.gallery = {
	GalleryPage: 'Galerie - Seite',
	GalleryCompareReleases: 'Galerie - Vergleiche Versionen:',
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
	LeaveYourFeedback: 'Meinung hinterlassen',
	IfYouLikeThisProjectSupportMe: 'Wenn dir dieses Projekt zusagt, folge mir bitte auf meinem {1}YouTube Kanal{/1}, gib dem Projekt einen Stern {2}auf GitHub{/2}, oder {3}unterstützte mich{/3} auf anderen Wegen.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Außerdem: Wenn du irgendeine Art von Feedback, Verbesserungsvorschlägen oder sonstiges hast oder loswerden willst, kontaktiere uns gerne auf einem der verfügbaren Wege. Zum Beispiel im Chat.',

	btn: {
		BelowYTVideo: 'Unter dem YouTube Video',
		OnTheDiscordServer: 'Auf dem Discord Server',
	},

	tooltips: {
		ClickHereToGoToTheYTPage: 'Kick hier, um auf die YouTube Seite zu gelangen.',
		GiveAStarToMyReposOnGitHub: 'Gib meinem Repo auf GitHub einen Stern.',
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	SomeQuestions: 'Fragen? Brauchst du Hilfe?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Hast du Probleme, oder Fragen zu Stella Mod? Wenn ja, dann zögere nicht uns zu kontaktieren. Unser Team steht für sämtliche Fragen oder Bedenken zur Verfügung.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Ob du Hilfe bei der Installation brauchst, oder einfach Fragen zu den Features hast. Wir sind hier um dich zu unterstützen.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Auch unsere Community steht dir zur Seite und beantwortet deine Fragen gerne. Erstelle einfach ein Ticket auf GitHub, oder tritt unserem Discord Server bei.',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Klicke einfach auf das Chat-Icon unten rechts, um einen neuen Chat auf polnisch oder englisch zu starten. Wir freuen uns von dir zu hören.',
	StellaModIsNotAffiliatedWithHoyoverse: 'Bitte beachte, dass Stella Mod in keiner Weise in Verbindung mit Hoyoverse (MiHoYo) steht.',
	JoinToDiscordServer: 'Tritt unserem Discord Server bei',
	CommentMyYTVideo: 'Kommentiere meine Videos auf YouTube',

	tooltips: {
		JoinOurOfficialDiscordServer: 'Trete unserem offiziellen Discord Server bei.',
		LeaveACommendBelowMyVideo: 'Hinterlasse einen Kommentar unter meinem Video.',
		ReturnTo: 'Zurück zu: Genshin Stella Mod - Hier beginnt dein Abenteuer.',
	},
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

// GET /genshin-impact-reshade/docs
module.exports.docs = {
	TableOfContents: 'Inhaltsverzeichnis',
	1: {
		Introduction: '{0}. {1} Einführung in den Stella Mod',
		ReadMe: '{0}. {1} README.md',
		Support: '{0}. {1} Unterstützung',
		FAQ: '{0}. {1} FAQ',
		WhatIs: '{0}. {1} Was ist...',
		HowToAvoidABan: '{0}. {1} Wie kann man einen Bann vermeiden?',
		ToS: '{0}. {1} Nutzungsbedingungen',
		PrivacyPolicy: '{0}. {1} Datenschutzrichtlinie',
		SoftwareLicense: '{0}. {1} Softwarelizenz',
		Installation: '{0}. {1} Installation',
	},

	Changelogs: 'Änderungsprotokoll',
	2: {
		Versions: '{0}. {1} Versionen {2}.x.x',
	},

	DocumentCreationDate: 'Dokumentenerstellungsdatum: {0}',
	LastUpdate: 'Letzte Aktualisierung: {0}',
	DocumentSize: 'Dokumentengröße: {0}',

	GoToHomePage: 'Zur Startseite gehen',
	GoBack: 'Zurück gehen',
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
	WaitingForUser: 'Warten auf Benutzerinteraktion...',
	VerifyingCaptcha: 'Überprüfe Captcha...',
	VerifyingSession: 'Überprüfe Sitzung...',
	Successfully: 'Erfolgreich',
	ValidateRequest: 'Anfrage validieren',
	NextPage: 'Nächste Seite',
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
	SomethingWentWrong: 'Traurige Katze >~~< Etwas ist schief gelaufen...',
	InvalidUserId: 'Ungültige Benutzer-ID angegeben.',
	InvalidKeyProvided: 'Ungültiger Schlüssel angegeben.',
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'Dieser Link ist abgelaufen und wird nicht mehr aktiv sein.',
	ErrorOccurredPleaseTryAgain: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
};