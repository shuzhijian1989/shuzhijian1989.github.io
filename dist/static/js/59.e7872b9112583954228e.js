webpackJsonp([59],{GtGo:function(t,s){},J4ry:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("lC5x"),e=a.n(i),l=a("J0Oq"),r=a.n(l),c=a("gyMJ"),n={data:function(){return{swiperOption:{slidesPerView:7,spaceBetween:0,slidesPerGroup:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},newsListObj:{},headlineId:"",currentPage:1,showCount:7}},created:function(){this.getSchoolNews()},methods:{getSchoolNews:function(){var t=this;return r()(e.a.mark(function s(){var a,i,l;return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(c.j)(t.$store.state.schoolId,t.currentPage,t.showCount);case 2:if(1==(a=s.sent).result){s.next=5;break}return s.abrupt("return",!1);case 5:t.newsListObj=a.data,console.log(a.dataPageInfo.totalPage),t.pageCount=a.dataPageInfo.totalPage,i=0,l=t.newsListObj.length;case 9:if(!(i<l)){s.next=16;break}if(!t.newsListObj[i].is_top){s.next=13;break}return t.headlineId=t.newsListObj[i].news_id,s.abrupt("return",!1);case 13:i++,s.next=9;break;case 16:case"end":return s.stop()}},s,t)}))()}}},v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"height-school"},[a("div",{staticClass:"class-banner"}),t._v(" "),a("div",{staticClass:"container clearfix"},[a("div",{staticClass:"school-information"},[a("div",{staticClass:"title clearfix"},[a("span",[t._v("校园资讯")]),t._v(" "),a("router-link",{staticClass:"more",attrs:{to:"/height/news"}},[t._v("更多>>")])],1),t._v(" "),a("div",{staticClass:"new clearfix"},[a("img",{staticClass:"show",attrs:{src:"http://iconfont.zcndgs.com/educationCloud/people.png"}}),t._v(" "),a("ul",t._l(t.newsListObj,function(s,i){return a("router-link",{key:i,staticClass:"flex",attrs:{to:{path:"/"+t.$store.state.school+"/newsDetail",query:{newsId:s.news_id}},tag:"li"}},[a("p",[t._v(t._s(s.title))]),a("span",[t._v(t._s(t._f("formatTime")(s.create_date)))])])}),1)])]),t._v(" "),a("div",{staticClass:"department-phone"},[t._m(0),t._v(" "),a("ul",t._l(7,function(s){return a("li",{key:s,staticClass:"flex"},[a("p",[t._v("校办")]),a("span",[t._v("：4556234134")])])}),0)])]),t._v(" "),a("div",{staticClass:"container clearfix"},[a("div",{staticClass:"department"},[t._m(1),t._v(" "),a("ul",{staticClass:"clearfix"},[a("router-link",{staticClass:"col",attrs:{to:{path:"/height/department",query:{id:"1"}},tag:"li"}},[t._v("校长办公司")]),t._v(" "),a("router-link",{staticClass:"col",attrs:{to:{path:"/height/department",query:{id:"2"}},tag:"li"}},[t._v("学生处")]),t._v(" "),a("router-link",{staticClass:"col",attrs:{to:{path:"/height/department",query:{id:"3"}},tag:"li"}},[t._v("教导处")]),t._v(" "),a("router-link",{staticClass:"col",attrs:{to:{path:"/height/department",query:{id:"4"}},tag:"li"}},[t._v("总务处")]),t._v(" "),a("router-link",{staticClass:"col",attrs:{to:{path:"/height/department",query:{id:"5"}},tag:"li"}},[t._v("工会")]),t._v(" "),a("router-link",{staticClass:"col",attrs:{to:{path:"/height/department",query:{id:"6"}},tag:"li"}},[t._v("招生办")]),t._v(" "),a("router-link",{staticClass:"col",attrs:{to:{path:"/height/department",query:{id:"7"}},tag:"li"}},[t._v("教研室")])],1)]),t._v(" "),a("div",{staticClass:"fine-class"},[a("div",{staticClass:"title clearfix"},[a("span",[t._v("优秀班级")]),t._v(" "),a("router-link",{staticClass:"all",attrs:{to:"/height/schoolClass"}},[t._v("全部班级>>")])],1),t._v(" "),a("ul",{staticClass:"clearfix"},t._l(6,function(s){return a("router-link",{key:s,staticClass:"item",attrs:{to:"/height/class",tag:"li"}},[a("div",{staticClass:"img"}),t._v(" "),a("p",{staticClass:"name"},[t._v("欧阳问倩")]),t._v(" "),a("p",{staticClass:"class"},[t._v("七年级二班")])])}),1)])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"fine-space"},[a("div",{staticClass:"title clearfix"},[a("span",[t._v("优秀空间")]),t._v(" "),a("div",{staticClass:"col first cur"},[t._v("家长")]),t._v(" "),a("div",{staticClass:"col"},[t._v("教师")]),t._v(" "),a("div",{staticClass:"col"},[t._v("学生")]),t._v(" "),a("router-link",{staticClass:"all",attrs:{to:"/height/schoolspace"}},[t._v("全部空间>>")])],1),t._v(" "),a("ul",{staticClass:"clearfix"},t._l(10,function(s){return a("router-link",{key:s,staticClass:"item",attrs:{to:"/height/space/parentsIndex",tag:"li"}},[a("div",{staticClass:"img"}),t._v(" "),a("p",{staticClass:"name"},[t._v("欧阳问倩")]),t._v(" "),a("p",{staticClass:"class"},[t._v("七年级二班")])])}),1)])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"recommend"},[t._m(2),t._v(" "),a("ul",{staticClass:"clearfix"},t._l(12,function(s){return a("li",{key:s,staticClass:"item"},[t._m(3,!0),t._v(" "),a("div",{staticClass:"name"},[t._v("最后一片叶子")]),t._v(" "),t._m(4,!0)])}),0)])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"school-star"},[t._m(5),t._v(" "),a("ul",{staticClass:"clearfix"},[a("swiper",{attrs:{options:t.swiperOption}},t._l(12,function(s){return a("swiper-slide",{key:s},[a("router-link",{staticClass:"item",attrs:{to:"/height/space",tag:"div"}},[a("div",{staticClass:"img"}),a("div",{staticClass:"name"},[t._v("寒千落")]),a("div",{staticClass:"info"},[t._v("资源128个 文章54篇")])])],1)}),1),t._v(" "),a("div",{staticClass:"swiper-button-prev swiper-button-black icon",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),a("div",{staticClass:"swiper-button-next swiper-button-black icon",attrs:{slot:"button-next"},slot:"button-next"})],1)])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"school-style"},[t._m(6),t._v(" "),a("ul",{staticClass:"clearfix"},t._l(3,function(s){return a("li",{key:s,staticClass:"item"},[a("div",{staticClass:"img"}),t._v(" "),a("div",{staticClass:"text"},[t._v("摄影大赛")])])}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("span",[this._v("各部门电话")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("span",[this._v("部门通")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title clearfix"},[s("span",[this._v("资源推荐")]),this._v(" "),s("div",{staticClass:"col first cur"},[this._v("学习资源")]),this._v(" "),s("div",{staticClass:"col"},[this._v("图书资源")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img"},[s("div",{staticClass:"type"},[this._v("图文")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"info"},[a("p",{staticClass:"clearfix"},[a("span",[t._v("浏览量")]),a("i",[t._v("：125432")])]),t._v(" "),a("p",{staticClass:"clearfix"},[a("span",[t._v("收藏量")]),a("i",[t._v("：125432")])]),t._v(" "),a("p",{staticClass:"clearfix"},[a("span",[t._v("下载量")]),a("i",[t._v("：125432")])]),t._v(" "),a("p",{staticClass:"clearfix"},[a("span",[t._v("类型")]),a("i",[t._v("：MP4")])]),t._v(" "),a("div",{staticClass:"clearfix"},[a("a",{staticClass:"collect",attrs:{href:"javascirpt:;"}},[t._v("收藏")]),t._v(" "),a("a",{staticClass:"download",attrs:{href:"javascirpt:;"}},[t._v("下载")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"title clearfix"},[a("span",[t._v("明星师生")]),t._v(" "),a("div",{staticClass:"col first cur"},[t._v("明星班主任")]),t._v(" "),a("div",{staticClass:"col"},[t._v("杰出教师")]),t._v(" "),a("div",{staticClass:"col"},[t._v("优秀学生干部")]),t._v(" "),a("div",{staticClass:"col"},[t._v("三好学生")]),t._v(" "),a("div",{staticClass:"col"},[t._v("学习标兵")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("span",[this._v("校园风采")])])}]};var o=a("C7Lr")(n,v,!1,function(t){a("GtGo")},null,null);s.default=o.exports}});