(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-component-component"],{"16fe":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-header-logo"},[a("v-uni-image",{staticClass:"uni-header-image",attrs:{src:"/static/componentIndex.png"}})],1),a("v-uni-view",{staticClass:"uni-hello-text"},[a("v-uni-text",{staticClass:"hello-text"},[t._v("uni-app内置组件，展示样式仅供参考，文档详见：")]),a("u-link",{staticClass:"hello-link",attrs:{href:"https://uniapp.dcloud.io/component/",text:"https://uniapp.dcloud.io/component/",inWhiteList:!0}})],1),t._l(t.list,(function(e,n){return a("v-uni-view",{key:e.id,staticClass:"uni-panel"},[a("v-uni-view",{staticClass:"uni-panel-h",class:e.open?"uni-panel-h-on":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.triggerCollapse(n)}}},[a("v-uni-text",{staticClass:"uni-panel-text"},[t._v(t._s(e.name))]),a("v-uni-text",{staticClass:"uni-panel-icon uni-icon",class:e.open?"uni-panel-icon-on":""},[t._v(t._s(e.pages?"":""))])],1),e.open?a("v-uni-view",{staticClass:"uni-panel-c"},t._l(e.pages,(function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-navigate-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goDetailPage(e)}}},[a("v-uni-text",{staticClass:"uni-navigate-text"},[t._v(t._s(e.name?e.name:e))]),a("v-uni-text",{staticClass:"uni-navigate-icon uni-icon"},[t._v("")])],1)})),1):t._e()],1)}))],2)},o=[]},"773c":function(t,e,a){"use strict";var n=a("fe7c"),i=a.n(n);i.a},"7d80":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("fad7")),o={components:{uLink:i.default},data:function(){return{list:[{id:"view",name:"视图容器",open:!1,pages:["view","scroll-view","swiper","movable-view","cover-view"]},{id:"content",name:"基础内容",open:!1,pages:["text","rich-text","progress"]},{id:"form",name:"表单组件",open:!1,pages:["button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea","editor"]},{id:"nav",name:"导航",open:!1,pages:["navigator"]},{id:"media",name:"媒体组件",open:!1,pages:["image","video","audio"]},{id:"map",name:"地图",open:!1,pages:["map"]},{id:"canvas",name:"画布",open:!1,pages:["canvas"]},{id:"web-view",name:"网页",open:!1,pages:[{name:"网络网页",url:"/pages/component/web-view/web-view"},{name:"本地网页",url:"/pages/component/web-view-local/web-view-local"}]}],navigateFlag:!1}},onShareAppMessage:function(){return{title:"欢迎体验uni-app",path:"/pages/tabBar/component/component"}},onNavigationBarButtonTap:function(t){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse:function(t){if(this.list[t].pages)for(var e=0;e<this.list.length;++e)this.list[e].open=t===e&&!this.list[t].open;else this.goDetailPage(this.list[t].url)},goDetailPage:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,"string"===typeof t?uni.navigateTo({url:"/pages/component/"+t+"/"+t}):uni.navigateTo({url:t.url}),setTimeout((function(){e.navigateFlag=!1}),200))}}};e.default=o},ba867:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-aa007a4c]{min-height:100%;height:auto}\n\n/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */\n.uni-icon[data-v-aa007a4c]{font-family:uniicons;font-weight:400}.uni-container[data-v-aa007a4c]{padding:15px;background-color:#f8f8f8}.uni-header-logo[data-v-aa007a4c]{padding:15px 15px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%}.uni-header-image[data-v-aa007a4c]{width:80px;height:80px}.uni-hello-text[data-v-aa007a4c]{margin-bottom:20px}.hello-text[data-v-aa007a4c]{color:#7a7e83;font-size:14px;line-height:20px}.hello-link[data-v-aa007a4c]{color:#7a7e83;font-size:14px;line-height:20px}.uni-panel[data-v-aa007a4c]{margin-bottom:12px}.uni-panel-h[data-v-aa007a4c]{background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:12px}\n/*\n.uni-panel-h:active {\n    background-color: #f8f8f8;\n}\n */.uni-panel-h-on[data-v-aa007a4c]{background-color:#f0f0f0}.uni-panel-text[data-v-aa007a4c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-panel-icon[data-v-aa007a4c]{margin-left:15px;color:#999;font-size:14px;font-weight:400;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition-duration:0s;transition-duration:0s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.uni-panel-icon-on[data-v-aa007a4c]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-navigate-item[data-v-aa007a4c]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;border-top-style:solid;border-top-color:#f0f0f0;border-top-width:1px;padding:12px}.uni-navigate-item[data-v-aa007a4c]:active{background-color:#f8f8f8}.uni-navigate-text[data-v-aa007a4c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#000;font-size:14px;font-weight:400}.uni-navigate-icon[data-v-aa007a4c]{margin-left:15px;color:#999;font-size:14px;font-weight:400}",""]),t.exports=e},d2f4:function(t,e,a){"use strict";a.r(e);var n=a("16fe"),i=a("e498");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("773c");var r,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"aa007a4c",null,!1,n["a"],r);e["default"]=s.exports},e498:function(t,e,a){"use strict";a.r(e);var n=a("7d80"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},fe7c:function(t,e,a){var n=a("ba867");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5d75da47",n,!0,{sourceMap:!1,shadowMode:!1})}}]);