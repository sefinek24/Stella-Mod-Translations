module.exports.data = {
	Version: '2.4.0',
	LastUpdate: '16.10.2023',
	Contributors: [
		'Sefinek <contact@sefinek.net> (https://github.com/sefinek24)',
		'daydreamer-json (https://github.com/daydreamer-json)',
		'ChatGPT (https://chat.openai.com)',
	],
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
	Header: 'Sefinekによって作成された原神 Stella Mod',
	Text1: 'ReShadeの強化、慎重に作成されたカスタムグラフィックス、印象的なFPSアンロックなど、安全でユニークな機能が、ゲーマーに最高のゲーム内体験を提供します！',
	Text2: '3DMigotoは、モッドをさらに高いレベルに引き上げ、没入型の体験を提供します。さらに、独自のランチャーがプレイヤーが迅速にアクションに参加できるよう全プロセスを効率化します。',
	FinalText: '待たずに、強化されたテワットの世界に飛び込み、忘れられない瞬間を作成しましょう！楽しんでください！',

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
	SupportMe: '私をサポート',

	DownloadingData: 'データのダウンロード中...',
	Version: 'バージョン',
	TheVersionWithoutCaps: 'バージョン',
	DownloadCount: 'ダウンロード数',
	LastDownload: '最終ダウンロード',

	modal: {
		ThankYouForDownloading: 'ダウンロードいただき、ありがとうございます',
		BecomeMyPatronToGainMoreBenefits: '3DMigotoとFPS Unlocker＆ReShadeを使用する機能など、より多くの特典を得るために、私のパトロンになってください。エラーのない多くのモッド、最新の300シェーダーのコレクション、ユーザーインターフェース（UI）とフィルターが重ならないようにするアドオン、Ray Tracingプリセットなどが含まれています。',
		JoinOurDiscordServerToReceiveNotifications: '最新のアップデート、機能、その他の発表に関する通知を受け取るために、私たちのDiscordサーバーに参加してください。ご質問や問題が発生した場合は、作成者に気軽に連絡してください。',
		IfYouReEnjoyingStellaModConsiderLeavingAReview: 'ソフトウェアをテストした後、{a}trustpilot.com{/a}にレビューを投稿してください！',
		WishingYouAWonderfulDayOrNight: '素晴らしい日または夜をお過ごしいただけることをお祈りしています！',
		TheTotalNumberOfDownloadsNowIs: '現在の合計ダウンロード数は',
		NoProblem: '問題ありません',
	},

	tooltips: {
		PageViews: 'ページビュー',
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

	tooltips: {
		GoBackToMainGalleryPage: 'Go back to main gallery page',
	},
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
	AreUARobot: 'ロボットですか？',
	WaitingForUser: 'ユーザーの対話を待っています...',
	VerifyingCaptcha: 'キャプチャの確認中...',
	VerifyingSession: 'セッションの確認中...',
	Successfully: '成功',
	ValidateRequest: 'リクエストの検証',
	NextPage: '次のページ',
	WrongStatusCode: 'エラー。sefinek.net から誤ったステータスコード ({0}) を受信しました。',
	Failed: '失敗',
	Expired: 'セッションが期限切れになりました。このページを更新してください。',
	Canceled: 'セッションはユーザーによってキャンセルされました。もう一度試してみてください。',
	FatalError: '致命的なエラー。もう一度試してみるか、このページを更新してください。',

	// index.ejs
	Header: '特典を受け取る {0}',

	1: '私を支援していただき、本当にありがとうございます！あなたの寛大さと励ましは私にとって非常に貴重であり、私はあなたが私を信頼してくれることを心から感謝しています。',
	2: '私の感謝の印として、特典にアクセスできます。',
	3: '私の仕事に関する質問、懸念、またはフィードバックがある場合は、いつでもお気軽にお問い合わせください。',

	4: '特典は、1つの生成されたトークン（リンク）から1回しか取得できないことを覚えておいてください。',
	5: 'ただし、Discordサーバーで適切なコマンドを使用し、特典をもう一度請求する理由を提供する場合、新しいキーを生成できます。',
	6: '特典へのアクセスを失うのはいつですか？ その答えはこちらです。Patreonのサブスクリプションが期限切れになる必要があります。',

	7: 'アプリケーションをダウンロードした後、ライセンス条件に精通するために時間をかけてください。',
	8: 'これにより、アプリケーションの使用方法、それに関連する権利と義務を理解するのに役立ちます。',

	9: '何らかの理由で特典をもう一度ダウンロードする必要がある場合、Discordサーバーで単にコマンド {code};receive{/code} を呼び出すことができます。',
	10: 'また、リンクは自動的にポーランド時間の00:00に期限切れになります。',

	ThankYouForYourSupport: '再度、ご支援いただきありがとうございます！',
	SefinekOwO: '~ Sefinek',

	ClickHereToDownload: 'ダウンロードするにはここをクリック',

	// received.ejs
	ThisMethodIsNotAllowed: 'このメソッドは許可されていません',
	YourBenefitsHaveAlreadyBeenReceived: '特典はすでに {0} に受け取られました。',
	Country: '国: {0}',
	ThankUForYourSupport: 'ご支援ありがとうございます！',

	// error.ejs
	SomethingWentWrong: '悲しい猫 >~~< 何かがうまくいかなかった...',
	InvalidUserId: '無効なユーザーIDが提供されました。',
	InvalidKeyProvided: '無効なキーが提供されました。',
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'このリンクは期限切れで、もはやアクティブではありません。',
	ErrorOccurredPleaseTryAgain: 'エラーが発生しました。もう一度試してください。',
};