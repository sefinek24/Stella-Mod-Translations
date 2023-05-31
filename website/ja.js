module.exports.data = {
	FileVersion: '2.0.0',
	LastUpdate: '31.05.2023',
	Contributors: [{
		'daydreamer-json': {
			GitHub: 'https://github.com/daydreamer-json',
			Website: null,
		},
	}],
};

// Main
module.exports.default = {
	tooltips: {
		OfficialDiscordServer: '公式Discordサーバー',
		GitHubRepositories: 'GitHubリポジトリ',
	},

	And: 'と',
	From: ' - ',
	In: 'in',
	Back: '戻る',
	Next: '進む',
	DiscordServer: 'Discordサーバー',
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
		DeviceIsNotSupported: '❎ デバイスがサポートされていません',
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
	tooltips: {
		ClickHereToDownloadSetup: 'Windows 10および11の64ビットインストーラーをダウンロードするには、ここをクリックしてください。',
		ViewScreenshotsFromTheGameWithInjectedReShade: 'ReShadeを適用したゲームのスクリーンショットをご覧ください。',
		WatchMyVideosAboutTheModAndLauncher: '私のファッションと起動プログラムに関する動画をご覧ください。',
		CheckSysRequirementsRecommendedSettingsForTheGameAndMore: 'システム要件、推奨設定、およびその他の情報をチェックしてください！',
		LeaveYourFeedback: 'あなたの意見を共有してください。',
		ClickHereIfYouNeedHelp: '助けが必要な場合は、ここをクリックしてください。',
		InvitationToDiscordServer: '私たちのDiscordサーバーへの招待です。',
	},

	TheBestGIRSModPack: 'ReShade、カスタムグラフィックプリセット、FPSアンロッカー、独自のランチャーなどを備えた最高の原神MODパックです。',
	JoinOurDiscordServer: '最新のアップデートやニュースなどを入手するには、私たちの{a}Discordサーバー{/a}に参加してください。',

	Download: 'ダウンロード',
	Gallery: 'ギャラリー',
	Tutorial: 'チュートリアル',
	WatchVideos: '動画を見る',
	ReadMore: '詳細を見る',
	Feedback: 'フィードバック',
	Support: 'サポート',
	MainPage: 'メインページ',

	PleaseSupportMe: '私を支援してください',
	SupportMyWork: '私を支援してください',
	SupportMe: '私を支援してください',

	DownloadingData: 'データをダウンロードしています...',
	Version: 'バージョン',
	TheVersionWithoutCaps: 'バージョン',
	DownloadCount: 'ダウンロード数',
	LastDownload: '最後のダウンロード',

	modal: {
		Notification: '通知',
		ThankYouForDownloading: 'ダウンロードありがとうございます。最新のアップデートやニュースなどを入手するには、私たちの{a}Discordサーバー{/a}に参加してください。<br>良いテイワットライフを!',
		TheTotalNumberOfDownloadsNowIs: '現在の総ダウンロード回数は',
		NoProblem: '閉じる',
	},
};

// GET /genshin-impact-reshade/gallery
module.exports.gallery = {
	GalleryPage: 'ギャラリー - ページ',
	GalleryCompareReleases: 'ギャラリー - バージョン間の比較 -',
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
	tooltips: {
		ClickHereToGoToTheYTPage: 'YouTubeのページに移動するにはここをクリックしてください。',
		GiveAStarToMyReposOnGitHub: '私のGitHubのリポジトリにスターを付けてください。お気に入りのものです。',
	},

	LeaveYourFeedback: 'フィードバックを残す',
	IfYouLikeThisProjectSupportMe: 'もしこのプロジェクトを気に入っていただけましたら、私の{1}YouTubeチャンネル{/1}のチャンネル登録をするか、{2}GitHub{/2}でStarをつけるか、その他の方法で{3}私を支援{/3}していただけると幸いです。',
	IfYouHaveAnyFeedBackOrSuggestionsUseChat: 'また、ご意見やご要望がありましたら、遠慮なくチャットサポートで直接私にお問い合わせください。',

	btn: {
		BelowYTVideo: 'YouTube', // TODO
		OnTheDiscordServer: 'Discord', // TODO
	},
};

