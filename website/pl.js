module.exports.data = {
	FileVersion: '2.0.0',
	LastUpdate: '30.05.2023',
	Contributors: [{
		Sefinek: {
			GitHub: 'https://github.com/sefinek24',
			Website: 'https://sefinek.net',
		},
		ChatGPT: false,
	}],
};

module.exports.default = {
	tooltips: {
		OfficialDiscordServer: 'Oficjalny serwer Discord',
		GitHubRepositories: 'Repozytoria GitHub',
	},

	And: 'i',
	From: 'z',
	In: 'w',
	Back: '« Wstecz',
	Next: 'Dalej »',
	DiscordServer: 'Serwer Discord',
};

module.exports.errors = {
	400: {
		BadRequest: '❎ Błąd 400: Zła prośba',
		InvalidURL: 'Wsteczny adres URL jest nieprawidłowy.',
		ReferrerURL: 'Twój adres URL strony odsyłającej',
		CorrectRefURL: 'Poprawny adres URL strony odsyłającej',
	},

	deviceNotSupported: {
		DeviceIsNotSupported: '❎ Urządzenie nie jest obsługiwane',
		SorryYourDeviceIsNotSupported: 'Przepraszamy. Twoje urządzenie nie jest wspierane.',
		ViewSupportedOperatingSystems: 'Wyświetl obsługiwane systemy operacyjne.',
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'Nie możemy znaleźć pliku ZIP na serwerze',
		NewUpdateIsComing: 'Nadchodzi nowa aktualizacja? Możliwe...<br>W każdym razie spróbuj ponownie później lub zgłoś ten problem na naszym serwerze Discord.',
	},

	missingLang: {
		OhNoSomethingWentWrong: 'O nie! Coś poszło nie tak...',
		WereSorryButWeCouldFindTheCorrectTranslation: 'Przepraszamy, ale nie mogliśmy znaleźć prawidłowego tłumaczenia dla Twojego języka - {0}. Aby uzyskać więcej informacji, sprawdź szczegóły konsoli. (≧◡≦) ♡',
		IfYouWouldLikeToContributeYourOwnTranslationOrHelpUsFixThisIssue: 'Jeśli chcesz przesłać własne tłumaczenie lub pomóc nam rozwiązać ten problem, utwórz nowy <a href="https://github.com/sefinek24/Genshin-Stella-Mod_Translations/pulls">Pull Request</a> na naszym <a href="https://github.com/sefinek24/Genshin-Stella-Mod_Translations">repozytorium GitHub</a>. Dzięki za pomoc! o(>ω<)o',
		SwitchLanguageToEnglish: 'Zmień język na angielski',
		YesClickMe: 'Takk, kliknij mnie!',
	},
};

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
		ThankYouForDownloading: 'Dziękujemy bardzo za pobranie. Dołącz na nasz {a}serwer Discord{/a}, aby porozmawiać z naszą społecznością.<br>Życzymy miłego dnia lub nocy!',
		TheTotalNumberOfDownloadsNowIs: 'Całkowita liczba pobrań wynosi teraz',
		NoProblem: 'Żaden problem',
	},
};

module.exports.gallery = {
	GalleryPage: 'Galeria - Numer strony',
	GalleryCompareReleases: 'Gallery - Porównaj wydania -',
	GalleryCompares: 'Gallery - Porównania',
	ScreenshotsAreAvailableInHighQuality: 'Zrzuty ekranu są dostępne w wysokiej jakości. Wczytanie ich może trochę potrwać.',
	WebsiteIsNotSupportedOnMobileDevices: 'Ta witryna nie jest obsługiwana na urządzeniach mobilnych.',
	SomeImageCanBeOutdated: 'Niektóre zdjęcia mogą być nieaktualne.',

	SeeComparesFromTheNewVersions: 'Zobacz porównania z nowymi wersjami',
	ViewCompareFromTheLatestVersions: 'Wyświetl porównania z najnowszą wersją',
	SeeTheComparisonBetween: '\uD83C\uDF0C Zobacz porównanie między...',
	ThePageYouAreCurrentlyOnDisplaysAComparison: 'Strona, na której aktualnie się znajdujesz, wyświetla porównanie różnych wersji wydań.',
	OldVersion: 'Stara wersja',
	NewVersion: 'Nowa wersja',

	WithMod: 'Z modem',
	WithoutMod: 'Bez moda',

	BonusScreenshot: '\uD83D\uDE40 Bonusowy zrzut ekranu',
};

