module.exports.data = {
	Version: '2.6.0',
	LastUpdate: '31.12.2023',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://github.com/sefinek24)',
	],
};

// Main
module.exports.default = {
	And: 'i',
	From: 'z',
	In: 'w',

	Back: 'Wróć',
	GoBack: 'Wstecz',
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
	Header: 'Genshin Impact Stella Mod autorstwa Sefinek',
	Text1: 'Bezpieczne i unikatowe funkcje, takie jak ulepszenia ReShade, starannie wykonana niestandardowa grafika i imponujące odblokowanie FPS, zapewniają graczom najlepsze wrażenia z gry!',
	Text2: '3DMigoto podnosi mod na jeszcze wyższy poziom, dostarczając immersyjnych doświadczeń. Dodatkowo, nasz własny launcher usprawnia cały proces, pomagając graczom szybko rozpocząć akcję.',
	FinalText: 'Nie czekaj! Zanurz się teraz w ulepszonym świecie Teyvat i stwórz niezapomniane chwile! Baw się dobrze!',

	Download: 'Pobierz',
	DownloadTooltip: 'Kliknij tutaj, aby pobrać x64-bitowy instalator dla systemów Windows 10 i 11.',

	StelaModPlusTooltip: 'Uzyskaj dostęp do płatnej wersji Stella Mod Plus i ciesz się licznymi korzyściami oraz lepszym doświadczeniem wizualnym w Genshin!',

	Documentation: 'Dokumentacja',
	DocumentationTooltip: 'Sprawdź wymagania systemowe, zalecane ustawienia gry i więcej!',

	Gallery: 'Galeria',
	GalleryTooltip: 'Zobacz zrzuty ekranu z gry z wstrzykniętym ReShade.',

	Videos: 'Filmy',
	VideosTooltip: 'Obejrzyj nasze filmy o modzie i programie uruchamiającym.',

	Feedback: 'Opinie',
	FeedbackTooltip: 'Podziel się swoją opinią na temat mojej pracy i Stella Mod.',

	Support: 'Wsparcie',
	SupportTooltip: 'Kliknij tutaj, jeśli potrzebujesz pomocy.',

	MainPage: 'Strona główna',
	MainPageTooltip: 'Strona główna - Oficjalna strona Sefinka',

	PleaseSupportMe: 'Proszę, wesprzyj moją pracę',
	SupportMyWork: 'Wesprzyj moją pracę',
	SupportMe: 'Wesprzyj mnie',

	DownloadingData: 'Pobieranie danych...',
	Version: 'Wersja',
	TheVersionWithoutCaps: 'wersja',
	DownloadCount: 'Liczba pobrań',
	LastDownload: 'Ostatnie pobranie',

	modal: {
		ThankYouForDownloading: 'Dziękujemy za pobranie',
		BecomeMyPatronToGainMoreBenefits: 'Zostań moim patronem, aby uzyskać więcej korzyści, takich jak możliwość korzystania z 3DMigoto wraz z FPS Unlockerem & ReShade + duża kolekcja modów bez błędów + kolekcja najnowszych 300 shaderów + dodatek zapobiegający nakładaniu się filtrów na interfejs użytkownika (UI) + preselekcja Ray Tracing i wiele więcej!',
		JoinOurDiscordServerToReceiveNotifications: 'Dołącz do naszego serwera Discord, aby otrzymywać powiadomienia o najnowszych aktualizacjach, funkcjach i innych ogłoszeniach. Skontaktuj się z twórcą, jeśli masz jakieś pytania lub napotkasz jakieś problemy.',
		IfYouReEnjoyingStellaModConsiderLeavingAReview:	'Zostaw opinię na stronie {a}trustpilot.com{/a} po przetestowaniu oprogramowania!',
		WishingYouAWonderfulDayOrNight:	'Życzę ci wspaniałego dnia lub nocy!',
		TheTotalNumberOfDownloadsNowIs: 'Całkowita liczba pobrań wynosi obecnie',
		NoProblem: 'Nie ma problemu',
	},

	tooltips: {
		PageViews: 'Odsłony strony',
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

	BonusScreenshot: 'Bonusowe zrzuty ekranu',

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

	DocumentCreationDate: 'Utworzenie dokumentu: {0}',
	LastUpdate: 'Aktualizacja: {0}',
	DocumentSize: 'Rozmiar: {0}',
	bytes: 'bitów',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'Wszystkie repozytoria na GitHubie',
	IfYouWantToBecomeContributor: 'Jeśli chcesz zostać współtwórcą, po prostu utwórz nowy Pull Request. Dziękuję bardzo i życzę Ci udanego kodowania!',
};

// GET /genshin-impact-reshade/subscription
module.exports.subscription = {
	ChooseYourSubscriptionTier: 'Wybierz swój tier subskrypcji',
	IfYouAreInterestedInTheBenefits: 'Jeśli jesteś zainteresowany korzyściami, proszę przejrzyj wszystkie dostępne taryfy, aby zobaczyć, która z nich odpowiada Twoim preferencjom. Mam nadzieję, że znajdziesz tę, która Cię zainteresuje!',
	IfYouHaveAnyQuestions: 'Masz jakieś pytania? Nie krępuj się dołączyć do naszego Discord serwer lub skontaktować się z nami za pomocą e-maila. Dane kontaktowe znajdziesz na stronie głównej.',

	Recommended: 'Rekomendowane',
	tiers: {
		1: 'Mały Kociak',
		2: 'Ulubiony Kociak',
		3: 'Zaufany Kot',
		4: 'Komputerowy Kot',
		5: 'Bardzo Bezpieczny Kociak',
	},

	prices: {
		MonthlyPrice: 'Cena miesięczna',
		Every3Months: 'Co 3 miesiące',
		YearlyPrice: 'Cena roczna',
	},

	Everything: {
		FromTier: 'Wszystko z Tier {0}',
		FromTier12: 'Wszystko z Tier 1 i 2',
		FromTier123: 'Wszystko z Tier 1, 2 i 3',
		FromAllTiers: 'Wszystko z wszystkich Tierów',
	},

	TierName: 'Nazwa Tieru',
	benefitsFull: {
		PrivateClipsFromCSGO: 'Prywatne klipy z CS:GO i CS2',
		EarlyAccessToStellaMod: 'Wczesny dostęp do Stella Mod',
		CompletePostArchive: 'Kompletny archiwum postów (na serwerze Discord)',

		RayTracingForGenshin: 'Śledzenie promieni dla Genshin',
		MigotoInStellaModMoreMods: '3DMigoto w Stella Mod (więcej modyfikacji i zabawy)',
		BigCollectionOfShadersMods: 'Duża kolekcja shaderów i modyfikacji',
		GameUIWithoutVisibleShaders: 'Interfejs gry bez widocznych shaderów',
		HideYourUIDInTheGame: 'Ukryj swój UID w grze',
		PresetsFromPreviousVersions: 'Ustawienia z poprzednich wersji',
		PhotosOfMyCats: 'Zdjęcia moich kotów',
		AnimePicturesGeneratedByAI: 'Obrazy anime generowane przez AI',

		SecuritySystemToAvoidBan: 'System zabezpieczeń przed banem (plik hosts)',
		VariousGenshinImpactAccountGiveaways: 'Różne konkursy na konta w Genshin Impact',
		NewWindowsTerminalAppearance: 'Nowy wygląd Windows Terminal (WT)',
		MorePhotosOfMyCats: 'Więcej zdjęć moich kotów',

		PrivateDNSInEurope: 'Lepszy system zabezpieczeń (DNS w Europie)',
		OptimizationOfYourComputerForBestPerformance: 'Optymalizacja komputera dla najlepszej wydajności',
		AssistanceRelatedToPCsOrLaptops: 'Pomoc związana z komputerami lub laptopami',

		ActivationPossibleOnManyDevices: 'Aktywacja możliwa na {u}{maxDevices} urządzeniach{/u}',
	},

	CompareAvailablePlans: 'Porównaj dostępne taryfy',
	benefitsShort: {
		IntDevice: '{0} urządzenie',
		IntDevices: '{0} urządzeń',

		PrivateClipsFromCSGO: 'Prywatne klipy z CS:GO i CS2',
		EarlyAccessToStellaMod: 'Wczesny dostęp do Stella Mod',
		CompletePostArchive: 'Kompletny archiwum postów',

		RayTracingForGenshin: 'Śledzenie promieni dla Genshin',
		BigCollectionOfShadersMods: 'Duża kolekcja shaderów i modyfikacji',
		MigotoInStellaModMoreMods: '3DMigoto w Stella Mod',
		GameUIWithoutVisibleShaders: 'Interfejs gry bez widocznych shaderów',
		HideYourUIDInTheGame: 'Ukryj swój UID w grze',
		PresetsFromPreviousVersions: 'Ustawienia z poprzednich wersji',
		PhotosOfMyCats: 'Zdjęcia moich kotów',
		AnimePicturesGeneratedByAI: 'Obrazy anime generowane przez AI',

		SecuritySystemToAvoidBan: 'System zabezpieczeń przed banem',
		VariousGenshinImpactAccountGiveaways: 'Konkursy na konta w Genshin Impact',
		NewWindowsTerminalAppearance: 'Nowy wygląd Windows Terminal',
		MorePhotosOfMyCats: 'Więcej zdjęć moich kotów',

		PrivateDNSInEurope: 'Lepszy system zabezpieczeń (DNS w Europie)',
		OptimizationOfYourComputer: 'Optymalizacja twojego komputera',
		AssistanceRelatedToPCsOrLaptops: 'Pomoc związana z komputerami lub laptopami',
		ActivationPossibleOn: 'Aktywacja możliwa na',
	},

	SubscribeNow: 'Zapisz się teraz',
	ChangeYourTier: 'Zmień swoją taryfę',

	Crypto: 'Krypto',
	IfYouWantToMakeAPaymentUsingCrypto: 'Jeśli chcesz dokonać płatności za pomocą kryptowaluty, skontaktuj się z deweloperem.',
	IAcceptPaymentsOnlyOnBinance: 'Akceptuję płatności tylko na Binance.',
	CloseModal: 'Zamknij okno modalne',

	PaymentSystem: {
		Header: 'System płatności',
		1: 'Z radością ogłaszamy, że nasz bezpieczny system płatności działa dzięki {0}. Dzięki Stripe możesz śmiało dokonywać płatności, wiedząc, że Twoje dane finansowe są traktowane z najwyższym poziomem bezpieczeństwa.',
		2: 'Stripe to dobrze zaufana i globalnie rozpoznawana platforma do przetwarzania płatności, która gwarantuje płynne i bezpieczne transakcje dla naszych klientów. Bez względu na to, czy kupujesz produkty, subskrybujesz usługi czy dokonujesz darowizn, solidna infrastruktura Stripe zapewnia niezawodne i bezproblemowe doświadczenie płatności.',
		3: 'Prosimy, miej pewność, że Twoje wrażliwe dane płatnicze są szyfrowane i chronione przez cały proces płatności. Twoja prywatność i bezpieczeństwo są naszymi najważniejszymi priorytetami.',
	},

	AcceptedPaymentMethods: 'Akceptowane metody płatności',
	IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer: 'Jeśli chcesz dokonać płatności za pomocą kryptowaluty lub przelewu bankowego, skontaktuj się z deweloperem.',
	BankName: 'Nazwa banku:',
	AccountNumber: 'Numer konta:',
	SWIFTOrBICCode: 'Kod SWIFT/BIC:',
	IBAN: 'IBAN',
	AskTheAdministratorForIt: 'Zapytaj administratora o to',
	PleaseBeAwareThatTheBuyerIsResponsibleForCoveringAbyBankFees: 'Prosimy pamiętać, że kupujący ponosi odpowiedzialność za pokrycie wszelkich opłat bankowych związanych z transakcją.',

	RulesForUsingOurBenefitsAndPatronage: {
		HeaderText1: 'Zasady korzystania z naszych korzyści i patronatu',
		SubText1: 'Chcielibyśmy wyrazić naszą serdeczną wdzięczność wszystkim naszym subskrybentom za ich wsparcie i zaufanie. Przed rozpoczęciem subskrypcji Stella Mod Plus prosimy o zapoznanie się z kilkoma ważnymi wytycznymi.',

		HeaderText2: 'Korzyści są przeznaczone wyłącznie dla subskrybentów:',
		SubText2: 'Każdy token korzyści jest przypisany do subskrybenta i powinien być traktowany jako poufny. Prosimy nie udostępniać swoich korzyści innym ani nie rozpowszechniać ich online. Wykorzystuj je wyłącznie do celów osobistych i zgodnie z naszymi wytycznymi.',

		HeaderText3: 'Subskrypcja nie pokrywa się z zakupem oprogramowania 3DMigoto:',
		SubText3: 'Stając się subskrybentem Stella Mod Plus, nie nabywasz 3DMigoto jako produkt cyfrowy. Jako subskrybent, zyskujesz wyłącznie dostęp do korzystania z 3DMigoto w aplikacji Stella Mod Launcher.',

		Footer: 'Cenimy Twoją obecność w naszej społeczności i Twoje wsparcie dla naszej pracy. Jeśli masz jakieś pytania lub obawy, {a}skontaktuj się z nami{/a}. Twoje uczestnictwo i zrozumienie tych zasad są niezwykle ważne dla naszego projektu.',
	},

	request: {
		WeAreProcessingYourRequest: 'Przetwarzamy Twoje zgłoszenie...',
		SubscribingInProgress: 'Potrzebujemy chwili, aby wszystko przygotować. Proszę pozostań na tej stronie i daj nam chwilę!\nWkrótce przekierujemy Cię na bezpieczną stronę płatności, gdzie możesz bezpiecznie dokonać transakcji. ^w^',
		ChangingTheTierInProgress: 'Potrzebujemy trochę czasu, aby zmienić Twoją taryfę! Daj nam chwilę, a obiecujemy, że wszystko pójdzie gładko. ^w^',
	},
};