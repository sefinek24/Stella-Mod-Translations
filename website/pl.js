module.exports.data = {
	FileVersion: '2.0.4',
	LastUpdate: '23.06.2023',
	Contributors: [{
		Sefinek: {
			GitHub: 'https://github.com/sefinek24',
			Website: 'https://sefinek.net',
		},
	}],
};

// Main
module.exports.default = {
	tooltips: {
		OfficialDiscordServer: 'Oficjalny serwer Discord',
		GitHubRepositories: 'Repozytoria GitHub',
	},

	And: 'i',
	From: 'z',
	In: 'w',
	Back: 'Wstecz',
	Next: 'Dalej',
	DiscordServer: 'Serwer Discord',
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
	tooltips: {
		ClickHereToDownloadSetup: 'Kliknij tutaj, aby pobrać x64 bitowy instalator dla Windows 10 i 11.',
		ViewScreenshotsFromTheGameWithInjectedReShade: 'Zobacz zrzuty ekranu z gry z wstrzykniętym ReShade.',
		WatchMyVideosAboutTheModAndLauncher: 'Obejrzyj moje filmy o modzie i programie uruchamiającym.',
		CheckSysRequirementsRecommendedSettingsForTheGameAndMore: 'Sprawdź wymagania systemowe, zalecane ustawienia gry i nie tylko!',
		LeaveYourFeedback: 'Podziel się swoją opinią.',
		ClickHereIfYouNeedHelp: 'Kliknij tutaj jeśli potrzebujesz pomocy.',
		InvitationToDiscordServer: 'Zaproszenie na nasz serwer Discord.',
	},

	TheBestGIRSModPack: 'Najlepszy pakiet modów do Genshin Impact z ReShade, niestandardowymi ustawieniami graficznymi, odblokowywaniem FPS, własnym Launcherem i tym podobne!',
	JoinOurDiscordServer: 'Dołącz na nasz {a}serwer Discord{/a}, aby otrzymywać informacje o najnowszych aktualizacjach, funkcjach i wiadomościach.',

	Download: 'Pobierz',
	Gallery: 'Galeria',
	Tutorial: 'Poradnik',
	WatchVideos: 'Obejrzyj widea',
	ReadMore: 'Czytaj więcej',
	Feedback: 'Opinia',
	Support: 'Pomoc',
	MainPage: 'Strona główna',

	PleaseSupportMe: 'Proszę, wesprzyj moją pracę',
	SupportMyWork: 'Wesprzyj moją pracę',
	SupportMe: 'Wesprzyj mnie',

	DownloadingData: 'Pobieranie danych...',
	Version: 'Wersja',
	TheVersionWithoutCaps: 'wersji',
	DownloadCount: 'Liczba pobrań',
	LastDownload: 'Ostatnie pobranie',

	modal: {
		Notification: 'Powiadomienie',
		ThankYouForDownloading: 'Dzięki za pobranie! Dołącz na nasz serwer Discord, aby otrzymywać powiadomienia o najnowszych aktualizacjach, funkcjach i innych ogłoszeniach. Nie wahaj się skontaktować z twórcą, jeśli masz jakiekolwiek pytania lub problemy. Jeśli podoba Ci się Stella Mod, rozważ napisanie recenzji na {a}trustpilot.com{/a}. Ten program jest dostępny za darmo dzięki Waszym dotacjom.\nŻyczę miłego dnia lub nocki~!',
		TheTotalNumberOfDownloadsNowIs: 'Całkowita liczba pobrań wynosi teraz',
		NoProblem: 'Żaden problem',
	},
};

// GET /genshin-impact-reshade/gallery
module.exports.gallery = {
	GalleryPage: 'Galeria - Numer strony',
	GalleryCompareReleases: 'Gallery - Porównaj wydania -',
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
};

