(function(t){function e(e){for(var r,c,a=e[0],u=e[1],s=e[2],f=0,l=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},c={app:0},o={app:0},i=[];function a(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-0b58c742":"5e65be28","chunk-2b50b02f":"7d491a09","chunk-5f3e0820":"e41c9035","chunk-18f0127f":"a43f93a7","chunk-6d75b587":"f797606f","chunk-7071ecb8":"fd46a2a5","chunk-79658b4e":"1cc7c783"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-2b50b02f":1,"chunk-5f3e0820":1,"chunk-18f0127f":1,"chunk-6d75b587":1,"chunk-7071ecb8":1,"chunk-79658b4e":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0b58c742":"31d6cfe0","chunk-2b50b02f":"9bcebfa6","chunk-5f3e0820":"7dffdfe7","chunk-18f0127f":"54e40339","chunk-6d75b587":"f4013b81","chunk-7071ecb8":"2175749e","chunk-79658b4e":"2ec18dec"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=i[a],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return e()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],f=s.getAttribute("data-href");if(f===r||f===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete c[t],p.parentNode.removeChild(p),n(i)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){c[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=a(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=f;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0ce1":function(t,e,n){"use strict";n("5c48")},"1f92":function(t,e,n){t.exports=n.p+"img/cart_active.3857810e.svg"},3522:function(t,e,n){},3704:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]})],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("9443"),alt:""}})]},proxy:!0},{key:"item-icon_active",fn:function(){return[r("img",{attrs:{src:n("b508"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[t._v("首页")]},proxy:!0}])}),r("tab-bar-item",{attrs:{path:"/category"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("57cd"),alt:""}})]},proxy:!0},{key:"item-icon_active",fn:function(){return[r("img",{attrs:{src:n("a5ef"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[t._v("分类")]},proxy:!0}])}),r("tab-bar-item",{attrs:{path:"/cart"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("d1c9"),alt:""}})]},proxy:!0},{key:"item-icon_active",fn:function(){return[r("img",{attrs:{src:n("1f92"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[t._v("购物车")]},proxy:!0}])}),r("tab-bar-item",{attrs:{path:"/profile"},scopedSlots:t._u([{key:"item-icon",fn:function(){return[r("img",{attrs:{src:n("e55d"),alt:""}})]},proxy:!0},{key:"item-icon_active",fn:function(){return[r("img",{attrs:{src:n("d151"),alt:""}})]},proxy:!0},{key:"item-text",fn:function(){return[t._v("我的")]},proxy:!0}])})],1)],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)])},s=[],f={name:"TabBar"},l=f,p=(n("7bf3"),n("2877")),h=Object(p["a"])(l,u,s,!1,null,null,null),d=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon_active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v=(n("ac1f"),n("5319"),{props:{path:String,activeColor:{type:String,default:"red"}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=v,y=(n("6721"),Object(p["a"])(g,m,b,!1,null,null,null)),k=y.exports,_={components:{TabBar:d,TabBarItem:k}},x=_,w=Object(p["a"])(x,i,a,!1,null,null,null),S=w.exports,O={name:"App",components:{MainTabBar:S},data:function(){return{isShow:!0}},updated:function(){},created:function(){var t=this;this.$bus.$on("mainTabBarShow",(function(){t.isShow=!0})),this.$bus.$on("mainTabBaNotshow",(function(){t.isShow=!1}))}},j=O,C=(n("034f"),Object(p["a"])(j,c,o,!1,null,null,null)),P=C.exports,$=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),E=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-5f3e0820"),n.e("chunk-79658b4e")]).then(n.bind(null,"b3d7"))},T=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-5f3e0820"),n.e("chunk-18f0127f")]).then(n.bind(null,"bb51"))},L=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-2b50b02f")]).then(n.bind(null,"c228"))},A=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-5f3e0820"),n.e("chunk-6d75b587")]).then(n.bind(null,"3b42"))},B=function(){return Promise.all([n.e("chunk-0b58c742"),n.e("chunk-5f3e0820"),n.e("chunk-7071ecb8")]).then(n.bind(null,"6ab7"))};r["a"].use($["a"]);var N=[{path:"",redirect:"/home"},{path:"/home",component:E},{path:"/category",component:T},{path:"/cart",component:L},{path:"/profile",component:A},{path:"/detail/:iid",component:B}],M=new $["a"]({routes:N,mode:"history",linkActiveClass:"active"}),I=$["a"].prototype.push;$["a"].prototype.push=function(t){return I.call(this,t).catch((function(t){return t}))};var D=$["a"].prototype.replace;$["a"].prototype.replace=function(t){return D.call(this,t).catch((function(t){return t}))};var q,J=M,F=n("2f62"),H=n("ade3"),K="add_counter",U="add_to_cart",z=(q={},Object(H["a"])(q,K,(function(t,e){e.count++})),Object(H["a"])(q,U,(function(t,e){e.count=1,e.checked=!0,t.cartList.push(e)})),q),G=(n("7db0"),{addCart:function(t,e){return new Promise((function(n,r){var c=t.state.cartList.find((function(t){return t.iid===e.iid}));c?(t.commit(K,c),n("商品数量加一")):(t.commit(U,e),n("添加购物车成功"))}))}}),Q={cartList:[]},R=n("b85c"),V={cartLength:function(t){var e,n=0,r=Object(R["a"])(t.cartList);try{for(r.s();!(e=r.n()).done;){var c=e.value;n+=c.count}}catch(o){r.e(o)}finally{r.f()}return n},cartList:function(t){return t.cartList}};r["a"].use(F["a"]);var W=new F["a"].Store({state:Q,mutations:z,actions:G,getters:V,modules:{}}),X=n("caf9"),Y=n("fe3c"),Z=n.n(Y),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},et=[],nt={name:"toast",data:function(){return{message:"",isShow:!1,timer:null}},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"默认显示",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;clearInterval(this.timer),this.message=e,this.isShow=!0,this.timer=setInterval((function(){t.message="",t.isShow=!1}),n)}}},rt=nt,ct=(n("0ce1"),Object(p["a"])(rt,tt,et,!1,null,null,null)),ot=ct.exports,it={install:function(){var t=r["a"].extend(ot),e=new t;e.$mount(document.createElement("div")),document.body.appendChild(e.$el),r["a"].prototype.$toast=e}},at=it;r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(at),r["a"].use(X["a"],{loading:n("bc5e")}),Z.a.attach(document.body),new r["a"]({router:J,store:W,render:function(t){return t(P)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.11368804.svg"},"5c48":function(t,e,n){},6721:function(t,e,n){"use strict";n("3704")},"7bf3":function(t,e,n){"use strict";n("3522")},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.43fd8010.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.e3dac1fb.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.74d1cc4d.svg"},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.48bcea0d.png"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.3ba58f85.svg"},d1c9:function(t,e,n){t.exports=n.p+"img/cart.fbc81098.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.c2b75dfe.svg"}});
//# sourceMappingURL=app.173849fc.js.map