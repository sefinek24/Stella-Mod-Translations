exports.data = {
	Version: '2.9.3',
	LastUpdate: '05.07.2024',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://sefinek.net)',
		'daydreamer-json (https://github.com/daydreamer-json)',
		'ChatGPT (https://chat.openai.com)'
	]
};

// Main
exports.default = {
	And: 'と',
	From: ' - ',
	In: '中',

	Back: '戻る',
	GoBack: 'Go back',
	GoBackTo: 'Go back to {0}',
	GoToHomePage: 'Go to home page',
	Next: '進む',

	DiscordServer: 'Discordサーバー',
	DiscordServerTooltip: 'Discordサーバーへの招待',

	YourBrowserDoesNotSupportVideoTag: 'Your browser does not support the video tag.',
	YourBrowserDoesNotSupportAudioTag: 'Your browser does not support the audio tag.',

	tooltips: {
		OfficialDiscordServer: '公式Discordサーバー',
		GitHubRepositories: 'GitHubリポジトリ'
	}
};

// Errors
exports.errors = {
	400: {
		BadRequest: 'Error 400: 不正なリクエストです。',
		InvalidURL: 'URLが不正です。',
		ReferrerURL: 'リファラURL',
		CorrectRefURL: '正しいURL'
	},

	wrongOs: {
		DeviceIsNotSupported: 'デバイスがサポートされていません',
		OperatingSysIsNotSupported: 'We\'re sorry. Your operating system: {0}, is not yet supported.',
		ViewSupportedSystems: 'View supported systems »'
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'サーバー上にZIPファイルが見つかりませんでした。',
		NewUpdateIsComing: '新しいアップデートがありませんか?\n後でもう一度試してみるか、私たちのDiscordサーバーでこの問題を報告してください。'
	}
};

