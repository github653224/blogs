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
    "revision": "198baad00a89f23d7c155dd9cccd0954"
  },
  {
    "url": "about/me/index.html",
    "revision": "8005e3067ba1bcc148bfbd9fa43f6fd8"
  },
  {
    "url": "about/resume/index.html",
    "revision": "54163ba125369659b5136db7c19007c4"
  },
  {
    "url": "appimg01.png",
    "revision": "6ed1b5ebbb40e784a150a94582387507"
  },
  {
    "url": "assets/css/0.styles.a36bd893.css",
    "revision": "0acd5a00013719c24209b0f6616d9440"
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
    "url": "assets/js/1.ff3928f0.js",
    "revision": "69addd73a7bd27e41e1dc98cf1e90adb"
  },
  {
    "url": "assets/js/10.8ded91d2.js",
    "revision": "bb25f8ae0335d01ab69e6266594867a6"
  },
  {
    "url": "assets/js/11.02a65a65.js",
    "revision": "58d16d1f5167666b53f0e3156a8c4f13"
  },
  {
    "url": "assets/js/12.7876fa37.js",
    "revision": "e25e1165be4d7db0765ce19203e70284"
  },
  {
    "url": "assets/js/13.603d466c.js",
    "revision": "72aa997095cb0d64d61717262aed3e08"
  },
  {
    "url": "assets/js/14.93f38d2f.js",
    "revision": "be649f49974076203120950957999789"
  },
  {
    "url": "assets/js/15.620a468e.js",
    "revision": "e1d083da30ae4fa558249e18082e4562"
  },
  {
    "url": "assets/js/16.9de77c26.js",
    "revision": "b671cec9d1c8ae9ac856643516e5d84e"
  },
  {
    "url": "assets/js/17.c752df21.js",
    "revision": "ec4f000e4bb1827dc214a0be3a4665f8"
  },
  {
    "url": "assets/js/18.05b0a135.js",
    "revision": "4c9d37025aa6562df75bc1885c10c5b6"
  },
  {
    "url": "assets/js/19.def4b6a1.js",
    "revision": "c46495077ca79fe01df1db94712139a9"
  },
  {
    "url": "assets/js/20.40de258f.js",
    "revision": "369fca9035adccf91af1880145d01ead"
  },
  {
    "url": "assets/js/21.333a89a6.js",
    "revision": "6152fa892e199b5e07d59dc7bf0d6c24"
  },
  {
    "url": "assets/js/22.450923c2.js",
    "revision": "3df5e7b32d0d1573e675d1cc5bcd619a"
  },
  {
    "url": "assets/js/23.10ef29b4.js",
    "revision": "152e60f3f7a4be2d3c8a6cda420e945d"
  },
  {
    "url": "assets/js/24.88fef6fc.js",
    "revision": "1a8aa2b01312a4a8fc73f9b96d3e0aed"
  },
  {
    "url": "assets/js/25.5510cd6d.js",
    "revision": "a26c89953b0d67c3701b3401d5d80e88"
  },
  {
    "url": "assets/js/26.1bd4557e.js",
    "revision": "fa81d4bb719b2b48a6b3968be602d9a6"
  },
  {
    "url": "assets/js/27.2f4d9c57.js",
    "revision": "b0c2ad3a5c30573e4b6d253ed0949b38"
  },
  {
    "url": "assets/js/28.302dee63.js",
    "revision": "dffc844a2a20ee05784310a4c137c9c0"
  },
  {
    "url": "assets/js/29.f03eb1ed.js",
    "revision": "0dab3865d632d89d30c02da1f8df44b4"
  },
  {
    "url": "assets/js/30.f711deae.js",
    "revision": "6e9a508cb6d43a8ece56a3bad585f3bf"
  },
  {
    "url": "assets/js/31.1b2d87b2.js",
    "revision": "e31de7dbfee4a016dc54c374b4310295"
  },
  {
    "url": "assets/js/32.7881dcf6.js",
    "revision": "6c6eb48eb664de006e9a7d7d53581b08"
  },
  {
    "url": "assets/js/33.40bef0b4.js",
    "revision": "7992b0101505247c7159de1b46dd92c1"
  },
  {
    "url": "assets/js/34.0026c236.js",
    "revision": "03bb12bdd8c5c51cf37855103f50d9ff"
  },
  {
    "url": "assets/js/35.f7320ef9.js",
    "revision": "d8684a719fbaca4e6ce87c19d4381fd2"
  },
  {
    "url": "assets/js/36.b05d7de4.js",
    "revision": "7a78dd518cc8051ec77b3141e3b6b454"
  },
  {
    "url": "assets/js/37.15e7627e.js",
    "revision": "b30fec8c48c3a9767c0eef985f957e80"
  },
  {
    "url": "assets/js/38.d4232514.js",
    "revision": "ba857a7c5df1a34864d0740c7fb17e0e"
  },
  {
    "url": "assets/js/39.05cd57f3.js",
    "revision": "a56b9aa99027e0fc0b07e73b99e2090a"
  },
  {
    "url": "assets/js/4.d3957a48.js",
    "revision": "6d8c811267b9993781da887bd3644ae4"
  },
  {
    "url": "assets/js/40.6ad08238.js",
    "revision": "40a5bb7db7ab057d241e39565161f01b"
  },
  {
    "url": "assets/js/41.dd2b7a4a.js",
    "revision": "e270c438359ebddcbd54d1f1f3c568d0"
  },
  {
    "url": "assets/js/42.f54adb05.js",
    "revision": "e39fc286e865a80df6d6d5df7925cbd3"
  },
  {
    "url": "assets/js/43.e94b742d.js",
    "revision": "a0444b4832c4edb589cf074f1f335c7e"
  },
  {
    "url": "assets/js/44.68f2c032.js",
    "revision": "60940e881d449201110e481ffbff46a7"
  },
  {
    "url": "assets/js/45.280d4e8d.js",
    "revision": "481bf7079b7481a26f9a96182c313e16"
  },
  {
    "url": "assets/js/46.99ede4ff.js",
    "revision": "0210fba9852b53eaf103006c81875640"
  },
  {
    "url": "assets/js/47.446f301e.js",
    "revision": "534a2c568c3e58ce8b803ade174b68fe"
  },
  {
    "url": "assets/js/48.4b5fca61.js",
    "revision": "c957f8f89b715d4420f43d6452e941e9"
  },
  {
    "url": "assets/js/49.6f052fec.js",
    "revision": "451f41e7428e6feff44f2b334527c4bd"
  },
  {
    "url": "assets/js/5.e6a4619f.js",
    "revision": "e0a665a72a966b9166223861b018183d"
  },
  {
    "url": "assets/js/50.34d1c90d.js",
    "revision": "1c2e8b86aca2e5d1a0063334449341ed"
  },
  {
    "url": "assets/js/51.2707dcb5.js",
    "revision": "f03d722aabc164a7624df2a05ed00cc7"
  },
  {
    "url": "assets/js/52.abdebc1e.js",
    "revision": "821401c4c66af4d3f7e4944a8b25c2b3"
  },
  {
    "url": "assets/js/53.8b1dcd9b.js",
    "revision": "6cb3ff72c8c772fa87e3a640a3442102"
  },
  {
    "url": "assets/js/54.9494f084.js",
    "revision": "7c513a87597895513a77a37ed61347a6"
  },
  {
    "url": "assets/js/6.d91bba83.js",
    "revision": "e17352f0ae71900a0013075e2baeb51b"
  },
  {
    "url": "assets/js/7.dcf29c97.js",
    "revision": "e89b39395ec906b6669f1036ced5d321"
  },
  {
    "url": "assets/js/8.cefac29d.js",
    "revision": "ed217348e954707a05ad5b22e0a4c0df"
  },
  {
    "url": "assets/js/9.2cf39eda.js",
    "revision": "d418367f3c28186c9b17b477dc7c812b"
  },
  {
    "url": "assets/js/app.3ec05ac7.js",
    "revision": "d922598063f750856408b22f6ac8fed0"
  },
  {
    "url": "assets/js/vendors~flowchart.9f12ed56.js",
    "revision": "690adf42a4f4ef47fb45a0b4e389b5ab"
  },
  {
    "url": "avatar-scan.png",
    "revision": "b3ef283365d57b1e5a9197ce28f3108a"
  },
  {
    "url": "blogs/Java/2021/012301.html",
    "revision": "e6516f9f0f53230770beb021e4d0c214"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "0e3ed311fdd4a554d5036b5c1428288a"
  },
  {
    "url": "blogs/Python/2021/012301.html",
    "revision": "c1cb1bd165e999f0b5d4954fe2e6abbb"
  },
  {
    "url": "blogs/Python/2021/012302.html",
    "revision": "2d9a062487c21aeb117da25e7f4da82e"
  },
  {
    "url": "blogs/功能测试/2021/022601.html",
    "revision": "8293651a4e82560298ca98c029fc5bd5"
  },
  {
    "url": "blogs/性能测试/2016/121501.html",
    "revision": "cf54e5d7fc70c9338dd7a0b40eaf8425"
  },
  {
    "url": "blogs/性能测试/2017/092101.html",
    "revision": "2b115c376a758076cfd30941881e7c28"
  },
  {
    "url": "blogs/接口测试/2021/012401.html",
    "revision": "42cc70fdccfc07bd24beb3f86ad6dec9"
  },
  {
    "url": "blogs/生活/2021/012401.html",
    "revision": "32268998e940440b1e78b36e6ad51438"
  },
  {
    "url": "blogs/自动化测试/2021/020101.html",
    "revision": "752105199cd9192cc827b407610b1575"
  },
  {
    "url": "blogs/自动化测试/2021/020102.html",
    "revision": "d45a9cbc34442862ce9ef1750bbe4355"
  },
  {
    "url": "blogs/自动化测试/2021/020401.html",
    "revision": "cff841aaec059f053e5bcabe257936a6"
  },
  {
    "url": "blogs/面试题/2021/081401.html",
    "revision": "e945739bb3d591123a7be10b7125775d"
  },
  {
    "url": "categories/index.html",
    "revision": "b2aec083d3bd4eea93b9964469accdb0"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "c478aeccd44429b4c62320d3d048b6eb"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "6ed6ce63b35eb1984269e290ebde3f27"
  },
  {
    "url": "categories/功能测试/index.html",
    "revision": "f446a6b52d509ea0156692eb58daf00c"
  },
  {
    "url": "categories/性能测试/index.html",
    "revision": "f6b39c21fdefd6e9e6c265036868799a"
  },
  {
    "url": "categories/接口测试/index.html",
    "revision": "157cc73da29914bd31b786f740c4c0b8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "169e2ba50bc20b35b703198e7051ae83"
  },
  {
    "url": "categories/自动化测试/index.html",
    "revision": "18289cb7a6c2bc863eeec5dadeb8cff3"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "45812f6108e21efd8e18b9cc8865dc39"
  },
  {
    "url": "docs/pytest系列教程/01-pytest概述和安装.html",
    "revision": "9cebb31e3b6612899672c3cdb90a4ecb"
  },
  {
    "url": "docs/pytest系列教程/02-pytest使用.html",
    "revision": "b0ee0336b5432d8d5d50c964b5712f03"
  },
  {
    "url": "docs/pytest系列教程/03-pytest执行方式.html",
    "revision": "308ed62ffc44b3c44a54a48b5aea5a59"
  },
  {
    "url": "docs/pytest系列教程/04-pytest运行规则.html",
    "revision": "60385de28b8a1738e7088aff60e93912"
  },
  {
    "url": "docs/pytest系列教程/05-pytest自定义运行规则.html",
    "revision": "53831e80227bcdb872fab2521abbd765"
  },
  {
    "url": "docs/pytest系列教程/06-pytest标记.html",
    "revision": "0f4fc66117edfaeeb38855dd6503134d"
  },
  {
    "url": "docs/pytest系列教程/07-pytest数据参数化.html",
    "revision": "98944c1059a4f87573b8f5b44ddda19b"
  },
  {
    "url": "docs/pytest系列教程/08-pytest常用插件.html",
    "revision": "b07d8a206bea8b1b89cf4941fd771c87"
  },
  {
    "url": "docs/pytest系列教程/09-pytest案例实践.html",
    "revision": "6b2284672b675e8acfb3a08f973e2882"
  },
  {
    "url": "docs/pytest系列教程/index.html",
    "revision": "bb95ef6f2123932b06eab7ffc5135ff9"
  },
  {
    "url": "docs/python教程/index.html",
    "revision": "b4047caef826f5f8d5331491ded69a99"
  },
  {
    "url": "docs/python教程/push_code.html",
    "revision": "08fb220d994846d8f71a34ad014b3733"
  },
  {
    "url": "docs/python教程/python列表.html",
    "revision": "ca32ad5e6ee5d44af3ee1b94251a0f5f"
  },
  {
    "url": "docs/python教程/python数据结构.html",
    "revision": "042d8c5ab6c196162b4fc174bf49cdc9"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "44659c9de0931317e302bf48a504db46"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "4dcb43f84d6998e6aa50cb9e19d8fa77"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "6e3dc0e694b4c266dc63d9ea2d02d80c"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "3dd2a35f49617364b01503d82318554f"
  },
  {
    "url": "docs/vue技术教程/easyUI.html",
    "revision": "4522d3b41ebebef6edbee66d690d4616"
  },
  {
    "url": "docs/vue技术教程/index.html",
    "revision": "b7c2b6cbc9360653d16e8b29f5773767"
  },
  {
    "url": "docs/vue技术教程/markdown流程图.html",
    "revision": "26ca58f09c94a7f5cb1b9b7bd682e54b"
  },
  {
    "url": "docs/web自动化测试教程/01-自动化测试概述.html",
    "revision": "bf9c7dd108693b7ddaa75233bd100f33"
  },
  {
    "url": "docs/web自动化测试教程/02-Selenum核心技术.html",
    "revision": "afb0cda68dcd27a2cbeed390e911c96a"
  },
  {
    "url": "docs/web自动化测试教程/index.html",
    "revision": "b9d149453ab559797a1f34b3ca86317e"
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
    "revision": "3230ed74837a1e35284f73610cdd3d1d"
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
    "revision": "09ccb80c1dd496dbad6b2d522e68ba35"
  },
  {
    "url": "message/msg/index.html",
    "revision": "5bef725274f74e13ecb263372b1561f6"
  },
  {
    "url": "tag/app功能测试/index.html",
    "revision": "7a4ad400ad10b18de89a3e76912bcef4"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "2a879c3a2cb9e6c71f1511d487432208"
  },
  {
    "url": "tag/index.html",
    "revision": "7628d28997cd623170734c6a35763ef4"
  },
  {
    "url": "tag/java/index.html",
    "revision": "b67f56867bb17608c373edfd47f84b72"
  },
  {
    "url": "tag/pytest/index.html",
    "revision": "0f5cf209345e4c9e9f14859ccd38324e"
  },
  {
    "url": "tag/python/index.html",
    "revision": "887c8ee51925332c06f18c42d83e7f6a"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "c98512a9337106d4fd09a9099c9a3c17"
  },
  {
    "url": "tag/关于我/index.html",
    "revision": "69ce4947455e3a4985117fc829a86d9f"
  },
  {
    "url": "tag/功能测试/index.html",
    "revision": "68f7b9f695e2bd64f9e70730c9cbf1e5"
  },
  {
    "url": "tag/性能/index.html",
    "revision": "e079193952a485900387fc10373f577e"
  },
  {
    "url": "tag/接口测试/index.html",
    "revision": "51b262306db28c0a9e52f105a2263b4f"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "0256de7946392f03d1db3bde4970e0b2"
  },
  {
    "url": "tag/留言/index.html",
    "revision": "af9bb107ab503e93b350a9e82a600054"
  },
  {
    "url": "tag/自动化测试/index.html",
    "revision": "fea42c9ec26742e28f80852a1f8e8c79"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "a146f469b67fc43d99092923e580d21d"
  },
  {
    "url": "timeline/index.html",
    "revision": "7085fc08b0d3cfa55fbd0e48b8b2c8a9"
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
