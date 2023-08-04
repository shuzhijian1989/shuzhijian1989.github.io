import"./vue.a2f518ee.js";import{w as n,e,t,r as o,n as i,f as r,g as a,i as u,j as l,h as s}from"./@vue.919ff404.js";var c,d=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],f=function(n){return-1!==d.map((function(n){return n.toLowerCase()})).indexOf(n.toLowerCase())},p=function(e,t,o,i,r,a){i.setContent(a()),o.attrs["onUpdate:modelValue"]&&function(e,t,o,i){var r=e.modelEvents?e.modelEvents:null,a=Array.isArray(r)?r.join(" "):r;n(i,(function(n,t){o&&"string"==typeof n&&n!==t&&n!==o.getContent({format:e.outputFormat})&&o.setContent(n)})),o.on(a||"change input undo redo",(function(){t.emit("update:modelValue",o.getContent({format:e.outputFormat}))}))}(t,o,i,r),function(n,e,t){Object.keys(e).filter(f).forEach((function(o){var i=e[o];"function"==typeof i&&("onInit"===o?i(n,t):t.on(o.substring(2),(function(n){return i(n,t)})))}))}(e,o.attrs,i)},v=0,m=function(n){var e=Date.now();return n+"_"+Math.floor(1e9*Math.random())+ ++v+String(e)},g=function(n){return void 0===n||""===n?[]:Array.isArray(n)?n:n.split(" ")},y=function(){return{listeners:[],scriptId:m("tiny-script"),scriptLoaded:!1}},C=(c=y(),{load:function(n,e,t){c.scriptLoaded?t():(c.listeners.push(t),n.getElementById(c.scriptId)||function(n,e,t,o){var i=e.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=n,i.src=t;var r=function(){i.removeEventListener("load",r),o()};i.addEventListener("load",r),e.head&&e.head.appendChild(i)}(c.scriptId,n,e,(function(){c.listeners.forEach((function(n){return n()})),c.scriptLoaded=!0})))},reinitialize:function(){c=y()}}),S=function(){var n="undefined"!=typeof window?window:global;return n&&n.tinymce?n.tinymce:null},h={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(n){return"html"===n||"text"===n}}},b=globalThis&&globalThis.__assign||function(){return b=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},b.apply(this,arguments)},w=e({props:h,setup:function(e,c){var d=e.init?b({},e.init):{},f=t(e),v=f.disabled,y=f.modelValue,h=f.tagName,w=o(null),D=null,E=e.id||m("tiny-vue"),j=e.init&&e.init.inline||e.inline,O=!!c.attrs["onUpdate:modelValue"],A=!0,M=e.initialValue?e.initialValue:"",P="",B=function(){var n,t,o,i=(n=A,O?function(){return(null==y?void 0:y.value)?y.value:""}:function(){return n?M:P}),r=b(b({},d),{readonly:e.disabled,selector:"#"+E,plugins:(t=d.plugins,o=e.plugins,g(t).concat(g(o))),toolbar:e.toolbar||d.toolbar,inline:j,setup:function(n){D=n,n.on("init",(function(t){return p(t,e,c,n,y,i)})),"function"==typeof d.setup&&d.setup(n)}});(function(n){return null!==n&&"textarea"===n.tagName.toLowerCase()})(w.value)&&(w.value.style.visibility=""),S().init(r),A=!1};n(v,(function(n){var e;null!==D&&("function"==typeof(null===(e=D.mode)||void 0===e?void 0:e.set)?D.mode.set(n?"readonly":"design"):D.setMode(n?"readonly":"design"))})),n(h,(function(n){var e;O||(P=D.getContent()),null===(e=S())||void 0===e||e.remove(D),i((function(){return B()}))})),r((function(){if(null!==S())B();else if(w.value&&w.value.ownerDocument){var n=e.cloudChannel?e.cloudChannel:"5",t=e.apiKey?e.apiKey:"no-api-key",o=null==e.tinymceScriptSrc?"https://cdn.tiny.cloud/1/"+t+"/tinymce/"+n+"/tinymce.min.js":e.tinymceScriptSrc;C.load(w.value.ownerDocument,o,B)}})),a((function(){null!==S()&&S().remove(D)})),j||(u((function(){A||B()})),l((function(){var n;O||(P=D.getContent()),null===(n=S())||void 0===n||n.remove(D)})));return c.expose({rerender:function(n){var e;P=D.getContent(),null===(e=S())||void 0===e||e.remove(D),d=b(b({},d),n),i((function(){return B()}))}}),function(){return j?function(n,e,t,o){return n(o||"div",{id:e,ref:t})}(s,E,w,e.tagName):s("textarea",{id:E,visibility:"hidden",ref:w})}}});export{w as E};
