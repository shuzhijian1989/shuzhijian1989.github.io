(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-network-type-get-network-type"],{"63f1":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{title:"getNetworkType",hasNetworkType:!1,networkType:""}},onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){var t=this;uni.getNetworkType({success:function(n){console.log(n),t.hasNetworkType=!0,t.networkType=n.subtype||n.networkType},fail:function(){uni.showModal({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType=""}}};n.default=i},"88b8":function(t,n,e){"use strict";e.r(n);var i=e("63f1"),o=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},"9bab":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"40rpx"}},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("网络状态")]),!1===t.hasNetworkType?[e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v("未获取")]),e("v-uni-view",{staticClass:"uni-hello-text uni-center uni-common-mt"},[t._v("请点击下面按钮获取网络状态")])]:t._e(),!0===t.hasNetworkType?[e("v-uni-view",{staticClass:"uni-h2 uni-center uni-common-mt"},[t._v(t._s(t.networkType))])]:t._e()],2),e("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[e("v-uni-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.getNetworkType.apply(void 0,arguments)}}},[t._v("获取手机网络状态")]),e("v-uni-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t._v("清空")])],1)],1)],1)},u=[]},c7b2:function(t,n,e){"use strict";e.r(n);var i=e("9bab"),o=e("88b8");for(var u in o)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(u);var a,r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"008ada4d",null,!1,i["a"],a);n["default"]=c.exports}}]);