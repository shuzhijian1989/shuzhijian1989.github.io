import{Q as f}from"./qrcode.f7511028.js";import{h as a,r as m,o as u,a9 as e,j as h,k as v,D as o,x as s,l as c,B as b}from"./vue.543fafcc.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";const g={class:"qrcode-container layout-pd"},q={class:"qrcode-img-warp"},y={class:"mb30 mt30 qrcode-img"},w=a({name:"funQrcode"}),k=a({...w,setup(j){const t=m(),n=()=>{new f(t.value,{text:`https://lyt-top.gitee.io/vue-next-admin-preview/#/login?t=${new Date().getTime()}`,width:125,height:125,colorDark:"#000000",colorLight:"#ffffff"})},r=()=>{t.value.innerHTML="",n()};return u(()=>{n()}),(C,Q)=>{const _=e("el-alert"),d=e("ele-Refresh"),l=e("el-icon"),i=e("el-button"),p=e("el-card");return h(),v("div",g,[o(p,{shadow:"hover",header:"qrcodejs2 二维码生成"},{default:s(()=>[o(_,{title:"感谢优秀的 `qrcodejs2`，项目地址：https://github.com/davidshimjs/qrcodejs",type:"success",closable:!1,class:"mb15"}),c("div",q,[c("div",y,[c("div",{class:"qrcode",ref_key:"qrcodeRef",ref:t},null,512)]),o(i,{type:"primary",size:"default",onClick:r},{default:s(()=>[o(l,null,{default:s(()=>[o(d)]),_:1}),b(" 重新生成 ")]),_:1})])]),_:1})])}}});const T=x(k,[["__scopeId","data-v-349bb20b"]]);export{T as default};
