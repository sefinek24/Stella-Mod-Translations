module.exports.data = {
	FileVersion: '2.0.0',
	LastUpdate: '31.05.2023',
	Contributors: [{
		Sefinek: {
			GitHub: 'https://github.com/sefinek24',
			Website: 'https://sefinek.net',
		},
		ChatGPT: false,
	}],
};

// Main
module.exports.default = {
	tooltips: {
		OfficialDiscordServer: 'Official Discord server',
		GitHubRepositories: 'GitHub repositories',
	},

	And: 'and',
	From: 'from',
	In: 'in',
	Back: 'Back',
	Next: 'Next',
	DiscordServer: 'Discord server',
};

// Errors
module.exports.errors = {
	400: {
		BadRequest: 'Error 400: Bad Request',
		InvalidURL: 'The return URL is invalid.',
		ReferrerURL: 'Your referrer URL',
		CorrectRefURL: 'Correct URL',
	},

	wrongOs: {
		DeviceIsNotSupported: '❎ Device is not supported',
		SorryYourDeviceIsNotSupported: 'Sorry. Your device is not supported.',
		ViewSupportedOperatingSystems: 'View supported operating systems.',
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'We cannot find ZIP file on the server',
		NewUpdateIsComing: 'New update is coming? Probaby...\nAnyways, please try again later or report this issue on our Discord server.',
	},
};

// GET /genshin-impact-reshade
module.exports.home = {
	tooltips: {
		ClickHereToDownloadSetup: 'Click here to download the x64-bit installer for Windows 10 and 11.',
		ViewScreenshotsFromTheGameWithInjectedReShade: 'See the screenshots from the game with ReShade injected.',
		WatchMyVideosAboutTheModAndLauncher: 'Watch my videos about the mod and the launching program.',
		CheckSysRequirementsRecommendedSettingsForTheGameAndMore: 'Check the system requirements, recommended game settings, and more!',
		LeaveYourFeedback: 'Share your opinion.',
		ClickHereIfYouNeedHelp: 'Click here if you need help.',
		InvitationToDiscordServer: 'Invitation to our Discord server.',
	},

	TheBestGIRSModPack: 'The best mod for Genshin Impact with ReShade, custom graphics presets, FPS unlock, custom launcher, and more!',
	JoinOurDiscordServer: 'Join our {a}Discord server{/a} to receive information about the latest updates, features, and news.',

	Download: 'Download',
	DownloadTooltip: 'Download the official setup for Windows 10 or 11 with a 64-bit CPU.',
	Gallery: 'Gallery',
	Tutorial: 'Tutorial',
	WatchVideos: 'Watch videos',
	ReadMore: 'Read more',
	Feedback: 'Feedback',
	Support: 'Support',
	MainPage: 'Main page',

	PleaseSupportMe: 'Please support my work',
	SupportMyWork: 'Support my work',
	SupportMe: 'Support me',

	DownloadingData: 'Downloading data...',
	Version: 'Version',
	TheVersionWithoutCaps: 'the version',
	DownloadCount: 'Download count',
	LastDownload: 'Last download',

	modal: {
		Notification: 'Notification',
		ThankYouForDownloading: 'Thank you for downloading. Join our {a}Discord server{/a} to receive the latest updates, features, and news. Have a nice day or night!',
		TheTotalNumberOfDownloadsNowIs: 'The total number of downloads now is',
		NoProblem: 'No problem',
	},
};

// GET /genshin-impact-reshade/gallery
module.exports.gallery = {
	GalleryPage: 'Gallery - Page number',
	GalleryCompareReleases: 'Gallery - Compare releases -',
	ScreenshotsAreAvailableInHighQuality: 'Screenshots are available in high quality. It may take a while to load them.',
	WebsiteIsNotSupportedOnMobileDevices: 'This website is not supported on mobile devices.',
	SomeImageCanBeOutdated: 'Some images can be outdated!',

	SeeComparesFromTheOtherVersions: 'See compares from the other versions',
	SeeTheComparisonBetween: 'See the comparison between...',
	ThePageYouAreCurrentlyOnDisplaysAComparison: 'The page you are currently on displays a comparison of different versions of releases.',
	OldVersion: 'Old version',
	NewVersion: 'New version',

	WithMod: 'With mod',
	WithoutMod: 'Without mod',

	BonusScreenshot: 'Bonus screenshot',
};

