webpackJsonp([35],{Vi9N:function(e,t){},Z49U:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"side-bar"},[s("div",{staticClass:"side-item"},[s("div",{staticClass:"side-title",style:{borderBottom:"2px solid "+e.$store.state.spaceCfg.mainColor}},[s("i",{staticClass:"iconfont icon-zhanghu1"}),s("span",{staticClass:"side-name"},[e._v("账户设置")])]),e._v(" "),s("ul",{staticClass:"side-list"},[s("li",[s("router-link",{style:{backgroundColor:e.$route.path.indexOf("memberPerson")>-1?"#eee":""},attrs:{to:{path:"memberPerson",query:{role:e.$store.state.role,school:e.$store.state.school}}}},[e._v("个人资料")])],1),e._v(" "),s("li",[s("router-link",{style:{backgroundColor:e.$route.path.indexOf("memberAvatar")>-1?"#eee":""},attrs:{to:{path:"memberAvatar",query:{role:e.$store.state.role,school:e.$store.state.school}}}},[e._v("修改头像")])],1),e._v(" "),s("li",[s("router-link",{style:{backgroundColor:e.$route.path.indexOf("memberResetPassword")>-1?"#eee":""},attrs:{to:{path:"memberResetPassword",query:{role:e.$store.state.role,school:e.$store.state.school}}}},[e._v("修改密码")])],1),e._v(" "),s("li",[s("router-link",{style:{backgroundColor:e.$route.path.indexOf("memberPermit")>-1?"#eee":""},attrs:{to:{path:"memberPermit",query:{role:e.$store.state.role,school:e.$store.state.school}}}},[e._v("访问权限")])],1),e._v(" "),s("li",[s("router-link",{style:{backgroundColor:e.$route.path.indexOf("memberBindParents")>-1?"#eee":"",display:"student"==e.$route.query.role?"block":"none"},attrs:{to:{path:"memberBindParents",query:{role:e.$store.state.role,school:e.$store.state.school}}}},[e._v("关联家长")])],1),e._v(" "),s("li",[s("router-link",{style:{backgroundColor:e.$route.path.indexOf("memberBindChildren")>-1?"#eee":"",display:"parents"==e.$route.query.role?"block":"none"},attrs:{to:{path:"memberBindChildren",query:{role:e.$store.state.role,school:e.$store.state.school}}}},[e._v("关联孩子")])],1)])]),e._v(" "),s("div",{staticClass:"side-item"},[s("div",{staticClass:"side-title",style:{borderBottom:"2px solid "+e.$store.state.spaceCfg.mainColor}},[s("i",{staticClass:"iconfont icon-xiaoxi1 "}),s("span",{staticClass:"side-name"},[e._v("消息动态")])]),e._v(" "),s("ul",{staticClass:"side-list"},[s("li",[s("router-link",{style:{backgroundColor:e.$route.path.indexOf("memberNotice")>-1?"#eee":""},attrs:{to:{path:"memberNotice",query:{role:e.$store.state.role,school:e.$store.state.school}}}},[e._v("通知公告"),s("span",{staticClass:"slot"})])],1),e._v(" "),s("li",[s("router-link",{style:{backgroundColor:e.$route.path.indexOf("memberRemind")>-1?"#eee":""},attrs:{to:{path:"memberRemind",query:{role:e.$store.state.role,school:e.$store.state.school}}}},[e._v("提醒消息"),s("span",{staticClass:"slot",staticStyle:{display:"none"}})])],1),e._v(" "),s("li",[s("router-link",{style:{backgroundColor:e.$route.path.indexOf("memberSysmsg")>-1?"#eee":""},attrs:{to:{path:"memberSysmsg",query:{role:e.$store.state.role,school:e.$store.state.school}}}},[e._v("系统消息"),s("span",{staticClass:"slot",staticStyle:{display:"none"}})])],1)])])])},staticRenderFns:[]};var r={components:{memberSide:s("C7Lr")({data:function(){return{name:"123"}},created:function(){this.name="asdas"}},o,!1,function(e){s("Vi9N")},null,null).exports}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"member",attrs:{id:"member"}},[t("div",{staticClass:"personal-center container clearfix"},[t("memberSide"),this._v(" "),t("div",{staticClass:"personal-box"},[t("router-view")],1)],1)])},staticRenderFns:[]};var l=s("C7Lr")(r,a,!1,function(e){s("rX2+")},null,null);t.default=l.exports},"rX2+":function(e,t){}});