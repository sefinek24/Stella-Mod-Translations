module.exports.data = {
	FileVersion: '2.3.0',
	LastUpdate: '25.09.2023',
	Contributors: [{
		'daydreamer-json': {
			GitHub: 'https://github.com/daydreamer-json',
			Website: null,
		},
		ChatGPT: {},
	}],
};

// Main
module.exports.default = {
	And: 'と',
	From: ' - ',
	In: '中',
	Back: '戻る',
	Next: '進む',

	DiscordServer: 'Discordサーバー',
	DiscordServerTooltip: 'Discordサーバーへの招待',

	tooltips: {
		OfficialDiscordServer: '公式Discordサーバー',
		GitHubRepositories: 'GitHubリポジトリ',
	},
};

// Errors
module.exports.errors = {
	400: {
		BadRequest: 'Error 400: 不正なリクエストです。',
		InvalidURL: 'URLが不正です。',
		ReferrerURL: 'リファラURL',
		CorrectRefURL: '正しいURL',
	},

	wrongOs: {
		DeviceIsNotSupported: 'デバイスがサポートされていません',
		SorryYourDeviceIsNotSupported: 'あなたのデバイスはサポートされていません。',
		ViewSupportedOperatingSystems: 'サポートされているOSを見る',
	},

	missingZip: {
		WeCannotFindZipFileOnTheServer: 'サーバー上にZIPファイルが見つかりませんでした。',
		NewUpdateIsComing: '新しいアップデートがありませんか?\n後でもう一度試してみるか、私たちのDiscordサーバーでこの問題を報告してください。',
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
};

// GET /genshin-impact-reshade/feedback
module.exports.feedback = {
	LeaveYourFeedback: 'フィードバックを残す',
	IfYouLikeThisProjectSupportMe: 'もしこのプロジェクトを気に入っていただけましたら、私の{1}YouTubeチャンネル{/1}のチャンネル登録をするか、{2}GitHub{/2}でStarをつけるか、その他の方法で{3}私を支援{/3}していただけると幸いです。',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'また、ご意見やご要望がありましたら、遠慮なくチャットサポートで直接私にお問い合わせください。',

	btn: {
		BelowYTVideo: 'YouTube',
		OnTheDiscordServer: 'Discord',
	},

	tooltips: {
		ClickHereToGoToTheYTPage: 'YouTubeのページに移動するにはここをクリックしてください。',
		GiveAStarToMyReposOnGitHub: '私のGitHubのリポジトリにスターを付けてください。お気に入りのものです。',
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	SomeQuestions: '何か質問はありますか？お手伝いが必要ですか？',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Stella Modに関する問題や質問がある場合は、お気軽にお問い合わせください！弊社のチームはどんな質問やご不明点に対しても対応いたします。',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Stellaのインストールに関するお問い合わせや、機能についてのご質問がある場合は、お手伝いさせていただきます。',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: '弊社コミュニティの皆様も、質問にお答えする準備ができています。Discordサーバーに参加するか、GitHubで新しいIssueを作成してください。',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'ポーランド語または英語で新しい会話を開始するには、右下のチャットアイコンをクリックしてください。あなたからのご連絡をお待ちしています！',
	StellaModIsNotAffiliatedWithHoyoverse: 'Stella Modは、Hoyoverse（MiHoYo）とは関係ありませんので、ご注意ください。',
	JoinToDiscordServer: 'Discordサーバーに参加する',
	CommentMyYTVideo: 'YouTubeの私のビデオにコメントしてください',

	tooltips: {
		JoinOurOfficialDiscordServer: '公式Discordサーバーに参加してください。',
		LeaveACommendBelowMyVideo: '私の動画の下にコメントを残してください。',
		ReturnTo: '戻る：原神ステラMod - ここから冒険が始まります。',
	},
};

// GET /genshin-impact-reshade/videos
module.exports.videos = {
	WatchVideosOnYT: '動画をYouTubeで見る',
	IfYouWantToRecordNewVideo: 'MODによる動画をYouTubeにアップロードしたい場合はお知らせください。ここに動画のリンクを掲載することができます。',
	DeprecatedMovies: '非推奨の映画',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'これらの映画は、以前のStella Modのバージョンからのものであり、すでに時代遅れと考えられています。',
	FirstModRelease: '初期リリース',
	Gameplay: 'ゲームプレイ',
};

// GET /genshin-impact-reshade/docs
module.exports.docs = {
	TableOfContents: '目次',
	1: {
		Introduction: '{0}. {1} Stella Modへの紹介',
		ReadMe: '{0}. {1} README.md',
		Support: '{0}. {1} サポート',
		FAQ: '{0}. {1} よくある質問',
		WhatIs: '{0}. {1} 何ですか...',
		HowToAvoidABan: '{0}. {1} バンを避ける方法',
		ToS: '{0}. {1} 利用規約',
		PrivacyPolicy: '{0}. {1} プライバシーポリシー',
		SoftwareLicense: '{0}. {1} ソフトウェアライセンス',
		Installation: '{0}. {1} インストール',
	},

	Changelogs: '変更履歴',
	2: {
		Versions: '{0}. {1} バージョン {2}.x.x',
	},

	DocumentCreationDate: 'ドキュメント作成日: {0}',
	LastUpdate: '最終更新日: {0}',
	DocumentSize: 'ドキュメントサイズ: {0}',

	GoToHomePage: 'ホームページに移動',
	GoBack: '戻る',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'GitHubでリポジトリが利用可能',
	IfYouWantToBecomeContributor: 'もしあなたがコントリビューターになっていただけるのであれば、新しいPull Requestを作成してください。',
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