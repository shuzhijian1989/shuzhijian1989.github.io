import"./vue.a2f518ee.js";import{u as e,a}from"./vue-router.907b547c.js";import{_ as s,L as t}from"./index.7061e8ea.js";import{g as i}from"./creadForm.61811a7e.js";import o from"./index.3a1b8eb7.js";import r from"./index.82b290f8.js";import n from"./index.28ac2505.js";import m from"./index.33aeec88.js";import c from"./index.650df490.js";import{q as d,Q as l,f as p,b8 as b,o as j,a as u,c as f,a3 as v,F as g,a8 as y,a2 as h,a7 as x,a6 as C,u as K}from"./@vue.919ff404.js";import"./@babel.6d5f88cb.js";import"./ant-design-vue.db4d48e3.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.022beab3.js";import"./@ant-design.2e172c39.js";import"./@ctrl.c020ccd3.js";import"./dom-align.0991ecc5.js";import"./lodash-es.36dcd19c.js";import"./dayjs.49e29cb2.js";import"./async-validator.267d9719.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./compute-scroll-into-view.17358474.js";/* empty css                    */import"./secure-ls.8c8acb46.js";import"./nprogress.c2257662.js";import"./axios.7aed06b8.js";import"./qs.e55e9b28.js";import"./side-channel.ea627785.js";import"./get-intrinsic.8c87d952.js";import"./has-symbols.caae0f97.js";import"./has-proto.76cff6c7.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.208b5ef0.js";import"./object-inspect.e2cfb4a5.js";import"./vuex.f308ecec.js";import"./vuex-persistedstate.fa252374.js";import"./vue-grid-layout.a3ef67ec.js";import"./index.323b38c6.js";import"./FilterDropdown.5a779a00.js";import"./trafficRules.626c1e24.js";import"./synchronFace.8dba19bd.js";import"./index.272083a4.js";import"./classCard.34617283.js";var w=s({__name:"index",setup(s){const w=d({activeKey:"",tabsList:[],schoolId:""}),L=t.get("schoolId"),_=e(),M=a();let F=l();const I={managementFaceMachine:o,managementClassCard:r,managementAttendance:m,managementAllInOne:c,borrowAndReturnBooks:n},R=e=>{w.activeKey=e,F.value=I[e]};return p((async()=>{const e=M.path,a=e.lastIndexOf("/"),s=e.substring(0,a),t=_.getRoutes().filter((e=>e.path===s)),o=(await new Promise((e=>{i().then((a=>{e(a)}))}))).data.map((e=>e.routeName));w.tabsList=t[0].children.filter((e=>o.includes(e.name))),w.tabsList.length&&(w.activeKey=w.tabsList[0].name),"1661622594056515586"===L&&(w.tabsList=[{path:"/basicManagement/deviceManagement/classCard",name:"managementClassCard",meta:{title:"班牌",btnList:[{label:"编辑",value:"edit"},{label:"删除",value:"remove"}],code:"cloud",isRule:null}}],R("/basicManagement/deviceManagement/classCard")),F.value=I[w.activeKey]})),(e,a)=>{const s=b("a-tab-pane"),t=b("a-tabs");return j(),u("div",null,[f(t,{activeKey:w.activeKey,"onUpdate:activeKey":a[0]||(a[0]=e=>w.activeKey=e),onChange:R},{default:v((()=>[(j(!0),u(g,null,y(w.tabsList,(e=>{var a;return j(),h(s,{key:e.name,tab:null==(a=e.meta)?void 0:a.title},null,8,["tab"])})),128))])),_:1},8,["activeKey"]),x(" <router-view /> "),(j(),h(C(K(F))))])}}},[["__scopeId","data-v-0af9d8d4"],["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/basicManagement/deviceManagement/index.vue"]]);export{w as default};
