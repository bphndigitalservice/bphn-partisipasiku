if(!self.define){let e,c={};const s=(s,a)=>(s=new URL(s+".js",a).href,c[s]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=c,document.head.appendChild(e)}else e=s,importScripts(s),c()})).then((()=>{let e=c[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(c[f])return;let n={};const t=e=>s(e,f),d={module:{uri:f},exports:n,require:t};c[f]=Promise.all(a.map((e=>d[e]||t(e)))).then((e=>(i(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/PXmpbvMPQxX-Y67ihut8c/_buildManifest.js",revision:"9c1a859c77e68d88a1a48ef901c98e63"},{url:"/_next/static/PXmpbvMPQxX-Y67ihut8c/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1181.6215ae0841f67f3e.js",revision:"6215ae0841f67f3e"},{url:"/_next/static/chunks/129.cfc2231d6310d1ff.js",revision:"cfc2231d6310d1ff"},{url:"/_next/static/chunks/1396.43f8698a2894318e.js",revision:"43f8698a2894318e"},{url:"/_next/static/chunks/141.8f267d2239a6e2d9.js",revision:"8f267d2239a6e2d9"},{url:"/_next/static/chunks/1484.f4101b751e69d978.js",revision:"f4101b751e69d978"},{url:"/_next/static/chunks/150.6320e5c74da35854.js",revision:"6320e5c74da35854"},{url:"/_next/static/chunks/1502.31a502130f7f1d18.js",revision:"31a502130f7f1d18"},{url:"/_next/static/chunks/1513.0352fedfe27fa618.js",revision:"0352fedfe27fa618"},{url:"/_next/static/chunks/1619.f378569dbad2e78f.js",revision:"f378569dbad2e78f"},{url:"/_next/static/chunks/1784.9e5c16447a6efd68.js",revision:"9e5c16447a6efd68"},{url:"/_next/static/chunks/1878.2369f43f89a8a1ad.js",revision:"2369f43f89a8a1ad"},{url:"/_next/static/chunks/2039.a370564e40d1cfd8.js",revision:"a370564e40d1cfd8"},{url:"/_next/static/chunks/2077-3d975ba22b2e0e6c.js",revision:"3d975ba22b2e0e6c"},{url:"/_next/static/chunks/2153.446caf081c8cacf2.js",revision:"446caf081c8cacf2"},{url:"/_next/static/chunks/2208.02a1e7f7c542441e.js",revision:"02a1e7f7c542441e"},{url:"/_next/static/chunks/221.a2ca7f62f9344359.js",revision:"a2ca7f62f9344359"},{url:"/_next/static/chunks/2319.095f2a576164a927.js",revision:"095f2a576164a927"},{url:"/_next/static/chunks/2325.181a40d209bfd625.js",revision:"181a40d209bfd625"},{url:"/_next/static/chunks/2449.aff192938c2af92b.js",revision:"aff192938c2af92b"},{url:"/_next/static/chunks/2489.1adec8f90cd18ab7.js",revision:"1adec8f90cd18ab7"},{url:"/_next/static/chunks/2547.d5cc5580d1676e10.js",revision:"d5cc5580d1676e10"},{url:"/_next/static/chunks/2559.f50b0e2669c8ece2.js",revision:"f50b0e2669c8ece2"},{url:"/_next/static/chunks/2642.33c787fd223ddcf1.js",revision:"33c787fd223ddcf1"},{url:"/_next/static/chunks/278.16472e1ac17d6d57.js",revision:"16472e1ac17d6d57"},{url:"/_next/static/chunks/2789-666714073284e163.js",revision:"666714073284e163"},{url:"/_next/static/chunks/2798.e3333c9b5cc4dbf7.js",revision:"e3333c9b5cc4dbf7"},{url:"/_next/static/chunks/2904.c2fc35e76f762814.js",revision:"c2fc35e76f762814"},{url:"/_next/static/chunks/29107295-99c3572df2c91c9a.js",revision:"99c3572df2c91c9a"},{url:"/_next/static/chunks/3066.4201ea81f73ad00b.js",revision:"4201ea81f73ad00b"},{url:"/_next/static/chunks/3215.3f3dd7133284fa56.js",revision:"3f3dd7133284fa56"},{url:"/_next/static/chunks/3353.c89ba1f3a4f4298f.js",revision:"c89ba1f3a4f4298f"},{url:"/_next/static/chunks/3410.9774fabd420d53d3.js",revision:"9774fabd420d53d3"},{url:"/_next/static/chunks/3435.d658973ce1bd8f04.js",revision:"d658973ce1bd8f04"},{url:"/_next/static/chunks/3450.7d300907777efd32.js",revision:"7d300907777efd32"},{url:"/_next/static/chunks/3525.4100a336430dbac0.js",revision:"4100a336430dbac0"},{url:"/_next/static/chunks/3569.3b45081a6316498d.js",revision:"3b45081a6316498d"},{url:"/_next/static/chunks/3622.9de1ecdcb9e6f2f4.js",revision:"9de1ecdcb9e6f2f4"},{url:"/_next/static/chunks/3837.e11345a93a7514c5.js",revision:"e11345a93a7514c5"},{url:"/_next/static/chunks/3862-ea2324b8aeee886a.js",revision:"ea2324b8aeee886a"},{url:"/_next/static/chunks/3908.7c3753f952e072eb.js",revision:"7c3753f952e072eb"},{url:"/_next/static/chunks/3966.16965707449ab806.js",revision:"16965707449ab806"},{url:"/_next/static/chunks/4035.fe9e15e4aa6228b4.js",revision:"fe9e15e4aa6228b4"},{url:"/_next/static/chunks/4106-9c7cead7ed6c7100.js",revision:"9c7cead7ed6c7100"},{url:"/_next/static/chunks/4194.6f79da58450f953f.js",revision:"6f79da58450f953f"},{url:"/_next/static/chunks/4218.4f562e52f7addaaf.js",revision:"4f562e52f7addaaf"},{url:"/_next/static/chunks/4476.3da1aaba96978802.js",revision:"3da1aaba96978802"},{url:"/_next/static/chunks/4544.404affd8233078dc.js",revision:"404affd8233078dc"},{url:"/_next/static/chunks/4662.4542c1dbeb7a8d6c.js",revision:"4542c1dbeb7a8d6c"},{url:"/_next/static/chunks/4738.244382565ffb7c7c.js",revision:"244382565ffb7c7c"},{url:"/_next/static/chunks/4798.a1bb4e2611573f37.js",revision:"a1bb4e2611573f37"},{url:"/_next/static/chunks/4829.3dc7f34422cefd63.js",revision:"3dc7f34422cefd63"},{url:"/_next/static/chunks/4901.77e6d24da657316c.js",revision:"77e6d24da657316c"},{url:"/_next/static/chunks/4914.4a6889871ec82357.js",revision:"4a6889871ec82357"},{url:"/_next/static/chunks/4920.7eb2bcaee3f09c1f.js",revision:"7eb2bcaee3f09c1f"},{url:"/_next/static/chunks/4ad82c5e.1b376c10021c15ab.js",revision:"1b376c10021c15ab"},{url:"/_next/static/chunks/5059.0660b89837cd211a.js",revision:"0660b89837cd211a"},{url:"/_next/static/chunks/5154.024243bb4e96222a.js",revision:"024243bb4e96222a"},{url:"/_next/static/chunks/5230.69652e0073b0f032.js",revision:"69652e0073b0f032"},{url:"/_next/static/chunks/5331-06e9be114e8b14ef.js",revision:"06e9be114e8b14ef"},{url:"/_next/static/chunks/5364.b7b170daff0730f0.js",revision:"b7b170daff0730f0"},{url:"/_next/static/chunks/5430.7f09a78738157fbd.js",revision:"7f09a78738157fbd"},{url:"/_next/static/chunks/5464.3277aff2057aa79e.js",revision:"3277aff2057aa79e"},{url:"/_next/static/chunks/5518.7204a95903229ce1.js",revision:"7204a95903229ce1"},{url:"/_next/static/chunks/5711.474104f7cb264dcf.js",revision:"474104f7cb264dcf"},{url:"/_next/static/chunks/5739.b65e98f66c8836f6.js",revision:"b65e98f66c8836f6"},{url:"/_next/static/chunks/5785.6437e44373ac83f3.js",revision:"6437e44373ac83f3"},{url:"/_next/static/chunks/5829.ddeab7df6605f6d9.js",revision:"ddeab7df6605f6d9"},{url:"/_next/static/chunks/5848.e767872dcb93a44d.js",revision:"e767872dcb93a44d"},{url:"/_next/static/chunks/5893.842333943b831ad0.js",revision:"842333943b831ad0"},{url:"/_next/static/chunks/6085.ca9e21654943fffe.js",revision:"ca9e21654943fffe"},{url:"/_next/static/chunks/6264.d87e25c3cf299ace.js",revision:"d87e25c3cf299ace"},{url:"/_next/static/chunks/6411-38b74e91b8d9e303.js",revision:"38b74e91b8d9e303"},{url:"/_next/static/chunks/6477.a9324e36228b7069.js",revision:"a9324e36228b7069"},{url:"/_next/static/chunks/6510.a0d65eff189138fb.js",revision:"a0d65eff189138fb"},{url:"/_next/static/chunks/6512.6d9261f9b5423fd7.js",revision:"6d9261f9b5423fd7"},{url:"/_next/static/chunks/6566.f6d047ba39759f1f.js",revision:"f6d047ba39759f1f"},{url:"/_next/static/chunks/6575-aaec395841f2d5e8.js",revision:"aaec395841f2d5e8"},{url:"/_next/static/chunks/6739.5875db6e00295cd1.js",revision:"5875db6e00295cd1"},{url:"/_next/static/chunks/6756.6728240b7c14a3d5.js",revision:"6728240b7c14a3d5"},{url:"/_next/static/chunks/6837.7e9c627bc301e1dd.js",revision:"7e9c627bc301e1dd"},{url:"/_next/static/chunks/7.babad6e86e8252ec.js",revision:"babad6e86e8252ec"},{url:"/_next/static/chunks/7016.7c89b0520553ec95.js",revision:"7c89b0520553ec95"},{url:"/_next/static/chunks/7080.aa049c707ff02702.js",revision:"aa049c707ff02702"},{url:"/_next/static/chunks/7201.d78e62b47d63c917.js",revision:"d78e62b47d63c917"},{url:"/_next/static/chunks/7219.120848df9e8df3cb.js",revision:"120848df9e8df3cb"},{url:"/_next/static/chunks/7266.486ff1d690278b82.js",revision:"486ff1d690278b82"},{url:"/_next/static/chunks/7594.163c4995558151e5.js",revision:"163c4995558151e5"},{url:"/_next/static/chunks/7711.7650010b55b6df9b.js",revision:"7650010b55b6df9b"},{url:"/_next/static/chunks/7837.508ab48321ce0300.js",revision:"508ab48321ce0300"},{url:"/_next/static/chunks/7846.ff371de408660c2e.js",revision:"ff371de408660c2e"},{url:"/_next/static/chunks/7850.04c931a2c6c93bf9.js",revision:"04c931a2c6c93bf9"},{url:"/_next/static/chunks/7878.8fab073f6f78a2f2.js",revision:"8fab073f6f78a2f2"},{url:"/_next/static/chunks/7958.c9397e6983b31b0a.js",revision:"c9397e6983b31b0a"},{url:"/_next/static/chunks/7959.51d83f770de4c952.js",revision:"51d83f770de4c952"},{url:"/_next/static/chunks/8031-5af766c5e2550d10.js",revision:"5af766c5e2550d10"},{url:"/_next/static/chunks/81-cf0200ccbbcf3adf.js",revision:"cf0200ccbbcf3adf"},{url:"/_next/static/chunks/8111.14ac012c8221ae2f.js",revision:"14ac012c8221ae2f"},{url:"/_next/static/chunks/8469.28a642665b310dfe.js",revision:"28a642665b310dfe"},{url:"/_next/static/chunks/8575.4cfacb05ddc91f46.js",revision:"4cfacb05ddc91f46"},{url:"/_next/static/chunks/8595.9d8cacb9d1334840.js",revision:"9d8cacb9d1334840"},{url:"/_next/static/chunks/8624-670fe4842906889d.js",revision:"670fe4842906889d"},{url:"/_next/static/chunks/8761.7a0af6c37f9235c3.js",revision:"7a0af6c37f9235c3"},{url:"/_next/static/chunks/8798.d76ccec290b1946b.js",revision:"d76ccec290b1946b"},{url:"/_next/static/chunks/8802.389fc0e5540440f6.js",revision:"389fc0e5540440f6"},{url:"/_next/static/chunks/8826.81de70682167fc2e.js",revision:"81de70682167fc2e"},{url:"/_next/static/chunks/8843.5120ed6b6d56f82e.js",revision:"5120ed6b6d56f82e"},{url:"/_next/static/chunks/8847.41a59ed0513cf363.js",revision:"41a59ed0513cf363"},{url:"/_next/static/chunks/89.7f0f9f311ec84b05.js",revision:"7f0f9f311ec84b05"},{url:"/_next/static/chunks/8908.19662688d07f7eac.js",revision:"19662688d07f7eac"},{url:"/_next/static/chunks/8923.e55ae5e4ebc35514.js",revision:"e55ae5e4ebc35514"},{url:"/_next/static/chunks/8948-7c0f37445ef32ccc.js",revision:"7c0f37445ef32ccc"},{url:"/_next/static/chunks/8969.921158c3f3fe4234.js",revision:"921158c3f3fe4234"},{url:"/_next/static/chunks/9024.27aec8a093b112a4.js",revision:"27aec8a093b112a4"},{url:"/_next/static/chunks/9132.bacae6cccf7c1c91.js",revision:"bacae6cccf7c1c91"},{url:"/_next/static/chunks/9181.edbfceb1a06937f4.js",revision:"edbfceb1a06937f4"},{url:"/_next/static/chunks/920.471c1b2c39e291b8.js",revision:"471c1b2c39e291b8"},{url:"/_next/static/chunks/9244.93804bea3d86c37f.js",revision:"93804bea3d86c37f"},{url:"/_next/static/chunks/946.6720e7f1551dc5a8.js",revision:"6720e7f1551dc5a8"},{url:"/_next/static/chunks/9488.2ce7903856fbd82b.js",revision:"2ce7903856fbd82b"},{url:"/_next/static/chunks/9502.832a50e0d4ed238e.js",revision:"832a50e0d4ed238e"},{url:"/_next/static/chunks/9723.6f4d12da015388ec.js",revision:"6f4d12da015388ec"},{url:"/_next/static/chunks/9777.f8e32100764617c3.js",revision:"f8e32100764617c3"},{url:"/_next/static/chunks/framework-24c1133a0cd8abef.js",revision:"24c1133a0cd8abef"},{url:"/_next/static/chunks/main-26d9691064447af0.js",revision:"26d9691064447af0"},{url:"/_next/static/chunks/pages/404-e2efb1837abdc856.js",revision:"e2efb1837abdc856"},{url:"/_next/static/chunks/pages/500-3935c0b1cb618d89.js",revision:"3935c0b1cb618d89"},{url:"/_next/static/chunks/pages/_app-a3b4b84c3eb10877.js",revision:"a3b4b84c3eb10877"},{url:"/_next/static/chunks/pages/_error-34865a9718cf9589.js",revision:"34865a9718cf9589"},{url:"/_next/static/chunks/pages/diskusi-5f5d1932fca38426.js",revision:"5f5d1932fca38426"},{url:"/_next/static/chunks/pages/diskusi/%5Bslug%5D-186a35ffe9dc06dd.js",revision:"186a35ffe9dc06dd"},{url:"/_next/static/chunks/pages/index-5e3dc031d676f3ba.js",revision:"5e3dc031d676f3ba"},{url:"/_next/static/chunks/pages/kategori-edeb0c891883eb4f.js",revision:"edeb0c891883eb4f"},{url:"/_next/static/chunks/pages/kategori/%5Bslug%5D-865c14e02c5fc39a.js",revision:"865c14e02c5fc39a"},{url:"/_next/static/chunks/pages/legislasi-1dabbeabdbb1e708.js",revision:"1dabbeabdbb1e708"},{url:"/_next/static/chunks/pages/legislasi/%5Bslug%5D-91e7dc02e38699b6.js",revision:"91e7dc02e38699b6"},{url:"/_next/static/chunks/pages/legislasi/draft/%5Bslug%5D-9d6fc1258ba30dec.js",revision:"9d6fc1258ba30dec"},{url:"/_next/static/chunks/pages/pendapatku-68f0ec981187099a.js",revision:"68f0ec981187099a"},{url:"/_next/static/chunks/pages/pendapatku/compose-54a4ba358bf1280a.js",revision:"54a4ba358bf1280a"},{url:"/_next/static/chunks/pages/server-sitemap-index.xml-632ca74c8100c550.js",revision:"632ca74c8100c550"},{url:"/_next/static/chunks/pages/tentang-kami-21b2540e40ebae44.js",revision:"21b2540e40ebae44"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f903b987cca22439.js",revision:"f903b987cca22439"},{url:"/_next/static/css/06d29d8e4846dd68.css",revision:"06d29d8e4846dd68"},{url:"/_next/static/css/1ce0a4ddf4297bba.css",revision:"1ce0a4ddf4297bba"},{url:"/_next/static/css/e566ac1e022b7be9.css",revision:"e566ac1e022b7be9"},{url:"/_next/static/media/027cfd2fe3fa367d-s.p.woff2",revision:"96680631bd7369c5e897c4f03b0bd490"},{url:"/_next/static/media/02bf512350b2be7a-s.woff2",revision:"1bb95f785c855d639cf4d3cb8f2da843"},{url:"/_next/static/media/038f6f58b8d93c5b-s.woff2",revision:"ebdf710b39c0f216811337249ce8d18f"},{url:"/_next/static/media/066df4acbfc7f6de-s.woff2",revision:"d39b9336b6abd48372c22f05f6471518"},{url:"/_next/static/media/0dae79a6778e4c55-s.woff2",revision:"494e20e22f5636025f69d1c0fe6e9f99"},{url:"/_next/static/media/0f96008f0a3f6585-s.woff2",revision:"d28405e9fc2aeaab1b975d84db922604"},{url:"/_next/static/media/0fd3e82256d90837-s.woff2",revision:"29e0c8785899cf6ba73e3ac4727a2fe0"},{url:"/_next/static/media/105cf80e54b676e5-s.p.woff2",revision:"764246a7793dd3ebf4fb9ef09364afb3"},{url:"/_next/static/media/109567c3d3bb9500-s.woff2",revision:"755771efeab4ec9da8c5149de0c95680"},{url:"/_next/static/media/149d9b4d01de5bbf-s.woff2",revision:"93a4287fad68013df8dec0a5208ccfaa"},{url:"/_next/static/media/2760ab87809dba68-s.woff2",revision:"45a981b873c750516f85ea4d83e77f52"},{url:"/_next/static/media/2a3b2ea67bee3477-s.woff2",revision:"60ba49fac6bb627ee35a4fc6aaaeb5e5"},{url:"/_next/static/media/2a5d72d6f27c6bdf-s.woff2",revision:"a2c8e9c6d8c3302cc6f42255100b0bc4"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/30dd5d2a34edb806-s.woff2",revision:"6fae6d188d300188cc50370bd96a7eb4"},{url:"/_next/static/media/3884ae849dfb709d-s.woff2",revision:"249a398b2a6d275e143b9ba7f0e123d7"},{url:"/_next/static/media/3c731d5a2739b6f2-s.woff2",revision:"fffe2a1b447d3ee5cdd2955b419f8fbb"},{url:"/_next/static/media/3ccb6a127802bc1d-s.woff2",revision:"f07669b71e793dd53e43fde135ebf99a"},{url:"/_next/static/media/3f5c31126c555414-s.woff2",revision:"eaf714de7510ed4211c9959d2010fd73"},{url:"/_next/static/media/40f66b5a98fa1c2a-s.woff2",revision:"ce644a31af0c3bb2d20035d5c975c388"},{url:"/_next/static/media/419ff7f6864b1bf0-s.woff2",revision:"8577acdbaef4fe3eeea7d9eb89323a2c"},{url:"/_next/static/media/4281980ba174e012-s.woff2",revision:"2343b094567ea6850792ff295dd4ae37"},{url:"/_next/static/media/4716faad42dfd613-s.woff2",revision:"aff591656dba4eebcab5c498b10addaa"},{url:"/_next/static/media/4d1ff0dc4c18bcaf-s.woff2",revision:"710c752d2968d0a7a13fca24eeb95981"},{url:"/_next/static/media/4db51ce4e936800b-s.woff2",revision:"721f88bafc3a300851f6de75ca8bc021"},{url:"/_next/static/media/52d9fa78c61e1cf1-s.woff2",revision:"afec5966a452f4c97abf87252718ebb0"},{url:"/_next/static/media/59f7798687e2fc52-s.woff2",revision:"be9296b240da6584609dfc18d561c039"},{url:"/_next/static/media/5eee98606431968b-s.woff2",revision:"e93ed74d2ff3779bcf6f33785ebfb573"},{url:"/_next/static/media/5fc61dc29f8e4b86-s.woff2",revision:"d74df4b0fddb010ba8b6a9190f2b9d58"},{url:"/_next/static/media/6081b28cfed63438-s.woff2",revision:"96a0999f162d1ba192242660a5952078"},{url:"/_next/static/media/6eadb790691346de-s.woff2",revision:"fbae6a1b64777c62e27348b1b83d9e79"},{url:"/_next/static/media/6f7a710339d87877-s.p.woff2",revision:"a7375a2405fc91919c78f11b9069662f"},{url:"/_next/static/media/701a0cddcfb1dcd7-s.woff2",revision:"362e60428ef7c23442353d87c391ac78"},{url:"/_next/static/media/7167e34e217bde62-s.p.woff2",revision:"c6aa9217855ccffbd158c582f41d5fba"},{url:"/_next/static/media/7baa5d50cdb33922-s.woff2",revision:"82ca4a3b03dc98a2d189f01c66af43e4"},{url:"/_next/static/media/7eac64277e13f4fe-s.woff2",revision:"8c8683590f1076e6245646e7ffdd68e3"},{url:"/_next/static/media/82d4a09688ce94fb-s.woff2",revision:"60321d823c4cf016980f03d99f7d8c8f"},{url:"/_next/static/media/834a270e798be77f-s.woff2",revision:"aec006582c945c37c72b9c835a28baa8"},{url:"/_next/static/media/88bef0d5324313b7-s.p.woff2",revision:"b15e364710778e2f4c9e0d08a84129aa"},{url:"/_next/static/media/94d98b2e7c4693ae-s.woff2",revision:"1222a4c31410b4e2176432de20d5ce60"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/Centauri.6b3db3c8.svg",revision:"6b3db3c8"},{url:"/_next/static/media/a94cb20377a41373-s.woff2",revision:"5c697c38f7b8495e5d2d1c0d1f74baac"},{url:"/_next/static/media/a98ddc4c01cb7f81-s.woff2",revision:"c04c2d411d7579821fc1d55e86fc7c66"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/af14552aa5438fb1-s.woff2",revision:"971bf79bb0ef686151d4a2b0919d1fb1"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b3b33714d35078d1-s.woff2",revision:"f06327e73646d4920981273ecab1bc29"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/c7c14bb6338e38ab-s.woff2",revision:"4df53c18d5c77cd3423af74352dac995"},{url:"/_next/static/media/c9026d2e03efcddb-s.woff2",revision:"18497f4bfde879fe50e96ee7f1d77dd5"},{url:"/_next/static/media/c97867fc9dba1e75-s.woff2",revision:"f1f52d7ff4e1c1112ad38e33a462be58"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/d4c284c4f2935e71-s.woff2",revision:"fe0a8b1b1480d9a9c6178c2028c09617"},{url:"/_next/static/media/d5ac03282aeda81c-s.woff2",revision:"a401764ef2622ee4c54f00a9603d9e52"},{url:"/_next/static/media/d872476293602b32-s.woff2",revision:"e41d577fd6b7c17c512da84e6bb1d25a"},{url:"/_next/static/media/dba1229937f9bebe-s.woff2",revision:"e3dbf745a1592f88b1dd6fe5e4724a6b"},{url:"/_next/static/media/df5b329497c10edf-s.woff2",revision:"5bf5115ec4fef1e0e0a40dfd87ddd16e"},{url:"/_next/static/media/e65f8cd900b7b6b2-s.woff2",revision:"8130b323026711389bf959f589301c76"},{url:"/_next/static/media/e7577d8b287239f3-s.woff2",revision:"285c54f01cfee1abd0ab4226bf23f8a8"},{url:"/_next/static/media/ee09a54602f20636-s.woff2",revision:"c3e96b880daab8362576d04a9692b725"},{url:"/_next/static/media/ef399aa08d8c7761-s.p.woff2",revision:"4d12fcf3b0195103ed1e14ff4e85d63a"},{url:"/_next/static/media/efc906923d713735-s.woff2",revision:"bc083cee9999d546c35868a24cdde89f"},{url:"/_next/static/media/f05ef2d15c86889b-s.woff2",revision:"7a8841f389a20823846f8fd15c601bae"},{url:"/_next/static/media/f3a55c302e36e0b4-s.woff2",revision:"74f981dfa05e2985c6e774f3657bea65"},{url:"/_next/static/media/f4cc89adca21b356-s.p.woff2",revision:"7ae97414032d7356d3fb9dd284e0dc8f"},{url:"/_next/static/media/f5f2da099a60d2dd-s.p.woff2",revision:"b9774497011498a1e8d4e7c4d7851414"},{url:"/_next/static/media/faeb51937ad34dc8-s.p.woff2",revision:"997908b255110fbe1437979bb79248c3"},{url:"/_next/static/media/fc73f8570ad1750b-s.woff2",revision:"c2840ff728342536dabc7b6ae597a7af"},{url:"/_next/static/media/ff20bf61318675f3-s.woff2",revision:"146a4bad87649e78e3880f5b932c30e2"},{url:"/_next/static/media/hero.b2469a49.jpg",revision:"b2469a49"},{url:"/_next/static/media/logo_partisipasiku.73f0ec97.png",revision:"186f72bc9dcae4c30dde52c7f4495584"},{url:"/android-icon-144x144.png",revision:"a95eb452df2b99bc8c1fb901f043bb6f"},{url:"/android-icon-192x192.png",revision:"a6041ececd04bc0afe05aeb6a90ca079"},{url:"/android-icon-36x36.png",revision:"8085830d1466b7da4ec34ee7f4f627b4"},{url:"/android-icon-48x48.png",revision:"7ac8e1948ca257652d576cf12645f4fd"},{url:"/android-icon-72x72.png",revision:"8f102e25abb117bf2f924713a3ed7869"},{url:"/android-icon-96x96.png",revision:"d5eecaf039ba910f0e4539d163dad445"},{url:"/apple-icon-114x114.png",revision:"6258c49c8058015fadc43638432a3156"},{url:"/apple-icon-120x120.png",revision:"58486e7ddde8c66ff7104804283589ba"},{url:"/apple-icon-144x144.png",revision:"6d6b244a73f8a384883d7ea5ed2cfcb9"},{url:"/apple-icon-152x152.png",revision:"41f622d563c48ecabdadde7a3a7fdc54"},{url:"/apple-icon-180x180.png",revision:"a198dd322a1e4c29902b0d6ae63bcf66"},{url:"/apple-icon-57x57.png",revision:"4d2d8f2baf7fbd2a464cc0088f3f89c1"},{url:"/apple-icon-60x60.png",revision:"9d5172435eb9ebf81a10f8b58a798c88"},{url:"/apple-icon-72x72.png",revision:"aaf9fdd79f80a2e55dd2648d38ed43dc"},{url:"/apple-icon-76x76.png",revision:"a94cc304fa474ffd9e8a368062cd04f0"},{url:"/apple-icon-precomposed.png",revision:"aacacff8edd567467c333434574f86e9"},{url:"/apple-icon.png",revision:"aacacff8edd567467c333434574f86e9"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"5e0433cb270e64325650bc7d43d1b6d4"},{url:"/favicon-32x32.png",revision:"a5511e3c992abc7499200730186cbc7e"},{url:"/favicon-96x96.png",revision:"407a9b5c1bfd03bd2b9d0482a38fc775"},{url:"/favicon.ico",revision:"9a6238c3df825a0969718ded7cd493d3"},{url:"/fonts/Inter-Black.ttf",revision:"980c7e8757e741bb49c7c96513924c61"},{url:"/fonts/Inter-Bold.ttf",revision:"275bfea5dc74c33f51916fee80feae67"},{url:"/fonts/Inter-ExtraBold.ttf",revision:"c9709fb8e32755490795ce5bd226c3a0"},{url:"/fonts/Inter-ExtraLight.ttf",revision:"0f3ac0692901f70f1ac32cf079355051"},{url:"/fonts/Inter-Light.ttf",revision:"d55f45d07cfe01e8797bd1566561f718"},{url:"/fonts/Inter-Medium.ttf",revision:"ed533866b5c83114c7dddbcbc2288b19"},{url:"/fonts/Inter-Regular.ttf",revision:"079af0e2936ccb99b391ddc0bbb73dcb"},{url:"/fonts/Inter-SemiBold.ttf",revision:"07a48beb92b401297a76ff9f6aedd0ed"},{url:"/fonts/Inter-Thin.ttf",revision:"2dce622147cace7b467d9929b7708430"},{url:"/fonts/Inter-VariableFont_slnt,wght.ttf",revision:"ba8d154465f7fd15e2fc2ced6dceec90"},{url:"/fonts/kaisei-tokumin-bold.ttf",revision:"7b5d94df1a1d559450cdf2895c85d07f"},{url:"/fonts/kaisei-tokumin-latin-400-normal.woff2",revision:"c6c7926527bba97828439569bb263689"},{url:"/fonts/kaisei-tokumin-latin-700-normal.woff2",revision:"72f76629f6c5808b683c9b276357f384"},{url:"/images/Carinae.png",revision:"4929f4302cb3ebe40431146fb8302d66"},{url:"/images/Centauri.svg",revision:"d50ba15b2fa981ea12f604f98b4d6310"},{url:"/images/Deneb.png",revision:"8f822d509d0e2d248d1b9c905f04d225"},{url:"/images/hero-dark@90.jpg",revision:"043ed8b8cf9d783b8ba2c8f266c8f3fe"},{url:"/images/hero.jpg",revision:"5bd10cc9c292d6295b5c99b2ccc40925"},{url:"/images/pendapatku-hero.png",revision:"dc43c3a1dc5f3860e509db5083d48f03"},{url:"/images/pendapatku-hero@light.png",revision:"22474763dfaaffd45adc44db40cba4ab"},{url:"/logo_partisipasiku.png",revision:"186f72bc9dcae4c30dde52c7f4495584"},{url:"/manifest.json",revision:"45458e8c0dcdef918d48daf3ca8017bd"},{url:"/ms-icon-144x144.png",revision:"6d6b244a73f8a384883d7ea5ed2cfcb9"},{url:"/ms-icon-150x150.png",revision:"92dcdacda871a78be47f26a263e5cb6c"},{url:"/ms-icon-310x310.png",revision:"cafb1601d466b5c49a413dec3100f6f0"},{url:"/ms-icon-70x70.png",revision:"a8a5f350f9508990487630ac38dc6657"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/og-bg.jpg",revision:"c3ec55506fd5e7de86942feb1c337b66"},{url:"/og-bg.svg",revision:"80dd38a85cef1185614bf00a5d7d9339"},{url:"/og-exp.jpg",revision:"618b7527b6b49766e3239bba8cd9e2c8"},{url:"/og-exp.png",revision:"fd89530a22c0d6b6a16225518f5ec29b"},{url:"/og.jpg",revision:"812911ab395141dbf30c2d1bb0132ede"},{url:"/robots.txt",revision:"813ddba914a840f5b4fb530590f3e32f"},{url:"/sitemap-0.xml",revision:"bd62b3b4052543abb81f30fc41afcdf8"},{url:"/sitemap.xml",revision:"22204709bb4494b978350e6330550cc2"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:c,event:s,state:a})=>c&&"opaqueredirect"===c.type?new Response(c.body,{status:200,statusText:"OK",headers:c.headers}):c}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const c=e.pathname;return!c.startsWith("/api/auth/")&&!!c.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
