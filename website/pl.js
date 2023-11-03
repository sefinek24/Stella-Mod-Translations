module.exports.data = {
	Version: '2.4.0',
	LastUpdate: '16.10.2023',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://github.com/sefinek24)',
		'ChatGPT (https://chat.openai.com)',
	],
};

// Main
module.exports.default = {
	And: 'i',
	From: 'z',
	In: 'w',

	Back: 'Wstecz',
	GoBack: 'Wróć',
	GoBackTo: 'Wróć do {0}',
	GoToHomePage: 'Wróć do strony głównej',
	Next: 'Dalej',

	DiscordServer: 'Serwer Discord',
	DiscordServerTooltip: 'Zaproszenie na nasz serwer Discord',

	tooltips: {
		OfficialDiscordServer: 'Oficjalny serwer Discord',
		GitHubRepositories: 'Repozytoria GitHub',
	},
};

// Errors
module.exports.errors = {
	400: {
		BadRequest: 'Błąd 400: Zła prośba',
		InvalidURL: 'Wsteczny adres URL jest nieprawidłowy.',
		ReferrerURL: 'Twój adres URL strony odsyłającej',
		CorrectRefURL: 'Poprawny adres URL strony odsyłającej',
	},

	wrongOs: {
		DeviceIsNotSupported: 'Urządzenie nie jest obsługiwane',
		SorryYourDeviceIsNotSupported: 'Przepraszamy. Twoje urządzenie nie jest wspierane.',
		ViewSupportedOperatingSystems: 'Wyświetl obsługiwane systemy operacyjne.',
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'Nie możemy znaleźć pliku ZIP na serwerze',
		NewUpdateIsComing: 'Nadchodzi nowa aktualizacja? Możliwe...\nW każdym razie spróbuj ponownie później lub zgłoś ten problem na naszym serwerze Discord.',
	},
};

// GET /genshin-impact-reshade
module.exports.home = {
	Header: 'Genshin Impact Stella Mod made by Sefinek',
	Text1: 'Safe and unique features such as ReShade enhancements, carefully crafted custom graphics, and impressive FPS unlocking provide gamers with the best in-game experience!',
	Text2: '3DMigoto takes the mod to an even higher level, providing an immersive experience. Additionally, our own launcher streamlines the entire process, helping players get into the action quickly.',
	FinalText: 'Don\'t wait! Dive into the enhanced world of Teyvat now and create unforgettable moments! Have fun!',

	Download: 'Download',
	DownloadTooltip: 'Click here to download the x64-bit installer for Windows 10 and 11.',

	StelaModPlusTooltip: 'Get access to the paid version of Stella Mod Plus and enjoy numerous benefits and enhanced gaming experiences!',

	Documentation: 'Documentation',
	DocumentationTooltip: 'Check the system requirements, recommended game settings, and more!',

	Gallery: 'Gallery',
	GalleryTooltip: 'See the screenshots from the game with ReShade injected.',

	Videos: 'Videos',
	VideosTooltip: 'Watch our videos about the mod and the launching program.',

	Feedback: 'Feedback',
	FeedbackTooltip: 'Share your opinion about my work and Stella Mod.',

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
	GalleryPage: 'Galeria - Numer strony',
	GalleryCompareReleases: 'Galeria - Porównaj wydania:',
	ScreenshotsAreAvailableInHighQuality: 'Zrzuty ekranu są dostępne w wysokiej jakości. Wczytanie ich może trochę potrwać.',
	WebsiteIsNotSupportedOnMobileDevices: 'Ta witryna nie jest obsługiwana na urządzeniach mobilnych.',
	SomeImageCanBeOutdated: 'Niektóre zdjęcia mogą być nieaktualne.',

	SeeComparesFromTheOtherVersions: 'Zobacz porównania z innymi wersjami',
	SeeTheComparisonBetween: 'Zobacz porównanie między...',
	ThePageYouAreCurrentlyOnDisplaysAComparison: 'Strona, na której aktualnie się znajdujesz, wyświetla porównanie różnych wersji wydań.',
	OldVersion: 'Stara wersja',
	NewVersion: 'Nowa wersja',

	WithMod: 'Z modem',
	WithoutMod: 'Bez moda',

	BonusScreenshot: 'Bonusowy zrzut ekranu',

	tooltips: {
		GoBackToMainGalleryPage: 'Wróć do strony głównej galerii',
	},
};

