module.exports.data = {
	FileVersion: '2.1.1',
	LastUpdate: '03.09.2023',
	Contributors: [{
		Sefinek: {
			GitHub: 'https://github.com/sefinek24',
			Website: 'https://sefinek.net',
		},
	}],
};

// Main
module.exports.default = {
	And: 'i',
	From: 'z',
	In: 'w',
	Back: 'Wstecz',
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
	Header: 'Genshin Impact Stella Mod autorstwa Sefinek uwu baka',
	Text1: 'Bezpieczne i unikalne funkcje, takie jak usprawnienia ReShade, starannie zaprojektowana niestandardowa grafika oraz imponujące odblokowywanie FPS, oferują graczom najlepsze doświadczenie w grze!',
	Text2: '3DMigoto jeszcze bardziej podnosi moda na wyższy poziom, zapewniając wciągającą zabawę. Dodatkowo, nasz własny launcher usprawnia cały proces, pomagając graczom szybko przejść do akcji.',
	// Text3: 'Bądź na bieżąco z najnowszymi wiadomościami i dołącz do {a}serwera Discord{/a}, aby dołączyć do społeczności graczy o podobnych zainteresowaniach, dążących do maksymalizacji przyjemności z gry Genshin Impact.',
	FinalText: 'Nie czekaj! Zanurz się teraz w ulepszonym świecie Teyvat i spędź niezapomniane chwile! Powodzenia.',

	Download: 'Pobierz',
	DownloadTooltip: 'Kliknij tutaj, aby pobrać instalator x64-bitowy dla systemów Windows 10 i 11.',

	Gallery: 'Galeria',
	GalleryTooltip: 'Zobacz zrzuty ekranu z gry z dodanym ReShade.',

	WatchVideos: 'Obejrzyj filmy',
	WatchVideosTooltip: 'Obejrzyj moje filmy dotyczące moda oraz programu uruchamiającego.',

	ReadMore: 'Czytaj więcej',
	ReadMoreTooltip: 'Sprawdź wymagania systemowe, zalecane ustawienia gry i więcej!',

	Feedback: 'Opinie',
	FeedbackTooltip: 'Podziel się swoją opinią.',

	Support: 'Wsparcie',
	SupportTooltip: 'Kliknij tutaj, jeśli potrzebujesz pomocy.',

	MainPage: 'Strona główna',
	MainPageTooltip: 'Strona główna - Oficjalna strona Sefinka',

	PleaseSupportMe: 'Proszę wesprzyj moją pracę',
	SupportMyWork: 'Wesprzyj moją pracę',
	SupportMe: 'Wesprzyj mnie',

	DownloadingData: 'Pobieranie danych...',
	Version: 'Wersja',
	TheVersionWithoutCaps: 'wersja',
	DownloadCount: 'Liczba pobrań',
	LastDownload: 'Ostatnie pobranie',

	modal: {
		ThankYouForDownloading: 'Dziękujemy za pobranie',
		BecomeMyPatronToGainMoreBenefits: 'Zostań moim patronem, aby uzyskać więcej korzyści, takich jak możliwość korzystania z 3DMigoto wraz z FPS Unlockerem i ReShade + dużą kolekcje modów bez błędów + kolekcje najnowszych 300 shaderów + dodatek, który zapobiega nakładaniu się filtrów na interfejs użytkownika (UI) + Ray Tracing w grze i wiele więcej!',
		JoinOurDiscordServerToReceiveNotifications: 'Dołącz do naszego serwera Discord, aby otrzymywać powiadomienia o najnowszych aktualizacjach, funkcjach i innych ogłoszeniach. Śmiało skontaktuj się z twórcą, jeśli masz pytania lub napotkasz jakieś problemy.',
		IfYouReEnjoyingStellaModConsiderLeavingAReview: 'Zostaw opinię na {a}trustpilot.com{/a} po przetestowaniu oprogramowania!',
		WishingYouAWonderfulDayOrNight: 'Życzę ci wspaniałego dnia lub nocy! UwU',
		TheTotalNumberOfDownloadsNowIs: 'Aktualna liczba pobrań wynosi',
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
	StellaModIsNotAffiliatedWithHoyoverse: 'Należy pamiętać, że oprogramowanie Stella Mod nie jest powiązane z firmą Hoyoverse (MiHoYo).',
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

	GoToHomePage: 'Przejdź do strony głównej',
	GoBack: 'Powróć',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'Wszystkie repozytoria na GitHubie',
	IfYouWantToBecomeContributor: 'Jeśli chcesz zostać współtwórcą, po prostu utwórz nowy Pull Request. Dziękuję bardzo i życzę Ci udanego kodowania!',
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
	6: 'Kiedy stracę dostęp do korzyści? O to odpowiedź. Twoja subskrypcja na Patronie musi wygasnąć.',

	7: 'Po pobraniu aplikacji poświęć trochę czasu na zapoznanie się z warunkami licencji.',
	8: 'Pomoże Ci to zrozumieć, w jaki sposób możesz korzystać z aplikacji oraz związanych z nią praw i obowiązków.',

	9: 'Jeśli z jakiegoś powodu musisz ponownie pobrać korzyści, możesz ponownie wywołać polecenie {code};receive{/code} na serwerze Discord. ',
	10: 'Informuję również, że link automatycznie wygaśnie o godzinie 00:00 czasu polskiego.',

	ThankYouForYourSupport: 'Jeszcze raz dziękuję za wsparcie!',
	SefinekOwO: '~ Sefinek',

	clickHereToDownload: 'Kliknij tutaj, aby pobrać',

	// received.ejs
	ThisMethodIsNotAllowed: 'Ta metoda jest niedozwolona',
	YourBenefitsHaveAlreadyBeenReceived: 'Twoje korzyści zostały już odebrane dnia {0}, {1}.',
	Country: 'Kraj: {0}',
	ThankUForYourSupport: 'Dziękuję za Twoje wsparcie!',

	// error.ejs
	SomethingWentWrong: 'Smutny kot >~~< Coś poszło nie tak...',
	InvalidUserId: 'Identyfikator użytkownika jest nieprawidłowy.',
	InvalidKeyProvided: 'Podany klucz jest nieprawidłowy.',
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'Ten link wygasł i nie będzie już aktywny.',
	ErrorOccurredPleaseTryAgain: 'Wystąpił błąd. Proszę spróbuj ponownie.',
};