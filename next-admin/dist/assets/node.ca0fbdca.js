import{i as j}from"./echarts.c5874920.js";import{ay as G}from"./index.070d5527.js";import{h as v,r as y,K as J,a9 as n,j as p,k as h,D as e,x as t,B as f,F as w,Z as M,l as q,J as K,v as m,A as x}from"./vue.543fafcc.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.3b68140d.js";const P={class:"workflow-drawer-node"},W={class:"flex-content-right"},Z=v({name:"pagesWorkflowDrawerNode"}),H=v({...Z,emits:["submit","close"],setup(Q,{expose:A,emit:b}){const k=y(),_=y(),R=y(),l=J({node:{},nodeRules:{id:[{required:!0,message:"请输入数据id",trigger:"blur"}],nodeId:[{required:!0,message:"请输入节点id",trigger:"blur"}],type:[{required:!0,message:"请输入类型",trigger:"blur"}],left:[{required:!0,message:"请输入left坐标",trigger:"blur"}],top:[{required:!0,message:"请输入top坐标",trigger:"blur"}],icon:[{required:!0,message:"请输入icon图标",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}]},form:{module:[]},tabsActive:"1",loading:{extend:!1}}),F=s=>{l.tabsActive="1",l.node=s,E()},I=()=>{l.node.icon="",l.node.name=""},N=()=>{k.value.validate(s=>{if(s)b("submit",l.node),b("close");else return!1})},S=()=>{_.value.resetFields()},B=()=>{_.value.validate(s=>{if(s)l.loading.extend=!0,setTimeout(()=>{l.loading.extend=!1,G.success("保存成功"),b("close")},1e3);else return!1})},E=()=>{const s=j(R.value),a=[],r=[];for(let i=0;i<7;i++)a.push(`${Math.floor(Math.random()*52+10)}:${Math.floor(Math.random()*52+1)}`),r.push(Math.floor(Math.random()*52+1));const d={grid:{top:50,right:30,bottom:30,left:50},tooltip:{trigger:"axis"},xAxis:{type:"category",boundaryGap:!1,data:a},yAxis:{type:"value"},series:[{itemStyle:{color:"#289df5",borderColor:"#289df5",areaStyle:{type:"default",opacity:.1}},data:r,type:"line",areaStyle:{}}]};s.setOption(d),K(()=>{s.resize()})};return A({getParentData:F}),(s,a)=>{const r=n("el-input"),d=n("el-form-item"),i=n("SvgIcon"),c=n("el-button"),U=n("el-form"),g=n("el-scrollbar"),V=n("el-tab-pane"),T=n("el-option"),z=n("el-select"),C=n("el-checkbox"),D=n("el-checkbox-group"),$=n("el-tabs");return p(),h("div",P,[e($,{type:"border-card",modelValue:l.tabsActive,"onUpdate:modelValue":a[7]||(a[7]=o=>l.tabsActive=o)},{default:t(()=>[e(V,{label:"节点编辑",name:"1"},{default:t(()=>[e(g,null,{default:t(()=>[e(U,{model:l.node,rules:l.nodeRules,ref_key:"nodeFormRef",ref:k,size:"default","label-width":"80px",class:"pt15 pr15 pb15 pl15"},{default:t(()=>[e(d,{label:"数据id",prop:"id"},{default:t(()=>[e(r,{modelValue:l.node.id,"onUpdate:modelValue":a[0]||(a[0]=o=>l.node.id=o),placeholder:"请输入数据id",clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"节点id",prop:"nodeId"},{default:t(()=>[e(r,{modelValue:l.node.nodeId,"onUpdate:modelValue":a[1]||(a[1]=o=>l.node.nodeId=o),placeholder:"请输入节点id",clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"类型",prop:"type"},{default:t(()=>[e(r,{modelValue:l.node.type,"onUpdate:modelValue":a[2]||(a[2]=o=>l.node.type=o),placeholder:"请输入类型",clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"left坐标",prop:"left"},{default:t(()=>[e(r,{modelValue:l.node.left,"onUpdate:modelValue":a[3]||(a[3]=o=>l.node.left=o),placeholder:"请输入left坐标",clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"top坐标",prop:"top"},{default:t(()=>[e(r,{modelValue:l.node.top,"onUpdate:modelValue":a[4]||(a[4]=o=>l.node.top=o),placeholder:"请输入top坐标",clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(d,{label:"icon图标",prop:"icon"},{default:t(()=>[e(r,{modelValue:l.node.icon,"onUpdate:modelValue":a[5]||(a[5]=o=>l.node.icon=o),placeholder:"请输入icon图标",clearable:""},null,8,["modelValue"])]),_:1}),e(d,{label:"名称",prop:"name"},{default:t(()=>[e(r,{modelValue:l.node.name,"onUpdate:modelValue":a[6]||(a[6]=o=>l.node.name=o),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),e(d,null,{default:t(()=>[e(c,{class:"mb15",onClick:I},{default:t(()=>[e(i,{name:"ele-RefreshRight"}),f(" 重置 ")]),_:1}),e(c,{type:"primary",class:"mb15",onClick:N},{default:t(()=>[e(i,{name:"ele-Check"}),f(" 保存 ")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1}),e(V,{label:"扩展表单",name:"2"},{default:t(()=>[e(g,null,{default:t(()=>[e(U,{model:l.form,ref_key:"extendFormRef",ref:_,size:"default","label-width":"80px",class:"pt15 pr15 pb15 pl15"},{default:t(()=>[(p(!0),h(w,null,M(l.node.from,(o,O)=>(p(),m(d,{label:o.label,prop:o.prop,key:O,rules:[{required:o.required,message:`${o.label}不能为空`,trigger:"blur"}]},{default:t(()=>[o.type==="input"?(p(),m(r,{key:0,modelValue:l.form[o.prop],"onUpdate:modelValue":u=>l.form[o.prop]=u,placeholder:o.placeholder,clearable:"",disabled:o.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):x("",!0),o.type==="select"?(p(),m(z,{key:1,modelValue:l.form[o.prop],"onUpdate:modelValue":u=>l.form[o.prop]=u,placeholder:"请选择",clearable:"",disabled:o.disabled},{default:t(()=>[(p(!0),h(w,null,M(o.options,u=>(p(),m(T,{key:u.value,label:u.label,value:u.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])):x("",!0),o.type==="checkbox"?(p(),m(D,{key:2,modelValue:l.form[o.prop],"onUpdate:modelValue":u=>l.form[o.prop]=u,disabled:o.disabled},{default:t(()=>[e(C,{label:"美食推荐",name:"type"}),e(C,{label:"统计分析",name:"type"})]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])):x("",!0)]),_:2},1032,["label","prop","rules"]))),128)),e(d,null,{default:t(()=>[e(c,{class:"mb15",onClick:S},{default:t(()=>[e(i,{name:"ele-RefreshRight"}),f(" 重置 ")]),_:1}),e(c,{type:"primary",class:"mb15",onClick:B,loading:l.loading.extend},{default:t(()=>[e(i,{name:"ele-Check"}),f(" 保存 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1}),e(V,{label:"图表可视化",name:"3"},{default:t(()=>[e(g,null,{default:t(()=>[q("div",W,[q("div",{style:{height:"200px",width:"320px"},ref_key:"chartsMonitorRef",ref:R},null,512)])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}});const te=L(H,[["__scopeId","data-v-038bede7"]]);export{te as default};