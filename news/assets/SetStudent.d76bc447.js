import{E as e,a as t,b as a}from"./element-plus.8ba44712.js";import"./vue.a2f518ee.js";import{_ as s,u as l}from"./index.7061e8ea.js";import{y as n,q as u,w as i,b8 as o,o as d,a2 as r,a3 as c,c as v,b as m,a as p,F as y,a8 as x,a4 as h,a7 as f,aK as _,O as k,a9 as b,b5 as g,b4 as S}from"./@vue.919ff404.js";const D=(e=>(g("data-v-a8f38082"),e=e(),S(),e))((()=>m("span",null,"查看",-1))),P={class:"cell-item"},w={key:1};var j=s({__name:"SetStudent",props:{studentDetailPrarms:{type:Object,default:()=>{}},threeLevelLinkage:{type:Array,default:()=>[]}},emits:["smitStudentForm"],setup(s,{emit:g}){const S=s,j=l();let C=localStorage.getItem("dictionary");C&&(C=JSON.parse(C));const F=n((()=>1===j.state.base.commentJsonKeys.schoolType)),N=u({informations:[{title:"基础信息",key:"basic",children:[{text:"头像",value:"avatar",sapn:3},{text:"姓名",value:"name"},{text:"班级",value:"className"},{text:"学籍号",value:"studentCode"},{text:"学生手机",value:"phone"},{text:"性别",value:"gender",dict:"gender"},{text:"入学日期",value:"admissionDate"},{text:"学籍状态",value:"status",dict:"roll_status"},{text:"学号",value:"studentNo"},{text:"卡号",value:"icCardNo"},{text:"学历",value:"education",show:F,dict:"student_education_status"},{text:"学制",value:"academicSystem",show:F,dict:"student_academic_system_status"},{text:"第二学位",value:"secondDegree",show:F,dict:"student_second_degree_status"}]},{title:"学生扩展信息",key:"student",children:[{text:"住宿方式",value:"accommodation",dict:"accommodation"},{text:"是否独生子女",value:"isChild"},{text:"电子信箱",value:"email"},{text:"证件类型",value:"idType",dict:"id_type"},{text:"证件号码",value:"idCard"},{text:"民族",value:"nation",dict:"nation"},{text:"政治面貌",value:"politicalStatus",dict:"political_status"},{text:"出生日期",value:"birthday"},{text:"出生地",value:"birthPlace"},{text:"国籍",value:"country",dict:"country"},{text:"籍贯",value:"nativePlaces"},{text:"是否流动人口",value:"isFlow"},{text:"户口类别",value:"householdType",dict:"household_type"},{text:"户口所在地",value:"householdAddress"},{text:"血型",value:"bloodType",dict:"blood_type"},{text:"健康状态",value:"healthStatus",dict:"health_status"},{text:"个人疾病情况",value:"personalIllness"},{text:"个人特长",value:"specialty"},{text:"家庭住址",value:"address",sapn:3},{text:"备注",value:"remarks",sapn:3}]}]}),T=u({title:"家长信息",key:"parent",children:[{text:"家长姓名",value:"name"},{text:"家长手机号",value:"phone"},{text:"家庭关系",value:"relations"}]}),$=()=>{g("smitStudentForm",!0)},I=n((()=>e=>{const t=S.studentDetailPrarms,{value:a,dict:s}=e;return t[a]||0===t[a]?s?C[`${s}${t[a]}`]:"isChild"===a||"householdType"===a||"isFlow"===a?t[a]?"是":"否":t[a]:"-"}));return i((()=>S.studentDetailPrarms),(e=>{var t;(null==(t=e.elterns)?void 0:t.length)&&(N.informations=[...N.informations,T],N.informations[2].children=[],e.elterns.forEach((e=>{N.informations[2].children.push({text:"家长姓名",value:e.name},{text:"家长手机号",value:e.phone},{text:"家庭关系",value:C[`relations${e.relations}`]})})))}),{immediate:!0}),(l,n)=>{const u=o("a-layout-header"),i=e,g=t,S=o("a-cascader"),j=a,C=o("a-layout-content"),F=o("a-layout");return d(),r(F,{class:"yd-layout"},{default:c((()=>[v(u,{class:"yd-layout-header"},{default:c((()=>[m("i",{class:"iconfont icon-xingzhuangjiehe19",onClick:$}),D])),_:1}),v(C,{class:"yd-layout-content set-student"},{default:c((()=>[(d(!0),p(y,null,x(N.informations,((e,t)=>(d(),r(j,{key:t,title:e.title,class:h(["yd-descriptions",{parent_style:"parent"===e.key}])},{default:c((()=>[f(" 家长 "),"parent"===e.key?(d(!0),p(y,{key:0},x(e.children,((t,a)=>(d(),r(i,{key:a,label:`${t.text}：`,span:t.sapn},_({default:c((()=>[k(" "+b(t.value||"-"),1)])),_:2},["parent"===e.key?{name:"label",fn:c((()=>[m("div",P,b(t.text)+"：",1)])),key:"0"}:void 0]),1032,["label","span"])))),128)):(d(!0),p(y,{key:1},x(e.children,((e,t)=>(d(),p(y,null,[e.show?f("v-if",!0):(d(),r(i,{key:t,label:`${e.text}：`,span:e.sapn},{default:c((()=>["avatar"===e.value?(d(),r(g,{key:0,class:"yd-faceImg",src:s.studentDetailPrarms[e.value]||"/image/defal_user.png",fit:"fill"},null,8,["src"])):"nativePlaces"===e.value?(d(),p(y,{key:1},[f(" 籍贯 "),s.studentDetailPrarms[e.value]&&s.studentDetailPrarms[e.value].length?(d(),r(S,{key:0,class:"form-select",bordered:!1,disabled:"",value:s.studentDetailPrarms[e.value],"onUpdate:value":t=>s.studentDetailPrarms[e.value]=t,fieldNames:{label:"name",value:"id",children:"area"},options:s.threeLevelLinkage},null,8,["value","onUpdate:value","options"])):(d(),p("span",w,"-"))],64)):(d(),p(y,{key:2},[k(b(I.value(e)),1)],64))])),_:2},1032,["label","span"]))],64)))),256))])),_:2},1032,["title","class"])))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-a8f38082"],["__file","C:/Users/66406/Desktop/ydproject/cloudSystem3.0/cloud-system-2.0/src/views/framework/schoolRoll/components/SetStudent.vue"]]);export{j as S};