// GET /genshin-impact-reshade/feedback
module.exports.feedback = {
	tooltips: {
		ClickHereToGoToTheYTPage: 'Click here to go to the YouTube page.',
		GiveAStarToMyReposOnGitHub: 'Give a star to my repositories on GitHub, the ones you like.',
	},

	LeaveYourFeedback: 'Share your opinion',
	IfYouLikeThisProjectSupportMe: 'If you like this project, consider {1}subscribing{/1} to my YouTube channel, giving it a {2}star{/2} on GitHub, or {3}supporting me{/3} in another way.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Additionally, if you have any comments or suggestions, don\'t hesitate to use the chat feature to send them directly to the creator.',

	btn: {
		BelowYTVideo: 'Below my YouTube video',
		OnTheDiscordServer: 'On the Discord server.',
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	tooltips: {
		JoinOurOfficialDiscordServer: 'Join our official Discord server.',
		LeaveACommendBelowMyVideo: 'Leave a comment below my video.',
		ReturnTo: 'Return to: Genshin Stella Mod - Here begins your adventure.',
	},

	SomeQuestions: 'Some questions? You need help?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Do you have any issues or questions about Stella Mod? If so, don\'t hesitate to contact us! Our team is at your disposal for any questions or concerns.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Whether you need help with installing Stella or have questions about its features, we are here to assist you.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Please note that our community is also ready to answer your questions. To do so, join our Discord server or create a new Issue on GitHub.',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Just click on the chat icon in the bottom right corner to start a new conversation in Polish or English. We look forward to hearing back from you!',
	StellaModIsNotAffiliatedWithHoyoverse: 'Please note that Stella Mod is not affiliated with Hoyoverse (MiHoYo).',
	JoinToDiscordServer: 'Join to Discord server',
	CommentMyYTVideo: 'Comment my video on YouTube',
};

// GET /genshin-impact-reshade/videos
module.exports.videos = {
	WatchVideosOnYT: 'Watch videos on YouTube',
	IfYouWantToRecordNewVideo: 'If you want to record a video and upload it to YouTube, please send me a message. I can include the link here.',
	DeprecatedMovies: 'Deprecated movies',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'The movies are from previous versions of Stella Mod and are already considered outdated.',
	FirstModRelease: 'First mod release',
	Gameplay: 'Gameplay',
};

// GET /genshin-impact-reshade/read-more
module.exports.readMore = {
	tooltips: {
		TheBiggestSourceOfKnowledge: 'The biggest source of knowledge and information is hidden right behind this button!',
	},

	ReadMoreInformation: 'Read more information',
	MoreInfoIsAvailableOnGHWiki: 'Więcej informacji znajdziesz w repozytorium {1}sefinek24/Genshin-Impact-ReShade{/1} na stronie {2}GitHub Wiki{/2}.',
	HowToInstall: 'How to install?',
	ViewChangelog: 'View changelog',
	PrivacyPolicy: 'Privacy policy',
	SeeContents: 'See contents',
	GameCompatibility: 'Game compatibility',
	RecommendedGameSettings: 'Recommended game settings',
	PCRequirements: 'PC requirements',
	SupportedOperatingSystems: 'Supported systems',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'All repositories on GitHub',
	IfYouWantToBecomeContributor: 'If you want to become contributor, just create a new Pull Request. Thank you very much and happy coding!',
};

// For patrons
module.exports.forPatrons = {
	// captcha.ejs
	AreUARobot: 'Are you a robot?',
	Status: 'Status',
	Success: 'Success',
	WrongStatusCode: 'Error. Received wrong status code ({0}) from sefinek.net.',
	Failed: 'Failed',
	Expired: 'Session expired. Please refresh this page.',
	Canceled: 'Session was canceled by the user. Try again.',
	FatalError: 'Fatal error. Please ty again or refresh this page.',


	// index.ejs
	Header: 'Odbierz swoje korzyści {0}!',

	1: 'Bardzo dziękuję za wsparcie! Wasza hojność i zachęta są dla mnie bezcenne i naprawdę doceniam wasze zaufanie do mnie.',
	2: 'W dowód mojej wdzięczności zyskujesz dostęp do korzyści.',
	3: 'Jeśli masz jakiekolwiek pytania, wątpliwości lub uwagi dotyczące mojej pracy, nie wahaj się ze mną skontaktować w dowolnym momencie.',

	4: 'Pamiętaj, że korzyści można uzyskać tylko raz z jednego wygenerowanego tokenu (linku).',
	5: 'Niemniej jednak, jeśli użyjesz odpowiedniej komendy na serwerze Discord i podasz powód dlaczego chcesz odebrać korzyści jeszcze raz, możesz wygenerować nowy klucz.',
	6: 'Kiedy stracę dostęp do korzyści? O to odpowiedź. Twoja subskrypcja na Patronie musi wygasnąć.',

	7: 'Po pobraniu aplikacji poświęć trochę czasu na zapoznanie się z warunkami licencji.',
	8: 'Pomoże Ci to zrozumieć, w jaki sposób możesz korzystać z aplikacji oraz związanych z nią praw i obowiązków.',

	9: 'Jeśli z jakiegoś powodu musisz ponownie pobrać korzyści, możesz ponownie wywołać polecenie {code};receive{/code} na serwerze Discord. ',
	10: 'Informuję również, że link automatycznie wygaśnie o godzinie 00:00 czasu polskiego.',

	ThankYouForYourSupport: 'Thank you again for your support!',
	SefinekOwO: '~ Sefinek',

	clickHereToDownload: 'Click here to download',


	// received.ejs
	ThisMethodIsNotAllowed: 'This method is not allowed',
	YourBenefitsHaveAlreadyBeenReceived: 'Your benefits have already been received at {0}, {1}.',
	Time: 'Time for the country: {0}',
	ThankUForYourSupport: 'Thank you for your support!',
};