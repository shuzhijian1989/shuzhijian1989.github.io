import{h as r,ar as m,a as d,u as e,j as n,k as i,l as s,C as p}from"./vue.543fafcc.js";import{u as g}from"./themeConfig.4c307989.js";import{l as c}from"./logo-mini.7321e274.js";import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";const y=["src"],C=["src"],h=r({name:"layoutLogo"}),v=r({...h,setup(k){const u=g(),{themeConfig:o}=m(u),_=d(()=>{let{isCollapse:a,layout:l}=o.value;return!a||l==="classic"||document.body.clientWidth<1e3}),t=()=>{if(o.value.layout==="transverse")return!1;o.value.isCollapse=!o.value.isCollapse};return(a,l)=>e(_)?(n(),i("div",{key:0,class:"layout-logo",onClick:t},[s("img",{src:e(c),class:"layout-logo-medium-img"},null,8,y),s("span",null,p(e(o).globalTitle),1)])):(n(),i("div",{key:1,class:"layout-logo-size",onClick:t},[s("img",{src:e(c),class:"layout-logo-size-img"},null,8,C)]))}});const z=f(v,[["__scopeId","data-v-d13a4db0"]]);export{z as default};
