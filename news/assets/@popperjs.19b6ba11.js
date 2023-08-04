var e="top",t="bottom",n="right",r="left",o="auto",i=[e,t,n,r],a="start",s="end",f="viewport",c="popper",p=i.reduce((function(e,t){return e.concat([t+"-"+a,t+"-"+s])}),[]),u=[].concat(i,[o]).reduce((function(e,t){return e.concat([t,t+"-"+a,t+"-"+s])}),[]),l=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function d(e){return e?(e.nodeName||"").toLowerCase():null}function h(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function m(e){return e instanceof h(e).Element||e instanceof Element}function v(e){return e instanceof h(e).HTMLElement||e instanceof HTMLElement}function g(e){return"undefined"!=typeof ShadowRoot&&(e instanceof h(e).ShadowRoot||e instanceof ShadowRoot)}var y={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];!v(o)||!d(o)||(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});!v(r)||!d(r)||(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};function b(e){return e.split("-")[0]}var x=Math.max,w=Math.min,O=Math.round;function j(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(v(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=O(n.width)/a||1),i>0&&(o=O(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function E(e){var t=j(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function D(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&g(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function A(e){return h(e).getComputedStyle(e)}function k(e){return["table","td","th"].indexOf(d(e))>=0}function L(e){return((m(e)?e.ownerDocument:e.document)||window.document).documentElement}function M(e){return"html"===d(e)?e:e.assignedSlot||e.parentNode||(g(e)?e.host:null)||L(e)}function P(e){return v(e)&&"fixed"!==A(e).position?e.offsetParent:null}function W(e){for(var t=h(e),n=P(e);n&&k(n)&&"static"===A(n).position;)n=P(n);return n&&("html"===d(n)||"body"===d(n)&&"static"===A(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&v(e)&&"fixed"===A(e).position)return null;var n=M(e);for(g(n)&&(n=n.host);v(n)&&["html","body"].indexOf(d(n))<0;){var r=A(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function B(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function H(e,t,n){return x(e,w(t,n))}function R(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function T(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var S={name:"arrow",enabled:!0,phase:"main",fn:function(o){var a,s=o.state,f=o.name,c=o.options,p=s.elements.arrow,u=s.modifiersData.popperOffsets,l=b(s.placement),d=B(l),h=[r,n].indexOf(l)>=0?"height":"width";if(p&&u){var m=function(e,t){return R("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:T(e,i))}(c.padding,s),v=E(p),g="y"===d?e:r,y="y"===d?t:n,x=s.rects.reference[h]+s.rects.reference[d]-u[d]-s.rects.popper[h],w=u[d]-s.rects.reference[d],O=W(p),j=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,D=x/2-w/2,A=m[g],k=j-v[h]-m[y],L=j/2-v[h]/2+D,M=H(A,L,k),P=d;s.modifiersData[f]=((a={})[P]=M,a.centerOffset=M-L,a)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"==typeof r&&!(r=t.elements.popper.querySelector(r))||!D(t.elements.popper,r)||(t.elements.arrow=r))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function C(e){return e.split("-")[1]}var q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function V(o){var i,a=o.popper,f=o.popperRect,c=o.placement,p=o.variation,u=o.offsets,l=o.position,d=o.gpuAcceleration,m=o.adaptive,v=o.roundOffsets,g=o.isFixed,y=u.x,b=void 0===y?0:y,x=u.y,w=void 0===x?0:x,j="function"==typeof v?v({x:b,y:w}):{x:b,y:w};b=j.x,w=j.y;var E=u.hasOwnProperty("x"),D=u.hasOwnProperty("y"),k=r,M=e,P=window;if(m){var B=W(a),H="clientHeight",R="clientWidth";if(B===h(a)&&("static"!==A(B=L(a)).position&&"absolute"===l&&(H="scrollHeight",R="scrollWidth")),c===e||(c===r||c===n)&&p===s)M=t,w-=(g&&B===P&&P.visualViewport?P.visualViewport.height:B[H])-f.height,w*=d?1:-1;if(c===r||(c===e||c===t)&&p===s)k=n,b-=(g&&B===P&&P.visualViewport?P.visualViewport.width:B[R])-f.width,b*=d?1:-1}var T,S=Object.assign({position:l},m&&q),C=!0===v?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:O(t*r)/r||0,y:O(n*r)/r||0}}({x:b,y:w}):{x:b,y:w};return b=C.x,w=C.y,d?Object.assign({},S,((T={})[M]=D?"0":"",T[k]=E?"0":"",T.transform=(P.devicePixelRatio||1)<=1?"translate("+b+"px, "+w+"px)":"translate3d("+b+"px, "+w+"px, 0)",T)):Object.assign({},S,((i={})[M]=D?w+"px":"",i[k]=E?b+"px":"",i.transform="",i))}var N={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:b(t.placement),variation:C(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,V(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,V(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},I={passive:!0};var F={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=h(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,I)})),s&&f.addEventListener("resize",n.update,I),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,I)})),s&&f.removeEventListener("resize",n.update,I)}},data:{}},U={left:"right",right:"left",bottom:"top",top:"bottom"};function z(e){return e.replace(/left|right|bottom|top/g,(function(e){return U[e]}))}var _={start:"end",end:"start"};function X(e){return e.replace(/start|end/g,(function(e){return _[e]}))}function Y(e){var t=h(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(e){return j(L(e)).left+Y(e).scrollLeft}function J(e){var t=A(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function K(e){return["html","body","#document"].indexOf(d(e))>=0?e.ownerDocument.body:v(e)&&J(e)?e:K(M(e))}function Q(e,t){var n;void 0===t&&(t=[]);var r=K(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=h(r),a=o?[i].concat(i.visualViewport||[],J(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(Q(M(a)))}function Z(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function $(e,t){return t===f?Z(function(e){var t=h(e),n=L(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+G(e),y:s}}(e)):m(t)?function(e){var t=j(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):Z(function(e){var t,n=L(e),r=Y(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=x(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=x(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+G(e),f=-r.scrollTop;return"rtl"===A(o||n).direction&&(s+=x(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(L(e)))}function ee(e,t,n){var r="clippingParents"===t?function(e){var t=Q(M(e)),n=["absolute","fixed"].indexOf(A(e).position)>=0&&v(e)?W(e):e;return m(n)?t.filter((function(e){return m(e)&&D(e,n)&&"body"!==d(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=$(e,n);return t.top=x(r.top,t.top),t.right=w(r.right,t.right),t.bottom=w(r.bottom,t.bottom),t.left=x(r.left,t.left),t}),$(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function te(o){var i,f=o.reference,c=o.element,p=o.placement,u=p?b(p):null,l=p?C(p):null,d=f.x+f.width/2-c.width/2,h=f.y+f.height/2-c.height/2;switch(u){case e:i={x:d,y:f.y-c.height};break;case t:i={x:d,y:f.y+f.height};break;case n:i={x:f.x+f.width,y:h};break;case r:i={x:f.x-c.width,y:h};break;default:i={x:f.x,y:f.y}}var m=u?B(u):null;if(null!=m){var v="y"===m?"height":"width";switch(l){case a:i[m]=i[m]-(f[v]/2-c[v]/2);break;case s:i[m]=i[m]+(f[v]/2-c[v]/2)}}return i}function ne(r,o){void 0===o&&(o={});var a=o,s=a.placement,p=void 0===s?r.placement:s,u=a.boundary,l=void 0===u?"clippingParents":u,d=a.rootBoundary,h=void 0===d?f:d,v=a.elementContext,g=void 0===v?c:v,y=a.altBoundary,b=void 0!==y&&y,x=a.padding,w=void 0===x?0:x,O=R("number"!=typeof w?w:T(w,i)),E=g===c?"reference":c,D=r.rects.popper,A=r.elements[b?E:g],k=ee(m(A)?A:A.contextElement||L(r.elements.popper),l,h),M=j(r.elements.reference),P=te({reference:M,element:D,strategy:"absolute",placement:p}),W=Z(Object.assign({},D,P)),B=g===c?W:M,H={top:k.top-B.top+O.top,bottom:B.bottom-k.bottom+O.bottom,left:k.left-B.left+O.left,right:B.right-k.right+O.right},S=r.modifiersData.offset;if(g===c&&S){var C=S[p];Object.keys(H).forEach((function(r){var o=[n,t].indexOf(r)>=0?1:-1,i=[e,t].indexOf(r)>=0?"y":"x";H[r]+=C[i]*o}))}return H}var re={name:"flip",enabled:!0,phase:"main",fn:function(s){var f=s.state,c=s.options,l=s.name;if(!f.modifiersData[l]._skip){for(var d=c.mainAxis,h=void 0===d||d,m=c.altAxis,v=void 0===m||m,g=c.fallbackPlacements,y=c.padding,x=c.boundary,w=c.rootBoundary,O=c.altBoundary,j=c.flipVariations,E=void 0===j||j,D=c.allowedAutoPlacements,A=f.options.placement,k=b(A),L=g||(k===A||!E?[z(A)]:function(e){if(b(e)===o)return[];var t=z(e);return[X(e),t,X(t)]}(A)),M=[A].concat(L).reduce((function(e,t){return e.concat(b(t)===o?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,s=n.padding,f=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?u:c,d=C(r),h=d?f?p:p.filter((function(e){return C(e)===d})):i,m=h.filter((function(e){return l.indexOf(e)>=0}));0===m.length&&(m=h);var v=m.reduce((function(t,n){return t[n]=ne(e,{placement:n,boundary:o,rootBoundary:a,padding:s})[b(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}(f,{placement:t,boundary:x,rootBoundary:w,padding:y,flipVariations:E,allowedAutoPlacements:D}):t)}),[]),P=f.rects.reference,W=f.rects.popper,B=new Map,H=!0,R=M[0],T=0;T<M.length;T++){var S=M[T],q=b(S),V=C(S)===a,N=[e,t].indexOf(q)>=0,I=N?"width":"height",F=ne(f,{placement:S,boundary:x,rootBoundary:w,altBoundary:O,padding:y}),U=N?V?n:r:V?t:e;P[I]>W[I]&&(U=z(U));var _=z(U),Y=[];if(h&&Y.push(F[q]<=0),v&&Y.push(F[U]<=0,F[_]<=0),Y.every((function(e){return e}))){R=S,H=!1;break}B.set(S,Y)}if(H)for(var G=function(e){var t=M.find((function(t){var n=B.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return R=t,"break"},J=E?3:1;J>0;J--){if("break"===G(J))break}f.placement!==R&&(f.modifiersData[l]._skip=!0,f.placement=R,f.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function oe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ie(o){return[e,n,t,r].some((function(e){return o[e]>=0}))}var ae={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ne(t,{elementContext:"reference"}),s=ne(t,{altBoundary:!0}),f=oe(a,r),c=oe(s,o,i),p=ie(f),u=ie(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}};var se={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var o=t.state,i=t.options,a=t.name,s=i.offset,f=void 0===s?[0,0]:s,c=u.reduce((function(t,i){return t[i]=function(t,o,i){var a=b(t),s=[r,e].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},o,{placement:t})):i,c=f[0],p=f[1];return c=c||0,p=(p||0)*s,[r,n].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}(i,o.rects,f),t}),{}),p=c[o.placement],l=p.x,d=p.y;null!=o.modifiersData.popperOffsets&&(o.modifiersData.popperOffsets.x+=l,o.modifiersData.popperOffsets.y+=d),o.modifiersData[a]=c}};var fe={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=te({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var ce={name:"preventOverflow",enabled:!0,phase:"main",fn:function(o){var i=o.state,s=o.options,f=o.name,c=s.mainAxis,p=void 0===c||c,u=s.altAxis,l=void 0!==u&&u,d=s.boundary,h=s.rootBoundary,m=s.altBoundary,v=s.padding,g=s.tether,y=void 0===g||g,O=s.tetherOffset,j=void 0===O?0:O,D=ne(i,{boundary:d,rootBoundary:h,padding:v,altBoundary:m}),A=b(i.placement),k=C(i.placement),L=!k,M=B(A),P=function(e){return"x"===e?"y":"x"}(M),R=i.modifiersData.popperOffsets,T=i.rects.reference,S=i.rects.popper,q="function"==typeof j?j(Object.assign({},i.rects,{placement:i.placement})):j,V="number"==typeof q?{mainAxis:q,altAxis:q}:Object.assign({mainAxis:0,altAxis:0},q),N=i.modifiersData.offset?i.modifiersData.offset[i.placement]:null,I={x:0,y:0};if(R){if(p){var F,U="y"===M?e:r,z="y"===M?t:n,_="y"===M?"height":"width",X=R[M],Y=X+D[U],G=X-D[z],J=y?-S[_]/2:0,K=k===a?T[_]:S[_],Q=k===a?-S[_]:-T[_],Z=i.elements.arrow,$=y&&Z?E(Z):{width:0,height:0},ee=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[U],re=ee[z],oe=H(0,T[_],$[_]),ie=L?T[_]/2-J-oe-te-V.mainAxis:K-oe-te-V.mainAxis,ae=L?-T[_]/2+J+oe+re+V.mainAxis:Q+oe+re+V.mainAxis,se=i.elements.arrow&&W(i.elements.arrow),fe=se?"y"===M?se.clientTop||0:se.clientLeft||0:0,ce=null!=(F=null==N?void 0:N[M])?F:0,pe=X+ae-ce,ue=H(y?w(Y,X+ie-ce-fe):Y,X,y?x(G,pe):G);R[M]=ue,I[M]=ue-X}if(l){var le,de="x"===M?e:r,he="x"===M?t:n,me=R[P],ve="y"===P?"height":"width",ge=me+D[de],ye=me-D[he],be=-1!==[e,r].indexOf(A),xe=null!=(le=null==N?void 0:N[P])?le:0,we=be?ge:me-T[ve]-S[ve]-xe+V.altAxis,Oe=be?me+T[ve]+S[ve]-xe-V.altAxis:ye,je=y&&be?function(e,t,n){var r=H(e,t,n);return r>n?n:r}(we,me,Oe):H(y?we:ge,me,y?Oe:ye);R[P]=je,I[P]=je-me}i.modifiersData[f]=I}},requiresIfExists:["offset"]};function pe(e,t,n){void 0===n&&(n=!1);var r=v(t),o=v(t)&&function(e){var t=e.getBoundingClientRect(),n=O(t.width)/e.offsetWidth||1,r=O(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=L(t),a=j(e,o),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==d(t)||J(i))&&(s=function(e){return e!==h(e)&&v(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):Y(e)}(t)),v(t)?((f=j(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=G(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function ue(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function le(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var de={placement:"bottom",modifiers:[],strategy:"absolute"};function he(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function me(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?de:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},de,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){var s="function"==typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:m(e)?Q(e):e.contextElement?Q(e.contextElement):[],popper:Q(t)};var p=function(e){var t=ue(e);return l.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var s=i({state:o,name:t,instance:f,options:r}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(he(t,n)){o.rects={reference:pe(t,W(n),"fixed"===o.options.strategy),popper:E(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,p=void 0===c?{}:c,u=i.name;"function"==typeof a&&(o=a({state:o,options:p,name:u,instance:f})||o)}else o.reset=!1,r=-1}}},update:le((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!he(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}me(),me({defaultModifiers:[F,fe,N,y]});var ve=me({defaultModifiers:[F,fe,N,y,se,re,ce,S,ae]});export{y as A,ve as y};
