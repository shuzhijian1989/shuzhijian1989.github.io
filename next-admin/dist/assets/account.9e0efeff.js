import{h as C,ar as q,aq as R,aH as U,K as $,a as B,a9 as a,ac as D,j as _,v as f,x as e,D as o,l as y,n as E,y as v,B as j,C as z}from"./vue.543fafcc.js";import{u as A}from"./vue-i18n.cjs.f888bd5c.js";import{S as N,a as M}from"./storage.542a95ff.js";import{u as O}from"./themeConfig.4c307989.js";import{i as H,b as J}from"./index.26e8d430.js";import{a as K}from"./formatTime.29ac8c52.js";import{N as L}from"./loading.7efee3a8.js";import{ay as b}from"./index.070d5527.js";import{_ as G}from"./_plugin-vue_export-helper.c27b6911.js";import"./_commonjsHelpers.35101cd5.js";import"./index.18e5bded.js";import"./keepAliveNames.cf66da55.js";import"./routesList.76e57b72.js";import"./preload-helper.d522cc14.js";import"./userInfo.4391f3f6.js";import"./tagsViewRoutes.69b270cc.js";import"./index.4ac74e37.js";import"./index.3b68140d.js";const Q=C({name:"loginAccount"}),W=C({...Q,setup(X){const{t:P}=A(),S=O(),{themeConfig:V}=q(S),m=R(),g=U(),t=$({isShowPassword:!1,ruleForm:{userName:"admin",password:"123456",code:"1234"},loading:{signIn:!1}}),I=B(()=>K(new Date)),k=async()=>{if(t.loading.signIn=!0,N.set("token",Math.random().toString(36).substr(0)),M.set("userName",t.ruleForm.userName),V.value.isRequestRoutes){const n=await J();w(n)}else{const n=await H();w(n)}},w=n=>{var s,u,l,r;if(n)b.warning("抱歉，您没有登录权限"),N.clear();else{let i=I.value;(s=m.query)!=null&&s.redirect?g.push({path:(u=m.query)==null?void 0:u.redirect,query:Object.keys((l=m.query)==null?void 0:l.params).length>0?JSON.parse((r=m.query)==null?void 0:r.params):""}):g.push("/");const p=P("message.signInText");b.success(`${i}，${p}`),L.start()}t.loading.signIn=!1};return(n,s)=>{const u=a("ele-User"),l=a("el-icon"),r=a("el-input"),i=a("el-form-item"),p=a("ele-Unlock"),F=a("ele-Position"),d=a("el-col"),h=a("el-button"),T=a("el-form"),x=D("waves");return _(),f(T,{size:"large",class:"login-content-form"},{default:e(()=>[o(i,{class:"login-animation1"},{default:e(()=>[o(r,{text:"",placeholder:n.$t("message.account.accountPlaceholder1"),modelValue:t.ruleForm.userName,"onUpdate:modelValue":s[0]||(s[0]=c=>t.ruleForm.userName=c),clearable:"",autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(u)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),o(i,{class:"login-animation2"},{default:e(()=>[o(r,{type:t.isShowPassword?"text":"password",placeholder:n.$t("message.account.accountPlaceholder2"),modelValue:t.ruleForm.password,"onUpdate:modelValue":s[2]||(s[2]=c=>t.ruleForm.password=c),autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(p)]),_:1})]),suffix:e(()=>[y("i",{class:E(["iconfont el-input__icon login-content-password",t.isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:s[1]||(s[1]=c=>t.isShowPassword=!t.isShowPassword)},null,2)]),_:1},8,["type","placeholder","modelValue"])]),_:1}),o(i,{class:"login-animation3"},{default:e(()=>[o(d,{span:15},{default:e(()=>[o(r,{text:"",maxlength:"4",placeholder:n.$t("message.account.accountPlaceholder3"),modelValue:t.ruleForm.code,"onUpdate:modelValue":s[3]||(s[3]=c=>t.ruleForm.code=c),clearable:"",autocomplete:"off"},{prefix:e(()=>[o(l,{class:"el-input__icon"},{default:e(()=>[o(F)]),_:1})]),_:1},8,["placeholder","modelValue"])]),_:1}),o(d,{span:1}),o(d,{span:8},{default:e(()=>[v((_(),f(h,{class:"login-content-code"},{default:e(()=>[j("1234")]),_:1})),[[x]])]),_:1})]),_:1}),o(i,{class:"login-animation4"},{default:e(()=>[v((_(),f(h,{type:"primary",class:"login-content-submit",round:"",onClick:k,loading:t.loading.signIn},{default:e(()=>[y("span",null,z(n.$t("message.account.accountBtnText")),1)]),_:1},8,["loading"])),[[x]])]),_:1})]),_:1})}}});const ge=G(W,[["__scopeId","data-v-17bcdb7e"]]);export{ge as default};
