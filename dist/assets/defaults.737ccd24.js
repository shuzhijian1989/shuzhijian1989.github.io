import{_ as t}from"./preload-helper.d522cc14.js";import{h as p,ap as r,r as _,aq as b,ar as C,o as L,w as i,a9 as f,j as k,v as w,x as n,D as e,u as s,J as x}from"./vue.543fafcc.js";import{u as E}from"./themeConfig.4c307989.js";import{N as M}from"./loading.7efee3a8.js";const S=p({name:"layoutDefaults"}),N=p({...S,setup(g){const m=r(()=>t(()=>import("./aside.e0257163.js"),["assets/aside.e0257163.js","assets/preload-helper.d522cc14.js","assets/vue.543fafcc.js","assets/index.18e5bded.js","assets/routesList.76e57b72.js","assets/themeConfig.4c307989.js","assets/tagsViewRoutes.69b270cc.js","assets/storage.542a95ff.js","assets/mitt.7f99bbc0.js"])),d=r(()=>t(()=>import("./header.03d4c8da.js"),["assets/header.03d4c8da.js","assets/preload-helper.d522cc14.js","assets/vue.543fafcc.js","assets/tagsViewRoutes.69b270cc.js","assets/storage.542a95ff.js"])),y=r(()=>t(()=>import("./main.8e2bfaa8.js"),["assets/main.8e2bfaa8.js","assets/preload-helper.d522cc14.js","assets/vue.543fafcc.js","assets/tagsViewRoutes.69b270cc.js","assets/storage.542a95ff.js","assets/themeConfig.4c307989.js","assets/loading.7efee3a8.js","assets/loading.70fbfd85.css"])),o=_(""),a=_(),R=b(),v=E(),{themeConfig:h}=C(v),l=()=>{o.value.update(),a.value.layoutMainScrollbarRef.update()},c=()=>{x(()=>{setTimeout(()=>{l(),o.value.wrapRef.scrollTop=0,a.value.layoutMainScrollbarRef.wrapRef.scrollTop=0},500)})};return L(()=>{c(),M.done(600)}),i(()=>R.path,()=>{c()}),i(h,()=>{l()},{deep:!0}),(A,D)=>{const T=f("el-scrollbar"),u=f("el-container");return k(),w(u,{class:"layout-container"},{default:n(()=>[e(s(m)),e(u,{class:"layout-container-view h100"},{default:n(()=>[e(T,{ref_key:"layoutScrollbarRef",ref:o,class:"layout-backtop"},{default:n(()=>[e(s(d)),e(s(y),{ref_key:"layoutMainRef",ref:a},null,512)]),_:1},512)]),_:1})]),_:1})}}});export{N as default};