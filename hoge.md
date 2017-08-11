// md + indent + mixin + riottag + :colontag. (jade insented)
// can load other html
// :tag(attr): (immediate colon means no text and start indent) (so li: is -)
:image(src,size =1): img(src="#{src}" alt="null" style="height:#{size}em;width:#{size}em;")
:fa: :i(class="fa fa-#{attributes.class}")
// ↑ : custom tag :: <fa> </fa> => <i class="fa fa-class"></i>
// by riot tag

:script.
  let a = 10;
  let b = 20;




:html
  :head
    :title("むらただよ")
    :link("/me.jpg",rel="icon")
    :link("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")
    :link("/umi/css/bootstrap.min.css")
    :link("/style.less")
    :script("https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js")
    :script("/umi/js/bootstrap.min.js")
  :content
    # :image("/me.jpg"): muratas profile
     役に立たないものを作りたいので、頑張って役立ててね :br:
      [http://amzn.asia/4n4xnzC](:fa.amazon: 誕生日プレゼントは前後半年受け付けてます！！)
    ## Products
    - [https://github.com/Muratam](:fa.github: GitHub)
      - [https://github.com/Muratam/UltraPiet](UltraPiet)
        ゲームも作れるPietの独自拡張
      - [https://github.com/Muratam/CCDxLib72](CCDXLib72)
        Cocos2dx用DXLibのラッパー
    - [https://unityroom.com/users/qaeo2r0p8369k57ynumc](:fa.gamepad: Unity Games)
      ブラウザ向けのゲームを色々作ったりしているよ
    - [https://play.google.com/store/apps/developer?id=Murata72&hl=ja](:fa.android: Google Play)
      Android向けのゲームも作るよ
    - [http://muratam.0am.jp/fm/](:fa.play: fm.js)
      fm音源をみんなでいじって共有するWebサービスだよ
    - [https://twitter.com/gochiusa_sokuho](:fa.twitter: ごちうさ速報)
      ニコ動のごちうさの1羽のコメント弾幕を毎日お知らせするよ
    - [https://pixiv.me/paradigm_9](:fa.image: Pixiv)
      Piet以外も描いていきたい…
    - [http://sagisawa.0am.jp/"](:fa.image: 鷺沢システム)
      鷺沢さんを称えるサーバーだよ @ ConoHa
    - [https://twitter.com/kirara_kanshi](:fa.twitter: クソポンチ絵forまんがタイムきらら監視Bot)
      きらら共生共創社会プロジェクトの更新を監視しているよ
    - [./lt_timer/](:fa.hourglass: LT 5:00 Timer)
      銅鑼パーソンのための5分をカウントするナウいタイマーだよ
    - [https://github.com/Muratam/yamlslackbot](:fa.slack: python yaml slack bot)
      yamlで設定を記述できるpython3向けのslackbot用ライブラリだよ !br
      (そのうちPyPIに登録する予定だよ)
    ## SNS
    - [https://twitter.com/paradigm_9](:fa.twitter: twitter)
    - [http://chy72.hatenablog.com/](:fa.question-circle:  はてなブログ)
    - [https://www.slideshare.net/CHY72](:fa.slideshare:  SlideShar)e
    - [http://qiita.com/sessions](:fa.quora:  Qiita)
    - [https://www.youtube.com/channel/UCwwhYKrXXHpEXoZW4Zdtsdg](:fa.youtube-play:  YouTube)
    ## Groups
    - [https://www.kmc.gr.jp/members/](:fa.users:  KMC)
    - [http://matsutei.web.fc2.com/product.html](:fa.users: 松茸定食 )
    - [https://play.google.com/store/apps/developer?id=%E8%8C%A8%E6%9C%A8%E9%AB%98%E6%A0%A1%E6%95%B0%E5%AD%A6%E7%A0%94%E7%A9%B6%E9%83%A8%EF%BC%81](:fa.users:  茨高数研(OB))
    ---
    :iframe(src="https://githubbadge.appspot.com/muratam?s=1" style="border: 0;height: 142px;width: 200px;overflow: hidden;" frameBorder="0")
  :body
    :content.containter.md-container