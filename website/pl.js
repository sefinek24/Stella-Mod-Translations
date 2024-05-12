exports.data = {
	Version: '2.8.1',
	LastUpdate: '12.05.2024',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://sefinek.net)',
	],
};

// Main
exports.default = {
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
exports.errors = {
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
exports.home = {
	Header: 'Genshin Impact Stella Mod autorstwa Sefinek',
	Text1: 'Bezpieczne funkcje takie jak ulepszenia ReShade, starannie opracowane shadery i imponujące odblokowanie FPS zapewniające graczom najlepsze wrażenia z gry!',
	Text2: '3DMigoto wzmacnia moda dla jeszcze bardziej wciągającej rozgrywki. Dodatkowo, nasz własny program uruchamiający usprawnia cały proces, pomagając graczom szybko włączyć do akcji.',
	FinalText: 'Nie wahaj się i pobierz już teraz! Zanurz się dziś w ulepszonym świecie Teyvat i stwórz niezapomniane chwile. Miłej zabawy!',

	Download: 'Pobierz',
	DownloadTooltip: 'Kliknij tutaj, aby pobrać instalator 64-bitowy dla systemów Windows 10 i 11.',

	StelaModPlusTooltip: 'Uzyskaj dostęp do wersji płatnej Stella Mod Plus i ciesz się wieloma korzyściami oraz lepszym wrażeniem wizualnym w Genshin!',

	Documentation: 'Dokumentacja',
	DocumentationTooltip: 'Sprawdź wymagania systemowe, zalecane ustawienia gry i więcej!',

	Gallery: 'Galeria',
	GalleryTooltip: 'Zobacz zrzuty ekranu z gry z wstrzykniętym ReShade.',

	Videos: 'Filmy',
	VideosTooltip: 'Oglądaj nasze filmy prezentujące moda i program uruchamiający.',

	Statistics: 'Statystyki',
	StatisticsTooltip: 'Sprawdź, ile obecnie osób gra w Genshin Impact z uruchomionym modem Stella.',

	Feedback: 'Opinie',
	FeedbackTooltip: 'Podziel się swoją opinią na temat mojej pracy i Stella Mod.',

	Support: 'Wsparcie',
	SupportTooltip: 'Kliknij tutaj, jeśli potrzebujesz pomocy.',

	MainPage: 'Strona główna',
	MainPageTooltip: 'Strona główna - Oficjalna strona Sefinka',

	PleaseSupportMe: 'Proszę, wesprzyj moją pracę',
	SupportMyWork: 'Wesprzyj moją pracę',

	DownloadingData: 'Pobieranie danych...',
	Version: 'Wersja',
	TheVersionWithoutCaps: 'wersja',
	DownloadCount: 'Liczba pobrań',
	LastDownload: 'Ostatnie pobranie',

	FeedbackOnTrustpilot: 'Opinie na Trustpilot',

	AreYouARobot: 'Jesteś robotem?',

	modal: {
		ThankYouForDownloading: 'Dziękujemy za pobranie',
		BecomeAStellaModSubscriber: 'Zostań subskrybentem Stella Mod Plus, aby uzyskać dostęp do dodatkowych korzyści, takich jak: możliwość jednoczesnego używania 3DMigoto, FPS Unlocker i ReShade, dużą kolekcję modów bez błędów, zwiększone bezpieczeństwo (blokowanie telemetrii i analityki), pakiet najnowszych shaderów, dodatek zapobiegający nakładaniu filtrów na interfejs użytkownika (UI), presety do śledzenia promieni (Ray Tracing) i wiele więcej!',
		JoinOurDiscordServerToReceiveNotifications: 'Dołącz do naszego serwera Discord, aby otrzymywać powiadomienia o najnowszych aktualizacjach, funkcjach i innych ogłoszeniach. Skontaktuj się z twórcą, jeśli masz jakieś pytania lub napotkasz jakieś problemy. Zawsze jesteśmy gotowi pomóc. Życzę ci wspaniałego dnia lub nocy!',
		IfYouReEnjoyingStellaModConsiderLeavingAReview:	'Zostaw opinię na stronie {a}trustpilot.com{/a} po przetestowaniu oprogramowania!',
		TheTotalNumberOfDownloadsNowIs: 'Całkowita liczba pobrań wynosi obecnie',
		NoProblem: 'Nie ma problemu',
	},

	tooltips: {
		PageViews: 'Wyświetlenia tej strony. Statystyki są zbierane od 19 stycznia 2024.',
		ShareYourFeedbackOnTrustpilot: 'Podziel się z nami swoją opinią w serwisie Trustpilot! Będziemy za to bardzi wdzięczni.',
	},
};

// GET /genshin-impact-reshade/gallery
exports.gallery = {
	GalleryPage: 'Galeria - Numer strony',
	GalleryCompareReleases: 'Galeria - Porównaj wydania:',
	ScreenshotsAreAvailableInHighQuality: 'Zrzuty ekranu są dostępne w wysokiej jakości. Wczytanie ich może zająć trochę czasu.',
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
exports.feedback = {
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
exports.support = {
	SomeQuestions: 'Masz jakieś pytania? Czy potrzebujesz wsparcia?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Czy masz jakieś problemy ze Stella Mod lub po prostu pytanie? Jeśli tak, nie wahaj się skontaktować z nami! Nasz zespół jest do Państwa dyspozycji w przypadku jakichkolwiek pytań lub wątpliwości.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Niezależnie od tego, czy potrzebujesz pomocy w instalacji moda, czy masz pytania dotyczące jego funkcji, jesteśmy tutaj, aby Ci pomóc.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Pamiętaj, że nasza społeczność również jest również gotowa, by odpowiedzieć na Twoje pytania. W tym celu dołącz na nasz serwer Discord lub utwórz nowy Issue na GitHub.',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Po prostu kliknij ikonę czatu w prawym dolnym rogu, aby rozpocząć nową konwersację w języku polskim lub angielskim. Oczekujemy na Twój kontakt!',
	StellaModIsNotAffiliatedWithHoyoverse: 'Należy pamiętać, że oprogramowanie Stella Mod nie jest powiązane z firmą Hoyoverse.',
	JoinToDiscordServer: 'Dołącz na Discord',
	SendAnEmail: 'Wyślij e-mail',

	tooltips: {
		JoinOurOfficialDiscordServer: 'Dołącz do naszego oficjalnego serwera Discord.',
		SendAnEmailToTheDeveloper: 'Wyślij wiadomość e-mail do dewelopera, jeśli oczekujesz bardziej merytorycznej odpowiedzi.',
		ReturnTo: 'Wróć do: Genshin Stella Mod - Here begins your adventure.',
	},
};

// GET /genshin-impact-reshade/videos
exports.videos = {
	WatchVideosOnYT: 'Obejrzyj filmy na YouTube',
	IfYouWantToRecordNewVideo: 'Jeśli chcesz nagrać i przesłać film na YouTube o Stella Modzie, skontaktuj się ze mną. Link do Twojego filmu zostanie dodany do tej strony.',
	DeprecatedMovies: 'Przestarzałe nagrania',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'Te filmy pochodzą z poprzednich wersji Stella Mod i są uważane już za przestarzałe.',
	FirstModRelease: 'Pierwsza wersja moda',
	Gameplay: 'Rozgrywka',
};

// GET /genshin-impact-reshade/docs
exports.docs = {
	TableOfContents: 'Spis treści',
	1: {
		Introduction: '{0}. {1} Wprowadzenie',
		Requirements: '{0}. {1} Wymagania sprzętowe',
		WhatIs: '{0}. {1} Czym jest...',
		FAQ: '{0}. {1} FAQ: Pytania i odpowiedzi',
		Support: '{0}. {1} Wsparcie',
		TermsOfUse: '{0}. {1} Warunki użytkowania',
		PrivacyPolicy: '{0}. {1} Polityka prywatności',
		Installation: '{0}. {1} Instalacja',
		Compilation: '{0}. {1} Kompilacja',
		HowToAvoidABan: '{0}. {1} Jak unikać bana?',
	},

	Changelogs: 'Lista zmian',
	2: {
		Versions: '{0}. {1} Wersje {2}.x.x',
		DeprecatedReleases: '{0}. {1} Przestarzałe wersje',
	},

	LicensesAndCredits: 'Licencje itp.',
	3: {
		StellaModLicense: '{0}. {1} Licencja Stella Mod',
		ReShadeLicense: '{0}. {1} Licencja ReShade',
		FPSUnlockerLicense: '{0}. {1} Licencja FPS Unlocker',
		MigotoLicense: '{0}. {1} Licencja 3DMigoto',
		Credits: '{0}. {1} Uznania autorskie',
		Contributors: '{0}. {1} Współpracownicy',
	},

	DocumentCreationDate: 'Data utworzenia dokumentu: {0}',
	LastUpdate: 'Ostatnia aktualizacja: {0}',
	DocumentSize: 'Rozmiar pliku: {0}',
	bytes: 'bajtów',
};

// GET /genshin-impact-reshade/repositories
exports.github = {
	AllReposOnGithub: 'Wszystkie repozytoria na GitHubie',
	IfYouWantToBecomeContributor: 'Jeśli chcesz zostać współtwórcą, po prostu utwórz nowy {a}Pull Request{/a}. Dzięki bardzo i życzę miłego kodowania!',

	Translations: 'Tłumaczenia',
	Resources: 'Zasoby',
	Documentation: 'Dokumentacja',
	More: 'Więcej »',

	Deprecated: 'Przestarzałe',

	InstallationWizard: 'Kreator instalacji',
	UnlockedReShade: 'Odblokowany ReShade',
};

// GET /genshin-impact-reshade/subscription
exports.subscription = {
	ChooseYourSubscriptionTier: 'Wybierz swój tier subskrypcji',
	IfYouAreInterestedInTheBenefits: 'Jeśli jesteś zainteresowany korzyściami, proszę przejrzyj wszystkie dostępne taryfy, aby zobaczyć, która z nich odpowiada Twoim preferencjom. Mam nadzieję, że znajdziesz tę, która Cię zainteresuje!',
	IfYouHaveAnyQuestions: 'Masz jakieś pytania? Nie krępuj się dołączyć do naszego Discord serwer lub skontaktować się z nami za pomocą e-maila.',

	Recommended: 'Polecane',
	tiers: {
		1: {
			name: 'Mały Kociak',
			description: 'Podstawowy tier dla osób, które chcą wyłącznie wesprzeć projekt. Jest to dobre rozwiązanie, na przykład jeśli przestałeś grać w Genshin Impact i korzyści z gry już Ci nie są potrzebne, lecz nadal chcesz dobrowolnie wspierać projekt.',
		},
		2: {
			name: 'Ulubiony Kot',
			description: 'Średni tier, który oferuje większość podstawowych korzyści związanych z grą Genshin Impact. Idealne dla graczy, którzy chcą korzystać z dodatkowych modyfikacji i ulepszeń w grze.',
		},
		3: {
			name: 'Bezpieczny Kotek',
			description: 'Zaawansowany tier dla zaufanych użytkowników, który oferuje specjalne korzyści, takie jak systemy zabezpieczeń przed banem, giveaways na konta Genshin Impact, a także niestandardowy wygląd interfejsu Windows Terminal.',
		},
		4: {
			name: 'Klawiatury Kot',
			description: 'Dla graczy, którzy chcą maksymalnie wykorzystać możliwości swoich urządzeń i cieszyć się grą bez jakichkolwiek zakłóceń. Ta opcja oferuje usługi optymalizacji komputera (poprzez TeamViewer lub AnyDesk), wsparcie techniczne oraz możliwość używania plików wsadowych w Stella Mod Launcher.',
		},
		5: {
			name: 'Śliczna Kotka',
			description: 'Zapewnia dostęp do wszystkich korzyści oferowanych w niższych tierach, a także umożliwia aktywację na największej liczbie urządzeń. Idealny dla graczy, którzy doceniają pracę twórcy Stella Mod i chcą wspierać dalszy rozwój oraz serwerownię projektu.',
		},
	},
	UnknownBenefit: 'Nieznana korzyść',

	prices: {
		MonthlyPrice: 'Rozliczenie miesięczne',
		Every3Months: 'Co 3 miesiące',
		YearlyPrice: 'Rozliczenie coroczne',
	},

	Everything: {
		FromTheTier: 'Wszystko z poziomu {0}',
		FromTheTier12: 'Wszystko z Tieru 1 i 2',
		FromTheTier12And3: 'Wszystko z Tieru 1, 2 i 3',
		FromAllTheTiers: 'Korzyści ze wszystkich tierów',
	},

	TierName: 'Nazwa tieru',
	benefitsFull: {
		RoleOnTheDiscordServer: 'Rola na serwerze Discord',
		VisibilityOnTheSubscriberList: 'Widoczność na liście subskrybentów',
		NoAdsOnTheWebsiteForPatrons: 'Brak reklam na stronie dla patronów (SPC)',
		PrivateClipsFromCSGO: 'Prywatne klipy z CS:GO i CS2',
		AnimePicturesGeneratedByAI: 'Obrazy anime wygenerowane przez AI',
		CompletePostArchive: 'Pełne archiwum postów',

		RayTracingForGenshin: 'Ray Tracing dla Genshina',
		MigotoInStellaModMoreMods: '3DMigoto w Stella Mod (więcej modów i więcej zabawy)',
		BigCollectionOfShadersMods: 'Duża kolekcja shaderów i modów bez żadnych błędów',
		GameUIWithoutVisibleShaders: 'Interfejs gry bez widocznych shaderów',
		HideYourUIDInTheGame: 'Ukryj swoje UID w grze',
		PresetsFromPreviousVersions: 'Presety z poprzednich wersji',
		EarlyAccessToStellaMod: 'Wczesny dostęp do Stella Mod',

		CarefullyDesignedSecuritySystem: 'Starannie zaprojektowany system bezpieczeństwa',
		MuchGreaterPrivacy: 'Znacznie większa prywatność',
		VariousGenshinImpactAccountGiveaways: 'Różne eventy na konta do Genshin Impact',
		NewWindowsTerminalAppearance: 'Nowy wygląd Windows Terminal (WT)',
		PhotosAndInterestingVideosOfTheDevsCats: 'Zdjęcia i ciekawe filmy z kotami dewelopera',

		AbilityToUseBatchFiles: 'Możliwość używania plików wsadowych w Stella',
		OptimizationOfYourComputerForBestPerformance: 'Optymalizacja Twojego komputera lub laptopa',
		AssistanceRelatedToPCsOrLaptops: 'Pomoc dotycząca komputerów PC lub laptopów',

		ActivationPossibleOn: 'Aktywacja możliwa na {u}{0} urządzeniach{/u}',
	},

	CompareAvailablePlans: 'Porównaj dostępne plany',
	benefitsShort: {
		IntDevice: '{0} urządzenie',
		IntDevices: '{0} urządzenia',

		RoleOnTheDiscordServer: 'Rola na serwerze Discord',
		VisibilityOnTheSubscriberList: 'Widoczność na liście subskrybentów',
		NoAdsOnTheWebsiteForPatrons: 'Brak reklam na stronie dla patronów',
		PrivateClipsFromCSGO: 'Prywatne klipy z CS:GO i CS2',
		AnimePicturesGeneratedByAI: 'Obrazy anime wygenerowane przez AI',
		CompletePostArchive: 'Pełne archiwum postów',

		RayTracingForGenshin: 'Ray Tracing dla Genshina',
		BigCollectionOfShadersMods: 'Duża kolekcja shaderów i modów',
		MigotoInStellaModMoreMods: '3DMigoto w Stella Mod',
		GameUIWithoutVisibleShaders: 'Interfejs gry bez widocznych shaderów',
		HideYourUIDInTheGame: 'Ukryj swoje UID w grze',
		PresetsFromPreviousVersions: 'Presety z poprzednich wersji',
		EarlyAccessToStellaMod: 'Wczesny dostęp do Stella Mod',

		CarefullyDesignedSecuritySystem: 'Lepszy system bezpieczeństwa',
		MuchGreaterPrivacy: 'Znacznie większa prywatność',
		VariousGenshinImpactAccountGiveaways: 'Różne rozdania kont Genshin Impact',
		NewWindowsTerminalAppearance: 'Nowy wygląd Windows Terminal (WT)',
		PhotosAndInterestingVideosOfTheDevsCats: 'Zdjęcia i ciekawe filmy z kotami deweloperów',

		AbilityToUseBatchFiles: 'Możliwość użycia plików wsadowych',
		OptimizationOfYourComputerForBestPerformance: 'Optymalizacja Twojego komputera',
		AssistanceRelatedToPCsOrLaptops: 'Pomoc dotycząca komputerów PC lub laptopów',
		ActivationPossibleOn: 'Aktywacja możliwa na',
	},

	SubscribeNow: 'Subskrybuj teraz',
	ChangeYourTier: 'Zmień swój tier',

	SubscriptionIsTreatedAsVoluntarySupport: 'Subskrypcja jest traktowana jako dobrowolne wsparcie, a nie jako zakup usługi lub produktu. Korzyści otrzymujesz tylko i wyłącznie jako dowód wdzięczności.',
	IfYouWishYouCanContinueToUseTheFreeVersionAtNoCost: 'Jeśli chcesz, możesz nadal korzystać z darmowej wersji całkowicie bezpłatnie. Decyzja należy wyłącznie od Ciebie.',

	Crypto: 'Kryptowaluty',
	IfYouWantToMakeAPaymentUsingCrypto: 'Jeśli chcesz dokonać płatności za pomocą kryptowaluty, skontaktuj się z deweloperem.',
	IAcceptPaymentsOnlyOnBinance: 'Akceptuję płatności tylko na Binance.',
	CloseModal: 'Zamknij okno modalne',

	PaymentSystem: {
		Header: 'System płatności',
		1: 'Nasz bezpieczny system płatności jest napędzany dzięki {0}. To właśnie dzięki tej bramce płatności możesz śmiało dokonywać płatności, wiedząc, że Twoje dane finansowe są traktowane z najwyższym poziomem bezpieczeństwa.',
		2: 'Stripe to dobrze zaufana i globalnie rozpoznawana platforma do przetwarzania płatności, która gwarantuje płynne i bezpieczne transakcje dla naszej społeczności. Bez względu na to, czy kupujesz produkty, subskrybujesz usługi czy dokonujesz darowizn, solidna infrastruktura Stripe zapewnia niezawodne i bezproblemowe doświadczenie płatności.',
	},

	AcceptedPaymentMethods: 'Akceptowane metody płatności',
	IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer: 'Jeśli chcesz dokonać płatności za pomocą kryptowalut lub przelewu bankowego, skontaktuj się z deweloperem.',
	BankName: 'Nazwa banku:',
	AccountNumber: 'Numer konta:',
	SWIFTOrBICCode: 'Kod SWIFT/BIC:',
	IBAN: 'IBAN:',
	AskTheAdministratorForIt: 'Zapytaj administratora o to',
	PleaseNoteThatTheBuyerIsResponsibleForCoveringAnyBankFees: 'Prosimy pamiętać, że to kupujący ponosi odpowiedzialność za pokrycie wszelkich opłat bankowych związanych z jakąkolwiek transakcją.',

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