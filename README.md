# iframe-player
Iframed 163music cplayer/aplayer

### 起因
~~网易云自带的播放器并不支持 `https`, 而且功能有些落后了:(~~ 目前已经支持 `https`.
Aplayer 本身是有个 Python 项目的...但最近挂掉了..所以只能自己动手了.

### 原理
**服务端** ~~使用 Node.js 的 [网易云API](https://github.com/Binaryify/NeteaseCloudMusicApi) 搭建服务~~目前采用自建的 [teng-koa](https://github.com/a632079/teng-koa), 目前正在等待上游 API 更新([#6](https://github.com/surmon-china/simple-netease-cloud-music/pull/7))。

**页面** 使用 XMLhttpRequest请求结果,并交给播放器
优点: 只要 Github 项目不炸...API没改...那么就可以一直使用.(哪怕我的炸了，你也可以自己搭个)

### Demo

##### Aplayer

<iframe id="aplayer" frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="86" src="https://cdn.a632079.me/163music.html?playlist=28391862" style="margin:0"></iframe>

```HTML
<iframe id="aplayer" frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="86" src="https://cdn.a632079.me/163music.html?playlist=28391862"></iframe>
```

#### Cplayer

<iframe id="cplayer" frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="108" src="https://cdn.a632079.me/163cplayer.html?playlist=438803182"  style="margin:0"></iframe>

```HTML
<iframe id="cplayer" frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="108" src="https://cdn.a632079.me/163cplayer.html?playlist=438803182"></iframe>
```

### 更多设置？
请参考 [Aplayer](https://github.com/MoePlayer/Aplayer) 和 [Cplayer](https://github.com/MoePlayer/cPlayer) 的 Github 文档(除了Playlist不可变更外，你都可以通过向URL加参数来配置播放器)

### 高度自适应?
请参考 `auto_xxx.js`，然后引用。 需要将 `html` 文件放置在你的站点中（遵循同源策略）。
