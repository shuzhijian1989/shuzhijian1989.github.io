import"./vue.a2f518ee.js";import{_ as e}from"./index.7061e8ea.js";import{x as s,q as t,f as o,b8 as a,o as i,a as r,c,a3 as l,F as p,a8 as u,a2 as m,b as n,a9 as d,R as j}from"./@vue.919ff404.js";import"./@babel.6d5f88cb.js";import"./ant-design-vue.db4d48e3.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.022beab3.js";import"./@ant-design.2e172c39.js";import"./@ctrl.c020ccd3.js";import"./dom-align.0991ecc5.js";import"./lodash-es.36dcd19c.js";import"./dayjs.49e29cb2.js";import"./async-validator.267d9719.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./compute-scroll-into-view.17358474.js";/* empty css                    */import"./secure-ls.8c8acb46.js";import"./vue-router.907b547c.js";import"./nprogress.c2257662.js";import"./axios.7aed06b8.js";import"./qs.e55e9b28.js";import"./side-channel.ea627785.js";import"./get-intrinsic.8c87d952.js";import"./has-symbols.caae0f97.js";import"./has-proto.76cff6c7.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.208b5ef0.js";import"./object-inspect.e2cfb4a5.js";import"./vuex.f308ecec.js";import"./vuex-persistedstate.fa252374.js";import"./vue-grid-layout.a3ef67ec.js";const f={class:"layout_manage"},y={class:"text"};var b=e({__name:"index",setup(e){const b=s("localUesCompKey"),v=s("submit"),_=t({layout:[],_copeLayout:[],compList:[]});function g(e){v(j(e))}return o((()=>{const e=window.localStorage.getItem(b),s=e?JSON.parse(e):[];_.compList=s.filter((e=>e.use));const t=s.filter((e=>e.use)).map((e=>({use:e.use,title:e.title,id:e.id,...e.position})));_.layout=[...t],_._copeLayout=[...t]})),(e,s)=>{const t=a("menu-outlined"),o=a("a-col"),b=a("delete-outlined"),x=a("a-button"),w=a("a-row"),h=a("grid-item"),L=a("grid-layout");return i(),r("div",f,[c(L,{layout:_.layout,"col-num":24,"row-height":57,"is-draggable":!0,"is-resizable":!1,"is-mirrored":!1,"vertical-compact":!0,margin:[12,12],"use-css-transforms":!0,onLayoutUpdated:g},{default:l((()=>[(i(!0),r(p,null,u(_.layout,((e,s)=>(i(),m(h,{x:e.x,y:e.y,h:e.h,w:e.w,i:e.i,key:e.i},{default:l((()=>[c(w,{class:"card_warp",justify:"space-between"},{default:l((()=>[c(o,null,{default:l((()=>[c(t),n("span",y,d(e.title),1)])),_:2},1024),c(o,null,{default:l((()=>[c(x,{type:"text",onClick:e=>function(e,s){_.layout.splice(e,1),_._copeLayout[e].use=!1,v(j([_._copeLayout]))}(s)},{icon:l((()=>[c(b)])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["x","y","h","w","i"])))),128))])),_:1},8,["layout"])])}}},[["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/home/layoutManage/index.vue"]]);export{b as default};
