(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-on-compass-change-on-compass-change"],{"1f70":function(t,i,e){t.exports=e.p+"static/img/compass.acb5847f.png"},"27a1":function(t,i,e){"use strict";e("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{title:"onCompassChange",direction:0}},onReady:function(){var t=this;uni.onCompassChange((function(i){t.direction=parseInt(i.direction)}))},onUnload:function(){uni.startCompass(),this.direction=0}};i.default=n},"4f31":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-hello-text uni-center",staticStyle:{"padding-bottom":"50rpx"}},[t._v("旋转手机即可获取方位信息")]),n("v-uni-view",{staticClass:"direction"},[n("v-uni-view",{staticClass:"bg-compass-line"}),n("v-uni-image",{staticClass:"bg-compass",style:"transform: rotate("+t.direction+"deg)",attrs:{src:e("1f70")}}),n("v-uni-view",{staticClass:"direction-value"},[n("v-uni-text",[t._v(t._s(t.direction))]),n("v-uni-text",{staticClass:"direction-degree"},[t._v("o")])],1)],1)],1)],1)},o=[]},5723:function(t,i,e){"use strict";e.r(i);var n=e("27a1"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},"605d":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,".direction[data-v-0170e7c0]{position:relative;margin-top:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;width:%?540?%;height:%?540?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin:0 auto}.direction-value[data-v-0170e7c0]{position:relative;font-size:%?200?%;color:#353535;line-height:1;z-index:1}.direction-degree[data-v-0170e7c0]{position:absolute;top:0;right:%?-40?%;font-size:%?60?%}.bg-compass[data-v-0170e7c0]{position:absolute;top:0;left:0;width:%?540?%;height:%?540?%;-webkit-transition:.1s;transition:.1s}.bg-compass-line[data-v-0170e7c0]{position:absolute;left:%?267?%;top:%?-10?%;width:%?6?%;height:%?56?%;background-color:#1aad19;border-radius:%?999?%;z-index:1}",""]),t.exports=i},6208:function(t,i,e){"use strict";e.r(i);var n=e("4f31"),a=e("5723");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("ddf9");var s,r=e("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"0170e7c0",null,!1,n["a"],s);i["default"]=c.exports},"9f38":function(t,i,e){var n=e("605d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("8712e58a",n,!0,{sourceMap:!1,shadowMode:!1})},ddf9:function(t,i,e){"use strict";var n=e("9f38"),a=e.n(n);a.a}}]);