(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-slider-slider"],{1099:function(n,e,i){"use strict";i.r(e);var t=i("c484"),a=i.n(t);for(var u in t)["default"].indexOf(u)<0&&function(n){i.d(e,n,(function(){return t[n]}))}(u);e["default"]=a.a},"7bdf":function(n,e,i){"use strict";i.r(e);var t=i("7e82"),a=i("1099");for(var u in a)["default"].indexOf(u)<0&&function(n){i.d(e,n,(function(){return a[n]}))}(u);var l,r=i("f0c5"),v=Object(r["a"])(a["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],l);e["default"]=v.exports},"7e82":function(n,e,i){"use strict";var t;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return u})),i.d(e,"a",(function(){return t}));var a=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:n.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"uni-title"},[n._v("显示当前value")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"50","show-value":!0},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.sliderChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"uni-title"},[n._v("设置步进step跳动")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"60",step:"5"},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.sliderChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"uni-title"},[n._v("设置最小/最大值")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"100",min:"50",max:"200","show-value":!0},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.sliderChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"uni-title"},[n._v("不同颜色和大小的滑块")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"50",activeColor:"#FFCC33",backgroundColor:"#000000","block-color":"#8A6DE9","block-size":"20"},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.sliderChange.apply(void 0,arguments)}}})],1)],1)],1)},u=[]},c484:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{title:"slider 滑块"}},methods:{sliderChange:function(n){console.log("value 发生变化："+n.detail.value)}}};e.default=t}}]);