/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4121c7a5afdc3069706680c291d54ad5"
  },
  {
    "url": "about/me/index.html",
    "revision": "13b395ddee392e79b042352418a80c2a"
  },
  {
    "url": "about/resume/index.html",
    "revision": "70c5d3552f746469752b160c7dba982e"
  },
  {
    "url": "appimg01.png",
    "revision": "6ed1b5ebbb40e784a150a94582387507"
  },
  {
    "url": "assets/css/0.styles.ab7a19a7.css",
    "revision": "2069a0aaeecb43d6992db2ca245edfc4"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/appimg01.6ed1b5eb.png",
    "revision": "6ed1b5ebbb40e784a150a94582387507"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/jiaqi.94882ecb.png",
    "revision": "94882ecb08182025118529e465ff61cd"
  },
  {
    "url": "assets/img/weixin.9b606d65.png",
    "revision": "9b606d65af15b546dbf6277d83112d7b"
  },
  {
    "url": "assets/img/xiangshou.4e7bf733.png",
    "revision": "4e7bf7339a2abca96a8cde85f4db3bc6"
  },
  {
    "url": "assets/js/1.c1942029.js",
    "revision": "e7a977e23dd0cab8496b85fcdcff3c3f"
  },
  {
    "url": "assets/js/10.7ad680e7.js",
    "revision": "2c10404b0bbf3932af974c4f7eeacab9"
  },
  {
    "url": "assets/js/11.dc80e8d9.js",
    "revision": "76f6fbb9437ba038ed42588b0fb33e25"
  },
  {
    "url": "assets/js/12.03721d27.js",
    "revision": "0405971cea12964b93ded4498aae515f"
  },
  {
    "url": "assets/js/13.6caf061e.js",
    "revision": "7cc6717400e30f040b0d9d278cf6c40d"
  },
  {
    "url": "assets/js/14.21cd9068.js",
    "revision": "66511ac06691e4c66870d3ef44da6f2f"
  },
  {
    "url": "assets/js/15.03aeae4f.js",
    "revision": "9e3d1d88d67c2f472d60a3812fd67661"
  },
  {
    "url": "assets/js/16.82f0bf2e.js",
    "revision": "3fadf073ad6cd8a864ed943da1ff6921"
  },
  {
    "url": "assets/js/17.e5ca2d46.js",
    "revision": "6a18937bf83e3e7dc810f3a96dda3193"
  },
  {
    "url": "assets/js/18.22b93c4c.js",
    "revision": "5f59545606459f8e6bea4f7426940c8b"
  },
  {
    "url": "assets/js/19.79b86380.js",
    "revision": "3c4a21edb924fffc100f84a05b5cb714"
  },
  {
    "url": "assets/js/20.b2c58827.js",
    "revision": "1a726a5ab57da62bf8e691e85a6d999d"
  },
  {
    "url": "assets/js/21.5a4ae20c.js",
    "revision": "201cadc927832a0b0d341210869fd390"
  },
  {
    "url": "assets/js/22.d371b7ca.js",
    "revision": "3f9704ec4cae54a43ac4d26768e6f869"
  },
  {
    "url": "assets/js/23.69b02b87.js",
    "revision": "a3fb899c87a8a8cbb6aa783bae67668c"
  },
  {
    "url": "assets/js/24.62ae1e6e.js",
    "revision": "663bf391d595da99633c24a738d4733e"
  },
  {
    "url": "assets/js/25.e84f1200.js",
    "revision": "3403c42f2b8dbc1f5a5608abe2e9dfbb"
  },
  {
    "url": "assets/js/26.0687e2c6.js",
    "revision": "9a2b1645ee9b4c069a36e65f509edf84"
  },
  {
    "url": "assets/js/27.b6388e28.js",
    "revision": "fd2702c6634ef1a5c4fc49221bd7e749"
  },
  {
    "url": "assets/js/28.025000aa.js",
    "revision": "12dafaf410f7a0ab67ad7c0cdcf629c3"
  },
  {
    "url": "assets/js/29.fa416377.js",
    "revision": "2acb526752d237c7c6b852da1e3aa6d2"
  },
  {
    "url": "assets/js/30.413ad071.js",
    "revision": "f02f5c1343941e06fc7cdad571d61756"
  },
  {
    "url": "assets/js/31.dc6bba1b.js",
    "revision": "9f6014ba8153891d7ffaa017114ed7f5"
  },
  {
    "url": "assets/js/32.82217089.js",
    "revision": "fe82348f50cea52b00f0ec41228fbddb"
  },
  {
    "url": "assets/js/33.205b7fe5.js",
    "revision": "2524a7063b2cc777f59f847a5059305f"
  },
  {
    "url": "assets/js/34.e256c23f.js",
    "revision": "526b3583091ccb8b438f7e0c1b668526"
  },
  {
    "url": "assets/js/35.183e4a96.js",
    "revision": "78d5dab5428d784150c8fa9876d4d9cf"
  },
  {
    "url": "assets/js/36.aef3cf2f.js",
    "revision": "751cf2bef7f45074d178c6267d45952b"
  },
  {
    "url": "assets/js/37.a09f7af6.js",
    "revision": "6a2c85d49e41345ed8e8a7140fc79d7c"
  },
  {
    "url": "assets/js/38.4441e679.js",
    "revision": "799bce7b903accfe04eec4d603d168f8"
  },
  {
    "url": "assets/js/39.71cf30bb.js",
    "revision": "7ae33b4ba08d72853ad0e55a1f1aee1a"
  },
  {
    "url": "assets/js/4.93737be6.js",
    "revision": "b8f7b4a8e5c6bbb1bcbf5f4df4e48ad1"
  },
  {
    "url": "assets/js/40.67e90bcc.js",
    "revision": "17d62ee4c25284714b7acacc7485b130"
  },
  {
    "url": "assets/js/41.49ca492b.js",
    "revision": "fd8920c733dba44d41e13607563d2e9f"
  },
  {
    "url": "assets/js/42.b1c5081f.js",
    "revision": "8e20a05ab1d972460694a4c87ca316c1"
  },
  {
    "url": "assets/js/43.2475c59d.js",
    "revision": "a40eb1e6cf794620750872b1101e15af"
  },
  {
    "url": "assets/js/44.7dcc3521.js",
    "revision": "848830cdb83bd2997e48e19848f4d30d"
  },
  {
    "url": "assets/js/45.42b4b27c.js",
    "revision": "c40ebc214b964f450a25de38eab335ef"
  },
  {
    "url": "assets/js/46.343f1667.js",
    "revision": "6a57402369c276819b1923ddb055855a"
  },
  {
    "url": "assets/js/47.4ddf934a.js",
    "revision": "469a891495973363dfa48b31647346d1"
  },
  {
    "url": "assets/js/48.b2158fb6.js",
    "revision": "5040ca4acc20b1e176a5ac23b77a9f89"
  },
  {
    "url": "assets/js/49.12c9d5aa.js",
    "revision": "f367c4696f26c44997ac30f1935fa0dc"
  },
  {
    "url": "assets/js/5.f8753b9e.js",
    "revision": "9049de626bb7f00734aba9df0558052b"
  },
  {
    "url": "assets/js/50.59573c00.js",
    "revision": "097572c1a1740906e45d0e73920ace8d"
  },
  {
    "url": "assets/js/51.43b722dd.js",
    "revision": "ab9e6bb01610c1525328d2415344b40e"
  },
  {
    "url": "assets/js/52.76deb090.js",
    "revision": "0a8083258dd7020f57754368758a68bc"
  },
  {
    "url": "assets/js/53.b0927dab.js",
    "revision": "775119a4a7150f349c788308a1f8cb09"
  },
  {
    "url": "assets/js/54.a4277c76.js",
    "revision": "0920ee330b4947e20d938574c9ba4e63"
  },
  {
    "url": "assets/js/6.43d6f514.js",
    "revision": "e1d182ec2f5f613daf788415e1529d99"
  },
  {
    "url": "assets/js/7.eaecee87.js",
    "revision": "49a3d0be6b8a2b1ab3768ee4c3e8a8ce"
  },
  {
    "url": "assets/js/8.06d4f59b.js",
    "revision": "f86ef36441762e9434c8881e6c55af7b"
  },
  {
    "url": "assets/js/9.a5abba7d.js",
    "revision": "c47ad882266e08a34996847edbf6efbd"
  },
  {
    "url": "assets/js/app.79051b37.js",
    "revision": "0d768a00438941e2276f9a2a5aead405"
  },
  {
    "url": "assets/js/vendors~flowchart.822a5d0d.js",
    "revision": "5f0e30f99dd68509f92082b9db4fd9d6"
  },
  {
    "url": "avatar-scan.png",
    "revision": "b3ef283365d57b1e5a9197ce28f3108a"
  },
  {
    "url": "blogs/Java/2021/012301.html",
    "revision": "41147db1bcbf1f36af428b7807fd6eaa"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "b933db75c9df9132ad7be8ac5f766ea2"
  },
  {
    "url": "blogs/Python/2021/012301.html",
    "revision": "5ce1ef24a665166633325f7d85219e18"
  },
  {
    "url": "blogs/Python/2021/012302.html",
    "revision": "6a12d577bf7d68d2dbb5b1eded2f8ca8"
  },
  {
    "url": "blogs/功能测试/2021/022601.html",
    "revision": "898ccb1179674214742258ad740e6759"
  },
  {
    "url": "blogs/性能测试/2016/121501.html",
    "revision": "24a1d4eeed1f88b46703e4a6e634dea8"
  },
  {
    "url": "blogs/性能测试/2017/092101.html",
    "revision": "e8366d28af12de85e49ea6d766323874"
  },
  {
    "url": "blogs/接口测试/2021/012401.html",
    "revision": "15881304b353b3a9aa6e6b0d2f8e6672"
  },
  {
    "url": "blogs/生活/2021/012401.html",
    "revision": "9f66271ced554fb1b29ef067b43050d4"
  },
  {
    "url": "blogs/自动化测试/2021/020101.html",
    "revision": "4ab6d5a4d048623e6c84f00ff3f64883"
  },
  {
    "url": "blogs/自动化测试/2021/020102.html",
    "revision": "de5d51ffb600b90e2a126cb8eee32fa6"
  },
  {
    "url": "blogs/自动化测试/2021/020401.html",
    "revision": "9524224ab5c25bedb55481cb865372fe"
  },
  {
    "url": "blogs/面试题/2021/081401.html",
    "revision": "5ba68ecdf395e121f7f8a00b64c8d5c3"
  },
  {
    "url": "categories/index.html",
    "revision": "6080f232d654715abebf6d8ba14a1584"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "9fae18a971fb85bb93fd18710ccce584"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "885420648a7178441dd7ccb8dd6deee7"
  },
  {
    "url": "categories/功能测试/index.html",
    "revision": "f63081a2c0ea6ad8ca5df8102c9baf3a"
  },
  {
    "url": "categories/性能测试/index.html",
    "revision": "b36bcdc8bb2ad0c34b33f5f4d52cb672"
  },
  {
    "url": "categories/接口测试/index.html",
    "revision": "33e25581ef8e1a16fa03e891ce374d48"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "387648ffb3ba30f7705987599e510fe2"
  },
  {
    "url": "categories/自动化测试/index.html",
    "revision": "6b2eefaf47882ffc58f7238141525421"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "305ec5dcb5a87ed31cbb86eb59aba136"
  },
  {
    "url": "docs/pytest系列教程/01-pytest概述和安装.html",
    "revision": "9fffec96e704f957bf35705bf130214d"
  },
  {
    "url": "docs/pytest系列教程/02-pytest使用.html",
    "revision": "8a46d16cb06718f1a54bf35e277d10fe"
  },
  {
    "url": "docs/pytest系列教程/03-pytest执行方式.html",
    "revision": "9f655d79731e483913c238cc7faf1446"
  },
  {
    "url": "docs/pytest系列教程/04-pytest运行规则.html",
    "revision": "76a96b2437894bb4d485b071537060a4"
  },
  {
    "url": "docs/pytest系列教程/05-pytest自定义运行规则.html",
    "revision": "fbbb86bab7a892bc21bca19eeec20238"
  },
  {
    "url": "docs/pytest系列教程/06-pytest标记.html",
    "revision": "ca8b9f2983952cef11777e45ad357aa9"
  },
  {
    "url": "docs/pytest系列教程/07-pytest数据参数化.html",
    "revision": "fceea5b18e2d1027f1ab96699d560eae"
  },
  {
    "url": "docs/pytest系列教程/08-pytest常用插件.html",
    "revision": "f5e693ea79ec168a1bc1d00e8ceafd0d"
  },
  {
    "url": "docs/pytest系列教程/09-pytest案例实践.html",
    "revision": "f32acddce3b58d79303717c72643505e"
  },
  {
    "url": "docs/pytest系列教程/index.html",
    "revision": "331beb235fed33cc3c1eb1004c7f5b0b"
  },
  {
    "url": "docs/python教程/index.html",
    "revision": "9b7b6dbcd212c9fca1e61664d48c761d"
  },
  {
    "url": "docs/python教程/push_code.html",
    "revision": "ae053205728bf02b852d519c232e64e5"
  },
  {
    "url": "docs/python教程/python列表.html",
    "revision": "8cc7a84c9a84fa41fb65c6898fa7b190"
  },
  {
    "url": "docs/python教程/python数据结构.html",
    "revision": "f90f04d27e57cc7eeede1afda10e6dc9"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "0a70b4a953a1ca85d214eb7a4b123034"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "ce8753b72206680414603daf496b1ef3"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "56a44f5c75f9685c307b08bfc33c2611"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "b823d21dbe05ef32aa75a89c1b91fc7b"
  },
  {
    "url": "docs/vue技术教程/easyUI.html",
    "revision": "07663184bc75cd071af50afc16cb0b79"
  },
  {
    "url": "docs/vue技术教程/index.html",
    "revision": "64252c0decbb5902aa0c4212c2e6794c"
  },
  {
    "url": "docs/vue技术教程/markdown流程图.html",
    "revision": "aeb593d7915879f5d9a2fe31633d74ea"
  },
  {
    "url": "docs/web自动化测试教程/01-自动化测试概述.html",
    "revision": "8754ab110cf002f011e4eb433a17a366"
  },
  {
    "url": "docs/web自动化测试教程/02-Selenum核心技术.html",
    "revision": "989680fea5f4ced95d6099509b97220c"
  },
  {
    "url": "docs/web自动化测试教程/index.html",
    "revision": "b9e5550183794920639b93a3ced3d728"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "imgs/avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "index.html",
    "revision": "4c269ca02f7694cb58cecb3a4b0d5965"
  },
  {
    "url": "jiaqi.png",
    "revision": "94882ecb08182025118529e465ff61cd"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "message/bug/index.html",
    "revision": "36abfa6ef74887bc26d7aaf48e778fdb"
  },
  {
    "url": "message/msg/index.html",
    "revision": "bd779bcc14b6fa800eae450fbbdadad5"
  },
  {
    "url": "tag/app功能测试/index.html",
    "revision": "6d77e35c6885f5b15f55461733d2bbda"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "ffb1600520b13622822e64c018f80bdb"
  },
  {
    "url": "tag/index.html",
    "revision": "383f1d3e7646b17f87c2f52f8f633631"
  },
  {
    "url": "tag/java/index.html",
    "revision": "52eb590b1de7b79fcb3fa7ab527577ad"
  },
  {
    "url": "tag/pytest/index.html",
    "revision": "d16c2c31d76e31681b6968a0fb8fb149"
  },
  {
    "url": "tag/python/index.html",
    "revision": "530b786e7cac78f4b2ab87b05608c736"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "d5b2f4ca5512c13d6b09ef39f0d2aae4"
  },
  {
    "url": "tag/关于我/index.html",
    "revision": "71ef050aab3b8545814d4ea925630c31"
  },
  {
    "url": "tag/功能测试/index.html",
    "revision": "705f90268fda45b0a54f7f8cdc249ed5"
  },
  {
    "url": "tag/性能/index.html",
    "revision": "729f74be39e14fd3afab484b18529951"
  },
  {
    "url": "tag/接口测试/index.html",
    "revision": "f5b32586292d77786231e12bef3a3283"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "2a0b638750da54934be3504096d0dbf1"
  },
  {
    "url": "tag/留言/index.html",
    "revision": "c67131efe432abe0e404d235a00bdde6"
  },
  {
    "url": "tag/自动化测试/index.html",
    "revision": "036e62daa1151813770207c649a09071"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "57b20977937c8b891bdfd68e600496e6"
  },
  {
    "url": "timeline/index.html",
    "revision": "e4dca70f926b50d977ccffc657b34b75"
  },
  {
    "url": "weixin.png",
    "revision": "9b606d65af15b546dbf6277d83112d7b"
  },
  {
    "url": "xiangshou.png",
    "revision": "4e7bf7339a2abca96a8cde85f4db3bc6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
