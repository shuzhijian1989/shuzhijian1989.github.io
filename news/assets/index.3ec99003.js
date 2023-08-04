import"./vue.a2f518ee.js";import{M as e,m as t,a}from"./ant-design-vue.db4d48e3.js";import{Y as i}from"./table.81b98c8b.js";import{_ as s,u as l,p as d}from"./index.7061e8ea.js";import{g as r,q as o,d as n,a as u,c,u as m}from"./studentAttendance.d03c3cd1.js";import{d as p}from"./dayjs.49e29cb2.js";import{q as v,r as f,f as b,c as g,y as h,w as y,b8 as L,o as k,a2 as _,a3 as T,O as w,a1 as j,u as I,b as D,D as x,a as C,F as q,a8 as U,a5 as O,a9 as E,a7 as S,aw as R,n as P}from"./@vue.919ff404.js";import{f as $}from"./@ant-design.2e172c39.js";import"./@babel.6d5f88cb.js";import"./resize-observer-polyfill.f664b406.js";import"./vue-types.022beab3.js";import"./@ctrl.c020ccd3.js";import"./dom-align.0991ecc5.js";import"./lodash-es.36dcd19c.js";import"./async-validator.267d9719.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./compute-scroll-into-view.17358474.js";/* empty css                    */import"./secure-ls.8c8acb46.js";import"./vue-router.907b547c.js";import"./nprogress.c2257662.js";import"./axios.7aed06b8.js";import"./qs.e55e9b28.js";import"./side-channel.ea627785.js";import"./get-intrinsic.8c87d952.js";import"./has-symbols.caae0f97.js";import"./has-proto.76cff6c7.js";import"./function-bind.cb3858f2.js";import"./has.c1051c46.js";import"./call-bind.208b5ef0.js";import"./object-inspect.e2cfb4a5.js";import"./vuex.f308ecec.js";import"./vuex-persistedstate.fa252374.js";import"./vue-grid-layout.a3ef67ec.js";const A=v({type:"1",name:"",remarks:"",groupList:[],groupIds:[],mode:"1",weekList:[],attendanceTime:[],attendanceTimeDay:"",timeList:[{status:"",requiredTime:"",sort:"第1次考勤",scopeTime:[]}],isDevice:!0,deviceList:[]});const H=v({width:"500px",visible:!1,isEdit:!1,groupListOptions:[],checkedList:[],id:null});function N(e,a){const i=e=>{H.visible=e};return{drawer:H,handleOpenDrawer:async(e,a)=>{if(H.isEdit=e,e){H.id=a.id;try{const e=await u({id:a.id}),{name:t,type:i,userList:s,mode:l,weeks:d,startDate:r,endDate:o,timeList:n,isDevice:c,deviceList:m,remarks:p}=e.data;A.type=i+"",A.name=t,A.remarks=p,A.groupList=s.map((e=>({id:e.userId,showName:e.name,groupType:e.userType,deptIds:e.deptIds,deptString:e.deptString}))),A.groupIds=s.map((e=>e.userId));const v=s.map((e=>({id:e.userId,showName:e.name,groupType:e.userType,deptIds:e.deptIds,deptString:e.deptString})));H.groupListOptions=v,H.checkedList=v,A.mode=l+"",1===Number.parseInt(l)&&(A.attendanceTimeDay=r),0===Number.parseInt(l)&&(A.attendanceTime=[r,o],A.weekList=d.split(",").map((e=>1*e))),A.timeList=n.map((e=>({status:e.status+"",requiredTime:e.requiredTime,sort:e.sort,scopeTime:[e.startTime,e.endTime]}))),A.isDevice=c,A.deviceList=c?[]:m}catch(s){return t.error("数据异常，无法编辑，请联系管理员"),void i(!1)}}i(!0)},handleCloseDrawer:()=>{i(!1)}}}const V={style:{position:"absolute",right:"0",top:"10px"}};var Y=s({__name:"createOrEdit",props:{visible:Boolean,isEdit:Boolean,deviceList:Array},emits:["update:visible"],setup(e,{emit:t}){const i=e,s=l(),r=h((()=>{const e=[];return s.state.base.commentJsonKeys.INIT_ROLL_LIST.forEach((t=>"classes"!==t.key&&e.push(t.level))),e})),o=v({selectTabs:[{tab:"教职工",key:1,checked:!0},{tab:"学生组",key:2,checked:!0,disabled:r}],deviceId:[],weekList:[{label:"周一",value:1},{label:"周二",value:2},{label:"周三",value:3},{label:"周四",value:4},{label:"周五",value:5},{label:"周六",value:6},{label:"周日",value:7}],visible:!1,drawerVisible:!1,checkedList:[],groupListOptions:[],submitBtnLoading:!1}),n=a.useForm,{drawer:u,handleCloseDrawer:b}=N(),{formRef:$,formRule:H,errorTimeList:Y,add:M,update:F}=function(){const e=f([]),t=v({name:[{required:!0,message:"请输入考勤名称"}],remarks:[{max:50,message:"最多50个字"}],groupIds:[{required:!0,message:"请添加考勤人员"}],weekList:[{required:!0,message:"请选择循环日期"}],attendanceTimeDay:[{required:!0,message:"请选择考勤日期"}],attendanceTime:[{required:!0,trigger:"blur",validator:(e,t)=>{if(null==t)return Promise.reject("请选择考勤日期");if(t.length){const[e,a]=t;return p(a).diff(p(e),"days")>=7?Promise.resolve():Promise.reject("考勤循环日期须设置7天及以上")}return Promise.reject("请选择考勤日期")}}],timeList:[{required:!0,trigger:"blur",validator:(t,a)=>{e.value=[];for(let i=0;i<a.length;i++){const t=a[i];if(!t.requiredTime)return e.value.push(i+1),Promise.reject("请选择考勤时间");if(!t.status)return e.value.push(i+1),Promise.reject("请选择考勤时间 - 签到/签退");if(!t.scopeTime.length)return e.value.push(i+1),Promise.reject("请选择考勤时间 - 打卡范围");if(t.requiredTime&&t.scopeTime.length){const[a,s]=t.scopeTime,l="2022-03-31",d=new Date(`${l} ${t.requiredTime}`).getTime(),r=new Date(`${l} ${a}`).getTime();new Date(`${l} ${s}`).getTime()>d&&d>r||e.value.push(i+1)}}return e.value.length?Promise.reject("考勤时间须在打卡时间范围内"):Promise.resolve()}}],deviceList:[{required:!0,message:"请选择考勤设备"}],isDevice:[{required:!0,message:"请选择考勤设备"}]});return{formRef:A,formRule:t,errorTimeList:e,add:e=>new Promise(((t,a)=>{c(e).then((e=>{t(e)})).catch((()=>{a()}))})),update:e=>new Promise(((t,a)=>{m(e).then((e=>{t(e)})).catch((()=>{a()}))}))}}(),{resetFields:K,validate:B,validateInfos:z}=n($,H),J=e=>e&&e<p().endOf("day"),G=(e,t)=>{$.deviceList=t};function Q(){const e=$.timeList.length;$.timeList.push({status:"",requiredTime:"",sort:`第${e+1}次考勤`,endTime:"",startTime:""}),P((()=>{const e=document.querySelector(".ant-drawer-body"),t=e.clientHeight;0===e.scrollTop?e.scrollTo(0,t-220):e.scrollTo(0,e.scrollTop+220)}))}function W(){const e={1:["name","groupIds","attendanceTimeDay","timeList","remarks"],0:["name","groupIds","weekList","attendanceTime","timeList","remarks"]},a=$.isDevice?e[$.mode]:e[$.mode].concat(["deviceList"]);B(a).then((e=>{o.submitBtnLoading=!0;const a=()=>{o.submitBtnLoading=!1};i.isEdit?F({...te($),id:u.id}).then((e=>{t("submit",{msg:e.message,isEdit:!0}),X()})).finally(a):M(te($)).then((e=>{t("submit",{msg:e.message,isEdit:!1}),X()})).finally(a)})).catch((e=>{}))}function X(){t("update:visible",!1),o.drawerVisible=!1,b(),o.groupListOptions=[],$.groupIds=[],Y.value=[],o.checkedList=[],K()}function Z(e){$.groupList=[],o.groupListOptions=[...e],$.groupIds=e.map((e=>e.id)),$.groupList=e.map((e=>({id:e.id,groupType:1===e._source?2:2===e._source?1:e.groupType,deptIds:1===e._source?e.deptVOList.map((e=>e.deptId)).toString(","):2===e._source?e.classesId:e.deptIds,deptString:e.deptString||""}))),o.checkedList=[...e]}function ee(e){o.checkedList=o.groupListOptions.filter((t=>e.includes(t.id)))}function te(e){const t={},a=e=>{const t=[];return e.forEach((e=>{const[a,i]=e.scopeTime,{requiredTime:s,status:l,sort:d}=e;t.push({startTime:a,endTime:i,requiredTime:s,sort:d,status:l})})),t};for(const i in e)if("1"!==$.mode||"attendanceTimeDay"!==i)if("0"!==$.mode||"attendanceTime"!==i)"weekList"==i&&(t.weekList=e[i].sort(((e,t)=>e-t))),"timeList"!==i?t[i]=e[i]:t.timeList=a(e[i]);else{const[a,s]=e[i];t.startDate=a,t.endDate=s}else{const a=e[i];t.startDate=a,t.endDate=a}return"1"===$.mode&&(delete t.attendanceTime,delete t.weekList),"0"===$.mode&&delete t.attendanceTimeDay,t}return y((()=>i.visible),(e=>{var t;o.drawerVisible=e,i.isEdit?(o.groupListOptions=u.groupListOptions,o.checkedList=u.checkedList,o.deviceIds=null==(t=$.deviceList)?void 0:t.map((e=>e.deviceId))):(o.groupListOptions=[],o.checkedList=[],o.deviceIds=[])})),(t,a)=>{const i=L("a-input"),s=L("a-form-item"),l=L("a-select"),r=L("plus-outlined"),n=L("a-button"),c=L("a-radio"),m=L("a-radio-group"),p=L("a-checkbox"),v=L("a-col"),f=L("a-row"),b=L("a-checkbox-group"),h=L("a-date-picker"),y=L("a-range-picker"),P=L("a-time-picker"),A=L("a-select-option"),H=L("a-time-range-picker"),N=L("delete-outlined"),M=L("a-form"),F=L("a-drawer");return k(),_(F,{visible:o.drawerVisible,"onUpdate:visible":a[11]||(a[11]=e=>o.drawerVisible=e),title:(e.isEdit?"编辑":"新增")+"考勤",placement:"right",footerStyle:{textAlign:"center"},onClose:X,width:I(u).width},{footer:T((()=>[g(n,{onClick:X},{default:T((()=>[w("取消")])),_:1}),g(n,{loading:o.submitBtnLoading,style:{"margin-left":"12px"},type:"primary",onClick:W},{default:T((()=>[w("确认")])),_:1},8,["loading"])])),default:T((()=>[g(M,{labelCol:{span:24},scrollToFirstError:""},{default:T((()=>[g(s,j({label:"考勤名称："},I(z).name),{default:T((()=>[g(i,{value:I($).name,"onUpdate:value":a[0]||(a[0]=e=>I($).name=e),valueModifiers:{trim:!0},placeholder:"请输入"},null,8,["value"])])),_:1},16),g(s,j({label:"备注："},I(z).remarks),{default:T((()=>[g(i,{value:I($).remarks,"onUpdate:value":a[1]||(a[1]=e=>I($).remarks=e),placeholder:"请输入备注"},null,8,["value"])])),_:1},16),g(s,j({label:"考勤人员："},I(z).groupIds,{style:{position:"relative"}}),{default:T((()=>[g(l,{value:I($).groupIds,"onUpdate:value":a[2]||(a[2]=e=>I($).groupIds=e),placeholder:"请添加人员",options:o.groupListOptions,onChange:ee,"max-tag-count":4,mode:"multiple","field-names":{label:"showName",value:"id"}},null,8,["value","options"]),D("div",V,[g(I(d),{mode:"personnel",tabs:o.selectTabs,visible:o.visible,"onUpdate:visible":a[3]||(a[3]=e=>o.visible=e),checked:o.checkedList,"onUpdate:checked":a[4]||(a[4]=e=>o.checkedList=e),onHandleOk:Z},{default:T((()=>[g(n,{type:"primary",size:"small",style:{position:"relative",bottom:"6px",right:"8px",display:"flex","align-items":"center","justify-content":"center"}},{icon:T((()=>[g(r)])),_:1})])),_:1},8,["tabs","visible","checked"])])])),_:1},16),g(s,{label:"考勤模式：",labelCol:{span:5},labelAlign:"left",style:{"align-items":"baseline"}},{default:T((()=>[g(m,{value:I($).mode,"onUpdate:value":a[5]||(a[5]=e=>I($).mode=e)},{default:T((()=>[g(c,{value:"1"},{default:T((()=>[w("单次")])),_:1}),g(c,{value:"0"},{default:T((()=>[w("按周循环")])),_:1})])),_:1},8,["value"])])),_:1}),g(x,{name:"timeList"},{default:T((()=>[0==I($).mode?(k(),_(s,j({key:0,label:"考勤循环：",labelAlign:"left",labelCol:{span:5},style:{"align-items":"baseline"}},I(z).weekList),{default:T((()=>[g(b,{value:I($).weekList,"onUpdate:value":a[6]||(a[6]=e=>I($).weekList=e),style:{width:"100%"}},{default:T((()=>[g(f,null,{default:T((()=>[(k(!0),C(q,null,U(o.weekList,((e,t)=>(k(),_(v,{span:6,key:t,style:O({marginTop:([4,5,6].includes(t)?24:0)+"px"})},{default:T((()=>[g(p,{value:e.value},{default:T((()=>[w(E(e.label),1)])),_:2},1032,["value"])])),_:2},1032,["style"])))),128))])),_:1})])),_:1},8,["value"])])),_:1},16)):S("v-if",!0),1==I($).mode?(k(),_(s,j({key:1,label:"考勤日期："},I(z).attendanceTimeDay),{default:T((()=>[g(h,{"disabled-date":J,value:I($).attendanceTimeDay,"onUpdate:value":a[7]||(a[7]=e=>I($).attendanceTimeDay=e),"value-format":"YYYY-MM-DD",style:{width:"100%"}},null,8,["value"])])),_:1},16)):S("v-if",!0),0==I($).mode?(k(),_(s,j({key:2,label:"考勤日期："},I(z).attendanceTime),{default:T((()=>[g(y,{style:{width:"100%"},"disabled-date":J,value:I($).attendanceTime,"onUpdate:value":a[8]||(a[8]=e=>I($).attendanceTime=e),"value-format":"YYYY-MM-DD"},null,8,["value"])])),_:1},16)):S("v-if",!0)])),_:1}),g(s,j({label:"考勤时间："},I(z).timeList,{validateStatus:"success",class:"timeList_formitem"}),{default:T((()=>[S("  "),g(x,{name:"timeList"},{default:T((()=>[(k(!0),C(q,null,U(I($).timeList,((e,t)=>(k(),C("div",{class:"time_warp",key:t,style:O({border:(I(Y).includes(t+1)?"1px solid #f5222d":"1px solid #00b78100")+" "})},[g(f,{gutter:36},{default:T((()=>[g(v,{span:8},{default:T((()=>[g(s,{label:"考勤序号",labelCol:{span:24}},{default:T((()=>[g(i,{value:e.sort,"onUpdate:value":t=>e.sort=t,disabled:"",placeholder:"请输入"},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:2},1024),g(v,{span:8},{default:T((()=>[g(s,{label:"考勤时间",labelCol:{span:24}},{default:T((()=>[g(P,{value:e.requiredTime,"onUpdate:value":t=>e.requiredTime=t,format:"HH:mm","value-format":"HH:mm"},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:2},1024),g(v,{span:8},{default:T((()=>[g(s,{label:"签到/签退",labelCol:{span:24}},{default:T((()=>[g(l,{value:e.status,"onUpdate:value":t=>e.status=t,placeholder:"请选择"},{default:T((()=>[g(A,{value:"0"},{default:T((()=>[w("签到")])),_:1}),g(A,{value:"1"},{default:T((()=>[w("签退")])),_:1})])),_:2},1032,["value","onUpdate:value"])])),_:2},1024)])),_:2},1024)])),_:2},1024),g(s,{label:"打卡范围限制",labelCol:{span:24}},{default:T((()=>[g(f,{gutter:16},{default:T((()=>[g(v,{span:21},{default:T((()=>[g(H,{format:"HH:mm",value:e.scopeTime,"onUpdate:value":t=>e.scopeTime=t,"value-format":"HH:mm",style:{width:"100%"}},null,8,["value","onUpdate:value"])])),_:2},1024),g(v,{span:3,style:{"text-align":"right"}},{default:T((()=>[I($).timeList.length>1?(k(),_(n,{key:0,type:"text",onClick:e=>function(e){$.timeList.splice(e,1),$.timeList.forEach(((e,t)=>{e.sort=`第${t+1}次考勤`}))}(t)},{icon:T((()=>[g(N,{style:{color:"rgb(147 147 147)"}})])),_:2},1032,["onClick"])):S("v-if",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024)],4)))),128))])),_:1}),S("  ")])),_:1},16),g(s,null,{default:T((()=>[g(n,{type:"primary",ghost:"",onClick:Q,disabled:10==I($).timeList.length},{icon:T((()=>[g(r)])),default:T((()=>[w(" 添加考勤 ")])),_:1},8,["disabled"])])),_:1}),g(s,j({label:"考勤设备：",labelAlign:"left"},I(z).isDevice,{labelCol:{span:5}}),{default:T((()=>[g(m,{value:I($).isDevice,"onUpdate:value":a[9]||(a[9]=e=>I($).isDevice=e)},{default:T((()=>[g(c,{value:!0},{default:T((()=>[w("全部设备")])),_:1}),g(c,{value:!1},{default:T((()=>[w("部分设备")])),_:1})])),_:1},8,["value"])])),_:1},16),I($).isDevice?S("v-if",!0):(k(),_(s,R(j({key:0},I(z).deviceList)),{default:T((()=>[g(l,{placeholder:"请添加",value:o.deviceIds,"onUpdate:value":a[10]||(a[10]=e=>o.deviceIds=e),options:e.deviceList,onChange:G,"max-tag-count":4,mode:"multiple","field-names":{label:"machineName",value:"id"}},null,8,["value","options"])])),_:1},16))])),_:1})])),_:1},8,["visible","title","width"])}}},[["__scopeId","data-v-6b4f6634"],["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/appModel/studentAttendance/event/createOrEdit.vue"]]);const M={style:{padding:"16px 40px"}},F=D("span",null," 新增或修改事件考勤规则后，都将在次日00:00生效 ",-1),K=D("div",{style:{height:"0px"}},null,-1),B=["onClick"];var z=s({__name:"index",setup(a){const{queryStudentAttendance:s,delItem:l,columns:d,deviceList:u}=function(){const t=f([]);return b((()=>{t.value.length||r().then((e=>{t.value=e.data||[]}))})),{deviceList:t,columns:[{title:"考勤名称",dataIndex:"name"},{title:"考勤类型",dataIndex:"mode",customRender:({record:e})=>e.mode?"单次考勤":"循环考勤"},{title:"考勤人数（人）",dataIndex:"personNum"},{title:"日期",ellipsis:!0,dataIndex:"startDate",customRender:({record:e})=>e.mode?`${e.startDate}`:`${e.startDate} - ${e.endDate}`},{title:"循环",ellipsis:!0,dataIndex:"weeks"},{title:"打卡次数",dataIndex:"signInNum"},{title:"考勤设备",ellipsis:!0,dataIndex:"deviceName"},{title:"备注",ellipsis:!0,dataIndex:"remarks",customRender:({record:e})=>`${e.remarks?e.remarks:"-"}`},{title:"操作",width:"150px",customFilterDropdown:!0,key:"operation"}],queryStudentAttendance:o,delItem:(t,a)=>new Promise(((i,s)=>{e.confirm({title:a,icon:g($),okText:"确定",okType:"danger",cancelText:"取消",onOk(){n(t).then((e=>{i(e.message||"删除成功")})).catch((()=>{s()}))},onCancel(){s()}})}))}}(),{drawer:c,handleOpenDrawer:m}=N(),p=v({selectedRowKeys:[],searchValue:""}),y=h((()=>0===p.selectedRowKeys.length)),_=(e,{id:a}={})=>{const i={batch:p.selectedRowKeys,single:[a]};l({ids:i[e]},{batch:"确定批量删除出入校考勤?",single:"确定删除出入校考勤?"}[e]).then((e=>{t.success(e),p.selectedRowKeys=[],U.update()}))},j=({msg:e,isEdit:a})=>{t.success(e),U.update(a)},x={onChange(e){p.selectedRowKeys=e}},U=e=>s({...e,type:1,name:p.searchValue}),O=()=>{U.update(!0)};return(e,t)=>{const a=L("a-input-search"),s=L("a-button"),l=L("plus-outlined"),r=L("exclamation-circle-outlined"),o=L("a-tooltip");return k(),C("div",M,[S("  "),g(I(i),{columns:I(d),loadData:U,"row-selection":x,rowKey:"id"},{title:T((()=>[g(a,{value:p.searchValue,"onUpdate:value":t[0]||(t[0]=e=>p.searchValue=e),placeholder:"请输入考勤名称搜索",style:{width:"336px"},onSearch:O},null,8,["value"])])),handle:T((()=>[g(s,{danger:"",onClick:t[1]||(t[1]=e=>_("batch")),disabled:y.value},{default:T((()=>[w("批量删除 ")])),_:1},8,["disabled"]),g(s,{type:"primary",style:{"margin-left":"12px"},onClick:t[2]||(t[2]=e=>I(m)(!1))},{icon:T((()=>[g(l)])),default:T((()=>[w(" 新增 ")])),_:1})])),customFilterIcon:T((()=>[g(o,{placement:"bottomRight"},{title:T((()=>[F])),default:T((()=>[g(r,{style:{"font-size":"14px",color:"#757575"}})])),_:1})])),customFilterDropdown:T((()=>[K])),bodyCell:T((({column:e,record:t})=>["operation"===e.key?(k(),C(q,{key:0},[D("a",{type:"link",onClick:e=>I(m)(!0,t),style:{color:"var(--primary-color)"}},"编辑 ",8,B),g(s,{type:"link",danger:"",onClick:e=>_("single",t)},{default:T((()=>[w("删除")])),_:2},1032,["onClick"])],64)):S("v-if",!0)])),_:1},8,["columns"]),S(" 添加编辑 "),g(I(Y),{visible:I(c).visible,"onUpdate:visible":t[3]||(t[3]=e=>I(c).visible=e),isEdit:I(c).isEdit,deviceList:I(u),onSubmit:j},null,8,["visible","isEdit","deviceList"]),S("  ")])}}},[["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/appModel/studentAttendance/event/index.vue"]]);export{z as default};
