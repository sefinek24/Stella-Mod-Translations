module.exports.data = {
	FileVersion: '2.1.0',
	LastUpdate: '20.08.2023',
	Contributors: [{
		Sefinek: {
			GitHub: 'https://github.com/sefinek24',
			Website: 'https://sefinek.net',
		},
	}],
};

// Main
module.exports.default = {
	And: 'and',
	From: 'from',
	In: 'in',
	Back: 'Back',
	Next: 'Next',

	DiscordServer: 'Discord server',
	DiscordServerTooltip: 'Invitation to our Discord server',

	tooltips: {
		OfficialDiscordServer: 'Official Discord server',
		GitHubRepositories: 'GitHub repositories',
	},
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
		DeviceIsNotSupported: 'Device is not supported',
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
	Header: 'Genshin Impact Stella Mod made by Sefinek',
	Text1: 'Safe and unique features like ReShade enhancements, carefully designed custom graphics, and impressive FPS unlocking offer players the best gaming experience!',
	Text2: 'The 3DMigoto add-on elevates the mod even further, providing immersive gameplay. Plus, the mod\'s custom launcher streamlines the process, helping players jump right into action.',
	// Text3: 'Stay updated with the latest news and join the {a}Discord server{/a} for a community of like-minded players aiming to maximize their Genshin Impact enjoyment.',
	FinalText: 'Don\'t wait! Dive into Teyvat\'s enhanced world now and have an unforgettable time!',

	Download: 'Download',
	DownloadTooltip: 'Click here to download the x64-bit installer for Windows 10 and 11.',

	Gallery: 'Gallery',
	GalleryTooltip: 'See the screenshots from the game with ReShade injected.',

	WatchVideos: 'Watch videos',
	WatchVideosTooltip: 'Watch my videos about the mod and the launching program.',

	ReadMore: 'Read more',
	ReadMoreTooltip: 'Check the system requirements, recommended game settings, and more!',

	Feedback: 'Feedback',
	FeedbackTooltip: 'Share your opinion.',

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
	GalleryPage: 'Gallery - Page number',
	GalleryCompareReleases: 'Gallery - Compare releases:',
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

	tooltips: {
		GoBackToMainGalleryPage: 'Go back to main gallery page',
	},
};

// GET /genshin-impact-reshade/feedback
module.exports.feedback = {
	LeaveYourFeedback: 'Share your opinion',
	IfYouLikeThisProjectSupportMe: 'If you like this project, consider {1}subscribing{/1} to my YouTube channel, giving it a {2}star{/2} on GitHub, or {3}supporting me{/3} in another way.',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'Additionally, if you have any comments or suggestions, don\'t hesitate to use the chat feature to send them directly to the creator.',

	btn: {
		BelowYTVideo: 'Below my YouTube video',
		OnTheDiscordServer: 'On the Discord server',
	},

	tooltips: {
		ClickHereToGoToTheYTPage: 'Click here to go to the YouTube page.',
		GiveAStarToMyReposOnGitHub: 'Give a star to my repositories on GitHub, the ones you like.',
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	SomeQuestions: 'Some questions? You need help?',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Do you have any issues or questions about Stella Mod? If so, don\'t hesitate to contact us! Our team is at your disposal for any questions or concerns.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Whether you need help with installing Stella or have questions about its features, we are here to assist you.',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: 'Please note that our community is also ready to answer your questions. To do so, join our Discord server or create a new Issue on GitHub.',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'Just click on the chat icon in the bottom right corner to start a new conversation in Polish or English. We look forward to hearing back from you!',
	StellaModIsNotAffiliatedWithHoyoverse: 'Please note that Stella Mod is not affiliated with Hoyoverse (MiHoYo).',
	JoinToDiscordServer: 'Join to Discord server',
	CommentMyYTVideo: 'Comment my video on YouTube',

	tooltips: {
		JoinOurOfficialDiscordServer: 'Join our official Discord server.',
		LeaveACommendBelowMyVideo: 'Leave a comment below my video.',
		ReturnTo: 'Return to: Genshin Stella Mod - Here begins your adventure.',
	},
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

// GET /genshin-impact-reshade/docs
module.exports.docs = {
	TableOfContents: 'Table of Contents',
	1: {
		Introduction: '{0}. {1} Introduction to Stella Mod',
		ReadMe: '{0}. {1} README.md',
		Support: '{0}. {1} Support',
		FAQ: '{0}. {1} FAQ',
		WhatIs: '{0}. {1} What is...',
		HowToAvoidABan: '{0}. {1} How to avoid a ban?',
		ToS: '{0}. {1} ToS',
		PrivacyPolicy: '{0}. {1} Privacy policy',
		SoftwareLicense: '{0}. {1} Software license',
		Installation: '{0}. {1} Installation',
	},

	Changelogs: 'Changelogs',
	2: {
		Versions: '{0}. {1} Versions {2}.x.x',
	},

	DocumentCreationDate: 'Document creation date: {0}',
	LastUpdate: 'Last update: {0}',
	DocumentSize: 'Document size: {0}',

	GoToHomePage: 'Go to home page',
	GoBack: 'Go back',
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
	WaitingForUser: 'Waiting for user interaction...',
	VerifyingCaptcha: 'Verifying captcha...',
	VerifyingSession: 'Verifying session...',
	Successfully: 'Successfully',
	ValidateRequest: 'Validate request',
	NextPage: 'Next page',
	WrongStatusCode: 'Error. Received wrong status code ({0}) from sefinek.net.',
	Failed: 'Failed',
	Expired: 'Session expired. Please refresh this page.',
	Canceled: 'Session was canceled by the user. Try again.',
	FatalError: 'Fatal error. Please try again or refresh this page.',

	// index.ejs
	Header: 'Receive your benefits {0}',

	1: 'Thank you so much for supporting me! Your generosity and encouragement are invaluable to me, and I truly appreciate your trust in me.',
	2: 'As a token of my gratitude, you gain access to benefits.',
	3: 'If you have any questions, concerns, or feedback regarding my work, please feel free to contact me at any time.',

	4: 'Please remember that benefits can only be obtained once from a single generated token (link).',
	5: 'However, if you use the appropriate command on the Discord server and provide a reason why you want to claim the benefits again, you can generate a new key.',
	6: 'When will I lose access to the benefits? Here\'s the answer. Your subscription on Patreon must expire.',

	7: 'After downloading the application, take some time to familiarize yourself with the terms of the license.',
	8: 'This will help you understand how you can use the application and the rights and responsibilities associated with it.',

	9: 'If for any reason you need to download the benefits again, you can simply invoke the command {code};receive{/code} on the Discord server.',
	10: 'I also inform you that the link will automatically expire at 00:00 Polish time.',

	ThankYouForYourSupport: 'Thank you again for your support!',
	SefinekOwO: '~ Sefinek',

	clickHereToDownload: 'Click here to download',

	// received.ejs
	ThisMethodIsNotAllowed: 'This method is not allowed',
	YourBenefitsHaveAlreadyBeenReceived: 'Your benefits have already been received at {0}, {1}.',
	Country: 'Country: {0}',
	ThankUForYourSupport: 'Thank you for your support!',

	// error.ejs
	SomethingWentWrong: 'Sad cat >~~< Something went wrong...',
	InvalidUserId: 'Invalid user ID provided.',
	InvalidKeyProvided: 'Invalid key provided.',
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'This link has expired and will no longer be active.',
	ErrorOccurredPleaseTryAgain: 'Error occurred. Please try again.',
};