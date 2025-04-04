'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b10000dabf5cfefcbfa59dc5067b3f15",
".git/config": "143d38416d9f4934351c53b44c8fb946",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bd852247d5a1a4aa0e6dec869e277553",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7d0d1523d357178a05a7cfa213edaf19",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fc00b2d79814c343ac656b829b92e4c5",
".git/logs/refs/heads/master": "fc00b2d79814c343ac656b829b92e4c5",
".git/logs/refs/remotes/origin/HEAD": "764b708c9f3fb18d21da29e8d21a8648",
".git/logs/refs/remotes/origin/master": "0c03a1306010f65f5a9d6f136b2d8a26",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/dabd63e35bca696b329f436099397183255536": "a8a5e322ca91655dd6b694661ae71d3a",
".git/objects/07/38c908ac63aa818c8a3b645acd3a10684f1111": "e0402838132904118bb8cef62249ebb3",
".git/objects/0c/c4f4affc05b21317ecd34f5204f9f34dae45e5": "8b3ef9441b051bb823fea1c20bce262e",
".git/objects/0e/547335c87b02c9d57dab57f194978331d45b1c": "c3a4599794eb73ea961e9a3236aae5a0",
".git/objects/0f/987118726e2c77ac53380aa755349b3204800f": "c2841f1b95d2cefa1b8bc0dc6e95d908",
".git/objects/19/52d67ac57b1e43b9dd3423d6fe6fd4302236c6": "386bef5bd701100edba84449fa7c29d7",
".git/objects/28/f9d07f3ff615340d43ec989a0a10e83d692e9b": "0c1ee47f06db8ade6ab5cdb9835db34f",
".git/objects/2f/229e38b1aaf68ce63dca0692530d0b9a3df7d6": "1607aeabd85fdb5506e830c1536a7668",
".git/objects/31/27291a35769f9d01a296f4be431b57f89fdf0b": "e03c7c5f3583c870880b53b9f102846d",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/c7fc6eb28acb4ada1334d8d970bff7b9474194": "8be0519da30c095ab8015e379d1c3e5b",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/7353712f8dd182d139415ee47d2d4ab00db2e0": "4151c2c80d309fb27aaab6be66a6b6f4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/13e8d8cd88994e0c8518e327a1dbae108d8d96": "b9dc6a8a26699b3745e34ec255c9d3be",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/494ed6faebf8250d666e90b618165a8d4eb913": "08d2df8d8f6541f73e37f0e85fbb3180",
".git/objects/54/beb85469c18dcb1e37d7404f046beb2e911c88": "075e3d7a80d85423e9167749e3aa1fb0",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/9c50b72208fcf6f75856834164cb184eefca2c": "fe3302bc7569b94c01a74bd4e61645c5",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/a865a0d17659ad93f2cb13cd78a4d15f1dff7f": "cc2e20ca7607c577281da001b71bdd33",
".git/objects/78/c4f78c96ee9dcd8b017f0a72f77d182784abf3": "9ff6132f8b525a58c84805acec6b0f7d",
".git/objects/7c/490e9da5349ef7681ee962a2bfc968aa1789d1": "318b1fda2935833e01a49a401e89b84a",
".git/objects/83/f2db2fc8e836dd3b8d8dd79ab0985bd98c9981": "e5eee1221433bad3f96f1b6adcabe434",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8d/bc9cb7badc84e3c47eef831475bcb77b574860": "cb57b39c657b7f159a48310ee2a1024a",
".git/objects/8e/91ea3d2bba7f723ef613c92b22b7ce151e5500": "aa39b5de3713a6dae78909ba1089b727",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/9d/7c426296230f6b59318e2e6708555ab9bb2833": "676b9810c59200ea815cad4df84f3c2b",
".git/objects/a0/232e75d1e52013ede1138786968d0d56befe67": "e768e8b45cca1bc50105f395478aa984",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/22c97aa71a9d49ed09db53ca6a5eee7823e89e": "1ea56b791e5873a99695ea392d973c3b",
".git/objects/a7/81d441bf96d779d033901768320aa6250d29c3": "fc99fba18854e245b164b0ff4edb0518",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ae/bb5c83d44b04fce6c0698ddf03f037e13dda16": "5b9da525b2c2a43f36d8fc336bf11998",
".git/objects/b1/0b9cf9412ee520fa77a779eb1379897e79f235": "162792471e904103a0723dc7c222a2e6",
".git/objects/b1/cbd24b3b0d4e3cbe1e4557f2477962f79e20af": "b21310ef4035f06cc55dec4d0d723eb9",
".git/objects/b6/9db003d6ac8bf3bc8a25234a88615c02b9b149": "98d31cb53da0b03693de60137b721732",
".git/objects/b9/68f37c3408e3fe0aeae954af79fac4306de69c": "3d02708a060471c73b24f69cf4f625a1",
".git/objects/ba/8227ff9192bf1075c780b71424dcf9942c81b7": "3bbf471c8d517c764a2d4c8c74d757d5",
".git/objects/bc/423b335785b771a33265df568c2da6f2de69c0": "63fcc9f8c825a50c0b944753de597bcc",
".git/objects/c5/f3bfc780e914c101adbc2daf7a2f900df5a5dd": "d67e2d14eb0142196940bb09441a7f27",
".git/objects/cc/df58cceaf1dd6bea62fb2d07916ecbb56a63bf": "5e45af8ec913b6e5260f44c1b82b78a2",
".git/objects/d3/939ad92f8e445d00c8929b270191da81c8d085": "317945ce241084ba1a6efe719832da9d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/090d55370b200460a9c4e3614c4737a6ca7355": "29c638e121345e0272436d3b7b50f031",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/ORIG_HEAD": "c03b83e2788aaa4dc78fd65b393ad124",
".git/refs/heads/master": "b06ea7c0899a0fe2e901179f730a8cc7",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "b06ea7c0899a0fe2e901179f730a8cc7",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4f1aa92d90c454925930b6916e4d72e4",
"assets/NOTICES": "f75ce13e002928c98f9ba2f03d18e8ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "caca23ab2958583947325609333c8e2d",
"index.html": "2e5a42ad83839b6d2b1d2ee0309b6dad",
"/": "2e5a42ad83839b6d2b1d2ee0309b6dad",
"main.dart.js": "6c0801184aebb2a0cfa3ffb1dbd3e5b3",
"manifest.json": "7d61cb465aea7073c58baa81a3ed203c",
"pdf-processor.js": "79ba9962295d2fa2f8fe5c3c1288d096",
"pdf_wasm.js": "e1a45f75681f64c68e91f5847324d45c",
"version.json": "ebd6a610cac0b489b00b91d9217dfb6c",
"wasm-worker.js": "f1c76a1687b89ebdf1c9b5dffb8115a1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