// GET /genshin-impact-reshade
exports.home = {
	Header: 'Genshin Impact Stella Mod by Sefinek',
	Text1: 'Safe features such as ReShade enhancements, carefully crafted shaders, and impressive FPS unlocking ensure the best gaming experience for players!',
	Text2: '3DMigoto enhances the mod for an even more engaging gameplay. Additionally, our own launcher streamlines the whole process, helping players quickly jump into action.',
	FinalText: 'Don\'t hesitate and download now! Dive into the enhanced world of Teyvat today and create unforgettable moments. Have fun!',

	Download: 'ダウンロード',
	DownloadTooltip: 'Windows 10および11用のx64ビットインストーラーをダウンロードするにはここをクリックしてください。',

	StelaModPlusTooltip: 'Stella Mod Plusの有料バージョンにアクセスして、多くの特典と高度なゲーム体験をお楽しみください！',

	Documentation: 'ドキュメンテーション',
	DocumentationTooltip: 'システム要件、推奨ゲーム設定などを確認してください！',

	Gallery: 'ギャラリー',
	GalleryTooltip: 'ReShadeが注入されたゲームのスクリーンショットをご覧ください。',

	Videos: 'ビデオ',
	VideosTooltip: 'モッドと起動プログラムに関する私たちのビデオをご覧ください。',

	Statistics: 'Statistics',
	StatisticsTooltip: 'Check how many people are currently playing Genshin Impact with the Stella mod activated.',

	Feedback: 'フィードバック',
	FeedbackTooltip: '私の作品やStella Modについてのご意見をシェアしてください。',

	Support: 'サポート',
	SupportTooltip: '助けが必要な場合はこちらをクリックしてください。',

	MainPage: 'メインページ',
	MainPageTooltip: 'ホーム - Sefinek公式ウェブサイト',

	PleaseSupportMe: '私の作品をサポートしてください',
	SupportMyWork: '私の作品をサポート',

	DownloadingData: 'データのダウンロード中...',
	Version: 'バージョン',
	TheVersionWithoutCaps: 'バージョン',
	DownloadCount: 'ダウンロード数',
	LastDownload: '最終ダウンロード',

	FeedbackOnTrustpilot: 'Feedback on Trustpilot',

	captchaModal: {
		AreYouARobot: 'Are you a robot?',
		FailedToVerifyCaptcha: 'Failed to verify captcha: {0}',
		FailedToVerifyCaptchaStatusCode: 'Failed to verify captcha (status code: {0}). Reload the website and try again.'
	},

	mirrorModal: {
		SelectDownloadServer: 'Select download server',
		Companies: 'Companies',
		Countries: 'Countries',
		LauncherVersion: 'Launcher version:',
		MirrorsAreCurrentlyUnavailable: 'Mirrors are currently unavailable for this category.',
		ChecksumHasBeenSuccessfullyCopied: 'The {0} checksum has been successfully copied to the clipboard!',
		FailedToCopyChecksumTryAgain: 'Failed to copy the {0} checksum to the clipboard. Please try again.'
	},

	finalModal: {
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
	GalleryPage: 'ギャラリー - ページ',
	GalleryCompareReleases: 'ギャラリー - バージョン間の比較:',
	ScreenshotsAreAvailableInHighQuality: 'スクリーンショットは高画質のものを閲覧できます。読み込むまでに少し時間がかかります。',
	WebsiteIsNotSupportedOnMobileDevices: 'このWebサイトはモバイル端末での利用をサポートしていません。',
	SomeImageCanBeOutdated: '一部の画像は古くなっている場合があります！',

	SeeComparesFromTheOtherVersions: '新しいバージョンとの比較を見る',
	SeeTheComparisonBetween: 'の比較を見る...',
	ThePageYouAreCurrentlyOnDisplaysAComparison: 'このページでは、異なるバージョンの比較を示しています。',
	OldVersion: '旧バージョン',
	NewVersion: '新バージョン',

	WithMod: 'MODあり',
	WithoutMod: 'MODなし',

	BonusScreenshot: '他のスクリーンショット',

	tooltips: {
		GoBackToMainGalleryPage: 'Go back to main gallery page'
	}
};

// GET /genshin-impact-reshade/feedback
exports.feedback = {
	LeaveYourFeedback: 'フィードバックを残す',
	IfYouLikeThisProjectSupportMe: 'もしこのプロジェクトを気に入っていただけましたら、私の{1}YouTubeチャンネル{/1}のチャンネル登録をするか、{2}GitHub{/2}でStarをつけるか、その他の方法で{3}私を支援{/3}していただけると幸いです。',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'また、ご意見やご要望がありましたら、遠慮なくチャットサポートで直接私にお問い合わせください。',

	btn: {
		BelowYTVideo: 'YouTube',
		OnTheDiscordServer: 'Discord'
	},

	tooltips: {
		ClickHereToGoToTheYTPage: 'YouTubeのページに移動するにはここをクリックしてください。',
		GiveAStarToMyReposOnGitHub: '私のGitHubのリポジトリにスターを付けてください。お気に入りのものです。'
	}
};

// GET /genshin-impact-reshade/support
exports.support = {
	SomeQuestions: '何か質問はありますか？お手伝いが必要ですか？',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Do you have any issues with Stella Mod or simply a question? If so, please do not hesitate to contact us! Our team is at your disposal for any inquiries or concerns.',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Stellaのインストールに関するお問い合わせや、機能についてのご質問がある場合は、お手伝いさせていただきます。',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: '弊社コミュニティの皆様も、質問にお答えする準備ができています。Discordサーバーに参加するか、GitHubで新しいIssueを作成してください。',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'ポーランド語または英語で新しい会話を開始するには、右下のチャットアイコンをクリックしてください。あなたからのご連絡をお待ちしています！',
	StellaModIsNotAffiliatedWithHoyoverse: 'Stella Modは、Hoyoverse（MiHoYo）とは関係ありませんので、ご注意ください。',
	JoinToDiscordServer: 'Discordサーバーに参加する',
	SendAnEmail: 'Send an email',

	tooltips: {
		JoinOurOfficialDiscordServer: '公式Discordサーバーに参加してください。',
		SendAnEmailToTheDeveloper: 'Send an email to the developer if you are expecting a more substantive response',
		ReturnTo: '戻る：原神ステラMod - ここから冒険が始まります。'
	}
};

// GET /genshin-impact-reshade/videos
exports.videos = {
	WatchVideosOnYT: '動画をYouTubeで見る',
	IfYouWantToRecordNewVideo: 'If you want to record and upload a video about Stella Mod to YouTube, please contact me. The link to your video will be added to this page.',
	DeprecatedMovies: '非推奨の映画',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'これらの映画は、以前のStella Modのバージョンからのものであり、すでに時代遅れと考えられています。',
	FirstModRelease: '初期リリース',
	Gameplay: 'ゲームプレイ'
};

// GET /genshin-impact-reshade/stats
exports.stats = {
	ToggleBlur: 'Toggle blur',
	ToggleShadows: 'Toggle shadows',
	ToggleBorder: 'Toggle border',
	ToggleBackground: 'Toggle background',

	LiveStats: 'Live stats',
	OnlineNow: 'Online now',
	InTheGame: 'In the game',
	AllDownloadsNow: 'All downloads now',
	Player: 'player',
	Players: 'players',

	BelowYouFindTheStatsForStellaMod: 'Below you will find the statistics for Stella Mod. Enjoy reviewing them! Have a nice day.',

	PerCountry: 'Per country',
	PerHour: 'Per hour',
	PerDay: 'Per day',
	PerMonth: 'Per month',
	PerYear: 'Per year',

	All: 'All',
	Unique: 'Unique',
	FirstOpens: 'First opens',
	Peak: 'Peak',

	Version: 'Version',
	NumerOfDownloads: 'Number of downloads',

	DownloadsPerCountry: 'Downloads per country',
	DownloadsPerCountryAll: 'Downloads per country [All]',
	DownloadsPerVersionAll: 'Downloads per version [All]',
	DownloadsPerVersionUnique: 'Downloads per version [Unique]',
	DownloadsPerDayAll: 'Downloads per day [All]',
	DownloadsPerDayUnique: 'Downloads per day [Unique]',
	DownloadsPerMonthAll: 'Downloads per month [All]',
	DownloadsPerMonthUnique: 'Downloads per month [Unique]',
	DownloadsPerYearAll: 'Downloads per year [All]',
	DownloadsPerYearUnique: 'Downloads per year [Unique]',

	StellaModDownloadsHeader: '📥 Stella Mod downloads',
	StellaModDownloadsText: 'Here are the download statistics for Stella Mod directly from our official website. The history of some data may be incomplete, as the collection of statistics was introduced a significant time after the global release of Stella Mod.<br>Always ensure that you download Stella Mod from a trusted source such as <a href=\'https://sefinek.net\'>sefinek.net</a>.',
	TotalDownloads: '🔢 Total downloads',
	LastDownload: '⏰ Last download',
	YourTimezone: '🪐 Your timezone',

	StellaModLauncherStatsHeader: '😻 Stella Mod Launcher stats',
	StellaModLauncherStatsText: 'In this category, we present detailed statistics related to the number of times the Stella Mod Launcher program has been initiated. This includes data on how frequently the application is opened, and any notable patterns in user engagement with the launcher.',
	AllStellaLauncherOpens: 'All Stella Launcher opens',
	UniqueStellaLauncherOpens: 'Unique Stella Launcher opens',
	OpensPerCountry: 'Opens per country',
	OpensPerVersion: 'Opens per version',
	OpensPerSysVersion: 'Opens per system version',
	OpensPerSysBuild: 'Opens per system build',

	OnlineUsersWSHeader: '🌍 Online users - WebSocket',
	OnlineUsersWSText: 'This section provides a comprehensive overview of user connectivity through our WebSocket server, offering real-time insights into active users. Explore dynamic statistics that reveal the current online user count, peak concurrency levels, and geographical distribution of users. Additionally, temporal patterns of usage are visualized, showcasing trends in daily, hourly, monthly, and yearly online activity.',
	Online: '🔑 Online',
	Peak1: '🍭 Peak',
	OnlinePerCountry: 'Online per country',
	OnlinePerHour: 'Online per hour',
	OnlinePerDay: 'Online per day',
	OnlinePerMonth: 'Online per month',
	OnlinePerYear: 'Online per year',

	PlayersInTheGameHeader: '🎮 Players in the game',
	PlayersInTheGameText: 'Discover how many individuals are currently engaged in the game with the Stella Mod activated. Rest assured, the Stella Mod Launcher operates transparently, performing no undesired actions in the background without your knowledge. This feature ensures a seamless gaming experience, enhancing your play with added functionalities while maintaining a high standard of privacy and security. With Stella Mod, players gain access to a suite of enhancements that elevate the gaming experience. This real-time statistic reflects the popularity and trust in Stella Mod within our community, showcasing the number of active users who have chosen to bring this additional layer of innovation into their gaming sessions.',
	PlayingNow: '💙 Playing now',
	Peak2: '⬆️ Peak',

	WsConnectionsHeader: '🌍 WebSocket connections and operations',
	WsConnectionsText: 'Familiarize yourself with WebSocket metrics in this section, which includes charts displaying the frequency of messages and heartbeats on an hourly, daily, monthly, and yearly basis.',
	Broadcast: 'Broadcast',
	Heartbeats: 'Heartbeats',

	CryptographicOperationsHeader: '🔠 Cryptographic operations',
	CryptographicOperationsText: 'This section offers a comprehensive overview of cryptographic activities in our systems, presenting statistical data related to encryption and decryption processes. Visitors can view charts that display the frequency and success of cryptographic operations across various timeframes. Cryptography is essential in applications and communication for ensuring data confidentiality, integrity, and authenticity, thereby protecting against unauthorized access and cyber threats. It is pivotal in securing digital transactions and maintaining the privacy of sensitive information.',
	Encryption: '🧶 Encryption',
	Decryption: '🔧 Decryption',
	Misc: '🧵 Misc',

	PerOneHour: 'Per hour',
	PerOneDay: 'Per day',
	PerOneMonth: 'Per month',
	PerOneYear: 'Per year',

	ErrorRatePerDay: 'Error rate per day'
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
		Contributors: '{0}. {1} Contributors',
		Attributions: '{0}. {1} Attributions'
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