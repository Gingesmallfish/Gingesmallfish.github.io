if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),b={module:{uri:d},exports:r,require:n};i[d]=Promise.all(s.map((e=>b[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/09/13/hello-world/index.html",revision:"effde7057194146d09efd51619dd0046"},{url:"404.html",revision:"8865af2c1d262cdd7f505aa5ead2dd9b"},{url:"about/index.html",revision:"23a031ea29ef88a6bddcc430b674fa94"},{url:"album/index.html",revision:"6f4d672abefa39628c04fd59386601ad"},{url:"anzhiyu/random.js",revision:"2af3ad8837f22d0eee42a6de93a31dc5"},{url:"archives/2023/09/index.html",revision:"ef42c163a10f42d42f9f83f5a8a36a09"},{url:"archives/2023/index.html",revision:"f2d9c12faf9b007e8a90b3f53ce44ebf"},{url:"archives/index.html",revision:"7a60e837b9feffc33f1ac28277e8a231"},{url:"assets/Alipay.png",revision:"9673c13c0c935fbd99a5a1ea3c5316d7"},{url:"assets/cat.jpg",revision:"04956acb48abb72343b5f5867b93e8d5"},{url:"assets/colorhub.webp",revision:"080962e3f9d388f8964cc74a3daae5c0"},{url:"assets/daima.jpg",revision:"53960c6f38bd456e4a6b6e5083477094"},{url:"assets/map.png",revision:"5726675336db017c0e12804ce87dd7eb"},{url:"assets/QQ-Speed.webp",revision:"57a6340b21f927e11e4e067987fc9ecb"},{url:"assets/WeCaht.png",revision:"1aadae3d32e99d14c9acff8634f0460c"},{url:"bangumis/index.html",revision:"e85a2372b60e0f18fd81d2cc18b5fa22"},{url:"categories/index.html",revision:"38c264f38ee36adf1258526177b45181"},{url:"cinemas/index.html",revision:"a4370ff8464185753cd62cc96db4c0b6"},{url:"comments/index.html",revision:"b37472db02cd947c151fbdb80e748c5f"},{url:"css/index.css",revision:"7fd9c343807b2d7a4aa1199498f9adc0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"86e5f7b47ca9f74b4fa0bd8e9f975382"},{url:"equipment/index.html",revision:"066c2cbec5772bec5bd0ab5197e9248f"},{url:"essay/index.html",revision:"58e53137449887bcb6c719c559d7e46c"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"4d555e37f0083633bb58e65d236e2f1f"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"0cb8677607a82ffbaabb05b34859f16a"},{url:"music/index.html",revision:"14a06daefe5c9c6d131ce304ee0ea0da"},{url:"tags/index.html",revision:"4b94677e2b169e210c062f9203f9a614"},{url:"wordScenery/index.html",revision:"fce22bba11f6cd5db280551dcd8ced2b"}],{})}));
//# sourceMappingURL=service-worker.js.map
