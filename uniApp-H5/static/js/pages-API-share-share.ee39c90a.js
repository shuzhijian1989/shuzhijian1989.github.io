(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-share-share"],{3917:function(e,t,n){"use strict";var a=n("4ea4");n("4e82"),n("d3b7"),n("e25e"),n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),s={data:function(){return{title:"share",shareText:"uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",href:"https://uniapp.dcloud.io",image:"",shareType:1,providerList:[]}},computed:{isDisableButton:function(){return function(e){return 0===this.shareType&&"qq"===e.id||5===this.shareType&&"分享到微信好友"!==e.name}}},onShareAppMessage:function(){return{title:this.shareText?this.shareText:"欢迎体验uni-app",path:"/pages/tabBar/component/component",imageUrl:this.image?this.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png"}},onUnload:function(){this.shareText="uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！",this.href="https://uniapp.dcloud.io",this.image=""},onLoad:function(){var e=this;uni.getProvider({service:"share",success:function(t){console.log("success",t);for(var n=[],a=0;a<t.provider.length;a++)switch(t.provider[a]){case"weixin":n.push({name:"分享到微信好友",id:"weixin",sort:0}),n.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline",sort:1});break;case"sinaweibo":n.push({name:"分享到新浪微博",id:"sinaweibo",sort:2});break;case"qq":n.push({name:"分享到QQ",id:"qq",sort:3});break;default:break}e.providerList=n.sort((function(e,t){return e.sort-t.sort}))},fail:function(e){console.log("获取分享通道失败",e),uni.showModal({content:"获取分享通道失败",showCancel:!1})}})},methods:{share:function(e){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("分享通道:"+e.id+"； 分享类型:"+t.shareType),t.shareText||1!==t.shareType&&0!==t.shareType){n.next=4;break}return uni.showModal({content:"分享内容不能为空",showCancel:!1}),n.abrupt("return");case 4:if(t.image||2!==t.shareType&&0!==t.shareType){n.next=7;break}return uni.showModal({content:"分享图片不能为空",showCancel:!1}),n.abrupt("return");case 7:a={provider:e.id,scene:e.type&&"WXSenceTimeline"===e.type?"WXSenceTimeline":"WXSceneSession",type:t.shareType,success:function(e){console.log("success",e),uni.showModal({content:"已分享",showCancel:!1})},fail:function(e){console.log("fail",e),uni.showModal({content:e.errMsg,showCancel:!1})},complete:function(){console.log("分享操作结束!")}},n.t0=t.shareType,n.next=0===n.t0?11:1===n.t0?16:2===n.t0?18:5===n.t0?20:24;break;case 11:return a.summary=t.shareText,a.imageUrl=t.image,a.title="欢迎体验uniapp",a.href="https://uniapp.dcloud.io",n.abrupt("break",25);case 16:return a.summary=t.shareText,n.abrupt("break",25);case 18:return a.imageUrl=t.image,n.abrupt("break",25);case 20:return a.imageUrl=t.image?t.image:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png",a.title="欢迎体验uniapp",a.miniProgram={id:"gh_33446d7f7a26",path:"/pages/tabBar/component/component",webUrl:"https://uniapp.dcloud.io",type:0},n.abrupt("break",25);case 24:return n.abrupt("break",25);case 25:if(0!==a.type||"iOS"!==plus.os.name){n.next=29;break}return n.next=28,t.compress();case 28:a.imageUrl=n.sent;case 29:1===a.type&&"qq"===a.provider&&(a.href="https://uniapp.dcloud.io",a.title="欢迎体验uniapp"),uni.share(a);case 31:case"end":return n.stop()}}),n)})))()},radioChange:function(e){console.log("type:"+e.detail.value),this.shareType=parseInt(e.detail.value)},chooseImage:function(){var e=this;uni.chooseImage({count:1,sourceType:["album","camera"],sizeType:["compressed","original"],success:function(t){e.image=t.tempFilePaths[0]},fail:function(e){}})},compress:function(){console.log("开始压缩");var e=this.image;return new Promise((function(t){var n=plus.io.convertAbsoluteFileSystem(e.replace("file://",""));console.log("after"+n),plus.io.resolveLocalFileSystemURL(n,(function(n){n.file((function(n){console.log("getFile:"+JSON.stringify(n)),n.size>20480&&plus.zip.compressImage({src:e,dst:e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},(function(n){console.log("success zip****"+n.size);var a=e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");t(a)}),(function(e){uni.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})}))}))}),(function(e){console.log("Resolve file URL failed: "+e.message),uni.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})}))}))}}};t.default=s},a12b:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-title"},[e._v("分享内容")]),n("v-uni-view",{staticClass:"uni-textarea"},[n("v-uni-textarea",{staticClass:"textarea",model:{value:e.shareText,callback:function(t){e.shareText=t},expression:"shareText"}})],1),n("v-uni-view",{staticClass:"uni-title"},[e._v("分享图片：")]),n("v-uni-view",{staticClass:"uni-uploader",staticStyle:{padding:"15rpx",background:"#FFF"}},[e.image?e._e():n("v-uni-view",{staticClass:"uni-uploader__input-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}}),e.image?n("v-uni-image",{staticClass:"uni-uploader__img",attrs:{src:e.image}}):e._e()],1)],1)],1)},s=[]},b347:function(e,t,n){"use strict";n.r(t);var a=n("a12b"),i=n("dbc7");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);var r,o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"f9bea192",null,!1,a["a"],r);t["default"]=u.exports},dbc7:function(e,t,n){"use strict";n.r(t);var a=n("3917"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a}}]);