(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-component-communication-component-communication"],{"0a1e":function(e,t,n){"use strict";n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={methods:{send:function(){var e=parseInt(1e4*Math.random());uni.$emit("cc",{msg:"From uni.$emit -> "+e})}}};t.default=r},2787:function(e,t,n){var r=n("c534");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("4e7909ae",r,!0,{sourceMap:!1,shadowMode:!1})},2833:function(e,t,n){"use strict";n.r(t);var r=n("bf67"),a=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},3464:function(e,t,n){"use strict";var r=n("edae"),a=n.n(r);a.a},"420a":function(e,t,n){"use strict";var r=n("cc25"),a=n.n(r);a.a},"48b5":function(e,t,n){"use strict";n.r(t);var r=n("a5ee"),a=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},"56c1":function(e,t,n){"use strict";n.r(t);var r=n("0a1e"),a=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},"58b8":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"reciver"},[e._v(e._s(""===e.msg?"等待发送":"收到消息：")+e._s(e.msg))])],1)},u=[]},5918:function(e,t,n){"use strict";var r=n("2787"),a=n.n(r);a.a},"5bd6":function(e,t,n){"use strict";n.r(t);var r=n("c3a1"),a=n("2833");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("5918");var c,i=n("f0c5"),f=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"7f0ffd52",null,!1,r["a"],c);t["default"]=f.exports},"5c23":function(e,t,n){"use strict";n.r(t);var r=n("a668"),a=n("56c1");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("420a");var c,i=n("f0c5"),f=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"8a1ffc22",null,!1,r["a"],c);t["default"]=f.exports},"7c76":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("e143")),u=new a.default;t.default=u},"7dd2":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("c822")),u=r(n("5c23")),c=r(n("5bd6")),i={components:{reciver:a.default,sender:u.default,senderBus:c.default},data:function(){return{}},methods:{}};t.default=i},"81cd":function(e,t,n){"use strict";n.r(t);var r=n("7dd2"),a=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},a5ee:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("7c76")),u={data:function(){return{msg:""}},created:function(){uni.$on("cc",this.recive),a.default.$on("cc",this.recive)},beforeDestroy:function(){uni.$off("cc",this.recive),a.default.$off("cc",this.recive)},methods:{recive:function(e){this.msg=e.msg}}};t.default=u},a668:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.send.apply(void 0,arguments)}}},[e._v("点击发送消息")])],1)},u=[]},b1b8:function(e,t,n){"use strict";n.r(t);var r=n("d3c5"),a=n("81cd");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);var c,i=n("f0c5"),f=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"7c80fd46",null,!1,r["a"],c);t["default"]=f.exports},b41d:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".sender-container[data-v-8a1ffc22]{padding:20px}",""]),e.exports=t},bf67:function(e,t,n){"use strict";var r=n("4ea4");n("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("7c76")),u={methods:{send:function(){var e=parseInt(1e4*Math.random());a.default.$emit("cc",{msg:"From event bus -> "+e})}}};t.default=u},c3a1:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"sender-container"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.send.apply(void 0,arguments)}}},[e._v("自定义EventBus")])],1)},u=[]},c534:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".sender-container[data-v-7f0ffd52]{padding:20px}",""]),e.exports=t},c822:function(e,t,n){"use strict";n.r(t);var r=n("58b8"),a=n("48b5");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("3464");var c,i=n("f0c5"),f=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"5ba2edae",null,!1,r["a"],c);t["default"]=f.exports},cc25:function(e,t,n){var r=n("b41d");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("10d1f208",r,!0,{sourceMap:!1,shadowMode:!1})},d3c5:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:"组件通讯示例"}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-btn-v"},[n("reciver"),n("sender"),n("sender-bus")],1)],1)],1)},u=[]},edae:function(e,t,n){var r=n("fd09");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("8bd0a7b4",r,!0,{sourceMap:!1,shadowMode:!1})},fd09:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".reciver[data-v-5ba2edae]{padding:40px 0;text-align:center;line-height:40px}",""]),e.exports=t}}]);