// GET /genshin-impact-reshade/feedback
module.exports.feedback = {
	tooltips: {
		ClickHereToGoToTheYTPage: 'Kliknij tutaj, aby przejść do strony YouTube.',
		GiveAStarToMyReposOnGitHub: 'Nadaj gwiazdkę moim repozytoriom na GitHubie, tym, które lubisz.',
	},

	LeaveYourFeedback: 'Podziel się swoją opinią',
	IfYouLikeThisProjectSupportMe: 'Jeśli podoba Ci się ten projekt, rozważ {1}subskrypcje{/1} mojego kanału na YouTube, danie {2}gwiazdki{/2} na GitHubie lub {3}wsparcia mnie{/3} w inny sposób.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Dodatkowo, jeśli masz jakieś uwagi lub sugestie, nie wahaj się skorzystać z funkcji czatu, aby przesłać je bezpośrednio do twórcy.',

	btn: {
		BelowYTVideo: 'Pod filmem na YouTube',
		OnTheDiscordServer: 'Na serwerze Discord',
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	tooltips: {
		JoinOurOfficialDiscordServer: 'Dołącz do naszego oficjalnego serwera Discord."',
		LeaveACommendBelowMyVideo: 'Zostaw komentarz pod moim filmem.',
		ReturnTo: 'Wróć do: Genshin Stella Mod - Here begins your adventure.',
	},

	SomeQuestions: 'Jakieś pytania? Potrzebujesz pomocy?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Masz może jakikolwiek problem z modem lub pytanie? Jeśli tak, nie wahaj się z nami skontaktować! Nasz zespół jest do Państwa dyspozycji w przypadku jakichkolwiek pytań lub wątpliwości.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Niezależnie od tego, czy potrzebujesz pomocy w instalacji moda, czy masz pytania dotyczące jego funkcji, jesteśmy tutaj, aby Ci pomóc.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Pamiętaj, że nasza społeczność również jest również gotowa, by odpowiedzieć na Twoje pytania. W tym celu dołącz na nasz serwer Discord lub utwórz nowy Issue na GitHub.',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Po prostu kliknij ikonę czatu w prawym dolnym rogu, aby rozpocząć nową konwersację w języku polskim lub angielskim. Oczekujemy na Twój kontakt!',
	StellaModIsNotAffiliatedWithHoyoverse: 'Należy pamiętać, że oprogramowanie Stella Mod nie jest powiązane z firmą Hoyoverse (MiHoYo).',
	JoinToDiscordServer: 'Dołącz na nasz serwer Discord',
	CommentMyYTVideo: 'Skomentuj mój film na YouTube',
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

// GET /genshin-impact-reshade/read-more
module.exports.readMore = {
	tooltips: {
		TheBiggestSourceOfKnowledge: 'Największe źródło wiedzy i informacji kryje się tuż za tym przyciskiem!',
	},

	ReadMoreInformation: 'Większa dawka informacji',
	MoreInfoIsAvailableOnGHWiki: 'Więcej informacji znajdziesz w repozytorium {1}sefinek24/Genshin-Impact-ReShade{/1} na stronie {2}GitHub Wiki{/2}.',
	HowToInstall: 'Jak zainstalować?',
	ViewChangelog: 'Wyświetl listę zmian',
	PrivacyPolicy: 'Polityka prywatności',
	SeeContents: 'Zobacz zawartość',
	GameCompatibility: 'Kompatybilność gry',
	RecommendedGameSettings: 'Zalecane ustawienia gry',
	PCRequirements: 'Wymagania sprzętowe',
	SupportedOperatingSystems: 'Obsługiwane systemy',
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
	Status: 'Status',
	WaitingForUser: 'Oczekiwanie na interakcje użytkownika...',
	VerifyingSession: 'Weryfikowanie sesji...',
	Success: 'Powodzenie',
	ValidateRequest: 'Zwaliduj zapytanie',
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
	InvalidKeyProvided: 'Podany klucz jest nieprawidłowy.',
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'Ten link wygasł i nie będzie już aktywny.',
	ErrorOccurredPleaseTryAgain: 'Wystąpił błąd. Proszę spróbuj ponownie.',
};