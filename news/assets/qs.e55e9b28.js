import{s as e}from"./side-channel.ea627785.js";var r=String.prototype.replace,t=/%20/g,o="RFC3986",n={default:o,formatters:{RFC1738:function(e){return r.call(e,t,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:o},i=n,a=Object.prototype.hasOwnProperty,l=Array.isArray,c=function(){for(var e=[],r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return e}(),s=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(t[o]=e[o]);return t},f={arrayToObject:s,assign:function(e,r){return Object.keys(r).reduce((function(e,t){return e[t]=r[t],e}),e)},combine:function(e,r){return[].concat(e,r)},compact:function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],o=0;o<r.length;++o)for(var n=r[o],i=n.obj[n.prop],a=Object.keys(i),c=0;c<a.length;++c){var s=a[c],f=i[s];"object"==typeof f&&null!==f&&-1===t.indexOf(f)&&(r.push({obj:i,prop:s}),t.push(f))}return function(e){for(;e.length>1;){var r=e.pop(),t=r.obj[r.prop];if(l(t)){for(var o=[],n=0;n<t.length;++n)void 0!==t[n]&&o.push(t[n]);r.obj[r.prop]=o}}}(r),e},decode:function(e,r,t){var o=e.replace(/\+/g," ");if("iso-8859-1"===t)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(n){return o}},encode:function(e,r,t,o,n){if(0===e.length)return e;var a=e;if("symbol"==typeof e?a=Symbol.prototype.toString.call(e):"string"!=typeof e&&(a=String(e)),"iso-8859-1"===t)return escape(a).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var l="",s=0;s<a.length;++s){var f=a.charCodeAt(s);45===f||46===f||95===f||126===f||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||n===i.RFC1738&&(40===f||41===f)?l+=a.charAt(s):f<128?l+=c[f]:f<2048?l+=c[192|f>>6]+c[128|63&f]:f<55296||f>=57344?l+=c[224|f>>12]+c[128|f>>6&63]+c[128|63&f]:(s+=1,f=65536+((1023&f)<<10|1023&a.charCodeAt(s)),l+=c[240|f>>18]+c[128|f>>12&63]+c[128|f>>6&63]+c[128|63&f])}return l},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,r){if(l(e)){for(var t=[],o=0;o<e.length;o+=1)t.push(r(e[o]));return t}return r(e)},merge:function e(r,t,o){if(!t)return r;if("object"!=typeof t){if(l(r))r.push(t);else{if(!r||"object"!=typeof r)return[r,t];(o&&(o.plainObjects||o.allowPrototypes)||!a.call(Object.prototype,t))&&(r[t]=!0)}return r}if(!r||"object"!=typeof r)return[r].concat(t);var n=r;return l(r)&&!l(t)&&(n=s(r,o)),l(r)&&l(t)?(t.forEach((function(t,n){if(a.call(r,n)){var i=r[n];i&&"object"==typeof i&&t&&"object"==typeof t?r[n]=e(i,t,o):r.push(t)}else r[n]=t})),r):Object.keys(t).reduce((function(r,n){var i=t[n];return a.call(r,n)?r[n]=e(r[n],i,o):r[n]=i,r}),n)}},u=e,p=f,d=n,y=Object.prototype.hasOwnProperty,m={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},h=Array.isArray,b=Array.prototype.push,g=function(e,r){b.apply(e,h(r)?r:[r])},v=Date.prototype.toISOString,j=d.default,O={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:p.encode,encodeValuesOnly:!1,format:j,formatter:d.formatters[j],indices:!1,serializeDate:function(e){return v.call(e)},skipNulls:!1,strictNullHandling:!1},w={},S=function e(r,t,o,n,i,a,l,c,s,f,d,y,m,b,v,j){for(var S,N=r,x=j,D=0,P=!1;void 0!==(x=x.get(w))&&!P;){var E=x.get(r);if(D+=1,void 0!==E){if(E===D)throw new RangeError("Cyclic object value");P=!0}void 0===x.get(w)&&(D=0)}if("function"==typeof c?N=c(t,N):N instanceof Date?N=d(N):"comma"===o&&h(N)&&(N=p.maybeMap(N,(function(e){return e instanceof Date?d(e):e}))),null===N){if(i)return l&&!b?l(t,O.encoder,v,"key",y):t;N=""}if("string"==typeof(S=N)||"number"==typeof S||"boolean"==typeof S||"symbol"==typeof S||"bigint"==typeof S||p.isBuffer(N))return l?[m(b?t:l(t,O.encoder,v,"key",y))+"="+m(l(N,O.encoder,v,"value",y))]:[m(t)+"="+m(String(N))];var k,A=[];if(void 0===N)return A;if("comma"===o&&h(N))b&&l&&(N=p.maybeMap(N,l)),k=[{value:N.length>0?N.join(",")||null:void 0}];else if(h(c))k=c;else{var C=Object.keys(N);k=s?C.sort(s):C}for(var R=n&&h(N)&&1===N.length?t+"[]":t,L=0;L<k.length;++L){var T=k[L],H="object"==typeof T&&void 0!==T.value?T.value:N[T];if(!a||null!==H){var Q=h(N)?"function"==typeof o?o(R,T):R:R+(f?"."+T:"["+T+"]");j.set(r,D);var F=u();F.set(w,j),g(A,e(H,Q,o,n,i,a,"comma"===o&&b&&h(N)?null:l,c,s,f,d,y,m,b,v,F))}}return A},N=f,x=Object.prototype.hasOwnProperty,D=Array.isArray,P={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:N.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},E=function(e){return e.replace(/&#(\d+);/g,(function(e,r){return String.fromCharCode(parseInt(r,10))}))},k=function(e,r){return e&&"string"==typeof e&&r.comma&&e.indexOf(",")>-1?e.split(","):e},A=function(e,r,t,o){if(e){var n=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=t.depth>0&&/(\[[^[\]]*])/.exec(n),l=a?n.slice(0,a.index):n,c=[];if(l){if(!t.plainObjects&&x.call(Object.prototype,l)&&!t.allowPrototypes)return;c.push(l)}for(var s=0;t.depth>0&&null!==(a=i.exec(n))&&s<t.depth;){if(s+=1,!t.plainObjects&&x.call(Object.prototype,a[1].slice(1,-1))&&!t.allowPrototypes)return;c.push(a[1])}return a&&c.push("["+n.slice(a.index)+"]"),function(e,r,t,o){for(var n=o?r:k(r,t),i=e.length-1;i>=0;--i){var a,l=e[i];if("[]"===l&&t.parseArrays)a=[].concat(n);else{a=t.plainObjects?Object.create(null):{};var c="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1,-1):l,s=parseInt(c,10);t.parseArrays||""!==c?!isNaN(s)&&l!==c&&String(s)===c&&s>=0&&t.parseArrays&&s<=t.arrayLimit?(a=[])[s]=n:"__proto__"!==c&&(a[c]=n):a={0:n}}n=a}return n}(c,r,t,o)}},C={formats:n,parse:function(e,r){var t=function(e){if(!e)return P;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=void 0===e.charset?P.charset:e.charset;return{allowDots:void 0===e.allowDots?P.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:P.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:P.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:P.arrayLimit,charset:r,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:P.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:P.comma,decoder:"function"==typeof e.decoder?e.decoder:P.decoder,delimiter:"string"==typeof e.delimiter||N.isRegExp(e.delimiter)?e.delimiter:P.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:P.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:P.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:P.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:P.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:P.strictNullHandling}}(r);if(""===e||null==e)return t.plainObjects?Object.create(null):{};for(var o="string"==typeof e?function(e,r){var t,o={__proto__:null},n=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=r.parameterLimit===1/0?void 0:r.parameterLimit,a=n.split(r.delimiter,i),l=-1,c=r.charset;if(r.charsetSentinel)for(t=0;t<a.length;++t)0===a[t].indexOf("utf8=")&&("utf8=%E2%9C%93"===a[t]?c="utf-8":"utf8=%26%2310003%3B"===a[t]&&(c="iso-8859-1"),l=t,t=a.length);for(t=0;t<a.length;++t)if(t!==l){var s,f,u=a[t],p=u.indexOf("]="),d=-1===p?u.indexOf("="):p+1;-1===d?(s=r.decoder(u,P.decoder,c,"key"),f=r.strictNullHandling?null:""):(s=r.decoder(u.slice(0,d),P.decoder,c,"key"),f=N.maybeMap(k(u.slice(d+1),r),(function(e){return r.decoder(e,P.decoder,c,"value")}))),f&&r.interpretNumericEntities&&"iso-8859-1"===c&&(f=E(f)),u.indexOf("[]=")>-1&&(f=D(f)?[f]:f),x.call(o,s)?o[s]=N.combine(o[s],f):o[s]=f}return o}(e,t):e,n=t.plainObjects?Object.create(null):{},i=Object.keys(o),a=0;a<i.length;++a){var l=i[a],c=A(l,o[l],t,"string"==typeof e);n=N.merge(n,c,t)}return!0===t.allowSparse?n:N.compact(n)},stringify:function(e,r){var t,o=e,n=function(e){if(!e)return O;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var r=e.charset||O.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=d.default;if(void 0!==e.format){if(!y.call(d.formatters,e.format))throw new TypeError("Unknown format option provided.");t=e.format}var o=d.formatters[t],n=O.filter;return("function"==typeof e.filter||h(e.filter))&&(n=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:O.addQueryPrefix,allowDots:void 0===e.allowDots?O.allowDots:!!e.allowDots,charset:r,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:O.charsetSentinel,delimiter:void 0===e.delimiter?O.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:O.encode,encoder:"function"==typeof e.encoder?e.encoder:O.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:O.encodeValuesOnly,filter:n,format:t,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:O.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:O.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:O.strictNullHandling}}(r);"function"==typeof n.filter?o=(0,n.filter)("",o):h(n.filter)&&(t=n.filter);var i,a=[];if("object"!=typeof o||null===o)return"";i=r&&r.arrayFormat in m?r.arrayFormat:r&&"indices"in r?r.indices?"indices":"repeat":"indices";var l=m[i];if(r&&"commaRoundTrip"in r&&"boolean"!=typeof r.commaRoundTrip)throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var c="comma"===l&&r&&r.commaRoundTrip;t||(t=Object.keys(o)),n.sort&&t.sort(n.sort);for(var s=u(),f=0;f<t.length;++f){var p=t[f];n.skipNulls&&null===o[p]||g(a,S(o[p],p,l,c,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,s))}var b=a.join(n.delimiter),v=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),b.length>0?v+b:""}};export{C as l};
