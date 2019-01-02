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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "081fb40fba115c3717cf6095913ddb77"
  },
  {
    "url": "assets/css/0.styles.77153cde.css",
    "revision": "609189c98ff8a799e4707c26d8743dc5"
  },
  {
    "url": "assets/img/oauth-app-github-01.png",
    "revision": "b230da47f5b38638ec6abf553d82035f"
  },
  {
    "url": "assets/img/oauth-app-github-02.png",
    "revision": "b99a2e857496c04c22e7df539994d4d9"
  },
  {
    "url": "assets/img/oauth-app-github-03.png",
    "revision": "94c83f124d252f1c37a2b124c2bbdc0c"
  },
  {
    "url": "assets/img/oauth-app-github-04.png",
    "revision": "5374318990b0f727e7f299e4c72d5d56"
  },
  {
    "url": "assets/img/oauth-app-github-05.png",
    "revision": "3be9b5c35e2ba851200d51c2c36df057"
  },
  {
    "url": "assets/img/oauth-app-github-06.png",
    "revision": "fdb89ea0189656eae03bde61734c5463"
  },
  {
    "url": "assets/img/oauth-app-github-07.png",
    "revision": "953564d04d90eeee7d0c2122c08768e6"
  },
  {
    "url": "assets/img/oauth-app-github-08.png",
    "revision": "02e81e28e30713265f2fd7995b02568f"
  },
  {
    "url": "assets/img/oauth-app-github-09.png",
    "revision": "90295ceb88265faa5b3ce78f75b9b997"
  },
  {
    "url": "assets/img/oauth-app-github-10.png",
    "revision": "4dbc4b1f4c4bc72bb3f8fdbe1433f035"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a71d18bf.js",
    "revision": "bb69a224f4b63f5715e5e14712f6fc91"
  },
  {
    "url": "assets/js/11.a48d2166.js",
    "revision": "3c15099f6bb4c838a7606f0dfe4f74ab"
  },
  {
    "url": "assets/js/2.2add419e.js",
    "revision": "2d557a7800569de772481e3769f42b93"
  },
  {
    "url": "assets/js/3.39b6553b.js",
    "revision": "0306f83a692a44989b8b20f3df99c4d9"
  },
  {
    "url": "assets/js/4.8770e343.js",
    "revision": "cc92a155d44b75aced1ca691256c70b5"
  },
  {
    "url": "assets/js/5.6a5b0617.js",
    "revision": "4b509d1ad93b7b9bc7e14c21fbb28022"
  },
  {
    "url": "assets/js/6.630b5ec1.js",
    "revision": "3abf9b0ab2d3b61942a6ebc544896976"
  },
  {
    "url": "assets/js/7.f2405e1c.js",
    "revision": "67db45315934d3ebc1c7b604a4e8008c"
  },
  {
    "url": "assets/js/8.230d400d.js",
    "revision": "4d34a08781f28a0035a4a6575559d422"
  },
  {
    "url": "assets/js/9.65c41435.js",
    "revision": "4ceff8631b68b681fbb6ce88a318c3dc"
  },
  {
    "url": "assets/js/app.4be7523e.js",
    "revision": "bf3b16f5a47c2b958756a7559a43a75a"
  },
  {
    "url": "guide/index.html",
    "revision": "8b7693e7df262fdae7abf3e0ea4e23c5"
  },
  {
    "url": "index.html",
    "revision": "854c660e55fbc75db0c5931e23cd43d0"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "025a5cbab6f3188140a427825d5a1e2a"
  },
  {
    "url": "zh/index.html",
    "revision": "4e86520a772490d0ba75aa94a050af34"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
