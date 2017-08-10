# md + indent + mixin + riottag + !bungtag. (jade insented)
!html
  !mixin image(src,size)
    img(src="#{src}" alt="null" style="height:#{size}em;width:#{size}em;")
  !mixin fa
    !i(class="fa fa-#{attributes.class}")
  !head
    !title("むらただよ")
    !link("/me.jpg",rel="icon")
    !link("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")
    !link("/umi/css/bootstrap.min.css")
    !link("/style.less")
    !script("https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js")
    !script("/umi/js/bootstrap.min.js")
  !content
    # !image("/me.jpg",1) muratas profile
     役に立たないものを作りたいので、頑張って役立ててね !br
      a("http://amzn.asia/4n4xnzC")
        !fa(amazon) 誕生日プレゼントは前後半年受け付けてます！！

    ## Products
    - a("https://github.com/Muratam") !fa(github) GitHub
      - a("https://github.com/Muratam/UltraPiet") UltraPiet
         ゲームも作れるPietの独自拡張
      - a("https://github.com/Muratam/CCDxLib72") CCDXLib72
         Cocos2dx用DXLibのラッパー
    - a("https://unityroom.com/users/qaeo2r0p8369k57ynumc") !fa(gamepad) Unity Games
       ブラウザ向けのゲームを色々作ったりしているよ
    - a("https://play.google.com/store/apps/developer?id=Murata72&hl=ja") !fa.android Google Play
       Android向けのゲームも作るよ
    - a("http://muratam.0am.jp/fm/") !fa.play fm.js
       fm音源をみんなでいじって共有するWebサービスだよ
    - a("https://twitter.com/gochiusa_sokuho") !fa.twitter ごちうさ速報
       ニコ動のごちうさの1羽のコメント弾幕を毎日お知らせするよ
    - a("https://pixiv.me/paradigm_9") !fa.image Pixiv
       Piet以外も描いていきたい…
    - a("http://sagisawa.0am.jp/") !fa.image 鷺沢システム
       鷺沢さんを称えるサーバーだよ @ ConoHa
    - a("https://twitter.com/kirara_kanshi") !fa.twitter クソポンチ絵forまんがタイムきらら監視Bot
       きらら共生共創社会プロジェクトの更新を監視しているよ
    - a("./lt_timer/") +fa.hourglass LT 5:00 Timer
       銅鑼パーソンのための5分をカウントするナウいタイマーだよ
    - a("https://github.com/Muratam/yamlslackbot") !fa.slack python yaml slack bot
       yamlで設定を記述できるpython3向けのslackbot用ライブラリだよ !br
       (そのうちPyPIに登録する予定だよ)

    ## SNS
    - [https://twitter.com/paradigm_9](!fa.twitter  twitter)
    - a("http://chy72.hatenablog.com/") !fa.question-circle  はてなブログ
    - a("https://www.slideshare.net/CHY72") !fa.slideshare  SlideShare
    - a("http://qiita.com/sessions") !fa.quora  Qiita
    - a("https://www.youtube.com/channel/UCwwhYKrXXHpEXoZW4Zdtsdg") !fa.youtube-play  YouTube

    ## Groups
    - a("https://www.kmc.gr.jp/members/") !fa.users  KMC
    - a("http://matsutei.web.fc2.com/product.html") !fa.users  松茸定食
    - a("https://play.google.com/store/apps/developer?id=%E8%8C%A8%E6%9C%A8%E9%AB%98%E6%A0%A1%E6%95%B0%E5%AD%A6%E7%A0%94%E7%A9%B6%E9%83%A8%EF%BC%81") !fa.users  茨高数研(OB)
    ---
    iframe(src="https://githubbadge.appspot.com/muratam?s=1" style="border: 0;height: 142px;width: 200px;overflow: hidden;" frameBorder="0")
  body
    content.containter.md-container