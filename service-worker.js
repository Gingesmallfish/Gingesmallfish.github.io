if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const n=e=>a(e,c),f={module:{uri:c},exports:r,require:n};i[c]=Promise.all(s.map((e=>f[e]||n(e)))).then((e=>(d(...e),r)))}}define(["./workbox-e5cd846b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"108dc9bacd2ea39dd9332127b8c88417"},{url:"about/index.html",revision:"a8c24e479bdd7dd5f6da919b750fcc0d"},{url:"air-conditioner/index.html",revision:"69ad483ef9fd4a6df37f81b51455b66f"},{url:"album/index.html",revision:"9676ac3667050dd6102d6e079b1014e6"},{url:"anzhiyu/random.js",revision:"dff4efca9d58cfb834af409b5cb50ce1"},{url:"archives/2023/09/index.html",revision:"7970706f12d9010c7d7b485367cf821d"},{url:"archives/2023/index.html",revision:"ec761a50a1dac43cff8fc1b4ac987e16"},{url:"archives/index.html",revision:"f5064ba03c87a95d6066950f3a3b62b0"},{url:"assets/ailiyu.png",revision:"5c57cd2cf16c74431992143d64022a23"},{url:"assets/Alipay.png",revision:"9673c13c0c935fbd99a5a1ea3c5316d7"},{url:"assets/bilibili.png",revision:"677cb244b233c73fbdaf910774bda275"},{url:"assets/BOLG.png",revision:"84b5e0ef43fc80f8e3ced42b03c2680c"},{url:"assets/cat.jpg",revision:"04956acb48abb72343b5f5867b93e8d5"},{url:"assets/colorhub.webp",revision:"080962e3f9d388f8964cc74a3daae5c0"},{url:"assets/daima.jpg",revision:"53960c6f38bd456e4a6b6e5083477094"},{url:"assets/github.png",revision:"d689862d2eb400036d1ce89bb3947138"},{url:"assets/map.png",revision:"5726675336db017c0e12804ce87dd7eb"},{url:"assets/QQ-Speed.webp",revision:"57a6340b21f927e11e4e067987fc9ecb"},{url:"assets/WeCaht.png",revision:"1aadae3d32e99d14c9acff8634f0460c"},{url:"bangumis/index.html",revision:"0050ec0ca42b9323ede9ebc52930202c"},{url:"categories/index.html",revision:"47919a6e0e99f9a7babf9aed3452219f"},{url:"categories/全栈开发/index.html",revision:"907a0e2aef1b26c39f20b6e3b597863b"},{url:"categories/大学生活/index.html",revision:"6d97f550743048c5e884b9a0abc204c0"},{url:"categories/生活日常/index.html",revision:"f0ffd80aae41df3e19f4b85206be17a3"},{url:"categories/网络安全/index.html",revision:"2f1c4593abe207e3f99bd22fd2cdf5e1"},{url:"cinemas/index.html",revision:"21a6830c09423a656252633fdd414cfd"},{url:"comments/index.html",revision:"57426f2fe2d42925e8838ab0b1b48025"},{url:"css/custom.css",revision:"9a69fe0b8eb5662b983f94b8a98372d2"},{url:"css/index.css",revision:"928944d52a5c9ff35827cc71da003c77"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dailyPhoto/index.html",revision:"399230fa9e5d887cedc8edf83c0dc4ce"},{url:"equipment/index.html",revision:"fd4105da869bf92bc6c1d614b096329c"},{url:"essay/index.html",revision:"7ec524e9a4dc32ba7c4433b559b8d8cf"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"6c329e8b9fc8bc989b78ca5d2f240f59"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/cursor.js",revision:"f0821240ac3951a5a335fe155c6c3ccb"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"9f745e484584ba50972a3a0b594700dd"},{url:"music/index.html",revision:"d395aa75eec9333288007b9d12c3d561"},{url:"posts/1c8c8299.html",revision:"8d66287d75afab1cfe0502c846f9fc66"},{url:"posts/2812c128.html",revision:"150f93993032cf80b21260857a062651"},{url:"posts/7038c214.html",revision:"2034bc772f04c12e7c76f218e260dfbf"},{url:"posts/7d92f204.html",revision:"d8a0dd82d646655ab4fe469de577bde2"},{url:"posts/7fc04cea.html",revision:"618ff5c846350e9f5ecb1308905d8a48"},{url:"posts/86ebb5e0.html",revision:"a2e77500f8754caa089386224aecf528"},{url:"posts/a4b4d7a2.html",revision:"c761d9781877a0579a53be6b617f1fd4"},{url:"posts/be99bbe6.html",revision:"1430f272fc07d879fd07174f4839efaf"},{url:"tags/CND/index.html",revision:"7a92c4ccf0f83dbe768fd58ea0e8721b"},{url:"tags/index.html",revision:"b7fb991d4a6164302c8353bb13dc4de8"},{url:"tags/JAVA/index.html",revision:"f4ae75d8dfbb7f5bf0e2c1b61a0522ea"},{url:"tags/Java基础语法/index.html",revision:"d6fca1e26b3a9857e0c1388831cebbd0"},{url:"tags/Map/index.html",revision:"5dc991d5da81ed9773324b1fd565eb64"},{url:"tags/object/index.html",revision:"1582f948405584d621e0c85dab9b1ac1"},{url:"tags/今日文案/index.html",revision:"4f7ba99671b7e70001e74b3ad057573b"},{url:"tags/卧室大改造/index.html",revision:"166724aab7952be8e1311aa6fb9f4209"},{url:"tags/图床/index.html",revision:"a17f0a6eaea33c55b4f46e1a1b094738"},{url:"tags/对象和类/index.html",revision:"4a2abfcad2e3f78514481611a80124c6"},{url:"tags/布置自己的小房间/index.html",revision:"496e5419a90064820d06338e1fa621e4"},{url:"tags/开发环境/index.html",revision:"0408acad735f1cd763847bc3c611a2f3"},{url:"tags/开学季/index.html",revision:"2ca77934f07d46d2fd338adaef31dbfd"},{url:"tags/我家的观赛席/index.html",revision:"0fba65ec82583de3a5326f2ca359faeb"},{url:"tags/数据结构/index.html",revision:"864ad28e9ccf0402c14ce0a8afa55122"},{url:"tags/文案分享/index.html",revision:"0a3a5e89042e4507f645ac851cc18195"},{url:"tags/极米投影仪/index.html",revision:"9925e22f9ab631fdda0795a3b288f442"},{url:"tags/极米投影仪焦艺术投影M1/index.html",revision:"526dac1f43197f4b6fa94e53e089e365"},{url:"tags/温馨小窝/index.html",revision:"6a37af05dcd8e70b1c1a833f83df7399"},{url:"tags/独居生活/index.html",revision:"93a2e7e841478986674d2a4a3a7d8653"},{url:"wordScenery/index.html",revision:"03d2150529c292a0e0faf65df319ac8a"}],{})}));