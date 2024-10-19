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
    "revision": "56bf8c0dc3b60dbdfad5c0fea1ed4d96"
  },
  {
    "url": "about/me/index.html",
    "revision": "496e6e137308da28cb96e3d4275672b9"
  },
  {
    "url": "about/resume/index.html",
    "revision": "72165b3129466e47fd0842fa789068f9"
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
    "url": "assets/js/11.59641cdd.js",
    "revision": "dc3f3c4e4bffae1099f9f5e81ba5b3ff"
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
    "url": "assets/js/15.37a80309.js",
    "revision": "569200871d75bab97b5f7bd38effb0e6"
  },
  {
    "url": "assets/js/16.82f0bf2e.js",
    "revision": "3fadf073ad6cd8a864ed943da1ff6921"
  },
  {
    "url": "assets/js/17.5fd28215.js",
    "revision": "cea49f8e0d99310aa5a3b00af48d9527"
  },
  {
    "url": "assets/js/18.46b19b7c.js",
    "revision": "c2e1d7c99157891d772e427d50b17aec"
  },
  {
    "url": "assets/js/19.7491f126.js",
    "revision": "7229380285ac959159d40f13ef9b3a40"
  },
  {
    "url": "assets/js/20.1fc572ea.js",
    "revision": "d6c31b6631e5d5d34264880a3bf319b3"
  },
  {
    "url": "assets/js/21.f9d0ae15.js",
    "revision": "a0b860eaa6e7753569be382695bcf816"
  },
  {
    "url": "assets/js/22.e2404c9d.js",
    "revision": "876edaa5b65f207993260909c62e5ff4"
  },
  {
    "url": "assets/js/23.ec71b46c.js",
    "revision": "ee1cb32d717ac055d990564ea242d903"
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
    "url": "assets/js/33.0621f709.js",
    "revision": "4a81eb8cf4ee73fbb4747ab3e1e687fa"
  },
  {
    "url": "assets/js/34.b8303068.js",
    "revision": "141834bdc7061edd7a619d678442a6bf"
  },
  {
    "url": "assets/js/35.8dd1363c.js",
    "revision": "c39e58c677f1fab37e54c7e1e1951570"
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
    "url": "assets/js/38.ce34ebd1.js",
    "revision": "8bbf8a27f2c5c24b0c9fa94937be3c34"
  },
  {
    "url": "assets/js/39.7146d4ba.js",
    "revision": "ad0a5ade3960ccd18d346e2b302fe47f"
  },
  {
    "url": "assets/js/4.93737be6.js",
    "revision": "b8f7b4a8e5c6bbb1bcbf5f4df4e48ad1"
  },
  {
    "url": "assets/js/40.7365d942.js",
    "revision": "550c7a004759d8a28b675c3cd1015bcc"
  },
  {
    "url": "assets/js/41.add83486.js",
    "revision": "80390374616bed217d7c52779b850cf6"
  },
  {
    "url": "assets/js/42.d34adbd3.js",
    "revision": "a8f007ecb4ae1123dc337d35e2826af4"
  },
  {
    "url": "assets/js/43.3d54c6c8.js",
    "revision": "b67992cb72d52d27707a17f67955260c"
  },
  {
    "url": "assets/js/44.544de8ce.js",
    "revision": "ba53760fc34dc63b984f2e30c82afb69"
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
    "url": "assets/js/50.735d79c2.js",
    "revision": "f009b972a727186b06b92ce45cf5549f"
  },
  {
    "url": "assets/js/51.fde4c099.js",
    "revision": "6f04efda10b744010c64bdc457dd959f"
  },
  {
    "url": "assets/js/52.fb31958a.js",
    "revision": "12e5aaf4b095753724fbc75e158fa7c4"
  },
  {
    "url": "assets/js/53.1d5906c6.js",
    "revision": "3964b81d6348aef3bd1e8ed51131ebe2"
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
    "url": "assets/js/8.88d5ef3c.js",
    "revision": "52992e3f05f5aba5e75d32c3d7982872"
  },
  {
    "url": "assets/js/9.a5abba7d.js",
    "revision": "c47ad882266e08a34996847edbf6efbd"
  },
  {
    "url": "assets/js/app.f3cf2b60.js",
    "revision": "89757d105b49aa548947f69cbbff3004"
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
    "revision": "799f11c45d4e31cb597d09695b130899"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "b9a479797c0069de7205fa141fc3d1bb"
  },
  {
    "url": "blogs/Python/2021/012301.html",
    "revision": "c8890d2d3076d0b20b6e6c644b6efb57"
  },
  {
    "url": "blogs/Python/2021/012302.html",
    "revision": "91012ad72914e4215669da90cb2c325a"
  },
  {
    "url": "blogs/功能测试/2021/022601.html",
    "revision": "14e75c719bed963fc2da793b0e1809ca"
  },
  {
    "url": "blogs/性能测试/2016/121501.html",
    "revision": "90ef546c36ebfce1b0f1243a18c096b7"
  },
  {
    "url": "blogs/性能测试/2017/092101.html",
    "revision": "6e2ae769412699260b19d87eea085923"
  },
  {
    "url": "blogs/接口测试/2021/012401.html",
    "revision": "a4189e3bba676a9cec5cc94651f28180"
  },
  {
    "url": "blogs/生活/2021/012401.html",
    "revision": "f25912b40c264a177481bcd55d0b62b2"
  },
  {
    "url": "blogs/自动化测试/2021/020101.html",
    "revision": "6df2f3cef54f51ee23a41a302602f854"
  },
  {
    "url": "blogs/自动化测试/2021/020102.html",
    "revision": "0a07f4ebb94b30ca8061424a806933aa"
  },
  {
    "url": "blogs/自动化测试/2021/020401.html",
    "revision": "f5c3b790bfb88443cdfa7149b4875c17"
  },
  {
    "url": "blogs/面试题/2021/081401.html",
    "revision": "6edcb894b6d486efc4a1241a9d48897b"
  },
  {
    "url": "categories/index.html",
    "revision": "b5d06a617c44f3291510e05e2ddd2624"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "5e43d33224a56deb0f489265d6a680bf"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "3bf30d0a039555fae9ccd30bec5d1d7d"
  },
  {
    "url": "categories/功能测试/index.html",
    "revision": "e3a303ecf65b04f73f602dd3694ec632"
  },
  {
    "url": "categories/性能测试/index.html",
    "revision": "eb1f80f1cca4e0727882ff3f36c42ac2"
  },
  {
    "url": "categories/接口测试/index.html",
    "revision": "f58820d880fa64790b61c4092faa8130"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "858163941470881cfa4aaf7d23092ae0"
  },
  {
    "url": "categories/自动化测试/index.html",
    "revision": "e4181c1e9f3ecd9edd5129462e4f073b"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "63abd79cb77a49903f3c3d77b17d4404"
  },
  {
    "url": "docs/pytest系列教程/01-pytest概述和安装.html",
    "revision": "66134d995b282433d3d91e2b6dd6490c"
  },
  {
    "url": "docs/pytest系列教程/02-pytest使用.html",
    "revision": "8807794886d5bee1174ae2cbbc056835"
  },
  {
    "url": "docs/pytest系列教程/03-pytest执行方式.html",
    "revision": "a7a65313b2fe78200d89aaa890fc3246"
  },
  {
    "url": "docs/pytest系列教程/04-pytest运行规则.html",
    "revision": "8130dd1b6695c318ad112e6ed008ae39"
  },
  {
    "url": "docs/pytest系列教程/05-pytest自定义运行规则.html",
    "revision": "7474c42cc4d44df4ccaf73a309cbc902"
  },
  {
    "url": "docs/pytest系列教程/06-pytest标记.html",
    "revision": "75f66e941627473b428c153db78dd3b1"
  },
  {
    "url": "docs/pytest系列教程/07-pytest数据参数化.html",
    "revision": "a79f9116fa4539a8eae2801212c18f92"
  },
  {
    "url": "docs/pytest系列教程/08-pytest常用插件.html",
    "revision": "b734a1d65ffccc62c36728132e6b7767"
  },
  {
    "url": "docs/pytest系列教程/09-pytest案例实践.html",
    "revision": "b2e4364ddd4a7d575e66a5513c2ef8cf"
  },
  {
    "url": "docs/pytest系列教程/index.html",
    "revision": "fd66ab0f2fb13f1c94297784b94b982f"
  },
  {
    "url": "docs/python教程/index.html",
    "revision": "0e2a217c0c8773f64409b334605ebe52"
  },
  {
    "url": "docs/python教程/push_code.html",
    "revision": "b7527afe5d9bb889f77a1569512a8647"
  },
  {
    "url": "docs/python教程/python列表.html",
    "revision": "ffff4c2e9ff91a9a3106d5bb65529d78"
  },
  {
    "url": "docs/python教程/python数据结构.html",
    "revision": "c4cd876cb963a8d9d50234b9fab813e6"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "b6fa72189c4957561b809de24450e819"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "71bfeadf41fcd7020b4f6d501ce55411"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "709be56943c0bbdf086e180ba0756903"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "1ad34f5e72dbdb659437914f857126b9"
  },
  {
    "url": "docs/vue技术教程/easyUI.html",
    "revision": "9d127b5c187e958d631dfc3930a43a77"
  },
  {
    "url": "docs/vue技术教程/index.html",
    "revision": "b0350580bc2a373d344f1e8fdf95194d"
  },
  {
    "url": "docs/vue技术教程/markdown流程图.html",
    "revision": "f40aa6237917c67721c263e441f0c86c"
  },
  {
    "url": "docs/web自动化测试教程/01-自动化测试概述.html",
    "revision": "4dce330b0f547930cc130efe2b92cd4f"
  },
  {
    "url": "docs/web自动化测试教程/02-Selenum核心技术.html",
    "revision": "3bb7f89367c235959f89c7e412a39c72"
  },
  {
    "url": "docs/web自动化测试教程/index.html",
    "revision": "4ce558481ebf866fa5d5b2c06477de55"
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
    "revision": "6611d295daf064566fa41199c1625318"
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
    "revision": "64a34ad73c5e6f27274640cf7eb37752"
  },
  {
    "url": "message/msg/index.html",
    "revision": "765f50dab89c6149ed4cf656cea5c529"
  },
  {
    "url": "tag/app功能测试/index.html",
    "revision": "d4db7089d90fa7be8a77805d34c202b0"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "45207dd019899add4bc7a46298ea4754"
  },
  {
    "url": "tag/index.html",
    "revision": "aea10f2bc78f4374db47ccb701955f9f"
  },
  {
    "url": "tag/java/index.html",
    "revision": "12d64ad12a4eb68254f3650657cf6e6f"
  },
  {
    "url": "tag/pytest/index.html",
    "revision": "b16489b2e3ceb8f42dd0128c0f0898b7"
  },
  {
    "url": "tag/python/index.html",
    "revision": "a27a8e7e2cb1e5b2f745aef44ed471f0"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "ef0d450686fc45c91e656059d15f6f3d"
  },
  {
    "url": "tag/关于我/index.html",
    "revision": "9d59fa82ad0c87f48805c383e470bd8c"
  },
  {
    "url": "tag/功能测试/index.html",
    "revision": "0104b16a7784a73a5648f529a87ef49d"
  },
  {
    "url": "tag/性能/index.html",
    "revision": "a9bcd17733d520fee0589c2bd929f6b9"
  },
  {
    "url": "tag/接口测试/index.html",
    "revision": "3d25a867c854cbfa5e651f224037925a"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "59b08850630ccd27e9e17ab74e967324"
  },
  {
    "url": "tag/留言/index.html",
    "revision": "79c73635d3f910a6003ace97fea77b6a"
  },
  {
    "url": "tag/自动化测试/index.html",
    "revision": "330f1ea5950f94192e2ba9c3b8a1f4b5"
  },
  {
    "url": "tag/面试/index.html",
    "revision": "e51aa241fcfc8eb25da27069ff67cef4"
  },
  {
    "url": "timeline/index.html",
    "revision": "7c938dcc250f07b98b93aa3554a91d9a"
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
