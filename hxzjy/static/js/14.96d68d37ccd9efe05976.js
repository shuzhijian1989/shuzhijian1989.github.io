webpackJsonp([14],{DC44:function(t,e){},Eavx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"cfg",function(){return r});var r={mainColor:"rgb(22, 155, 213)",secondColor:"#185ff1",route:[{path:"/height/",meta:{title:"首页",mark:"index"}},{path:"/height/news",meta:{mark:"news",title:"校园资讯"}},{path:"/height/platform",meta:{mark:"platform",title:"平台通"}},{path:"/height/department",meta:{title:"部门通",mark:"department"}},{path:"/height/schoolClass",meta:{title:"班班通",mark:"class"}},{path:"/height/schoolSpace?role=teacher&school=height",meta:{title:"人人通",mark:"space"}},{path:"/height/resource",meta:{title:"资源通",mark:"res"}},{path:"/height/introLayouts/schoolIntroduce",meta:{title:"关于我校",mark:"introduce"}}],banner:""}},Nb4C:function(t,e){},b8di:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("lC5x"),s=a.n(r),i=a("J0Oq"),o=a.n(i),n=a("gyMJ"),c={data:function(){return{name:"123",orgDataObj:{}}},created:function(){this.$store.commit("setSchool","height"),this.$store.commit("setSchoolCfg",a("Eavx").cfg);var t=this.$route.query.school_id;this.$store.commit("setSchoolId",t),this.$store.commit("setSchool","height"),this.findSchool()},mounted:function(){this.name="asdas"},methods:{findSchool:function(){var t=this;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.c)(t.$store.state.schoolId);case 2:a=e.sent,t.orgDataObj=a.data,1==a.result&&t.$store.commit("setOrgId",t.orgDataObj.org_id);case 5:case"end":return e.stop()}},e,t)}))()}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"height-header"},[a("header",[a("div",{staticClass:"head-top"},[a("div",{staticClass:"name"},[t._v(t._s(t.orgDataObj.school_name)+"\r\n\t\t\t\t"),null!=t.orgDataObj.icon?a("div",{staticClass:"logo",style:{backgroundImage:"url("+t.orgDataObj.icon+")"}}):a("div",{staticClass:"logo iconfont icon-yunguanjia"})])]),t._v(" "),a("div",{staticClass:"head-main-nav"},[a("ul",{staticClass:"clearfix"},[t._l(t.$store.state.schoolCfg.route,function(e,r){return a("li",{key:r,style:{color:t.$route.meta.mark.indexOf(e.meta.mark)>-1?t.$store.state.schoolCfg.mainColor:""}},[a("router-link",{attrs:{to:{path:e.path}}},[t._v("\r\n\t\t\t\t\t    "+t._s(e.meta.title)+"\r\n\t\t\t\t\t")])],1)}),t._v(" "),t._m(0)],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head-btn"},[e("a",{attrs:{href:"javascript:;"}},[this._v("登录/注册")])])}]};var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"height-footer"},[e("footer",[e("div",{staticClass:"text"},[e("p",[this._v("指导：中央电化教育馆 主办：青海省教育技术中心 技术支持：深圳市中传文化科技有限公司")]),this._v(" "),e("p",[this._v("©2017 zjer.cn All rights reservedlCP备案号：浙ICP备05000083号浙公网安备：33010602005197号")])])])])}]};var u={components:{heightHeader:a("C7Lr")(c,h,!1,function(t){a("Nb4C")},null,null).exports,heightFooter:a("C7Lr")(null,l,!1,function(t){a("DC44")},null,null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"height-body-bg"},[e("heightHeader"),this._v(" "),e("router-view"),this._v(" "),e("heightFooter")],1)},staticRenderFns:[]};var m=a("C7Lr")(u,d,!1,function(t){a("sSPT")},null,null);e.default=m.exports},sSPT:function(t,e){}});