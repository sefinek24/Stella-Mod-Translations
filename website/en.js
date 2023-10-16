module.exports.data = {
	Version: '2.4.0',
	LastUpdate: '16.10.2023',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://github.com/sefinek24)',
	],
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
	StellaModIsNotAffiliatedWithHoyoverse: 'Please note that Stella Mod is not affiliated with Hoyoverse.',
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

// GET /genshin-impact-reshade/subscription
module.exports.subscription = {
	AvailableTiers: 'Available tiers',
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
		PrivateClipsFromCSGO: 'Private clips from CS:GO',
		RayTracingForGenshin: 'Ray Tracing for Genshin',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods',
		MigotoInStellaModMoreMods: '3DMigoto in Stella Mod (more mods)',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		PhotosOfMyCats: 'Photos of my cats',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',
		SecuritySystemToAvoidBan: 'Security system to avoid ban',
		NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
		MorePhotosOfMyCats: 'More photos of my cats',
		PrivateDNSInEurope: 'Much better security system (private DNS in Europe)',
		OptimizationOfYourComputerForBestPerformance: 'Optimization of your PC for the best performance',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
	},

	ComparePlans: 'Compare plans',
	benefitsShort: {
		CompletePostArchive: 'Complete post archive',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',
		PrivateClipsFromCSGO: 'Private clips from CS:GO',
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
		MorePhotosOfMyCats: 'More photos of my cats',
		PrivateDNSInEurope: 'Better security system (DNS in Europe)',
		OptimizationOfYourComputer: 'Optimization of your computer',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
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

	ClickHereToDownload: 'Click here to download',

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