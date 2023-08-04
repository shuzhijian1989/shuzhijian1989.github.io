import{a as e,E as a,b as t}from"./element-plus.8ba44712.js";import"./vue.a2f518ee.js";import{_ as l,u as s}from"./index.7061e8ea.js";import{l as i,c as u,d as n}from"./workers.a8ab8099.js";import{q as r,y as d,f as o,b8 as c,o as v,a2 as p,a3 as m,c as y,b as f,a as x,F as h,a8 as b,a4 as g,O as k,a9 as _,a7 as D,u as P,b5 as j,b4 as w}from"./@vue.919ff404.js";const L={children:"children",value:"id",label:"name",key:"id"},N={children:"children",value:"id",label:"name",key:"id"},U=[{label:"是",value:1},{label:"否",value:0}],F=[{label:"是",value:1},{label:"否",value:0}];const T=(e=>(j("data-v-81b6c6f6"),e=e(),w(),e))((()=>f("span",null,"查看",-1))),I={key:1},S={key:1},C={key:1},R={key:1};var $=l({__name:"FacultyFormDetail",props:{studentDetailPrarms:{type:Object,default:()=>{}}},emits:["smitStudentForm"],setup(l,{emit:j}){const w=l,U=s();let F=localStorage.getItem("dictionary");F&&(F=JSON.parse(F));const $=r({spinning:!1,treeRoles:[],subjectIds:[],threeLevelLinkageList:[],informations:[{title:"基础信息",key:"basic",children:[{text:"姓名",value:"name"},{text:"英文名",value:"englishName"},{text:"性别",value:"gender",dict:"gender"},{text:"手机号码",value:"phone"},{text:"当前状态",value:"status",dict:"emp_status"},{text:"部门",value:"depts"},{text:"角色",value:"roles",sapn:3}]},{title:"其他信息",key:"student",children:[{text:"编制类别",value:"preparationCategory",dict:"preparation_category"},{text:"工号",value:"jobNumber"},{text:"教职工类别",value:"teacherType",dict:"teacher_type"},{text:"授教科目",value:"subjectList"},{text:"参加工作时间",value:"workingDate"},{text:"来校时间",value:"joinDate"},{text:"从教时间",value:"teacheringDate"},{text:"是否兼职教师",value:"isPart"},{text:"是否双师型教师",value:"isDoubleQualified"},{text:"籍贯",value:"area"},{text:"民族",value:"nation",dict:"nation"},{text:"出生日期",value:"birthday"},{text:"婚姻状况",value:"maritalType",dict:"marital_type"},{text:"证件类型",value:"idType",dict:"id_type"},{text:"证件号码",value:"idCard"},{text:"健康状态",value:"healthType",dict:"health_type"},{text:"血型",value:"bloodType",dict:"blood_type"},{text:"最高学历",value:"highestEducation",dict:"highest_education"},{text:"职称",value:"professionalTitle",dict:"nationnation"},{text:"户口类别",value:"registeredResidenceType",dict:"registered_residence_type"},{text:"政治面貌",value:"politicalStatus",dict:"political_status"},{text:"港澳台侨外码",value:"postalCode",dict:"postal_code"},{text:"卡号",value:"cardNumber"},{text:"邮箱",value:"email"},{text:"当前住址编码",value:"addressEncoding",sapn:3},{text:"当前住址",value:"currentAddress",sapn:3},{text:"备注",value:"remark",sapn:3}]}]}),E=()=>{j("FacultyFormDetail",!0)},H=d((()=>U.state.base.departmentTree)),O=d((()=>e=>{$.spinning=!1;const a=w.studentDetailPrarms,{value:t,dict:l}=e;return a[t]||0===a[t]?l?F[`${l}${a[t]}`]:["isPart","isDoubleQualified"].includes(t)?a[t]?"是":"否":"teacheringDate"===t?`${a[t]} 年`:a[t]:"-"}));return o((()=>{$.spinning=!0,i().then((e=>{const{data:a}=e;$.treeRoles=a})),u().then((e=>{const{data:a}=e;$.subjectIds=a})),n().then((e=>{const{data:a}=e;$.threeLevelLinkageList=a}))})),(s,i)=>{const u=c("a-layout-header"),n=e,r=c("a-tree-select"),d=c("a-cascader"),o=a,j=t,w=c("a-spin"),U=c("a-layout-content"),F=c("a-layout");return v(),p(F,{class:"yd-layout"},{default:m((()=>[y(u,{class:"yd-layout-header"},{default:m((()=>[f("i",{class:"iconfont icon-xingzhuangjiehe19",onClick:E}),T])),_:1}),y(U,{class:"yd-layout-content set-student"},{default:m((()=>[y(w,{spinning:$.spinning},{default:m((()=>[(v(!0),x(h,null,b($.informations,((e,a)=>(v(),p(j,{key:a,title:e.title,class:g(["yd-descriptions",{parent_style:"parent"===e.key}])},{default:m((()=>[(v(!0),x(h,null,b(e.children,((e,a)=>(v(),x(h,null,[k(_(e.value)+" ",1),e.show?D("v-if",!0):(v(),p(o,{key:a,label:`${e.text}：`,span:e.sapn},{default:m((()=>["avatar"===e.value?(v(),p(n,{key:0,class:"yd-faceImg",src:l.studentDetailPrarms[e.value]||"/image/defal_user.png",fit:"fill"},null,8,["src"])):"depts"===e.value?(v(),x(h,{key:1},[D(" 部门 "),l.studentDetailPrarms[e.value]&&l.studentDetailPrarms[e.value].length?(v(),p(r,{key:0,class:"form-select",disabled:"",value:l.studentDetailPrarms[e.value],"onUpdate:value":a=>l.studentDetailPrarms[e.value]=a,"dropdown-style":{maxHeight:"400px",overflow:"auto"},multiple:"",fieldNames:P(L),"tree-data":H.value},{title:m((e=>[k(_(e.name),1)])),_:2},1032,["value","onUpdate:value","fieldNames","tree-data"])):(v(),x("span",I,"-"))],64)):"roles"===e.value?(v(),x(h,{key:2},[D(" 角色 "),l.studentDetailPrarms[e.value]&&l.studentDetailPrarms[e.value].length?(v(),p(r,{key:0,value:l.studentDetailPrarms[e.value],"onUpdate:value":a=>l.studentDetailPrarms[e.value]=a,class:"form-select",disabled:"","dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":"",multiple:"","tree-default-expand-all":"",fieldNames:P(N),"tree-data":$.treeRoles},{title:m((e=>[k(_(e.name),1)])),_:2},1032,["value","onUpdate:value","fieldNames","tree-data"])):(v(),x("span",S,"-"))],64)):"subjectList"===e.value?(v(),x(h,{key:3},[D(" 授教科目 "),l.studentDetailPrarms[e.value]&&l.studentDetailPrarms[e.value].length?(v(),p(r,{key:0,value:l.studentDetailPrarms[e.value],"onUpdate:value":a=>l.studentDetailPrarms[e.value]=a,class:"form-select",disabled:"","dropdown-style":{maxHeight:"400px",overflow:"auto"},"allow-clear":"",multiple:"","tree-default-expand-all":"",fieldNames:P(N),"tree-data":$.subjectIds},{title:m((e=>[k(_(e.name),1)])),_:2},1032,["value","onUpdate:value","fieldNames","tree-data"])):(v(),x("span",C,"-"))],64)):"area"===e.value?(v(),x(h,{key:4},[D(" 籍贯 "),l.studentDetailPrarms[e.value]&&l.studentDetailPrarms[e.value].length?(v(),p(d,{key:0,class:"form-select",bordered:!1,disabled:"",value:l.studentDetailPrarms[e.value],"onUpdate:value":a=>l.studentDetailPrarms[e.value]=a,fieldNames:{label:"name",value:"id",children:"area"},options:$.threeLevelLinkageList},null,8,["value","onUpdate:value","options"])):(v(),x("span",R,"-"))],64)):(v(),x(h,{key:5},[k(_(O.value(e)),1)],64))])),_:2},1032,["label","span"]))],64)))),256))])),_:2},1032,["title","class"])))),128))])),_:1},8,["spinning"])])),_:1})])),_:1})}}},[["__scopeId","data-v-81b6c6f6"],["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/framework/workers/components/FacultyFormDetail.vue"]]);export{$ as S,N as a,F as b,L as f,U as i};
