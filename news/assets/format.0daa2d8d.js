import{h as e}from"./html2canvas.c4a43e03.js";const t=e=>e?e.replace(/\n|\r\n/g,"<br/>"):null,o=e=>{const t=((e="div")=>{const t=document.createElement("div").style;return Object.keys(t)})(),o=["top","left","right","bottom","width","height","x","y","fontSize","paddingTop","paddingLeft","paddingRight","textIndent"],n={};for(const i in e){if(o.includes(i)){if("number"==typeof e[i]){n[i]=e[i]+"px";continue}n[i]=e[i]}if("textShadow"!==i)if("borderRadius"!==i)if("border"!==i)-1!==t.indexOf(i)&&(n[i]=e[i]);else{const t=[];e.border.forEach((e=>{"number"==typeof e?t.push(e/2+"px"):t.push(e)})),n.border=t.join(" ")}else{const t=[];e.borderRadius.forEach((e=>{"number"==typeof e?t.push(e/2+"px"):t.push(e)})),n.borderRadius=t.join(" ")}else{const t=[];e.textShadow.forEach((e=>{"number"==typeof e?t.push(e/2+"px"):t.push(e)})),n.textShadow=t.join(" ")}}return n},n=(t,o,n="file")=>new Promise(((i,r)=>{window.scrollTo(0,0),e(t,{logging:!0,scale:1,allowTaint:!1,useCORS:!0,height:(null==t?void 0:t.offsetHeight)||0,width:(null==t?void 0:t.offsetWidth)||0,windowWidth:document.body.scrollWidth,windowHeight:document.body.scrollHeight,dpi:window.devicePixelRatio,backgroundColor:null}).then((e=>{const t=e.toDataURL("image/png",1),r=((e,t)=>{const o=e.split(","),n=o[0].match(/:(.*?);/)[1],i=atob(o[1]);let r=i.length;const d=new Uint8Array(r);for(;r--;)d[r]=i.charCodeAt(r);return new File([d],t,{type:n})})(t,o);i("file"===n?r:t)})).catch((e=>{r(e)}))}));export{n as g,o as h,t as r};
