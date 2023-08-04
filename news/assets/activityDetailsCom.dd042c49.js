import"./vue.a2f518ee.js";import{a as e}from"./vue-router.907b547c.js";import"./ant-design-vue.db4d48e3.js";import{_ as a}from"./index.272083a4.js";import{_ as i,s as t}from"./index.7061e8ea.js";import{q as o,r as s,b8 as l,o as d,a as r,c as n,a3 as c,F as p,a8 as u,a2 as m,O as v,a9 as y,a7 as g,a4 as f,b,b5 as j,b4 as h}from"./@vue.919ff404.js";import"./@babel.6d5f88cb.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.022beab3.js";import"./@ant-design.2e172c39.js";import"./@ctrl.c020ccd3.js";import"./dom-align.0991ecc5.js";import"./lodash-es.36dcd19c.js";import"./dayjs.49e29cb2.js";import"./async-validator.267d9719.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./compute-scroll-into-view.17358474.js";/* empty css                    */import"./secure-ls.8c8acb46.js";import"./nprogress.c2257662.js";import"./axios.7aed06b8.js";import"./qs.e55e9b28.js";import"./side-channel.ea627785.js";import"./get-intrinsic.8c87d952.js";import"./has-symbols.caae0f97.js";import"./has-proto.76cff6c7.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.208b5ef0.js";import"./object-inspect.e2cfb4a5.js";import"./vuex.f308ecec.js";import"./vuex-persistedstate.fa252374.js";import"./vue-grid-layout.a3ef67ec.js";const w=e=>(j("data-v-116a2ce0"),e=e(),h(),e),x={class:"activityDetails"},I=w((()=>b("span",null,"查 询",-1))),_=w((()=>b("span",null,"重 置",-1))),q=["onClick"],S={key:1},k={key:0,class:"scoreDetails"},D={class:"scoreDetails-title"},C={class:"scoreDetails-sub"},R={class:"scoreDetails-sub"},F={key:1,class:"scoreDetails"};var K=i({__name:"activityDetailsCom",setup(i){const j=e().query.id,h=o({spinning:!1,queryForm:{chainList:[],cycleId:void 0},pagination:{pageNo:1,pageSize:10,total:0},dataSource:[],subjectTitle:"评分结果",visible:!1,classes:[],periods:[]}),w=s(null),K=()=>{h.pagination.pageNo=1,h.pagination.pageSize=10,E()},L=()=>{w.value.resetFields(),E()},T=[{title:"名次",dataIndex:"ranking",width:"20%"},{title:"年级班级",dataIndex:"name",width:"25%"},{title:"荣誉名称",dataIndex:"honorTitle",width:"25%"},{title:"排行周期",dataIndex:"cycle"},{title:"得分",dataIndex:"score",width:"60px"}];t.post("/cloud/moralEducationActivity/queryActivityCycle",{id:j}).then((e=>{0===e.code&&(h.periods=e.data||[])}));const E=()=>{h.spinning=!0,t.post("/cloud/moralEducationActivity/progress",{...h.queryForm,...h.pagination,id:j}).then((e=>{var a,i,t,o,s;0===e.code&&(h.classes=(null==(a=e.data)?void 0:a.chainList)||[],h.pagination.total=null==(t=null==(i=e.data)?void 0:i.resultList)?void 0:t.total,h.dataSource=(null==(s=null==(o=e.data)?void 0:o.resultList)?void 0:s.list)||[])})).finally((()=>{h.spinning=!1}))};E();const N=e=>{h.pagination.pageNo=e.current,h.pagination.pageSize=e.pageSize,E()},z=()=>{h.visible=!1},A=o({spinning:!1,query:{period:""},periods:[{id:1,name:"第一周"}],pagination:{pageNo:1,pageSize:10,total:0},dataSource:[],expandedRowKeys:[],activeRow:{}}),U=()=>{A.spinning=!0,t.post("/cloud/moralEducationActivity/identityDetail",{activityId:j,cycleId:A.query.period,targetId:A.activeRow.id}).then((e=>{0===e.code&&(A.dataSource=e.data||[])})).finally((()=>{A.spinning=!1}))},O=e=>{U()},B=[{title:"评分时间",dataIndex:"scoringTime"},{title:"加减分",dataIndex:"score"},{title:"总计",dataIndex:"scoringGoal",width:"75px",align:"right"}],G=e=>e?e>0?"+"+e:e:0,M=(e,a)=>{e?H(a).finally((()=>{A.expandedRowKeys=[a.id]})):A.expandedRowKeys=[]},H=e=>(A.spinning=!0,t.post("/cloud/moralEducationActivity/scoringDetail",{activityId:e.activityId,cycleId:e.cycleId,targetId:e.targetId,scoreTime:e.scoringTime}).then((a=>{0===a.code&&(e.scoreDetails=a.data||[])})).finally((()=>{A.spinning=!1})));return(e,i)=>{const t=l("a-cascader"),o=l("a-form-item"),s=l("a-select-option"),j=l("a-select"),E=l("SearchOutlined"),H=l("a-button"),J=l("reload-outlined"),P=l("a-form"),Q=l("a-table"),V=l("a-drawer");return d(),r("div",x,[n(P,{ref_key:"formRef",ref:w,model:h.queryForm,layout:"inline"},{default:c((()=>[n(o,{label:"年级班级：",name:"chainList"},{default:c((()=>[n(t,{value:h.queryForm.chainList,"onUpdate:value":i[0]||(i[0]=e=>h.queryForm.chainList=e),options:h.classes,fieldNames:{label:"showName",value:"id",children:"children"},placeholder:"请选择"},null,8,["value","options"])])),_:1}),n(o,{label:"排行周期：",name:"cycleId"},{default:c((()=>[n(j,{value:h.queryForm.cycleId,"onUpdate:value":i[1]||(i[1]=e=>h.queryForm.cycleId=e),placeholder:"请选择"},{default:c((()=>[(d(!0),r(p,null,u(h.periods,(e=>(d(),m(s,{key:e.id,value:e.id},{default:c((()=>[v(y(e.seq),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1}),n(o,{label:""},{default:c((()=>[n(H,{type:"primary",onClick:K},{icon:c((()=>[n(E)])),default:c((()=>[I])),_:1}),n(H,{onClick:L},{icon:c((()=>[n(J)])),default:c((()=>[_])),_:1})])),_:1})])),_:1},8,["model"]),n(a,{dataSource:h.dataSource,columns:T,rowSelection:!1,totals:h.pagination,spinLoad:h.spinning,rowKeyId:"id",onOnSelectedRowKeys:N},{bodyCell:c((({column:e,record:a})=>["score"===e.dataIndex?(d(),r("a",{key:0,class:"btn",onClick:e=>{return i=a,h.visible=!0,A.activeRow=i,h.queryForm.period?A.query.period=h.queryForm.period:A.query.period=null==(t=h.periods[0])?void 0:t.id,void U();var i,t}},y(a.score),9,q)):g("v-if",!0)])),_:1},8,["dataSource","totals","spinLoad"]),g(" 表单弹框 "),n(V,{width:"480px",onClose:z,class:"drawerButton",title:h.subjectTitle,maskClosable:!1,visible:h.visible},{default:c((()=>[n(j,{value:A.query.period,"onUpdate:value":i[2]||(i[2]=e=>A.query.period=e),placeholder:"请选择",style:{width:"100%"},onChange:O},{default:c((()=>[(d(!0),r(p,null,u(h.periods,(e=>(d(),m(s,{key:e.id,value:e.id},{default:c((()=>[v(y(e.seq),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"]),n(Q,{class:"scoreTable",dataSource:A.dataSource,columns:B,loading:A.spinning,pagination:!1,rowKey:"id",expandedRowKeys:A.expandedRowKeys,onExpand:M},{bodyCell:c((({column:e,record:a})=>["score"===e.dataIndex?(d(),r("span",{key:0,class:f(["scoreDetails-num",{red:a.increase<0}])},y(G(a.score)),3)):g("v-if",!0),"scoringTime"===e.dataIndex?(d(),r("span",S,y(a.scoringTime)+"（"+y(a.week)+"）",1)):g("v-if",!0)])),expandedRowRender:c((({record:e})=>[(null==e?void 0:e.scoreDetails.length)?(d(),r("div",k,[(d(!0),r(p,null,u(null==e?void 0:e.scoreDetails,((e,a)=>(d(),r("div",{class:"scoreDetails-row",key:e.id},[b("div",D,[v(y(a+1+"、"+e.standard)+"评分 ",1),b("span",{class:f(["scoreDetails-num",{red:e.score<0}])},y(G(e.score))+"分 ",3)]),b("div",C,y(e.groupName),1),b("div",R,y(e.remark),1)])))),128))])):(d(),r("div",F," 暂无数据 "))])),_:1},8,["dataSource","loading","expandedRowKeys"])])),_:1},8,["title","visible"])])}}},[["__scopeId","data-v-116a2ce0"],["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/appModel/moralEducationEvaluation/classInfo/activityDetailsCom.vue"]]);export{K as default};
