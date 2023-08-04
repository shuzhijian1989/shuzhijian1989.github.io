import"./vue.a2f518ee.js";import{u as e,a as s}from"./vue-router.907b547c.js";import{a as t,m as a,M as l}from"./ant-design-vue.db4d48e3.js";import{_ as i}from"./index.272083a4.js";import{u as o,_ as c,p as n}from"./index.7061e8ea.js";import{d as u}from"./dayjs.49e29cb2.js";import{e as d,u as r,a as p,g as b,b as m,d as h}from"./punchTheClock.f98483ac.js";import{e as k,y as v,q as f,w as y,f as g,b8 as j,o as _,a as S,c as L,a3 as C,O as w,a1 as x,u as I,F as T,a8 as q,a2 as D,a9 as O,b as N,a7 as E,H as U,L as M,r as z,a4 as Y,aK as H,a5 as V,b5 as F,b4 as R}from"./@vue.919ff404.js";import{c as A}from"./punchClockStor.44359efe.js";import{E as K}from"./@ant-design.2e172c39.js";import"./@babel.6d5f88cb.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.022beab3.js";import"./@ctrl.c020ccd3.js";import"./dom-align.0991ecc5.js";import"./lodash-es.36dcd19c.js";import"./async-validator.267d9719.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./compute-scroll-into-view.17358474.js";/* empty css                    */import"./secure-ls.8c8acb46.js";import"./nprogress.c2257662.js";import"./axios.7aed06b8.js";import"./qs.e55e9b28.js";import"./side-channel.ea627785.js";import"./get-intrinsic.8c87d952.js";import"./has-symbols.caae0f97.js";import"./has-proto.76cff6c7.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.208b5ef0.js";import"./object-inspect.e2cfb4a5.js";import"./vuex.f308ecec.js";import"./vuex-persistedstate.fa252374.js";import"./vue-grid-layout.a3ef67ec.js";import"./FilterDropdown.5a779a00.js";const P={class:"publish-scope"};var $=c(k({__name:"addTask",emits:["emitTaskList"],setup(e,{expose:s,emit:l}){const i=o(),c=t.useForm,m=v((()=>i.state.base.commentJsonKeys.INIT_SELECT.map((e=>({tab:e.lable,identity:e.identity,key:"teacher"===e.key?1:2,checked:!0}))))),h=f({loadingTask:!1,title:"新建任务",detailsId:"",visible:!1,kemus:[],students:[],selectVisibles:!1,multipleTrue:!0,selectMode:"depa",selectTabs:m,checkedList:[],publishScopeCheckedLists:[],fieldNames:{label:"name",value:"id"},treeData:[],cycle:[{key:"1",value:"周一"},{key:"2",value:"周二"},{key:"3",value:"周三"},{key:"4",value:"周四"},{key:"5",value:"周五"},{key:"6",value:"周六"},{key:"7",value:"周日"}],subjectIdOption:[],rulesData:["subjectIdList","taskName","taskDescription","publishScopeCheckedLists","publishStartEnd","frequency"]}),k=f({id:"",publishScopeCheckedLists:[],subjectIdList:["-1"],taskName:"",taskDescription:"",publishScopeObjList:[],publishStartEnd:[],publishStart:[],publishEnd:[],frequency:"single",customerOption:[],requirementList:[]}),z=e=>{e&&e.length&&(e.includes("-1")?e.length>1&&"-1"===e[0]?k.subjectIdList=[].concat(e.slice(1)):k.subjectIdList=["-1"]:e.length>3&&(k.subjectIdList=[].concat(e.slice(0,2),e.slice(-1))))},Y=e=>{k.publishStart=[],k.publishEnd=[],e&&e.length&&(k.publishStart=e[0],k.publishEnd=e[1])},H=f({subjectIdList:[{required:!0,message:"请选择选择科目!"}],taskName:[{required:!0,message:"请输入打卡任务!"}],taskDescription:[{required:!0,message:"请输入任务描述!"}],publishScopeCheckedLists:[{required:!0,message:"请选择发布范围!"}],publishStartEnd:[{required:!0,message:"请选择发布时间范围!"}],frequency:[{required:!0,message:"请选择打卡频次!"}],customerOption:[{required:!0,message:"请选择自定义周期!"}]}),{validateInfos:V,resetFields:F,validate:R}=c(k,H),A=()=>{!k.publishScopeCheckedLists.length&&(h.checkedList=[]),h.selectVisibles=!0},K=e=>{let s="",t="";k.publishScopeCheckedLists=[],k.publishScopeObjList=e.map((e=>(e.ancestors||0==e.ancestors||"dept"===e.objType?(t=e.hasOwnProperty("ancestors")?"0"===e.ancestors?"parent":"children":e.objLevel,s="dept"):(s="class",t=e.rollValue||e.objLevel),k.publishScopeCheckedLists.push(e.id),{objType:s,objLevel:t,id:e.id,name:e.showName||e.name}))),h.checkedList=k.publishScopeObjList},$=()=>{h.visible=!1,F()},J=e=>{const s=[];k.publishScopeObjList.forEach((t=>{e.some((e=>e==t.id))&&s.push(t)})),k.publishScopeObjList=s,h.checkedList=s},W=()=>{const e=k.id?r:p;R(h.rulesData).then((()=>{h.loadingTask=!0,e(k).then((e=>{a.success(e.message),l("emitTaskList"),$()})).finally((()=>h.loadingTask=!1))}))},X=()=>{b(h.detailsId).then((e=>{const{data:s}=e;for(const t in k)k[t]="publishScopeCheckedLists"===t?s.publishScopeObjList.map((e=>e.id)):"publishStartEnd"===t?[s.publishStart,s.publishEnd]:s[t];h.checkedList=s.publishScopeObjList}))},B=e=>e&&e<u().subtract(1,"day");return y((()=>k.frequency),(e=>{h.rulesData=[];for(const s in H)"custom"!==e&&"customerOption"===s||h.rulesData.push(s)})),y((()=>h.visible),(e=>{if(e&&h.detailsId)return h.title="编辑任务",void X();h.title="新建任务",h.detailsId=""})),s({initState:h,getPunchTheClockDetailsInfo:X}),g((()=>{d().then((e=>{const{data:s}=e;h.subjectIdOption=s}))})),(e,s)=>{const t=j("close-outlined"),a=j("a-select-option"),l=j("a-select"),i=j("a-form-item"),o=j("a-input"),c=j("a-textarea"),u=j("plus-square-filled"),d=j("a-range-picker"),r=j("a-radio"),p=j("a-radio-group"),b=j("a-checkbox"),m=j("a-col"),v=j("a-row"),f=j("a-checkbox-group"),y=j("a-form"),g=j("a-button"),H=j("a-drawer"),F=n;return _(),S(T,null,[L(H,{visible:h.visible,"onUpdate:visible":s[8]||(s[8]=e=>h.visible=e),title:h.title,width:"520",keyboard:!1,closable:!1,maskClosable:!1,"footer-style":{textAlign:"center"},onClose:$},{extra:C((()=>[L(t,{onClick:$})])),footer:C((()=>[L(g,{style:{"margin-right":"8px"},onClick:$},{default:C((()=>[w("取消")])),_:1}),L(g,{type:"primary",loading:h.loadingTask,onClick:W},{default:C((()=>[w("发布")])),_:1},8,["loading"])])),default:C((()=>[L(y,{name:"create-work-form",layout:"vertical"},{default:C((()=>[L(i,x({label:"选择科目："},I(V).subjectIdList),{default:C((()=>[L(l,{value:k.subjectIdList,"onUpdate:value":s[0]||(s[0]=e=>k.subjectIdList=e),mode:"multiple",maxTagTextLength:3,placeholder:"请选择",onChange:z},{default:C((()=>[L(a,{value:"-1"},{default:C((()=>[w("不限")])),_:1}),(_(!0),S(T,null,q(h.subjectIdOption,(e=>(_(),D(a,{key:e.id,value:e.id},{default:C((()=>[w(O(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1},16),L(i,x({label:"打卡任务："},I(V).taskName),{default:C((()=>[L(o,{value:k.taskName,"onUpdate:value":s[1]||(s[1]=e=>k.taskName=e),"show-count":"",maxlength:20,placeholder:"请输入"},null,8,["value"])])),_:1},16),L(i,x({label:"任务描述："},I(V).taskDescription),{default:C((()=>[L(c,{showCount:"",maxlength:200,value:k.taskDescription,"onUpdate:value":s[2]||(s[2]=e=>k.taskDescription=e),autosize:{minRows:1,maxRows:5},placeholder:"请输入"},null,8,["value"])])),_:1},16),L(i,x({label:"发布范围："},I(V).publishScopeCheckedLists,{class:"is-confirmation-item"}),{default:C((()=>[N("div",P,[L(l,{value:k.publishScopeCheckedLists,"onUpdate:value":s[3]||(s[3]=e=>k.publishScopeCheckedLists=e),mode:"multiple",style:{width:"100%"},placeholder:"请选择",fieldNames:h.fieldNames,options:k.publishScopeObjList,onChange:J},null,8,["value","fieldNames","options"]),L(u,{class:"publish-scope-icon",onClick:A})])])),_:1},16),L(i,x({class:"form-item-inline",label:"发布时间范围："},I(V).publishStartEnd),{default:C((()=>[h.visible?(_(),D(d,{key:0,style:{width:"100%"},value:k.publishStartEnd,"onUpdate:value":s[4]||(s[4]=e=>k.publishStartEnd=e),"disabled-date":B,separator:"至","value-format":"YYYY-MM-DD",format:"YYYY-MM-DD",onChange:Y},null,8,["value"])):E("v-if",!0)])),_:1},16),L(i,x({label:"打卡频次：",class:"work-logo work-logo-cycle cycle-radio"},I(V).frequency),{default:C((()=>[L(p,{value:k.frequency,"onUpdate:value":s[5]||(s[5]=e=>k.frequency=e)},{default:C((()=>[L(r,{value:"single"},{default:C((()=>[w("单次")])),_:1}),L(r,{value:"custom"},{default:C((()=>[w("自定义")])),_:1})])),_:1},8,["value"])])),_:1},16),U(L(i,x({label:"自定义：",class:"work-logo work-logo-cycle cycle-checkbox"},I(V).customerOption),{default:C((()=>[L(f,{class:"checkbox-group-cycle",value:k.customerOption,"onUpdate:value":s[6]||(s[6]=e=>k.customerOption=e),style:{width:"100%"}},{default:C((()=>[L(v,null,{default:C((()=>[(_(!0),S(T,null,q(h.cycle,(e=>(_(),D(m,{span:6,key:e.key},{default:C((()=>[L(b,{value:e.key},{default:C((()=>[w(O(e.value),1)])),_:2},1032,["value"])])),_:2},1024)))),128))])),_:1})])),_:1},8,["value"])])),_:1},16),[[M,"custom"===k.frequency]]),L(i,{label:"打卡要求：",class:"work-logo"},{default:C((()=>[L(f,{value:k.requirementList,"onUpdate:value":s[7]||(s[7]=e=>k.requirementList=e)},{default:C((()=>[L(b,{value:"upload_picture"},{default:C((()=>[w("提交时必须包含图片")])),_:1})])),_:1},8,["value"])])),_:1})])),_:1})])),_:1},8,["visible","title"]),L(F,{visible:h.selectVisibles,"onUpdate:visible":s[9]||(s[9]=e=>h.selectVisibles=e),treeData:h.treeData,multiple:h.multipleTrue,tabs:h.selectTabs,mode:h.selectMode,checked:h.checkedList,"onUpdate:checked":s[10]||(s[10]=e=>h.checkedList=e),onHandleOk:K},null,8,["visible","treeData","multiple","tabs","mode","checked"])],64)}}}),[["__scopeId","data-v-796f9a54"],["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/appModel/views/punchTheClock/addTask.vue"]]);const J={class:"layout-header-radius"},W=(e=>(F("data-v-4273e067"),e=e(),R(),e))((()=>N("i",{class:"iconfont icon-xingzhuangjiehe19"},null,-1))),X={key:0,class:"table-create-time"},B={class:"create-time-icon"},G={key:0,class:"editable-row-operations"},Q={key:0},Z={key:0},ee={key:1};var se=c(k({__name:"task",setup(t){const o=e(),c=s(),n=z(),u=f({disableds:!0,spinLoad:!1,clockStatus:{in_progress:"进行中",not_start:"未开始",end:"已结束",color_in_progress:"success",color_not_start:"warning",color_end:"default"},pagination:{pageNo:1,pageSize:10,total:0},status:"",columns:A.details,direction:"desc",dataSource:[]}),d=()=>{const{source:e}=c.query;e?o.push({name:e}):o.push({path:c.path})},r=()=>{const{status:e,direction:s}=u,t={...u.pagination,status:e,direction:s};m(t).then((e=>{const{list:s,pageNo:t,pageSize:a,total:l}=e.data;u.dataSource=s,u.pagination={pageNo:t,pageSize:a,total:l}}))},p=e=>{const{pageSize:s,current:t,status:a}=e;u.pagination.pageNo=t,u.pagination.pageSize=s,(null==a?void 0:a.length)&&(u.status=a[0]),r()},b=e=>{u.direction=e,r()},k=v((()=>e=>e.subject.length>3?(e.beyondHiding=!0,`(${e.subject.substring(0,2)}...)`):(e.beyondHiding=!1,`(${e.subject})`)));return g((()=>{r()})),(e,s)=>{const t=j("a-layout-header"),c=j("plus-outlined"),m=j("a-button"),v=j("caret-up-outlined"),f=j("caret-down-outlined"),y=j("a-badge"),g=j("a-tooltip"),x=j("a-layout-content"),q=j("a-layout");return _(),S("div",J,[L(q,{class:"punch-clock-layout layout-header-radius"},{default:C((()=>[L(t,{class:"punch-clock-layout-header layout-header-radius"},{default:C((()=>[N("span",{onClick:d},[W,w("打卡 ")])])),_:1}),L(q,{class:"punch-clock-layout-content"},{default:C((()=>[L(x,{class:"layout-content-table"},{default:C((()=>[L(m,{class:"add-task",type:"primary",onClick:s[0]||(s[0]=e=>n.value.initState.visible=!0)},{icon:C((()=>[L(c)])),default:C((()=>[w(" 新增任务 ")])),_:1}),L(i,{class:"task_table",columns:u.columns,dataSource:u.dataSource,totals:u.pagination,isScroll:!0,isSrollXW:300,rowSelection:!1,spinLoad:u.spinLoad,onOnSelectedRowKeys:p},{headerCell:C((({column:e})=>["createTime"===e.key?(_(),S("span",X,[w(O(e.title)+" ",1),N("span",B,[L(v,{class:Y({outlinedActive:"asc"===u.direction}),onClick:s[1]||(s[1]=e=>b("asc"))},null,8,["class"]),L(f,{class:Y({outlinedActive:"desc"===u.direction}),onClick:s[2]||(s[2]=e=>b("desc"))},null,8,["class"])])])):E("v-if",!0)])),bodyCell:C((({column:e,text:s,record:t})=>["operation"===e.dataIndex?(_(),S("div",G,[L(m,{class:"look",type:"link",onClick:e=>{return s=t.id,void o.push({name:"details",query:{signTaskId:s}});var s}},{default:C((()=>[w("查看")])),_:2},1032,["onClick"]),L(m,{class:Y(""+("in_progress"===t.status||"end"===t.status?"":"look")),disabled:"in_progress"===t.status||"end"===t.status,type:"link",onClick:e=>{return s=t.id,n.value.initState.visible=!0,void(n.value.initState.detailsId=s);var s}},{default:C((()=>[w("编辑")])),_:2},1032,["class","disabled","onClick"]),L(m,{type:"link",disabled:"end"===t.status,danger:"",onClick:e=>{return s=t.id,void l.confirm({title:"删除提示",icon:L(K),content:"你确定要删除该条任务吗？",okText:"确认",cancelText:"取消",onOk(){h([s]).then((()=>{a.success("删除成功！"),r()}))}});var s}},{default:C((()=>[w("删除")])),_:2},1032,["disabled","onClick"])])):E("v-if",!0),"status"===e.dataIndex?(_(),D(y,{key:1,status:u.clockStatus["color_"+t.status],text:u.clockStatus[t.status]},null,8,["status","text"])):"createTime"===e.dataIndex?(_(),S(T,{key:2},[],64)):(_(),D(g,{key:3,placement:"topLeft"},H({default:C((()=>["taskName"===e.dataIndex?(_(),S("span",Z,[w(O(s)+" ",1),t.subject?(_(),S("span",{key:0,class:"beyond-hiding",style:V({position:t.beyondHiding?"absolute":"initial"})},O(k.value(t)),5)):E("v-if",!0)])):(_(),S("span",ee,O(s),1))])),_:2},[(null==s?void 0:s.length)>10?{name:"title",fn:C((()=>[w(O(s)+" ",1),"taskName"===e.dataIndex&&t.subject?(_(),S("span",Q,"（"+O(t.subject)+"）",1)):E("v-if",!0)])),key:"0"}:void 0]),1024))])),_:1},8,["columns","dataSource","totals","spinLoad"])])),_:1})])),_:1})])),_:1}),L(I($),{ref_key:"taskRef",ref:n,onEmitTaskList:r},null,512)])}}}),[["__scopeId","data-v-4273e067"],["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/appModel/views/punchTheClock/task.vue"]]);export{se as default};
