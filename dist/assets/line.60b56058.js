import{h as u,K as h,a9 as a,j as x,k,D as e,x as t,B as r}from"./vue.543fafcc.js";const C={class:"pt15 pr15 pb15 pl15"},v=u({name:"pagesWorkflowDrawerLine"}),B=u({...v,emits:["change","close"],setup(w,{expose:_,emit:c}){const l=h({line:{}}),f=i=>{l.line=i},b=()=>{l.line.label=""},V=()=>{c("change",l.line.label),c("close")};return _({getParentData:f}),(i,n)=>{const d=a("el-input"),s=a("el-form-item"),m=a("SvgIcon"),p=a("el-button"),g=a("el-form");return x(),k("div",C,[e(g,{model:l.line,size:"default","label-width":"50px"},{default:t(()=>[e(s,{label:"来往"},{default:t(()=>[e(d,{modelValue:l.line.contact,"onUpdate:modelValue":n[0]||(n[0]=o=>l.line.contact=o),placeholder:"来往",clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(s,{label:"类型"},{default:t(()=>[e(d,{modelValue:l.line.type,"onUpdate:modelValue":n[1]||(n[1]=o=>l.line.type=o),placeholder:"类型",clearable:"",disabled:""},null,8,["modelValue"])]),_:1}),e(s,{label:"label"},{default:t(()=>[e(d,{modelValue:l.line.label,"onUpdate:modelValue":n[2]||(n[2]=o=>l.line.label=o),placeholder:"请输入label内容",clearable:""},null,8,["modelValue"])]),_:1}),e(s,null,{default:t(()=>[e(p,{onClick:b},{default:t(()=>[e(m,{name:"ele-RefreshRight"}),r(" 重置 ")]),_:1}),e(p,{onClick:V,type:"primary"},{default:t(()=>[e(m,{name:"ele-Check"}),r(" 保存 ")]),_:1})]),_:1})]),_:1},8,["model"])])}}});export{B as default};