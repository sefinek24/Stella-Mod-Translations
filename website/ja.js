exports.data = {
	Version: '2.7.1',
	LastUpdate: '25.01.2023',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://github.com/sefinek24)',
		'daydreamer-json (https://github.com/daydreamer-json)',
		'ChatGPT (https://chat.openai.com)',
	],
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

	tooltips: {
		OfficialDiscordServer: '公式Discordサーバー',
		GitHubRepositories: 'GitHubリポジトリ',
	},
};

// Errors
exports.errors = {
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
exports.home = {
	Header: 'Genshin Impact Stella Mod made by Sefinek',
	Text1: 'Safe features such as ReShade enhancements, carefully crafted custom graphics, and impressive FPS unlocking provide gamers with the best in-game experience!',
	Text2: '3DMigoto enhances the mod for a more immersive experience. Additionally, our own launcher streamlines the entire process, helping players get into the action quickly.',
	FinalText: 'Don\'t hesitate! Immerse yourself in the upgraded world of Teyvat today and craft unforgettable experiences. Enjoy!',

	Download: 'ダウンロード',
	DownloadTooltip: 'Windows 10および11用のx64ビットインストーラーをダウンロードするにはここをクリックしてください。',

	StelaModPlusTooltip: 'Stella Mod Plusの有料バージョンにアクセスして、多くの特典と高度なゲーム体験をお楽しみください！',

	Documentation: 'ドキュメンテーション',
	DocumentationTooltip: 'システム要件、推奨ゲーム設定などを確認してください！',

	Gallery: 'ギャラリー',
	GalleryTooltip: 'ReShadeが注入されたゲームのスクリーンショットをご覧ください。',

	Videos: 'ビデオ',
	VideosTooltip: 'モッドと起動プログラムに関する私たちのビデオをご覧ください。',

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

	modal: {
		ThankYouForDownloading: 'ダウンロードいただき、ありがとうございます',
		BecomeAStellaModSubscriber: 'Become a Stella Mod Plus subscriber to gain access to additional benefits such as: the ability to use 3DMigoto, FPS Unlocker, and ReShade simultaneously & a large collection of error-free mods & enhanced security (blocking telemetry and analytics) & a pack of the latest shaders & an add-on to prevent filter overlays on the user interface (UI) & Ray Tracing presets, and much more!',
		JoinOurDiscordServerToReceiveNotifications: '最新のアップデート、機能、その他の発表に関する通知を受け取るために、私たちのDiscordサーバーに参加してください。ご質問や問題が発生した場合は、作成者に気軽に連絡してください。',
		IfYouReEnjoyingStellaModConsiderLeavingAReview: 'ソフトウェアをテストした後、{a}trustpilot.com{/a}にレビューを投稿してください！',
		WishingYouAWonderfulDayOrNight: '素晴らしい日または夜をお過ごしいただけることをお祈りしています！',
		TheTotalNumberOfDownloadsNowIs: '現在の合計ダウンロード数は',
		NoProblem: '問題ありません',
	},

	tooltips: {
		PageViews: 'Page views. Statistics have been collected since January 19, 2024.',
	},
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
		GoBackToMainGalleryPage: 'Go back to main gallery page',
	},
};