// GET /genshin-impact-reshade/feedback
module.exports.feedback = {
	LeaveYourFeedback: 'Podziel się swoją opinią',
	IfYouLikeThisProjectSupportMe: 'Jeśli podoba Ci się ten projekt, rozważ {1}subskrypcje{/1} mojego kanału na YouTube, danie {2}gwiazdki{/2} na GitHubie lub {3}wsparcia mnie{/3} w inny sposób.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Dodatkowo, jeśli masz jakieś uwagi lub sugestie, nie wahaj się skorzystać z funkcji czatu, aby przesłać je bezpośrednio do twórcy.',

	btn: {
		BelowYTVideo: 'Pod filmem na YouTube',
		OnTheDiscordServer: 'Na serwerze Discord',
	},

	tooltips: {
		ClickHereToGoToTheYTPage: 'Kliknij tutaj, aby przejść do strony YouTube.',
		GiveAStarToMyReposOnGitHub: 'Nadaj gwiazdkę moim repozytoriom na GitHubie, tym, które lubisz.',
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	SomeQuestions: 'Jakieś pytania? Potrzebujesz pomocy?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Masz może jakikolwiek problem z modem lub pytanie? Jeśli tak, nie wahaj się z nami skontaktować! Nasz zespół jest do Państwa dyspozycji w przypadku jakichkolwiek pytań lub wątpliwości.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Niezależnie od tego, czy potrzebujesz pomocy w instalacji moda, czy masz pytania dotyczące jego funkcji, jesteśmy tutaj, aby Ci pomóc.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Pamiętaj, że nasza społeczność również jest również gotowa, by odpowiedzieć na Twoje pytania. W tym celu dołącz na nasz serwer Discord lub utwórz nowy Issue na GitHub.',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Po prostu kliknij ikonę czatu w prawym dolnym rogu, aby rozpocząć nową konwersację w języku polskim lub angielskim. Oczekujemy na Twój kontakt!',
	StellaModIsNotAffiliatedWithHoyoverse: 'Należy pamiętać, że oprogramowanie Stella Mod nie jest powiązane z firmą Hoyoverse.',
	JoinToDiscordServer: 'Dołącz na nasz serwer Discord',
	CommentMyYTVideo: 'Skomentuj mój film na YouTube',

	tooltips: {
		JoinOurOfficialDiscordServer: 'Dołącz do naszego oficjalnego serwera Discord.',
		LeaveACommendBelowMyVideo: 'Zostaw komentarz pod moim filmem.',
		ReturnTo: 'Wróć do: Genshin Stella Mod - Here begins your adventure.',
	},
};

// GET /genshin-impact-reshade/videos
module.exports.videos = {
	WatchVideosOnYT: 'Obejrzyj filmy na YouTube',
	IfYouWantToRecordNewVideo: 'Jeśli chcesz nagrać i przesłać film na YouTube, proszę, wyślij mi wiadomość. Mogę umieścić link tutaj.',
	DeprecatedMovies: 'Przestarzałe nagrania',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'Te filmy pochodzą z poprzednich wersji Stella Mod i są uważane już za przestarzałe.',
	FirstModRelease: 'Pierwsza wersja moda',
	Gameplay: 'Rozgrywka',
};

// GET /genshin-impact-reshade/docs
module.exports.docs = {
	TableOfContents: 'Spis treści',
	1: {
		Introduction: '{0}. {1} Wprowadzenie Stella Mod',
		ReadMe: '{0}. {1} README.md',
		Support: '{0}. {1} Pomoc / Wsparcie',
		FAQ: '{0}. {1} FAQ',
		WhatIs: '{0}. {1} Czym jest...',
		HowToAvoidABan: '{0}. {1} Jak uniknąć bana?',
		ToS: '{0}. {1} ToS',
		PrivacyPolicy: '{0}. {1} Polityka prywatności',
		SoftwareLicense: '{0}. {1} Licencja oprogramowania',
		Installation: '{0}. {1} Instalacja',
	},

	Changelogs: 'Listy zmian',
	2: {
		Versions: '{0}. {1} Wersje {2}.x.x',
	},

	DocumentCreationDate: 'Data utworzenia dokumentu: {0}',
	LastUpdate: 'Ostatnia aktualizacja: {0}',
	DocumentSize: 'Rozmiar dokumentu: {0}',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'Wszystkie repozytoria na GitHubie',
	IfYouWantToBecomeContributor: 'Jeśli chcesz zostać współtwórcą, po prostu utwórz nowy Pull Request. Dziękuję bardzo i życzę Ci udanego kodowania!',
};

// GET /genshin-impact-reshade/subscription
module.exports.subscription = {
	ChooseYourSubscriptionTier: 'Choose your subscription tier',
	IfYouAreInterestedInTheBenefits: 'If you\'re interested in the benefits, please explore all the available tiers to see which one suits your preferences. Hopefully, you\'ll find one that piques your interest!',
	IfYouHaveAnyQuestions: 'If you have any questions, don\'t hesitate to join our Discord server or reach out via email. You can find the contact information on the homepage of my website.',
	PricesMayVaryForUsersResidingInPoland: 'Prices may vary for users residing in Poland.',

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
		CompletePostArchive: 'Complete post archive (on the Discord server)',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',
		PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
		RayTracingForGenshin: 'Ray Tracing for Genshin',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods',
		MigotoInStellaModMoreMods: '3DMigoto in Stella Mod (more mods & more fun)',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		PhotosOfMyCats: 'Photos of my cats',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',
		SecuritySystemToAvoidBan: 'Security system to avoid ban (hosts file)',
		NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
		PrivateDNSInEurope: 'Much better security system (private DNS in Europe)',
		OptimizationOfYourComputerForBestPerformance: 'Optimization of your PC for the best performance',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
		ActivationPossibleOnManyDevices: 'Activation possible on {u}{maxDevices} devices{/u}',
	},

	CompareAvailablePlans: 'Compare available plans',
	benefitsShort: {
		CompletePostArchive: 'Complete post archive',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',
		PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
		RayTracingForGenshin: 'Ray Tracing for Genshin',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods',
		MigotoInStellaModMoreMods: '3DMigoto in Stella Mod',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		PhotosOfMyCats: 'Photos of my cats',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',
		SecuritySystemToAvoidBan: 'Security system to avoid ban',
		NewWindowsTerminalAppearance: 'New Windows Terminal appearance',
		PrivateDNSInEurope: 'Better security system (DNS in Europe)',
		OptimizationOfYourComputer: 'Optimization of your computer',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
		ActivationPossibleOn: 'Activation possible on',
		IntDevice: '{0} device',
		IntDevices: '{0} devices',
	},

	SubscribeNow: 'Subscribe now',

	PaymentSystem: {
		Header: 'Payment system',
		1: 'We are delighted to announce that our secure payment system is powered by {a}Stripe{/a}. With Stripe, you can confidently make payments, knowing that your financial information is handled with the highest level of security.',
		2: 'Stripe is a well-trusted and globally recognized payment processing platform that guarantees smooth and secure transactions for our customers. Whether you\'re buying products, subscribing to services, or making donations, Stripe\'s robust infrastructure ensures a dependable and trouble-free payment experience.',
		3: 'Please be assured that your sensitive payment details are encrypted and safeguarded throughout the entire payment process. Your privacy and security are our top priorities.',
	},

	RulesForUsingOurBenefitsAndPatronage: {
		HeaderText1: 'Rules for Using Our Benefits and Patronage',
		SubText1: 'We would like to thank all our wonderful patrons for their support and trust in us. However, before you join our patronage program, please take a moment to familiarize yourself with some important guidelines.',

		HeaderText2: 'Benefits are intended exclusively for subscribers:',
		SubText2: 'Each benefit redemption token is assigned to a subscriber and should be kept confidential. Please do not share your benefits with others or distribute them online. Utilize them solely for your personal use and in accordance with our guidelines.',

		HeaderText3: 'Patronage is not a purchase of 3DMigoto:',
		SubText3: 'By becoming our patron, you are not acquiring 3DMigoto as a digital product that can be bought. Our benefits are granted solely as a token of gratitude for your support, just like any other benefit. By becoming a patron, you gain access to 3DMigoto within the "Stella Mod Launcher" application.',

		Footer: 'We appreciate your presence in our community and your support for our work. If you have any questions or concerns, please {a}contact us{/a}. Your participation and understanding of these rules are incredibly important to our project.',
	},

	SomeTranslationsWereGeneratedByChatGPT: 'Some translations into certain languages were generated by ChatGPT. If you find any errors in the translations, please report them.',
};