module.exports.feedback = {
	LeaveYourFeedback: 'Zostaw swoją opinię \uD83D\uDD16',
	IfYouLikeThisProjectSupportMe: 'Jeśli podoba Ci się ten projekt, rozważ subskrypcję <a href="https://www.youtube.com/channel/UClrAIcAzcqIMbvGXZqK7e0A?sub_confirmation=1" target="_blank">mojego kanału na YouTube</a>, dodanie gwiazdki na <a href="https://github.com/sefinek24/Genshin-Impact-ReShade" target="_blank">on GitHubie</a> lub  <a href="/support-me">wsparcie mnie</a> w inny sposób.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Dodatkowo, jeśli masz jakieś uwagi lub sugestie, nie wahaj się skorzystać z funkcji czatu, aby przesłać je bezpośrednio do mnie.',
};

module.exports.help = {
	SomeQuestions: 'Jakieś pytania? Potrzebujesz pomocy? \uD83E\uDD1D',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Masz może jakikolwiek problem z modem lub pytanie? Jeśli tak, nie wahaj się z nami skontaktować! Nasz zespół jest do Państwa dyspozycji w przypadku jakichkolwiek pytań lub wątpliwości.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Niezależnie od tego, czy potrzebujesz pomocy w instalacji moda, czy masz pytania dotyczące jego funkcji, jesteśmy tutaj, aby Ci pomóc.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Pamiętaj, że nasza społeczność również jest również gotowa, by odpowiedzieć na Twoje pytania. W tym celu dołącz na nasz serwer Discord lub utwórz nowy Issue na GitHub.',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Po prostu kliknij ikonę czatu w prawym dolnym rogu, aby rozpocząć nową konwersację w języku polskim lub angielskim. Oczekujemy na Twój kontakt!',
	StellaModIsNotAffiliatedWithHoyoverse: 'Należy pamiętać, że oprogramowanie Stella Mod nie jest powiązane z firmą Hoyoverse (MiHoYo).',
	JoinToDiscordServer: '\uD83D\uDD35 Dołącz na nasz serwer Discord',
	CommentMyYTVideo: '\uD83D\uDD34 Skomentuj mój film na YouTube',
};

module.exports.videos = {
	WatchVideosOnYT: 'Obejrzyj filmy na YouTube \uD83C\uDFA5',
	IfYouWantToRecordNewVideo: 'Jeśli chcesz nagrać i przesłać film na YouTube, proszę, wyślij mi wiadomość. Mogę umieścić link tutaj.',
	DeprecatedMovies: 'Przestarzałe nagrania',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'Te filmy pochodzą z poprzednich wersji Stella Mod i są uważane już za przestarzałe.',
	FirstModRelease: 'Pierwsza wersja moda',
	Gameplay: 'Rozgrywka',
};

module.exports.readMore = {
	ReadMoreInformation: 'Przeczytaj więcej informacji \uD83D\uDE3A',
	HowToInstall: 'Jak zainstalować?',
	ViewChangelog: '\uD83D\uDCDD Wyświetl listę zmian',
	PrivacyPolicy: '\uD83D\uDC65 Polityka prywatności',
	SeeContents: '\uD83D\uDCE6 Zobacz zawartość',
	GameCompatibility: '\uD83D\uDEE0️ Kompatybilność gry',
	RecommendedGameSettings: '⚙️ Zalecane ustawienia gry',
	PCRequirements: '\uD83D\uDCBB Wymagania sprzętowe',
	SupportedOperatingSystems: '\uD83D\uDD27 Obsługiwane systemy',
};

module.exports.github = {
	AllReposOnGithub: '\uD83D\uDC08 Wszystkie repozytoria na GitHubie',
	IfYouWantToBecomeContributor: 'Jeśli chcesz zostać współtwórcą, po prostu utwórz nowy Pull Request. Dziękuję bardzo i życzę Ci udanego kodowania!',
};