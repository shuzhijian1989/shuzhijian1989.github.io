import"./vue.a2f518ee.js";import{R as e}from"./index.15be7e25.js";import{_ as t,u as a}from"./index.7061e8ea.js";import{a as s}from"./vue-router.907b547c.js";import{i,c as r,C as o,a as n,b as c,A as l,N as m,R as d,d as p,e as u,f,P as y}from"./create.f97df3c0.js";/* empty css                                                           */import{x as j,q as b,f as h,R as w,b8 as C,o as v,a2 as _,a3 as g,c as k,b as I,O as V,a9 as x,u as T,b5 as S,b4 as M,z as q,y as F,a as E,F as L,a8 as D,a7 as R,a6 as N}from"./@vue.919ff404.js";import"./@babel.6d5f88cb.js";import"./ant-design-vue.db4d48e3.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.022beab3.js";import"./@ant-design.2e172c39.js";import"./@ctrl.c020ccd3.js";import"./dom-align.0991ecc5.js";import"./lodash-es.36dcd19c.js";import"./dayjs.49e29cb2.js";import"./async-validator.267d9719.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./compute-scroll-into-view.17358474.js";/* empty css                    */import"./secure-ls.8c8acb46.js";import"./nprogress.c2257662.js";import"./axios.7aed06b8.js";import"./qs.e55e9b28.js";import"./side-channel.ea627785.js";import"./get-intrinsic.8c87d952.js";import"./has-symbols.caae0f97.js";import"./has-proto.76cff6c7.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.208b5ef0.js";import"./object-inspect.e2cfb4a5.js";import"./vuex.f308ecec.js";import"./vuex-persistedstate.fa252374.js";import"./vue-grid-layout.a3ef67ec.js";import"./Uedit.49163f23.js";import"./@tinymce.0dc9a55e.js";import"./tinymce.6ed7cf75.js";import"./format.0daa2d8d.js";import"./html2canvas.c4a43e03.js";import"./toolsValidate.abcc48cc.js";import"./index.2069fba3.js";import"./cropperjs.fe6d04b8.js";import"./oss.72e23b0d.js";import"./ali-oss.e15d125a.js";import"./ydutils.99497787.js";import"./ydutils.a58fbaf1.js";const O=["title","paintedScreen"],B=["releaseType","title","paintedScreen"],z=(e=>(S("data-v-6805723b"),e=e(),M(),e))((()=>I("i",{class:"iconfont icon-xingzhuangjiehe19"},null,-1)));var P=t({__name:"create",setup(e){const t=j("setCreateView")(),a=b({title:"发布一体机",createForm:{id:"",title:"",content:null,rolls:[],depts:[],identitys:[],notifyDevicesInfo:[],isCheckedEltern:!1,isCheckedEmployee:!1,isTimer:!1,timerDate:"",brandIds:[],details:[],isDominateScreen:!1,dominateEndTime:"",dominateStartTime:"",dominateStartTimes:[],contentType:"0",identifier:"aio_machine",releaseType:"aio_machine",aioMachineIds:[],aioMachineContent:{type:1,urls:[]}}}),s=b({title:[{required:!0,message:"请输入"}],contentImg:[{required:!0,message:"请选择"}],isTimer:[{required:!0,message:"请选择"}],releaseType:[{required:!0,message:"请选择"}],dominateStartTimes:[{required:!0,message:"请选择"}],timerDate:[{required:!0,message:"请选择"}],aioMachineIds:[{required:!0,message:"请选择"}],urls:[{required:!0,validator:(e,a)=>{const{urls:s}=t.createForm.aioMachineContent;return s.length?Promise.resolve():Promise.reject("请选择")}}]}),l=()=>{c({cpt:"NewsCreate",setCreateView:t})},m=()=>{t.isShowCreateView=!1,t.previewBack=!1};return h((async()=>{t.maxNum=20,t.paintedScreenTitle="一体机",t.createForm=w(a.createForm);i({setCreateView:t,rules:s,formCpmtType:B,formCpmt:O}),(t.eidtId||t.templateId)&&(t.eidtId&&(a.title="编辑一体机"),await r(t).then((e=>{t.createForm={...t.createForm,...e}})))})),(e,s)=>{const i=C("a-layout-header"),r=C("a-layout-content"),c=C("a-layout"),d=C("a-button"),p=C("a-layout-footer");return v(),_(c,{class:"yd-layout",style:{position:"relative"}},{default:g((()=>[k(i,{class:"yd-layout-header"},{default:g((()=>[I("span",{class:"back",onClick:m},[z,V(" "+x(a.title),1)])])),_:1}),k(c,{class:"news-release-layout-content"},{default:g((()=>[k(c,null,{default:g((()=>[k(r,{class:"yd-layout-content"},{default:g((()=>[k(T(o))])),_:1})])),_:1})])),_:1}),k(p,null,{default:g((()=>[k(d,{onClick:l},{default:g((()=>[V(" 预览 ")])),_:1}),k(d,{type:"primary",style:{"margin-left":"10px"},onClick:s[0]||(s[0]=e=>T(n)(T(t)))},{default:g((()=>[V(" 发布 ")])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-6805723b"],["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/appModel/views/notice/components/aioMachine/create.vue"]]);const U={class:"notices layout-header-radius"};var A=t({__name:"index",setup(t){const i=s(),r=a(),o=b({backRout:i.query.source||"appModelList",menuItem:[],defaultExpand:[],selectedKeys:[],componentObj:{announcementCreate:l,newsCreate:m,receiveCreate:d,articleCreate:p,campusStyleCreate:u,officialDocCreate:f,posterCreate:y,aioMachineCreate:P},createView:{toCpt:null,createLoading:!1,formCpmt:[],isShowCreateView:!1,eidtId:0,copyId:0,templateId:0,contentType:0,previewApi:null,previewBack:!1,isTemplate:!1,messLableTemplate:{newpc:{},newmobile:{},modifyItem:{}},identitys:[],componentName:null,isCheckedStudent:!1,isCheckedEltern:!1,isCheckedEmployee:!1,rules:{},eidtForm:{},createForm:{},oldCreateForm:{}}});q("setCreateView",(()=>o.createView));const n=(e,t)=>{const{path:a,id:s}=e;t?(o.createView.templateId=0,o.createView.createForm={}):o.createView.templateId=s,o.createView.eidtId=0,o.createView.copyId=0,o.createView.isTemplate=!t,o.createView.isShowCreateView=!0,o.createView.componentName=o.componentObj[`${a}Create`],o.createView.previewBack=!0};return q("setHandleMenuClick",(e=>n(e))),q("treeObj",F((()=>{const e=r.state.base.allJurisdiction,t={};let a=[],s=[];if(e.length)for(let i=0;i<e.length;i++)if("notice"===e[i].code&&e[i].list.length){for(let t=0;t<e[i].list.length;t++)e[i].list[t].btnList.length&&(o.menuItem=[...e[i].list[t].btnList[0].btnList,{name:"图片/视频",path:"aioMachine"}],s=e[i].list[t].btnList[0].btnList),a=e[i].list[t].children;break}return a.length&&a.forEach((e=>t[e.path]=e.children)),{treeObj:t,menuItems:s}}))),q("setMenuItem",(()=>o)),(t,a)=>{const s=C("a-menu-item"),i=C("a-menu"),r=C("plus-outlined"),c=C("a-button"),l=C("a-dropdown");return v(),E("div",U,[o.createView.isShowCreateView?(v(),_(N(o.createView.componentName),{key:1})):(v(),E(L,{key:0},[o.menuItem.length?(v(),_(l,{key:0,class:"dropdowns"},{overlay:g((()=>[k(i,null,{default:g((()=>[(v(!0),E(L,null,D(o.menuItem,(e=>(v(),_(s,{key:e.id,onClick:t=>n(e,!0)},{default:g((()=>[V(x(e.name),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),default:g((()=>[k(c,{type:"primary"},{default:g((()=>[k(r),V(" 新增 ")])),_:1})])),_:1})):R("v-if",!0),k(T(e),{showBack:"",leftExtraText:"",backRout:o.backRout},null,8,["backRout"])],64))])}}},[["__scopeId","data-v-1434ff19"],["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/appModel/views/notice/index.vue"]]);export{A as default};
