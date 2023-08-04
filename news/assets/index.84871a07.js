import"./vue.a2f518ee.js";import{C as e}from"./index.2069fba3.js";import{_ as o,u as a,n as s}from"./index.7061e8ea.js";import{S as t}from"./index.510cb628.js";import{m as l}from"./ant-design-vue.db4d48e3.js";import{d as i}from"./dayjs.49e29cb2.js";import{U as n}from"./Uedit.49163f23.js";import{e as r,q as c,t as d,r as u,y as m,f as p,b8 as f,I as b,o as v,a as h,b as g,c as y,a3 as j,u as k,H as I,a2 as _,O as U,a7 as x,a9 as C,R as M,b5 as S,b4 as T,m as w}from"./@vue.919ff404.js";import"./@babel.6d5f88cb.js";import"./cropperjs.fe6d04b8.js";/* empty css                    */import"./secure-ls.8c8acb46.js";import"./vue-router.907b547c.js";import"./nprogress.c2257662.js";import"./axios.7aed06b8.js";import"./qs.e55e9b28.js";import"./side-channel.ea627785.js";import"./get-intrinsic.8c87d952.js";import"./has-symbols.caae0f97.js";import"./has-proto.76cff6c7.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.208b5ef0.js";import"./object-inspect.e2cfb4a5.js";import"./@ant-design.2e172c39.js";import"./@ctrl.c020ccd3.js";import"./vuex.f308ecec.js";import"./vuex-persistedstate.fa252374.js";import"./vue-grid-layout.a3ef67ec.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.022beab3.js";import"./dom-align.0991ecc5.js";import"./lodash-es.36dcd19c.js";import"./async-validator.267d9719.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./compute-scroll-into-view.17358474.js";import"./@tinymce.0dc9a55e.js";import"./tinymce.6ed7cf75.js";const F={class:"schoolIntroductionDiv"},D={class:"schoolIntroduction"},H={class:"head"},N=(e=>(S("data-v-0b321509"),e=e(),T(),e))((()=>g("h1",null,"基础信息",-1))),O={class:"body"},B={class:"schoolBadgeImg"},P={key:0,class:"schoolBadgeImg_text"},z={class:"bodyDiv"},L={class:"body_left"},V={key:0},Y={key:0},$={key:0},R={key:0},q={key:0},E={key:0,class:"line"},A={class:"body_right"},G=["innerHTML"];var W=o(r({__name:"index",setup(o){const r=a(),{proxy:S}=w(),T=c({schoolIntroductionForm:{badgeUrl:"",name:"",englishName:"",foundTime:"",motto:"",schoolMaster:"",schoolMasterId:"",introduce:""},informationflag:!0,disabled:!1,labelCol:{style:{width:"100px"}},selectSourceObj:{organizationTree:[],studentStatusTree:[]},schoolId:"",spinning:!1,file:""}),{schoolIntroductionForm:W,informationflag:J,disabled:K,labelCol:Q,selectSourceObj:X,schoolId:Z,spinning:ee,file:oe}=d(T),ae=e=>e&&e>i().endOf("day"),se=()=>{T.informationflag=!1,T.disabled=!0},te=()=>{le.value.validateFields().then((()=>{T.informationflag=!0,ue()}))},le=u(),ie=({base64:e,file:o})=>{T.schoolIntroductionForm.badgeUrl=e,T.file=o,me(T.file)},ne=async()=>{const e={modalVisible:!0,selectSourceObj:{singleChoice:!0,checkPeople:!0,tabsTexts:[{tab:"校长",key:"teacher"}],treeData_teacher:await r.dispatch("selectSource/setOrganizationTree")}};r.commit("selectSource/GET_USER_INFOS",e)},re=e=>{e.map((e=>{T.schoolIntroductionForm.schoolMaster=e.name,T.schoolIntroductionForm.schoolMasterId=e.id}))},ce=()=>{T.spinning=!0,S.$defHttp.get(s.selectIntroduce).then((e=>{const{data:o}=e;T.schoolIntroductionForm=o,T.schoolId=o.id})).finally((()=>{T.spinning=!1}))},de=m((()=>r.state.user.currentSchool||{})),ue=()=>{const e=M(de.value),o={id:e.id,foundTime:T.schoolIntroductionForm.foundTime||"",...T.schoolIntroductionForm};return o.schoolMaster||(o.schoolMasterId=""),delete o.schoolMaster,delete o.contact,delete o.contactPhone,delete o.type,delete o.versionStamp,new Promise(((a,t)=>{S.$defHttp.post(s.updateIntroduce,o).then((a=>{l.success(a.message),ce(),r.commit("user/setCurrentSchool",{...e,schoolLogo:o.badgeUrl})}))}))},me=e=>{const o=new FormData;o.append("file",e),S.$defHttp.post(s.fileUpload,o).then((e=>{const{data:o}=e;o.map((e=>{T.schoolIntroductionForm.badgeUrl=e.url}))}))};return p((()=>{ce()})),(o,a)=>{const s=f("edit-outlined"),l=f("a-button"),i=f("calendar-outlined"),r=f("a-image"),c=f("a-form-item"),d=f("a-input"),u=f("a-date-picker"),m=f("a-form"),p=f("a-spin"),M=b("auth");return v(),h("div",F,[g("div",D,[y(p,{spinning:k(ee)},{default:j((()=>[g("div",H,[N,k(J)?I((v(),_(l,{key:0,type:"link",class:"button-link",onClick:se},{icon:j((()=>[y(s)])),default:j((()=>[U(" 编辑 ")])),_:1})),[[M,"edit"]]):x("v-if",!0),k(J)?x("v-if",!0):(v(),_(l,{key:1,type:"link",class:"button-link",onClick:te},{icon:j((()=>[y(i)])),default:j((()=>[U(" 保存 ")])),_:1}))]),g("div",O,[y(m,{model:k(W),labelAlign:"left","label-col":k(Q),ref_key:"schoolIntroductionRef",ref:le},{default:j((()=>[g("div",B,[y(c,{label:"校 徽："},{default:j((()=>{var o;return[k(J)?(v(),_(r,{key:0,src:null==(o=de.value)?void 0:o.schoolLogo,fallback:"image/uploadImg.png"},null,8,["src"])):x("v-if",!0),k(J)?x("v-if",!0):(v(),_(e,{value:k(W).badgeUrl,"onUpdate:value":a[0]||(a[0]=e=>k(W).badgeUrl=e),onChange:ie,minCropBoxWidth:1920,minCropBoxHeight:400,key:"2",isNum:1},{parents:j((()=>[k(J)?x("v-if",!0):(v(),_(l,{key:0,class:"headBtn",type:"primary",size:"small"},{default:j((()=>[U("修改 ")])),_:1}))])),_:1},8,["value"]))]})),_:1})]),k(J)?x("v-if",!0):(v(),h("div",P," 建议上传图片尺寸为640*640，大小不超过1MB视觉元素保持在方形区域内。 ")),g("div",z,[g("div",L,[y(c,{label:"学校名称："},{default:j((()=>[k(J)?(v(),h("span",V,C(k(W).name||"-"),1)):x("v-if",!0),k(J)?x("v-if",!0):(v(),_(d,{key:1,value:k(W).name,"onUpdate:value":a[1]||(a[1]=e=>k(W).name=e),disabled:k(K)},null,8,["value","disabled"]))])),_:1}),y(c,{label:"学校英文名：",name:"englishName",rules:[{message:"不能输入中文",trigger:"blur",transform(e){if(e)return!!/^[^\u4e00-\u9fa5]*$/.test(e)&&e}}]},{default:j((()=>[k(J)?(v(),h("span",Y,C(k(W).englishName||"-"),1)):x("v-if",!0),k(J)?x("v-if",!0):(v(),_(d,{key:1,value:k(W).englishName,"onUpdate:value":a[2]||(a[2]=e=>k(W).englishName=e),allowClear:"",maxlength:80,"show-count":"",placeholder:"请输入"},null,8,["value"]))])),_:1},8,["rules"]),y(c,{label:"成立时间："},{default:j((()=>[k(J)?(v(),h("span",$,C(k(W).foundTime||"-"),1)):x("v-if",!0),k(J)?x("v-if",!0):(v(),_(u,{key:1,value:k(W).foundTime,"onUpdate:value":a[3]||(a[3]=e=>k(W).foundTime=e),"value-format":"YYYY-MM-DD","disabled-date":ae},null,8,["value"]))])),_:1}),y(c,{label:"校训："},{default:j((()=>[k(J)?(v(),h("span",R,C(k(W).motto||"-"),1)):x("v-if",!0),k(J)?x("v-if",!0):(v(),_(d,{key:1,value:k(W).motto,"onUpdate:value":a[4]||(a[4]=e=>k(W).motto=e),allowClear:"",maxlength:50,"show-count":"",placeholder:"请输入"},null,8,["value"]))])),_:1}),y(c,{label:"校长："},{default:j((()=>[k(J)?(v(),h("span",q,C(k(W).schoolMaster||"-"),1)):x("v-if",!0),k(J)?x("v-if",!0):(v(),_(d,{key:1,value:k(W).schoolMaster,"onUpdate:value":a[5]||(a[5]=e=>k(W).schoolMaster=e),onClick:ne,allowClear:"",disabled:k(K)},null,8,["value","disabled"]))])),_:1})]),k(J)?(v(),h("div",E)):x("v-if",!0),g("div",A,[y(c,{label:"学校简介："},{default:j((()=>[k(J)?(v(),h("span",{key:0,innerHTML:k(W).introduce||"-"},null,8,G)):(v(),_(n,{key:1,modelValue:k(W).introduce,"onUpdate:modelValue":a[6]||(a[6]=e=>k(W).introduce=e)},null,8,["modelValue"]))])),_:1})])])])),_:1},8,["model","label-col"])])])),_:1},8,["spinning"])]),x(" 选人控件 "),y(t,{selectSourceParams:k(X),onCallbackParameter:re},null,8,["selectSourceParams"])])}}}),[["__scopeId","data-v-0b321509"],["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/basicManagement/schoolIntroduction/index.vue"]]);export{W as default};
