# Soruto Modal
モーダルウィンドウを簡単に作成できるJavaScriptライブラリ。
### 使用方法

### リファレンス

[smodal.alert(options)](#smodalalertoptions)  
[smodal.confirm(options)](#smodalconfirmoptions)  
[smodal.inIframe(options)](#smodaliniframeoptions)  

#### smodal.alert(options)
例:

    smodal.alert({
    "title":"sample",
    "message":"this is a sample text",
    "backClose":true,
    "width":"300px",
    "height":"300px"
    "okFunction":'alert()'
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
また、`"backClose":true`が指定されているときは、  
モーダルの背後にある半透明の部分をクリックしたときにも実行されます。  
囲い文字は必ず`'(シングルクオーテーション)`を使用してください。

#### smodal.alert(options)
例:

    smodal.alert({
    "title":"sample",
    "message":"this is a sample text",
    "backClose":true,
    "width":"300px",
    "height":"300px"
    "okFunction":'alert()'
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
また、`"backClose":true`が指定されているときは、  
モーダルの背後にある半透明の部分をクリックしたときにも実行されます。  
囲い文字は必ず`'(シングルクオーテーション)`を使用してください。

#### smodal.confirm(options)
例:

    smodal.confirm({
    "title":"sample",
    "message":"this is a sample text",
    "backClose":true,
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

#### smodal.inIframe(options)
例:

    smodal.confirm({
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
