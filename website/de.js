module.exports.data = {
	Version: '2.6.0',
	LastUpdate: '31.12.2023',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://github.com/sefinek24)',
		'Shizu (https://github.com/ShizuKoto)',
		'ChatGPT (https://chat.openai.com)',
	],
};

// Main
module.exports.default = {
	And: 'und',
	From: 'von',
	In: 'in',

	Back: 'Zurück',
	GoBack: 'Go back',
	GoBackTo: 'Go back to {0}',
	GoToHomePage: 'Go to home page',
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
	Header: 'Genshin Impact Stella Mod von Sefinek',
	Text1: 'Sichere und einzigartige Funktionen wie ReShade-Verbesserungen, sorgfältig erstellte benutzerdefinierte Grafiken und beeindruckendes FPS-Entriegeln bieten Gamern das beste Spielerlebnis!',
	Text2: '3DMigoto hebt den Mod auf ein noch höheres Niveau und sorgt für ein immersives Erlebnis. Zusätzlich vereinfacht unser eigener Launcher den gesamten Prozess und hilft den Spielern, schnell ins Geschehen einzusteigen.',
	FinalText: 'Warte nicht! Tauche jetzt in die verbesserte Welt von Teyvat ein und erschaffe unvergessliche Momente! Viel Spaß!',

	Download: 'Herunterladen',
	DownloadTooltip: 'Hier klicken, um den x64-Bit-Installer für Windows 10 und 11 herunterzuladen.',

	StelaModPlusTooltip: 'Erhalte Zugriff auf die kostenpflichtige Version von Stella Mod Plus und genieße zahlreiche Vorteile und verbesserte Spielerlebnisse!',

	Documentation: 'Dokumentation',
	DocumentationTooltip: 'Überprüfe die Systemanforderungen, empfohlene Spieleinstellungen und mehr!',

	Gallery: 'Galerie',
	GalleryTooltip: 'Sieh dir die Screenshots aus dem Spiel mit injiziertem ReShade an.',

	Videos: 'Videos',
	VideosTooltip: 'Schau dir unsere Videos über den Mod und das Startprogramm an.',

	Feedback: 'Feedback',
	FeedbackTooltip: 'Teile deine Meinung über meine Arbeit und Stella Mod mit.',

	Support: 'Support',
	SupportTooltip: 'Klicke hier, wenn du Hilfe benötigst.',

	MainPage: 'Hauptseite',
	MainPageTooltip: 'Startseite - Offizielle Website von Sefinek',

	PleaseSupportMe: 'Bitte unterstütze meine Arbeit',
	SupportMyWork: 'Unterstütze meine Arbeit',
	SupportMe: 'Unterstütze mich',

	DownloadingData: 'Daten werden heruntergeladen...',
	Version: 'Version',
	TheVersionWithoutCaps: 'die Version',
	DownloadCount: 'Download-Zähler',
	LastDownload: 'Letzter Download',

	modal: {
		ThankYouForDownloading: 'Danke fürs Herunterladen',
		BecomeMyPatronToGainMoreBenefits: 'Werde mein Patron, um weitere Vorteile zu erhalten, wie die Möglichkeit, 3DMigoto zusammen mit FPS Unlocker & ReShade zu verwenden + eine große Sammlung fehlerfreier Mods + eine Sammlung der neuesten 300 Shader + ein Add-On, das Filter daran hindert, sich mit der Benutzeroberfläche (UI) zu überlappen + Ray Tracing-Preset und vieles mehr!',
		JoinOurDiscordServerToReceiveNotifications: 'Trete unserem Discord-Server bei, um Benachrichtigungen über die neuesten Updates, Funktionen und andere Ankündigungen zu erhalten. Kontaktiere den Schöpfer gerne, wenn du Fragen hast oder auf Probleme stößt.',
		IfYouReEnjoyingStellaModConsiderLeavingAReview: 'Hinterlasse eine Bewertung auf {a}trustpilot.com{/a}, nachdem du die Software getestet hast!',
		WishingYouAWonderfulDayOrNight: 'Ich wünsche dir einen wundervollen Tag oder eine gute Nacht!',
		TheTotalNumberOfDownloadsNowIs: 'Die Gesamtanzahl der Downloads beträgt jetzt',
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

	tooltips: {
		GoBackToMainGalleryPage: 'Go back to main gallery page',
	},
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
	StellaModIsNotAffiliatedWithHoyoverse: 'Bitte beachte, dass Stella Mod in keiner Weise in Verbindung mit Hoyoverse steht.',
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
	bytes: 'bytes',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'Alle Repositories auf GitHub',
	IfYouWantToBecomeContributor: 'Wenn du zu dem Projekt beitragen möchtest, erstelle gerne einen Pull-Request. Vielen Dank und happy coding!',
};

// GET /genshin-impact-reshade/subscription
module.exports.subscription = {
	ChooseYourSubscriptionTier: 'Choose your subscription tier',
	IfYouAreInterestedInTheBenefits: 'If you\'re interested in the benefits, please explore all the available tiers to see which one suits your preferences. Hopefully, you\'ll find one that piques your interest!',
	IfYouHaveAnyQuestions: 'Do you have any questions? Don\'t hesitate to join our Discord server or contact us via email. You can find the contact information on the main page of this website.',

	Recommended: 'Recommended',
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

	Crypto: 'Crypto',
	IfYouWantToMakeAPaymentUsingCrypto: 'If you want to make a payment using cryptocurrency, please contact the developer.',
	IAcceptPaymentsOnlyOnBinance: 'I accept payments only on Binance.',
	CloseModal: 'Close modal',

	PaymentSystem: {
		Header: 'Payment system',
		1: 'We are delighted to announce that our secure payment system is powered by {0}. With Stripe, you can confidently make payments, knowing that your financial information is handled with the highest level of security.',
		2: 'Stripe is a well-trusted and globally recognized payment processing platform that guarantees smooth and secure transactions for our customers. Whether you\'re buying products, subscribing to services, or making donations, Stripe\'s robust infrastructure ensures a dependable and trouble-free payment experience.',
		3: 'Please be assured that your sensitive payment details are encrypted and safeguarded throughout the entire payment process. Your privacy and security are our top priorities.',
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