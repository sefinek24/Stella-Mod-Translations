exports.data = {
	Version: '2.8.1',
	LastUpdate: '12.05.2024',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://sefinek.net)',
		'Shizu (https://github.com/ShizuKoto)',
		'ChatGPT (https://chat.openai.com)'
	]
};

// Main
exports.default = {
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
		GitHubRepositories: 'GitHub-Repositorys'
	}
};

// Errors
exports.errors = {
	400: {
		BadRequest: 'Fehler 400: Bad Request',
		InvalidURL: 'Die Antwort-URL ist ungültig.',
		ReferrerURL: 'Deine referrer URL',
		CorrectRefURL: 'Korrekte URL'
	},

	wrongOs: {
		DeviceIsNotSupported: 'Gerät wird nicht unterstützt.',
		SorryYourDeviceIsNotSupported: 'Ups. Dein Gerät wird nicht unterstützt.',
		ViewSupportedOperatingSystems: 'Hier findest du alle unterstützten Geräte.'
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'Wir können die ZIP-Datei nicht auf dem Server finden',
		NewUpdateIsComing: 'Kommt ein neues Update? Wahrscheinlich...\nJedenfalls.. Bitte versuche es später erneut, oder melde diesen Fehler auf dem Discord Server.'
	}
};

// GET /genshin-impact-reshade
exports.home = {
	Header: 'Genshin Impact Stella Mod by Sefinek',
	Text1: 'Safe features such as ReShade enhancements, carefully crafted shaders, and impressive FPS unlocking ensure the best gaming experience for players!',
	Text2: '3DMigoto enhances the mod for an even more engaging gameplay. Additionally, our own launcher streamlines the whole process, helping players quickly jump into action.',
	FinalText: 'Don\'t hesitate and download now! Dive into the enhanced world of Teyvat today and create unforgettable moments. Have fun!',

	Download: 'Herunterladen',
	DownloadTooltip: 'Hier klicken, um den x64-Bit-Installer für Windows 10 und 11 herunterzuladen.',

	StelaModPlusTooltip: 'Erhalte Zugriff auf die kostenpflichtige Version von Stella Mod Plus und genieße zahlreiche Vorteile und verbesserte Spielerlebnisse!',

	Documentation: 'Dokumentation',
	DocumentationTooltip: 'Überprüfe die Systemanforderungen, empfohlene Spieleinstellungen und mehr!',

	Gallery: 'Galerie',
	GalleryTooltip: 'Sieh dir die Screenshots aus dem Spiel mit injiziertem ReShade an.',

	Videos: 'Videos',
	VideosTooltip: 'Schau dir unsere Videos über den Mod und das Startprogramm an.',

	Statistics: 'Statistics',
	StatisticsTooltip: 'Check how many people are currently playing Genshin Impact with the Stella mod activated.',

	Feedback: 'Feedback',
	FeedbackTooltip: 'Teile deine Meinung über meine Arbeit und Stella Mod mit.',

	Support: 'Support',
	SupportTooltip: 'Klicke hier, wenn du Hilfe benötigst.',

	MainPage: 'Hauptseite',
	MainPageTooltip: 'Startseite - Offizielle Website von Sefinek',

	PleaseSupportMe: 'Bitte unterstütze meine Arbeit',
	SupportMyWork: 'Unterstütze meine Arbeit',

	DownloadingData: 'Daten werden heruntergeladen...',
	Version: 'Version',
	TheVersionWithoutCaps: 'die Version',
	DownloadCount: 'Download-Zähler',
	LastDownload: 'Letzter Download',

	FeedbackOnTrustpilot: 'Feedback on Trustpilot',

	AreYouARobot: 'Are you a robot?',

	modal: {
		ThankYouForDownloading: 'Thank you for downloading',
		BecomeAStellaModSubscriber: 'Become a Stella Mod Plus subscriber to gain access to additional benefits such as the ability to use 3DMigoto, FPS Unlocker, and ReShade simultaneously, a large collection of error-free mods, enhanced security (blocking telemetry and analytics), a package of the latest shaders, an add-on to prevent filter overlays on the user interface (UI), Ray Tracing presets, and much more!',
		JoinOurDiscordServerToReceiveNotifications: 'Join our Discord server to receive notifications about the latest updates, features, and other announcements. Contact the creator if you have any questions or encounter any issues. We are always ready to help. Wishing you a great day or night!',
		IfYouReEnjoyingStellaModConsiderLeavingAReview: 'Leave a review at {a}trustpilot.com{/a} after testing the software!',
		TheTotalNumberOfDownloadsNowIs: 'The total number of downloads is now',
		NoProblem: 'No problem'
	},

	tooltips: {
		PageViews: 'Page views. Statistics have been collected since January 19, 2024.',
		ShareYourFeedbackOnTrustpilot: 'Share your feedback on Trustpilot! We would greatly appreciate it.'
	}
};