// For patrons
module.exports.forPatrons = {
	// captcha.ejs
	AreUARobot: 'Jesteś robotem?',
	WaitingForUser: 'Oczekiwanie na interakcje użytkownika...',
	VerifyingCaptcha: 'Weryfikowanie captchy...',
	VerifyingSession: 'Weryfikowanie sesji...',
	Successfully: 'Z powodzeniem!',
	ValidateRequest: 'Zwaliduj zapytanie',
	NextPage: 'Następna strona',
	WrongStatusCode: 'Błąd. Otrzymano nieprawidłowy kod statusu ({0}) z sefinek.net.',
	Failed: 'Nie udało się',
	Expired: 'Sesja wygasła. Odśwież tę stronę.',
	Canceled: 'Sesja została anulowana przez użytkownika. Spróbuj ponownie.',
	FatalError: 'Błąd krytyczny. Spróbuj ponownie lub odśwież tę stronę.',

	// index.ejs
	Header: 'Odbierz swoje korzyści {0}',

	1: 'Bardzo dziękuję Ci za wsparcie mnie! Wasza hojność i zachęta są dla mnie bezcenne i naprawdę doceniam wasze zaufanie do mnie.',
	2: 'W dowód mojej wdzięczności zyskujesz dostęp do korzyści.',
	3: 'Jeśli masz jakiekolwiek pytania, wątpliwości lub uwagi dotyczące mojej pracy, nie wahaj się ze mną skontaktować w dowolnym momencie.',

	4: 'Pamiętaj, że korzyści można uzyskać tylko raz z jednego wygenerowanego tokenu (linku).',
	5: 'Niemniej jednak, jeśli użyjesz odpowiedniej komendy na serwerze Discord i podasz powód dlaczego chcesz odebrać korzyści jeszcze raz, możesz wygenerować nowy klucz.',
	6: 'Kiedy stracę dostęp do korzyści? Oto odpowiedź. Twoja subskrypcja na Patronie musi wygasnąć.',

	7: 'Po pobraniu aplikacji poświęć trochę czasu na zapoznanie się z warunkami licencji.',
	8: 'Pomoże Ci to zrozumieć, w jaki sposób możesz korzystać z aplikacji oraz związanych z nią praw i obowiązków.',

	9: 'Jeśli z jakiegoś powodu musisz ponownie pobrać korzyści, możesz ponownie wywołać polecenie {code};receive{/code} na serwerze Discord. ',
	10: 'Informuję również, że link automatycznie wygaśnie o godzinie 00:00 czasu polskiego.',

	ThankYouForYourSupport: 'Jeszcze raz dziękuję za wsparcie!',
	SefinekOwO: '~ Sefinek',

	ClickHereToDownload: 'Kliknij tutaj, aby pobrać',

	// received.ejs
	ThisMethodIsNotAllowed: 'Ta metoda jest niedozwolona',
	YourBenefitsHaveAlreadyBeenReceived: 'Twoje korzyści zostały już odebrane dnia {0}, {1}.',
	Country: 'Kraj: {0}',
	ThankUForYourSupport: 'Dziękuję za Twoje wsparcie!',

	// error.ejs
	SomethingWentWrong: 'Smutny kot >~~< Coś poszło nie tak...',
	InvalidUserId: 'Podano nieprawidłowy identyfikator użytkownika.',
	InvalidKeyProvided: 'Podano nieprawidłowy klucz.',
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'Ten link wygasł i nie będzie już aktywny.',
	ErrorOccurredPleaseTryAgain: 'Wystąpił błąd. Proszę spróbować ponownie.',
};