// GET /genshin-impact-reshade/support
module.exports.support = {
	tooltips: {
		JoinOurOfficialDiscordServer: 'Join our official Discord server.',
		LeaveACommendBelowMyVideo: 'Leave a comment below my video.',
		ReturnTo: 'Return to: Genshin Stella Mod - Here begins your adventure.',
	},

	SomeQuestions: '何か質問はありますか？お手伝いが必要ですか？',
	DoYouHaveAnyIssuesOrQuestionsAboutMod: 'Stella Modに関する問題や質問がある場合は、お気軽にお問い合わせください！弊社のチームはどんな質問やご不明点に対しても対応いたします。',
	WhetherYouNeedHelpWithInstallingStellaOrHaveQuestionsAboutItsFeatures: 'Stellaのインストールに関するお問い合わせや、機能についてのご質問がある場合は、お手伝いさせていただきます。',
	PleaseNoteThatOurCommunityIsAlsoReadyToAnswerYourQuestions: '弊社コミュニティの皆様も、質問にお答えする準備ができています。Discordサーバーに参加するか、GitHubで新しいIssueを作成してください。',
	SimplyClickOnTheChatIconInTheBottomRightCorner: 'ポーランド語または英語で新しい会話を開始するには、右下のチャットアイコンをクリックしてください。あなたからのご連絡をお待ちしています！',
	StellaModIsNotAffiliatedWithHoyoverse: 'Stella Modは、Hoyoverse（MiHoYo）とは関係ありませんので、ご注意ください。',
	JoinToDiscordServer: 'Discordサーバーに参加する',
	CommentMyYTVideo: 'YouTubeの私のビデオにコメントしてください',
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

// GET /genshin-impact-reshade/read-more
module.exports.readMore = {
	tooltips: {
		TheBiggestSourceOfKnowledge: 'The biggest source of knowledge and information is hidden right behind this button!',
	},

	ReadMoreInformation: '詳細を見る',
	MoreInfoIsAvailableOnGHWiki: 'Więcej informacji znajdziesz w repozytorium {1}sefinek24/Genshin-Impact-ReShade{/1} na stronie {2}GitHub Wiki{/2}.',
	HowToInstall: 'インストール方法は？',
	ViewChangelog: '更新履歴を見る',
	PrivacyPolicy: 'プライバシーポリシー',
	SeeContents: 'コンテンツを見る',
	GameCompatibility: 'ゲームへの対応状況',
	RecommendedGameSettings: '推奨ゲーム内設定',
	PCRequirements: '必要動作環境',
	SupportedOperatingSystems: 'サポートしているシステム',
};

// GET /genshin-impact-reshade/repositories
module.exports.github = {
	AllReposOnGithub: 'GitHubでリポジトリが利用可能',
	IfYouWantToBecomeContributor: 'もしあなたがコントリビューターになっていただけるのであれば、新しいPull Requestを作成してください。',
};

// For patrons
module.exports.forPatrons = {
	// captcha.ejs
	AreUARobot: 'Are you a robot?',
	Status: 'Status',
	Waiting: 'Oczekiwanie...',
	Success: 'Success',
	NextPage: 'Next page',
	WrongStatusCode: 'Error. Received wrong status code ({0}) from sefinek.net.',
	Failed: 'Failed',
	Expired: 'Session expired. Please refresh this page.',
	Canceled: 'Session was canceled by the user. Try again.',
	FatalError: 'Fatal error. Please try again or refresh this page.',

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

	ThankYouForYourSupport: 'Thank you again for your support!',
	SefinekOwO: '~ Sefinek',

	clickHereToDownload: 'Click here to download',

	// received.ejs
	ThisMethodIsNotAllowed: 'This method is not allowed',
	YourBenefitsHaveAlreadyBeenReceived: 'Your benefits have already been received at {0}, {1}.',
	Country: 'Country: {0}',
	ThankUForYourSupport: 'Thank you for your support!',

	// error.ejs
	SomethingWentWrong: 'Smutny kot >~~< Coś poszło nie tak...',
	InvalidKeyProvided: 'Podany klucz jest nieprawidłowy.',
	ThisLinkHasExpiredAndWillNoLongerBeActive: 'Ten link wygasł i nie będzie już aktywny.',
	ErrorOccurredPleaseTryAgain: 'Wystąpił błąd. Proszę spróbuj ponownie.',
};