// GET /genshin-impact-reshade/gallery
exports.gallery = {
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
		GoBackToMainGalleryPage: 'Go back to main gallery page'
	}
};

// GET /genshin-impact-reshade/feedback
exports.feedback = {
	LeaveYourFeedback: 'Meinung hinterlassen',
	IfYouLikeThisProjectSupportMe: 'Wenn dir dieses Projekt zusagt, folge mir bitte auf meinem {1}YouTube Kanal{/1}, gib dem Projekt einen Stern {2}auf GitHub{/2}, oder {3}unterstützte mich{/3} auf anderen Wegen.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Außerdem: Wenn du irgendeine Art von Feedback, Verbesserungsvorschlägen oder sonstiges hast oder loswerden willst, kontaktiere uns gerne auf einem der verfügbaren Wege. Zum Beispiel im Chat.',

	btn: {
		BelowYTVideo: 'Unter dem YouTube Video',
		OnTheDiscordServer: 'Auf dem Discord Server'
	},

	tooltips: {
		ClickHereToGoToTheYTPage: 'Kick hier, um auf die YouTube Seite zu gelangen.',
		GiveAStarToMyReposOnGitHub: 'Gib meinem Repo auf GitHub einen Stern.'
	}
};

// GET /genshin-impact-reshade/support
exports.support = {
	SomeQuestions: 'Fragen? Brauchst du Hilfe?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Do you have any issues with Stella Mod or simply a question? If so, please do not hesitate to contact us! Our team is at your disposal for any inquiries or concerns.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Ob du Hilfe bei der Installation brauchst, oder einfach Fragen zu den Features hast. Wir sind hier um dich zu unterstützen.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Auch unsere Community steht dir zur Seite und beantwortet deine Fragen gerne. Erstelle einfach ein Ticket auf GitHub, oder tritt unserem Discord Server bei.',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Klicke einfach auf das Chat-Icon unten rechts, um einen neuen Chat auf polnisch oder englisch zu starten. Wir freuen uns von dir zu hören.',
	StellaModIsNotAffiliatedWithHoyoverse: 'Bitte beachte, dass Stella Mod in keiner Weise in Verbindung mit Hoyoverse steht.',
	JoinToDiscordServer: 'Tritt unserem Discord Server bei',
	SendAnEmail: 'Send an email',

	tooltips: {
		JoinOurOfficialDiscordServer: 'Trete unserem offiziellen Discord Server bei.',
		SendAnEmailToTheDeveloper: 'Send an email to the developer if you are expecting a more substantive response',
		ReturnTo: 'Zurück zu: Genshin Stella Mod - Hier beginnt dein Abenteuer.'
	}
};

// GET /genshin-impact-reshade/videos
exports.videos = {
	WatchVideosOnYT: 'Schaue Videos auf YouTube',
	IfYouWantToRecordNewVideo: 'If you want to record and upload a video about Stella Mod to YouTube, please contact me. The link to your video will be added to this page.',
	DeprecatedMovies: 'Veraltete Filme',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'Die Filme sind von älteren Versionen von Stella Mod und werden als veraltet angesehen.',
	FirstModRelease: 'Erster Mod release',
	Gameplay: 'Spiel'
};

// GET /genshin-impact-reshade/docs
exports.docs = {
	TableOfContents: 'Table of Contents',
	1: {
		Introduction: '{0}. {1} Introduction',
		Requirements: '{0}. {1} Requirements',
		WhatIs: '{0}. {1} What is...',
		FAQ: '{0}. {1} FAQ',
		Support: '{0}. {1} Support',
		TermsOfUse: '{0}. {1} Terms of use',
		PrivacyPolicy: '{0}. {1} Privacy policy',
		Installation: '{0}. {1} Installation',
		Compilation: '{0}. {1} Compilation',
		HowToAvoidABan: '{0}. {1} How to avoid a ban?'
	},

	Changelogs: 'Changelogs',
	2: {
		Versions: '{0}. {1} Versions {2}.x.x',
		DeprecatedReleases: '{0}. {1} Deprecated releases'
	},

	LicensesAndCredits: 'Licenses & Credits',
	3: {
		StellaModLicense: '{0}. {1} Stella Mod license',
		ReShadeLicense: '{0}. {1} ReShade license',
		FPSUnlockerLicense: '{0}. {1} FPS Unlocker license',
		MigotoLicense: '{0}. {1} 3DMigoto license',
		Credits: '{0}. {1} Credits',
		Contributors: '{0}. {1} Contributors'
	},

	DocumentCreationDate: 'Document creation date: {0}',
	LastUpdate: 'Last update: {0}',
	DocumentSize: 'File size: {0}',
	bytes: 'bytes'
};

