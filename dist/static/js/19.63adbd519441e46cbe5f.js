webpackJsonp([19],{B3OQ:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("tgKR"),e={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"city-library"},[s("div",{staticClass:"city-banner"}),t._v(" "),s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"screen"},[s("div",{staticClass:"sort clearfix"},t._l(t.thirdCategory,function(a,i){return s("div",{key:i,staticClass:"col",class:{show:t.thirdCategory}},[t._v(t._s(a.NAME))])}),0)]),t._v(" "),s("div",{staticClass:"screen"},[s("div",{ref:"tabs",staticClass:"sort clearfix"},[s("div",{staticClass:"col",attrs:{sort:"0"},on:{click:function(a){return t.sortSwitch(a)}}},[t._v("\r\n          浏览最高\r\n        ")]),t._v(" "),s("div",{staticClass:"col",attrs:{sort:"1"},on:{click:function(a){return t.sortSwitch(a)}}},[t._v("\r\n          收藏最多\r\n        ")])]),t._v(" "),t._m(1)])]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"recommend"},[t.showContent?s("ul",{staticClass:"clearfix"},t._l(t.data,function(a,i){return s("router-link",{key:i,staticClass:"item",attrs:{to:t.formatSrcType(a.MAINFILENAME,a.ID).path}},[s("div",{staticClass:"img"},[s("img",{attrs:{src:t.formatPic(a.ICONURL),alt:""}}),s("div",{staticClass:"type"},[t._v(t._s(a.RESOURCE_TYPE_NAME))])]),t._v(" "),s("div",{staticClass:"name"},[t._v(t._s(a.BOOKNAME))]),t._v(" "),s("div",{staticClass:"info"},[s("p",{staticClass:"clearfix"},[s("span",[t._v("浏览量")]),s("i",[t._v("：125432")])]),t._v(" "),s("p",{staticClass:"clearfix"},[s("span",[t._v("收藏量")]),s("i",[t._v("：125432")])]),t._v(" "),s("p",{staticClass:"clearfix"},[s("span",[t._v("下载量")]),s("i",[t._v("：125432")])]),t._v(" "),s("p",{staticClass:"clearfix"},[s("span",[t._v("类型")]),s("i",[t._v("：MP4")])]),t._v(" "),s("div",{staticClass:"clearfix"},[s("a",{staticClass:"collect",attrs:{href:"javascirpt:;"}},[t._v("收藏")]),t._v(" "),s("a",{staticClass:"download",attrs:{href:"javascirpt:;"}},[t._v("下载")])])])])}),1):t._e(),t._v(" "),t.showLoading?s("loading"):t._e(),t._v(" "),t.showPaginate?s("paginate",{attrs:{"page-count":20,"prev-text":"上页","next-text":"下页","container-class":"paginate-container container","click-handler":t.clickCallback}}):t._e()],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"top-nav clearfix"},[a("a",[this._v("当前位置：")]),a("a",[this._v("图书馆")]),a("i",[this._v(">")]),a("a",[this._v("一年级")]),a("i",[this._v(">")]),a("a",[this._v("语文 · 练习")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"search-box clearfix"},[a("select",{staticClass:"type",attrs:{name:""}},[a("option",{attrs:{value:""}},[this._v("全部格式")])]),this._v(" "),a("div",{staticClass:"search"},[a("input",{attrs:{type:"search",name:"search",id:"search",placeholder:"搜索您要找的资源"}}),this._v(" "),a("a",{staticClass:"button"},[this._v("搜索")])])])}]};var n=function(t){s("Ri2W")},c=s("C7Lr")(i.a,e,!1,n,null,null);a.default=c.exports},KgXo:function(t,a,s){"use strict";var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"loading",staticStyle:{"text-align":"center"},attrs:{id:"loading"}},[a("div",{staticClass:"spinner"},[a("div",{staticClass:"double-bounce1"}),this._v(" "),a("div",{staticClass:"double-bounce2"})])])])}]};var e=s("C7Lr")(null,i,!1,function(t){s("LE2i")},null,null);a.a=e.exports},LE2i:function(t,a){},Ri2W:function(t,a){},tgKR:function(t,a,s){"use strict";(function(t){var i=s("xJrl"),e=s("KgXo"),n=void 0;t.browser&&(n=s("BnJk")),a.a={layout:"city",data:function(){return{thirdCategory:[],showLoading:!1,showPaginate:!0,showContent:!0,data:[],pages:"",currentPage:""}},components:{Paginate:n,loading:e.a},created:function(){this.getCategoryData(),this.getData()},methods:{getCategoryData:function(){var t=this;this.$jsonp(i.g,{}).then(function(a){t.thirdCategory=a.data[1].subCategorys[0].subCategorys}).catch(function(t){})},sortSwitch:function(t){t.currentTarget.getAttribute("sort");this.getData(!0)},getData:function(t){var a=this;this.showLoading=!0,this.showContent=!1,this.pages>1?t&&(this.showPaginate=!0,this.clickCallback()):this.showPaginate=!1;this.$jsonp(i.f,{CATEGORY_ID:"14092",SORT:0,currentPage:1,showCount:18}).then(function(t){a.showLoading=!1,a.showContent=!0,a.data=t.data,a.pages=t.totalPage,a.currentPage=t.currentPage}).catch(function(t){})},clickCallback:function(t){this.currentPage=t,this.getData()}}}}).call(a,s("V0EG"))}});