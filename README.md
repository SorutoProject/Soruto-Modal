# Soruto Modal
モーダルウィンドウを簡単に作成できるJavaScriptライブラリ。
### 使用方法
    <html>
    <head>
    <!--CSSの読み込み忘れに注意-->
    <link rel="stylesheet" href="soruto-modal-default.js">
    <script src="soruto-modal.js"></script>
    </head>
    <body>…</body>
    </html>
### リファレンス

[smodal.alert(options)](#smodalalertoptions)  
[smodal.confirm(options)](#smodalconfirmoptions)  
[smodal.inIframe(options)](#smodaliniframeoptions)  

#### smodal.alert(options)
OKボタン付きのモーダルダイアログを表示します。

例:

    smodal.alert({
    "title":"sample",
    "message":"this is a sample text",
    "backClose":true,
    "width":"300px",
    "height":"300px",
    "okFunction":'alert()',
    "okButtonValue":"了解"
    });

**オプション一覧** 

**必須**  
`"title":string`  
モーダルのタイトルバーに表示する文字列を設定します。 

**必須**  
`"message":string`  
モーダルに表示するメッセージとして表示する文字列を設定します。  

`"backClose":boolean`  
モーダルの背後にある半透明の部分をクリックしたときに、モーダルを閉じるか指定します。  
値を`true`にすると有効になります。

`"width":string`  
モーダルの横幅を指定します。  
このオプションが指定されていないときは、CSS側で指定されているサイズになります。

`"height":string`  
モーダルの高さを指定します。  
このオプションが指定されていないときは、CSS側で指定されているサイズになります。

`"okFunction":string`  
OKボタンを押したときに実行するを文字列で指定します。  
また、`"backClose":true`が指定されているときは、  
モーダルの背後にある半透明の部分をクリックしたときにも実行されます。  
囲い文字は必ず`'(シングルクオーテーション)`を使用してください。

`"okButtonValue":string`  
OKボタンのテキストを設定します。  
このオプションが指定されていないときは、`"okButtonValue":"OK"`が指定されます。

#### smodal.confirm(options)
OKボタンとキャンセルボタンを持つモーダルダイアログを表示します。

例:

    smodal.confirm({
    "title":"Question",
    "message":"Do you like apples?",
    "backClose":true,
    "width":"300px",
    "height":"300px",
    "okFunction":'alert("OK")',
    "cancelFunction":'alert("Canceled")',
    "okButtonValue":"Yes",
    "cancelButtonValue","No"
    });

**オプション一覧** 

**必須**  
`"title":string`  
モーダルのタイトルバーに表示する文字列を設定します。 

**必須**  
`"message":string`  
モーダルに表示するメッセージとして表示する文字列を設定します。  

`"backClose":boolean`  
モーダルの背後にある半透明の部分をクリックしたときに、モーダルを閉じるか指定します。  
値を`true`にすると有効になります。

`"width":string`  
モーダルの横幅を指定します。  
このオプションが指定されていないときは、CSS側で指定されているサイズになります。

`"height":string`  
モーダルの横幅を指定します。  
このオプションが指定されていないときは、CSS側で指定されているサイズになります。

`"okFunction":string`  
OKボタンを押したときに実行するを文字列で指定します。  
囲い文字は必ず`'(シングルクオーテーション)`を使用してください。

`"cancelFunction":string`  
キャンセルボタンを押したときに実行するを文字列で指定します。   
囲い文字は必ず`'(シングルクオーテーション)`を使用してください。

なお、`smodal.confirm`メゾットでは `"backClose":true`が指定されていても、  
関数が実行されることはありません。

`"okButtonValue":string`  
OKボタンのテキストを設定します。  
このオプションが指定されていないときは、`"okButtonValue":"OK"`が指定されます。

`"cancelButtonValue":string`  
キャンセルボタンのテキストを設定します。  
このオプションが指定されていないときは、`"cancelButtonValue":"OK"`が指定されます。

#### smodal.inIframe(options)
iframeを持つモーダルダイアログを表示します。

例:

    smodal.inIframe({
    "title":"sample",
    "message":"this is a sample text",
    "url":"http://sorutopj.ml",
    "width":"300px",
    "height":"300px"
    "okFunction":'alert("OK")',
    "cancelFunction":'alert("Canceled")'
    });

**オプション一覧** 

**必須**  
`"title":string`  
モーダルのタイトルバーに表示する文字列を設定します。 

**必須**  
`"message":string`  
モーダルに表示するメッセージとして表示する文字列を設定します。  

**必須**  
`"url":string`  
モーダル内のiframeの初期URLを指定します。

`"backClose":boolean`  
`smodal.inFrame`メゾットではこのオプションの有無に関わらず、  
モーダルの背後にある半透明の部分をクリックしたときに、モーダルを閉じます。

`"width":string`  
モーダルの横幅を指定します。  
このオプションが指定されていないときは、CSS側で指定されているサイズになります。

`"height":string`  
モーダルの横幅を指定します。  
このオプションが指定されていないときは、CSS側で指定されているサイズになります。

`"okFunction":string`  
OKボタンを押したときに実行するを文字列で指定します。  
囲い文字は必ず`'(シングルクオーテーション)`を使用してください。

`"cancelFunction":string`  
キャンセルボタンを押したときに実行するを文字列で指定します。   
囲い文字は必ず`'(シングルクオーテーション)`を使用してください。

なお、`smodal.confirm()` では `"backClose":true`が指定されていても、  
関数が実行されることはありません。

#### smodal.close()
例:  
`smodal.close();`

表示されているモーダルを閉じます。
