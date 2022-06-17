export default {
  login: {
    data: {
      MAU: 'MAU',
      Users: 'ユーザー',
      Canisters: 'キャニスター',
      Fee: 'フィー',
    },
    description: {
      p1: 'Dstar Note は100%インターネット・コンピューター上に置かれています。',
      p2: 'Dstar Note は、高いセキュリティ、停止しない、低コスト、より安全なデータ転送など、ブロックチェーンが持つすべてのパワーを備えています。',
    },
    tips: 'Chromeブラウザでログインしてください',
    loginbtntxt: 'Internet Identity でログインする',
    sign: 'Internet Identity に登録する',
    slogan: {
      s1: '安全',
      s2: '効率的',
      s3: '無限の可能性',
    },
  },
  welcome: {
    title: 'Dstar Note へようこそ',
    ptips: 'あなたのデバイス名（例：iPhone、イケメンのMac)',
    placehoder: 'デバイス名',
    linktxt: 'キー同期キャニスター',
    tips: 'Dstar Note を初めてご利用になる方へ。 複数のデバイスで使用できるようにするには、デバイスを {action} に登録する必要があります。',
    tipstxt: 'デバイス名が既に使用されています。他の名前を使用してください。',
  },
  backup: {
    title: 'バックアップ',
    tips: 'このブラウザでのデバイス登録は完了しました。ブラウザのキャッシュクリアにより共有鍵が消失することを防ぐため、共有鍵のバックアップをとってください。共有鍵は、異なるデバイス間でデータを暗号化／復号化することができます。紛失した場合、ご自身のデータにアクセスできなくなります。',
    backupBySeed: 'シードフレーズでバックアップ',
    backupByYubikey: 'YubiKeyでバックアップ',
    backupByPass: 'パスワードでバックアップ',
    newTitle: 'バックアップ方法の選択',
    setPwd: {
      title: 'パスワード',
      tips: 'パスワードは、SHA3 512暗号化アルゴリズムでビットの秘密鍵を生成し、その鍵でニーモニックフレーズを暗号化・復号化します。秘密鍵は、キャニスターに格納されます。',
      placeholder1: 'パスワードを入力，大文字と小文字、数字を含める必要があります',
      pwdlevel: 'パスワードの強度が足りない',
      placeholder2: 'パスワードの確認',
      pwdstrong: {
        title: 'パスワードの強度',
        level: {
          one: '低',
          two: '中',
          three: '高',
        },
      },
    },
    initAccount: {
      title: 'アカウントの初期化',
      tips: 'ノートブックを作成していないことを確認してください。デバイスをクリアすると、このアカウントは初期化されます。',
    },
  },
  backupagain: {
    title: 'バックアップの確認',
    txt: 'ニーモニックフレーズをバックアップしているか、ノートブックに保存していないか、再度ご確認ください。ブラウザのキャッシュをクリアしてニーモニックフレーズを失うと、コンテンツを解読することができなくなり、それらは永遠にブロックチェーン上で眠り続けることになります。 \n未来の計画では、ニーモニックフレーズを分散的に保存することを検討しています。しかし、今はまだご自身で保存する必要があります。データセキュリティのため、バックアップをとっていない方は、ユーザーセンターでバックアップを完了させてください。',
    note: 'Note: The mnemonic phrase is not proprietary. If the leak is found during the storage process, the note will not be leaked, because the hacker does not have your II authorization and cannot complete any cracking.',
    btn1: '今すぐバックアップ',
    btn2: 'バックアップ済み',
    txt2: 'メモの安全を確保するために、バックアップパスワードを設定してください。ニーモニックフレーズをバックアップしたことが確実な場合は、このリマインダーを無視してかまいません。',
  },
  yubikey: {
    title: 'YubiKeyでバックアップ',
    linktxt: 'https://fortifyapp.com/#download',
    tips: 'YubiKeyはブラウザの暗号化・復号化キーを直接利用できないため、 frotify({action}) をインストールして、YubiKeyとの共有鍵をバックアップしておく必要があります。frotifyが正常に動作することを確認してから次のステップに進んでください。',
    btnName: 'はい、インストールしました',
    btnClickTxt: 'YubiKeyにタッチする',
    btnWaitTxt: 'YubiKeyを挿入する',
  },
  seedphrase: {
    title: 'シードフレーズ',
    condition: {
      one: 'コピーやスクリーンショット',
      one2: 'をとらないこと',
      two: 'Dstar NoteのシードフレーズをDstar Note内に保管しないこと',
    },
    btnName: '保存しました',
  },
  vseedphrase: {
    title: 'シードフレーズの検証',
    tips: 'ニーモニックを正しい順序でご入力ください',
    btnName: '確定する',
    error: 'シードフレーズが間違っています。確認してください。',
  },
  congratulations: {
    title: '成功しました🎉',
    btnName: '了解しました',
  },
  requestotherdevice: {
    option1: 'キー同期',
    option2: 'シードフレーズ',
    tips1: '新しいデバイスであることを確認しました。デバイス名を登録し、他のデバイスにキー同期リクエストを送信する。',
    tips2: 'あなたのデバイス名（例：iPhone、イケメンのMac)',
    placehoder: 'デバイス名',
    tips3: '他の登録済みデバイスにログインして、認証をクリックしてください。',
    tips4:
      '新しいデバイスであることを確認しました。このデバイスでDstar Noteを使用する必要がある場合は、キー同期キャニスターに新規デバイスとして登録するか、単体のデバイスおよびバックアップとして存在できるシードフレーズをインポートしてください。',
    spplacehoder: 'シードフレーズをインポートする',
    btnName: {
      authorize: '承認する',
      authorized: '承認しました!',
      response: '応答待ち',
      request: 'キー同期をリクエストする',
      success: '同期に成功しました',
      error: 'エラー',
    },
    error: 'シードフレーズが間違っています。確認してください。',
    option3: 'パスワード',
    pwdtips:
      '新しいデバイスであることが検出されました。このデバイスでDstar Noteを使用する必要がある場合は、設定したパスワードでニーモニックを復元し、新しいデバイスとして登録してください。パスワードを設定していない場合は、他の方法を選んで復元してください。',
    pwdplaceholder: 'パスワードを入力してください',
    pwdError: 'パスワードが間違っています。確認してください。',
  },
  reject: {
    tips: 'リクエストは拒否されました。',
    btnName: '再入力する',
  },
  keyrequest: {
    title: 'キー同期リクエスト',
    tips: '共有鍵の同期を承認するよう要求されました。',
    btnName: {
      authorize: '承認する',
      authorized: '承認しました!',
      reject: '拒否する',
      rejected: '拒否しました',
    },
  },
  public: {
    logout: 'ログアウト',
    title: {
      notesTitle: 'Myノートブック',
      walletTitle: 'Myウォレット',
    },
    address: 'アドレス',
    create: '新規ノートブックの作成',
    notice: '未読の通知',
    usercenter: 'ユーザーセンター',
    pay: '支払い',
    pid: 'プリンシパルID',
    inputnotename: 'ノート名を入力してください!',
  },
  balance: {
    title: 'このアドレスにICPを送信する',
    btitle: '残高',
    btnName: {
      copy: 'アドレスをコピーする',
      copys: 'コピー',
      copied: 'コピーしました!',
    },
  },
  note: {
    btnName: {
      newNote: '新規ノート',
      newPwd: '新規パスワード',
      addcycles: '燃料を追加',
      changecontroller: '管理者の変更',
      transfer: '内部転送',
      addcontroller: '管理者の追加',
      remove: '削除',
      save: '保存',
      saved: '保存完了',
      autosave: '自動保存',
    },
    sort: {
      timedesc: '時間降順で並べ替え',
      timeasc: '時間昇順で並び替え',
      collection: 'コレクションで並べ替え',
    },
    empty: 'ノートブックはまだありません',
    noteTopbar: {
      canisterID: 'キャニスターID',
      months: 'ヶ月',
      rantips: {
        h: '燃料が切れるのはいつ？',
        p: '計算式は以下の通りです:',
        fe: '例えば、現在のCHF/USDが1.42、ストレージサイズが10M、残り燃料が10Tとすると、燃料の持続時間はこのようになります:',
        n: '注：計算式は静止画保存の場合のみ適用されます。',
        inmonths: '残り期間',
        cycles: '燃料',
        storage: 'ストレージサイズ',
      },
    },
    saveoption: {
      s: '秒',
      on: 'オン',
      off: 'オフ',
    },
    notePlaceholder: 'タイトルを入力してください...',
    noteAreaPlaceholder: 'Dstar Noteへようこそ!ここにコンテンツを書くことができます!',
    tag: {
      tagName: 'タグ名',
      tagError: 'タグは3つまで',
      tagError2: 'タグは既に存在しています',
    },
    nocontroller: '管理者不在',
    inputnotetitle: 'タイトルを入力してください!',
    inputnotecontent: 'コンテンツを入力してください!',
    areacontent: '読み込み中です...',
  },
  aboutas: {
    title: '自動保存について',
    tips: '自動保存機能は、特に大きな写真や多くの内容を含むノートの場合、より多くの燃料を消費します。燃料の消費を抑えるために、この機能をオフにすることをお勧めします。計算と保存のコストに関する詳細は、以下を参照してください。',
  },
  createnote: {
    title: '新規ノートブックの作成',
    tips: 'ノートブックは、インターネットコンピュータ上で作成されるキャニスターで、ノートブックのデータはすべてブロックチェーンに保存されます。ノートブックを作成するには、作成費用と0.1ICPの手数料を支払う必要があります。',
    placehoder: 'ノートブック名',
  },
  progress: {
    title: {
      t1: 'ノートブック作成中',
      t2: '2-3分お待ちください',
    },
    state: {
      one: '支払い中',
      two: '作成中',
      three: '燃料を追加',
    },
  },
  checksave: {
    title: '本当に離れますか？',
    tips: 'ノートがまだ保存されていません',
    btnName: {
      save: '保存する',
      saving: '保存中…',
      saved: '保存完了',
      failed: '保存失敗',
      throw: '破棄する',
    },
    leaveTips: 'このページから離れてよろしいですか？',
  },
  addcycles: {
    title: '燃料を追加する',
    cycles: '燃料',
    charge: 'サービス料',
  },
  changecontrol: {
    title: 'ノートブックの管理者を変更する',
    tips: 'ノートブックの権限を転送します。このノートブックを表すキャニスターの権限は、もはやDstarによって所有されていません。私たちはあなたのコードを維持することができなくなります。ただし、通常どおりノートブックの読み取りと書き込みを行うことができます。これはすべて、デバイスと直接対話するコンテナです。',
    placehoder: 'プリンシパルIDの管理者',
    condition: '私は、権限の転送から生じるすべてのリスクを理解し、それについて責任を負います。',
    btn: 'インターネットを利用した身元の変更',
  },
  transfer: {
    title: '内部転送',
    tips: 'キャニスターが空であることを確認してください。中身の入ったキャニスターは、現在転送できません。',
    error: 'エラー。キャニスターが空ではありません',
    btn: 'Internet Identity を使って転送',
  },
  remove: {
    title: 'ノートブックを削除する',
    btn: '削除する',
    condition: 'ノートブックを削除する前に、管理者を削除してください',
  },
  logout: {
    title: 'ログアウト',
    tips: 'Dstar Noteを終了してもよろしいですか?',
  },
  deletenote: {
    title: 'ノートを削除する',
    condition: {
      one: 'ブロックチェーン上から削除されます',
      two: '回復不可能になります',
    },
  },
  sendnote: {
    title: 'ノートを送信する',
    tips: '以下のノートを送信します',
    items: {
      item1: '送信先',
      item2: '公開鍵',
    },
    placehoder: '受信する公開鍵を挿入する',
    tips2: '公開鍵を確認してください。誤って送信されると、他の人にこれらのコンテンツが表示されます。すべての送信は暗号化されます。受信者だけが、対応する秘密鍵でコンテンツを見ることができます。',
  },
  pwd: {
    title: 'パスワード',
    items: {
      item1: 'Webサイト',
      item1_sub: '(title)',
      placehoder1: 'Webサイトまたはタイトル',
      item2: 'アカウント',
      placehoder2: 'あなたのアカウント',
      item3: 'パスワード',
      item3_sub: '(PrivateKey)',
      placehoder3: 'あなたのパスワード',
    },
    btn: 'Internet Identityを使って表示する',
    deltitle: 'パスワードの削除',
    delbtn: 'Internet Identityを使って削除する',
    delcondition: {
      one: 'ブロックチェーン上から削除されます',
      two: '回復不可能になります',
    },
  },
  addcontrollers: {
    title: '管理者を追加する',
    btnName: 'モジュールハッシュが表示されることを検証する',
    placehoder: 'ノートブックのキャニスターID',
    h1: 'キャニスター管理者を以下に設定してください。',
    tips: 'このノートブックのキャニスターであることを確認するために、あなたのキャニスターモジュールのハッシュ値を検証する必要があります。キャニスターの管理者は、変更可能であることが確認できるまで変更しないでください。',
    h2: 'このアドレスにICPを送信する',
  },
  wallet: {
    title: 'トランザクション',
    items: {
      item1: '日付',
      item2: '種類',
      item3: '送信元',
      item4: '送信先',
      item5: '数量',
    },
    stitle: {
      st1: '残高',
      st2: 'ウォレットアドレス',
    },
    btnName: {
      copy: 'コピー',
      copied: 'コピーしました',
      deposit: 'デポジット',
      withdraw: '引き出す',
      all: 'すべて',
    },
    dtips: '受け取ったICPはすべて、今後使用するためにあなたのウォレット残高に預けられ、いつでも引き出すことができます。',
    wtips: 'プリンシパルIDではなく、アカウントアドレスを入力してください。',
    placehoder1: '受信アドレス',
    placehoder2: '最小数量: 0.01',
  },
  user: {
    registerTime: '登録時間',
    publickey: 'デバイス公開鍵',
    title: {
      t1: '今すぐバックアップ',
      t2: 'My デバイス',
    },
    btnName: {
      seed: 'シードフレーズ',
      yubikey: 'YubiKey',
      setpwd: 'パスワードの設定',
      changepwd: 'パスワードの変更',
    },
    changevtitle: 'アバターを変更する',
    del: {
      title: 'デバイスを削除する',
      tips: '次回のオンライン時には、キーは削除されます。',
    },
  },
  BtnName: {
    Register: '登録する',
    clickTxt: 'お待ちください',
    successTxt: '成功しました!',
    apply: '申請する',
    keysync: '申請とリクエスト',
    confirm: '確定する',
    cancel: 'キャンセル',
    nobalance: '残高不足',
    logout: 'ログアウト',
    delete: '削除する',
    send: '送信する',
    add: '追加する',
    update: 'アップデート',
  },
  alertTips: {
    tips1: 'デバイスエイリアス名が存在します。他の名前を使用してください。',
  },
  nft: {
    title: '送信',
    name: '星',
    sub_t: 'に送る',
    claimbtn: '請求',
    claimtxt: '主張する',
    claimtitle: 'NFTクレーム',
    claiminfo: '幸運を！ NFTの申請を開始してください！',
    claimsuccess: 'おめでとう！ 成功を主張する！',
    notitle: 'エアドロップ',
    notips: '空中投下されていません！',
    nobtn: 'そうですか',
  },
};
