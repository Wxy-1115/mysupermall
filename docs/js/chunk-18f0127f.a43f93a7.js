(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18f0127f"],{"32cc":function(t,e,n){"use strict";n("5052")},4074:function(t,e,n){"use strict";n("9fe6")},5052:function(t,e,n){},6568:function(t,e,n){"use strict";n("ac10")},"9fe6":function(t,e,n){},ac10:function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("scroll",{staticClass:"contentleft"},[n("category-tab-content",{attrs:{categoryList:t.categoryList},on:{itemClick:t.itemClick}})],1),n("scroll",{ref:"scroll",staticClass:"content"},[n("category-goods-list",{attrs:{goodsList:t.categoryGoodsList}})],1)],1)},o=[],s=n("1bab");function a(){return Object(s["b"])({url:"/category"})}function c(t){return Object(s["b"])({url:"/subcategory",params:{maitKey:t}})}function r(t,e){return Object(s["b"])({url:"/subcategory/detail",params:{miniWallkey:t,type:e}})}var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-content"},t._l(t.categoryList,(function(e,i){return n("div",{key:i,staticClass:"list-item",class:{active:t.currentIndex==i},on:{click:function(e){return t.itemClick(i)}}},[t._v(" "+t._s(e.title)+" ")])})),0)},l=[],f={name:"CategoryTabContent",props:{categoryList:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("itemClick",t)}}},y=f,g=(n("6568"),n("2877")),d=Object(g["a"])(y,u,l,!1,null,"799e4d86",null),m=d.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("goods-list",{staticClass:"category-goods-list",attrs:{goods:t.goodsList}})},h=[],C=n("6d71"),p={components:{GoodsList:C["a"]},name:"CategoryGoodsList",props:{goodsList:{type:Array,default:function(){return[]}}}},L=p,v=(n("32cc"),Object(g["a"])(L,b,h,!1,null,null,null)),k=v.exports,_=n("5d17"),w={name:"Category",components:{CategoryTabContent:m,CategoryGoodsList:k,Scroll:_["a"]},data:function(){return{categoryList:[],categoryGoodsList:[],maitKey:3627,miniWallkey:10062603}},created:function(){this.getCategory(),this.getSubCategory(this.maitKey)},activated:function(){this.$refs.scroll.refresh(),this.$bus.$emit("mainTabBarShow")},methods:{itemClick:function(t){this.maitKey=this.categoryList[t].maitKey,this.getSubCategory(this.maitKey)},getCategory:function(){var t=this;a().then((function(e){var n=e.data.category;t.categoryList=n.list}))},getSubCategory:function(t){var e=this;c(t).then((function(t){e.categoryGoodsList=t.data.list}))},getCategoryDetail:function(t,e){r(t,e).then((function(t){}))}}},$=w,j=(n("4074"),Object(g["a"])($,i,o,!1,null,"7875d344",null));e["default"]=j.exports}}]);
//# sourceMappingURL=chunk-18f0127f.a43f93a7.js.map