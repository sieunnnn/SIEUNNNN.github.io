(function(){var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},m=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ba=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");
},ca=ba(this),p=function(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&m(c,a,{configurable:!0,writable:!0,value:b})}};
p("Symbol",function(a){if(a)return a;var b=function(g,l){this.g=g;m(this,"description",{configurable:!0,writable:!0,value:l})};b.prototype.toString=function(){return this.g};var c="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",d=0,f=function(g){if(this instanceof f)throw new TypeError("Symbol is not a constructor");return new b(c+(g||"")+"_"+d++,g)};return f});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ca[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&m(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});
var da=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},ea=typeof Object.create=="function"?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if(typeof Object.setPrototypeOf=="function")fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype},r=function(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");},ma=function(a){return t(a,
a)},t=function(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a};p("globalThis",function(a){return a||ca});var u=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
p("WeakMap",function(a){function b(){}function c(h){var k=typeof h;return k==="object"&&h!==null||k==="function"}function d(h){if(!u(h,g)){var k=new b;m(h,g,{value:k})}}function f(h){var k=Object[h];k&&(Object[h]=function(n){if(n instanceof b)return n;Object.isExtensible(n)&&d(n);return k(n)})}if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),k=Object.seal({}),n=new a([[h,2],[k,3]]);if(n.get(h)!=2||n.get(k)!=3)return!1;n.delete(h);n.set(k,4);return!n.has(h)&&n.get(k)==4}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var l=0,e=function(h){this.g=(l+=Math.random()+1).toString();if(h){h=r(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}};e.prototype.set=function(h,k){if(!c(h))throw Error("Invalid WeakMap key");d(h);if(!u(h,g))throw Error("WeakMap key fail: "+h);h[g][this.g]=k;return this};e.prototype.get=function(h){return c(h)&&u(h,g)?h[g][this.g]:void 0};e.prototype.has=function(h){return c(h)&&u(h,g)&&u(h[g],this.g)};
e.prototype.delete=function(h){return c(h)&&u(h,g)&&u(h[g],this.g)?delete h[g][this.g]:!1};return e});
p("Map",function(a){if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var e=Object.seal({x:4}),h=new a(r([[e,"s"]]));if(h.get(e)!="s"||h.size!=1||h.get({x:4})||h.set({x:4},"t")!=h||h.size!=2)return!1;var k=h.entries(),n=k.next();if(n.done||n.value[0]!=e||n.value[1]!="s")return!1;n=k.next();return n.done||n.value[0].x!=4||n.value[1]!="t"||!k.next().done?!1:!0}catch(q){return!1}}())return a;var b=new WeakMap,c=function(e){this[0]={};this[1]=
g();this.size=0;if(e){e=r(e);for(var h;!(h=e.next()).done;)h=h.value,this.set(h[0],h[1])}};c.prototype.set=function(e,h){e=e===0?0:e;var k=d(this,e);k.list||(k.list=this[0][k.id]=[]);k.h?k.h.value=h:(k.h={next:this[1],i:this[1].i,head:this[1],key:e,value:h},k.list.push(k.h),this[1].i.next=k.h,this[1].i=k.h,this.size++);return this};c.prototype.delete=function(e){e=d(this,e);return e.h&&e.list?(e.list.splice(e.index,1),e.list.length||delete this[0][e.id],e.h.i.next=e.h.next,e.h.next.i=e.h.i,e.h.head=
null,this.size--,!0):!1};c.prototype.clear=function(){this[0]={};this[1]=this[1].i=g();this.size=0};c.prototype.has=function(e){return!!d(this,e).h};c.prototype.get=function(e){return(e=d(this,e).h)&&e.value};c.prototype.entries=function(){return f(this,function(e){return[e.key,e.value]})};c.prototype.keys=function(){return f(this,function(e){return e.key})};c.prototype.values=function(){return f(this,function(e){return e.value})};c.prototype.forEach=function(e,h){for(var k=this.entries(),n;!(n=k.next()).done;)n=
n.value,e.call(h,n[1],n[0],this)};c.prototype[Symbol.iterator]=c.prototype.entries;var d=function(e,h){var k=h&&typeof h;k=="object"||k=="function"?b.has(h)?k=b.get(h):(k=""+ ++l,b.set(h,k)):k="p_"+h;var n=e[0][k];if(n&&u(e[0],k))for(e=0;e<n.length;e++){var q=n[e];if(h!==h&&q.key!==q.key||h===q.key)return{id:k,list:n,index:e,h:q}}return{id:k,list:n,index:-1,h:void 0}},f=function(e,h){var k=e[1];return da(function(){if(k){for(;k.head!=e[1];)k=k.i;for(;k.next!=k.head;)return k=k.next,{done:!1,value:h(k)};
k=null}return{done:!0,value:void 0}})},g=function(){var e={};return e.i=e.next=e.head=e},l=0;return c});
p("Set",function(a){if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var f=d.entries(),g=f.next();if(g.done||g.value[0]!=c||g.value[1]!=c)return!1;g=f.next();return g.done||g.value[0]==c||g.value[0].x!=4||g.value[1]!=g.value[0]?!1:f.next().done}catch(l){return!1}}())return a;var b=function(c){this.g=new Map;if(c){c=
r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size};b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};b.prototype.clear=function(){this.g.clear();this.size=0};b.prototype.has=function(c){return this.g.has(c)};b.prototype.entries=function(){return this.g.entries()};b.prototype.values=function(){return this.g.values()};b.prototype.keys=b.prototype.values;
b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var f=this;this.g.forEach(function(g){return c.call(d,g,g,f)})};return b});p("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(e){return e};var f=[],g=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof g=="function"){b=g.call(b);for(var l=0;!(g=b.next()).done;)f.push(c.call(d,g.value,l++))}else for(g=b.length,l=0;l<g;l++)f.push(c.call(d,b[l],l));return f}});
p("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});p("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});var na=function(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f};p("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)u(b,d)&&c.push(b[d]);return c}});
p("Array.prototype.values",function(a){return a?a:function(){return na(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var v=this||self,oa=function(a){return a};var w,x;a:{for(var pa=["CLOSURE_FLAGS"],y=v,qa=0;qa<pa.length;qa++)if(y=y[pa[qa]],y==null){x=null;break a}x=y}var ra=x&&x[610401301];w=ra!=null?ra:!1;var sa=typeof v.BigInt==="function"&&typeof v.BigInt(0)==="bigint";var ta=Number.MIN_SAFE_INTEGER.toString(),ua=sa?BigInt(Number.MIN_SAFE_INTEGER):void 0,va=Number.MAX_SAFE_INTEGER.toString(),wa=sa?BigInt(Number.MAX_SAFE_INTEGER):void 0;function xa(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],f=b[c];if(d>f)return!1;if(d<f)return!0}};function z(){var a=v.navigator;return a&&(a=a.userAgent)?a:""}var A,ya=v.navigator;A=ya?ya.userAgentData||null:null;function za(a){return w?A?A.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}function B(a){return z().indexOf(a)!=-1};function C(){return w?!!A&&A.brands.length>0:!1}function Aa(){return C()?!1:B("Opera")}function Ba(){return B("Firefox")||B("FxiOS")}function Ca(){return C()?za("Chromium"):(B("Chrome")||B("CriOS"))&&!(C()?0:B("Edge"))||B("Silk")};function D(){return w?!!A&&!!A.platform:!1}function Da(){return B("iPhone")&&!B("iPod")&&!B("iPad")}function Ea(){Da()||B("iPad")||B("iPod")};var Fa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,f=0;f<c;f++)if(f in d&&b.call(void 0,d[f],f,a))return!0;return!1};Aa();var Ga=C()?!1:B("Trident")||B("MSIE");B("Edge");!B("Gecko")||z().toLowerCase().indexOf("webkit")!=-1&&!B("Edge")||B("Trident")||B("MSIE")||B("Edge");z().toLowerCase().indexOf("webkit")!=-1&&!B("Edge")&&B("Mobile");D()||B("Macintosh");D()||B("Windows");(D()?A.platform==="Linux":B("Linux"))||D()||B("CrOS");D()||B("Android");Da();B("iPad");B("iPod");Ea();z().toLowerCase().indexOf("kaios");Ba();Da()||B("iPod");B("iPad");!B("Android")||Ca()||Ba()||Aa()||B("Silk");Ca();!B("Safari")||Ca()||(C()?0:B("Coast"))||Aa()||(C()?0:B("Edge"))||(C()?za("Microsoft Edge"):B("Edg/"))||(C()?za("Opera"):B("OPR"))||Ba()||B("Silk")||B("Android")||Ea();var Ha={},E=null;var Ia=typeof Uint8Array!=="undefined",Ja=!Ga&&typeof btoa==="function";var Ka=typeof Symbol==="function"&&typeof Symbol()==="symbol",La=new Set;function Ma(a,b,c){var d=!0;d=d===void 0?!1:d;a=typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b;d&&La.add(a);return a}var F=Ma("jas",void 0,!0),Na=Ma(void 0,Symbol());var Oa=Ka?function(a,b){a[F]|=b}:function(a,b){a.m!==void 0?a.m|=b:Object.defineProperties(a,{m:{value:b,configurable:!0,writable:!0,enumerable:!1}})},G=Ka?function(a){return a[F]|0}:function(a){return a.m|0},H=Ka?function(a,b){a[F]=b}:function(a,b){a.m!==void 0?a.m=b:Object.defineProperties(a,{m:{value:b,configurable:!0,writable:!0,enumerable:!1}})};function Pa(a,b){H(b,(a|0)&-30975)}function Qa(a,b){H(b,(a|34)&-30941)};var Ra={},Sa={};function Ta(a){return!(!a||typeof a!=="object"||a.g!==Sa)}function Ua(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}function I(a){return!Array.isArray(a)||a.length?!1:G(a)&1?!0:!1}function Va(a,b){var c=oa(Na);(b=c?b[c]:void 0)&&(a[Na]=Array.prototype.slice.call(b))};function Wa(a){if(typeof a!=="boolean"){var b=Error;var c=typeof a;c=c!="object"?c:a?Array.isArray(a)?"array":c:"null";throw b("Expected boolean but got "+c+": "+a);}return a}function J(a){if(a!=null&&typeof a!=="string")throw Error();return a};function Xa(a,b){return Ya(b)}
function Ya(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return(sa?a>=ua&&a<=wa:a[0]==="-"?xa(a,ta):xa(a,va))?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(I(a))return}else if(Ia&&a!=null&&a instanceof Uint8Array){if(Ja){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else{b===void 0&&(b=0);if(!E){E={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
d=["+/=","+/","-_=","-_.","-_"];for(var f=0;f<5;f++){var g=c.concat(d[f].split(""));Ha[f]=g;for(var l=0;l<g.length;l++){var e=g[l];E[e]===void 0&&(E[e]=l)}}}b=Ha[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(f=g=0;g<a.length-2;g+=3){var h=a[g],k=a[g+1];e=a[g+2];l=b[h>>2];h=b[(h&3)<<4|k>>4];k=b[(k&15)<<2|e>>6];e=b[e&63];c[f++]=l+h+k+e}l=0;e=d;switch(a.length-g){case 2:l=a[g+1],e=b[(l&15)<<2]||d;case 1:a=a[g],c[f]=b[a>>2]+b[(a&3)<<4|l>>4]+e+d}a=c.join("")}return a}}return a};function Za(a,b,c){var d=Array.prototype.slice.call(a),f=d.length,g=b&256?d[f-1]:void 0;f+=g?-1:0;for(b=b&512?1:0;b<f;b++)d[b]=c(d[b]);if(g){b=d[b]={};for(var l in g)b[l]=c(g[l])}Va(d,a);return d}function $a(a,b,c,d,f){if(a!=null){if(Array.isArray(a))a=I(a)?void 0:f&&G(a)&2?a:ab(a,b,c,d!==void 0,f);else if(Ua(a)){var g={},l;for(l in a)g[l]=$a(a[l],b,c,d,f);a=g}else a=b(a,d);return a}}
function ab(a,b,c,d,f){var g=d||c?G(a):0;d=d?!!(g&32):void 0;for(var l=Array.prototype.slice.call(a),e=0;e<l.length;e++)l[e]=$a(l[e],b,c,d,f);c&&(Va(l,a),c(g,l));return l}function bb(a){return a.v===Ra?a.toJSON():Ya(a)}function cb(a){return ab(a,bb,void 0,void 0,!1)};function db(a,b,c){c=c===void 0?Qa:c;if(a!=null){if(Ia&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=G(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(H(a,(d|34)&-12293),a):ab(a,db,d&4?Qa:c,!0,!0)}a.v===Ra&&(c=a.j,d=G(c),a=d&2?a:new a.constructor(eb(c,d,!0)));return a}}function eb(a,b,c){var d=c||b&2?Qa:Pa,f=!!(b&32);a=Za(a,b,function(g){return db(g,f,d)});Oa(a,32|(c?2:0));return a};function fb(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=G(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var f=c.length;if(f){var g=f-1;if(Ua(c[g])){d|=256;b=g-(d&512?0:-1);if(b>=1024)throw Error("pvtlmt");d=d&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,f-(d&512?0:-1));if(b>1024)throw Error("spvt");d=d&-33521665|(b&1023)<<15}}}H(a,d);return a};var L=function(a,b,c){var d=a.j,f=G(d);if(f&2)throw Error();gb(d,f,b,c);return a};function gb(a,b,c,d){var f=b&512?0:-1,g=c+f,l=a.length-1;g>=l&&b&256?a[l][c]=d:g<=l?(a[g]=d,b&256&&(a=a[l],c in a&&delete a[c])):d!==void 0&&(l=b>>15&1023||536870912,c>=l?d!=null&&(g={},a[l+f]=(g[c]=d,g),H(a,b|256)):a[g]=d)};function hb(a){return a}var M,N=function(a,b,c){this.j=fb(a,b,c)};N.prototype.toJSON=function(){var a=!M;try{return a&&(M=cb),ib(this)}finally{a&&(M=void 0)}};N.prototype.clone=function(){var a=this.j;return new this.constructor(eb(a,G(a),!1))};N.prototype.v=Ra;N.prototype.toString=function(){try{return M=hb,ib(this).toString()}finally{M=void 0}};
function ib(a){var b=a.j;a=M(b);b=a!==b;var c=a.length;if(c){var d=a[c-1],f=Ua(d);f?c--:d=void 0;var g=a;if(f){b:{var l=d;var e;var h=!1;if(l)for(var k in l)if(isNaN(+k))f=void 0,((f=e)!=null?f:e={})[k]=l[k];else if(f=l[k],Array.isArray(f)&&(I(f)||Ta(f)&&f.size===0)&&(f=null),f==null&&(h=!0),f!=null){var n=void 0;((n=e)!=null?n:e={})[k]=f}h||(e=l);if(e)for(var q in e){h=e;break b}h=null}l=h==null?d!=null:h!==d}for(;c>0;c--){e=g[c-1];if(!(e==null||I(e)||Ta(e)&&e.size===0))break;var K=!0}if(g!==a||
l||K){if(!b)g=Array.prototype.slice.call(g,0,c);else if(K||l||h)g.length=c;h&&g.push(h)}K=g}else K=a;return K};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var jb=globalThis.trustedTypes,kb;function lb(){var a=null;if(!jb)return a;try{var b=function(c){return c};a=jb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}function mb(){kb===void 0&&(kb=lb());return kb};var ob=function(){this.g=nb};ob.prototype.toString=function(){return this.g+""};var pb=ma([""]),qb=t(["\x00"],["\\0"]),rb=t(["\n"],["\\n"]),sb=t(["\x00"],["\\u0000"]);function O(a){return a.toString().indexOf("`")===-1}O(function(a){return a(pb)})||O(function(a){return a(qb)})||O(function(a){return a(rb)})||O(function(a){return a(sb)});var vb=function(){this.g=tb?tb.createHTML(ub):ub};vb.prototype.toString=function(){return this.g+""};"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);var yb=function(a,b){if(!wb()){var c=Math.random();if(c<b)return c=xb(),a[Math.floor(c*a.length)]}return null},xb=function(){if(!globalThis.crypto)return Math.random();try{var a=new Uint32Array(1);globalThis.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},wb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Fa(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],zb)||Math.random()<1E-4}),zb=function(a){return z().indexOf(a)!=
-1};var Ab=function(a){this.j=fb(a)};la(Ab,N);var Bb=function(a){this.j=fb(a)};la(Bb,N);
var Cb=function(a,b){return L(a,2,J(b))},Db=function(a,b){return L(a,3,J(b))},Eb=function(a,b){return L(a,4,J(b))},Fb=function(a,b){return L(a,5,J(b))},Gb=function(a,b){return L(a,9,J(b))},Hb=function(a,b){var c=a.j,d=G(c);if(d&2)throw Error();if(b==null)gb(c,d,10);else{for(var f=G(b),g=f,l=!!(2&f)&&!!(4&f)||!!(2048&f),e=l||Object.isFrozen(b),h=!0,k=!0,n=0;n<b.length;n++){var q=b[n];l||(q=!!(G(q.j)&2),h&&(h=!q),k&&(k=q))}l||(f=h?13:5,f=k?f|16:f&-17);e&&f===g||(b=Array.prototype.slice.call(b),g=0,
f=(2&d?f|2:f&-3)|32,f&=-2049,32&d||(f&=-33));f!==g&&H(b,f);gb(c,d,10,b)}return a},Ib=function(a,b){return L(a,11,b==null?b:Wa(b))},Jb=function(a,b){return L(a,1,J(b))},Kb=function(a,b){return L(a,7,b==null?b:Wa(b))};var Lb="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Mb(){var a;return(a=v.google_tag_data)!=null?a:v.google_tag_data={}}function Nb(){var a,b;return typeof((a=v.navigator)==null?void 0:(b=a.userAgentData)==null?void 0:b.getHighEntropyValues)==="function"}
function Ob(){if(!Nb())return null;var a=Mb();if(a.uach_promise)return a.uach_promise;var b=v.navigator.userAgentData.getHighEntropyValues(Lb).then(function(c){a.uach!=null||(a.uach=c);return c});return a.uach_promise=b}
function Pb(a){var b;return Ib(Hb(Fb(Cb(Jb(Eb(Kb(Gb(Db(new Bb,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),((b=a.fullVersionList)==null?void 0:b.map(function(c){var d=new Ab;d=L(d,1,J(c.brand));return L(d,2,J(c.version))}))||[]),a.wow64||!1)};var Qb=function(a){try{for(var b=null;b!=a;b=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!0;case "http:":return!1}}catch(c){}return!0}(v)?"https:":"http:",Rb={},Sb=(Rb[1]="A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",Rb);var Tb=[],P=function(a){this.id=a.id;this.l=a.l;this.o=a.o;Tb.push(this)},Ub=new P({id:1,l:{u:"40004000",s:"40004001"},o:1}),Q=new P({id:4,l:{u:"40004006",s:"40004007"},o:4}),Vb=new P({id:5,l:{u:"40004008",s:"40004009"},o:4}),Wb=new P({id:15,l:{u:"95348796",s:"95348797"},o:14});function Xb(){var a={};a[Ub.id]=.5;a[Q.id]=.02;a[Vb.id]=.001;a[Wb.id]=.001;return a}function Yb(){var a=Zb,b=typeof a;if((b!="object"||a==null)&&b!="function")return!1;b=r(Tb);for(var c=b.next();!c.done;c=b.next())if(c=a[c.value.id],typeof c!=="number"||c<0||c>1)return!1;return!0};function $b(a){return a===null?"null":a===void 0?"undefined":a};function ac(){if(!v.dcmads.uach){var a=Ob();a&&(v.dcmads.uachp=a.then(function(b){b.bitness&&(b.bitness=String(b.bitness));var c=v.dcmads;b=Pb(b);try{M=hb;var d=JSON.stringify(ib(b),Xa)}finally{M=void 0}c.uach=d}))}};try{v.dcmads=v.dcmads||{};v.dcmads.startTime=(new Date).getTime();var bc=v.dcmads,R=v.dcmads.version,S={loader:306};if(R)if(S.experiment=R.experiment,R.number==104||R.number=="p")S.number=104;else if(R.number==104||R.number=="c")S.number=104;if(!S.number){var cc=yb([104,104],0);S.experiment=!!cc;S.number=cc||104}bc.version=S;var dc=v.dcmads,ec,Zb=v.dcmads.expts,T;T=T===void 0?Xb:T;ec=Yb()?Zb:T();dc.expts=ec;var fc=v.dcmads,gc;var hc=v.dcmads;if(hc.eids!=null)gc=hc.eids;else{var ic=[],jc=v.navigator;
if(jc.connection&&jc.connection.saveData){var kc=yb(Object.values(Q.l),hc.expts[Q.id]);kc&&ic.push(Q.o+"|"+kc)}gc=ic.join(",")}fc.eids=gc;v.dcmads.ots=Sb;ac();var lc=new RegExp("4\\|"+Q.l.s),mc=v.dcmads.version,nc=mc.number,oc="";mc.experiment&&nc==104&&(oc="?rxp=104x104");var pc="impl_v"+nc+".js"+oc,qc=v.document,rc=qc.currentScript||Array.from(qc.getElementsByTagName("script")).pop(),sc=((rc&&rc.src||"").indexOf("http:")==0?"http:":"https:")+"//www.googletagservices.com/dcm/"+pc;if(lc.test(v.dcmads.eids)){var tc=
v.document,uc,vc=sc,wc=vc=$b(vc),xc=mb(),nb=xc?xc.createScriptURL(wc):wc;uc=new ob;var U,V=tc;V=V===void 0?document:V;U=V.createElement("script");var yc;if(uc instanceof ob)yc=uc.g;else throw Error("");U.src=yc;var zc,W=U.ownerDocument;W=W===void 0?document:W;var Ac,Bc,Cc=(Bc=(Ac=W).querySelector)==null?void 0:Bc.call(Ac,"script[nonce]");(zc=Cc==null?"":Cc.nonce||Cc.getAttribute("nonce")||"")&&U.setAttribute("nonce",zc);var Dc=tc.getElementsByTagName("script")[0];Dc&&Dc.parentNode&&Dc.parentNode.insertBefore(U,
Dc)}else{var Ec=v.document,Fc,Gc='<script src="'+sc+'">\x3c/script>',ub=Gc=$b(Gc),tb=mb();Fc=new vb;var Hc=Ec.write,Ic;if(Fc instanceof vb)Ic=Fc.g;else throw Error("");Hc.call(Ec,Ic)}}catch(a){if(Math.random()<.01){var Jc="";try{var Kc,X=a,Y=X.toString();X.name&&Y.indexOf(X.name)==-1&&(Y+=": "+X.name);X.message&&Y.indexOf(X.message)==-1&&(Y+=": "+X.message);if(X.stack)a:{var Z=X.stack,Lc=Y;try{Z.indexOf(Lc)==-1&&(Z=Lc+"\n"+Z);for(var Mc;Z!=Mc;)Mc=Z,Z=Z.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),
"$1");Y=Z.replace(RegExp("\n *","g"),"\n");break a}catch(b){Y=Lc;break a}Y=void 0}Kc=Y;Kc=Kc.substring(0,1024);Jc=encodeURIComponent(Kc)}catch(b){Jc="extr"}var Nc=v.dcmads.eids,Oc=document.createElement("img");Oc.src=Qb+"//pagead2.googlesyndication.com/pagead/gen_204?id=dcmads-err&ver=306&context=554"+((Nc?"&eids="+Nc:"")+"&msg="+Jc);(v.google_image_requests=v.google_image_requests||[]).push(Oc)}};}).call(this);
