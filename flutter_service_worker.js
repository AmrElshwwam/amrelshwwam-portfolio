'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4333a9db1e6b248346159b1b2690e3c7",
"assets/AssetManifest.bin.json": "cb68f7521610ed450ee4ccf48d7e2bf5",
"assets/AssetManifest.json": "4abf549a5b207a74a4b78fbe14d3dc46",
"assets/assets/files/amr_elshwwam_cv.pdf": "615791f83a5bdbcc6afd7bd44006d2b7",
"assets/assets/images/amr_drawer.png": "4281854ae5e177fff97665b0e805b5f3",
"assets/assets/images/flutter_bird.png": "92743839d1c525fabfadc92614a0c861",
"assets/assets/images/Github%2520Circle.png": "10407d089820285857cea8ab41f9ee24",
"assets/assets/images/LinkedIn%2520Circle.png": "0222881405eb5470be9cbab36f5ad556",
"assets/assets/images/logo_flutter_and_me.png": "2fe43a72f6c44d8bc6f00ecbed72e062",
"assets/assets/project_images/harry_potter_app/characters_screen.webp": "6c291fc3089d3d6fbee39fb5993cecd6",
"assets/assets/project_images/harry_potter_app/check_internet_screen.webp": "8efe4ec51bf93bcd4e8651e67841b857",
"assets/assets/project_images/harry_potter_app/details_screen.webp": "5869c6c5b9ba9bbd81e10642d3ea0e41",
"assets/assets/project_images/harry_potter_app/details_screen2.webp": "32dad41659bcb580f4c25c5775c45164",
"assets/assets/project_images/harry_potter_app/harry_potter_app_all_screen.webp": "4c4f9ce2bcfcaca968c4bb0987feaaac",
"assets/assets/project_images/harry_potter_app/search_screen.webp": "0ddba0a816b35c9ee10e06658963f3f5",
"assets/assets/project_images/harry_potter_app/welcome_screen.webp": "f01998fd83b00cd2941c2233bfeae279",
"assets/assets/project_images/note_app/01_welcome_screen.webp": "baf941d37552d7bb61f994d42337688d",
"assets/assets/project_images/note_app/02_signup_screen.webp": "430885cc19d08b5e7ab7cd0250fad775",
"assets/assets/project_images/note_app/03_signin_screen.webp": "0c060f1c584424c626acb0681d8715df",
"assets/assets/project_images/note_app/04_home_screen.webp": "a1ae7f02e0de13ce969798ef521320b0",
"assets/assets/project_images/note_app/05_drawer_screen.webp": "5f1273af7a2d445d2e00924e22e0c934",
"assets/assets/project_images/note_app/06_search_screen.webp": "ad5797fe53d922cc63b4ce3f97653f94",
"assets/assets/project_images/note_app/07_search_screen2.webp": "20baf47745b1fd2f4408d713ee1b8410",
"assets/assets/project_images/note_app/08_category_screen.webp": "fad35a33763bb7dbdd4e9aed3fe34cc1",
"assets/assets/project_images/note_app/09_details_screen.webp": "767d43daab9c021e24743904d236b836",
"assets/assets/project_images/note_app/10_notes_screen.webp": "9d4de6ffe9aac10b3a3ec098424f37bd",
"assets/assets/project_images/note_app/11_create_note_screen.webp": "f4512e17438b4ad0172d0bb872677fd9",
"assets/assets/project_images/note_app/12_profile_screen.webp": "3489f315ce12f8bbd8d6b62f01f9d333",
"assets/assets/project_images/note_app/13_settings_screen.webp": "5b3dcc42d54ebd58659d4815322548cb",
"assets/assets/project_images/note_app/14_home_screen_dark.webp": "8ccc0b83aecc663e39d2f36867d48bc5",
"assets/assets/project_images/note_app/15_create_note_screen_dark.webp": "6f38774bed1dc9c3218255536af19a9c",
"assets/assets/project_images/note_app/16_create_category_screen_dark.webp": "c7e2e962252a5724d4bb6831cf7a026c",
"assets/assets/project_images/note_app/17_details_screen_dark.webp": "0a73880421a93e1227fb1400ef917d71",
"assets/assets/project_images/note_app/18_search_screen2_dark.webp": "6801b3d83e5945d35b0a3e58a7408d2b",
"assets/assets/project_images/note_app/19_settings_screen_dark.webp": "faa5eb57d505bb73cbaf932d730a3dc4",
"assets/assets/project_images/note_app/note_app_all_screen.webp": "9ef6d0c86bed296d96154fb7c780bb30",
"assets/assets/project_images/shoes_app/brand_screen.webp": "9fdf99af0b83a6939e92e12585b7eb4c",
"assets/assets/project_images/shoes_app/cart_screen.webp": "0b4df63d6d0a35f8db7ae4b179e509c4",
"assets/assets/project_images/shoes_app/collections_screen.webp": "6c234e385108416233e15350f87e658a",
"assets/assets/project_images/shoes_app/details_screen.webp": "a9ab2fbab110812ea4657f4021921e86",
"assets/assets/project_images/shoes_app/favorite_screen.webp": "9a32c7c1f1f4f64f064f1f25318395f7",
"assets/assets/project_images/shoes_app/home_screen.webp": "a1809ff8788acacf1502bb663e24f0dd",
"assets/assets/project_images/shoes_app/profile_screen.webp": "0b0aa9c1475032dd5b2f47572ae3514f",
"assets/assets/project_images/shoes_app/search_screen.webp": "0f13bfe63de15108470ffc972eb870c8",
"assets/assets/project_images/shoes_app/settings_screen.webp": "b9c48fd73cbacf6782d17518d0cacc73",
"assets/assets/project_images/shoes_app/shoes_app_all_screen.webp": "de921586a1521418e4c965c029be45c6",
"assets/assets/project_images/shoes_app/signin_screen.webp": "aaf16766ce03074f76f4e0fe4ce1dce8",
"assets/assets/project_images/shoes_app/signup_screen.webp": "c611378fc664c3dc8d01ad35c82a475f",
"assets/assets/project_images/shoes_app/welcome_back_screen.webp": "dd237e9f442f6067236a0e40e129a3c8",
"assets/assets/project_images/weather_app/weather_app_all_screen.webp": "d5b1040afbea9145cd32d759da87b809",
"assets/assets/project_images/weather_app/weather_screen1.webp": "e0f21e50f881d41ea62da4909e10c0ac",
"assets/assets/project_images/weather_app/weather_screen2.webp": "824f24e243bcb0b2a28979693e3b4b06",
"assets/assets/project_images/weather_app/weather_screen3.webp": "659407a72200540f49f121e58765bdcc",
"assets/assets/project_images/weather_app/weather_screen4.webp": "dabc027aec877e69e1445c84d7ae463f",
"assets/assets/project_images/weather_app/weather_screen5.webp": "564a39c9f415255bea1cecf5f618aaf6",
"assets/assets/screenshots/portfolio_preview.png": "132953e4fe9069a64eb96a3e306a16ee",
"assets/FontManifest.json": "7fa218417e9ff03e0a7253dbeb62f080",
"assets/fonts/MaterialIcons-Regular.otf": "f8c10989e375811c5d976f54b54d6ec2",
"assets/fonts/Mogra-Regular.ttf": "6ea4f1b3bd1564b331f6189049ce5120",
"assets/fonts/Vollkorn-Medium.ttf": "2a55e806fa53604f3e1cc9f3ddaca4cd",
"assets/NOTICES": "df4646bf91579672e3e149395fa97fb2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "20dd9820274788664d2b25518971d0c3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "0943674603e0ddaf83c8396e1a014349",
"icons/Icon-192.png": "9d10f132efb92cfa0f974a9a84f360ba",
"icons/Icon-512.png": "20dd9820274788664d2b25518971d0c3",
"icons/Icon-maskable-192.png": "78b3d08821b9933fb31463d99649dc0a",
"icons/Icon-maskable-512.png": "5c96399be36642127a6e6bb24f6a3932",
"index.html": "3cc4a2379488482abdb102cdd9960366",
"/": "3cc4a2379488482abdb102cdd9960366",
"main.dart.js": "c36f6e4d40c4e76c729a79f6e87881ff",
"manifest.json": "308ce0ea276e66990e7005f61021e969",
"version.json": "d351ae99551ba008177d734c54348c46"};
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
