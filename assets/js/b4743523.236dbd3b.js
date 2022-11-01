"use strict";(self.webpackChunkdocstest=self.webpackChunkdocstest||[]).push([[7210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=n,m=c["".concat(s,".").concat(u)]||c[u]||g[u]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=r(7462),n=r(7294),i=r(3905),o=r(4996);function l(e){let{src:t,caption:r}=e;return n.createElement("figure",{style:{border:0,padding:0,textAlign:"center",fontStyle:"italic"}},n.createElement("img",{src:(0,o.Z)(t),alt:r}),n.createElement("figcaption",null,`${r}`))}const s={sidebar_position:5,displayed_sidebar:"learnSidebar"},d="Upgrade & Migrate Badge",p={unversionedId:"learn/miup",id:"learn/miup",title:"Upgrade & Migrate Badge",description:"Series and Badge Upgrade",source:"@site/docs/learn/miup.md",sourceDirName:"learn",slug:"/learn/miup",permalink:"/learn/miup",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,displayed_sidebar:"learnSidebar"},sidebar:"learnSidebar",previous:{title:"Badge Overview",permalink:"/learn/badge"},next:{title:"Hiring",permalink:"/learn/hiring"}},g={},c=[{value:"Series and Badge Upgrade",id:"series-and-badge-upgrade",level:2},{value:"Introducing Series and Badge Upgrade",id:"introducing-series-and-badge-upgrade",level:3},{value:"How Upgrade Works",id:"how-upgrade-works",level:3},{value:"Migration",id:"migration",level:2},{value:"Introducing badge version migration",id:"introducing-badge-version-migration",level:3},{value:"How Migration Works",id:"how-migration-works",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upgrade--migrate-badge"},"Upgrade & Migrate Badge"),(0,i.kt)("h2",{id:"series-and-badge-upgrade"},"Series and Badge Upgrade"),(0,i.kt)("h3",{id:"introducing-series-and-badge-upgrade"},"Introducing Series and Badge Upgrade"),(0,i.kt)("p",null,"Noox offers publishers the ability to create progressive badges called 'Series' that are meant to represent one's progression into a particular achievement system."),(0,i.kt)(l,{caption:"Ethereum User Series",src:"/img/ethereumUserSeries.png",mdxType:"Figure"}),(0,i.kt)("p",null,"A publisher can create a \u2018Series\u2019 consisting of multiple leveled badges for a given action. These levels are hierarchical and each level can be determined freely based on certain action factors like the total amount or number of actions. Once a series badge is claimed, users can upgrade the badge to a higher-level badge when they reach the next achievement milestones. "),(0,i.kt)("p",null,"In the process of upgrading the badge, a lower-level badge is burned and replaced with a higher-level badge. There is no additional fee for upgrading badges except for the gas fee."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you have claimed 2 or more of the below badge series before the feature update, you will be reimbursed for all previous minting fees, except for the first minting fee in a given series. The reimbursement will be made automatically if/when you upgrade your badge.")),(0,i.kt)("p",null,"Badges applicable for minting fee reimbursement:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noox.world/badge/104577845207406739233498577831854075688817521750848206372017175842561722417169"},"Uniswap Swapper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noox.world/badge/104577845207406739233498577831854075688817521750848206372017175842561722417153"},"SushiSwap Swapper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noox.world/badge/104577845207406739233498577831854075688817521750848206372017175842561722417180"},"MetaMask Swap User")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noox.world/badge/104577845207406739233498577831854075688817521750848206372017175842561722417213"},"Gitcoin Donator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noox.world/badge/104577845207406739233498577831854075688817521750848206372017175842561722417236"},"OpenSea Trader")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noox.world/badge/104577845207406739233498577831854075688817521750848206372017175842561722417191"},"BadgerDAO Depositor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noox.world/badge/104577845207406739233498577831854075688817521750848206372017175842561722417161"},"Ethereum User")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noox.world/badge/104577845207406739233498577831854075688817521750848206372017175842561722417275"},"Gas Spender")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noox.world/badge/104577845207406739233498577831854075688817521750848206372017175842561722417284"},"reNFT Rental")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://noox.world/badge/104577845207406739233498577831854075688817521750848206372017175842561722417287"},"reNFT Lend"),(0,i.kt)("br",{class:"in"}))),(0,i.kt)("h3",{id:"how-upgrade-works"},"How Upgrade Works"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"upgrade1",src:r(126).Z,width:"1328",height:"769"})),(0,i.kt)("p",null,"If you have the \u2018Ethereum Rare User\u2019 badge and met all the requirements for the next level badge, you can upgrade your existing badge to the \u2018Ethereum Super Rare User\u2019 badge. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"upgrade2",src:r(3398).Z,width:"1913",height:"940"})),(0,i.kt)("p",null,"The \u2018Upgrade\u2019 button can be found on the detail page of a badge. Make sure to click \u2018check eligibility\u2019 to see if you are eligible for an upgrade. After clicking \u2018Upgrade\u2019, you will need to confirm this transaction on your MetaMask for the process to be completed. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"upgrade3",src:r(5838).Z,width:"1883",height:"936"})),(0,i.kt)("p",null,"Once the upgrade is completed, your previous 'Ethereum Rare User' badge will be burned and replaced with the 'Ethereum Super Rare User' badge."),(0,i.kt)("br",{class:"in"}),(0,i.kt)("h2",{id:"migration"},"Migration"),(0,i.kt)("h3",{id:"introducing-badge-version-migration"},"Introducing badge version migration"),(0,i.kt)("p",null,"All Noox badges are published to blockchain, therefore, if certain metadata needs to be revised, the publisher needs to re-publish the badge with the revised metadata."),(0,i.kt)("p",null,"There are a few instances when it is necessary for publishers to update the badge version."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Case 1: If badge information is incorrect (e.g. incorrect contract address)"),(0,i.kt)("li",{parentName:"ul"},"Case 2: If projects add and/or migrate to a new smart contract (e.g. OpenSea\u2019s decision to move from Wyvern to Seaport)")),(0,i.kt)("p",null,"Protocols can make note of this version change and allow users to migrate to the new badge version. If a user chooses to migrate to a new badge version, the old version badge will be burned. In addition, upon the release of the new version, the old version will no longer be claimable. The migration process is free of charge except for the gas fee. "),(0,i.kt)("br",{class:"in"}),(0,i.kt)("h3",{id:"how-migration-works"},"How Migration Works"),(0,i.kt)("p",null,"Ukraine DAO Donator badge was updated to V2 to include a missing donate contract. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"migrate1",src:r(9744).Z,width:"1643",height:"807"})),(0,i.kt)("p",null,"The \u2018Migrate\u2019 button can be found on the detail page of a badge. Make sure to click \u2018Check Eligibility\u2019 to see if you are eligible for a badge migration. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"migrate2",src:r(6525).Z,width:"1641",height:"805"})),(0,i.kt)("p",null,"After clicking \u2018Migrate\u2019, you will need to confirm this transaction on your MetaMask for the process to be completed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"migrate3",src:r(3970).Z,width:"1633",height:"805"})),(0,i.kt)("p",null,"Once the migration is completed, \u2018Ukraine DAO Donator\u2019 V1 badge will be burned and replaced with \u2018Ukraine DAO Donator\u2019 V2 badge."))}m.isMDXComponent=!0},9744:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/migrate1-8083edb072d2e73022b0388fcd7dfb54.png"},6525:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/migrate2-4924913c261df0c97343252408a8583b.png"},3970:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/migrate3-a7aebed067ebc90f38afc84cf95966c0.png"},126:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/upgrade1-0547b2349763868cd5f4aa9948936904.png"},3398:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/upgrade2-769915ab53a3c86fd6befe4b7dbb347e.png"},5838:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/upgrade3-c8d0d128f8a045e2bb9094ad48229da7.png"}}]);