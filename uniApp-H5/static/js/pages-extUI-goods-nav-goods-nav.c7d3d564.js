(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-goods-nav-goods-nav"],{"040f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n\n/* 头条小程序组件内不能引入字体 */\nuni-page-body[data-v-9d28dc70]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-9d28dc70]{font-size:14px;line-height:inherit}.example[data-v-9d28dc70]{padding:0 15px 15px}.example-info[data-v-9d28dc70]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-9d28dc70]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-9d28dc70]{padding:0 15px}.example-info[data-v-9d28dc70]{\ndisplay:block;\npadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-9d28dc70]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-9d28dc70]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-9d28dc70]{font-size:18px;color:#fff}.word-btn[data-v-9d28dc70]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-9d28dc70]{background-color:#4ca2ff}.example-body[data-v-9d28dc70]{padding:0;\ndisplay:block\n}.goods-carts[data-v-9d28dc70]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:fixed;left:0;right:0;bottom:0}body.?%PAGE?%[data-v-9d28dc70]{background-color:#efeff4}',""]),t.exports=e},"2ba4":function(t,e,i){"use strict";i.r(e);var n=i("7bd7"),o=i("f225");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("7b60");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"7bc22022",null,!1,n["a"],l);e["default"]=c.exports},"2e5a":function(t,e,i){"use strict";i.r(e);var n=i("f850"),o=i("8d94");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("40f8");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"3f87abbd",null,!1,n["a"],l);e["default"]=c.exports},"36bd":function(t,e,i){"use strict";var n=i("4ea4");i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("f2a0")),a={name:"UniIcons",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:o.default}},methods:{_onClick:function(){this.$emit("click")}}};e.default=a},"40f8":function(t,e,i){"use strict";var n=i("62f6"),o=i.n(n);o.a},5588:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("2ba4")),a={name:"UniGoodsNav",components:{uniIcons:o.default},props:{options:{type:Array,default:function(){return[{icon:"shop",text:"店铺"},{icon:"cart",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff"},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,e){this.$emit("click",{index:t,content:e})},buttonClick:function(t,e){uni.report&&uni.report(e.text,e.text),this.$emit("buttonClick",{index:t,content:e})}}};e.default=a},"5a45":function(t,e,i){var n=i("be12");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("58409174",n,!0,{sourceMap:!1,shadowMode:!1})},"5a6b":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("2ba4").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-goods-nav"},[i("v-uni-view",{staticClass:"uni-tab__seat"}),i("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-left"},t._l(t.options,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick(n,e)}}},[i("v-uni-view",{staticClass:"uni-tab__icon"},[i("uni-icons",{attrs:{type:e.icon,size:"20",color:"#646566"}})],1),i("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(e.text))]),i("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[e.info?i("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":e.info>9},style:{backgroundColor:e.infoBackgroundColor?e.infoBackgroundColor:"#ff0000",color:e.infoColor?e.infoColor:"#fff"}},[t._v(t._s(e.info))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"flex uni-tab__cart-sub-right ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(e,n){return i("v-uni-view",{key:n,staticClass:"flex uni-tab__cart-button-right",style:{backgroundColor:e.backgroundColor,color:e.color},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.buttonClick(n,e)}}},[i("v-uni-text",{staticClass:"uni-tab__cart-button-right-text",style:{color:e.color}},[t._v(t._s(e.text))])],1)})),1)],1)],1)},a=[]},"5bb2":function(t,e,i){"use strict";i.r(e);var n=i("a0de"),o=i("ffbe");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("a982");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"9d28dc70",null,!1,n["a"],l);e["default"]=c.exports},"62f6":function(t,e,i){var n=i("bb4d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("20d530d0",n,!0,{sourceMap:!1,shadowMode:!1})},"6c2a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},data:function(){return{options:[{icon:"headphones",text:"客服"},{icon:"shop",text:"店铺",info:2,infoBackgroundColor:"#007aff",infoColor:"#f5f5f5"},{icon:"cart",text:"购物车",info:2}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ffa200",color:"#fff"},{text:"立即购买",backgroundColor:"#ff0000",color:"#fff"}]}},onLoad:function(){},methods:{onClick:function(t){uni.showToast({title:"点击".concat(t.content.text),icon:"none"})},buttonClick:function(t){console.log(t),this.options[2].info++}}};e.default=n},"7b60":function(t,e,i){"use strict";var n=i("96a8"),o=i.n(n);o.a},"7bd7":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-text",{staticClass:"uni-icons",class:[t.customIcons,t.customIcons?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.icons[t.type]))])},a=[]},"80c7":function(t,e,i){t.exports=i.p+"static/fonts/uni.75745d34.ttf"},"8d94":function(t,e,i){"use strict";i.r(e);var n=i("dfda"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},9207:function(t,e,i){"use strict";i.r(e);var n=i("5588"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"92b7":function(t,e,i){var n=i("040f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("5d1e4a0a",n,!0,{sourceMap:!1,shadowMode:!1})},"96a8":function(t,e,i){var n=i("db43");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("41eba8a8",n,!0,{sourceMap:!1,shadowMode:!1})},a0de:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniSection:i("2e5a").default,uniGoodsNav:i("edd1").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-text",{staticClass:"example-info"},[t._v("uni-goods-nav 组件主要用于电商类应用底部导航，可自定义加入购物车，购买等操作")]),i("uni-section",{attrs:{title:"基础用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-goods-nav",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}})],1),i("uni-section",{attrs:{title:"自定义用法",type:"line"}}),i("v-uni-view",{staticClass:"example-body"},[i("uni-goods-nav",{attrs:{fill:!0,options:t.options,"button-group":t.buttonGroup},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},buttonClick:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"goods-carts"},[i("uni-goods-nav",{attrs:{options:t.options,fill:!0,"button-group":t.buttonGroup},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},buttonClick:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick.apply(void 0,arguments)}}})],1)],1)},a=[]},a377:function(t,e,i){"use strict";var n=i("5a45"),o=i.n(n);o.a},a982:function(t,e,i){"use strict";var n=i("92b7"),o=i.n(n);o.a},bb4d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-section[data-v-3f87abbd]{position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\nfont-weight:400}\n.uni-section__head[data-v-3f87abbd]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-3f87abbd]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-3f87abbd]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-3f87abbd]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-3f87abbd]{font-size:14px;color:#333}.distraction[data-v-3f87abbd]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-3f87abbd]{font-size:12px;color:#999}",""]),t.exports=e},be12:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".flex[data-v-482b98a2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-goods-nav[data-v-482b98a2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-tab__cart-box[data-v-482b98a2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:50px;background-color:#fff;z-index:900}.uni-tab__cart-sub-left[data-v-482b98a2]{padding:0 5px}.uni-tab__cart-sub-right[data-v-482b98a2]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-tab__right[data-v-482b98a2]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-482b98a2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nposition:relative;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:0 10px}.uni-tab__icon[data-v-482b98a2]{width:18px;height:18px}.image[data-v-482b98a2]{width:18px;height:18px}.uni-tab__text[data-v-482b98a2]{margin-top:3px;font-size:12px;color:#646566}.uni-tab__cart-button-right[data-v-482b98a2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-tab__cart-button-right-text[data-v-482b98a2]{font-size:14px;color:#fff}.uni-tab__cart-button-right[data-v-482b98a2]:active{opacity:.7}.uni-tab__dot-box[data-v-482b98a2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\nposition:absolute;right:-2px;top:2px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-tab__dot[data-v-482b98a2]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-482b98a2]{padding:0 4px;border-radius:15px}.uni-tab__color-y[data-v-482b98a2]{background-color:#ffa200}.uni-tab__color-r[data-v-482b98a2]{background-color:red}",""]),t.exports=e},db43:function(t,e,i){var n=i("24fb"),o=i("1de5"),a=i("80c7");e=n(!1);var l=o(a);e.push([t.i,"\n@font-face{font-family:uniicons;src:url("+l+') format("truetype")}\n.uni-icons[data-v-7bc22022]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=e},dfda:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniSection",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},edd1:function(t,e,i){"use strict";i.r(e);var n=i("5a6b"),o=i("9207");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("a377");var l,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"482b98a2",null,!1,n["a"],l);e["default"]=c.exports},f225:function(t,e,i){"use strict";i.r(e);var n=i("36bd"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},f2a0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};e.default=n},f850:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-section",attrs:{nvue:!0}},[t.type?i("v-uni-view",{staticClass:"uni-section__head"},[i("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),i("v-uni-view",{staticClass:"uni-section__content"},[i("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[]},ffbe:function(t,e,i){"use strict";i.r(e);var n=i("6c2a"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a}}]);