// GET /genshin-impact-reshade/repositories
exports.github = {
	AllReposOnGithub: 'All repositories on GitHub',
	IfYouWantToBecomeContributor: 'If you want to become contributor, just create a new {a}Pull Request{/a}. Thank you very much and happy coding!',

	Translations: 'Translations',
	Resources: 'Resources',
	Documentation: 'Documentation',
	More: 'More »',

	Deprecated: 'Deprecated',

	InstallationWizard: 'Installation wizard',
	UnlockedReShade: 'Unlocked ReShade'
};

// GET /genshin-impact-reshade/subscription
exports.subscription = {
	ChooseYourSubscriptionTier: 'Choose your subscription tier',
	IfYouAreInterestedInTheBenefits: 'If you\'re interested in the benefits, please explore all the available tiers to see which one suits your preferences. Hopefully, you\'ll find one that piques your interest!',
	IfYouHaveAnyQuestions: 'Do you have any questions? Don\'t hesitate to join our Discord server or contact us via email. You can find the contact information on the main page of this website.',

	Recommended: 'Recommended',
	tiers: {
		1: {
			name: 'Little Kitten',
			description: 'Basic tier for those who just want to support the project. This is a good solution, for example, if you stopped playing Genshin Impact and no longer need the benefits from the game, but still want to support the project voluntarily.'
		},
		2: {
			name: 'Favorite Cat',
			description: 'Medium tier that offers most of the basic benefits associated with the game Genshin Impact. Ideal for players who want to enjoy additional modifications and enhancements in the game.'
		},
		3: {
			name: 'Safety Kitten',
			description: 'Advanced tier for trusted users, which offers special benefits such as systems to protect against bans, giveaways for Genshin Impact accounts, and a custom appearance for the Windows Terminal interface.'
		},
		4: {
			name: 'Keyboard Cat',
			description: 'For players who want to maximize the capabilities of their devices and enjoy the game without any disruptions. This option offers computer optimization services (via TeamViewer or AnyDesk), technical support, and the ability to use batch files in Stella Mod Launcher.'
		},
		5: {
			name: 'Cute Kitty',
			description: 'Provides access to all the benefits offered in lower tiers, and also allows activation on the most devices. Ideal for players who appreciate the work of Stella Mod creator and want to support further development and the project’s server infrastructure.'
		}
	},

	UnknownBenefit: 'Unknown benefit',

	prices: {
		MonthlyPrice: 'Monthly price',
		Every3Months: 'Every 3 months',
		YearlyPrice: 'Yearly price'
	},

	Everything: {
		FromTheTier: 'Everything from Tier {0}',
		FromTheTier12: 'Everything from Tier 1 and 2',
		FromTheTier12And3: 'Everything from Tier 1, 2 & 3',
		FromAllTheTiers: 'Everything from all Tiers'
	},

	TierName: 'Tier name',
	benefitsFull: {
		RoleOnTheDiscordServer: 'Role on the Discord server',
		VisibilityOnTheSubscriberList: 'Visibility on the subscriber list',
		NoAdsOnTheWebsiteForPatrons: 'No ads on the website for patrons (SPC)',
		PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',
		CompletePostArchive: 'Complete post archive',

		RayTracingForGenshin: 'Ray Tracing for Genshin',
		MigotoInStellaModMoreMods: '3DMigoto in Stella Mod (more mods & more fun)',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods without any bugs',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',

		CarefullyDesignedSecuritySystem: 'Carefully designed security system',
		MuchGreaterPrivacy: 'Much greater privacy',
		VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
		NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
		PhotosAndInterestingVideosOfTheDevsCats: 'Photos and interesting videos of the developer\'s cats',

		AbilityToUseBatchFiles: 'Ability to use batch files in Stella',
		OptimizationOfYourComputerForBestPerformance: 'Optimization of your PC for the best performance',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',

		ActivationPossibleOn: 'Activation possible on {u}{0} devices{/u}'
	},

	CompareAvailablePlans: 'Compare available plans',
	benefitsShort: {
		IntDevice: '{0} device',
		IntDevices: '{0} devices',

		RoleOnTheDiscordServer: 'Role on the Discord server',
		VisibilityOnTheSubscriberList: 'Visibility on the subscriber list',
		NoAdsOnTheWebsiteForPatrons: 'No ads on the website for patrons',
		PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',
		CompletePostArchive: 'Complete post archive',

		RayTracingForGenshin: 'Ray Tracing for Genshin',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods',
		MigotoInStellaModMoreMods: '3DMigoto in Stella Mod',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',

		CarefullyDesignedSecuritySystem: 'Carefully designed security system',
		MuchGreaterPrivacy: 'Much greater privacy',
		VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
		NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
		PhotosAndInterestingVideosOfTheDevsCats: 'Dev\'s cat photos & interesting videos',

		AbilityToUseBatchFiles: 'Usage of batch files',
		OptimizationOfYourComputerForBestPerformance: 'Optimization of your computer',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
		ActivationPossibleOn: 'Activation possible on'
	},

	SubscribeNow: 'Subscribe now',
	ChangeYourTier: 'Change your tier',

	SubscriptionIsTreatedAsVoluntarySupport: 'Subscription is treated as voluntary support, not as a purchase of a service or product. The benefits you receive are solely as a token of appreciation.',
	IfYouWishYouCanContinueToUseTheFreeVersionAtNoCost: 'If you wish, you can continue to use the free version at no cost. The decision is entirely up to you.',

	Crypto: 'Crypto',
	IfYouWantToMakeAPaymentUsingCrypto: 'If you want to make a payment using cryptocurrency, please contact the developer.',
	IAcceptPaymentsOnlyOnBinance: 'I accept payments only on Binance.',
	CloseModal: 'Close modal',

	PaymentSystem: {
		Header: 'Payment system',
		1: 'We are delighted to announce that our secure payment system is powered by {0}. With Stripe, you can confidently make payments, knowing that your financial information is handled with the highest level of security.',
		2: 'Stripe is a well-trusted and globally recognized payment processing platform that guarantees smooth and secure transactions for our customers. Whether you\'re buying products, subscribing to services, or making donations, Stripe\'s robust infrastructure ensures a dependable and trouble-free payment experience.',
		3: 'Please be assured that your sensitive payment details are encrypted and safeguarded throughout the entire payment process. Your privacy and security are our top priorities.'
	},

	AcceptedPaymentMethods: 'Accepted payment methods',
	IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer: 'If you wish to make a payment using cryptocurrencies or a direct bank transfer, please contact the developer.',
	BankName: 'Bank Name:',
	AccountNumber: 'Account Number:',
	SWIFTOrBICCode: 'SWIFT/BIC Code:',
	IBAN: 'IBAN:',
	AskTheAdministratorForIt: 'Ask the administrator for it',
	PleaseNoteThatTheBuyerIsResponsibleForCoveringAnyBankFees: 'Please note that the buyer is responsible for covering any bank fees associated with any transaction.',

	RulesForUsingOurBenefitsAndPatronage: {
		HeaderText1: 'Rules for using our benefits and patronage',
		SubText1: 'We would like to express our heartfelt gratitude to all our subscribers for their support and trust. Before proceeding with the Stella Mod Plus subscription, please take a moment to familiarize yourself with a few important guidelines.',

		HeaderText2: 'Benefits are intended exclusively for subscribers:',
		SubText2: 'Each benefit redemption token is assigned to a subscriber and should be kept confidential. Please do not share your benefits with others or distribute them online. Utilize them solely for your personal use and in accordance with our guidelines.',

		HeaderText3: 'Subscribing does not equate to purchasing the 3DMigoto software:',
		SubText3: 'By becoming a subscriber to Stella Mod Plus, you are not acquiring 3DMigoto as a digital product for purchase. Instead, as our subscriber, you solely gain access to use 3DMigoto within the Stella Mod Launcher application.',

		Footer: 'We appreciate your presence in our community and your support for our work. If you have any questions or concerns, please {a}contact us{/a}. Your participation and understanding of these rules are incredibly important to our project.'
	},

	request: {
		WeAreProcessingYourRequest: 'We are processing your request...',
		SubscribingInProgress: 'We need a little bit of time to get everything ready. Please remain on this page and give us a moment!\nShortly, we will redirect you to a secure payment page where you can safely complete your transaction. ^w^',
		ChangingTheTierInProgress: 'We need some time to change your tier! Give us a moment, and we promise everything will go smoothly. ^w^'
	}
};