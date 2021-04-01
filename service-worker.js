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
    "revision": "e8efcb511bf4f2150ae266a861baffe2"
  },
  {
    "url": "about/me/index.html",
    "revision": "445f275e04b011ff7c8aca7f918e5ed7"
  },
  {
    "url": "about/resume/index.html",
    "revision": "9410781a44fe82c1606dec4aedce4b68"
  },
  {
    "url": "appimg01.png",
    "revision": "6ed1b5ebbb40e784a150a94582387507"
  },
  {
    "url": "assets/css/0.styles.465de548.css",
    "revision": "c63c854c071bbbf54e2f5fab7a10031f"
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
    "url": "assets/js/1.f710b6d0.js",
    "revision": "05b4c5c84b99e7ab71424a004b883093"
  },
  {
    "url": "assets/js/10.a79147ed.js",
    "revision": "1f9781b7da7a5a3b6c95ec4e0571529e"
  },
  {
    "url": "assets/js/11.8822a8d2.js",
    "revision": "214a2a15d07f46dd60c5f7fe29a0e3e7"
  },
  {
    "url": "assets/js/12.23774a4a.js",
    "revision": "e05c37cde2b8ad7ada14ccf74e03e1e7"
  },
  {
    "url": "assets/js/13.b2b0bf0b.js",
    "revision": "91cdb66a402fd2f50927388204a679c8"
  },
  {
    "url": "assets/js/14.b067a24e.js",
    "revision": "51b585c61e8f6986b6ce7d6531fbe215"
  },
  {
    "url": "assets/js/15.ef3f93c8.js",
    "revision": "6de7e188527fe979e926d51d3b3c6ae6"
  },
  {
    "url": "assets/js/16.d4c996fb.js",
    "revision": "4f124ab2a7dceaf319606b8fa8db2e85"
  },
  {
    "url": "assets/js/17.8719b6f8.js",
    "revision": "823e108f476a40d7c09a8039282d7d69"
  },
  {
    "url": "assets/js/18.19bd528a.js",
    "revision": "e7f2d0bd278a9e4f539e1c53be975994"
  },
  {
    "url": "assets/js/19.3b94cb1e.js",
    "revision": "232f2dbdfe3019b3f795712974e56c10"
  },
  {
    "url": "assets/js/20.5ed6689a.js",
    "revision": "52720e9d0425d27a59670e31cd7c6acd"
  },
  {
    "url": "assets/js/21.30404496.js",
    "revision": "5a5f182dd6d924335d42169912cab38c"
  },
  {
    "url": "assets/js/22.a19f8a9d.js",
    "revision": "825f4f1a8309c515d8102e8cbc3dc0c9"
  },
  {
    "url": "assets/js/23.08e5b136.js",
    "revision": "587d2ef35ba2860183c82131ea755e5f"
  },
  {
    "url": "assets/js/24.23857a42.js",
    "revision": "10964ad481fe2fd296aaba32ea01f9d1"
  },
  {
    "url": "assets/js/25.e995bab8.js",
    "revision": "8c33f19552de43c109ed568c293ebbae"
  },
  {
    "url": "assets/js/26.6f18c0ad.js",
    "revision": "67e56bf379297b2ecaf64f1bc7d96208"
  },
  {
    "url": "assets/js/27.1815eb75.js",
    "revision": "1a7a7e02cde9ba89d171655d7326730e"
  },
  {
    "url": "assets/js/28.cdd9f3d3.js",
    "revision": "33cdb3e836491addd85760508bb1dc10"
  },
  {
    "url": "assets/js/29.dbdf985f.js",
    "revision": "0ce286e6e80a059180659b24eb0eef2c"
  },
  {
    "url": "assets/js/30.6a962acc.js",
    "revision": "464267056979e9021d2c3dbbb6e3e704"
  },
  {
    "url": "assets/js/31.ddf172d2.js",
    "revision": "d1ec218dc2eb555038f0e9aafed4e4b2"
  },
  {
    "url": "assets/js/32.12ed3c51.js",
    "revision": "cade3a6c1ca1e0219c1f4561ead5f687"
  },
  {
    "url": "assets/js/33.00d40d41.js",
    "revision": "2649c21caa468c3bc4d62ec94260e978"
  },
  {
    "url": "assets/js/34.f5238c0a.js",
    "revision": "68664f1e646d17af46891332af6f83ae"
  },
  {
    "url": "assets/js/35.fbb79955.js",
    "revision": "38bd200f1125afe1be8c19d00fb8b71b"
  },
  {
    "url": "assets/js/36.cd5e84db.js",
    "revision": "737a035a9087bd9da706e69db122de7d"
  },
  {
    "url": "assets/js/37.da897adc.js",
    "revision": "538964b881f0268f8da200d6393507df"
  },
  {
    "url": "assets/js/38.a3c5993f.js",
    "revision": "be729ce5c9ff6516bf088cc2381e7f3d"
  },
  {
    "url": "assets/js/39.cafe106f.js",
    "revision": "883a8dd1070f88f14cc996cd7c60ef4e"
  },
  {
    "url": "assets/js/4.9a5e4985.js",
    "revision": "3c9e62d8b7295e446c37fc5fdb0fc8d5"
  },
  {
    "url": "assets/js/40.fa6958a9.js",
    "revision": "2417d98716aad41a892e00e414f2914a"
  },
  {
    "url": "assets/js/5.c0c2949a.js",
    "revision": "7080c9332bb308b5dd9556a0ac7d05b6"
  },
  {
    "url": "assets/js/6.f5c99c47.js",
    "revision": "e909633b343fd82aac86283d2ee761c8"
  },
  {
    "url": "assets/js/7.0c76452c.js",
    "revision": "d97692ac7de305275b5398bb39bfae76"
  },
  {
    "url": "assets/js/8.967b611d.js",
    "revision": "4394ecc540b935fabb82460765b8f94b"
  },
  {
    "url": "assets/js/9.c64fd2c1.js",
    "revision": "33cb77923a297a93c25f437c429603d7"
  },
  {
    "url": "assets/js/app.804bc45c.js",
    "revision": "b4cee0f1b184a10485e11cd6d05b8669"
  },
  {
    "url": "assets/js/vendors~flowchart.fab832fe.js",
    "revision": "5d16a7e6e27a584072d4bc58b18fb4e1"
  },
  {
    "url": "avatar-scan.png",
    "revision": "b3ef283365d57b1e5a9197ce28f3108a"
  },
  {
    "url": "blogs/功能测试/2021/022601.html",
    "revision": "dc860437594cae4fefff63099b9232c4"
  },
  {
    "url": "blogs/接口测试/2021/012401.html",
    "revision": "613e991f5d69893817f7e31c1afac5d0"
  },
  {
    "url": "blogs/生活/2021/012401.html",
    "revision": "e8d5e469c60baab2850480155ad25fd7"
  },
  {
    "url": "blogs/性能测试/2016/121501.html",
    "revision": "7bf30f14840b7861ae59fa4daced4c79"
  },
  {
    "url": "blogs/性能测试/2017/092101.html",
    "revision": "5df0a2964abdc98fa06f1326fe2373e2"
  },
  {
    "url": "blogs/自动化测试/2021/020101.html",
    "revision": "8718a4ae49f892163c0b2fe3fadf305d"
  },
  {
    "url": "blogs/自动化测试/2021/020102.html",
    "revision": "126560cd0878306203d6f9daa7f755e7"
  },
  {
    "url": "blogs/自动化测试/2021/020401.html",
    "revision": "1c37a6c3dc811bfffc521e2fed609d9d"
  },
  {
    "url": "blogs/Java/2021/012301.html",
    "revision": "f6ddca446d6a896af85134f15e963b35"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "47059d503b918cdec93576de7a4aa5ed"
  },
  {
    "url": "blogs/Python/2021/012301.html",
    "revision": "f9edfe66290a85781ea95eb0cc805d2b"
  },
  {
    "url": "blogs/Python/2021/012302.html",
    "revision": "8fb35b90af06271899785e103043c571"
  },
  {
    "url": "categories/功能测试/index.html",
    "revision": "31b46514661a1b51d788553d8bd6afea"
  },
  {
    "url": "categories/接口测试/index.html",
    "revision": "3f038f7c5d1c885b01ede617bd132473"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "1baa13cd65534a7512294cd62ffb41ed"
  },
  {
    "url": "categories/性能测试/index.html",
    "revision": "22916861493c00b804b1195eea2195dc"
  },
  {
    "url": "categories/自动化测试/index.html",
    "revision": "8612fa88dd7c772a9bf68fc3de83a512"
  },
  {
    "url": "categories/index.html",
    "revision": "b4dc57bc5b1c2c24914bf6e724fd7908"
  },
  {
    "url": "categories/Java/index.html",
    "revision": "8105490f1360774e0c75c79717d39bc5"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "a68fac19e264c9325190724d833b0b2d"
  },
  {
    "url": "docs/其他技术教程/easyUI.html",
    "revision": "032bc1b7e1db9313928bd976bce345b1"
  },
  {
    "url": "docs/其他技术教程/index.html",
    "revision": "14fe267860632a434918ff0b4451497f"
  },
  {
    "url": "docs/其他技术教程/markdown流程图.html",
    "revision": "6792e4e1826424985e1281267487cd7a"
  },
  {
    "url": "docs/python教程/index.html",
    "revision": "1d39919bdeefbb64fda44e5551805227"
  },
  {
    "url": "docs/python教程/push_code.html",
    "revision": "6a1e7013a787ccff133f2c4d0d802eac"
  },
  {
    "url": "docs/python教程/python列表.html",
    "revision": "3308e571b1c89be4f73d3f70391caa0e"
  },
  {
    "url": "docs/python教程/python数据结构.html",
    "revision": "bf771cfc4a1ff46d38b3468bb641aa94"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "29f4255d5168f9c04f82575ed6d356e2"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "0990fab0ed8ae8437f08e0429e5e50ea"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "5980a76a83dbe518f1801ebd57825f04"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "437f0f5c7be85860ba927588d36570cf"
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
    "revision": "c44b061a4859432dd691b73d455b8f4b"
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
    "revision": "f4cbf38bd7daa293ac2e482fe11716ba"
  },
  {
    "url": "message/msg/index.html",
    "revision": "e1eecb3c90700e88d3c7e9a24d2dcd8f"
  },
  {
    "url": "tag/功能测试/index.html",
    "revision": "46920fe7c9e82b1142b5e9fb547e2e26"
  },
  {
    "url": "tag/关于我/index.html",
    "revision": "4d4dbecbbba3acc4f04385c93613cdf0"
  },
  {
    "url": "tag/简历/index.html",
    "revision": "dec273a6b082675882ec30ec274d077b"
  },
  {
    "url": "tag/接口测试/index.html",
    "revision": "b629c2dcef670ed3ff0d9f8d2ee2aac1"
  },
  {
    "url": "tag/留言/index.html",
    "revision": "2cf651c114931c3786eba647b2eed3dd"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "7c0a61abe4ebc9a811ff577a075ed4e9"
  },
  {
    "url": "tag/书籍/index.html",
    "revision": "5763fe999633ce439a0d42b95e145eac"
  },
  {
    "url": "tag/性能/index.html",
    "revision": "7ce180d0224b2a3a1c8e4e222cacb496"
  },
  {
    "url": "tag/自动化测试/index.html",
    "revision": "077f760d773b9182cfa558db2e9ec790"
  },
  {
    "url": "tag/app功能测试/index.html",
    "revision": "b471f5923d00fd91714188abe31613f7"
  },
  {
    "url": "tag/bug/index.html",
    "revision": "0deb12df2bbce0b46eeae1e125215efa"
  },
  {
    "url": "tag/index.html",
    "revision": "8f3fafd2d850b510dbae2903709108b1"
  },
  {
    "url": "tag/java/index.html",
    "revision": "158a3a3f8a66b3076375bd8c35f782f0"
  },
  {
    "url": "tag/python/index.html",
    "revision": "918d9c1c5fd2c7527fb7e280bb832f07"
  },
  {
    "url": "timeline/index.html",
    "revision": "eb850158ba2b927af0c3c62f581f8765"
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
