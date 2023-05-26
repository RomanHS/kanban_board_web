'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d41d8cd98f00b204e9800998ecf8427e",
".git/config": "eff39684c98c0e5ab6ac22adc6ccbbda",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "30555c043cf98b0de947fe8c0b0f24b8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3c7fb43de8b2eb3471da8e6ada0e2396",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2dbe6cdab05a4a0bcb9a6bf0e7446536",
".git/logs/refs/heads/main": "2dbe6cdab05a4a0bcb9a6bf0e7446536",
".git/logs/refs/remotes/origin/main": "afb0b762d2096fdeed1d02acef1ff12f",
".git/objects/00/55d3c864d71f610cea875ec2626ab590dd8523": "9a74c554c183505e9a7d3f14538af285",
".git/objects/03/9fddbb8607dee8af85758dcdf9e7b048d929ef": "60b80d53bbbd4150e8baed49669aec27",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/7d5512e323a47b23c55ebfcf6af74baec9a511": "b3198cb138e6fea3424b926b06ad1f01",
".git/objects/07/daf3f5452cb1a8deac276034eecad8ef34d2c8": "6f92154d1a31cf9d4f5455fc01f66298",
".git/objects/0a/07fc0c9724e87f9e64a566448e355ec14fc096": "87910b378e2f4ad2455ee66581be4132",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0f/399387d82ee6f80724bdd63f0efafa379b06a8": "6fe0bd42ebbb0fa877bd793db052c019",
".git/objects/14/2736d33a1f8e328e16b29a1098c14243b94b3c": "145a89365ea6a44fb534e5dcd43c263e",
".git/objects/14/64ebef21dbe13f446375b67cc82bc13a39c7b8": "61375dafd14d42e5a13b28fd58e28fc4",
".git/objects/14/9abc2abb937ccd811e8f3f8c0058ca4cf1b2ff": "dd03462d628d3713011ff568baba12aa",
".git/objects/1a/26175bbb19f3329bd603cec13d54aec4ad86ef": "496754050d3ae87d6f6af844da06c510",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/05b829c845d8c0578a9124b9e90cb495a2709a": "f34392c6b8d7c9aa9bbaabec494793f8",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/26/7b89a7937bebe36881847ef0e3c50eaa242cab": "eb96e26ab8515cfe45602e0aec07dd88",
".git/objects/2a/80043db3b354850e903da495ae0a28abfc80cc": "6b004cc32566c8e61a217ecd741e7475",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/a1ea2f1d0115d282dd8fefc7edb2090811025c": "0a49dc252c7bd130e812e787cbf36cf9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3c/50952ff7577aaf650d35ffd690ab8d29012be0": "8723f2f8af9c1dde51c0ffea326a0ba9",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/93f51fa0e80851a231f9a0c39163a951a5dd97": "ce459f7584b11618e73413e1e5239ed8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/e3c0140fd356cdfe5efb5ea8836381cfdedf3c": "447958ad4441f172e44c688533b076cc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/ad6f1d8055a0039ef805a3a54ae094a1a1909c": "68f7ed1a7d339f45bba18da05dc6a14f",
".git/objects/4d/68465f1838aec5ad399b756fca305efc1ed965": "0ac3986abe05a7d49370d013d575c18e",
".git/objects/4d/ebbb61cff716a2a370a5c30fcc71b117a8bc66": "db684e2d69a76c006c3ec7d1ef3d8b93",
".git/objects/4f/24e050a87391907e8e0b3717eadbfb6db7c51f": "bc7200a1107ab8005e1691ff4a4a91a5",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/3b576d14b251ba2a10948b11ee89188c79f222": "9846c3fdc5afc6233df2a44e12687e68",
".git/objects/56/fde6a92ca4c9836823e91e5af3088d562328db": "04950a10f338245827134b6f26196464",
".git/objects/5a/115b04b19116a43d3beed4d72ee5426a3fb6eb": "35fa8b92b4fd4629703a78b3e00faac9",
".git/objects/5b/72bb50a279019f3d7bb5abc18fec4c26f98044": "8d24b3b24ab5b363d1b2e0b4c20df0a6",
".git/objects/5b/92616abc79cceb03e8de2dc660693c7e81f249": "85514ceae9096dfdf67a8b6460559992",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/0308160a2afd163cdfbb4d90a059f53c9c2769": "b2aadb1b22bb47d146bb25553d3e5146",
".git/objects/65/e5447d3f45d8494e98287b2c7bc741fec835ff": "09526f2c9f5dd70700747311bc6f7122",
".git/objects/6b/c380c59e7fbae38d68c6938f376380c6048079": "49a7609c7136554ece8e0af82c3ce0b3",
".git/objects/6f/04a74803519f29a29a3dc4050673e4ab925934": "a96447c600aceaa19c78eed31e9fd79d",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/5040e36bbb49c8e90bf5607328d28cf2cf439c": "14bbc373bb35616ad645ca08f04dc54a",
".git/objects/70/eb7a0852206e5a5161645e026d13143e42bb37": "086e1ab0b8aeaaaae0d5e01bb0d2217d",
".git/objects/78/3efeec1fd443c7c82ebf160fb6838168374d12": "70b60f7e01dd2a982f9dd0c47b2c7c38",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/dee04b7ed9dfbd4a6c7d6078a7db44ec12ee82": "aa46ece8e2d0b04a78548e82b046ef0d",
".git/objects/86/df74512a4e8b0e221aff5fcf0d5f1ce28a88a3": "7ffacaf741a2b106a3f65fecdc05fa6b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9f57ee1580fa91a905517056de335347e25786": "a7fcf28f6805f78cec33aa7a94bcad69",
".git/objects/8a/44ec783e76f9b34dae9ada4071bc688d9f1e10": "54c956544026bb9b7447c4774360b120",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/94/a2fac9b135d81f4020dacf888e86f8d5f8b64d": "9e70fd9a04bacc441c722c20759b201d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/42813d287a52905db5474ee605e520bc665c8d": "8b137f6223bfb540b1fe8640317cdf41",
".git/objects/99/912251fe720d97303903dccf619825393ba079": "8e957559ff1cbbd26feec921f7b54b25",
".git/objects/9c/90b019b37cb4561ff08d8df1f71e6bf1c5965c": "c71f61df6500c9fda09ed5996cab6e69",
".git/objects/9d/d3863bad87e6291a0083f7a316347764d11dee": "73bf1fc80b3748de8ed500694d54228d",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/e52157d3d323d56a3ff9cb0edf68c93d8202a3": "5ca204994005a925783cf703f3811e83",
".git/objects/a6/fcdfb2c43f3bf1d515a7c6ee5cbf96afe80484": "5bdd9d2c614db40c7fea6165e7a9fa82",
".git/objects/a7/dbfd6a68fa0e7f5fc71e3f1c9edc61f36e060e": "f1249492a59b8ccf6a05a26ee91b1de0",
".git/objects/a8/93f7ecd3ee2cd3c635185db5daf8a242fe4c37": "8d134460d9e20a8251e92d439fc5a960",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/4a4a5abae7dcc3406b56c93f83eee5b92505f3": "2e0598549e08be5b9621fadc10fba149",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/6d19236729ac7196881201b1373cbd6ac85f5f": "c3003eacdd955ea3338d18c8a7163628",
".git/objects/b1/91886fdc9f8004e7cc6c2efb214e0a9eccc001": "a8782fbc67ea14129e7fc8eead35cb6f",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/69bd6dd05a0a7bd4ba2116e1b28b3fc9ccba1a": "a5c6539fb1cf45450f585398ffd4975c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/4575dc365e966bb36b8038d82ab61531dc8e08": "cd2d4efe98f8e07b2a79d5630d3492c0",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/b1da49f8e3425a9ba702de25ba3a69a6aca7e1": "3f90626265f7cbc2782fb6f338d86d62",
".git/objects/bc/fc6c359fd6b4dfdc171e808fe3df3b2b3e601b": "531368328d6e6ed13a820b0d4a8bc523",
".git/objects/be/78e08cf0243bae55aab1763f976584d76ccc9c": "1d46b8a8970ff7afaee0229e715f47ee",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c3/e2cf845ec11e652c85506a39cbe69364b80be8": "e8557eecc877a900cd0b8bfc539fc9dd",
".git/objects/c5/5b2147a9ccd2663f4b8cc40785843e80720f06": "678af87cd4a7659d6aa8a88f75437c34",
".git/objects/cb/506a8b03c72527cc99f5ab1bc4e80c2ee3e2cd": "289b71251bf79bbd8fd3d4b39bfc2ec3",
".git/objects/cc/225501fc1f6b08d58a86557625a2e7d2aa0920": "81bcaa412dc9c07b4dec60bb9ac2df3d",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/d4/76fa6d3aa62da2ed74a304b5edb67684ac17af": "21781cf7f79cc7bdd39e41930f1755d9",
".git/objects/d4/84bc816fa5ab2300ac124da9f185bf3cbaf172": "8aef293d8b47c5f27a6ebf3c3e38b48b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/cda1e1025ccc7c09e32f08bbc13f77e4f1efaf": "d8632a55b2dfd7f70ed8e4fbb06f9628",
".git/objects/d9/db19df617d8e991a136a6fdf96ea03d9ff343b": "765e71b448ddfe44ca6881fb07bfa9be",
".git/objects/dd/8e066f4f9634ac07ca6fa2b941fff4edc5e213": "c48a9cfd37d2bce5034f7b9e6b1057da",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/13405ed623863484a95a9932a034dc16b5c3b6": "8b658f7d6dc6366e5bbb5295f3e70cb2",
".git/objects/df/c494c81d40d793e474a0994250495bcc4b944a": "66b22d139b51d208885c672b5eeab2d1",
".git/objects/df/d827ecb8e477db0a17fb652f0e683528025bd7": "17fc0f8c83d798eaa7f3a5d1bee5ac8f",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a368f320ed131679947dda89a2f1f64998cedc": "4eb7fbb67b6d14eed5663b9c7e8a8cf4",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e8/9646e117ae9fa6e6b5787049cd1d6d1bff8d59": "a2c94fc691c93b25d3a5c9d6edc43d66",
".git/objects/ea/6bb559306ba8b68e50e65b595cc7678141f1e5": "f1dc47aad280e710d19c4af2e1c18244",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/96203cc2483c6abfb36bf0923cf1a013484177": "b4815272ba70845f59c92f30b335e2db",
".git/objects/f1/3d6c0bb86115e47483f365af7366f00787c3d6": "40f6760e5dc518f7baa90e53165f6f7c",
".git/objects/f2/937789e2ddf3fe4a5447b2e096446b90a46f5b": "ddba2a0924bec000118aa095ab4019a0",
".git/objects/fc/de1dc73eb50dfa4c01665995b6933948e776e8": "ada25d961e874ab5d7a73cc25fbfb4c5",
".git/objects/fc/eef365e464cf58029f959fef44073a61c824a3": "a03191ff429a770f90ba730c4e9e2dcb",
".git/objects/fd/90e2516774129ce73fac2c39b1835840568abd": "86720498f5b755d8d252f20353439c33",
".git/ORIG_HEAD": "a975da52a79f7bde5c2b717052236b14",
".git/refs/heads/main": "c90d19dd5001e9d382ac3d3a782046bf",
".git/refs/remotes/origin/main": "c90d19dd5001e9d382ac3d3a782046bf",
"assets/AssetManifest.bin": "a3d922a0b0bb96200631d1d9f758ce7d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b179e2a10a1698108effc020b98c121f",
"assets/NOTICES": "0421fc09b21e698bd53c829508167ce7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2701ea171e0e294dc4a5b4604974f115",
"/": "2701ea171e0e294dc4a5b4604974f115",
"main.dart.js": "e17a3d344d7f4012e7539da495b3f483",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"README.md": "7dd3a6207a784c1487676a2a14081eb0",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
