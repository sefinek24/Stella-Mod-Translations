module.exports.data = {
	FileVersion: '2.1.2',
	LastUpdate: '03.09.2023',
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
	Header: 'SefinekによるGenshin Impact Stella Mod',
	Text1: 'ReShadeの強化、丁寧に作成されたカスタムグラフィックス、印象的なFPSのアンロックなど、ゲーマーに最高のゲーム内体験を提供する安全でユニークな機能！',
	Text2: '3DMigotoはModをさらに高いレベルに引き上げ、没入型の体験を提供します。さらに、独自のランチャーがプロセス全体を効率化し、プレイヤーが迅速にアクションに参加できるのをサポートします。',
	// Text3: '最新のニュースをチェックし、{a}Discordサーバー{/a}に参加して、志を同じくするプレイヤーたちと交流し、原神の楽しみを最大限に引き出しましょう。',
	FinalText: '待たずに！今すぐテーワットの強化された世界に飛び込み、忘れられない瞬間を創り出しましょう！楽しんでください！',

	Download: 'ダウンロード',
	DownloadTooltip: 'Windows 10および11用のx64ビットインストーラーをダウンロードするにはここをクリックしてください。',

	Gallery: 'ギャラリー',
	GalleryTooltip: 'ReShadeを注入したゲームのスクリーンショットを見る。',

	WatchVideos: '動画を見る',
	WatchVideosTooltip: 'Modと起動プログラムに関する私の動画を見る。',

	ReadMore: '詳細を読む',
	ReadMoreTooltip: 'システム要件、推奨ゲーム設定などを確認してください！',

	Feedback: 'フィードバック',
	FeedbackTooltip: 'ご意見を共有してください。',

	Support: 'サポート',
	SupportTooltip: 'ヘルプが必要な場合はこちらをクリックしてください。',

	MainPage: 'メインページ',
	MainPageTooltip: 'ホーム - Sefinek公式ウェブサイト',

	PleaseSupportMe: '私の仕事をサポートしてください',
	SupportMyWork: '私の仕事をサポート',
	SupportMe: '私をサポート',

	DownloadingData: 'データをダウンロード中...',
	Version: 'バージョン',
	TheVersionWithoutCaps: 'バージョン',
	DownloadCount: 'ダウンロード回数',
	LastDownload: '最後のダウンロード',

	modal: {
		ThankYouForDownloading: 'ダウンロードしていただきありがとうございます',
		BecomeMyPatronToGainMoreBenefits: '3DMigotoとFPS Unlocker＆ReShadeと共に使用できる機能や、エラーフリーのModの大規模なコレクション、最新の300のシェーダーのコレクション、フィルターがユーザーインターフェース（UI）と重ならないようにするアドオンなど、さまざまな特典を受けるために、私のパトロンになってください！',
		JoinOurDiscordServerToReceiveNotifications: '最新のアップデート、機能、その他の発表に関する通知を受けるために、私たちのDiscordサーバーに参加してください。質問や問題がある場合は、どうぞお気軽にクリエーターにお問い合わせください。',
		IfYouReEnjoyingStellaModConsiderLeavingAReview: 'ソフトウェアを試した後、{a}trustpilot.com{/a}でレビューを残してください！',
		WishingYouAWonderfulDayOrNight: '素晴らしい一日または夜をお過ごしください！',
		TheTotalNumberOfDownloadsNowIs: '現在のダウンロード総数は',
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

module.exports.forPatrons = {
	// captcha.ejs
	AreUARobot: 'ロボットですか？',
	WaitingForUser: 'ユーザーの操作を待っています...',
	VerifyingCaptcha: 'CAPTCHAを検証中...',
	VerifyingSession: 'セッションを検証中...',
	Successfully: '成功しました',
	ValidateRequest: 'リクエストの検証',
	NextPage: '次のページ',
	WrongStatusCode: 'エラー。sefinek.netから誤ったステータスコード ({0}) を受信しました。',
	Failed: '失敗しました',
	Expired: 'セッションが期限切れです。このページを更新してください。',
	Canceled: 'ユーザーによってセッションがキャンセルされました。再試行してください。',
	FatalError: '致命的なエラー。再試行するか、このページを更新してください。',

	// index.ejs
	Header: '{0} の特典を受け取る',

	1: 'サポートいただき、本当にありがとうございます！あなたの寛大さと励ましは私にとって非常に貴重で、私は本当にあなたの信頼を感謝しています。',
	2: '感謝の証として、特典へのアクセス権を獲得します。',
	3: '私の仕事に関する質問、懸念、またはフィードバックがある場合は、いつでもお気軽にお問い合わせください。',

	4: '特典は、単一の生成されたトークン（リンク）から一度だけ取得できることを覚えておいてください。',
	5: 'ただし、Discordサーバーで適切なコマンドを使用し、特典をもう一度請求したい理由を提供する場合、新しいキーを生成できます。',
	6: '特典へのアクセス権は、Patreonのサブスクリプションが期限切れになったときに失われることになります。',

	7: 'アプリケーションをダウンロードした後、ライセンス条項を理解するために少し時間をかけてください。',
	8: 'これにより、アプリケーションの使用方法とそれに関連する権利と責任を理解できます。',

	9: '何らかの理由で特典を再度ダウンロードする必要がある場合、Discordサーバーで {code};receive{/code} コマンドを単純に呼び出すだけで済みます。',
	10: 'また、リンクは自動的にポーランド時間の00:00に期限切れになります。',

	ThankYouForYourSupport: '再度、サポートいただきありがとうございます！',
	SefinekOwO: '~ Sefinek',

	clickHereToDownload: 'ダウンロードするにはここをクリック',

	// received.ejs
	ThisMethodIsNotAllowed: 'この方法は許可されていません',
	YourBenefitsHaveAlreadyBeenReceived: '特典はすでに {0}、{1} に受け取られました。',
	Country: '国: {0}',
	ThankUForYourSupport: 'サポートいただきありがとうございます！',

	// error.ejs
	SomethingWentWrong: '残念ながら何かがうまくいきませんでした... >~~<',
	InvalidUserId: '無効なユーザーIDが提供されました。',
	InvalidKeyProvided: '無効なキーが提供されました。',
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'このリンクは期限切れで、もはやアクティブではありません。',
	ErrorOccurredPleaseTryAgain: 'エラーが発生しました。もう一度お試しください。',
};