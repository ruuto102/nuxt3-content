---
title: "【読書記録】ネットワークはなぜつながるのか第二版②\nHTTPリクエスト"
date: 2024-09-29
draft: false
tags: ["hello", "world"]
thumbnail: '/img/HowNetworksWork.jpg'
slug: "how-networks-work2"
---
昨日に引き続き、表題の名著をまとめていきます。

その前に昨日のおさらいをすると、下の図のようにブラウザとWEBサーバー間の大まかな動きがわかりました。

![HTTPの図](/img/http.png "")

では、今日はHTTPリクエストについて、もう少し深掘りしてみます。

## HTTPリクエスト・メッセージの書き方
リクエストメッセージにはフォーマットが決まっています。  
1行目に**リクエストライン**　この１行でだいたいのリクエスト内容がわかる。  
２行目以降に**メッセージヘッダー**　１行に一つのヘッダーフィールドを書く。付加的な細かな情報が入る。  
最後に**メッセージ・ボティ**　メッセージの本体。クライアントからサーバーに送信するデータをいれる。ただ、GETメソッドの時はメソッドとURIで十分なので、空になる。

<section class="bg-gray-100 p-3 mb-4 text-xs md:w-1/2">
リクエスト・メッセージのファーマット

＜メソッド＞　＜URI＞　＜HTTPバージョン＞  
＜ヘッダーフィールド名＞：＜フィールド値＞  
・・・  
・・・  

＜メッセージ・ボディ＞
</section>

## レスポンスメッセージの中身
レスポンスも書き方の基本は、リクエストと一緒だが、１行目が違います。
１行目に**ステータス・コード**と**レスポンス・フレーズ**があり、どちらも実行結果が書かれています。
ステータス・コードは、数字で書かれており、以下の表にまとめます。

|コード値|説明|
|:-----:|:-----|
|100番台|処理の経過状況などの通知|
|200番台|正常終了|
|300番台|何らかの別のアクションが必要|
|400番台|クライアント側のエラー|
|500番台|サーバー側のエラー|


今日はここまでになります。  
明日は、TCP/IPとDNSサーバーについてまとめていきたいと思います。
