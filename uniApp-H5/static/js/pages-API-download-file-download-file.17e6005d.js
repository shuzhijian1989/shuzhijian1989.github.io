(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-download-file-download-file"],{"35a6":function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{title:"downloadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{downloadImage:function(){uni.showLoading({title:"下载中"});var n=this;uni.downloadFile({url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(i){console.log("downloadFile success, res is",i),n.imageSrc=i.tempFilePath,uni.hideLoading()},fail:function(n){console.log("downloadFile fail, err is:",n)}})}}};i.default=e},"695a":function(n,i,t){"use strict";t.r(i);var e=t("7028"),a=t("9019");for(var o in a)["default"].indexOf(o)<0&&function(n){t.d(i,n,(function(){return a[n]}))}(o);t("b703");var u,c=t("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"49a7438c",null,!1,e["a"],u);i["default"]=r.exports},7028:function(n,i,t){"use strict";var e;t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return e}));var a=function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("v-uni-view",[t("page-head",{attrs:{title:n.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n.imageSrc?t("v-uni-image",{staticClass:"img",attrs:{src:n.imageSrc,mode:"center"}}):[t("v-uni-view",{staticClass:"uni-hello-text"},[n._v("点击按钮下载服务端示例图片（下载网络文件到本地临时目录）")]),t("v-uni-view",{staticClass:"uni-btn-v"},[t("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=n.$handleEvent(i),n.downloadImage.apply(void 0,arguments)}}},[n._v("下载")])],1)]],2)],1)},o=[]},7527:function(n,i,t){var e=t("24fb");i=e(!1),i.push([n.i,".img[data-v-49a7438c]{width:%?500?%;height:%?500?%;margin:0 %?95?%}",""]),n.exports=i},9019:function(n,i,t){"use strict";t.r(i);var e=t("35a6"),a=t.n(e);for(var o in e)["default"].indexOf(o)<0&&function(n){t.d(i,n,(function(){return e[n]}))}(o);i["default"]=a.a},b696:function(n,i,t){var e=t("7527");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=t("4f06").default;a("43d77cc7",e,!0,{sourceMap:!1,shadowMode:!1})},b703:function(n,i,t){"use strict";var e=t("b696"),a=t.n(e);a.a}}]);