// GET /genshin-impact-reshade/feedback
exports.feedback = {
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
exports.support = {
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
exports.videos = {
	WatchVideosOnYT: '動画をYouTubeで見る',
	IfYouWantToRecordNewVideo: 'MODによる動画をYouTubeにアップロードしたい場合はお知らせください。ここに動画のリンクを掲載することができます。',
	DeprecatedMovies: '非推奨の映画',
	TheMoviesAreFromPreviousVersionsOfStellaMod: 'これらの映画は、以前のStella Modのバージョンからのものであり、すでに時代遅れと考えられています。',
	FirstModRelease: '初期リリース',
	Gameplay: 'ゲームプレイ',
};

// GET /genshin-impact-reshade/docs
exports.docs = {
	TableOfContents: 'Table of Contents',
	1: {
		Introduction: '{0}. {1} Introduction',
		AboutStellaMod: '{0}. {1} About Stella Mod',
		WhatIs: '{0}. {1} What is...',
		FAQ: '{0}. {1} FAQ',
		Support: '{0}. {1} Support',
		TermsOfUse: '{0}. {1} Terms of Use',
		PrivacyPolicy: '{0}. {1} Privacy policy',
		HowToInstall: '{0}. {1} How to install?',
		HowToAvoidABan: '{0}. {1} How to avoid a ban?',

	},

	Changelogs: 'Changelogs',
	2: {
		Versions: '{0}. {1} Versions {2}.x.x',
	},

	LicensesAndCredits: 'Licenses & Credits',
	3: {
		SoftwareLicense: '{0}. {1} Software license',
		Credits: '{0}. {1} Credits',
		Contributors: '{0}. {1} Contributors',
	},

	DocumentCreationDate: 'Document creation date: {0}',
	LastUpdate: 'Last update: {0}',
	DocumentSize: 'File size: {0}',
	bytes: 'bytes',
};

// GET /genshin-impact-reshade/repositories
exports.github = {
	AllReposOnGithub: 'All repositories on GitHub',
	IfYouWantToBecomeContributor: 'If you want to become contributor, just create a new {a}Pull Request{/a}. Thank you very much and happy coding!',

	Translations: 'Translations',
	Resources: 'Resources',

	Deprecated: 'Deprecated',

	InstallationWizard: 'Installation wizard',
	UnlockedReShade: 'Unlocked ReShade',
};

// GET /genshin-impact-reshade/subscription
exports.subscription = {
	ChooseYourSubscriptionTier: 'Choose your subscription tier',
	IfYouAreInterestedInTheBenefits: 'If you\'re interested in the benefits, please explore all the available tiers to see which one suits your preferences. Hopefully, you\'ll find one that piques your interest!',
	IfYouHaveAnyQuestions: 'Do you have any questions? Don\'t hesitate to join our Discord server or contact us via email. You can find the contact information on the main page of this website.',

	Recommended: 'Recommended',
	tiers: {
		1: 'Little Kitten',
		2: 'Favorite Kitten',
		3: 'Trusted Cat',
		4: 'Computer Cat',
		5: 'Very Safe Kitten',
	},
	UnknownBenefit: 'Unknown benefit',

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
		PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',
		CompletePostArchive: 'Complete post archive (on the Discord server)',

		RayTracingForGenshin: 'Ray Tracing for Genshin',
		MigotoInStellaModMoreMods: '3DMigoto in Stella Mod (more mods & more fun)',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		PhotosOfMyCats: 'Cute photos of my cats',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',

		SecuritySystemToAvoidBan: 'Security system to avoid ban (hosts file)',
		VariousGenshinImpactAccountGiveaways: 'Various Genshin Impact account giveaways',
		NewWindowsTerminalAppearance: 'New Windows Terminal (WT) appearance',
		MorePhotosOfMyCats: 'Photos of my cats',

		PrivateDNSInEurope: 'Much better security system (private DNS in Europe)',
		OptimizationOfYourComputerForBestPerformance: 'Optimization of your PC for the best performance',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',

		ActivationPossibleOn: 'Activation possible on {u}{0} devices{/u}',
	},

	CompareAvailablePlans: 'Compare available plans',
	benefitsShort: {
		IntDevice: '{0} device',
		IntDevices: '{0} devices',

		PrivateClipsFromCSGO: 'Private clips from CS:GO and CS2',
		EarlyAccessToStellaMod: 'Early access to Stella Mod',
		CompletePostArchive: 'Complete post archive',

		RayTracingForGenshin: 'Ray Tracing for Genshin',
		BigCollectionOfShadersMods: 'Big collection of shaders & mods',
		MigotoInStellaModMoreMods: '3DMigoto in Stella Mod',
		GameUIWithoutVisibleShaders: 'Game UI without visible shaders',
		HideYourUIDInTheGame: 'Hide your UID in the game',
		PresetsFromPreviousVersions: 'Presets from previous versions',
		PhotosOfMyCats: 'Photos of my cats',
		AnimePicturesGeneratedByAI: 'Anime pictures generated by AI',

		SecuritySystemToAvoidBan: 'Security system to avoid ban',
		VariousGenshinImpactAccountGiveaways: 'Genshin Impact account giveaways',
		NewWindowsTerminalAppearance: 'New Windows Terminal appearance',
		MorePhotosOfMyCats: 'More photos of my cats',

		PrivateDNSInEurope: 'Better security system (DNS in Europe)',
		OptimizationOfYourComputerForBestPerformance: 'Optimization of your computer',
		AssistanceRelatedToPCsOrLaptops: 'Assistance related to PCs or laptops',
		ActivationPossibleOn: 'Activation possible on',
	},

	SubscribeNow: 'Subscribe now',
	ChangeYourTier: 'Change your tier',

	Crypto: 'Crypto',
	IfYouWantToMakeAPaymentUsingCrypto: 'If you want to make a payment using cryptocurrency, please contact the developer.',
	IAcceptPaymentsOnlyOnBinance: 'I accept payments only on Binance.',
	CloseModal: 'Close modal',

	PaymentSystem: {
		Header: 'Payment system',
		1: 'We are delighted to announce that our secure payment system is powered by {0}. With Stripe, you can confidently make payments, knowing that your financial information is handled with the highest level of security.',
		2: 'Stripe is a well-trusted and globally recognized payment processing platform that guarantees smooth and secure transactions for our customers. Whether you\'re buying products, subscribing to services, or making donations, Stripe\'s robust infrastructure ensures a dependable and trouble-free payment experience.',
		3: 'Please be assured that your sensitive payment details are encrypted and safeguarded throughout the entire payment process. Your privacy and security are our top priorities.',
	},

	AcceptedPaymentMethods: 'Accepted payment methods',
	IfYouWishToMakeAPaymentUsingCryptoOrADirectBankTransfer: 'If you wish to make a payment using cryptocurrencies or a direct bank transfer, please contact the developer.',
	BankName: 'Bank Name:',
	AccountNumber: 'Account Number:',
	SWIFTOrBICCode: 'SWIFT/BIC Code:',
	IBAN: 'IBAN',
	AskTheAdministratorForIt: 'Ask the administrator for it',
	PleaseBeAwareThatTheBuyerIsResponsibleForCoveringAbyBankFees: 'Please be aware that the buyer is responsible for covering any bank fees associated with the transaction.',

	RulesForUsingOurBenefitsAndPatronage: {
		HeaderText1: 'Rules for using our benefits and patronage',
		SubText1: 'We would like to express our heartfelt gratitude to all our subscribers for their support and trust. Before proceeding with the Stella Mod Plus subscription, please take a moment to familiarize yourself with a few important guidelines.',

		HeaderText2: 'Benefits are intended exclusively for subscribers:',
		SubText2: 'Each benefit redemption token is assigned to a subscriber and should be kept confidential. Please do not share your benefits with others or distribute them online. Utilize them solely for your personal use and in accordance with our guidelines.',

		HeaderText3: 'Subscribing does not equate to purchasing the 3DMigoto software:',
		SubText3: 'By becoming a subscriber to Stella Mod Plus, you are not acquiring 3DMigoto as a digital product for purchase. Instead, as our subscriber, you solely gain access to use 3DMigoto within the Stella Mod Launcher application.',

		Footer: 'We appreciate your presence in our community and your support for our work. If you have any questions or concerns, please {a}contact us{/a}. Your participation and understanding of these rules are incredibly important to our project.',
	},

	request: {
		WeAreProcessingYourRequest: 'We are processing your request...',
		SubscribingInProgress: 'We need a little bit of time to get everything ready. Please remain on this page and give us a moment!\nShortly, we will redirect you to a secure payment page where you can safely complete your transaction. ^w^',
		ChangingTheTierInProgress: 'We need some time to change your tier! Give us a moment, and we promise everything will go smoothly. ^w^',
	},
};