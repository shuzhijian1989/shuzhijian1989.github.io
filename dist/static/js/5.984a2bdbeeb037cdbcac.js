webpackJsonp([5],{i6kh:function(t,e){},wJne:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("R2Fy"),i=a("mtWM"),o=a.n(i),c=a("162o"),n={data:function(){return{applicaTitle:"",feedbackTitle:"申请反馈",Feedback:"",details:[{name:"预约场馆",key:"roomName"},{name:"申请人",key:"publisher"},{name:"电话",key:"phone"},{name:"开始时间",key:"startTime"},{name:"使用时长",key:"toFixed"},{name:"场馆地址",key:"address"}],object:{},status:"",footerName:[{name:"拒绝",key:"",booler:!1,className:"refuseDetails"},{name:"通过",key:"",booler:!0,className:"byDetails"},{name:"取消",key:"",booler:!0,className:"cancel cancelDetails refuseDetails"}],typleNamesState:!1,footerBl:!1,cancel:!1,cancels:!1}},created:function(){localStorage.typleNames,this.detailsList()},methods:{detailsList:function(){var t=localStorage.typleNames;"预约已审"==t&&(this.typleNamesState=!0);var e=this.$route.params.item;if(e){("预约已审"==t&&"y"==e.status||"预约待审"==t&&"d"==e.status)&&(this.footerBl=this.cancel=!0),"审核待审"==t&&(this.footerBl=this.cancels=!0),e.appBoardroomOrder&&(e.appBoardroomOrder.fatherId=e.id);var a=e.appBoardroomOrder||e;this.object=a,a.roomName=a.appBoardroomDetail.roomName,a.address=a.appBoardroomDetail.address,a.toFixed=this.toFixed(a.startTime,a.deadLine),this.applicaTitle=a.publisher,this.status=a.status}},toFixed:function(t,e){var a=Date.parse(new Date(t.replace(/[-]/g,"/")));return((Date.parse(new Date(e.replace(/[-]/g,"/")))-a)/1e3/60/60).toFixed(1)+"小时"},cancelAppmt:function(t){var e=this.$Toast,a=this;e.showDialog({title:"",content:"确定取消预约？",showCancel:!0,success:function(s){"confirm"==s.value&&o.a.post("iapp/api/app/boardroom/appoint/disa/"+t).then(function(t){"200"==t.data.code&&(e.showToast({title:t.data.msg,mask:!1,icon:"icon-success",duration:1e3}),200==t.data.code&&Object(c.setTimeout)(function(){a.$router.go(-1)},2e3))}),"cancel"==s.value&&e.showToast({title:"取消失败",duration:1500})}})},byRejecting:function(t,e){var a=this.$Toast,s=this,i=e?"是否确定通过？":"是否拒绝？";a.showDialog({title:"",content:i,showCancel:!0,success:function(i){"confirm"==i.value&&o.a.post("iapp/api/app/boardroom/verify/"+t,{params:{audit:s.Feedback,flag:e,t:(new Date).getTime()}}).then(function(t){a.showToast({title:t.data.msg,duration:1500}),200==t.data.code&&Object(c.setTimeout)(function(){s.$router.go(-1)},2e3)})}})}},components:{VenueHead:s.a}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"venue_details"},[a("venue-head",{attrs:{title:"详情",down:"",booler:t.object.past}}),t._v(" "),a("div",{staticClass:"applicat-title"},[t._v(t._s(t.applicaTitle)+"的预约申请")]),t._v(" "),a("ul",{staticClass:"applicatLists"},t._l(t.details,function(e,s){return a("li",{key:s},[a("span",{staticClass:"name"},[t._v(t._s(e.name))]),t._v("：\n      "),a("span",{staticClass:"key"},[t._v(t._s(t.object[e.key]))])])}),0),t._v(" "),a("div",{staticClass:"feedback-title"},[t._v(t._s(t.feedbackTitle))]),t._v(" "),a("ul",{staticClass:"feedbackLists"},[t.object.past?["n"!==t.object.status?a("li",[a("span",{staticClass:"name"},[t._v("审核状态")]),t._v(" "),"o"==t.object.status?a("span",{staticClass:"key",staticStyle:{color:"#1f95ff"}},[t._v("通过")]):t._e(),t._v(" "),"y"==t.object.status?a("span",{staticClass:"key",staticStyle:{color:"#1f95ff"}},[t._v("通过")]):t._e(),t._v(" "),"n"==t.object.status?a("span",{staticClass:"key",staticStyle:{color:"red"}},[t._v("拒绝")]):t._e(),t._v(" "),"q"==t.object.status?a("span",{staticClass:"key",staticStyle:{color:"red"}},[t._v("已取消")]):t._e()]):t._e(),t._v(" "),t._m(0)]:[a("li",[a("span",{staticClass:"name"},[t._v("审核状态")]),t._v(" "),"o"==t.object.status?a("span",{staticClass:"key"},[t._v("待审核")]):t._e(),t._v(" "),"d"==t.object.status?a("span",{staticClass:"key"},[t._v("待审核")]):t._e(),t._v(" "),"q"==t.object.status?a("span",{staticClass:"key",staticStyle:{color:"red"}},[t._v("已取消")]):t._e()]),t._v(" "),"q"!==t.object.status?a("li",[a("span",{staticClass:"name"},[t._v("意见反馈")]),t._v(" "),a("span",{staticClass:"key textarea"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Feedback,expression:"Feedback"}],attrs:{placeholder:"同意使用， 请使用完毕后物品放回原位",name:"",id:"",cols:"auto",rows:"auto"},domProps:{value:t.Feedback},on:{input:function(e){e.target.composing||(t.Feedback=e.target.value)}}})])]):t._e()]],2),t._v(" "),t.footerBl?[a("div",{staticClass:"footerDetails"},[t.cancel?a("a",{staticClass:"refuseDetails",attrs:{href:"javascript:;"},on:{click:function(e){return t.cancelAppmt(t.object.fatherId||t.object.id)}}},[t._v("取消")]):t._e(),t._v(" "),t.cancels?a("a",{staticClass:"refuseDetails",attrs:{href:"javascript:;"},on:{click:function(e){return t.byRejecting(t.object.fatherId||t.object.id,!1)}}},[t._v("拒绝")]):t._e(),t._v(" "),t.cancels?a("a",{staticClass:"byDetails",attrs:{href:"javascript:;"},on:{click:function(e){return t.byRejecting(t.object.fatherId||t.object.id,!0)}}},[t._v("通过")]):t._e()])]:t._e()],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",{staticClass:"name"},[this._v("意见反馈")]),this._v(" "),e("span",{staticClass:"key"},[this._v("同意使用， 请使用完毕后物品放回原位")])])}]};var r=a("VU/8")(n,l,!1,function(t){a("i6kh")},"data-v-a4818fc0",null);e.default=r.exports}});
//# sourceMappingURL=5.984a2bdbeeb037cdbcac.js.map