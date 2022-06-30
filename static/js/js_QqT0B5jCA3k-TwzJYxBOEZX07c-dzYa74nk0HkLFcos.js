!function(t){"use strict";var n=Element.prototype,e=NodeList.prototype,r=String.prototype;function o(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest||(n.closest=function(t){var e=this;do{if(n.matches.call(e,t))return e}while(null!==(e=e.parentElement||e.parentNode)&&1===e.nodeType);return null}),t.NodeList&&!e.forEach&&(e.forEach=Array.prototype.forEach),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null===t||"undefined"===t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1;r<arguments.length;r++){var o=arguments[r];if(null!==o&&"undefined"!==o)for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(n[c]=o[c])}return n},writable:!0,configurable:!0}),r.startsWith||Object.defineProperty(r,"startsWith",{value:function(t,e){e=0<e?0|e:0;return this.substring(e,e+t.length)===t}}),"function"!=typeof t.CustomEvent&&(o.prototype=t.Event.prototype,t.CustomEvent=o)}(this);
;
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
if(!Element.prototype.matches)Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;;
if(typeof Object.assign!=='function')Object.defineProperty(Object,'assign',{value:function assign(target,varArgs){'use strict';if(target===null||target===undefined)throw new TypeError('Cannot convert undefined or null to object');var to=Object(target);for(var index=1;index<arguments.length;index++){var nextSource=arguments[index];if(nextSource!==null&&nextSource!==undefined)for(var nextKey in nextSource)if(Object.prototype.hasOwnProperty.call(nextSource,nextKey))to[nextKey]=nextSource[nextKey]};return to},writable:true,configurable:true});
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if("document" in self){if(!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false,q;do{r=t[s]+"";q=g(this,r);while(q!==-1){this.splice(q,1);o=true;q=g(this,r)}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}if(q===true||q===false){return q}else{return !o}};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))}else{(function(){var b=document.createElement("_");b.classList.add("c1","c2");if(!b.classList.contains("c2")){var c=function(e){var d=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(h){var g,f=arguments.length;for(g=0;g<f;g++){h=arguments[g];d.call(this,h)}}};c("add");c("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(d,e){if(1 in arguments&&!this.contains(d)===!e){return e}else{return a.call(this,d)}}}b=null}())}};;
/**
 * @file
 * A promise-polyfill by @taylorhakes.
 *
 * License: MIT
 * @see https://github.com/taylorhakes/promise-polyfill
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";function e(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}function t(e){return new this(function(t,n){function o(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var f=n.then;if("function"==typeof f)return void f.call(n,function(t){o(e,t)},function(n){r[e]={status:"rejected",reason:n},0==--i&&t(r)})}r[e]={status:"fulfilled",value:n},0==--i&&t(r)}if(!e||"undefined"==typeof e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);for(var i=r.length,f=0;r.length>f;f++)o(f,r[f])})}function n(e){return!(!e||"undefined"==typeof e.length)}function o(){}function r(e){if(!(this instanceof r))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],l(e,this)}function i(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,r._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(r){return void u(t.promise,r)}f(t.promise,o)}else(1===e._state?f:u)(t.promise,e._value)})):e._deferreds.push(t)}function f(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,c(e)}catch(o){u(e,o)}}function u(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)i(e,e._deferreds[t]);e._deferreds=null}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,f(t,e))},function(e){n||(n=!0,u(t,e))})}catch(o){if(n)return;n=!0,u(t,o)}}var a=setTimeout,s="undefined"!=typeof setImmediate?setImmediate:null;r.prototype["catch"]=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var n=new this.constructor(o);return i(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},r.prototype["finally"]=e,r.all=function(e){return new r(function(t,o){function r(e,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,function(t){r(e,t)},o)}i[e]=n,0==--f&&t(i)}catch(c){o(c)}}if(!n(e))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var f=i.length,u=0;i.length>u;u++)r(u,i[u])})},r.allSettled=t,r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,o){if(!n(e))return o(new TypeError("Promise.race accepts an array"));for(var i=0,f=e.length;f>i;i++)r.resolve(e[i]).then(t,o)})},r._immediateFn="function"==typeof s&&function(e){s(e)}||function(e){a(e,0)},r._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var d=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"function"!=typeof d.Promise?d.Promise=r:(d.Promise.prototype["finally"]||(d.Promise.prototype["finally"]=e),d.Promise.allSettled||(d.Promise.allSettled=t))});
;
!function(m){for(var o=0,n=["ms","moz","webkit","o"],e=0;e<n.length&&!m.requestAnimationFrame;++e)m.requestAnimationFrame=window[n[e]+"RequestAnimationFrame"],m.cancelAnimationFrame=window[n[e]+"CancelAnimationFrame"]||window[n[e]+"CancelRequestAnimationFrame"];m.requestAnimationFrame||(m.requestAnimationFrame=function(n,e){var i=(new Date()).getTime(),a=Math.max(0,16-(i-o)),t=m.setTimeout(function(){n(i+a)},a);return o=i+a,t}),m.cancelAnimationFrame||(m.cancelAnimationFrame=function(n){clearTimeout(n)})}(this);
(function(root,factory){if(typeof exports=='object'){module.exports=factory(root)}else if(typeof define=='function'&&define.amd){define([],factory.bind(root,root))}else factory(root)}(typeof global!='undefined'?global:this,function(root){if(root.CSS&&root.CSS.escape)return root.CSS.escape;var cssEscape=function(value){if(arguments.length==0)throw new TypeError('`CSS.escape` requires an argument.');var string=String(value),length=string.length,index=-1,codeUnit,result='',firstCodeUnit=string.charCodeAt(0);while(++index<length){codeUnit=string.charCodeAt(index);if(codeUnit==0x0000){result+='\uFFFD';continue};if((codeUnit>=0x0001&&codeUnit<=0x001F)||codeUnit==0x007F||(index==0&&codeUnit>=0x0030&&codeUnit<=0x0039)||(index==1&&codeUnit>=0x0030&&codeUnit<=0x0039&&firstCodeUnit==0x002D)){result+='\\'+codeUnit.toString(16)+' ';continue};if(index==0&&length==1&&codeUnit==0x002D){result+='\\'+string.charAt(index);continue};if(codeUnit>=0x0080||codeUnit==0x002D||codeUnit==0x005F||codeUnit>=0x0030&&codeUnit<=0x0039||codeUnit>=0x0041&&codeUnit<=0x005A||codeUnit>=0x0061&&codeUnit<=0x007A){result+=string.charAt(index);continue};result+='\\'+string.charAt(index)};return result};if(!root.CSS)root.CSS={};root.CSS.escape=cssEscape;return cssEscape}));
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else e(jQuery)})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string")throw new TypeError("The jQuery Once id parameter must be a string");return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});
(function(){var settingsElement=document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');window.drupalSettings={};if(settingsElement!==null)window.drupalSettings=JSON.parse(settingsElement.textContent)})();
window.Drupal={behaviors:{},locale:{}};(function(Drupal,drupalSettings,drupalTranslations,console,Proxy,Reflect){Drupal.throwError=function(error){setTimeout(function(){throw error},0)};Drupal.attachBehaviors=function(context,settings){context=context||document;settings=settings||drupalSettings;var behaviors=Drupal.behaviors;Object.keys(behaviors||{}).forEach(function(i){if(typeof behaviors[i].attach==='function')try{behaviors[i].attach(context,settings)}catch(e){Drupal.throwError(e)}})};Drupal.detachBehaviors=function(context,settings,trigger){context=context||document;settings=settings||drupalSettings;trigger=trigger||'unload';var behaviors=Drupal.behaviors;Object.keys(behaviors||{}).forEach(function(i){if(typeof behaviors[i].detach==='function')try{behaviors[i].detach(context,settings,trigger)}catch(e){Drupal.throwError(e)}})};Drupal.checkPlain=function(str){str=str.toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');return str};Drupal.formatString=function(str,args){var processedArgs={};Object.keys(args||{}).forEach(function(key){switch(key.charAt(0)){case'@':processedArgs[key]=Drupal.checkPlain(args[key]);break;case'!':processedArgs[key]=args[key];break;default:processedArgs[key]=Drupal.theme('placeholder',args[key]);break}});return Drupal.stringReplace(str,processedArgs,null)};Drupal.stringReplace=function(str,args,keys){if(str.length===0)return str;if(!Array.isArray(keys)){keys=Object.keys(args||{});keys.sort(function(a,b){return a.length-b.length})};if(keys.length===0)return str;var key=keys.pop(),fragments=str.split(key);if(keys.length)for(var i=0;i<fragments.length;i++)fragments[i]=Drupal.stringReplace(fragments[i],args,keys.slice(0));return fragments.join(args[key])};Drupal.t=function(str,args,options){options=options||{};options.context=options.context||'';if(typeof drupalTranslations!=='undefined'&&drupalTranslations.strings&&drupalTranslations.strings[options.context]&&drupalTranslations.strings[options.context][str])str=drupalTranslations.strings[options.context][str];if(args)str=Drupal.formatString(str,args);return str};Drupal.url=function(path){return drupalSettings.path.baseUrl+drupalSettings.path.pathPrefix+path};Drupal.url.toAbsolute=function(url){var urlParsingNode=document.createElement('a');try{url=decodeURIComponent(url)}catch(e){};urlParsingNode.setAttribute('href',url);return urlParsingNode.cloneNode(false).href};Drupal.url.isLocal=function(url){var absoluteUrl=Drupal.url.toAbsolute(url),protocol=window.location.protocol;if(protocol==='http:'&&absoluteUrl.indexOf('https:')===0)protocol='https:';var baseUrl="".concat(protocol,"//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0,-1));try{absoluteUrl=decodeURIComponent(absoluteUrl)}catch(e){};try{baseUrl=decodeURIComponent(baseUrl)}catch(e){};return absoluteUrl===baseUrl||absoluteUrl.indexOf("".concat(baseUrl,"/"))===0};Drupal.formatPlural=function(count,singular,plural,args,options){args=args||{};args['@count']=count;var pluralDelimiter=drupalSettings.pluralDelimiter,translations=Drupal.t(singular+pluralDelimiter+plural,args,options).split(pluralDelimiter),index=0;if(typeof drupalTranslations!=='undefined'&&drupalTranslations.pluralFormula){index=count in drupalTranslations.pluralFormula?drupalTranslations.pluralFormula[count]:drupalTranslations.pluralFormula.default}else if(args['@count']!==1)index=1;return translations[index]};Drupal.encodePath=function(item){return window.encodeURIComponent(item).replace(/%2F/g,'/')};Drupal.deprecationError=function(_ref){var message=_ref.message;if(drupalSettings.suppressDeprecationErrors===false&&typeof console!=='undefined'&&console.warn)console.warn("[Deprecation] ".concat(message))};Drupal.deprecatedProperty=function(_ref2){var target=_ref2.target,deprecatedProperty=_ref2.deprecatedProperty,message=_ref2.message;if(!Proxy||!Reflect)return target;return new Proxy(target,{get:function get(target,key){if(key===deprecatedProperty)Drupal.deprecationError({message:message});for(var _len=arguments.length,rest=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++)rest[_key-2]=arguments[_key];return Reflect.get.apply(Reflect,[target,key].concat(rest))}})};Drupal.theme=function(func){if(func in Drupal.theme){var _Drupal$theme;for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];return(_Drupal$theme=Drupal.theme)[func].apply(_Drupal$theme,args)}};Drupal.theme.placeholder=function(str){return"<em class=\"placeholder\">".concat(Drupal.checkPlain(str),"</em>")}})(Drupal,window.drupalSettings,window.drupalTranslations,window.console,window.Proxy,window.Reflect);
if(window.jQuery)jQuery.noConflict();document.documentElement.className+=' js';(function(Drupal,drupalSettings){var domReady=function domReady(callback){var listener=function listener(){callback();document.removeEventListener('DOMContentLoaded',listener)};if(document.readyState!=='loading'){setTimeout(callback,0)}else document.addEventListener('DOMContentLoaded',listener)};domReady(function(){Drupal.attachBehaviors(document,drupalSettings)})})(Drupal,window.drupalSettings);
Drupal.debounce=function(func,wait,immediate){var timeout,result;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var context=this,later=function later(){timeout=null;if(!immediate)result=func.apply(context,args)},callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)result=func.apply(context,args);return result}};
!function(o,i){"use strict";var s=Object.assign,u=Array.prototype,e=Object.prototype,c=e.toString,n=u.splice,r=u.some,t="undefined"!=typeof Symbol&&Symbol,f="jQuery"in o,a="cash"in o,d="add",l="remove",p="has",h="get",v="set",m="width",y="clientWidth",g="scroll",b="iterator",E="Observer",w=/-([a-z])/g,C=/^--/,S=/[\11\12\14\15\40]+/,x="data-once",O=o.localStorage,j={},z=Math.pow(2,53)-1,A=(L.prototype.init=function(n,t){t=new L(n,t);return H(n)?(n.idblazy||(n.idblazy=t),n.idblazy):t},L);function L(n,t){if(this.name="dblazy",n){if(B(n))return n;var e=n;if(_(n)){if(!(e=vn(xn(t),n)).length)return}else if(Q(n))return this.ready(n);!e.nodeType&&e!==o||(e=[e]);for(var r=this.length=e.length,i=0;i<r;i++)this[i]=e[i]}}var N=A.prototype,T=N.init;function I(n){var t=this,e=(t=B(t)?t:T(t)).length;return Q(n)&&(e&&1!==e?t.each(n):n(t[0],0)),t}function M(n){var t="[object "+n+"]";return function(n){return c.call(n)===t}}(T.fn=T.prototype=N).length=0,N.splice=n,t&&(N[t[b]]=u[t[b]]);var W,P,R=(W="length",function(n){return $(n)?void 0:n[W]}),k=(P=R,function(n){n=P(n);return"number"==typeof n&&0<=n&&n<=z});function q(n){return V(n)?Object.keys(n):[]}function B(n){return n instanceof A}function D(n){return!_(n)&&(n&&(Array.isArray(n)||k(n)))}function F(n){return!0===n||!1===n||"[object Boolean]"===c.call(n)}function H(n){return n&&n instanceof Element}var Q=M("Function");function $(n){return null===n}function U(n){return!isNaN(parseFloat(n))&&isFinite(n)}function V(n){var t=typeof n;return"function"==t||"object"==t&&!!n}function _(n){return n&&"string"==typeof n}function J(n){return void 0===n}function G(n){return!!n&&n===n.window}function K(n){return-1!==[9,11].indexOf(!!n&&n.nodeType)}function X(n){return-1!==[1,9,11].indexOf(!!n&&n.nodeType)}function Y(n){return X(n)||G(n)}function Z(n,t,e){if(Q(n)||_(n)||F(n)||U(n))return[];if(D(n)&&!J(n.length)){var r=n.length;if(!r||1===r&&" "===n[0])return[]}if("[object Object]"===c.call(n)){for(var i in n)if(nn(n,i)&&"length"!==i&&"name"!==i&&!1===t.call(e,n[i],i,n))break}else n&&((r=n.length)&&1===r&&!J(n[0])?t.call(e,n[0],0,n):n.forEach(t,e));return n}function nn(n,t){return e.hasOwnProperty.call(n,t)}function tn(n){return D(n)?n:[n]}function en(n,t,e,r){return n[t+"Attribute"](e,r)}function rn(n,t,r,e){var i=this,o=J(r),u=!V(t)&&(o||F(e)),c=_(e)?e:"";if(u){e=n&&n.length?n[0]:n;return o&&(r=""),on(e,t)?en(e,h,t):r}return I.call(n,function(e){if(!X(e))return u?"":i;V(t)?Z(t,function(n,t){en(e,v,c+t,n)}):$(r)?Z(tn(t),function(n){n=c+n;on(e,n)&&en(e,l,n)}):"src"===t?e.src=r:en(e,v,t,r)})}function on(n,t){return X(n)&&en(n,p,t)}function un(n,r,i){return I.call(n,function(n,t){var e;X(n)&&(e=n.classList,Q(r)&&(r=r(en(n,h,"class"),t)),e&&_(r)&&(t=r.trim().split(" "),J(i)?t.map(function(n){e.toggle(n)}):e[i].apply(e,t)))})}function cn(t,n){var e=0;return H(t)&&H(n)?t!==n&&t.contains(n):D(t)?-1!==t.indexOf(n):(_(t)&&Z(tn(n),function(n){-1!==t.indexOf(n)&&e++}),0<e)}function fn(n){return n.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function an(t,n){var e=0;return _(t)&&Z(tn(n),function(n){t.startsWith(n)&&e++}),0<e}function ln(n){return n.replace(/\\s+/g," ").trim()}function sn(n,t){return H(n)&&_(t)?n.closest(t):null}function dn(n,t){return!!H(n)&&(_(t)?n.matches(t):H(t)&&n===t)}function pn(t,n){return!(!t||!t.nodeName)&&r.call(tn(n),function(n){return t.nodeName.toLowerCase()===n.toLowerCase()})}function hn(n,t,e){if(X(n))return _(t)&&an(t,">")&&(cn(t,":scope")||(t=":scope "+t)),J(e)&&_(t)?n.querySelector(t)||[]:function(n,t){var e=tn(n);{var r;_(n)&&(r=(t=xn(t)).querySelector(n),e=$(r)?[]:t.querySelectorAll(n))}return u.slice.call(e)}(t,n);return[]}function vn(n,t){return hn(n,t,1)}function mn(n){return H(n)&&n.currentStyle||!J(i.documentMode)}function yn(){return o.devicePixelRatio||1}function gn(){return o.innerWidth||i.documentElement[y]||o.screen[m]}function bn(n,t,e,r,i,o){return Cn(n,t,e,r,i,o,d)}function En(n,t,e,r,i,o){return Cn(n,t,e,r,i,o,l)}function wn(n){return n.decoded||n.complete}function Cn(n,t,e,c,r,f,a){var i,o=c,l=mn();c=_(e)?(i=cn(t,["touchstart",g,"wheel"]),J(r)&&(r=!l&&{capture:!i,passive:i}),function(n){var t=n.target;if(dn(t,e))o.call(t,n);else for(;t&&t!==this;){if(dn(t,e)){o.call(t,n);break}t=t.parentElement}}):(f=r,r=o,e);return I.call(n,function(i){var o,u;Y(i)&&(o=!1,u=r||!1,V(r)&&(u=s({capture:!1,passive:!0},r),o=u.once||!1),Z(t.trim().split(" "),function(n){f=f||an(n,["blazy.","bio."]);var t=a===d,e=(f?n:n.split(".")[0]).trim(),r=c=c||j[n];Q(c)&&(o&&t&&l&&(t=!(c=function n(){i.removeEventListener(e,n,u),r.apply(this,arguments)})),i[a+"EventListener"](e,c,u)),t?j[n]=c:delete j[n]}))})}function Sn(n){function t(){return setTimeout(n,0,T)}return"loading"!==i.readyState?t():i.addEventListener("DOMContentLoaded",t),this}function xn(n){return X(n=On(n=n||i))&&n.children&&n.children.length||K(n)?n:i}function On(n){var t=f&&n instanceof o.jQuery,e=a&&n instanceof o.cash;return n&&(B(n)||t||e)?n[0]:n}function jn(n){return C.test(n)}function zn(n,t,e){if(H(n)){var r=n[e];if(J(t))return r;for(;r;){if(dn(r,t)||pn(r,t))return r;r=r[e]}}return null}function An(n,t){return zn(n,t,"parentElement")}function Ln(n,t,e){return zn(n,t,e+"ElementSibling")}function Nn(n,t){return Ln(n,t,"previous")}function Tn(e,n,r){return n.filter(function(n){var t=dn(n,e);return t&&r&&r(n),t})}function In(n,t){return vn(xn(t),n)}function Mn(n){return"["+x+'~="'+n+'"]'}function Wn(n,t){var e=t.add,r=t.remove,i=[];on(n,x)&&Z(rn(n,x).trim().split(S),function(n){cn(i,n)||n===r||i.push(n)}),e&&!cn(i,e)&&i.push(e);e=i.join(" ");en(n,""===e?l:v,x,e)}T.isTag=M,T.isArr=D,T.isBool=F,T.isDoc=K,T.isElm=H,T.isFun=Q,T.isEmpty=function(n){if($(n)||J(n)||!1===n)return!0;var t=R(n);return"number"==typeof t&&(D(n)||_(n))?0===t:0===R(q(n))},T.isNull=$,T.isNum=U,T.isObj=V,T.isStr=_,T.isUnd=J,T.isEvt=Y,T.isQsa=X,T.isIo="Intersection"+E in o,T.isMo="Mutation"+E in o,T.isRo="Resize"+E in o,T.isNativeLazy="loading"in HTMLImageElement.prototype,T.isAmd="function"==typeof define&&define.amd,T.isWin=G,T._er=-1,T._ok=1,T.chain=function(n,t){return I.call(n,t)},T.each=Z,T.extend=s,N.extend=function(n,t){return(t=t||!1)?s(n,N):s(N,n)},T.hasProp=nn,T.parse=function(n){try{return 0===n.length||"1"===n?{}:JSON.parse(n)}catch(n){return{}}},T.toArray=tn,T.hasAttr=on,T.attr=rn.bind(T),T.removeAttr=function(n,t,e){return rn(n,t,null,e||"")}.bind(T),T.hasClass=function(e,n){var r,i=0;return X(e)&&_(n)&&(n=n.trim(),r=e.classList,Z(n.trim().split(" "),function(n){var t;r&&r.contains(n)&&i++,0!==i||(t=rn(e,"class"))&&t.match(n)&&i++})),0<i},T.toggleClass=un,T.addClass=function(n,t){return un(n,t,d)},T.removeClass=function(n,t){return un(n,t,l)},T.contains=cn,T.escape=fn,T.startsWith=an,T.trimSpaces=ln,T.closest=sn,T.is=dn,T.equal=pn,T.find=hn,T.findAll=vn,T.remove=function(n){var t;!H(n)||(t=An(n))&&t.removeChild(n)},T.ie=mn,T.pixelRatio=yn,T.windowWidth=gn,T.windowSize=function(){return{width:gn(),height:o.innerHeight||i.documentElement.clientHeight}},T.activeWidth=function(t,n){var e=n.up||!1,r=q(t),i=r[0],o=r[r.length-1],u=n.ww||gn(),n=u*yn(),c=e?u:n;return J(r=r.filter(function(n){return e?parseInt(n,10)<=c:parseInt(n,10)>=c}).map(function(n){return t[n]})[e?"pop":"shift"]())?t[o<=c?o:i]:r},T.toEvent=Cn,T.on=bn,T.off=En,T.one=function(n,t,e,r){return bn(n,t,e,{once:!0},r)},T.trigger=function(n,e,r,i){return I.call(n,function(n){var t;return Y(n)&&(t=J(r)?new Event(e):(t={bubbles:!0,cancelable:!0,detail:r||{}},V(i)&&(t=s(t,i)),new CustomEvent(e,t)),n.dispatchEvent(t)),t})},T.isDecoded=wn,T.ready=Sn.bind(T),T.decode=function(e){return wn(e)?Promise.resolve(e):"decode"in e?(e.decoding="async",e.decode()):new Promise(function(n,t){e.onload=function(){n(e)},e.onerror=t()})},T.once=function(n,t,e,r){var i,o=[];return J(e)||(o=Tn(":not("+Mn(i=t)+")",In(e,r),function(n){Wn(n,{add:i})})).length&&Z(o,n),o},T.throttle=function(t,e,r){e=e||50;var i=0;return function(){var n=+new Date;n-i<e||(i=n,t.apply(r,arguments))}},T.resize=function(t,e){return o.onresize=function(n){clearTimeout(e),e=setTimeout(t.bind(n),200)},t},T.template=function(n,t){for(var e in t)nn(t,e)&&(n=n.replace(new RegExp(fn("$"+e),"g"),t[e]));return ln(n)},T.context=xn,T.toElm=On,T.camelCase=function(n){return n.replace(w,function(n,t){return t.toUpperCase()})},T.isVar=jn,T.computeStyle=function(n,t,e){if(H(n)){var r=getComputedStyle(n,null);return J(t)?r:e||jn(t)?r.getPropertyValue(t)||null:r[t]||n.style[t]}},T.rect=function(n){return H(n)?n.getBoundingClientRect():{}},T.empty=function(n){return I.call(n,function(n){if(H(n))for(;n.firstChild;)n.removeChild(n.firstChild)})},T.parent=An,T.next=function(n,t){return Ln(n,t,"next")},T.prev=Nn,T.index=function(t,n){var e=0;if(H(t))for(J(n)||Z(tn(n),function(n){n=sn(t,n);if(H(n))return t=n,!1});!$(t=Nn(t));)e++;return e},T.create=function(n,t,e){var r=i.createElement(n);return(_(t)||V(t))&&(_(t)?r.className=t:rn(r,t)),e&&(e=e.trim(),r.innerHTML=e,"template"===n&&(r=r.content.firstChild||r)),r},T.storage=function(n,t,e){if(O){if(J(t))return O.getItem(n);O.setItem(n,t)}return e||!1},E={chain:function(n){return I.call(this,n)},each:function(n){return Z(this,n)},ready:function(n){return Sn.call(this,n)}},N.extend(E),T.matches=dn,T.forEach=Z,T.bindEvent=bn.bind(T),T.unbindEvent=En.bind(T),T.filter=Tn,T.once.find||(T.once.find=function(n,t){return In(n?Mn(n):"["+x+"]",t)},T.once.filter=function(n,t,e){return Tn(Mn(n),In(t,e))},T.once.remove=function(t,n,e){return Tn(Mn(t),In(n,e),function(n){Wn(n,{remove:t})})},T.once.removeSafely=function(n,t,e){var r=o.jQuery;this.find(n,e).length&&this.remove(n,t,e),f&&r&&r.fn&&Q(r.fn.removeOnce)&&r(t,xn(e)).removeOnce(n)}),"undefined"!=typeof exports?module.exports=T:o.dBlazy=T}(this,this.document);
;
!function(i){"use strict";function r(t,n,a){return i.chain(t,function(e){i.isElm(e)&&i.each(i.toArray(n),function(t){var n,r="data-"+t;i.hasAttr(e,r)&&((n=i.attr(e,r))&&n.length&&i.attr(e,t,n),a&&i.removeAttr(e,r))})})}function e(t,a,u,c){i.isUnd(c)&&(c=!0);return i.chain(t,function(t){var n,r,e;i.isElm(t)&&(n=t.parentNode,r=i.equal(n,"picture"),e=null,c?e=r?n:t:r&&(e=n),i.isElm(e)&&(e=e.getElementsByTagName("source"),a=a||(r?"srcset":"src"),e.length&&i(e).mapAttr(a,u)))})}i.mapAttr=r,i.fn.mapAttr=function(t,n){return r(this,t,n)},i.mapSource=e,i.fn.mapSource=function(t,n,r){return e(this,t,n,r)}}(dBlazy);
;
!function(n,o,r){"use strict";function i(t){t=t||0;var i=n.windowSize();return{top:0-t,left:0-t,bottom:i.height+t,right:i.width+t}}n.ww=0,n.vp={top:0,right:0,bottom:0,left:0},n.isVisible=function(t,i){var e=t.target||t;return n.isIo?t.isIntersecting||0<t.intersectionRatio:(e=e,i=i,(e=n.isElm(e)?n.rect(e):e).right>=i.left&&e.bottom>=i.top&&e.left<=i.right&&e.top<=i.bottom)},n.isResized=function(t,i){return!!i.contentRect||!!t.resizeTrigger||!1},n.viewport=i,n.windowData=function(t,i){var e=this,n=t.offset||100,o=t.mobileFirst||!1;return i&&e.initViewport(t),e.ww=e.vp.right-n,{vp:e.vp,ww:e.ww,up:o}},n.initViewport=function(t){return this.vp=i(t.offset),this.vp},n.updateViewport=function(t){var i=this,e=t.offset;return i.vp.bottom=(o.innerHeight||r.documentElement.clientHeight)+e,i.vp.right=(o.innerWidth||r.documentElement.clientWidth)+e,i.windowData(t)}}(dBlazy,this,this.document);
;
!function(f,n){"use strict";var t=Array.prototype.some,u="remove",c="width",h="height",e="after",r="before",i="begin",o="Top",s="Left",l="Height",a="scroll";function d(t,n,r){var i=this,e=f.isUnd(r),u=f.isObj(n),o=!u&&e;if(o&&f.isStr(n)){var s=t&&t.length?t[0]:t,e=[c,h,"top","right","bottom","left"],s=f.computeStyle(s,n);return-1===e.indexOf(n)?s:parseInt(s,2)}return f.chain(t,function(e){if(!f.isElm(e))return o?"":i;function t(t,n){f.isFun(t)&&(t=t()),(f.contains(n,"-")||f.isVar(n))&&(n=f.camelCase(n)),e.style[n]=f.isStr(t)?t:t+"px"}u?f.each(n,t):f.isNull(r)?f.each(f.toArray(n),function(t){e.style.removeProperty(t)}):f.isStr(n)&&t(r,n)})}function p(t){t=f.rect(t);return{top:(t.top||0)+n.body[a+o],left:(t.left||0)+n.body[a+s]}}function m(t,n){return d(t,c,n)}function g(t,n){return d(t,h,n)}function v(t,n,e){var r,i=0;return f.isElm(t)&&(i=t["offset"+e],n&&(r=f.computeStyle(t),t=function(t){return parseInt(r["margin"+t],2)},i+=e===l?t(o)+t("Bottom"):t(s)+t("Right"))),i}function y(t,n){return v(t,n,"Width")}function A(t,n){return v(t,n,l)}function C(t,n,e){f.isElm(t)&&t["insertAdjacent"+(f.isElm(n)?"Element":"HTML")](e,n)}function b(t,n){C(t,n,e+"end")}function x(t,n){C(t,n,r+i)}function S(t,n){C(t,n,r+"end")}function E(t,n){C(t,n,e+i)}function H(t){return f.chain(t,function(t){return f.isElm(t)&&t.cloneNode(!0)})}var w={css:function(t,n){return d(this,t,n)},hasAttr:function(n){return t.call(this,function(t){return f.hasAttr(t,n)})},attr:function(t,n,e){return f.isNull(n)?this.removeAttr(t,e):f.attr(this,t,n,e)},removeAttr:function(t,n){return f.removeAttr(this,t,n)},hasClass:function(n){return t.call(this,function(t){return f.hasClass(t,n)})},toggleClass:function(t,n){return f.toggleClass(this,t,n)},addClass:function(t){return this.toggleClass(t,"add")},removeClass:function(t){return arguments.length?this.toggleClass(t,u):this.attr("class","")},empty:function(){return f.empty(this)},first:function(t){return f.isUnd(t)?this[0]:t},after:function(t){return b(this[0],t)},before:function(t){return x(this[0],t)},append:function(t){return S(this[0],t)},prepend:function(t){return E(this[0],t)},remove:function(){this.each(f.remove)},closest:function(t){return f.closest(this[0],t)},equal:function(t){return f.equal(this[0],t)},find:function(t,n){return f.find(this[0],t,n)},findAll:function(t){return f.findAll(this[0],t)},clone:function(){return H(this)},computeStyle:function(t){return f.computeStyle(this[0],t)},offset:function(){return p(this[0])},parent:function(t){return f.parent(this[0],t)},prev:function(t){return f.prev(this[0],t)},next:function(t){return f.next(this[0],t)},index:function(t){return f.index(this[0],t)},width:function(t){return m(this[0],t)},height:function(t){return g(this[0],t)},outerWidth:function(t){return y(this[0],t)},outerHeight:function(t){return A(this[0],t)},on:function(t,n,e,r,i){return f.on(this,t,n,e,r,i,"add")},off:function(t,n,e,r,i){return f.off(this,t,n,e,r,i,u)},one:function(t,n,e){return f.one(this,t,n,e)},trigger:function(t,n,e){return f.trigger(this,t,n,e)}};f.fn.extend(w),f.css=d,f.offset=p,f.clone=H,f.after=b,f.before=x,f.append=S,f.prepend=E,f.width=m,f.height=g,f.outerWidth=y,f.outerHeight=A}(dBlazy,this.document);
;
!function(l,i,s){"use strict";var d="blazy",f=0,g="data-",b="src",m=["srcset",b],r="b-bg";function t(s,e){return s=s.target||s,l.hasClass(s,e)}l._defaults={error:!1,offset:100,root:s,success:!1,selector:".b-lazy",separator:"|",container:!1,containerClass:!1,errorClass:"b-error",loadInvisible:!1,successClass:"b-loaded",visibleClass:!1,validateDelay:25,saveViewportOffsetDelay:50,srcset:"data-srcset",src:"data-src",bgClass:r,isMedia:!1,parent:".media",disconnect:!1,intersecting:!1,observing:!1,resizing:!1,mobileFirst:!1,rootMargin:"0px",threshold:[0]},l.isCompleted=function(s){if(l.isElm(s)){if(l.equal(s,"img"))return l.isDecoded(s);if(l.equal(s,"iframe"))return"complete"===(s.contentDocument||s.contentWindow.document).readyState}return!1},l.isBg=function(s,e){return t(s,e&&e.bgClass||r)},l.isBlur=function(s){return t(s,"b-blur")},l.selector=function(s,e){var r=s.selector;return e&&l.isBool(e)&&(e=":not(."+s.successClass+")"),r+(e=e||"")},l.success=function(s,e,r,t){return l.isFun(t.success)&&t.success(s,e,r,t),0<f&&f--,f},l.error=function(s,e,r,t){return l.isFun(t.error)&&t.error(s,e,r,t),++f},l.status=function(s,e,r){return this.loaded(s,e,null,r)},l.loaded=function(s,e,r,t){var i=l.closest(s,t.parent)||s,n=e===l._ok||!0===e,a=t.successClass,o=t.errorClass,c="is-"+a,u="is-"+o;return r=r||i,l.addClass(s,n?a:o),l.addClass(i,n?c:u),l.removeClass(i,"is-b-visible"),f=this[n?"success":"error"](s,e,r,t),n&&l.hasAttr(s,g+b)&&l.removeAttr(s,m,g),l.trigger(s,d+".loaded",{status:e}),f},l.loadVideo=function(s,e,r){return l.mapSource(s,b,!0),s.load(),l.status(s,e,r)},l.onresizing=function(s,e){var r=s.elms,t=s.options;l.isFun(t.resizing)&&t.resizing(s,r,e),l.trigger(i,d+".resizing",{winData:e,entries:r})}}(dBlazy,this,this.document);
;
!function(l,s){"use strict";l.enqueue=function(n,e,r){l.each(n,e.bind(r)),n.length=0},l.initObserver=function(r,n,e,i){var t,o=r.options||{},a=r._queue||[],s="windowData"in r?r.windowData():{},u={rootMargin:o.rootMargin||"0px",threshold:o.threshold||0};function c(n){var e;return a.length||(e=requestAnimationFrame(h),r._raf.push(e)),a.push(n),!1}function h(){l.enqueue(a,n,r)}e=l.toArray(e),i&&(r.ioObserver=l.isIo?new IntersectionObserver(c,u):n.call(r,e));return r.roObserver=function(){return t=this,s=l.isUnd(s.ww)?l.windowData(o,!0):r.windowData(),l.isRo?new ResizeObserver(c):n.call(r,e)}(),r.resizeTrigger=t,s},l.observe=function(n,r,e){function i(e){e&&r&&r.length&&l.each(r,function(n){e.observe(n)})}var t=n.options||{},o=n.ioObserver,a=n.roObserver;return l.isIo&&(o||a)?(e&&i(o),i(a)):"Blazy"in s&&(n.bLazy=new Blazy(t)),n},l.unload=function(n){n=n._raf;n&&n.length&&l.each(n,function(n){cancelAnimationFrame(n)})}}(dBlazy,this);
;
!function(i){"use strict";function n(n){return i.chain(n,function(n){var c="loading",n=[n,i.closest(n,'[class*="'+c+'"]')];i.each(n,function(n){var a;i.isElm(n)&&(a=n.className,i.contains(a,c)&&(n.className=a.replace(/(\S+)loading/g,"")))})})}i.unloading=n,i.fn.unloading=function(){return n(this)}}(dBlazy);
;
!function(c,t,s){"use strict";var r,p,o,l,d,n;function e(){var t=!0;if(n){var e=c.storage(r);if(!c.isNull(e))return"true"===e;t=c.isUnd(n._.supportsType(l)),c.storage(r,t)}return t}function i(t){var e=s.importNode(t,!0),r=[],n=[],i=c.attr(e,p),t=c.attr(e,"srcset");return!(!t.length&&!i.length||!(t=t.length?t:i).length||(c.each(t.split(","),function(t){(c.contains(t,".webp")?r:n).push(t)}),!r.length))&&function(t,e,r,n){if(!c.isElm(t))return!1;var i=c.create(o),s=c.create(d),a=c.attr(t,"sizes"),u=e.join(",").trim(),e=r.join(",").trim(),r=c.find(i,d);return c.isElm(r)||(n?(c.attr(s,p,u),c.attr(t,p,e)):(s.srcset=u,t.srcset=e),a&&(s.sizes=a),s.type=l,c.append(i,s),c.append(i,t)),i}(e,r,n,i.length)}c.webp||(r="bwebp",p="data-srcset",o="picture",l="image/webp",d="source",n=t.picturefill,c.webp={isSupported:e,run:function(t){!e()&&t.length&&c.each(t,function(t){var e=c.equal(t,"img"),r=c.closest(t,o);e&&c.isNull(r)&&(e=c.closest(t,".media")||t.parentNode,(r=i(t))&&(c.append(e,r),c.remove(t)))})}})}(dBlazy,this,this.document);
;
!function(e,n,i){"use strict";e.debounce=function(c,t,e,i){n.debounce(function(){c.call(e,t)},i||201,!0)},e.matchMedia=function(c,t){return!!i.matchMedia&&(e.isUnd(t)&&(t="max"),i.matchMedia("("+t+"-device-width: "+c+")").matches)}}(dBlazy,Drupal,this);
;
!function(t,e){"use strict";var o="Blazy",s=t.dBlazy;s.isAmd?define([o,s,t],e):"object"==typeof exports?module.exports=e(o,s,t):t.Blazy=e(o,s,t)}(this,function(f,u,o){"use strict";var d,v,n=document,g="srcset",i={},r={},p={};return function(t){var s=this;s.name=f,s.options=i=u.extend(u._defaults,t||{}),s.options.container=!!i.containerClass&&u.findAll(n,i.containerClass),s.destroyed=!0;t=s._util={};return i=s.options,d=i.src||"data-src",v=1<u.pixelRatio(),u.initViewport(i),s.windowData=function(){return u.isUnd(p.vp)?u.windowData(i,!0):p},s.revalidate=function(){e(s)},s.load=function(t,e){var o=s.options;t&&u.isUnd(t.length)?l(t,e,o):u.each(t,function(t){l(t,e,o)})},s.destroy=function(){var e=s._util;i.container&&u.each(i.container,function(t){u.off(t,"scroll."+f,e.validateT)}),u.off(o,"scroll."+f,e.validateT),u.off(o,"resize."+f,e.validateT),u.off(o,"resize."+f,e.saveViewportOffsetT),s.count=0,s.elms.length=0,s.destroyed=!0},t.validateT=u.throttle(function(){a(s)},i.validateDelay,s),t.saveViewportOffsetT=u.throttle(function(){c(i),u.onresizing(s,p)},i.saveViewportOffsetDelay,s),c(i),setTimeout(function(){e(s)}),s};function e(t){var e=t._util;t.elms=u.findAll(i.root||n,u.selector(i)),t.count=t.elms.length,t.destroyed&&(t.destroyed=!1,i.container&&u.each(i.container,function(t){u.on(t,"scroll."+f,e.validateT)}),u.on(o,"resize."+f,e.saveViewportOffsetT),u.on(o,"resize."+f,e.validateT),u.on(o,"scroll."+f,e.validateT)),a(t)}function a(t){for(var e=0;e<t.count;e++){var o=t.elms[e];(function(t,e){var o=u.rect(t);if(e.container){var s=u.closest(t,e.containerClass);if(s){var n=u.rect(s);if(u.isVisible(n,r)){var i=n.top-e.offset,t=n.right+e.offset,s=n.bottom+e.offset,e=n.left-e.offset,e={top:i>r.top?i:r.top,right:t<r.right?t:r.right,bottom:s<r.bottom?s:r.bottom,left:e>r.left?e:r.left};return u.isVisible(o,e)}return!1}}return u.isVisible(o,r)}(o,t.options)||u.hasClass(o,t.options.successClass))&&(t.load(o),t.elms.splice(e,1),t.count--,e--)}0===t.count&&t.destroy()}function l(t,e,o){var s,n,i,r,a,l,c;!u.hasClass(t,o.successClass)&&(e||o.loadInvisible||0<t.offsetWidth&&0<t.offsetHeight)&&((c=u.attr(t,d)||u.attr(t,o.src))?(e=c.split(o.separator),s=e[v&&1<e.length?1:0],n=u.attr(t,o.srcset),c=u.isBg(t,o),i=u.equal(t,"img"),e=t.parentNode,r=u.equal(e,"picture"),a=u.ie(t),l=a&&t.currentStyle["object-fit"],i||c?(c=new Image,r&&(c=t,u.each(e.getElementsByTagName("source"),function(t){h(t,g,o.srcset)})),u.one(c,"error."+f,function(){u.status(t,!1,o)}),u.one(c,"load."+f,function(){i?r||(w(t,s,n,l),l&&(t.style.backgroundImage='url("'+s+'")')):(l=a,u.isFun(u.bgUrl)?(s=u.bgUrl(t,p),u.bg(t,p)):t.style.backgroundImage='url("'+s+'")'),m(t,o)}),w(c,s,n,l)):(t.src=s,m(t,o))):u.equal(t,"video")?(u.each(t.getElementsByTagName("source"),function(t){h(t,"src",o.src)}),t.load(),m(t,o)):(o.error&&o.error(t,"missing"),u.addClass(t,o.errorClass)))}function m(t,e){u.status(t,!0,e)}function h(t,e,o){var s=u.attr(t,o);s&&(u.attr(t,e,s),u.removeAttr(t,o))}function w(t,e,o,s){o&&u.attr(t,g,o),s?(u.addClass(t,"is-b-ie"),t.src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20"+(t.width||1)+"%20"+(t.height||1)+"'%2F%3E"):t.src=e}function c(t){p=u.updateViewport(t),r=u.vp}});
;
!function(e,i){"use strict";var s="Bio",t=e.dBlazy;t.isAmd?define([s,t,e],i):"object"==typeof exports?module.exports=i(s,t):e[s]=i(s,t)}(this||module||{},function(s,f,e){"use strict";f.isAmd&&window;var t,o=document,n=o,v={},r=0,p=0,d=0,a=0,u="b-bg",b=".media",h="addClass",y="removeClass",c=!1,l=25,m=i.prototype;function i(e){var i=f.extend({},m,this);return i.name=s,i.options=t=f.extend({},f._defaults,e||{}),u=t.bgClass||u,l=t.validateDelay||l,b=t.parent||b,n=t.root||n,setTimeout(function(){i.reinit()}),i}function g(e,i){var s=this,t=s.options,o=s.count,n=s.ioObserver;r===o-1&&s.destroyQuietly(),n&&s.isLoaded(e)&&!e.bloaded&&t.isMedia&&!i&&(n.unobserve(e),e.bloaded=!0,r++),e.bhit&&!i||(s.lazyLoad(e,v),a++,i=!(e.bhit=!0)),f.isFun(t.intersecting)&&t.intersecting(e,t),f.trigger(e,"bio.intersecting",{options:t})}function z(e){var r=this,d=r.options,a=f.vp,u=f.ww,i=e[0],c=f.isBlur(i),i=f.isResized(r,i),l=d.visibleClass;if(i)v=f.updateViewport(d),f.onresizing(r,v);else if(r.destroyed&&!l)return;f.each(e,function(e){var i=e.target||e,s=f.isResized(r,e),t=f.isVisible(e,a),o=f.closest(i,b)||i,n=r.isLoaded(i);f[t&&!n?h:y](o,"is-b-visible"),l&&f.isStr(l)&&f[t?h:y](o,l),t&&g.call(r,i),s&&0<p&&!c&&(p!==u&&r.resizing(i,v),r.resizeTick++),f.isFun(d.observing)&&d.observing(e,t,d)}),p=u}return m.constructor=i,m.count=0,m.erCount=0,m.resizeTick=0,m.destroyed=!1,m.options={},m.lazyLoad=function(e,i){},m.loadImage=function(e,i,s){},m.resizing=function(e,i){},m.prepare=function(){},m.windowData=function(){return f.isUnd(v.vp)?f.windowData(this.options,!0):v},m.load=function(e,i,s){var t=this;e=e&&f.toArray(e),f.isUnd(s)||(t.options=f.extend({},t.options,s||{})),f.each(e,function(e){(t.isValid(e)||f.isElm(e)&&i)&&g.call(t,e,i)})},m.isLoaded=function(e){return f.hasClass(e,this.options.successClass)},m.isValid=function(e){return f.isElm(e)&&!this.isLoaded(e)},m.revalidate=function(e){var i=this;(!0===e||i.count!==a)&&d<a&&(i.elms=f.findAll(n,f.selector(i.options))).length&&(i.observe(!0),d++)},m.destroyQuietly=function(e){var i=this,s=i.options;i.destroyed||!e&&!f.isUnd(Drupal.io)||(s=f.find(o,f.selector(s,":not(."+s.successClass+")")),f.isElm(s)||i.destroy(e))},m.destroy=function(e){var i=this,s=i.options,t=i.ioObserver;i.destroyed||0<i.erCounted&&!e||(r===i.count-1&&s.disconnect||e)&&(t&&t.disconnect(),f.unload(i),i.count=0,i.elms=[],i.ioObserver=null,i.destroyed=!0)},m.observe=function(e){var i=this,s=i.elms;f.isIo&&(i.destroyed||e)&&(v=f.initObserver(i,z,s,!0),i.destroyed=!1),c&&!e||(f.observe(i,s,!0),c=!0)},m.reinit=function(){this.destroyed=!0,function(e){e.prepare();var i=e.elms=f.findAll(n,f.selector(e.options));e.count=i.length,e._raf=[],e._queue=[],e.observe(!0)}(this)},i});
;
!function(t,e){"use strict";var n="BioMedia",r=t.dBlazy,a=t.Bio;"function"==typeof define&&define.amd?define([n,r,a],e):"object"==typeof exports?module.exports=e(n,r,a):t[n]=e(n,r,a)}(this,function(n,p,r){"use strict";var a=document,t="data-",l="src",f="srcset",h=t+l,g=[f,l],m=0,o=!1,i=Bio.prototype,s=e.prototype=Object.create(i);function e(t){var e=r.apply(p.extend({},i,p.extend({},s,this)),arguments);return e.name=n,e}function b(t,e,n,r){return o||((t=c(t,"defer"))&&p.each(t,function(t){p.attr(t,"loading","lazy")}),o=!0),p.status(e,n,r)}function c(t,e){t=t.options;if(!p.isNativeLazy)return[];e=e||"a";e=p.selector(t,'[data-src][loading*="'+e+'"]:not(.b-blur)'),e=p.findAll(a,e);return e.length&&p(e).mapAttr(["srcset","src"],!0).mapSource(!1,!0,!1),e}return s.constructor=e,s.lazyLoad=function(t,e){var n=this,r=n.options,a=t.parentNode,o=p.isBg(t),i=p.equal(a,"picture"),s=p.equal(t,"img"),c=p.equal(t,"video"),a=p.hasAttr(t,h);i?(a&&(p.mapSource(t,f,!0),p.mapAttr(t,l,!0)),m=b(n,t,!0,r)):c?m=p.loadVideo(t,!0,r):s||o?n.loadImage(t,o,e):p.hasAttr(t,l)&&(p.attr(t,h)&&p.mapAttr(t,l,!0),m=b(n,t,!0,r)),n.erCount=m},s.loadImage=function(t,n,r){function e(t,e){m=n&&p.isFun(p.bg)?(p.bg(t,r),p.status(t,e,o)):b(a,t,e,o)}var a=this,o=a.options,i=new Image,s=p.hasAttr(t,f),c=p.hasAttr(t,h),u=c?h:l,d=c?"data-srcset":f;"decode"in i&&(i.decoding="async"),n&&p.isFun(p.bgUrl)?i.src=p.bgUrl(t,r):(c&&p.mapAttr(t,g,!1),i.src=p.attr(t,u)),s&&(i.srcset=p.attr(t,d)),p.decode(i).then(function(){e(t,!0)}).catch(function(){e(t,s),s||(t.bhit=!1)})},s.resizing=function(t,e){var n=p.isBg(t,this.options);n&&this.loadImage(t,n,e)},s.prepare=function(){var e,t,n;c(this),p.webp&&(e=this,p.webp.isSupported()||(t=function(t){return t=t||"",p.selector(e.options,"["+t+'srcset*=".webp"]')},(n=p.findAll(a,t())).length||(n=p.findAll(a,t("data-"))),n.length&&p.webp.run(n)))},e});
;
!function(o,t,n,l,e){"use strict";var s="data",a=".b-blur",r=".media",i="successClass",u=(c="blazy")+".done",c=function(){},d={};t.blazy={context:e,name:"Drupal.blazy",init:null,instances:[],resizeTick:0,resizeTrigger:!1,blazySettings:n.blazy||{},ioSettings:n.blazyIo||{},options:{},clearCompat:c,clearScript:c,checkResize:c,resizing:c,revalidate:c,isIo:function(){return!0},isBlazy:function(){return!o.isIo&&"Blazy"in l},isFluid:function(t,n){return o.equal(t.parentNode,"picture")&&o.hasAttr(n,"data-ratios")},isLoaded:function(t){return o.hasClass(t,this.options[i])},globals:function(){var t=this,n={isMedia:!0,success:t.clearing.bind(t),error:t.clearing.bind(t),resizing:t.resizing.bind(t),selector:".b-lazy",parent:r,errorClass:"b-error",successClass:"b-loaded"};return o.extend(t.blazySettings,t.ioSettings,n)},extend:function(t){d=o.extend({},d,t)},merge:function(t){var n=this;return n.options=o.extend({},n.globals(),n.options,t||{}),n.options},run:function(t){return new BioMedia(t)},mount:function(t){var n=this;return n.merge(),t&&o.each(d,function(t){o.isFun(t)&&t.call(n)}),o.extend(n,d)},selector:function(t){t=t||"";var n=this.options;return n.selector+t+":not(."+n[i]+")"},clearing:function(t){var n,i;t.bclearing||(n=this,i=o.hasClass(t,"b-responsive")&&o.hasAttr(t,s+"-pfsrc"),o.isFun(o.unloading)&&o.unloading(t),o.trigger(t,u,{options:n.options}),n.clearCompat(t),n.clearScript(t),l.picturefill&&i&&l.picturefill({reevaluate:!0,elements:[t]}),t.bclearing=!0)},windowData:function(){return this.init?this.init.windowData():{}},load:function(n){var i=this;l.setTimeout(function(){var t=o.findAll(n||e,i.selector());t.length&&o.each(t,i.update.bind(i))},100)},update:function(t,n,i){function e(){o.hasAttr(t,"data-b-bg")&&o.isFun(o.bg)?o.bg(t,i||s.windowData()):s.init&&(o.hasClass(t,r.substring(1))||(t=o.find(t,r)||t),s.init.load(t,!0,a))}var s=this,a=s.options,r=a.selector;(n=n||!1)?l.setTimeout(e,100):e()},rebind:function(t,i,e){var n=o.findAll(t,this.options.selector+":not("+a+")"),s=n.length;s||(n=o.findAll(t,"img:not("+a+")")),n.length&&o.each(n,function(t){var n=s?u:"load";o.one(t,n,i,s),e&&e.observe(t)})},pad:function(n,i,t){var e=this,s=o.closest(n,r)||n;setTimeout(function(){var t=Math.round(n.naturalHeight/n.naturalWidth*100,2);e.isFluid(n,s)&&(s.style.paddingBottom=t+"%"),o.isFun(i)&&i.call(e,n,s,t)},t||0)}}}(dBlazy,Drupal,drupalSettings,this,this.document);
;
!function(c,e,n){"use strict";var i=n,s="blazy",r=s,o="."+s,l="body",d="b-root",t="b-checked",u="image",b="#drupal-modal, .is-b-scroll",f={};function h(a,t,e){var n,i=this,r=1<i.resizeTick,o=i.instances;o.length&&r&&(n=function(a){a.dblazy&&a.dbuniform&&(a.dblazy!==t.dblazy||a.dbpicture||(c.trigger(a,s+".uniform"+a.dblazy,{pad:e}),a.dbpicture=!0))},c.each(o,function(a){c.debounce(n,a,i)},i))}e.blazy=c.extend(e.blazy||{},{clearScript:function(a){c.hasClass(a,f.errorClass)&&!c.hasClass(a,t)&&(c.addClass(a,t),this.update(a,!0)),this.pad(a,h)},fixDataUri:function(){var a=c.findAll(n,this.selector('[src^="image"]'));a.length&&c.each(a,function(a){var t=c.attr(a,"src");c.contains(t,["base64","svg+xml"])&&c.attr(a,"src",t.replace(u,"data:"+u))})}}),e.behaviors.blazy={attach:function(a){var t=e.blazy;i=c.context(a),t.context=i,c.once(function(a){var t=this,e=c.parse(c.attr(a,"data-"+s)),n=c.hasClass(a,s+"--field block-grid "+s+"--uniform"),i=(1e4*Math.random()).toFixed(0),r=s+".uniform"+i,o=c.findAll(a,".media--ratio");f=t.merge(e),t.revalidate=t.revalidate||c.hasClass(a,s+"--revalidate"),a.dblazy=i,a.dbuniform=n,t.instances.push(a),n&&o.length&&c.on(a,r,function(a){var t=a.detail.pad||0;10<t&&c.each(o,function(a){a.style.paddingBottom=t+"%"})})}.bind(t),r,o,i),c.once(function(a){var t=this,e={mobileFirst:!1};n.documentElement.isSameNode(a)||(e.root=a);a=(e=t.merge(e)).container;a&&!c.contains(b,a)&&(b+=", "+a.trim()),e.container=b,f=t.merge(e),t.fixDataUri(),t.init=t.run(t.options)}.bind(t),d,l,n)},detach:function(a,t,e){"unload"===e&&(c.once.removeSafely(r,o,i),c.once.removeSafely(d,l,n))}}}(dBlazy,Drupal,(drupalSettings,this.document));
;
/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,r=e.tabbable={};t(r),r.noConflict=function(){return e.tabbable=n,r}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,o=function(e,t,o){var i=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&i.unshift(e),i=i.filter(o)},i=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:"AUDIO"!==e.nodeName&&"VIDEO"!==e.nodeName&&"DETAILS"!==e.nodeName||null!==e.getAttribute("tabindex")?e.tabIndex:0:t},a=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},u=function(e){return"INPUT"===e.tagName},l=function(e){return function(e){return u(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||e.ownerDocument,r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},c=function(e,t){return!(t.disabled||function(e){return u(e)&&"hidden"===e.type}(t)||function(e,t){if("hidden"===getComputedStyle(e).visibility)return!0;var n=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(n,"details:not([open]) *"))return!0;if(t&&"full"!==t){if("non-zero-area"===t){var o=e.getBoundingClientRect(),i=o.width,a=o.height;return 0===i&&0===a}}else for(;e;){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(t,e.displayCheck)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(u(e)||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"BUTTON"===e.tagName)for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},d=function(e,t){return!(!c(e,t)||l(t)||i(t)<0)},f=t.concat("iframe").join(",");e.focusable=function(e,t){return o(e,(t=t||{}).includeContainer,c.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,f)&&c(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&d(t,e)},e.tabbable=function(e,t){var n=[],r=[];return o(e,(t=t||{}).includeContainer,d.bind(null,t)).forEach((function(e,t){var o=i(e);0===o?n.push(e):r.push({documentOrder:t,tabIndex:o,node:e})})),r.sort(a).map((function(e){return e.node})).concat(n)},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**********************************************
 * @File Name: jquery.mb.YTPlayer.src.js
 * @Author: Matteo Bicocchi
 * @Date: 2020-03-16
 * @Email: matbicoc@gmail.com
 *
 * @Last Modified by: Matteo Bicocchi
 * @Last Modified time: 2020-03-18
 * @Copyright: 2020. Matteo Bicocchi
 *
 *  Open Lab s.r.l., Florence - Italy
 *  @blog:  http://pupunzi.open-lab.com
 *  @site:  http://pupunzi.com
 ****************************************************/


var ytp = ytp || {};

let YTPRndSuffix = new Date().getTime();
let YTPTimerLabels = {
	init        : "YTPlayerInit_" + YTPRndSuffix,
	startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix
};

function onYouTubeIframeAPIReady() {
	if (ytp.YTAPIReady)
		return;

	ytp.YTAPIReady = true;
	jQuery(document).trigger('YTAPIReady')
}

let getYTPVideoID = function (url) {
	let videoID, playlistID;
	if (url.indexOf('youtu.be') > 0 || url.indexOf('youtube.com/embed') > 0) {
		videoID = url.substr(url.lastIndexOf('/') + 1, url.length);
		playlistID = videoID.indexOf('?list=') > 0 ? videoID.substr(videoID.lastIndexOf('='), videoID.length) : null;
		videoID = playlistID ? videoID.substr(0, videoID.lastIndexOf('?')) : videoID
	} else if (url.indexOf('http') > -1) {
		//videoID = url.match( /([\/&]v\/([^&#]*))|([\\?&]v=([^&#]*))/ )[ 1 ];
		videoID = url.match(/[\\?&]v=([^&#]*)/)[1];
		playlistID = url.indexOf('list=') > 0 ? url.match(/[\\?&]list=([^&#]*)/)[1] : null
	} else {
		videoID = url.length > 15 ? null : url;
		playlistID = videoID ? null : url
	}
	return {
		videoID   : videoID,
		playlistID: playlistID
	}
};

(function (jQuery, ytp) {

	jQuery.mbYTPlayer = {
		name   : 'jquery.mb.YTPlayer',
		version: '3.3.8',
		build  : '7562',
		author : 'Matteo Bicocchi (pupunzi)',
		apiKey : '',

		/*
		 * Default options for the player
		 */
		defaults        : {
			/**
			 videoURL (string)
			 the complete Youtube video URL or the short url or the videoID
			 */
			videoURL: null,

			/**
			 containment (string)
			 default containment for the player
			 */
			containment: 'body',

			/**
			 ratio (string or number)
			 "auto", "16/9", "4/3" or number: 4/3, 16/9
			 */
			ratio: 'auto',

			/**
			 fadeOnStartTime (int)
			 fade in timing at video start
			 */
			fadeOnStartTime: 1000,

			/**
			 startAt (int)
			 start second
			 */
			startAt: 0,

			/**
			 stopAt (int)
			 stop second
			 */
			stopAt: 0,

			/**
			 autoPlay (bool)
			 on page load video should start or pause
			 */
			autoPlay: true,

			/**
			 delayAtStart (bool)
			 If the YT API don't fire the event the player will try to start anyway after...
			 */
			delayAtStart: 1000,

			/**
			 coverImage (string)
			 The path to the image to be used as cover if the autoPlay option is set to false
			 */
			coverImage: false,

			/**
			 loop (bool or int)
			 video should loop or not; if number it will loop for the specified times
			 */
			loop: true,

			/**
			 addRaster (bool)
			 shows a raster image over the video (added via CSS)
			 You can change the raster image via CSS:
			 .YTPOverlay.raster { background: url(images/raster.png)}
			 */
			addRaster: false,

			/**
			 mask (bool or object) the key is the second and the value is the path to the image
			 Ex: mask:{ 0:'assets/mask-1.png', 5:'assets/mask-2.png', 30: false, 50:'assets/mask-3.png'}
			 */
			mask: false,

			/**
			 opacity (int)
			 0 to 1
			 */
			opacity: 1,

			/**
			 quality (string)
			 @deprecated

			 setPlaybackQuality has been deprecated on the YT API and doesn't work anymore
			 “small”, “medium”, “large”, “hd720”, “hd1080”, “highres”, "default"
			 */
			quality: 'hd1080',

			/**
			 vol (int)
			 0 to 100
			 */
			vol: 50,

			/**
			 mute (bool)
			 mute the video at start
			 */
			mute: false,

			/**
			 showControls (bool)
			 shows the control bar at the bottom of the containment
			 */
			showControls: true,

			/**
			 anchor (string)
			 center,top,bottom,left,right combined in pair
			 */
			anchor: 'center,center',

			/**
			 showAnnotations (bool)
			 display the annotations on video
			 */
			showAnnotations: false,

			/**
			 cc_load_policy (bool)
			 display the subtitles
			 */
			cc_load_policy: false,

			/**
			 showYTLogo (bool)
			 display the Youtube logotype inside the button bar
			 */
			showYTLogo: true,

			/**
			 useOnMobile (bool)
			 activate the player also on mobile
			 */
			useOnMobile: true,

			/**
			 playOnlyIfVisible (bool)
			 play the video only if the containment is on screen
			 */
			playOnlyIfVisible: false,

			/**
			 onScreenPercentage (bool)
			 percentage of the player height the video should stop or start when visible
			 */
			onScreenPercentage: 30,

			/**
			 * goFullScreenOnPlay (bool)
			 * if the player containment is set to "self" this allow the video to go fullscreen when played
			 */
			goFullScreenOnPlay: false,

			/**
			 stopMovieOnBlur (bool)
			 stop the video if the window loose the focus
			 */
			stopMovieOnBlur: true,

			/**
			 realfullscreen (bool)
			 the video when in full screen covers all the display
			 */
			realFullscreen: true,

			/**
			 optimizeDisplay (bool)
			 The video always fit the containment without displaying the black strips
			 */
			optimizeDisplay: true,

			/**
			 abundance (bool)
			 the abudance of the video size
			 */
			abundance: 0.3,

			/**
			 gaTrack (bool)
			 track the video plays on GA
			 */
			gaTrack: true,

			/**
			 remember_last_time (bool)
			 when the page is reloaded the video will start from the last position
			 */
			remember_last_time: false,

			/**
			 addFilters (bool or string)
			 add one or more CSS filters as object to the video
			 Ex: {sepia: 50, hue_rotate : 220}
			 */
			addFilters: false,

			/**
			 useNoCookie (bool)
			 use https://www.youtube-nocookie.com host to serve the video
			 */
			useNoCookie: true,

			/**
			 onReady (function)
			 a callback function fired once the player is ready
			 */
			onReady: function (player) {
			},

			/**
			 onReady (function)
			 a callback function fired if there's an error
			 */
			onError: function (player, err) {
			},

			/**
			 onEnd (function)
			 a callback function fired when the video ends
			 */
			onEnd: function () {
			}
		},
		/**
		 *  @fontface icons
		 *  */
		controls        : {
			play    : 'P',
			pause   : 'p',
			mute    : 'M',
			unmute  : 'A',
			onlyYT  : 'O',
			showSite: 'R',
			ytLogo  : 'Y'
		},
		controlBar      : null,
		locationProtocol: 'https:',

		/**
		 * Applicable filters
		 */
		defaultFilters: {
			grayscale : {value: 0, unit: '%'},
			hue_rotate: {value: 0, unit: 'deg'},
			invert    : {value: 0, unit: '%'},
			opacity   : {value: 0, unit: '%'},
			saturate  : {value: 0, unit: '%'},
			sepia     : {value: 0, unit: '%'},
			brightness: {value: 0, unit: '%'},
			contrast  : {value: 0, unit: '%'},
			blur      : {value: 0, unit: 'px'}
		},

		/**
		 * build the player
		 * @param options
		 * @returns [players]
		 */
		buildPlayer: function (options) {

			if (!ytp.YTAPIReady && typeof window.YT === 'undefined') {
				jQuery('#YTAPI').remove();
				let tag = jQuery('<script>').attr({
					'src': 'https://www.youtube.com/iframe_api?v=' + jQuery.mbYTPlayer.version,
					'id' : 'YTAPI'
				});
				jQuery('head').prepend(tag)
			} else {
				setTimeout(function () {
					jQuery(document).trigger('YTAPIReady');
					ytp.YTAPIReady = true
				}, 100)
			}

			function isIframe() {
				let isIfr = false;
				try {
					if (self.location.href !== top.location.href) isIfr = true
				} catch (e) {
					isIfr = true
				}
				return isIfr
			}

			return this.each(function () {
				let YTPlayer = this;
				let $YTPlayer = jQuery(YTPlayer);
				$YTPlayer.hide();
				YTPlayer.loop = 0;
				YTPlayer.state = 0;
				YTPlayer.filters = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaultFilters);
				YTPlayer.filtersEnabled = true;
				YTPlayer.id = YTPlayer.id || 'YTP_' + new Date().getTime();
				$YTPlayer.addClass('mb_YTPlayer');

				/**
				 Set properties
				 */
				let property = $YTPlayer.data('property') && typeof $YTPlayer.data('property') == 'string' ?
					eval('(' + $YTPlayer.data('property') + ')') :
					$YTPlayer.data('property');

				if (typeof property !== 'object')
					property = {};

				YTPlayer.opt = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property);

				YTPRndSuffix = getYTPVideoID(YTPlayer.opt.videoURL).videoID;
				YTPTimerLabels = {
					init        : "YTPlayerInit_" + YTPRndSuffix,
					startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix
				};

				console.time(YTPTimerLabels.init);
				console.time(YTPTimerLabels.startPlaying);

				YTPlayer.opt.elementId = YTPlayer.id;

				if (YTPlayer.opt.vol === 0) {
					YTPlayer.opt.vol = 1;
					YTPlayer.opt.mute = true
				}

				if (YTPlayer.opt.loop && typeof YTPlayer.opt.loop === 'boolean') {
					YTPlayer.opt.loop = 9999
				}

				/**
				 Disable fullScreen if is in an iframe or full-screen API is not available
				 */
				let fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
				YTPlayer.opt.realFullscreen = isIframe() || !fullScreenAvailable ? false : YTPlayer.opt.realFullscreen;

				/**
				 Manage annotations
				 */
				YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? '1' : '3';

				/**
				 Manage show subtitle and caption
				 */
				YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? '1' : '0';

				/**
				 Manage cover image
				 */
				YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage;

				/**
				 Manage Quality
				 the setPlaybackQuality has been deprecated by YT
				 */
				YTPlayer.opt.quality = 'hd1080';

				/**
				 * todo: remove
				 Manage Opacity for IE < 10
				 */
				if (jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9)
					YTPlayer.opt.opacity = 1;

				YTPlayer.opt.containment = YTPlayer.opt.containment === 'self' ? $YTPlayer : jQuery(YTPlayer.opt.containment);
				YTPlayer.isRetina = (window.retina || window.devicePixelRatio > 1);

				YTPlayer.opt.ratio = YTPlayer.opt.ratio === 'auto' ? 16 / 9 : YTPlayer.opt.ratio;
				YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio);

				let origContainmentBackground = YTPlayer.opt.containment.css('background-image');
				origContainmentBackground = (origContainmentBackground === 'none') ? null : origContainmentBackground;
				YTPlayer.orig_containment_background = origContainmentBackground;

				if (!$YTPlayer.attr('id'))
					$YTPlayer.attr('id', 'ytp_' + new Date().getTime());

				YTPlayer.playerID = 'iframe_' + YTPlayer.id;

				YTPlayer.isAlone = false;
				YTPlayer.hasFocus = true;
				YTPlayer.videoID = YTPlayer.opt.videoURL ?
					getYTPVideoID(YTPlayer.opt.videoURL).videoID : $YTPlayer.attr('href') ?
						getYTPVideoID($YTPlayer.attr('href')).videoID :
						false;

				/**
				 Check if it is a video list
				 */
				YTPlayer.playlistID = YTPlayer.opt.videoURL ?
					getYTPVideoID(YTPlayer.opt.videoURL).playlistID : $YTPlayer.attr('href') ?
						getYTPVideoID($YTPlayer.attr('href')).playlistID :
						false;

				let start_from_last = 0;
				if (jQuery.mbCookie.get('YTPlayer_start_from' + YTPlayer.videoID))
					start_from_last = parseFloat(jQuery.mbCookie.get('YTPlayer_start_from' + YTPlayer.videoID));
				if (YTPlayer.opt.remember_last_time && start_from_last) {
					YTPlayer.start_from_last = start_from_last;
					jQuery.mbCookie.remove('YTPlayer_start_from' + YTPlayer.videoID)
				}

				YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment);
				YTPlayer.isBackground = YTPlayer.opt.containment.is('body');

				if (YTPlayer.isBackground && ytp.backgroundIsInited)
					return;

				/**
				 Hide the placeholder if it's not the target of the player
				 */
				if (YTPlayer.isPlayer)
					$YTPlayer.show();

				/**
				 create the overlay
				 */
				YTPlayer.overlay = jQuery('<div/>').css({
					position: 'absolute',
					top     : 0,
					left    : 0,
					width   : '100%',
					height  : '100%'
				}).addClass('YTPOverlay');

				$YTPlayer.changeCoverImage();

				/**
				 create the wrapper
				 */
				YTPlayer.wrapper = jQuery('<div/>').attr('id', 'wrapper_' + YTPlayer.id).css({
					position : 'absolute',
					zIndex   : 0,
					minWidth : '100%',
					minHeight: '100%',
					left     : 0,
					top      : 0,
					overflow : 'hidden',
					opacity  : 0
				}).addClass('mbYTP_wrapper');

				/**
				 If is an inline player toggle play if the overlay is clicked
				 */
				if (YTPlayer.isPlayer) {
					let inlinePlayButtonCss = jQuery.browser.mobile ? "inlinePlayButtonMobile" : "inlinePlayButton";
					YTPlayer.inlinePlayButton = jQuery('<div/>').addClass('inlinePlayButton').html(jQuery.mbYTPlayer.controls.play);
					$YTPlayer.append(YTPlayer.inlinePlayButton);
					YTPlayer.inlinePlayButton.on('click', function (e) {

						$YTPlayer.YTPPlay();
						/**
						 * Hide the PLAY button on play
						 */
						YTPlayer.inlinePlayButton.hide();

						/**
						 * set the fullscreen on play
						 */
						if (YTPlayer.opt.goFullScreenOnPlay) {
							$YTPlayer.YTPFullscreen();
						}

						e.stopPropagation()
					});

					if (YTPlayer.opt.autoPlay)
						YTPlayer.inlinePlayButton.hide();

					YTPlayer.overlay.on('click', function () {
						$YTPlayer.YTPTogglePlay();

						if (YTPlayer.opt.goFullScreenOnPlay) {
							$YTPlayer.YTPFullscreen();
						}

					}).css({cursor: 'pointer'})

				}

				/**
				 create the playerBox where the YT iframe will be placed
				 */
				let playerBox = jQuery('<div/>').attr('id', YTPlayer.playerID).addClass('playerBox');
				playerBox.css({
					position: 'absolute',
					zIndex  : 0,
					width   : '100%',
					height  : '100%',
					top     : 0,
					left    : 0,
					overflow: 'hidden',
					opacity : 1
				});

				YTPlayer.wrapper.append(playerBox);
				playerBox.after(YTPlayer.overlay);

				if (YTPlayer.isPlayer) {
					YTPlayer.inlineWrapper = jQuery('<div/>').addClass('inline-YTPlayer');

					YTPlayer.inlineWrapper.css({
						position: 'relative',
						maxWidth: YTPlayer.opt.containment.css('width')
					});

					YTPlayer.opt.containment.css({
						position     : 'relative',
						paddingBottom: '56.25%',
						overflow     : 'hidden',
						height       : 0
					});
					YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)
				}

				/**
				 Loop all the elements inside the container and check if their position is not "static"
				 */
				YTPlayer.opt.containment.children().not('script, style').each(function () {
					if (jQuery(this).css('position') === 'static')
						jQuery(this).css('position', 'relative')
				});

				if (YTPlayer.isBackground) {
					jQuery('body').css({
						boxSizing: 'border-box'
					});

					YTPlayer.wrapper.css({
						position: 'fixed',
						top     : 0,
						left    : 0,
						zIndex  : 0
					})

				} else if (YTPlayer.opt.containment.css('position') === 'static') {

					YTPlayer.opt.containment.css({
						position: 'relative'
					});
					$YTPlayer.show()
				}
				YTPlayer.opt.containment.prepend(YTPlayer.wrapper);

				if (!YTPlayer.isBackground) {
					YTPlayer.overlay.on('mouseenter', function () {
						if (YTPlayer.controlBar && YTPlayer.controlBar.length)
							YTPlayer.controlBar.addClass('visible')
					}).on('mouseleave', function () {
						if (YTPlayer.controlBar && YTPlayer.controlBar.length)
							YTPlayer.controlBar.removeClass('visible')
					})
				}

				if (jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) {
					if (YTPlayer.opt.coverImage) {
						YTPlayer.wrapper.css({
							backgroundImage   : 'url(' + YTPlayer.opt.coverImage + ')',
							backgroundPosition: 'center center',
							backgroundSize    : 'cover',
							backgroundRepeat  : 'no-repeat',
							opacity           : 1
						});

						YTPlayer.wrapper.css({opacity: 1})
					}
					return $YTPlayer
				}

				/**
				 If is on device start playing on first touch
				 */
				if (jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile)
					jQuery('body').one('touchstart', function () {
						YTPlayer.player.playVideo()
					});

				jQuery(document).one('YTAPIReady', function () {
					$YTPlayer.trigger('YTAPIReady_' + YTPlayer.id);
					ytp.YTAPIReady = true
				});

				YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);

				$YTPlayer.one('YTAPIReady_' + YTPlayer.id, function () {

					let YTPlayer = this;
					let $YTPlayer = jQuery(YTPlayer);

					if ((YTPlayer.isBackground && ytp.backgroundIsInited) || YTPlayer.isInit)
						return;

					if (YTPlayer.isBackground)
						ytp.backgroundIsInited = true;

					YTPlayer.opt.autoPlay = typeof YTPlayer.opt.autoPlay == 'undefined' ? (!!YTPlayer.isBackground) : YTPlayer.opt.autoPlay;
					YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100;

					jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);

					jQuery(YTPlayer).on('YTPChanged', function (e) {

						if (YTPlayer.isInit)
							return;

						YTPlayer.isInit = true;

						/** Initialize the YT player ------------------------------------
						 * Youtube player variables
						 * @type {{modestbranding: number, autoplay: number, controls: number, showinfo: number, rel: number, enablejsapi: number, version: number, playerapiid: string, origin: string, allowfullscreen: boolean, iv_load_policy: (string|*|jQuery.mbYTPlayer.opt.showAnnotations), playsinline: number}}
						 */
						let playerVars = {
							'modestbranding' : 1,
							'autoplay'       : 0,
							'controls'       : 0,
							'showinfo'       : 0,
							'rel'            : 0,
							'enablejsapi'    : 1,
							'version'        : 3,
							'playerapiid'    : YTPlayer.playerID,
							'origin'         : '*',
							'allowfullscreen': true,
							'wmode'          : 'transparent',
							'iv_load_policy' : YTPlayer.opt.showAnnotations,
							'cc_load_policy' : YTPlayer.opt.cc_load_policy,
							'playsinline'    : jQuery.mbBrowser.mobile && !YTPlayer.isPlayer ? 1 : 0,

							/**
							 Check if the browser can play HTML5 videos
							 */
							'html5': document.createElement('video').canPlayType ? 1 : 0
						};

						new YT.Player(YTPlayer.playerID, {
							//videoId: YTPlayer.videoID.toString(),
							host      : YTPlayer.opt.useNoCookie? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com',
							playerVars: playerVars,
							events    : {
								'onReady'                : function (event) {
									YTPlayer.player = event.target;
									YTPlayer.player.loadVideoById({
										videoId         : YTPlayer.videoID.toString(),
										suggestedQuality: YTPlayer.opt.quality
									});

									$YTPlayer.trigger('YTPlayerIsReady_' + YTPlayer.id)
								},
								/**
								 * on State Change
								 * @param event
								 *
								 * -1 (unstarted)
								 * 0 (ended)
								 * 1 (playing)
								 * 2 (paused)
								 * 3 (buffering)
								 * 5 (video cued)
								 */
								'onStateChange'          : function (event) {

									if (typeof event.target.getPlayerState != 'function')
										return;

									let state = event.target.getPlayerState();

									if (YTPlayer.preventTrigger || YTPlayer.isStarting) {
										YTPlayer.preventTrigger = false;
										return
									}

									YTPlayer.state = state;
									// console.debug(YTPlayer.state);


									if (event.data === YT.PlayerState.PLAYING) {
										event.target.setPlaybackQuality(YTPlayer.opt.quality)
									}

									let eventType;
									switch (state) {

										/** unstarted */
										case -1:
											eventType = 'YTPUnstarted';
											break;

										/** unstarted */
										case 0:
											eventType = 'YTPRealEnd';
											break;

										/** play */
										case 1:
											eventType = 'YTPPlay';
											if (YTPlayer.controlBar.length)
												YTPlayer.controlBar.find('.mb_YTPPlayPause').html(jQuery.mbYTPlayer.controls.pause);

											if (YTPlayer.isPlayer)
												YTPlayer.inlinePlayButton.hide();

											jQuery(document).off('mousedown.YTPstart');
											break;

										/** pause */
										case 2:
											eventType = 'YTPPause';
											if (YTPlayer.controlBar.length)
												YTPlayer.controlBar.find('.mb_YTPPlayPause').html(jQuery.mbYTPlayer.controls.play);

											if (YTPlayer.isPlayer)
												YTPlayer.inlinePlayButton.show();
											break;

										/** buffer */
										case 3:
											// YTPlayer.player.setPlaybackQuality('default');
											YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality);
											eventType = 'YTPBuffering';
											if (YTPlayer.controlBar.length)
												YTPlayer.controlBar.find('.mb_YTPPlayPause').html(jQuery.mbYTPlayer.controls.play);
											break;

										/** cued */
										case 5:
											eventType = 'YTPCued';
											break;

										default:
											break
									}

									/**
									 Trigger state events
									 */
									let YTPEvent = jQuery.Event(eventType);
									YTPEvent.time = YTPlayer.currentTime;
									jQuery(YTPlayer).trigger(YTPEvent)
								},
								/**
								 * onPlaybackQualityChange
								 * @param e
								 */
								'onPlaybackQualityChange': function (e) {
									let quality = e.target.getPlaybackQuality();
									let YTPQualityChange = jQuery.Event('YTPQualityChange');
									YTPQualityChange.quality = quality;
									jQuery(YTPlayer).trigger(YTPQualityChange)
								},
								/**
								 * onError
								 * @param err
								 *
								 2 – The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.
								 5 – The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.
								 100 – The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.
								 101 – The owner of the requested video does not allow it to be played in embedded players.
								 150 – This error is the same as 101. It's just a 101 error in disguise!
								 */
								'onError'                : function (err) {

									if (typeof YTPlayer.opt.onError == 'function')
										YTPlayer.opt.onError($YTPlayer, err);

									console.debug("error:", err);

									switch (err.data) {
										case 2:
											console.error('video ID:: ' + YTPlayer.videoID + ': The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.');
											break;
										case 5:
											console.error('video ID:: ' + YTPlayer.videoID + ': The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.');
											break;
										case 100:
											console.error('video ID:: ' + YTPlayer.videoID + ': The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.');
											break;
										case 101:
										case 150:
											console.error('video ID:: ' + YTPlayer.videoID + ': The video doesn\'t exist or The owner does not allow it to be played in embedded players.');
											break
									}

									if (YTPlayer.isList)
										jQuery(YTPlayer).YTPPlayNext()

								}
							}
						});

						$YTPlayer.on('YTPlayerIsReady_' + YTPlayer.id, function () {

							if (YTPlayer.isReady)
								return this;

							YTPlayer.playerEl = YTPlayer.player.getIframe();
							jQuery(YTPlayer.playerEl).unselectable();
							$YTPlayer.optimizeDisplay();

							/**
							 * Optimize display on resize
							 */
							jQuery(window).off('resize.YTP_' + YTPlayer.id).on('resize.YTP_' + YTPlayer.id, function () {
								$YTPlayer.optimizeDisplay()
							});

							/**
							 * Optimize display on orientation change
							 */
							jQuery(window).off('orientationchange.YTP_' + YTPlayer.id).on('orientationchange.YTP_' + YTPlayer.id, function () {
								$YTPlayer.optimizeDisplay()
							});

							/**
							 * Set the time of the last visit progress
							 */
							if (YTPlayer.opt.remember_last_time) {
								jQuery(window).on('unload.YTP_' + YTPlayer.id, function () {
									let current_time = YTPlayer.player.getCurrentTime();
									jQuery.mbCookie.set('YTPlayer_start_from' + YTPlayer.videoID, current_time, 0)
								})
							}

							$YTPlayer.YTPCheckForState()

						})
					})
				});

				$YTPlayer.off('YTPTime.mask');
				jQuery.mbYTPlayer.applyMask(YTPlayer);

				console.timeEnd(YTPTimerLabels.init);

				setTimeout(function () {
					if (!ytp.YTAPIReady && typeof window.YT == "object") {
						jQuery(document).trigger('YTAPIReady');
						ytp.YTAPIReady = true;

						console.error("YTPlayer: More then a call to the YT API has been detected")
					}
				}, YTPlayer.opt.delayAtStart)

			})
		},

		/**
		 *
		 * @param YTPlayer
		 * @param perc
		 * @returns {boolean}
		 */
		isOnScreen: function (YTPlayer, perc) {
			perc = perc || 10;
			let playerBox = YTPlayer.wrapper;
			let winTop = jQuery(window).scrollTop();
			let winBottom = winTop + jQuery(window).height();

			let margin = (playerBox.height() * perc) / 100;
			let elTop = playerBox.offset().top + margin;
			let elBottom = playerBox.offset().top + (playerBox.height() - margin);

			return ((elBottom <= winBottom) && (elTop >= winTop))
		},

		/**
		 * getDataFromAPI
		 * @param YTPlayer
		 */
		getDataFromAPI: function (YTPlayer) {

			YTPlayer.videoData = jQuery.mbStorage.get('YTPlayer_data_' + YTPlayer.videoID);
			if (YTPlayer.videoData) {
				setTimeout(function () {
					YTPlayer.dataReceived = true;

					let YTPChanged = jQuery.Event('YTPChanged');
					YTPChanged.time = YTPlayer.currentTime;
					YTPChanged.videoId = YTPlayer.videoID;
					YTPChanged.opt = YTPlayer.opt;

					//console.debug("videoData:",YTPlayer.videoData)

					jQuery(YTPlayer).trigger(YTPChanged);

					let YTPData = jQuery.Event('YTPData');
					YTPData.prop = {};

					for (let x in YTPlayer.videoData)
						if (YTPlayer.videoData.hasOwnProperty(x))
							YTPData.prop[x] = YTPlayer.videoData[x];

					jQuery(YTPlayer).trigger(YTPData)

				}, YTPlayer.opt.fadeOnStartTime);

				YTPlayer.hasData = true

			} else if (jQuery.mbYTPlayer.apiKey) {

				/**
				 * Get video info from API3 (needs api key)
				 * snippet,player,contentDetails,statistics,status
				 */

				jQuery.getJSON('https://www.googleapis.com/youtube/v3/videos?id=' + YTPlayer.videoID + '&key=' + jQuery.mbYTPlayer.apiKey + '&part=snippet', function (data) {
					YTPlayer.dataReceived = true;

					let YTPChanged = jQuery.Event('YTPChanged');
					YTPChanged.time = YTPlayer.currentTime;
					YTPChanged.videoId = YTPlayer.videoID;
					jQuery(YTPlayer).trigger(YTPChanged);

					function parseYTPlayer_data(data) {
						YTPlayer.videoData = {};
						YTPlayer.videoData.id = YTPlayer.videoID;
						YTPlayer.videoData.channelTitle = data.channelTitle;
						YTPlayer.videoData.title = data.title;
						YTPlayer.videoData.description = data.description.length < 400 ? data.description : data.description.substring(0, 400) + ' ...';
						YTPlayer.videoData.thumb_max = data.thumbnails.maxres ? data.thumbnails.maxres.url : null;
						YTPlayer.videoData.thumb_high = data.thumbnails.high ? data.thumbnails.high.url : null;
						YTPlayer.videoData.thumb_medium = data.thumbnails.medium ? data.thumbnails.medium.url : null;
						jQuery.mbStorage.set('YTPlayer_data_' + YTPlayer.videoID, YTPlayer.videoData)
					}

					if (!data.items[0]) {
						YTPlayer.videoData = {};
						YTPlayer.hasData = false
					} else {
						parseYTPlayer_data(data.items[0].snippet);
						YTPlayer.hasData = true
					}

					let YTPData = jQuery.Event('YTPData');
					YTPData.prop = {};
					for (let x in YTPlayer.videoData) YTPData.prop[x] = YTPlayer.videoData[x];
					jQuery(YTPlayer).trigger(YTPData)
				})
				.fail(function (jqxhr) {
					console.error("YT data error:: ", jqxhr);
					YTPlayer.hasData = false;

					let YTPChanged = jQuery.Event('YTPChanged');
					YTPChanged.time = YTPlayer.currentTime;
					YTPChanged.videoId = YTPlayer.videoID;
					jQuery(YTPlayer).trigger(YTPChanged)
				})
			} else {

				setTimeout(function () {
					let YTPChanged = jQuery.Event('YTPChanged');
					YTPChanged.time = YTPlayer.currentTime;
					YTPChanged.videoId = YTPlayer.videoID;
					jQuery(YTPlayer).trigger(YTPChanged)
				}, 10);
				YTPlayer.videoData = null
			}

			YTPlayer.opt.ratio = YTPlayer.opt.ratio == 'auto' ? 16 / 9 : YTPlayer.opt.ratio;

			if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay) { //&& ( !jQuery.mbBrowser.mobile && !jQuery.isTablet )
				YTPlayer.loading = jQuery('<div/>').addClass('loading').html('Loading').hide();
				jQuery(YTPlayer).append(YTPlayer.loading);
				YTPlayer.loading.fadeIn()
			}
		},

		/**
		 * removeStoredData
		 */
		removeStoredData: function () {
			jQuery.mbStorage.remove()
		},

		/**
		 * getVideoData
		 * @returns {*|YTPlayer.videoData}
		 */
		getVideoData: function () {
			let YTPlayer = this.get(0);
			return YTPlayer.videoData
		},

		/**
		 * getVideoID
		 * @returns {*|YTPlayer.videoID|boolean}
		 */
		getVideoID: function () {
			let YTPlayer = this.get(0);
			return YTPlayer.videoID || false
		},

		/**
		 * getPlaylistID
		 * @returns {*|YTPlayer.videoID|boolean}
		 */
		getPlaylistID  : function () {
			let YTPlayer = this.get(0);
			return YTPlayer.playlistID || false
		},
		/**
		 * setVideoQuality
		 * @deprecated
		 *
		 * @param quality
		 * @returns {jQuery.mbYTPlayer}
		 */
		setVideoQuality: function (quality) {

			let YTPlayer = this.get(0);
			let time = YTPlayer.player.getCurrentTime();
			jQuery(YTPlayer).YTPPause();
			YTPlayer.opt.quality = quality;
			YTPlayer.player.setPlaybackQuality(quality);
			YTPlayer.player.seekTo(time); // or set to CurrentTime using player.getCurrentTime()
			jQuery(YTPlayer).YTPPlay();
			return this;
		},

		/**
		 * getVideoQuality
		 * @returns {jQuery.mbYTPlayer}
		 */
		getVideoQuality: function () {
			let YTPlayer = this.get(0);
			let quality = YTPlayer.player.getPlaybackQuality();
			return quality
		},

		/**
		 * playlist
		 * @param videos -> Array or String (videoList ID)
		 * @param shuffle
		 * @param callback
		 * @returns {jQuery.mbYTPlayer}
		 *
		 * To retrieve a Youtube playlist the Youtube API key is required:
		 * https://console.developers.google.com/
		 * jQuery.mbYTPlayer.apiKey
		 */
		playlist: function (videos, shuffle, callback) {

			let $YTPlayer = this;
			let YTPlayer = $YTPlayer.get(0);

			YTPlayer.isList = true;

			if (shuffle)
				videos = jQuery.shuffle(videos);

			if (!YTPlayer.videoID) {
				YTPlayer.videos = videos;
				YTPlayer.videoCounter = 1;
				YTPlayer.videoLength = videos.length;
				jQuery(YTPlayer).data('property', videos[0]);
				jQuery(YTPlayer).YTPlayer()
			}

			if (typeof callback == 'function')
				jQuery(YTPlayer).on('YTPChanged', function () {
					callback(YTPlayer)
				});

			jQuery(YTPlayer).on('YTPEnd', function () {
				jQuery(YTPlayer).YTPPlayNext()
			});
			return this
		},

		/**
		 * playNext
		 * @returns {jQuery.mbYTPlayer}
		 */
		playNext: function () {
			let YTPlayer = this.get(0);
			YTPlayer.videoCounter++;
			if (YTPlayer.videoCounter > YTPlayer.videoLength)
				YTPlayer.videoCounter = 1;
			jQuery(YTPlayer).YTPPlayIndex(YTPlayer.videoCounter);
			return this
		},

		/**
		 * playPrev
		 * @returns {jQuery.mbYTPlayer}
		 */
		playPrev: function () {
			let YTPlayer = this.get(0);
			YTPlayer.videoCounter--;
			if (YTPlayer.videoCounter <= 0)
				YTPlayer.videoCounter = YTPlayer.videoLength;
			jQuery(YTPlayer).YTPPlayIndex(YTPlayer.videoCounter);
			return this
		},

		/**
		 * playIndex
		 * @param idx
		 * @returns {jQuery.mbYTPlayer}
		 */
		playIndex: function (idx) {
			let YTPlayer = this.get(0);
			if (YTPlayer.checkForStartAt) {
				clearInterval(YTPlayer.checkForStartAt);
				clearInterval(YTPlayer.getState)
			}
			YTPlayer.videoCounter = idx;

			if (YTPlayer.videoCounter >= YTPlayer.videoLength)
				YTPlayer.videoCounter = YTPlayer.videoLength;

			let video = YTPlayer.videos[YTPlayer.videoCounter - 1];

			jQuery(YTPlayer).YTPChangeVideo(video);
			return this
		},

		/**
		 * changeVideo
		 * @param opt
		 * @returns {jQuery.mbYTPlayer}
		 */
		changeVideo: function (opt) {
			let $YTPlayer = this;
			let YTPlayer = $YTPlayer.get(0);

			YTPlayer.opt.startAt = 0;
			YTPlayer.opt.stopAt = 0;
			YTPlayer.opt.mask = false;
			YTPlayer.opt.mute = true;
			YTPlayer.opt.autoPlay = true;
			YTPlayer.opt.addFilters = false;
			YTPlayer.opt.coverImage = false;

			YTPlayer.hasData = false;
			YTPlayer.hasChanged = true;

			YTPlayer.player.loopTime = undefined;

			if (opt)
				jQuery.extend(YTPlayer.opt, opt);

			YTPlayer.videoID = getYTPVideoID(YTPlayer.opt.videoURL).videoID;

			if (YTPlayer.opt.loop && typeof YTPlayer.opt.loop == 'boolean')
				YTPlayer.opt.loop = 9999;

			YTPlayer.wrapper.css({
				background: 'none'
			});

			jQuery(YTPlayer.playerEl).CSSAnimate({
				opacity: 0
			}, YTPlayer.opt.fadeOnStartTime, function () {

				jQuery.mbYTPlayer.getDataFromAPI(YTPlayer);

				$YTPlayer.YTPGetPlayer().loadVideoById({
					videoId         : YTPlayer.videoID,
					suggestedQuality: YTPlayer.opt.quality
				});

				$YTPlayer.YTPPause();
				$YTPlayer.optimizeDisplay();

				if (YTPlayer.checkForStartAt) {
					clearInterval(YTPlayer.checkForStartAt);
					clearInterval(YTPlayer.getState)
				}
				$YTPlayer.YTPCheckForState()
			});

			let YTPChangeVideo = jQuery.Event('YTPChangeVideo');
			YTPChangeVideo.time = YTPlayer.currentTime;
			jQuery(YTPlayer).trigger(YTPChangeVideo);

			jQuery.mbYTPlayer.applyMask(YTPlayer);

			return this
		},

		/**
		 * getPlayer
		 * @returns {player}
		 */
		getPlayer: function () {
			let YTPlayer = this.get(0);
			return !YTPlayer.isReady ? null : YTPlayer.player
		},

		/**
		 * playerDestroy
		 * @returns {jQuery.mbYTPlayer}
		 */
		playerDestroy: function () {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			ytp.YTAPIReady = true;
			ytp.backgroundIsInited = false;
			YTPlayer.isInit = false;
			YTPlayer.videoID = null;
			YTPlayer.isReady = false;
			YTPlayer.wrapper.remove();
			jQuery('#controlBar_' + YTPlayer.id).remove();
			clearInterval(YTPlayer.checkForStartAt);
			clearInterval(YTPlayer.getState);
			return this
		},

		/**
		 * fullscreen
		 * @param real
		 * @returns {jQuery.mbYTPlayer}
		 */
		fullscreen: function (real) {
			let YTPlayer = this.get(0);

			if (typeof real == 'undefined')
				real = eval(YTPlayer.opt.realFullscreen);

			let controls = jQuery('#controlBar_' + YTPlayer.id);
			let fullScreenBtn = controls.find('.mb_OnlyYT');
			let videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;

			if (real) {
				let fullscreenchange = jQuery.mbBrowser.mozilla ? 'mozfullscreenchange' : jQuery.mbBrowser.webkit ? 'webkitfullscreenchange' : 'fullscreenchange';
				jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
					let isFullScreen = RunPrefixMethod(document, 'IsFullScreen') || RunPrefixMethod(document, 'FullScreen');
					if (!isFullScreen) {
						YTPlayer.isAlone = false;
						fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
						jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality);
						videoWrapper.removeClass('YTPFullscreen');
						videoWrapper.CSSAnimate({
							opacity: YTPlayer.opt.opacity
						}, YTPlayer.opt.fadeOnStartTime);

						videoWrapper.css({
							zIndex: 0
						});

						if (YTPlayer.isBackground) {
							jQuery('body').after(controls)
						} else {
							YTPlayer.wrapper.before(controls)
						}
						jQuery(window).resize();
						jQuery(YTPlayer).trigger('YTPFullScreenEnd')

					} else {
						jQuery(YTPlayer).trigger('YTPFullScreenStart')
					}
				})
			}
			if (!YTPlayer.isAlone) {
				function hideMouse() {
					YTPlayer.overlay.css({
						cursor: 'none'
					})
				}

				jQuery(document).on('mousemove.YTPlayer', function (e) {
					YTPlayer.overlay.css({
						cursor: 'auto'
					});
					clearTimeout(YTPlayer.hideCursor);
					if (!jQuery(e.target).parents().is('.mb_YTPBar'))
						YTPlayer.hideCursor = setTimeout(hideMouse, 3000)
				});

				hideMouse();

				if (real) {
					videoWrapper.css({
						opacity: 0
					});
					videoWrapper.addClass('YTPFullscreen');
					launchFullscreen(videoWrapper.get(0));

					setTimeout(function () {
						videoWrapper.CSSAnimate({
							opacity: 1
						}, YTPlayer.opt.fadeOnStartTime * 2);

						videoWrapper.append(controls);
						jQuery(YTPlayer).optimizeDisplay();
						YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, true)

					}, YTPlayer.opt.fadeOnStartTime)
				} else
					videoWrapper.css({
						zIndex: 10000
					}).CSSAnimate({
						opacity: 1
					}, YTPlayer.opt.fadeOnStartTime * 2);
				fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
				YTPlayer.isAlone = true
			} else {
				jQuery(document).off('mousemove.YTPlayer');
				clearTimeout(YTPlayer.hideCursor);
				YTPlayer.overlay.css({
					cursor: 'auto'
				});
				if (real) {
					cancelFullscreen()
				} else {
					videoWrapper.CSSAnimate({
						opacity: YTPlayer.opt.opacity
					}, YTPlayer.opt.fadeOnStartTime);
					videoWrapper.css({
						zIndex: 0
					})
				}
				fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
				YTPlayer.isAlone = false
			}

			function RunPrefixMethod(obj, method) {
				let pfx = ['webkit', 'moz', 'ms', 'o', ''];
				let p = 0,
					m, t;
				while (p < pfx.length && !obj[m]) {
					m = method;
					if (pfx[p] == '') {
						m = m.substr(0, 1).toLowerCase() + m.substr(1)
					}
					m = pfx[p] + m;
					t = typeof obj[m];
					if (t != 'undefined') {
						pfx = [pfx[p]];
						return (t == 'function' ? obj[m]() : obj[m])
					}
					p++
				}
			}

			function launchFullscreen(element) {
				RunPrefixMethod(element, 'RequestFullScreen')
			}

			function cancelFullscreen() {
				if (RunPrefixMethod(document, 'FullScreen') || RunPrefixMethod(document, 'IsFullScreen')) {
					RunPrefixMethod(document, 'CancelFullScreen')
				}
			}

			return this
		},

		/**
		 * toggleLoops
		 * @returns {jQuery.mbYTPlayer}
		 */
		toggleLoops: function () {
			let YTPlayer = this.get(0);
			let data = YTPlayer.opt;
			if (data.loop == 1) {
				data.loop = 0
			} else {
				if (data.startAt) {
					YTPlayer.player.seekTo(data.startAt)
				} else {
					YTPlayer.player.playVideo()
				}
				data.loop = 1
			}
			return this
		},

		/**
		 * play
		 * @returns {jQuery.mbYTPlayer}
		 */
		play: function () {
			let YTPlayer = this.get(0);
			let $YTPlayer = jQuery(YTPlayer);

			if (!YTPlayer.isReady)
				return this;

			setTimeout(function () {
				$YTPlayer.YTPSetAbundance(YTPlayer.opt.abundance)
			}, 300);

			YTPlayer.player.playVideo();

			jQuery(YTPlayer.playerEl).css({
				opacity: 1
			});

			YTPlayer.wrapper.css({
				backgroundImage: 'none'
			});

			YTPlayer.wrapper.CSSAnimate({
				opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
			}, YTPlayer.opt.fadeOnStartTime);

			let controls = jQuery('#controlBar_' + YTPlayer.id);
			let playBtn = controls.find('.mb_YTPPlayPause');
			playBtn.html(jQuery.mbYTPlayer.controls.pause);
			YTPlayer.state = 1;

			return this
		},

		/**
		 * togglePlay
		 * @param callback
		 * @returns {jQuery.mbYTPlayer}
		 */
		togglePlay: function (callback) {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			if (YTPlayer.state == 1)
				this.YTPPause();
			else
				this.YTPPlay();

			if (typeof callback == 'function')
				callback(YTPlayer.state);

			return this
		},

		/**
		 * stop
		 * @returns {jQuery.mbYTPlayer}
		 */
		stop: function () {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			let controls = jQuery('#controlBar_' + YTPlayer.id);
			let playBtn = controls.find('.mb_YTPPlayPause');
			playBtn.html(jQuery.mbYTPlayer.controls.play);
			YTPlayer.player.stopVideo();
			return this
		},

		/**
		 * pause
		 * @returns {jQuery.mbYTPlayer}
		 */
		pause: function () {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			if (YTPlayer.opt.abundance < .2)
				this.YTPSetAbundance(.2);

			YTPlayer.player.pauseVideo();
			YTPlayer.state = 2;
			return this
		},

		/**
		 * seekTo
		 * @param sec
		 * @returns {jQuery.mbYTPlayer}
		 */
		seekTo: function (sec) {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			YTPlayer.player.seekTo(sec, true);
			return this
		},

		/**
		 *
		 * @returns {*}
		 */
		getPlaybackRate: function () {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			return YTPlayer.player.getPlaybackRate()
		},

		/**
		 * setPlaybackRate
		 * @param val:Number
		 * 0.25, 0.5, 1, 1.5, 2
		 * @returns {jQuery.mbYTPlayer}
		 */
		setPlaybackRate: function (val) {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			YTPlayer.player.setPlaybackRate(val);
			return this
		},

		/**
		 * setVolume
		 * @param val
		 * @returns {jQuery.mbYTPlayer}
		 */
		setVolume: function (val) {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			YTPlayer.opt.vol = val;
			this.YTPUnmute();
			YTPlayer.player.setVolume(YTPlayer.opt.vol);

			if (YTPlayer.volumeBar && YTPlayer.volumeBar.length)
				YTPlayer.volumeBar.updateSliderVal(val);

			return this
		},
		/**
		 * getVolume
		 * @returns {*}
		 */
		getVolume: function () {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			return YTPlayer.player.getVolume()
		},

		/**
		 * toggleVolume
		 * @returns {jQuery.mbYTPlayer}
		 */
		toggleVolume: function () {

			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			if (YTPlayer.isMute) {
				if (!jQuery.mbBrowser.mobile)
					this.YTPSetVolume(YTPlayer.opt.vol);
				this.YTPUnmute()
			} else {
				this.YTPMute()
			}
			return this
		},

		/**
		 * mute
		 * @returns {jQuery.mbYTPlayer}
		 */
		mute: function () {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			if (YTPlayer.isMute)
				return this;
			YTPlayer.player.mute();
			YTPlayer.isMute = true;
			YTPlayer.player.setVolume(0);
			if (YTPlayer.volumeBar && YTPlayer.volumeBar.length && YTPlayer.volumeBar.width() > 10) {
				YTPlayer.volumeBar.updateSliderVal(0)
			}
			let controls = jQuery('#controlBar_' + YTPlayer.id);
			let muteBtn = controls.find('.mb_YTPMuteUnmute');
			muteBtn.html(jQuery.mbYTPlayer.controls.unmute);
			jQuery(YTPlayer).addClass('isMuted');
			if (YTPlayer.volumeBar && YTPlayer.volumeBar.length) YTPlayer.volumeBar.addClass('muted');
			let YTPEvent = jQuery.Event('YTPMuted');
			YTPEvent.time = YTPlayer.currentTime;

			if (!YTPlayer.preventTrigger)
				jQuery(YTPlayer).trigger(YTPEvent);

			return this
		},

		/**
		 * unmute
		 * @returns {jQuery.mbYTPlayer}
		 */
		unmute: function () {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			if (!YTPlayer.isMute)
				return this;

			YTPlayer.player.unMute();
			YTPlayer.isMute = false;
			jQuery(YTPlayer).YTPSetVolume(YTPlayer.opt.vol);
			if (YTPlayer.volumeBar && YTPlayer.volumeBar.length)
				YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol > 10 ? YTPlayer.opt.vol : 10);
			let controls = jQuery('#controlBar_' + YTPlayer.id);
			let muteBtn = controls.find('.mb_YTPMuteUnmute');
			muteBtn.html(jQuery.mbYTPlayer.controls.mute);
			jQuery(YTPlayer).removeClass('isMuted');
			if (YTPlayer.volumeBar && YTPlayer.volumeBar.length)
				YTPlayer.volumeBar.removeClass('muted');
			let YTPEvent = jQuery.Event('YTPUnmuted');
			YTPEvent.time = YTPlayer.currentTime;

			if (!YTPlayer.preventTrigger)
				jQuery(YTPlayer).trigger(YTPEvent);

			return this
		},

		/* FILTERS ---------------------------------------------------------------------------------------------------------*/

		/**
		 * applyFilter
		 * @param filter
		 * @param value
		 * @returns {jQuery.mbYTPlayer}
		 */
		applyFilter: function (filter, value) {
			let $YTPlayer = this;
			let YTPlayer = $YTPlayer.get(0);

			if (!YTPlayer.isReady)
				return this;

			YTPlayer.filters[filter].value = value;
			if (YTPlayer.filtersEnabled)
				$YTPlayer.YTPEnableFilters()
		},

		/**
		 * applyFilters
		 * @param filters
		 * @returns {jQuery.mbYTPlayer}
		 */
		applyFilters: function (filters) {
			let $YTPlayer = this;
			let YTPlayer = $YTPlayer.get(0);

			if (!YTPlayer.isReady) {
				jQuery(YTPlayer).on('YTPReady', function () {
					$YTPlayer.YTPApplyFilters(filters)
				});
				return this
			}

			for (let key in filters) {
				$YTPlayer.YTPApplyFilter(key, filters[key])
			}

			$YTPlayer.trigger('YTPFiltersApplied')
		},

		/**
		 * toggleFilter
		 * @param filter
		 * @param value
		 * @returns {jQuery.mbYTPlayer}
		 */
		toggleFilter: function (filter, value) {
			let $YTPlayer = this;
			let YTPlayer = $YTPlayer.get(0);

			if (!YTPlayer.isReady)
				return this;

			if (!YTPlayer.filters[filter].value)
				YTPlayer.filters[filter].value = value;
			else
				YTPlayer.filters[filter].value = 0;

			if (YTPlayer.filtersEnabled)
				jQuery(YTPlayer).YTPEnableFilters();

			return this
		},

		/**
		 * toggleFilters
		 * @param callback
		 * @returns {jQuery.mbYTPlayer}
		 */
		toggleFilters: function (callback) {
			let $YTPlayer = this;
			let YTPlayer = $YTPlayer.get(0);

			if (!YTPlayer.isReady)
				return this;

			if (YTPlayer.filtersEnabled) {
				jQuery(YTPlayer).trigger('YTPDisableFilters');
				jQuery(YTPlayer).YTPDisableFilters()
			} else {
				jQuery(YTPlayer).YTPEnableFilters();
				jQuery(YTPlayer).trigger('YTPEnableFilters')
			}
			if (typeof callback == 'function')
				callback(YTPlayer.filtersEnabled);

			return this
		},

		/**
		 * disableFilters
		 * @returns {jQuery.mbYTPlayer}
		 */
		disableFilters: function () {
			let $YTPlayer = this;
			let YTPlayer = $YTPlayer.get(0);

			if (!YTPlayer.isReady)
				return this;

			let iframe = jQuery(YTPlayer.playerEl);
			iframe.css('-webkit-filter', '');
			iframe.css('filter', '');
			YTPlayer.filtersEnabled = false;

			return this
		},

		/**
		 * enableFilters
		 * @returns {jQuery.mbYTPlayer}
		 */
		enableFilters: function () {
			let $YTPlayer = this;
			let YTPlayer = $YTPlayer.get(0);

			if (!YTPlayer.isReady)
				return this;

			let iframe = jQuery(YTPlayer.playerEl);
			let filterStyle = '';
			for (let key in YTPlayer.filters) {
				if (YTPlayer.filters[key].value)
					filterStyle += key.replace('_', '-') + '(' + YTPlayer.filters[key].value + YTPlayer.filters[key].unit + ') '
			}
			iframe.css('-webkit-filter', filterStyle);
			iframe.css('filter', filterStyle);
			YTPlayer.filtersEnabled = true;

			return this
		},

		/**
		 * removeFilter
		 * @param filter
		 * @param callback
		 * @returns {jQuery.mbYTPlayer}
		 */
		removeFilter: function (filter, callback) {
			let $YTPlayer = this;
			let YTPlayer = $YTPlayer.get(0);

			if (!YTPlayer.isReady)
				return this;

			if (typeof filter == 'function') {
				callback = filter;
				filter = null
			}

			if (!filter) {
				for (let key in YTPlayer.filters) {
					if (YTPlayer.filters.hasOwnProperty(key)) {
						$YTPlayer.YTPApplyFilter(key, 0);
						if (typeof callback == 'function')
							callback(key);
					}
				}

				YTPlayer.filters = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaultFilters)

			} else {
				$YTPlayer.YTPApplyFilter(filter, 0);
				if (typeof callback == 'function') callback(filter)
			}

			let YTPEvent = jQuery.Event('YTPFiltersApplied');
			$YTPlayer.trigger(YTPEvent);

			return this
		},

		/**
		 * getFilters
		 * @returns {filters}
		 */
		getFilters: function () {
			let YTPlayer = this.get(0);

			if (!YTPlayer.isReady)
				return this;

			return YTPlayer.filters
		},

		/* MASK ---------------------------------------------------------------------------------------------------------*/

		/**
		 * addMask
		 * @param mask
		 * @returns {jQuery.mbYTPlayer}
		 */
		addMask: function (mask) {
			let YTPlayer = this.get(0);

			if (!mask)
				mask = YTPlayer.actualMask;

			let tempImg = jQuery('<img/>').attr('src', mask).on('load', function () {
				YTPlayer.overlay.CSSAnimate({
					opacity: 0
				}, YTPlayer.opt.fadeOnStartTime, function () {
					YTPlayer.hasMask = true;
					tempImg.remove();
					YTPlayer.overlay.css({
						backgroundImage   : 'url(' + mask + ')',
						backgroundRepeat  : 'no-repeat',
						backgroundPosition: 'center center',
						backgroundSize    : 'cover'
					});
					YTPlayer.overlay.CSSAnimate({
						opacity: 1
					}, YTPlayer.opt.fadeOnStartTime)
				})
			});

			return this
		},

		/**
		 * removeMask
		 * @returns {jQuery.mbYTPlayer}
		 */
		removeMask: function () {
			let YTPlayer = this.get(0);

			YTPlayer.overlay.CSSAnimate({
				opacity: 0
			}, YTPlayer.opt.fadeOnStartTime, function () {
				YTPlayer.hasMask = false;
				YTPlayer.overlay.css({
					backgroundImage   : '',
					backgroundRepeat  : '',
					backgroundPosition: '',
					backgroundSize    : ''
				});
				YTPlayer.overlay.CSSAnimate({
					opacity: 1
				}, YTPlayer.opt.fadeOnStartTime)
			});

			return this
		},

		/**
		 * Apply mask
		 * @param YTPlayer
		 */
		applyMask: function (YTPlayer) {
			let $YTPlayer = jQuery(YTPlayer);

			$YTPlayer.off('YTPTime.mask');

			if (YTPlayer.opt.mask) {
				if (typeof YTPlayer.opt.mask == 'string') {

					$YTPlayer.YTPAddMask(YTPlayer.opt.mask);
					YTPlayer.actualMask = YTPlayer.opt.mask

				} else if (typeof YTPlayer.opt.mask == 'object') {

					for (let time in YTPlayer.opt.mask) {

						if (YTPlayer.opt.mask[time])
							img = jQuery('<img/>').attr('src', YTPlayer.opt.mask[time])

					}

					if (YTPlayer.opt.mask[0])
						$YTPlayer.YTPAddMask(YTPlayer.opt.mask[0]);

					$YTPlayer.on('YTPTime.mask', function (e) {

						for (let time in YTPlayer.opt.mask) {
							if (e.time == time)
								if (!YTPlayer.opt.mask[time]) {
									$YTPlayer.YTPRemoveMask()
								} else {
									$YTPlayer.YTPAddMask(YTPlayer.opt.mask[time]);
									YTPlayer.actualMask = YTPlayer.opt.mask[time]
								}
						}
					})
				}
			}
		},

		/**
		 * toggleMask
		 * @returns {jQuery.mbYTPlayer}
		 */
		toggleMask: function () {
			let YTPlayer = this.get(0);

			let $YTPlayer = jQuery(YTPlayer);
			if (YTPlayer.hasMask)
				$YTPlayer.YTPRemoveMask();
			else
				$YTPlayer.YTPAddMask();
			return this
		},

		/* CONTROLS --------------------------------------------------------------------------------------------------------*/

		/**
		 * manageProgress
		 * @returns {{totalTime: number, currentTime: number}}
		 */
		manageProgress: function () {
			let YTPlayer = this.get(0);
			let controls = jQuery('#controlBar_' + YTPlayer.id);
			let progressBar = controls.find('.mb_YTPProgress');
			let loadedBar = controls.find('.mb_YTPLoaded');
			let timeBar = controls.find('.mb_YTPseekbar');
			let totW = progressBar.outerWidth();
			let currentTime = Math.floor(YTPlayer.player.getCurrentTime());
			let totalTime = Math.floor(YTPlayer.player.getDuration());
			let timeW = (currentTime * totW) / totalTime;
			let startLeft = 0;
			let loadedW = YTPlayer.player.getVideoLoadedFraction() * 100;
			loadedBar.css({
				left : startLeft,
				width: loadedW + '%'
			});
			timeBar.css({
				left : 0,
				width: timeW
			});
			return {
				totalTime  : totalTime,
				currentTime: currentTime
			}
		},

		/**
		 * buildControls
		 * @param YTPlayer
		 */
		buildControls: function (YTPlayer) {

			jQuery('#controlBar_' + YTPlayer.id).remove();
			if (!YTPlayer.opt.showControls) {
				YTPlayer.controlBar = false;
				return
			}

			YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl;
			if (jQuery('#controlBar_' + YTPlayer.id).length)
				return;
			YTPlayer.controlBar = jQuery('<div/>').attr('id', 'controlBar_' + YTPlayer.id).addClass('mb_YTPBar').css({
				whiteSpace: 'noWrap',
				position  : YTPlayer.isBackground ? 'fixed' : 'absolute',
				zIndex    : YTPlayer.isBackground ? 10000 : 1000
			}).hide().on('click', function (e) {
				e.stopPropagation()
			});
			let buttonBar = jQuery('<div/>').addClass('buttonBar');
			/**
			 *  play/pause button
			 * */
			let playpause = jQuery('<span>' + jQuery.mbYTPlayer.controls.play + '</span>').addClass('mb_YTPPlayPause ytpicon').on('click', function (e) {
				e.stopPropagation();
				jQuery(YTPlayer).YTPTogglePlay()
			});
			/**
			 *  mute/unmute button
			 * */
			let MuteUnmute = jQuery('<span>' + jQuery.mbYTPlayer.controls.mute + '</span>').addClass('mb_YTPMuteUnmute ytpicon').on('click', function (e) {
				e.stopPropagation();
				jQuery(YTPlayer).YTPToggleVolume()
			});
			/**
			 *  volume bar
			 * */
			let volumeBar = jQuery('<div/>').addClass('mb_YTPVolumeBar').css({
				display: 'inline-block'
			});
			YTPlayer.volumeBar = volumeBar;

			/**
			 * time elapsed
			 * */
			let idx = jQuery('<span/>').addClass('mb_YTPTime');
			let vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : '';
			if (vURL.indexOf('http') < 0) vURL = 'https://www.youtube.com/watch?v=' + YTPlayer.opt.videoURL;
			let movieUrl = jQuery('<span/>').html(jQuery.mbYTPlayer.controls.ytLogo).addClass('mb_YTPUrl ytpicon').attr('title', 'view on YouTube').on('click', function () {
				window.open(vURL, 'viewOnYT')
			});
			let onlyVideo = jQuery('<span/>').html(jQuery.mbYTPlayer.controls.onlyYT).addClass('mb_OnlyYT ytpicon').on('click', function (e) {
				e.stopPropagation();
				jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen)
			});
			let progressBar = jQuery('<div/>').addClass('mb_YTPProgress').css('position', 'absolute').on('click', function (e) {
				e.stopPropagation();
				timeBar.css({
					width: (e.clientX - timeBar.offset().left)
				});
				YTPlayer.timeW = e.clientX - timeBar.offset().left;
				YTPlayer.controlBar.find('.mb_YTPLoaded').css({
					width: 0
				});
				let totalTime = Math.floor(YTPlayer.player.getDuration());
				YTPlayer.goto = (timeBar.outerWidth() * totalTime) / progressBar.outerWidth();
				YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
				YTPlayer.controlBar.find('.mb_YTPLoaded').css({
					width: 0
				})
			});
			let loadedBar = jQuery('<div/>').addClass('mb_YTPLoaded').css('position', 'absolute');
			let timeBar = jQuery('<div/>').addClass('mb_YTPseekbar').css('position', 'absolute');
			progressBar.append(loadedBar).append(timeBar);
			buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx);

			if (YTPlayer.opt.showYTLogo) {
				buttonBar.append(movieUrl)
			}

			/**
			 * Full screen button
			 */
			if (YTPlayer.isBackground || (eval(YTPlayer.opt.realFullscreen) && !YTPlayer.isBackground))
				buttonBar.append(onlyVideo);

			YTPlayer.controlBar.append(buttonBar).append(progressBar);

			if (!YTPlayer.isBackground) {
				YTPlayer.controlBar.addClass('inlinePlayer');
				YTPlayer.wrapper.before(YTPlayer.controlBar)
			} else {
				jQuery('body').after(YTPlayer.controlBar)
			}

			/**
			 * Volume slider
			 */
			volumeBar.simpleSlider({
				initialval : YTPlayer.opt.vol,
				scale      : 100,
				orientation: 'h',
				callback   : function (el) {

					if (el.value == 0) {
						jQuery(YTPlayer).YTPMute()
					} else {
						jQuery(YTPlayer).YTPUnmute()
					}
					YTPlayer.player.setVolume(el.value);
					if (!YTPlayer.isMute)
						YTPlayer.opt.vol = el.value
				}

			})
		},

		/**
		 * changeCoverImage
		 *
		 * @param imageURL
		 * @returns {jQuery.mbYTPlayer}
		 */
		changeCoverImage: function (imageURL) {
			let YTPlayer = this.get(0);
			if (YTPlayer.opt.coverImage || YTPlayer.orig_containment_background) {
				let bgndURL = imageURL || (YTPlayer.opt.coverImage ? 'url(' + YTPlayer.opt.coverImage + ') center center' : YTPlayer.orig_containment_background);
				if (bgndURL)
					YTPlayer.opt.containment.css({
						background          : bgndURL,
						backgroundSize      : 'cover',
						backgroundRepeat    : 'no-repeat',
						backgroundAttachment: 'fixed'
					})
			}
			return this;
		},

		/* MANAGE PLAYER STATE ------------------------------------------------------------------------------------------*/

		/**
		 * checkForState
		 */
		checkForState: function () {
			let YTPlayer = this.get(0);
			let $YTPlayer = jQuery(YTPlayer);

			clearInterval(YTPlayer.getState);
			let interval = 100;
			//Checking if player has been removed from the scene
			if (!jQuery.contains(document, YTPlayer)) {
				$YTPlayer.YTPPlayerDestroy();
				clearInterval(YTPlayer.getState);
				clearInterval(YTPlayer.checkForStartAt);
				return
			}

			jQuery.mbYTPlayer.checkForStart(YTPlayer);

			YTPlayer.getState = setInterval(function () {
				let $YTPlayer = jQuery(YTPlayer);

				if (!YTPlayer.isReady)
					return;

				let prog = jQuery(YTPlayer).YTPManageProgress();

				let stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
				stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0;

				if (YTPlayer.currentTime != prog.currentTime) {
					let YTPEvent = jQuery.Event('YTPTime');
					YTPEvent.time = YTPlayer.currentTime;
					jQuery(YTPlayer).trigger(YTPEvent)
				}

				YTPlayer.currentTime = prog.currentTime;
				YTPlayer.totalTime = YTPlayer.player.getDuration();
				if (YTPlayer.player.getVolume() == 0) $YTPlayer.addClass('isMuted');
				else $YTPlayer.removeClass('isMuted');

				if (YTPlayer.opt.showControls)
					if (prog.totalTime) {
						YTPlayer.controlBar.find('.mb_YTPTime').html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + ' / ' + jQuery.mbYTPlayer.formatTime(prog.totalTime))
					} else {
						YTPlayer.controlBar.find('.mb_YTPTime').html('-- : -- / -- : --')
					}

				/**
				 * Manage video pause on window blur
				 */
				if (eval(YTPlayer.opt.stopMovieOnBlur)) {
					if (!document.hasFocus()) {
						if (YTPlayer.state == 1) {
							YTPlayer.hasFocus = false;
							YTPlayer.preventTrigger = true;
							$YTPlayer.YTPPause()
						}
					} else if (document.hasFocus() && !YTPlayer.hasFocus && !(YTPlayer.state == -1 || YTPlayer.state == 0)) {
						YTPlayer.hasFocus = true;
						YTPlayer.preventTrigger = true;
						$YTPlayer.YTPPlay()
					}
				}

				/**
				 * Manage video pause if not on screen
				 */
				if (YTPlayer.opt.playOnlyIfVisible) {
					let isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
					if (!isOnScreen && YTPlayer.state == 1) {
						YTPlayer.isOnScreen = false;
						$YTPlayer.YTPPause()
					} else if (isOnScreen && !YTPlayer.isOnScreen) {
						YTPlayer.isOnScreen = true;
						YTPlayer.player.playVideo()
					}
				}

				if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact) {
					YTPlayer.controlBar.addClass('compact');
					YTPlayer.isCompact = true;
					if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)
				} else if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact) {
					YTPlayer.controlBar.removeClass('compact');
					YTPlayer.isCompact = false;

					if (!YTPlayer.isMute && YTPlayer.volumeBar)
						YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)
				}
				// the video is ended
				if (YTPlayer.player.getPlayerState() > 0 && ((parseFloat(YTPlayer.player.getDuration() - (YTPlayer.opt.fadeOnStartTime / 1000)) < YTPlayer.player.getCurrentTime()) || (stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) >= stopAt))) {

					if (YTPlayer.isEnded)
						return;

					YTPlayer.isEnded = true;

					setTimeout(function () {
						YTPlayer.isEnded = false
					}, 1000);

					if (YTPlayer.isList) {
						if (!YTPlayer.opt.loop || (YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)) {
							YTPlayer.player.loopTime = undefined;
							clearInterval(YTPlayer.getState);
							let YTPEnd = jQuery.Event('YTPEnd');
							YTPEnd.time = YTPlayer.currentTime;
							jQuery(YTPlayer).trigger(YTPEnd);
							return
						}
					} else if (!YTPlayer.opt.loop || (YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1)) {
						YTPlayer.player.loopTime = undefined;

						YTPlayer.state = 2;

						$YTPlayer.changeCoverImage(YTPlayer);

						jQuery(YTPlayer).YTPPause();
						YTPlayer.wrapper.CSSAnimate({
							opacity: 0
						}, YTPlayer.opt.fadeOnStartTime, function () {

							if (YTPlayer.controlBar.length)
								YTPlayer.controlBar.find('.mb_YTPPlayPause').html(jQuery.mbYTPlayer.controls.play);

							$YTPlayer.changeCoverImage();

							let YTPEnd = jQuery.Event('YTPEnd');
							YTPEnd.time = YTPlayer.currentTime;
							jQuery(YTPlayer).trigger(YTPEnd);
							YTPlayer.player.seekTo(YTPlayer.opt.startAt, true);
						});
						return
					}

					YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1;
					YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1;
					YTPlayer.preventTrigger = true;
					YTPlayer.state = 2;
					YTPlayer.player.seekTo(YTPlayer.opt.startAt, true)
				}
			}, interval)
		},

		/**
		 * checkForStart
		 * @param YTPlayer
		 */
		checkForStart: function (YTPlayer) {
			let $YTPlayer = jQuery(YTPlayer);

			/* If the player has been removed from scene destroy it */
			if (!jQuery.contains(document, YTPlayer)) {
				$YTPlayer.YTPPlayerDestroy();
				return
			}

			/* CREATE CONTROL BAR */
			jQuery.mbYTPlayer.buildControls(YTPlayer);

			if (YTPlayer.overlay)
				if (YTPlayer.opt.addRaster) {
					let classN = YTPlayer.opt.addRaster == 'dot' ? 'raster-dot' : 'raster';
					YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + ' retina' : classN)
				} else {
					YTPlayer.overlay.removeClass(function (index, classNames) {
						// change the list into an array
						let current_classes = classNames.split(' '),
							// array of classes which are to be removed
							classes_to_remove = [];
						jQuery.each(current_classes, function (index, class_name) {
							// if the classname begins with bg add it to the classes_to_remove array
							if (/raster.*/.test(class_name)) {
								classes_to_remove.push(class_name)
							}
						});
						classes_to_remove.push('retina');
						// turn the array back into a string
						return classes_to_remove.join(' ')
					})
				}

			YTPlayer.preventTrigger = true;
			YTPlayer.state = 2;
			YTPlayer.preventTrigger = true;

			YTPlayer.player.mute();
			YTPlayer.player.playVideo();
			YTPlayer.isStarting = true;

			let startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;

			YTPlayer.preventTrigger = true;
			YTPlayer.checkForStartAt = setInterval(function () {

				YTPlayer.player.mute();
				YTPlayer.player.seekTo(startAt, true);

				let canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();

				if (jQuery.browser.mobile)
					canPlayVideo = true;

				if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
					YTPlayer.start_from_last = null;

					YTPlayer.preventTrigger = true;
					$YTPlayer.YTPPause();

					clearInterval(YTPlayer.checkForStartAt);

					if (typeof YTPlayer.opt.onReady == 'function')
						YTPlayer.opt.onReady(YTPlayer);

					YTPlayer.isReady = true;

					$YTPlayer.YTPRemoveFilter();

					if (YTPlayer.opt.addFilters) {
						$YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters)
					} else {
						$YTPlayer.YTPApplyFilters()
					}
					$YTPlayer.YTPEnableFilters();
					let YTPready = jQuery.Event('YTPReady');
					YTPready.time = YTPlayer.currentTime;
					$YTPlayer.trigger(YTPready);

					YTPlayer.state = 2;

					if (!YTPlayer.opt.mute) {

						if (YTPlayer.opt.autoPlay) {
							console.debug('We muted the audio to make the video \'auto-play\' according with the latest vendor policy. ' +
								'The audio will unmute at the first user interaction with the page');
							YTPlayer.player.mute();
							YTPlayer.forcedMuted = true;
							/**
							 * If autoPlay is set to true and mute is set to false
							 * Browsers will not auto-play
							 * Start playing audio after the first click
							 */
							jQuery(document).on('mousedown.YTPstartAudio', function () {
								if (YTPlayer.forcedMuted){
									console.debug("AAAAAAA");
									YTPlayer.player.unMute();
									YTPlayer.forcedMuted=false;
									jQuery(document).off('mousedown.YTPstartAudio')
								}
							});

							jQuery(window).on("scroll", function(){
								console.debug("AAAAA")
							})

						} else {
							YTPlayer.player.unMute()
						}

					} else {
						$YTPlayer.YTPMute()
					}

					if (typeof _gaq != 'undefined' && eval(YTPlayer.opt.gaTrack))
						_gaq.push(['_trackEvent', 'YTPlayer', 'Play', (YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString())]);
					else if (typeof ga != 'undefined' && eval(YTPlayer.opt.gaTrack))
						ga('send', 'event', 'YTPlayer', 'play', (YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()));

					if (YTPlayer.opt.autoPlay) {

						let YTPStart = jQuery.Event('YTPStart');
						YTPStart.time = YTPlayer.currentTime;
						jQuery(YTPlayer).trigger(YTPStart);

						YTPlayer.isStarting = false;

						/* Fix for Safari freeze */
						if (jQuery.mbBrowser.os.name === 'mac' && jQuery.mbBrowser.safari) {
							jQuery('body').one('mousedown.YTPstart', function () {
								$YTPlayer.YTPPlay()
							})
						}
						$YTPlayer.YTPPlay();
						console.timeEnd(YTPTimerLabels.startPlaying)
					} else {
						YTPlayer.preventTrigger = true;
						$YTPlayer.YTPPause();

						if (YTPlayer.start_from_last)
							YTPlayer.player.seekTo(startAt, true);

						setTimeout(function () {
							YTPlayer.preventTrigger = true;
							$YTPlayer.YTPPause();

							if (!YTPlayer.isPlayer) {
								if (!YTPlayer.opt.coverImage) {
									jQuery(YTPlayer.playerEl).CSSAnimate({
										opacity: 1
									}, YTPlayer.opt.fadeOnStartTime);
									YTPlayer.wrapper.CSSAnimate({
										opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
									}, YTPlayer.opt.fadeOnStartTime)
								} else {
									YTPlayer.wrapper.css({opacity: 0});
									setTimeout(function () {
										$YTPlayer.changeCoverImage()
									}, YTPlayer.opt.fadeOnStartTime)
								}
							}
							YTPlayer.isStarting = false
						}, 500);

						if (YTPlayer.controlBar.length)
							YTPlayer.controlBar.find('.mb_YTPPlayPause').html(jQuery.mbYTPlayer.controls.play)
					}

					if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && (YTPlayer.loading && YTPlayer.loading.length)) {
						YTPlayer.loading.html('Ready');
						setTimeout(function () {
							YTPlayer.loading.fadeOut()
						}, 100)
					}

					if (YTPlayer.controlBar && YTPlayer.controlBar.length)
						YTPlayer.controlBar.slideDown(1000)
				}

				if (jQuery.mbBrowser.os.name === 'mac' && jQuery.mbBrowser.safari) {
					YTPlayer.player.playVideo();
					if (startAt >= 0)
						YTPlayer.player.seekTo(startAt, true)
				}

			}, 100);

			return $YTPlayer
		},

		/* TIME METHODS -------------------------------------------------------------------------------------------*/

		/**
		 * getTime
		 * @returns {string} time
		 */
		getTime: function () {
			let YTPlayer = this.get(0);
			return jQuery.mbYTPlayer.formatTime(YTPlayer.currentTime)
		},

		/**
		 * getTotalTime
		 * @returns {string} total time
		 */
		getTotalTime: function () {
			let YTPlayer = this.get(0);
			return jQuery.mbYTPlayer.formatTime(YTPlayer.totalTime)
		},

		/**
		 * formatTime
		 * @param s
		 * @returns {string}
		 */
		formatTime: function (s) {
			let min = Math.floor(s / 60);
			let sec = Math.floor(s - (60 * min));
			return (min <= 9 ? '0' + min : min) + ' : ' + (sec <= 9 ? '0' + sec : sec)
		},

		/* PLAYER POSITION AND SIZE OPTIMIZATION-------------------------------------------------------------------------------------------*/

		/**
		 * setAnchor
		 * @param anchor
		 */
		setAnchor: function (anchor) {
			let $YTplayer = this;
			$YTplayer.optimizeDisplay(anchor)
		},

		/**
		 * getAnchor
		 */
		getAnchor: function () {
			let YTPlayer = this.get(0);
			return YTPlayer.opt.anchor
		},

		/**
		 * setAbundance
		 * @param val
		 * @param updateOptions
		 * @returns {jQuery.mbYTPlayer}
		 */
		setAbundance: function (val, updateOptions) {
			let YTPlayer = this.get(0);
			let $YTPlayer = this;
			if (updateOptions)
				YTPlayer.opt.abundance = val;
			$YTPlayer.optimizeDisplay(YTPlayer.opt.anchor, val);
			return $YTPlayer
		},

		/**
		 * getAbundance
		 * @returns {*}
		 */
		getAbundance: function () {
			let YTPlayer = this.get(0);
			return YTPlayer.opt.abundance
		},

		/**
		 * setOption
		 * @param opt
		 * @param val
		 * @returns {jQuery.mbYTPlayer}
		 */
		setOption: function (opt, val) {
			let YTPlayer = this.get(0);
			let $YTPlayer = this;
			YTPlayer.opt[opt] = val;
			return $YTPlayer
		}
	};

	/**
	 * optimizeDisplay
	 * @param anchor
	 * @param abundanceX
	 */
	jQuery.fn.optimizeDisplay = function (anchor, abundanceX) {

		let YTPlayer = this.get(0);
		let vid = {};
		let el = YTPlayer.wrapper;
		let iframe = jQuery(YTPlayer.playerEl);

		YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor;

		// console.debug(YTPlayer.opt.anchor);

		YTPlayer.opt.anchor = typeof YTPlayer.opt.anchor != 'undefined ' ? YTPlayer.opt.anchor : 'center,center';
		let YTPAlign = YTPlayer.opt.anchor.split(',');
		let ab = abundanceX ? abundanceX : YTPlayer.opt.abundance;

		if (YTPlayer.opt.optimizeDisplay) {
			let abundance = el.height() * ab;
			let win = {};
			win.width = el.outerWidth();
			win.height = el.outerHeight() + abundance;

			YTPlayer.opt.ratio = YTPlayer.opt.ratio === 'auto' ? 16 / 9 : YTPlayer.opt.ratio;
			YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio);

			vid.width = win.width + abundance;
			vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio);
			vid.marginTop = Math.ceil(-((vid.height - win.height + abundance) / 2));
			vid.marginLeft = -(abundance / 2);
			let lowest = vid.height < win.height;

			if (lowest) {
				vid.height = win.height + abundance;
				vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio);
				vid.marginTop = -(abundance / 2);
				vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2))
			}

			for (let a in YTPAlign) {
				if (YTPAlign.hasOwnProperty(a)) {
					let al = YTPAlign[a].replace(/ /g, '');

					switch (al) {
						case 'top':
							vid.marginTop = -abundance;
							break;
						case 'bottom':
							vid.marginTop = Math.ceil(-(vid.height - win.height) - (abundance / 2));
							break;
						case 'left':
							vid.marginLeft = -(abundance);
							break;
						case 'right':
							vid.marginLeft = Math.ceil(-(vid.width - win.width) + (abundance / 2));
							break
					}

				}
			}

		} else {
			vid.width = '100%';
			vid.height = '100%';
			vid.marginTop = 0;
			vid.marginLeft = 0
		}

		iframe.css({
			width     : vid.width,
			height    : vid.height,
			marginTop : vid.marginTop,
			marginLeft: vid.marginLeft,
			maxWidth  : 'initial'
		})


	};


	/* UTILITIES -----------------------------------------------------------------------------------------------------------------------*/

	/**
	 * shuffle
	 * @param arr
	 * @returns {Array|string|Blob|*}
	 *
	 */
	jQuery.shuffle = function (arr) {
		let newArray = arr.slice();
		let len = newArray.length;
		let i = len;
		while (i--) {
			let p = parseInt(Math.random() * len);
			let t = newArray[i];
			newArray[i] = newArray[p];
			newArray[p] = t
		}
		return newArray;
	};

	/**
	 * Unselectable
	 * @returns {*}
	 */
	jQuery.fn.unselectable = function () {
		return this.each(function () {
			jQuery(this).css({
				'-moz-user-select'   : 'none',
				'-webkit-user-select': 'none',
				'user-select'        : 'none'
			}).attr('unselectable', 'on')
		})
	};

	/* EXTERNAL METHODS -----------------------------------------------------------------------------------------------------------------------*/

	jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer;
	jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;

	jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState;

	jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer;
	jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID;
	jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID;
	jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo;
	jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy;

	jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play;
	jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay;
	jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop;
	jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause;
	jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo;

	jQuery.fn.YTPGetPlaybackRate = jQuery.mbYTPlayer.getPlaybackRate;
	jQuery.fn.YTPSetPlaybackRate = jQuery.mbYTPlayer.setPlaybackRate;

	jQuery.fn.changeCoverImage = jQuery.mbYTPlayer.changeCoverImage;

	jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist;
	jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext;
	jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev;
	jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex;

	jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute;
	jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute;
	jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume;
	jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume;
	jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume;

	jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData;
	jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen;
	jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops;
	jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress;

	jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
	jQuery.fn.YTPGetVideoQuality = jQuery.mbYTPlayer.getVideoQuality;

	jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter;
	jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters;
	jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter;
	jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters;
	jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter;
	jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters;
	jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters;
	jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters;

	jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime;
	jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime;

	jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask;
	jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask;
	jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask;

	jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance;
	jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance;

	jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor;
	jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor;

	jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption

})(jQuery, ytp);
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.browser.min.js                                                                                                                   _
 _ last modified: 24/05/17 19.56                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matbicoc@gmail.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2017. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/
var nAgt=navigator.userAgent;jQuery.browser=jQuery.browser||{};jQuery.browser.mozilla=!1;jQuery.browser.webkit=!1;jQuery.browser.opera=!1;jQuery.browser.safari=!1;jQuery.browser.chrome=!1;jQuery.browser.androidStock=!1;jQuery.browser.msie=!1;jQuery.browser.edge=!1;jQuery.browser.ua=nAgt;function isTouchSupported(){var a=nAgt.msMaxTouchPoints,e="ontouchstart"in document.createElement("div");return a||e?!0:!1}
var getOS=function(){var a={version:"Unknown version",name:"Unknown OS"};-1!=navigator.appVersion.indexOf("Win")&&(a.name="Windows");-1!=navigator.appVersion.indexOf("Mac")&&0>navigator.appVersion.indexOf("Mobile")&&(a.name="Mac");-1!=navigator.appVersion.indexOf("Linux")&&(a.name="Linux");/Mac OS X/.test(nAgt)&&!/Mobile/.test(nAgt)&&(a.version=/Mac OS X ([\._\d]+)/.exec(nAgt)[1],a.version=a.version.replace(/_/g,".").substring(0,5));/Windows/.test(nAgt)&&(a.version="Unknown.Unknown");/Windows NT 5.1/.test(nAgt)&&
(a.version="5.1");/Windows NT 6.0/.test(nAgt)&&(a.version="6.0");/Windows NT 6.1/.test(nAgt)&&(a.version="6.1");/Windows NT 6.2/.test(nAgt)&&(a.version="6.2");/Windows NT 10.0/.test(nAgt)&&(a.version="10.0");/Linux/.test(nAgt)&&/Linux/.test(nAgt)&&(a.version="Unknown.Unknown");a.name=a.name.toLowerCase();a.major_version="Unknown";a.minor_version="Unknown";"Unknown.Unknown"!=a.version&&(a.major_version=parseFloat(a.version.split(".")[0]),a.minor_version=parseFloat(a.version.split(".")[1]));return a};
jQuery.browser.os=getOS();jQuery.browser.hasTouch=isTouchSupported();jQuery.browser.name=navigator.appName;jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion);jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var nameOffset,verOffset,ix;
if(-1!=(verOffset=nAgt.indexOf("Opera")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+6),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8));else if(-1!=(verOffset=nAgt.indexOf("OPR")))jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=nAgt.substring(verOffset+4);else if(-1!=(verOffset=nAgt.indexOf("MSIE")))jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",
	jQuery.browser.fullVersion=nAgt.substring(verOffset+5);else if(-1!=nAgt.indexOf("Trident")){jQuery.browser.msie=!0;jQuery.browser.name="Microsoft Internet Explorer";var start=nAgt.indexOf("rv:")+3,end=start+4;jQuery.browser.fullVersion=nAgt.substring(start,end)}else-1!=(verOffset=nAgt.indexOf("Edge"))?(jQuery.browser.edge=!0,jQuery.browser.name="Microsoft Edge",jQuery.browser.fullVersion=nAgt.substring(verOffset+5)):-1!=(verOffset=nAgt.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.chrome=
	!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1<nAgt.indexOf("mozilla/5.0")&&-1<nAgt.indexOf("android ")&&-1<nAgt.indexOf("applewebkit")&&!(-1<nAgt.indexOf("chrome"))?(verOffset=nAgt.indexOf("Chrome"),jQuery.browser.webkit=!0,jQuery.browser.androidStock=!0,jQuery.browser.name="androidStock",jQuery.browser.fullVersion=nAgt.substring(verOffset+7)):-1!=(verOffset=nAgt.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name=
	"Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("AppleWebkit"))?(jQuery.browser.webkit=!0,jQuery.browser.safari=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=nAgt.substring(verOffset+7),-1!=(verOffset=nAgt.indexOf("Version"))&&(jQuery.browser.fullVersion=nAgt.substring(verOffset+8))):-1!=(verOffset=nAgt.indexOf("Firefox"))?(jQuery.browser.mozilla=
	!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=nAgt.substring(verOffset+8)):(nameOffset=nAgt.lastIndexOf(" ")+1)<(verOffset=nAgt.lastIndexOf("/"))&&(jQuery.browser.name=nAgt.substring(nameOffset,verOffset),jQuery.browser.fullVersion=nAgt.substring(verOffset+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName));
-1!=(ix=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));-1!=(ix=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix));jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10);isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10));
jQuery.browser.version=jQuery.browser.majorVersion;jQuery.browser.android=/Android/i.test(nAgt);jQuery.browser.blackberry=/BlackBerry|BB|PlayBook/i.test(nAgt);jQuery.browser.ios=/iPhone|iPad|iPod|webOS/i.test(nAgt);jQuery.browser.operaMobile=/Opera Mini/i.test(nAgt);jQuery.browser.windowsMobile=/IEMobile|Windows Phone/i.test(nAgt);jQuery.browser.kindle=/Kindle|Silk/i.test(nAgt);
jQuery.browser.mobile=jQuery.browser.android||jQuery.browser.blackberry||jQuery.browser.ios||jQuery.browser.windowsMobile||jQuery.browser.operaMobile||jQuery.browser.kindle;jQuery.isMobile=jQuery.browser.mobile;jQuery.isTablet=jQuery.browser.mobile&&765<jQuery(window).width();jQuery.isAndroidDefault=jQuery.browser.android&&!/chrome/i.test(nAgt);jQuery.mbBrowser=jQuery.browser;
jQuery.browser.versionCompare=function(a,e){if("stringstring"!=typeof a+typeof e)return!1;for(var c=a.split("."),d=e.split("."),b=0,f=Math.max(c.length,d.length);b<f;b++){if(c[b]&&!d[b]&&0<parseInt(c[b])||parseInt(c[b])>parseInt(d[b]))return 1;if(d[b]&&!c[b]&&0<parseInt(d[b])||parseInt(c[b])<parseInt(d[b]))return-1}return 0};
;
/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.CSSAnimate.min.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matbicoc@gmail.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 26/03/14 21.40
 *  *****************************************************************************
 */

jQuery.support.CSStransition=function(){var d=(document.body||document.documentElement).style;return void 0!==d.transition||void 0!==d.WebkitTransition||void 0!==d.MozTransition||void 0!==d.MsTransition||void 0!==d.OTransition}();function uncamel(d){return d.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function setUnit(d,a){return"string"!==typeof d||d.match(/^[\-0-9\.]+jQuery/)?""+d+a:d}
function setFilter(d,a,b){var c=uncamel(a),g=jQuery.browser.mozilla?"":jQuery.CSS.sfx;d[g+"filter"]=d[g+"filter"]||"";b=setUnit(b>jQuery.CSS.filters[a].max?jQuery.CSS.filters[a].max:b,jQuery.CSS.filters[a].unit);d[g+"filter"]+=c+"("+b+") ";delete d[a]}
jQuery.CSS={name:"mb.CSSAnimate",author:"Matteo Bicocchi",version:"2.0.0",transitionEnd:"transitionEnd",sfx:"",filters:{blur:{min:0,max:100,unit:"px"},brightness:{min:0,max:400,unit:"%"},contrast:{min:0,max:400,unit:"%"},grayscale:{min:0,max:100,unit:"%"},hueRotate:{min:0,max:360,unit:"deg"},invert:{min:0,max:100,unit:"%"},saturate:{min:0,max:400,unit:"%"},sepia:{min:0,max:100,unit:"%"}},normalizeCss:function(d){var a=jQuery.extend(!0,{},d);jQuery.browser.webkit||jQuery.browser.opera?jQuery.CSS.sfx=
		"-webkit-":jQuery.browser.mozilla?jQuery.CSS.sfx="-moz-":jQuery.browser.msie&&(jQuery.CSS.sfx="-ms-");jQuery.CSS.sfx="";for(var b in a){"transform"===b&&(a[jQuery.CSS.sfx+"transform"]=a[b],delete a[b]);"transform-origin"===b&&(a[jQuery.CSS.sfx+"transform-origin"]=d[b],delete a[b]);"filter"!==b||jQuery.browser.mozilla||(a[jQuery.CSS.sfx+"filter"]=d[b],delete a[b]);"blur"===b&&setFilter(a,"blur",d[b]);"brightness"===b&&setFilter(a,"brightness",d[b]);"contrast"===b&&setFilter(a,"contrast",d[b]);"grayscale"===
b&&setFilter(a,"grayscale",d[b]);"hueRotate"===b&&setFilter(a,"hueRotate",d[b]);"invert"===b&&setFilter(a,"invert",d[b]);"saturate"===b&&setFilter(a,"saturate",d[b]);"sepia"===b&&setFilter(a,"sepia",d[b]);if("x"===b){var c=jQuery.CSS.sfx+"transform";a[c]=a[c]||"";a[c]+=" translateX("+setUnit(d[b],"px")+")";delete a[b]}"y"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" translateY("+setUnit(d[b],"px")+")",delete a[b]);"z"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" translateZ("+
		setUnit(d[b],"px")+")",delete a[b]);"rotate"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" rotate("+setUnit(d[b],"deg")+")",delete a[b]);"rotateX"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" rotateX("+setUnit(d[b],"deg")+")",delete a[b]);"rotateY"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" rotateY("+setUnit(d[b],"deg")+")",delete a[b]);"rotateZ"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" rotateZ("+setUnit(d[b],"deg")+")",delete a[b]);"scale"===b&&
(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" scale("+setUnit(d[b],"")+")",delete a[b]);"scaleX"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" scaleX("+setUnit(d[b],"")+")",delete a[b]);"scaleY"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" scaleY("+setUnit(d[b],"")+")",delete a[b]);"scaleZ"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" scaleZ("+setUnit(d[b],"")+")",delete a[b]);"skew"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" skew("+setUnit(d[b],
		"deg")+")",delete a[b]);"skewX"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" skewX("+setUnit(d[b],"deg")+")",delete a[b]);"skewY"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" skewY("+setUnit(d[b],"deg")+")",delete a[b]);"perspective"===b&&(c=jQuery.CSS.sfx+"transform",a[c]=a[c]||"",a[c]+=" perspective("+setUnit(d[b],"px")+")",delete a[b])}return a},getProp:function(d){var a=[],b;for(b in d)0>a.indexOf(b)&&a.push(uncamel(b));return a.join(",")},animate:function(d,a,b,c,g){return this.each(function(){function n(){e.called=
		!0;e.CSSAIsRunning=!1;h.off(jQuery.CSS.transitionEnd+"."+e.id);clearTimeout(e.timeout);h.css(jQuery.CSS.sfx+"transition","");"function"==typeof g&&g.apply(e);"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null)}var e=this,h=jQuery(this);e.id=e.id||"CSSA_"+(new Date).getTime();var k=k||{type:"noEvent"};if(e.CSSAIsRunning&&e.eventType==k.type&&!jQuery.browser.msie&&9>=jQuery.browser.version)e.CSSqueue=function(){h.CSSAnimate(d,a,b,c,g)};else if(e.CSSqueue=null,e.eventType=k.type,0!==h.length&&
		d){d=jQuery.normalizeCss(d);e.CSSAIsRunning=!0;"function"==typeof a&&(g=a,a=jQuery.fx.speeds._default);"function"==typeof b&&(c=b,b=0);"string"==typeof b&&(g=b,b=0);"function"==typeof c&&(g=c,c="cubic-bezier(0.65,0.03,0.36,0.72)");if("string"==typeof a)for(var l in jQuery.fx.speeds)if(a==l){a=jQuery.fx.speeds[l];break}else a=jQuery.fx.speeds._default;a||(a=jQuery.fx.speeds._default);"string"===typeof g&&(c=g,g=null);if(jQuery.support.CSStransition){var f={"default":"ease","in":"ease-in",out:"ease-out",
	"in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",
	easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};
	f[c]&&(c=f[c]);h.off(jQuery.CSS.transitionEnd+"."+e.id);f=jQuery.CSS.getProp(d);var m={};jQuery.extend(m,d);m[jQuery.CSS.sfx+"transition-property"]=f;m[jQuery.CSS.sfx+"transition-duration"]=a+"ms";m[jQuery.CSS.sfx+"transition-delay"]=b+"ms";m[jQuery.CSS.sfx+"transition-timing-function"]=c;setTimeout(function(){h.one(jQuery.CSS.transitionEnd+"."+e.id,n);h.css(m)},1);e.timeout=setTimeout(function(){e.called||!g?(e.called=!1,e.CSSAIsRunning=!1):(h.css(jQuery.CSS.sfx+"transition",""),g.apply(e),e.CSSAIsRunning=
			!1,"function"==typeof e.CSSqueue&&(e.CSSqueue(),e.CSSqueue=null))},a+b+10)}else{for(f in d)"transform"===f&&delete d[f],"filter"===f&&delete d[f],"transform-origin"===f&&delete d[f],"auto"===d[f]&&delete d[f],"x"===f&&(k=d[f],l="left",d[l]=k,delete d[f]),"y"===f&&(k=d[f],l="top",d[l]=k,delete d[f]),"-ms-transform"!==f&&"-ms-filter"!==f||delete d[f];h.delay(b).animate(d,a,g)}}})}};jQuery.fn.CSSAnimate=jQuery.CSS.animate;jQuery.normalizeCss=jQuery.CSS.normalizeCss;
jQuery.fn.css3=function(d){return this.each(function(){var a=jQuery(this),b=jQuery.normalizeCss(d);a.css(b)})};
;/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 jquery.mb.components
 
 file: jquery.mb.simpleSlider.js
 last modified: 11/18/17 7:19 PM
 Version:  3.3.8
 Build:  7562
 
 Open Lab s.r.l., Florence - Italy 
 email:  matteo@open-lab.com
 blog: 	http://pupunzi.open-lab.com
 site: 	http://pupunzi.com
 	http://open-lab.com 
 
 Licences: MIT, GPL
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html
 
 Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi)
 :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

(function ($) {

	$.simpleSlider = {
		defaults: {
			initialval : 0,
			maxval     : 100,
			orientation: "h",
			readonly   : false,
			callback   : false
		},

		events: {
			start: $.browser.mobile ? "touchstart" : "mousedown",
			end  : $.browser.mobile ? "touchend" : "mouseup",
			move : $.browser.mobile ? "touchmove" : "mousemove"
		},

		init: function (opt) {

			return this.each(function () {
				var el = this;
				var $el = $(el);

				$el.addClass("simpleSlider");

				el.opt = {};

				$.extend(el.opt, $.simpleSlider.defaults, opt);
				$.extend(el.opt, $el.data());

				console.debug($el.data());

				var levelClass = el.opt.orientation == "h" ? "horizontal" : "vertical";
				var level = $("<div/>").addClass("level").addClass(levelClass);

				$el.prepend(level);
				el.level = level;

				$el.css({cursor: "default"});

				if (el.opt.maxval == "auto")
					el.opt.maxval = $(el).outerWidth();

				$el.updateSliderVal();

				if (!el.opt.readonly) {

					$el.on($.simpleSlider.events.start, function (e) {

						if ($.browser.mobile)
							e = e.changedTouches[0];

						el.canSlide = true;
						$el.updateSliderVal(e);

						if (el.opt.orientation == "h")
							$el.css({cursor: "col-resize"});
						else
							$el.css({cursor: "row-resize"});

						el.lastVal = el.val;

						if (!$.browser.mobile) {
							e.preventDefault();
							e.stopPropagation();
						}
					});

					$(document).on($.simpleSlider.events.move, function (e) {

						if ($.browser.mobile)
							e = e.changedTouches[0];

						if (!el.canSlide)
							return;

						$(document).css({cursor: "default"});
						$el.updateSliderVal(e);

						if (!$.browser.mobile) {
							e.preventDefault();
							e.stopPropagation();
						}

					}).on($.simpleSlider.events.end, function () {
						$(document).css({cursor: "auto"});
						el.canSlide = false;
						$el.css({cursor: "auto"})
					});

				}
			})
		},

		updateSliderVal: function (e) {

			var $el = this;
			var el = $el.get(0);

			if (!el.opt)
				return;

			el.opt.initialval = typeof el.opt.initialval == "number" ? el.opt.initialval : el.opt.initialval(el);

			var elWidth = $(el).outerWidth();
			var elHeight = $(el).outerHeight();

			el.x = typeof e == "object" ? (e.clientX + document.body.scrollLeft) - $el.offset().left : typeof e == "number" ? (e * elWidth) / el.opt.maxval : (el.opt.initialval * elWidth) / el.opt.maxval;
			el.y = typeof e == "object" ? (e.clientY + document.body.scrollTop) - $el.offset().top : typeof e == "number" ? ((el.opt.maxval - el.opt.initialval - e) * elHeight) / el.opt.maxval : (el.opt.initialval * elHeight) / el.opt.maxval;
			el.y = $el.outerHeight() - el.y;

			el.scaleX = (el.x * el.opt.maxval) / elWidth;
			el.scaleY = (el.y * el.opt.maxval) / elHeight;

			el.outOfRangeX = el.scaleX > el.opt.maxval ? (el.scaleX - el.opt.maxval) : el.scaleX < 0 ? el.scaleX : 0;
			el.outOfRangeY = el.scaleY > el.opt.maxval ? (el.scaleY - el.opt.maxval) : el.scaleY < 0 ? el.scaleY : 0;
			el.outOfRange = el.opt.orientation == "h" ? el.outOfRangeX : el.outOfRangeY;

			if (typeof e != "undefined")
				el.value = el.opt.orientation == "h" ? (el.x >= $el.outerWidth() ? el.opt.maxval : el.x <= 0 ? 0 : el.scaleX) : (el.y >= $el.outerHeight() ? el.opt.maxval : el.y <= 0 ? 0 : el.scaleY);
			else
				el.value = el.opt.orientation == "h" ? el.scaleX : el.scaleY;

			if (el.opt.orientation == "h")
				el.level.width(getPercent(el.x, elWidth) + "%");
			else {
				el.level.height(getPercent(el.y, elHeight));
			}

			function getPercent(val, tot) {
				return Math.floor((val * 100) / tot);
			}

			if (el.lastVal === el.value && ((el.opt.orientation === "h" && (el.x >= $el.outerWidth() || el.x <= 0)) || (el.opt.orientation !== "h" && (el.y >= $el.outerHeight() || el.y <= 0))))
				return;

			if (typeof el.opt.callback === "function")
				el.opt.callback(el);

			el.lastVal = el.value;
		}
	};

	$.fn.simpleSlider = $.simpleSlider.init;
	$.fn.updateSliderVal = $.simpleSlider.updateSliderVal;

})(jQuery);
;/*___________________________________________________________________________________________________________________________________________________
 _ jquery.mb.components                                                                                                                             _
 _                                                                                                                                                  _
 _ file: jquery.mb.storage.min.js                                                                                                                   _
 _ last modified: 24/05/15 16.08                                                                                                                    _
 _                                                                                                                                                  _
 _ Open Lab s.r.l., Florence - Italy                                                                                                                _
 _                                                                                                                                                  _
 _ email: matteo@open-lab.com                                                                                                                       _
 _ site: http://pupunzi.com                                                                                                                         _
 _       http://open-lab.com                                                                                                                        _
 _ blog: http://pupunzi.open-lab.com                                                                                                                _
 _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _
 _                                                                                                                                                  _
 _ Licences: MIT, GPL                                                                                                                               _
 _    http://www.opensource.org/licenses/mit-license.php                                                                                            _
 _    http://www.gnu.org/licenses/gpl.html                                                                                                          _
 _                                                                                                                                                  _
 _ Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);                                                                                              _
 ___________________________________________________________________________________________________________________________________________________*/

(function(d){d.mbCookie={set:function(a,c,f,b){"object"==typeof c&&(c=JSON.stringify(c));b=b?"; domain="+b:"";var e=new Date,d="";0<f&&(e.setTime(e.getTime()+864E5*f),d="; expires="+e.toGMTString());document.cookie=a+"="+c+d+"; path=/"+b},get:function(a){a+="=";for(var c=document.cookie.split(";"),d=0;d<c.length;d++){for(var b=c[d];" "==b.charAt(0);)b=b.substring(1,b.length);if(0==b.indexOf(a))try{return JSON.parse(b.substring(a.length,b.length))}catch(e){return b.substring(a.length,b.length)}}return null},
	remove:function(a){d.mbCookie.set(a,"",-1)}};d.mbStorage={set:function(a,c){"object"==typeof c&&(c=JSON.stringify(c));localStorage.setItem(a,c)},get:function(a){if(localStorage[a])try{return JSON.parse(localStorage[a])}catch(c){return localStorage[a]}else return null},remove:function(a){a?localStorage.removeItem(a):localStorage.clear()}}})(jQuery);
;
/**
 * @file
 * JQuery plugin to generate a jump nav from on-page selectors.
 *
 * @dependency jquery.variable-scroll-to.js
 */
(function($) {

  /**
   * Jump Nav function. Inserts jump nav links into calling element.
   *
   * @param object options
   *   The options can take the following key/value pairs:
   *   - activeClass: The active class to add to the jump nav links when their
   *     associated target element is in the viewport. Defaults to 'jump-nav-active'.
   *   - hideSelector: A selector to hide if there are no jump links to be
   *     added. Defaults to '[js-jump-nav-hide]'.
   *   - isActive: A callback to test whether an item is in the viewport. The
   *     function gets passed a jQuery object of the element in question, and
   *     must return a boolean. Defaults to scrolledPastCenter. See
   *     scrolledPastCenter for more information.
   *   - linkClass: Class to add to the jump link anchor element. Defaults to
   *     'jump-nav'.
   *   - linkWrapper: Markup to wrap the jump nav links in before inserting into
   *     the DOM. Defaults to '<li></li>'.
   *   - maxScrollDuration: The maximum ms duration that a scroll animation will
   *     take. Defaults to 1000. See jquery.variable-scroll-to.js for more info.
   *   - minRequired: The minimum number of links required to generate the jump
   *     nav. Defaults to 0.
   *   - targetSelectors: An array of target selectors to search the DOM for.
   *     Matched selectors are used to create the jump links. Defaults to
   *     '[js-jump-nav-heading]'.
   */
  $.fn.jumpNav = function(options = {}) {

    /**
     * Check if an element has scrolled past the viewport center.
     *
     * @param jQuery $element
     *   The element to check against.
     *
     * @return bool
     */
    var scrolledPastCenter = function($element) {
      var scrollPositionMiddle = Math.max(0, Math.min($document.scrollTop(), $document.height() - windowHeight)) + windowHeight / 2,
          elementMiddle = $element.offset().top + $element.outerHeight() / 2;
      return elementMiddle < scrollPositionMiddle;
    }

    // Global scope variables.
    var $container = $(this),
        $window = $(window),
        $document = $(document),
        $targets = $([]),
        numTargets = 0,
        showNav,
        ids = [],
        $links = $([]),
        windowHeight = $window.height();

    // The default options.
    var defaults = {
      activeClass: 'jump-nav--active',
      hideSelector: '[js-jump-nav-hide]',
      isActive: scrolledPastCenter,
      linkClass: 'jump-nav',
      linkWrapper: '<li></li>',
      maxScrollDuration: 1000,
      minRequired: 0,
      targetSelectors: [
        '[js-jump-nav-heading]',
      ],
    };

    // Create options from supplied and defaults.
    options = $.extend({}, defaults, options);

    // Get all the possible targets on the page.
    $targets = $(options.targetSelectors.join(', '));

    // Get the number of targets.
    numTargets = $targets.length;

    // Flag whether the jump nav should be shown. The jump nav is shown if
    // there are targets, or if the number of targets is greater than the
    // minimum number reqquired.
    showNav = numTargets && options.minRequired <= numTargets;

    // Hide this element, if it's been determined to be unnecessary.
    $(options.hideSelector).css('display', showNav ? 'initial' : 'none');

    // Empty the container, in case the links need to be regenerated later.
    $container.empty();

    // If there are no jump nav targets, or the number of targets is less than
    // the minimum required number, stop this altogether.
    if (!showNav) {
      return;
    }

    // Reverse the target order, because we usually will want to work backwards
    // up the DOM.
    $targets = $($targets.get().reverse());

    // Process each of the targets, doing the following things:
    //   1. Get the id of the target, or calculate one from the text.
    //   2. Append a random string to the id if it's a duplicate.
    //   3. Create the link markup and object.
    //   4. Add the link to the $links object.
    //   5. Add click handler to the link.
    //   6. Wrap the link and add it to the DOM.
    $targets.each(function() {
      var $target = $(this),
          text = $target.text(),
          id,
          $link,
          existingIdIndex;

      // No label, or just a blank label, so stop.
      if (!text.length || !text.trim()) {
        return;
      }

      // Get the id if there is one on the target, or generate the id and add it
      // to the target if there is not one already.
      if (typeof $target.attr('id') === 'undefined') {
        id = text.toLowerCase().replace(/[^a-z]/g, '-');
        $target.attr('id', id);
      } else {
        id = $target.attr('id');
      }

      // If this id is a duplicate, add a random number string after and use
      // this id instead, and replace the target id with the calculated one.
      if (-1 !== ids.indexOf(id)) {
        id = id + '-' + window.crypto.getRandomValues(new Uint32Array(1)).toString();
        $target.attr('id', id);
      }

      // Push the id we're using into the ids array, so we can look up
      // duplicate ids quickly on subsequent iterations.
      ids.push(id);

      // Create the link.
      $link = $('<a href="#' + id + '" class="' + options.linkClass + '">' + text + '</a>');

      // Add the link to the links object for later use in determining which
      // link should be highlighted on scroll.
      $links = $links.add($link);

      // Add click handlers to the link for scrolling. Links scroll to just
      // above the middle of the page.
      $link.click(function() {
        $('#' + id).variableScrollTo(windowHeight / -2.5, options.maxScrollDuration);
      });

      // Wrap the link in the wrapping elements.
      $link = $link.wrap(options.linkWrapper).parent();

      // Add the link to the container. Use prepend because targets are in
      // reverse order.
      $container.prepend($link);
    });

    // On user scroll, recalculate & update the jump nav.
    $window.scroll(function() {
      updateJumpNav();
    });

    // Calculate the initial state of the jump nav.
    updateJumpNav();

    // On resize, update the window height.
    $window.resize(function() {
      windowHeight = $window.height();
    });

    /**
     * Update the active item, and set the others as inactive.
     */
    function updateJumpNav() {
      for (i = 0; i < numTargets; i++) {
        // Set the item active according according to the callback, or if it's
        // the last item (no active items were found; the page is higher, so set
        // the first). The $targets object is reversed, so this checks from the
        // bottom up.
        if (options.isActive($target = $targets.eq(i)) || i === numTargets - 1) {
          // Get the id from the target, and update the links accordingly.
          var id = $target.attr('id');
          $links.filter('[href="#' + id + '"]').addClass(options.activeClass);
          $links.filter(':not([href="#' + id + '"])').removeClass(options.activeClass);
          // We found one, so stop looking.
          return;
        }
      }
    }
  }

})(jQuery)
;
/**
 * @file
 * jQuery plugin to smooth scroll to an anchor,
 * with a speed relative to distance traveled.
 */
(function($) {

  var $page = $('html, body'),
      stopScrollEvents = 'scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove';

  /**
   * Variable scroll function.
   *
   * @param int offset (default: 0)
   *    An offset to add to the scroll target. Negative is up the page.
   * @param int maxDuration (default: 1000)
   *    The maximum duration of the scroll animation, in milliseconds.
   * @return bool
   *    True if the animation runs, false otherwise.
   */
  $.fn.variableScrollTo = function(offset = 0, maxDuration = 1000) {

    var $target = $(this);

    if (1 !== $target.length) {
      return false;
    }

    var windowHeight = $(window).height(),
        documentHeight = $(document).height(),
        maxOffset = documentHeight - windowHeight,
        currentPosition = $(window).scrollTop(),
        targetPosition = $target.offset().top + offset,
        scrollDistance = Math.abs(currentPosition - targetPosition);
        calculatedSpeed = maxDuration * (scrollDistance / maxOffset);

    // Enforce the maximums. The speed/distance calculations
    // above don't take into account the document height.
    scrollDistance = Math.min(maxOffset, scrollDistance);
    calculatedSpeed = Math.min(maxDuration, calculatedSpeed);

    // Allow the stopping of scroll behaviors by events in the stopScrollEvents
    // variable. We don't want to continue scrolling if the user decides to
    // interact with the page. We also don't want to continue the current
    // animation if the user interacts with a new scroll animation before the
    // current animation is finished.
    $page.on(stopScrollEvents, function() {
      $page.stop();
    })

    $page.animate({
      scrollTop: targetPosition,
    }, calculatedSpeed, function() {
      $page.off(stopScrollEvents);
    });

    return true;
  }

})(jQuery);
;
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);;
/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});;
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.12
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(a){"use strict";var b,c=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=a,!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(c,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(c,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(c,arguments)},this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(c,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(c,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(c,arguments)},FastClick.notNeeded(a)||(this.deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){"use strict";return this.deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){"use strict";var b;this.deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],this.deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!this.deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<200&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),this.deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||this.deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.sendClick(g,a),this.deviceIsIOS4&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0:!0},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;this.deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b,c;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!FastClick.prototype.deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(c>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a){"use strict";return new FastClick(a)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;;
(function($){var defaults={topSpacing:0,bottomSpacing:0,className:'is-sticky',wrapperClassName:'sticky-wrapper',center:false,getWidthFrom:'',responsiveWidth:false},$window=$(window),$document=$(document),sticked=[],windowHeight=$window.height(),scroller=function(){var scrollTop=$window.scrollTop(),documentHeight=$document.height(),dwh=documentHeight-windowHeight,extra=(scrollTop>dwh)?dwh-scrollTop:0;for(var i=0;i<sticked.length;i++){var s=sticked[i],elementTop=s.stickyWrapper.offset().top,etse=elementTop-s.topSpacing-extra;if(scrollTop<=etse){if(s.currentTop!==null){s.stickyElement.css('width','').css('position','').css('top','');s.stickyElement.trigger('sticky-end',[s]).parent().removeClass(s.className);s.currentTop=null}}else{var newTop=documentHeight-s.stickyElement.outerHeight()-s.topSpacing-s.bottomSpacing-scrollTop-extra;if(newTop<0){newTop=newTop+s.topSpacing}else newTop=s.topSpacing;if(s.currentTop!=newTop){s.stickyElement.css('width',s.stickyElement.width()).css('position','fixed').css('top',newTop);if(typeof s.getWidthFrom!=='undefined')s.stickyElement.css('width',$(s.getWidthFrom).width());s.stickyElement.trigger('sticky-start',[s]).parent().addClass(s.className);s.currentTop=newTop}}}},resizer=function(){windowHeight=$window.height();for(var i=0;i<sticked.length;i++){var s=sticked[i];if(typeof s.getWidthFrom!=='undefined'&&s.responsiveWidth===true)s.stickyElement.css('width',$(s.getWidthFrom).width())}},methods={init:function(options){var o=$.extend({},defaults,options);return this.each(function(){var stickyElement=$(this),stickyId=stickyElement.attr('id'),wrapperId=stickyId?stickyId+'-'+defaults.wrapperClassName:defaults.wrapperClassName,wrapper=$('<div></div>').attr('id',stickyId+'-sticky-wrapper').addClass(o.wrapperClassName);stickyElement.wrapAll(wrapper);if(o.center)stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});if(stickyElement.css("float")=="right")stickyElement.css({"float":"none"}).parent().css({"float":"right"});var stickyWrapper=stickyElement.parent();stickyWrapper.css('height',stickyElement.outerHeight());sticked.push({topSpacing:o.topSpacing,bottomSpacing:o.bottomSpacing,stickyElement:stickyElement,currentTop:null,stickyWrapper:stickyWrapper,className:o.className,getWidthFrom:o.getWidthFrom,responsiveWidth:o.responsiveWidth})})},update:scroller,unstick:function(options){return this.each(function(){var unstickyElement=$(this),removeIdx=-1;for(var i=0;i<sticked.length;i++)if(sticked[i].stickyElement.get(0)==unstickyElement.get(0))removeIdx=i;if(removeIdx!=-1){sticked.splice(removeIdx,1);unstickyElement.unwrap();unstickyElement.removeAttr('style')}})}};if(window.addEventListener){window.addEventListener('scroll',scroller,false);window.addEventListener('resize',resizer,false)}else if(window.attachEvent){window.attachEvent('onscroll',scroller);window.attachEvent('onresize',resizer)};$.fn.sticky=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments)}else $.error('Method '+method+' does not exist on jQuery.sticky')};$.fn.unstick=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.unstick.apply(this,arguments)}else $.error('Method '+method+' does not exist on jQuery.sticky')};$(function(){setTimeout(scroller,0)})})(jQuery);
/* MediaMatch v.2.0.2 - Testing css media queries in Javascript. Authors & copyright (c) 2013: WebLinc, David Knight. */

window.matchMedia||(window.matchMedia=function(c){var a=c.document,w=a.documentElement,l=[],t=0,x="",h={},G=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,H=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,y=0,A=function(b){var z=-1!==b.indexOf(",")&&b.split(",")||[b],e=z.length-1,j=e,g=null,d=null,c="",a=0,l=!1,m="",f="",g=null,d=0,f=null,k="",p="",q="",n="",r="",k=!1;if(""===
b)return!0;do{g=z[j-e];l=!1;if(d=g.match(G))c=d[0],a=d.index;if(!d||-1===g.substring(0,a).indexOf("(")&&(a||!d[3]&&c!==d.input))k=!1;else{f=g;l="not"===d[1];a||(m=d[2],f=g.substring(c.length));k=m===x||"all"===m||""===m;g=-1!==f.indexOf(" and ")&&f.split(" and ")||[f];d=g.length-1;if(k&&0<=d&&""!==f){do{f=g[d].match(H);if(!f||!h[f[3]]){k=!1;break}k=f[2];n=p=f[5];q=f[7];r=h[f[3]];q&&(n="px"===q?Number(p):"em"===q||"rem"===q?16*p:f[8]?(p/f[8]).toFixed(2):"dppx"===q?96*p:"dpcm"===q?0.3937*p:Number(p));
k="min-"===k&&n?r>=n:"max-"===k&&n?r<=n:n?r===n:!!r;if(!k)break}while(d--)}if(k)break}}while(e--);return l?!k:k},B=function(){var b=c.innerWidth||w.clientWidth,a=c.innerHeight||w.clientHeight,e=c.screen.width,j=c.screen.height,g=c.screen.colorDepth,d=c.devicePixelRatio;h.width=b;h.height=a;h["aspect-ratio"]=(b/a).toFixed(2);h["device-width"]=e;h["device-height"]=j;h["device-aspect-ratio"]=(e/j).toFixed(2);h.color=g;h["color-index"]=Math.pow(2,g);h.orientation=a>=b?"portrait":"landscape";h.resolution=
d&&96*d||c.screen.deviceXDPI||96;h["device-pixel-ratio"]=d||1},C=function(){clearTimeout(y);y=setTimeout(function(){var b=null,a=t-1,e=a,j=!1;if(0<=a){B();do if(b=l[e-a])if((j=A(b.mql.media))&&!b.mql.matches||!j&&b.mql.matches)if(b.mql.matches=j,b.listeners)for(var j=0,g=b.listeners.length;j<g;j++)b.listeners[j]&&b.listeners[j].call(c,b.mql);while(a--)}},10)},D=a.getElementsByTagName("head")[0],a=a.createElement("style"),E=null,u="screen print speech projection handheld tv braille embossed tty".split(" "),
m=0,I=u.length,s="#mediamatchjs { position: relative; z-index: 0; }",v="",F=c.addEventListener||(v="on")&&c.attachEvent;a.type="text/css";a.id="mediamatchjs";D.appendChild(a);for(E=c.getComputedStyle&&c.getComputedStyle(a)||a.currentStyle;m<I;m++)s+="@media "+u[m]+" { #mediamatchjs { position: relative; z-index: "+m+" } }";a.styleSheet?a.styleSheet.cssText=s:a.textContent=s;x=u[1*E.zIndex||0];D.removeChild(a);B();F(v+"resize",C);F(v+"orientationchange",C);return function(a){var c=t,e={matches:!1,
media:a,addListener:function(a){l[c].listeners||(l[c].listeners=[]);a&&l[c].listeners.push(a)},removeListener:function(a){var b=l[c],d=0,e=0;if(b)for(e=b.listeners.length;d<e;d++)b.listeners[d]===a&&b.listeners.splice(d,1)}};if(""===a)return e.matches=!0,e;e.matches=A(a);t=l.push({mql:e,listeners:null});return e}}(window));;
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-inputtypes-objectfit-picture-srcset-touchevents-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,o,s,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),g.push((i?"":"no-")+a.join("-"))}}function o(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?S.className.baseVal=t:S.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(){var e=t.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function u(e,n,r,i){var o,a,u,f,c="modernizr",p=s("div"),d=l();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=i?i[r]:c+(r+1),p.appendChild(u);return o=s("style"),o.type="text/css",o.id="s"+c,(d.fake?d:p).appendChild(o),d.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(d)),a=n(p,e),d.fake?(d.parentNode.removeChild(d),S.style.overflow=f,S.offsetHeight):p.parentNode.removeChild(p),!!a}function f(e,t){return!!~(""+e).indexOf(t)}function c(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?c(i,n||t):i);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function h(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(d(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+d(t[i])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function v(e,t,i,o){function l(){c&&(delete L.style,delete L.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var u=h(e,i);if(!r(u,"undefined"))return u}for(var c,p,d,m,v,y=["modernizr","tspan","samp"];!L.style&&y.length;)c=!0,L.modElem=s(y.shift()),L.style=L.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],v=L.style[m],f(m,"-")&&(m=a(m)),L.style[m]!==n){if(o||r(i,"undefined"))return l(),"pfx"==t?m:!0;try{L.style[m]=i}catch(g){}if(L.style[m]!=v)return l(),"pfx"==t?m:!0}return l(),!1}function y(e,t,n,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(s+" ")+s).split(" ");return r(t,"string")||r(t,"undefined")?v(a,t,i,o):(a=(e+" "+N.join(s+" ")+s).split(" "),p(a,t,n))}var g=[],C=[],b={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr,Modernizr.addTest("picture","HTMLPictureElement"in e);var S=t.documentElement,x="svg"===S.nodeName.toLowerCase(),w=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=w,Modernizr.addTest("srcset","srcset"in s("img"));var _=s("input"),T="search tel url email datetime date month week time datetime-local number range color".split(" "),z={};Modernizr.inputtypes=function(e){for(var r,i,o,s=e.length,a="1)",l=0;s>l;l++)_.setAttribute("type",r=e[l]),o="text"!==_.type&&"style"in _,o&&(_.value=a,_.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&_.style.WebkitAppearance!==n?(S.appendChild(_),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(_,null).WebkitAppearance&&0!==_.offsetHeight,S.removeChild(_)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?_.checkValidity&&_.checkValidity()===!1:_.value!=a)),z[e[l]]=!!o;return z}(T);var j=b.testStyles=u;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");j(r,function(e){n=9===e.offsetTop})}return n});var k="Moz O ms Webkit",E=b._config.usePrefixes?k.split(" "):[];b._cssomPrefixes=E;var P=function(t){var r,i=w.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;i>s;s++){var a=w[s],l=a.toUpperCase()+"_"+r;if(l in o)return"@-"+a.toLowerCase()+"-"+t}return!1};b.atRule=P;var N=b._config.usePrefixes?k.toLowerCase().split(" "):[];b._domPrefixes=N;var A={elem:s("modernizr")};Modernizr._q.push(function(){delete A.elem});var L={style:A.elem.style};Modernizr._q.unshift(function(){delete L.style}),b.testAllProps=y;var V=b.prefixed=function(e,t,n){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=a(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("objectfit",!!V("objectFit"),{aliases:["object-fit"]}),i(),o(g),delete b.addTest,delete b.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);;
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});
;
/*
* FooTable v3 - FooTable is a jQuery plugin that aims to make HTML tables on smaller devices look awesome.
* @version 3.1.6
* @link http://fooplugins.com
* @copyright Steven Usher & Brad Vincent 2015
* @license Released under the GPLv3 license.
*/
!function(a,b){window.console=window.console||{log:function(){},error:function(){}},a.fn.footable=function(a,c){return a=a||{},this.filter("table").each(function(d,e){b.init(e,a,c)})};var c={events:[]};b.__debug__=JSON.parse(localStorage.getItem("footable_debug"))||!1,b.__debug_options__=JSON.parse(localStorage.getItem("footable_debug_options"))||c,b.debug=function(d,e){return b.is["boolean"](d)?(b.__debug__=d,void(b.__debug__?(localStorage.setItem("footable_debug",JSON.stringify(b.__debug__)),b.__debug_options__=a.extend(!0,{},c,e||{}),b.is.hash(e)&&localStorage.setItem("footable_debug_options",JSON.stringify(b.__debug_options__))):(localStorage.removeItem("footable_debug"),localStorage.removeItem("footable_debug_options")))):b.__debug__},b.get=function(b){return a(b).first().data("__FooTable__")},b.init=function(a,c,d){var e=b.get(a);return e instanceof b.Table&&e.destroy(),new b.Table(a,c,d)},b.getRow=function(b){var c=a(b).closest("tr");return c.hasClass("footable-detail-row")&&(c=c.prev()),c.data("__FooTableRow__")}}(jQuery,FooTable=window.FooTable||{}),function(a){var b=function(){return!0};a.arr={},a.arr.each=function(b,c){if(a.is.array(b)&&a.is.fn(c))for(var d=0,e=b.length;e>d&&c(b[d],d)!==!1;d++);},a.arr.get=function(b,c){var d=[];if(!a.is.array(b))return d;if(!a.is.fn(c))return b;for(var e=0,f=b.length;f>e;e++)c(b[e],e)&&d.push(b[e]);return d},a.arr.any=function(c,d){if(!a.is.array(c))return!1;d=a.is.fn(d)?d:b;for(var e=0,f=c.length;f>e;e++)if(d(c[e],e))return!0;return!1},a.arr.contains=function(b,c){if(!a.is.array(b)||a.is.undef(c))return!1;for(var d=0,e=b.length;e>d;d++)if(b[d]==c)return!0;return!1},a.arr.first=function(c,d){if(!a.is.array(c))return null;d=a.is.fn(d)?d:b;for(var e=0,f=c.length;f>e;e++)if(d(c[e],e))return c[e];return null},a.arr.map=function(b,c){var d=[],e=null;if(!a.is.array(b)||!a.is.fn(c))return d;for(var f=0,g=b.length;g>f;f++)null!=(e=c(b[f],f))&&d.push(e);return d},a.arr.remove=function(b,c){var d=[],e=[];if(!a.is.array(b)||!a.is.fn(c))return e;for(var f=0,g=b.length;g>f;f++)c(b[f],f,e)&&(d.push(f),e.push(b[f]));for(d.sort(function(a,b){return b-a}),f=0,g=d.length;g>f;f++){var h=d[f]-f;b.splice(h,1)}return e},a.arr["delete"]=function(b,c){var d=-1,e=null;if(!a.is.array(b)||a.is.undef(c))return e;for(var f=0,g=b.length;g>f;f++)if(b[f]==c){d=f,e=b[f];break}return-1!=d&&b.splice(d,1),e},a.arr.replace=function(a,b,c){var d=a.indexOf(b);-1!==d&&(a[d]=c)}}(FooTable),function(a){a.is={},a.is.type=function(a,b){return typeof a===b},a.is.defined=function(a){return"undefined"!=typeof a},a.is.undef=function(a){return"undefined"==typeof a},a.is.array=function(a){return"[object Array]"===Object.prototype.toString.call(a)},a.is.date=function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())},a.is["boolean"]=function(a){return"[object Boolean]"===Object.prototype.toString.call(a)},a.is.string=function(a){return"[object String]"===Object.prototype.toString.call(a)},a.is.number=function(a){return"[object Number]"===Object.prototype.toString.call(a)&&!isNaN(a)},a.is.fn=function(b){return a.is.defined(window)&&b===window.alert||"[object Function]"===Object.prototype.toString.call(b)},a.is.error=function(a){return"[object Error]"===Object.prototype.toString.call(a)},a.is.object=function(a){return"[object Object]"===Object.prototype.toString.call(a)},a.is.hash=function(b){return a.is.object(b)&&b.constructor===Object&&!b.nodeType&&!b.setInterval},a.is.element=function(a){return"object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName},a.is.promise=function(b){return a.is.object(b)&&a.is.fn(b.then)&&a.is.fn(b.promise)},a.is.jq=function(b){return a.is.defined(window.jQuery)&&b instanceof jQuery&&b.length>0},a.is.moment=function(b){return a.is.defined(window.moment)&&a.is.object(b)&&a.is["boolean"](b._isAMomentObject)},a.is.emptyObject=function(b){if(!a.is.hash(b))return!1;for(var c in b)if(b.hasOwnProperty(c))return!1;return!0},a.is.emptyArray=function(b){return a.is.array(b)?0===b.length:!0},a.is.emptyString=function(b){return a.is.string(b)?0===b.length:!0}}(FooTable),function(a){a.str={},a.str.contains=function(b,c,d){return a.is.emptyString(b)||a.is.emptyString(c)?!1:c.length<=b.length&&-1!==(d?b.toUpperCase().indexOf(c.toUpperCase()):b.indexOf(c))},a.str.containsExact=function(b,c,d){return a.is.emptyString(b)||a.is.emptyString(c)||c.length>b.length?!1:new RegExp("\\b"+a.str.escapeRegExp(c)+"\\b",d?"i":"").test(b)},a.str.containsWord=function(b,c,d){if(a.is.emptyString(b)||a.is.emptyString(c)||b.length<c.length)return!1;for(var e=b.split(/\W/),f=0,g=e.length;g>f;f++)if(d?e[f].toUpperCase()==c.toUpperCase():e[f]==c)return!0;return!1},a.str.from=function(b,c){return a.is.emptyString(b)?b:a.str.contains(b,c)?b.substring(b.indexOf(c)+1):b},a.str.startsWith=function(b,c){return a.is.emptyString(b)?b==c:b.slice(0,c.length)==c},a.str.toCamelCase=function(b){return a.is.emptyString(b)?b:b.toUpperCase()===b?b.toLowerCase():b.replace(/^([A-Z])|[-\s_](\w)/g,function(b,c,d){return a.is.string(d)?d.toUpperCase():c.toLowerCase()})},a.str.random=function(b){return b=a.is.emptyString(b)?"":b,b+Math.random().toString(36).substr(2,9)},a.str.escapeRegExp=function(b){return a.is.emptyString(b)?b:b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}(FooTable),function(a){"use strict";function b(){}Object.create||(Object.create=function(){var b=function(){};return function(c){if(arguments.length>1)throw Error("Second argument not supported");if(!a.is.object(c))throw TypeError("Argument must be an object");b.prototype=c;var d=new b;return b.prototype=null,d}}());var c=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;b.__extend__=function(b,d,e,f){b[d]=a.is.fn(f)&&c.test(e)?function(a,b){return function(){var a,c;return a=this._super,this._super=f,c=b.apply(this,arguments),this._super=a,c}}(d,e):e},b.extend=function(d,e){function f(b,d,e,f){b[d]=a.is.fn(f)&&c.test(e)?function(a,b,c){return function(){var a,d;return a=this._super,this._super=c,d=b.apply(this,arguments),this._super=a,d}}(d,e,f):e}var g=Array.prototype.slice.call(arguments);if(d=g.shift(),e=g.shift(),a.is.hash(d)){var h=Object.create(this.prototype),i=this.prototype;for(var j in d)"__ctor__"!==j&&f(h,j,d[j],i[j]);var k=a.is.fn(h.__ctor__)?h.__ctor__:function(){if(!a.is.fn(this.construct))throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');this.construct.apply(this,arguments)};return h.construct=a.is.fn(h.construct)?h.construct:function(){},k.prototype=h,h.constructor=k,k.extend=b.extend,k}a.is.string(d)&&a.is.fn(e)&&f(this.prototype,d,e,this.prototype[d])},a.Class=b,a.ClassFactory=a.Class.extend({construct:function(){this.registered={}},contains:function(b){return a.is.defined(this.registered[b])},names:function(){var a,b=[];for(a in this.registered)this.registered.hasOwnProperty(a)&&b.push(a);return b},register:function(b,c,d){if(a.is.string(b)&&a.is.fn(c)){var e=this.registered[b];this.registered[b]={name:b,klass:c,priority:a.is.number(d)?d:a.is.defined(e)?e.priority:0}}},load:function(b,c,d){var e,f,g=this,h=Array.prototype.slice.call(arguments),i=[],j=[];b=h.shift()||{};for(e in g.registered)if(g.registered.hasOwnProperty(e)){var k=g.registered[e];b.hasOwnProperty(e)&&(f=b[e],a.is.string(f)&&(f=a.getFnPointer(b[e])),a.is.fn(f)&&(k={name:e,klass:f,priority:g.registered[e].priority})),i.push(k)}for(e in b)b.hasOwnProperty(e)&&!g.registered.hasOwnProperty(e)&&(f=b[e],a.is.string(f)&&(f=a.getFnPointer(b[e])),a.is.fn(f)&&i.push({name:e,klass:f,priority:0}));return i.sort(function(a,b){return b.priority-a.priority}),a.arr.each(i,function(b){a.is.fn(b.klass)&&j.push(g._make(b.klass,h))}),j},make:function(b,c,d){var e,f=this,g=Array.prototype.slice.call(arguments);return b=g.shift(),e=f.registered[b],a.is.fn(e.klass)?f._make(e.klass,g):null},_make:function(a,b){function c(){return a.apply(this,b)}return c.prototype=a.prototype,new c}})}(FooTable),function(a,b){b.css2json=function(c){if(b.is.emptyString(c))return{};for(var d,e,f,g={},h=c.split(";"),i=0,j=h.length;j>i;i++)b.is.emptyString(h[i])||(d=h[i].split(":"),b.is.emptyString(d[0])||b.is.emptyString(d[1])||(e=b.str.toCamelCase(a.trim(d[0])),f=a.trim(d[1]),g[e]=f));return g},b.getFnPointer=function(a){if(b.is.emptyString(a))return null;var c=window,d=a.split(".");return b.arr.each(d,function(a){c[a]&&(c=c[a])}),b.is.fn(c)?c:null},b.checkFnValue=function(a,c,d){function e(a,c,d){return b.is.fn(c)?function(){return c.apply(a,arguments)}:d}return d=b.is.fn(d)?d:null,b.is.fn(c)?e(a,c,d):b.is.type(c,"string")?e(a,b.getFnPointer(c),d):d}}(jQuery,FooTable),function(a,b){b.Cell=b.Class.extend({construct:function(a,b,c,d){this.ft=a,this.row=b,this.column=c,this.created=!1,this.define(d)},define:function(c){this.$el=b.is.element(c)||b.is.jq(c)?a(c):null,this.$detail=null;var d=b.is.hash(c)&&b.is.hash(c.options)&&b.is.defined(c.value);this.value=this.column.parser.call(this.column,b.is.jq(this.$el)?this.$el:d?c.value:c,this.ft.o),this.o=a.extend(!0,{classes:null,style:null},d?c.options:{}),this.classes=b.is.jq(this.$el)&&this.$el.attr("class")?this.$el.attr("class").match(/\S+/g):b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.jq(this.$el)&&this.$el.attr("style")?b.css2json(this.$el.attr("style")):b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{}},$create:function(){this.created||((this.$el=b.is.jq(this.$el)?this.$el:a("<td/>")).data("value",this.value).contents().detach().end().append(this.format(this.value)),this._setClasses(this.$el),this._setStyle(this.$el),this.$detail=a("<tr/>").addClass(this.row.classes.join(" ")).data("__FooTableCell__",this).append(a("<th/>")).append(a("<td/>")),this.created=!0)},collapse:function(){this.created&&(this.$detail.children("th").html(this.column.title),this.$el.clone().attr("id",this.$el.attr("id")?this.$el.attr("id")+"-detail":void 0).css("display","table-cell").html("").append(this.$el.contents().detach()).replaceAll(this.$detail.children("td").first()),b.is.jq(this.$detail.parent())||this.$detail.appendTo(this.row.$details.find(".footable-details > tbody")))},restore:function(){if(this.created){if(b.is.jq(this.$detail.parent())){var a=this.$detail.children("td").first();this.$el.attr("class",a.attr("class")).attr("style",a.attr("style")).css("display",this.column.hidden||!this.column.visible?"none":"table-cell").append(a.contents().detach())}this.$detail.detach()}},parse:function(){return this.column.parser.call(this.column,this.$el,this.ft.o)},format:function(a){return this.column.formatter.call(this.column,a,this.ft.o,this.row.value)},val:function(c,d,e){if(b.is.undef(c))return this.value;var f=this,g=b.is.hash(c)&&b.is.hash(c.options)&&b.is.defined(c.value);if(this.o=a.extend(!0,{classes:f.classes,style:f.style},g?c.options:{}),this.value=g?c.value:c,this.classes=b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{},e=b.is["boolean"](e)?e:!0,this.created&&e){this.$el.data("value",this.value).empty();var h=this.$detail.children("td").first().empty(),i=b.is.jq(this.$detail.parent())?h:this.$el;i.append(this.format(this.value)),this._setClasses(i),this._setStyle(i),(b.is["boolean"](d)?d:!0)&&this.row.draw()}},_setClasses:function(a){var c=!b.is.emptyArray(this.column.classes),d=!b.is.emptyArray(this.classes),e=null;a.removeAttr("class"),(c||d)&&(c&&d?e=this.classes.concat(this.column.classes).join(" "):c?e=this.column.classes.join(" "):d&&(e=this.classes.join(" ")),b.is.emptyString(e)||a.addClass(e))},_setStyle:function(c){var d=!b.is.emptyObject(this.column.style),e=!b.is.emptyObject(this.style),f=null;c.removeAttr("style"),(d||e)&&(d&&e?f=a.extend({},this.column.style,this.style):d?f=this.column.style:e&&(f=this.style),b.is.hash(f)&&c.css(f))}})}(jQuery,FooTable),function(a,b){b.Column=b.Class.extend({construct:function(a,c,d){this.ft=a,this.type=b.is.emptyString(d)?"text":d,this.virtual=b.is["boolean"](c.virtual)?c.virtual:!1,this.$el=b.is.jq(c.$el)?c.$el:null,this.index=b.is.number(c.index)?c.index:-1,this.internal=!1,this.define(c),this.$create()},define:function(a){this.hidden=b.is["boolean"](a.hidden)?a.hidden:!1,this.visible=b.is["boolean"](a.visible)?a.visible:!0,this.name=b.is.string(a.name)?a.name:null,null==this.name&&(this.name="col"+(a.index+1)),this.title=b.is.string(a.title)?a.title:null,!this.virtual&&null==this.title&&b.is.jq(this.$el)&&(this.title=this.$el.html()),null==this.title&&(this.title="Column "+(a.index+1)),this.style=b.is.hash(a.style)?a.style:b.is.string(a.style)?b.css2json(a.style):{},this.classes=b.is.array(a.classes)?a.classes:b.is.string(a.classes)?a.classes.match(/\S+/g):[],this.parser=b.checkFnValue(this,a.parser,this.parser),this.formatter=b.checkFnValue(this,a.formatter,this.formatter)},$create:function(){(this.$el=!this.virtual&&b.is.jq(this.$el)?this.$el:a("<th/>")).html(this.title).addClass(this.classes.join(" ")).css(this.style)},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("value");return b.is.defined(d)?d:a(c).html()}return b.is.defined(c)&&null!=c?c+"":null},formatter:function(a,b,c){return null==a?"":a},createCell:function(a){var c=b.is.jq(a.$el)?a.$el.children("td,th").get(this.index):null,d=b.is.hash(a.value)?a.value[this.name]:null;return new b.Cell(this.ft,a,this,c||d)}}),b.columns=new b.ClassFactory,b.columns.register("text",b.Column)}(jQuery,FooTable),function(a,b){b.Component=b.Class.extend({construct:function(a,c){if(!(a instanceof b.Table))throw new TypeError("The instance parameter must be an instance of FooTable.Table.");this.ft=a,this.enabled=b.is["boolean"](c)?c:!1},preinit:function(a){},init:function(){},destroy:function(){},predraw:function(){},draw:function(){},postdraw:function(){}}),b.components=new b.ClassFactory}(jQuery,FooTable),function(a,b){b.Defaults=function(){this.stopPropagation=!1,this.on=null},b.defaults=new b.Defaults}(jQuery,FooTable),function(a,b){b.Row=b.Class.extend({construct:function(a,b,c){this.ft=a,this.columns=b,this.created=!1,this.define(c)},define:function(c){this.$el=b.is.element(c)||b.is.jq(c)?a(c):null,this.$toggle=a("<span/>",{"class":"footable-toggle fooicon fooicon-plus"});var d=b.is.hash(c),e=d&&b.is.hash(c.options)&&b.is.hash(c.value);this.value=d?e?c.value:c:null,this.o=a.extend(!0,{expanded:!1,classes:null,style:null},e?c.options:{}),this.expanded=b.is.jq(this.$el)?this.$el.data("expanded")||this.o.expanded:this.o.expanded,this.classes=b.is.jq(this.$el)&&this.$el.attr("class")?this.$el.attr("class").match(/\S+/g):b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.jq(this.$el)&&this.$el.attr("style")?b.css2json(this.$el.attr("style")):b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{},this.cells=this.createCells();var f=this;f.value={},b.arr.each(f.cells,function(a){f.value[a.column.name]=a.val()})},$create:function(){if(!this.created){(this.$el=b.is.jq(this.$el)?this.$el:a("<tr/>")).data("__FooTableRow__",this),this._setClasses(this.$el),this._setStyle(this.$el),"last"==this.ft.rows.toggleColumn&&this.$toggle.addClass("last-column"),this.$details=a("<tr/>",{"class":"footable-detail-row"}).append(a("<td/>",{colspan:this.ft.columns.visibleColspan}).append(a("<table/>",{"class":"footable-details "+this.ft.classes.join(" ")}).append("<tbody/>")));var c=this;b.arr.each(c.cells,function(a){a.created||a.$create(),c.$el.append(a.$el)}),c.$el.off("click.ft.row").on("click.ft.row",{self:c},c._onToggle),this.created=!0}},createCells:function(){var a=this;return b.arr.map(a.columns,function(b){return b.createCell(a)})},val:function(c,d,e){var f=this;if(!b.is.hash(c))return b.is.hash(this.value)&&!b.is.emptyObject(this.value)||(this.value={},b.arr.each(this.cells,function(a){a.column.internal||(f.value[a.column.name]=a.val())})),this.value;this.collapse(!1);var g=b.is.hash(c),h=g&&b.is.hash(c.options)&&b.is.hash(c.value);if(this.o=a.extend(!0,{expanded:f.expanded,classes:f.classes,style:f.style},h?c.options:{}),this.expanded=this.o.expanded,this.classes=b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{},g)if(h&&(c=c.value),b.is.hash(this.value))for(var i in c)c.hasOwnProperty(i)&&(this.value[i]=c[i]);else this.value=c;else this.value=null;e=b.is["boolean"](e)?e:!0,b.arr.each(this.cells,function(a){!a.column.internal&&b.is.defined(f.value[a.column.name])&&a.val(f.value[a.column.name],!1,e)}),this.created&&e&&(this._setClasses(this.$el),this._setStyle(this.$el),(b.is["boolean"](d)?d:!0)&&this.draw())},_setClasses:function(a){var c=!b.is.emptyArray(this.classes),d=null;a.removeAttr("class"),c&&(d=this.classes.join(" "),b.is.emptyString(d)||a.addClass(d))},_setStyle:function(a){var c=!b.is.emptyObject(this.style),d=null;a.removeAttr("style"),c&&(d=this.style,b.is.hash(d)&&a.css(d))},expand:function(){if(this.created){var a=this;a.ft.raise("expand.ft.row",[a]).then(function(){a.__hidden__=b.arr.map(a.cells,function(a){return a.column.hidden&&a.column.visible?a:null}),a.__hidden__.length>0&&(a.$details.insertAfter(a.$el).children("td").first().attr("colspan",a.ft.columns.visibleColspan),b.arr.each(a.__hidden__,function(a){a.collapse()})),a.$el.attr("data-expanded",!0),a.$toggle.removeClass("fooicon-plus").addClass("fooicon-minus"),a.expanded=!0,a.ft.raise("expanded.ft.row",[a])})}},collapse:function(a){if(this.created){var c=this;c.ft.raise("collapse.ft.row",[c]).then(function(){b.arr.each(c.__hidden__,function(a){a.restore()}),c.$details.detach(),c.$el.removeAttr("data-expanded"),c.$toggle.removeClass("fooicon-minus").addClass("fooicon-plus"),(b.is["boolean"](a)?a:!0)&&(c.expanded=!1),c.ft.raise("collapsed.ft.row",[c])})}},predraw:function(a){this.created&&(this.expanded&&this.collapse(!1),this.$toggle.detach(),a=b.is["boolean"](a)?a:!0,a&&this.$el.detach())},draw:function(a){this.created||this.$create(),b.is.jq(a)&&a.append(this.$el);var c=this;b.arr.each(c.cells,function(a){a.$el.css("display",a.column.hidden||!a.column.visible?"none":"table-cell"),c.ft.rows.showToggle&&c.ft.columns.hasHidden&&("first"==c.ft.rows.toggleColumn&&a.column.index==c.ft.columns.firstVisibleIndex||"last"==c.ft.rows.toggleColumn&&a.column.index==c.ft.columns.lastVisibleIndex)&&a.$el.prepend(c.$toggle),a.$el.add(a.column.$el).removeClass("footable-first-visible footable-last-visible"),a.column.index==c.ft.columns.firstVisibleIndex&&a.$el.add(a.column.$el).addClass("footable-first-visible"),a.column.index==c.ft.columns.lastVisibleIndex&&a.$el.add(a.column.$el).addClass("footable-last-visible")}),this.expanded&&this.expand()},toggle:function(){this.created&&this.ft.columns.hasHidden&&(this.expanded?this.collapse():this.expand())},_onToggle:function(b){var c=b.data.self;a(b.target).is(c.ft.rows.toggleSelector)&&c.toggle()}})}(jQuery,FooTable),function(a,b){b.instances=[],b.Table=b.Class.extend({construct:function(c,d,e){this._resizeTimeout=null,this.id=b.instances.push(this),this.initialized=!1,this.$el=(b.is.jq(c)?c:a(c)).first(),this.$loader=a("<div/>",{"class":"footable-loader"}).append(a("<span/>",{"class":"fooicon fooicon-loader"})),this.o=a.extend(!0,{},b.defaults,d),this.data=this.$el.data()||{},this.classes=[],this.components=b.components.load(b.is.hash(this.data.components)?this.data.components:this.o.components,this),this.breakpoints=this.use(FooTable.Breakpoints),this.columns=this.use(FooTable.Columns),this.rows=this.use(FooTable.Rows),this._construct(e)},_construct:function(a){var c=this;return this._preinit().then(function(){return c._init().then(function(){return c.raise("ready.ft.table").then(function(){b.is.fn(a)&&a.call(c,c)})})}).always(function(a){c.$el.show(),b.is.error(a)&&console.error("FooTable: unhandled error thrown during initialization.",a)})},_preinit:function(){var a=this;return this.raise("preinit.ft.table",[a.data]).then(function(){var c=(a.$el.attr("class")||"").match(/\S+/g)||[];a.o.ajax=b.checkFnValue(a,a.data.ajax,a.o.ajax),a.o.stopPropagation=b.is["boolean"](a.data.stopPropagation)?a.data.stopPropagation:a.o.stopPropagation;for(var d=0,e=c.length;e>d;d++)b.str.startsWith(c[d],"footable")||a.classes.push(c[d]);return a.$el.hide().after(a.$loader),a.execute(!1,!1,"preinit",a.data)})},_init:function(){var c=this;return c.raise("init.ft.table").then(function(){var d=c.$el.children("thead"),e=c.$el.children("tbody"),f=c.$el.children("tfoot");return c.$el.addClass("footable footable-"+c.id),b.is.hash(c.o.on)&&c.$el.on(c.o.on),0==f.length&&c.$el.append(f=a("<tfoot/>")),0==e.length&&c.$el.append("<tbody/>"),0==d.length&&c.$el.prepend(d=a("<thead/>")),c.execute(!1,!0,"init").then(function(){return c.$el.data("__FooTable__",c),0==f.children("tr").length&&f.remove(),0==d.children("tr").length&&d.remove(),c.raise("postinit.ft.table").then(function(){return c.draw()}).always(function(){a(window).off("resize.ft"+c.id,c._onWindowResize).on("resize.ft"+c.id,{self:c},c._onWindowResize),c.initialized=!0})})})},destroy:function(){var c=this;return c.raise("destroy.ft.table").then(function(){return c.execute(!0,!0,"destroy").then(function(){c.$el.removeData("__FooTable__").removeClass("footable-"+c.id),b.is.hash(c.o.on)&&c.$el.off(c.o.on),a(window).off("resize.ft"+c.id,c._onWindowResize),c.initialized=!1,b.instances[c.id]=null})}).fail(function(a){b.is.error(a)&&console.error("FooTable: unhandled error thrown while destroying the plugin.",a)})},raise:function(c,d){var e=this,f=b.__debug__&&(b.is.emptyArray(b.__debug_options__.events)||b.arr.any(b.__debug_options__.events,function(a){return b.str.contains(c,a)}));return d=d||[],d.unshift(this),a.Deferred(function(b){var g=a.Event(c);1==e.o.stopPropagation&&e.$el.one(c,function(a){a.stopPropagation()}),f&&console.log("FooTable:"+c+": ",d),e.$el.trigger(g,d),g.isDefaultPrevented()?(f&&console.log('FooTable: default prevented for the "'+c+'" event.'),b.reject(g)):b.resolve(g)})},use:function(a){for(var b=0,c=this.components.length;c>b;b++)if(this.components[b]instanceof a)return this.components[b];return null},draw:function(){var a=this,c=a.$el.clone().insertBefore(a.$el);return a.$el.detach(),a.execute(!1,!0,"predraw").then(function(){return a.raise("predraw.ft.table").then(function(){return a.execute(!1,!0,"draw").then(function(){return a.raise("draw.ft.table").then(function(){return a.execute(!1,!0,"postdraw").then(function(){return a.raise("postdraw.ft.table")})})})})}).fail(function(a){b.is.error(a)&&console.error("FooTable: unhandled error thrown during a draw operation.",a)}).always(function(){c.replaceWith(a.$el),a.$loader.remove()})},execute:function(a,c,d,e,f){var g=this,h=Array.prototype.slice.call(arguments);a=h.shift(),c=h.shift();var i=c?b.arr.get(g.components,function(a){return a.enabled}):g.components.slice(0);return h.unshift(a?i.reverse():i),g._execute.apply(g,h)},_execute:function(c,d,e,f){if(!c||!c.length)return a.when();var g,h=this,i=Array.prototype.slice.call(arguments);return c=i.shift(),d=i.shift(),g=c.shift(),b.is.fn(g[d])?a.Deferred(function(a){try{var c=g[d].apply(g,i);if(b.is.promise(c))return c.then(a.resolve,a.reject);a.resolve(c)}catch(e){a.reject(e)}}).then(function(){return h._execute.apply(h,[c,d].concat(i))}):h._execute.apply(h,[c,d].concat(i))},_onWindowResize:function(a){var b=a.data.self;null!=b._resizeTimeout&&clearTimeout(b._resizeTimeout),b._resizeTimeout=setTimeout(function(){b._resizeTimeout=null,b.raise("resize.ft.table").then(function(){b.breakpoints.check()})},300)}})}(jQuery,FooTable),function(a,b){b.ArrayColumn=b.Column.extend({construct:function(a,b){this._super(a,b,"array")},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c),e=d.data("value");if(b.is.array(e))return e;e=d.html();try{e=JSON.parse(e)}catch(f){e=null}return b.is.array(e)?e:null}return b.is.array(c)?c:null},formatter:function(a,c,d){return b.is.array(a)?JSON.stringify(a):""}}),b.columns.register("array",b.ArrayColumn)}(jQuery,FooTable),function(a,b){b.is.undef(window.moment)||(b.DateColumn=b.Column.extend({construct:function(a,c){this._super(a,c,"date"),this.formatString=b.is.string(c.formatString)?c.formatString:"MM-DD-YYYY"},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("value");c=b.is.defined(d)?d:a(c).text(),b.is.string(c)&&(c=isNaN(c)?c:+c)}if(b.is.date(c))return moment(c);if(b.is.object(c)&&b.is["boolean"](c._isAMomentObject))return c;if(b.is.string(c)){if(isNaN(c))return moment(c,this.formatString);c=+c}return b.is.number(c)?moment(c):null},formatter:function(a,c,d){return b.is.object(a)&&b.is["boolean"](a._isAMomentObject)&&a.isValid()?a.format(this.formatString):""},filterValue:function(c){if((b.is.element(c)||b.is.jq(c))&&(c=a(c).data("filterValue")||a(c).text()),b.is.hash(c)&&b.is.hash(c.options)&&(b.is.string(c.options.filterValue)&&(c=c.options.filterValue),b.is.defined(c.value)&&(c=c.value)),b.is.object(c)&&b.is["boolean"](c._isAMomentObject))return c.format(this.formatString);if(b.is.string(c)){if(isNaN(c))return c;c=+c}return b.is.number(c)||b.is.date(c)?moment(c).format(this.formatString):b.is.defined(c)&&null!=c?c+"":""}}),b.columns.register("date",b.DateColumn))}(jQuery,FooTable),function(a,b){b.HTMLColumn=b.Column.extend({construct:function(a,b){this._super(a,b,"html")},parser:function(c){if(b.is.string(c)&&(c=a(a.trim(c))),b.is.element(c)&&(c=a(c)),b.is.jq(c)){var d=c.prop("tagName").toLowerCase();if("td"==d||"th"==d){var e=c.data("value");return b.is.defined(e)?e:c.contents()}return c}return null}}),b.columns.register("html",b.HTMLColumn)}(jQuery,FooTable),function(a,b){b.NumberColumn=b.Column.extend({construct:function(a,c){this._super(a,c,"number"),this.decimalSeparator=b.is.string(c.decimalSeparator)?c.decimalSeparator:".",this.thousandSeparator=b.is.string(c.thousandSeparator)?c.thousandSeparator:",",this.decimalSeparatorRegex=new RegExp(b.str.escapeRegExp(this.decimalSeparator),"g"),this.thousandSeparatorRegex=new RegExp(b.str.escapeRegExp(this.thousandSeparator),"g"),this.cleanRegex=new RegExp("[^-0-9"+b.str.escapeRegExp(this.decimalSeparator)+"]","g")},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("value");c=b.is.defined(d)?d:a(c).text().replace(this.cleanRegex,"")}return b.is.string(c)&&(c=c.replace(this.thousandSeparatorRegex,"").replace(this.decimalSeparatorRegex,"."),c=parseFloat(c)),b.is.number(c)?c:null},formatter:function(a,b,c){if(null==a)return"";var d=(a+"").split(".");return 2==d.length&&d[0].length>3&&(d[0]=d[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,this.thousandSeparator)),d.join(this.decimalSeparator)}}),b.columns.register("number",b.NumberColumn)}(jQuery,FooTable),function(a,b){b.ObjectColumn=b.Column.extend({construct:function(a,b){this._super(a,b,"object")},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c),e=d.data("value");if(b.is.object(e))return e;e=d.html();try{e=JSON.parse(e)}catch(f){e=null}return b.is.object(e)?e:null}return b.is.object(c)?c:null},formatter:function(a,c,d){return b.is.object(a)?JSON.stringify(a):""}}),b.columns.register("object",b.ObjectColumn)}(jQuery,FooTable),function(a,b){b.Breakpoint=b.Class.extend({construct:function(a,b){this.name=a,this.width=b}})}(jQuery,FooTable),function(a,b){b.Breakpoints=b.Component.extend({construct:function(a){this._super(a,!0),this.o=a.o,this.current=null,this.array=[],this.cascade=this.o.cascade,this.useParentWidth=this.o.useParentWidth,this.hidden=null,this._classNames="",this.getWidth=b.checkFnValue(this,this.o.getWidth,this.getWidth)},preinit:function(a){var c=this;return this.ft.raise("preinit.ft.breakpoints",[a]).then(function(){c.cascade=b.is["boolean"](a.cascade)?a.cascade:c.cascade,c.o.breakpoints=b.is.hash(a.breakpoints)?a.breakpoints:c.o.breakpoints,c.getWidth=b.checkFnValue(c,a.getWidth,c.getWidth),null==c.o.breakpoints&&(c.o.breakpoints={xs:480,sm:768,md:992,lg:1200});for(var d in c.o.breakpoints)c.o.breakpoints.hasOwnProperty(d)&&(c.array.push(new b.Breakpoint(d,c.o.breakpoints[d])),c._classNames+="breakpoint-"+d+" ");c.array.sort(function(a,b){return b.width-a.width})})},init:function(){var a=this;return this.ft.raise("init.ft.breakpoints").then(function(){a.current=a.get()})},draw:function(){this.ft.$el.removeClass(this._classNames).addClass("breakpoint-"+this.current.name)},calculate:function(){for(var a,c=this,d=null,e=[],f=null,g=c.getWidth(),h=0,i=c.array.length;i>h;h++)a=c.array[h],(!d&&h==i-1||g>=a.width&&(f instanceof b.Breakpoint?g<f.width:!0))&&(d=a),d||e.push(a.name),f=a;return e.push(d.name),c.hidden=e.join(" "),d},visible:function(a){if(b.is.emptyString(a))return!0;if("all"===a)return!1;for(var c=a.split(" "),d=0,e=c.length;e>d;d++)if(this.cascade?b.str.containsWord(this.hidden,c[d]):c[d]==this.current.name)return!1;return!0},check:function(){var a=this,c=a.get();c instanceof b.Breakpoint&&c!=a.current&&a.ft.raise("before.ft.breakpoints",[a.current,c]).then(function(){var b=a.current;return a.current=c,a.ft.draw().then(function(){a.ft.raise("after.ft.breakpoints",[a.current,b])})})},get:function(a){return b.is.undef(a)?this.calculate():a instanceof b.Breakpoint?a:b.is.string(a)?b.arr.first(this.array,function(b){return b.name==a}):b.is.number(a)&&a>=0&&a<this.array.length?this.array[a]:null},getWidth:function(){return b.is.fn(this.o.getWidth)?this.o.getWidth(this.ft):1==this.useParentWidth?this.getParentWidth():this.getViewportWidth()},getParentWidth:function(){return this.ft.$el.parent().width()},getViewportWidth:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth,0)}}),b.components.register("breakpoints",b.Breakpoints,1e3)}(jQuery,FooTable),function(a){a.Column.prototype.breakpoints=null,a.Column.prototype.__breakpoints_define__=function(b){this.breakpoints=a.is.emptyString(b.breakpoints)?null:b.breakpoints},a.Column.extend("define",function(a){this._super(a),this.__breakpoints_define__(a)})}(FooTable),function(a){a.Defaults.prototype.breakpoints=null,a.Defaults.prototype.cascade=!1,a.Defaults.prototype.useParentWidth=!1,a.Defaults.prototype.getWidth=null}(FooTable),function(a,b){b.Columns=b.Component.extend({construct:function(a){this._super(a,!0),this.o=a.o,this.array=[],this.$header=null,this.showHeader=a.o.showHeader,this._fromHTML=b.is.emptyArray(a.o.columns)&&!b.is.promise(a.o.columns)},parse:function(c){var d=this;return a.Deferred(function(c){function e(c,d){var e=[];if(0==c.length||0==d.length)e=c.concat(d);else{var f=0;b.arr.each(c.concat(d),function(a){a.index>f&&(f=a.index)}),f++;for(var g,h,i=0;f>i;i++)g={},b.arr.each(c,function(a){return a.index==i?(g=a,!1):void 0}),h={},b.arr.each(d,function(a){return a.index==i?(h=a,!1):void 0}),e.push(a.extend(!0,{},g,h))}return e}var f,g,h=[],i=[],j=d.ft.$el.find("tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first").first();if(j.length>0){var k=j.parent().is("tbody")&&j.children().length==j.children("td").length;k||(d.$header=j.addClass("footable-header")),j.children("td,th").each(function(b,c){f=a(c),g=f.data(),g.index=b,g.$el=f,g.virtual=k,i.push(g)}),k&&(d.showHeader=!1)}b.is.array(d.o.columns)&&!b.is.emptyArray(d.o.columns)?(b.arr.each(d.o.columns,function(a,b){a.index=b,h.push(a)}),d.parseFinalize(c,e(h,i))):b.is.promise(d.o.columns)?d.o.columns.then(function(a){b.arr.each(a,function(a,b){a.index=b,h.push(a)}),d.parseFinalize(c,e(h,i))},function(a){c.reject(Error("Columns ajax request error: "+a.status+" ("+a.statusText+")"))}):d.parseFinalize(c,e(h,i))})},parseFinalize:function(a,c){var d,e=this,f=[];b.arr.each(c,function(a){(d=b.columns.contains(a.type)?b.columns.make(a.type,e.ft,a):new b.Column(e.ft,a))&&f.push(d)}),b.is.emptyArray(f)?a.reject(Error("No columns supplied.")):(f.sort(function(a,b){
return a.index-b.index}),a.resolve(f))},preinit:function(a){var c=this;return c.ft.raise("preinit.ft.columns",[a]).then(function(){return c.parse(a).then(function(d){c.array=d,c.showHeader=b.is["boolean"](a.showHeader)?a.showHeader:c.showHeader})})},init:function(){var a=this;return this.ft.raise("init.ft.columns",[a.array]).then(function(){a.$create()})},destroy:function(){var a=this;this.ft.raise("destroy.ft.columns").then(function(){a._fromHTML||a.$header.remove()})},predraw:function(){var a=this,c=!0;a.visibleColspan=0,a.firstVisibleIndex=0,a.lastVisibleIndex=0,a.hasHidden=!1,b.arr.each(a.array,function(b){b.hidden=!a.ft.breakpoints.visible(b.breakpoints),!b.hidden&&b.visible&&(c&&(a.firstVisibleIndex=b.index,c=!1),a.lastVisibleIndex=b.index,a.visibleColspan++),b.hidden&&(a.hasHidden=!0)}),a.ft.$el.toggleClass("breakpoint",a.hasHidden)},draw:function(){b.arr.each(this.array,function(a){a.$el.css("display",a.hidden||!a.visible?"none":"table-cell")}),!this.showHeader&&b.is.jq(this.$header.parent())&&this.$header.detach()},$create:function(){var c=this;c.$header=b.is.jq(c.$header)?c.$header:a("<tr/>",{"class":"footable-header"}),c.$header.children("th,td").detach(),b.arr.each(c.array,function(a){c.$header.append(a.$el)}),c.showHeader&&!b.is.jq(c.$header.parent())&&c.ft.$el.children("thead").append(c.$header)},get:function(a){return a instanceof b.Column?a:b.is.string(a)?b.arr.first(this.array,function(b){return b.name==a}):b.is.number(a)?b.arr.first(this.array,function(b){return b.index==a}):b.is.fn(a)?b.arr.get(this.array,a):null},ensure:function(a){var c=this,d=[];return b.is.array(a)?(b.arr.each(a,function(a){d.push(c.get(a))}),d):d}}),b.components.register("columns",b.Columns,900)}(jQuery,FooTable),function(a){a.Defaults.prototype.columns=[],a.Defaults.prototype.showHeader=!0}(FooTable),function(a,b){b.Rows=b.Component.extend({construct:function(a){this._super(a,!0),this.o=a.o,this.array=[],this.all=[],this.showToggle=a.o.showToggle,this.toggleSelector=a.o.toggleSelector,this.toggleColumn=a.o.toggleColumn,this.emptyString=a.o.empty,this.expandFirst=a.o.expandFirst,this.expandAll=a.o.expandAll,this.$empty=null,this._fromHTML=b.is.emptyArray(a.o.rows)&&!b.is.promise(a.o.rows)},parse:function(){var c=this;return a.Deferred(function(a){var d=c.ft.$el.children("tbody").children("tr");b.is.array(c.o.rows)&&c.o.rows.length>0?c.parseFinalize(a,c.o.rows):b.is.promise(c.o.rows)?c.o.rows.then(function(b){c.parseFinalize(a,b)},function(b){a.reject(Error("Rows ajax request error: "+b.status+" ("+b.statusText+")"))}):b.is.jq(d)?(c.parseFinalize(a,d),d.detach()):c.parseFinalize(a,[])})},parseFinalize:function(c,d){var e=this,f=a.map(d,function(a){return new b.Row(e.ft,e.ft.columns.array,a)});c.resolve(f)},preinit:function(a){var c=this;return c.ft.raise("preinit.ft.rows",[a]).then(function(){return c.parse().then(function(d){c.all=d,c.array=c.all.slice(0),c.showToggle=b.is["boolean"](a.showToggle)?a.showToggle:c.showToggle,c.toggleSelector=b.is.string(a.toggleSelector)?a.toggleSelector:c.toggleSelector,c.toggleColumn=b.is.string(a.toggleColumn)?a.toggleColumn:c.toggleColumn,"first"!=c.toggleColumn&&"last"!=c.toggleColumn&&(c.toggleColumn="first"),c.emptyString=b.is.string(a.empty)?a.empty:c.emptyString,c.expandFirst=b.is["boolean"](a.expandFirst)?a.expandFirst:c.expandFirst,c.expandAll=b.is["boolean"](a.expandAll)?a.expandAll:c.expandAll})})},init:function(){var a=this;return a.ft.raise("init.ft.rows",[a.all]).then(function(){a.$create()})},destroy:function(){var a=this;this.ft.raise("destroy.ft.rows").then(function(){b.arr.each(a.array,function(b){b.predraw(!a._fromHTML)}),a.all=a.array=[]})},predraw:function(){b.arr.each(this.array,function(a){a.predraw()}),this.array=this.all.slice(0)},$create:function(){this.$empty=a("<tr/>",{"class":"footable-empty"}).append(a("<td/>").text(this.emptyString))},draw:function(){var a=this,c=a.ft.$el.children("tbody"),d=!0;a.array.length>0?(a.$empty.detach(),b.arr.each(a.array,function(b){(a.expandFirst&&d||a.expandAll)&&(b.expanded=!0,d=!1),b.draw(c)})):(a.$empty.children("td").attr("colspan",a.ft.columns.visibleColspan),c.append(a.$empty))},load:function(c,d){var e=this,f=a.map(c,function(a){return new b.Row(e.ft,e.ft.columns.array,a)});b.arr.each(this.array,function(a){a.predraw()}),this.all=(b.is["boolean"](d)?d:!1)?this.all.concat(f):f,this.array=this.all.slice(0),this.ft.draw()},expand:function(){b.arr.each(this.array,function(a){a.expand()})},collapse:function(){b.arr.each(this.array,function(a){a.collapse()})}}),b.components.register("rows",b.Rows,800)}(jQuery,FooTable),function(a){a.Defaults.prototype.rows=[],a.Defaults.prototype.empty="No results",a.Defaults.prototype.showToggle=!0,a.Defaults.prototype.toggleSelector="tr,td,.footable-toggle",a.Defaults.prototype.toggleColumn="first",a.Defaults.prototype.expandFirst=!1,a.Defaults.prototype.expandAll=!1}(FooTable),function(a){a.Table.prototype.loadRows=function(a,b){this.rows.load(a,b)}}(FooTable),function(a){a.Filter=a.Class.extend({construct:function(b,c,d,e,f,g,h){this.name=b,this.space=!a.is.string(e)||"OR"!=e&&"AND"!=e?"AND":e,this.connectors=a.is["boolean"](f)?f:!0,this.ignoreCase=a.is["boolean"](g)?g:!0,this.hidden=a.is["boolean"](h)?h:!1,this.query=c instanceof a.Query?c:new a.Query(c,this.space,this.connectors,this.ignoreCase),this.columns=d},match:function(b){return a.is.string(b)?(a.is.string(this.query)&&(this.query=new a.Query(this.query,this.space,this.connectors,this.ignoreCase)),this.query instanceof a.Query?this.query.match(b):!1):!1},matchRow:function(b){var c=this,d=a.arr.map(b.cells,function(b){return a.arr.contains(c.columns,b.column)?b.filterValue:null}).join(" ");return c.match(d)}})}(FooTable),function(a,b){b.Filtering=b.Component.extend({construct:function(a){this._super(a,a.o.filtering.enabled),this.filters=a.o.filtering.filters,this.delay=a.o.filtering.delay,this.min=a.o.filtering.min,this.space=a.o.filtering.space,this.connectors=a.o.filtering.connectors,this.ignoreCase=a.o.filtering.ignoreCase,this.exactMatch=a.o.filtering.exactMatch,this.placeholder=a.o.filtering.placeholder,this.dropdownTitle=a.o.filtering.dropdownTitle,this.position=a.o.filtering.position,this.focus=a.o.filtering.focus,this.container=a.o.filtering.container,this.$container=null,this.$row=null,this.$cell=null,this.$form=null,this.$dropdown=null,this.$input=null,this.$button=null,this._filterTimeout=null,this._exactRegExp=/^"(.*?)"$/},preinit:function(a){var c=this;return c.ft.raise("preinit.ft.filtering").then(function(){c.ft.$el.hasClass("footable-filtering")&&(c.enabled=!0),c.enabled=b.is["boolean"](a.filtering)?a.filtering:c.enabled,c.enabled&&(c.space=b.is.string(a.filterSpace)?a.filterSpace:c.space,c.min=b.is.number(a.filterMin)?a.filterMin:c.min,c.connectors=b.is["boolean"](a.filterConnectors)?a.filterConnectors:c.connectors,c.ignoreCase=b.is["boolean"](a.filterIgnoreCase)?a.filterIgnoreCase:c.ignoreCase,c.exactMatch=b.is["boolean"](a.filterExactMatch)?a.filterExactMatch:c.exactMatch,c.focus=b.is["boolean"](a.filterFocus)?a.filterFocus:c.focus,c.delay=b.is.number(a.filterDelay)?a.filterDelay:c.delay,c.placeholder=b.is.string(a.filterPlaceholder)?a.filterPlaceholder:c.placeholder,c.dropdownTitle=b.is.string(a.filterDropdownTitle)?a.filterDropdownTitle:c.dropdownTitle,c.container=b.is.string(a.filterContainer)?a.filterContainer:c.container,c.filters=b.is.array(a.filterFilters)?c.ensure(a.filterFilters):c.ensure(c.filters),c.ft.$el.hasClass("footable-filtering-left")&&(c.position="left"),c.ft.$el.hasClass("footable-filtering-center")&&(c.position="center"),c.ft.$el.hasClass("footable-filtering-right")&&(c.position="right"),c.position=b.is.string(a.filterPosition)?a.filterPosition:c.position)},function(){c.enabled=!1})},init:function(){var a=this;return a.ft.raise("init.ft.filtering").then(function(){a.$create()},function(){a.enabled=!1})},destroy:function(){var a=this;return a.ft.raise("destroy.ft.filtering").then(function(){a.ft.$el.removeClass("footable-filtering").find("thead > tr.footable-filtering").remove()})},$create:function(){var c,d=this,e=a("<div/>",{"class":"form-group footable-filtering-search"}).append(a("<label/>",{"class":"sr-only",text:"Search"})),f=a("<div/>",{"class":"input-group"}).appendTo(e),g=a("<div/>",{"class":"input-group-btn"}),h=a("<button/>",{type:"button","class":"btn btn-default dropdown-toggle"}).on("click",{self:d},d._onDropdownToggleClicked).append(a("<span/>",{"class":"caret"}));switch(d.position){case"left":c="footable-filtering-left";break;case"center":c="footable-filtering-center";break;default:c="footable-filtering-right"}d.ft.$el.addClass("footable-filtering").addClass(c),d.$container=null===d.container?a():a(d.container).first(),d.$container.length?d.$container.addClass("footable-filtering-external").addClass(c):(d.$row=a("<tr/>",{"class":"footable-filtering"}).prependTo(d.ft.$el.children("thead")),d.$cell=a("<th/>").attr("colspan",d.ft.columns.visibleColspan).appendTo(d.$row),d.$container=d.$cell),d.$form=a("<form/>",{"class":"form-inline"}).append(e).appendTo(d.$container),d.$input=a("<input/>",{type:"text","class":"form-control",placeholder:d.placeholder}),d.$button=a("<button/>",{type:"button","class":"btn btn-primary"}).on("click",{self:d},d._onSearchButtonClicked).append(a("<span/>",{"class":"fooicon fooicon-search"})),d.$dropdown=a("<ul/>",{"class":"dropdown-menu dropdown-menu-right"}),b.is.emptyString(d.dropdownTitle)||d.$dropdown.append(a("<li/>",{"class":"dropdown-header",text:d.dropdownTitle})),d.$dropdown.append(b.arr.map(d.ft.columns.array,function(b){return b.filterable?a("<li/>").append(a("<a/>",{"class":"checkbox"}).append(a("<label/>",{html:b.title}).prepend(a("<input/>",{type:"checkbox",checked:!0}).data("__FooTableColumn__",b)))):null})),d.delay>0&&(d.$input.on("keypress keyup paste",{self:d},d._onSearchInputChanged),d.$dropdown.on("click",'input[type="checkbox"]',{self:d},d._onSearchColumnClicked)),g.append(d.$button,h,d.$dropdown),f.append(d.$input,g)},predraw:function(){if(!b.is.emptyArray(this.filters)){var c=this;c.ft.rows.array=a.grep(c.ft.rows.array,function(a){return a.filtered(c.filters)})}},draw:function(){b.is.jq(this.$cell)&&this.$cell.attr("colspan",this.ft.columns.visibleColspan);var a=this.find("search");if(a instanceof b.Filter){var c=a.query.val();this.exactMatch&&this._exactRegExp.test(c)&&(c=c.replace(this._exactRegExp,"$1")),this.$input.val(c)}else this.$input.val(null);this.setButton(!b.arr.any(this.filters,function(a){return!a.hidden}))},addFilter:function(a,c,d,e,f,g,h){var i=this.createFilter(a,c,d,e,f,g,h);i instanceof b.Filter&&(this.removeFilter(i.name),this.filters.push(i))},removeFilter:function(a){b.arr.remove(this.filters,function(b){return b.name==a})},filter:function(a){var b=this;return b.filters=b.ensure(b.filters),b.ft.raise("before.ft.filtering",[b.filters]).then(function(){if(b.filters=b.ensure(b.filters),a)var c=b.$input.prop("selectionStart"),d=b.$input.prop("selectionEnd");return b.ft.draw().then(function(){a&&b.$input.focus().prop({selectionStart:c,selectionEnd:d}),b.ft.raise("after.ft.filtering",[b.filters])})})},clear:function(){return this.filters=b.arr.get(this.filters,function(a){return a.hidden}),this.filter(this.focus)},setButton:function(a){a?this.$button.children(".fooicon").removeClass("fooicon-remove").addClass("fooicon-search"):this.$button.children(".fooicon").removeClass("fooicon-search").addClass("fooicon-remove")},find:function(a){return b.arr.first(this.filters,function(b){return b.name==a})},columns:function(){return b.is.jq(this.$dropdown)?this.$dropdown.find("input:checked").map(function(){return a(this).data("__FooTableColumn__")}).get():this.ft.columns.get(function(a){return a.filterable})},ensure:function(a){var c=this,d=[],e=c.columns();return b.is.emptyArray(a)||b.arr.each(a,function(a){a=c._ensure(a,e),a instanceof b.Filter&&d.push(a)}),d},createFilter:function(a,c,d,e,f,g,h){return b.is.string(a)&&(a={name:a,query:c,columns:d,ignoreCase:e,connectors:f,space:g,hidden:h}),this._ensure(a,this.columns())},_ensure:function(a,c){return(b.is.hash(a)||a instanceof b.Filter)&&!b.is.emptyString(a.name)&&(!b.is.emptyString(a.query)||a.query instanceof b.Query)?(a.columns=b.is.emptyArray(a.columns)?c:this.ft.columns.ensure(a.columns),a.ignoreCase=b.is["boolean"](a.ignoreCase)?a.ignoreCase:this.ignoreCase,a.connectors=b.is["boolean"](a.connectors)?a.connectors:this.connectors,a.hidden=b.is["boolean"](a.hidden)?a.hidden:!1,a.space=!b.is.string(a.space)||"AND"!==a.space&&"OR"!==a.space?this.space:a.space,a.query=b.is.string(a.query)?new b.Query(a.query,a.space,a.connectors,a.ignoreCase):a.query,a instanceof b.Filter?a:new b.Filter(a.name,a.query,a.columns,a.space,a.connectors,a.ignoreCase,a.hidden)):null},_onSearchInputChanged:function(a){var c=a.data.self,d="keypress"==a.type&&!b.is.emptyString(String.fromCharCode(a.charCode)),e="keyup"==a.type&&(8==a.which||46==a.which),f="paste"==a.type;(d||e||f)&&(13==a.which&&a.preventDefault(),null!=c._filterTimeout&&clearTimeout(c._filterTimeout),c._filterTimeout=setTimeout(function(){c._filterTimeout=null;var a=c.$input.val();a.length>=c.min?(c.exactMatch&&!c._exactRegExp.test(a)&&(a='"'+a+'"'),c.addFilter("search",a),c.filter(c.focus)):b.is.emptyString(a)&&c.clear()},c.delay))},_onSearchButtonClicked:function(a){a.preventDefault();var b=a.data.self;null!=b._filterTimeout&&clearTimeout(b._filterTimeout);var c=b.$button.children(".fooicon");if(c.hasClass("fooicon-remove"))b.clear();else{var d=b.$input.val();d.length>=b.min&&(b.exactMatch&&!b._exactRegExp.test(d)&&(d='"'+d+'"'),b.addFilter("search",d),b.filter(b.focus))}},_onSearchColumnClicked:function(a){var b=a.data.self;null!=b._filterTimeout&&clearTimeout(b._filterTimeout),b._filterTimeout=setTimeout(function(){b._filterTimeout=null;var a=b.$button.children(".fooicon");a.hasClass("fooicon-remove")&&(a.removeClass("fooicon-remove").addClass("fooicon-search"),b.addFilter("search",b.$input.val()),b.filter())},b.delay)},_onDropdownToggleClicked:function(b){b.preventDefault(),b.stopPropagation();var c=b.data.self;c.$dropdown.parent().toggleClass("open"),c.$dropdown.parent().hasClass("open")?a(document).on("click.footable",{self:c},c._onDocumentClicked):a(document).off("click.footable",c._onDocumentClicked)},_onDocumentClicked:function(b){if(0==a(b.target).closest(".dropdown-menu").length){b.preventDefault();var c=b.data.self;c.$dropdown.parent().removeClass("open"),a(document).off("click.footable",c._onDocumentClicked)}}}),b.components.register("filtering",b.Filtering,500)}(jQuery,FooTable),function(a){a.Query=a.Class.extend({construct:function(b,c,d,e){this._original=null,this._value=null,this.space=!a.is.string(c)||"OR"!=c&&"AND"!=c?"AND":c,this.connectors=a.is["boolean"](d)?d:!0,this.ignoreCase=a.is["boolean"](e)?e:!0,this.left=null,this.right=null,this.parts=[],this.operator=null,this.val(b)},val:function(b){if(a.is.emptyString(b))return this._value;if(a.is.emptyString(this._original))this._original=b;else if(this._original==b)return;this._value=b,this._parse()},match:function(b){return a.is.emptyString(this.operator)||"OR"===this.operator?this._left(b,!1)||this._match(b,!1)||this._right(b,!1):"AND"===this.operator?this._left(b,!0)&&this._match(b,!0)&&this._right(b,!0):void 0},_match:function(b,c){var d=this,e=!1,f=a.is.emptyString(b);return a.is.emptyArray(d.parts)&&d.left instanceof a.Query?c:a.is.emptyArray(d.parts)?e:("OR"===d.space?a.arr.each(d.parts,function(c){if(c.empty&&f){if(e=!0,c.negate)return e=!1}else{var g=(c.exact?a.str.containsExact:a.str.contains)(b,c.query,d.ignoreCase);if(g&&!c.negate&&(e=!0),g&&c.negate)return e=!1}}):(e=!0,a.arr.each(d.parts,function(c){if(c.empty)return(!f&&!c.negate||f&&c.negate)&&(e=!1),e;var g=(c.exact?a.str.containsExact:a.str.contains)(b,c.query,d.ignoreCase);return(!g&&!c.negate||g&&c.negate)&&(e=!1),e})),e)},_left:function(b,c){return this.left instanceof a.Query?this.left.match(b):c},_right:function(b,c){return this.right instanceof a.Query?this.right.match(b):c},_parse:function(){if(!a.is.emptyString(this._value))if(/\sOR\s/.test(this._value)){this.operator="OR";var b=this._value.split(/(?:\sOR\s)(.*)?/);this.left=new a.Query(b[0],this.space,this.connectors,this.ignoreCase),this.right=new a.Query(b[1],this.space,this.connectors,this.ignoreCase)}else if(/\sAND\s/.test(this._value)){this.operator="AND";var c=this._value.split(/(?:\sAND\s)(.*)?/);this.left=new a.Query(c[0],this.space,this.connectors,this.ignoreCase),this.right=new a.Query(c[1],this.space,this.connectors,this.ignoreCase)}else{var d=this;this.parts=a.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g),function(a){return d._part(a)})}},_part:function(b){var c={query:b,negate:!1,phrase:!1,exact:!1,empty:!1};return a.str.startsWith(c.query,"-")&&(c.query=a.str.from(c.query,"-"),c.negate=!0),/^"(.*?)"$/.test(c.query)?(c.query=c.query.replace(/^"(.*?)"$/,"$1"),c.phrase=!0,c.exact=!0):this.connectors&&/(?:\w)+?([-_\+\.])(?:\w)+?/.test(c.query)&&(c.query=c.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g,function(a,b){return a.replace(b," ")}),c.phrase=!0),c.empty=c.phrase&&a.is.emptyString(c.query),c}})}(FooTable),function(a){a.Cell.prototype.filterValue=null,a.Cell.prototype.__filtering_define__=function(a){this.filterValue=this.column.filterValue.call(this.column,a)},a.Cell.prototype.__filtering_val__=function(b){a.is.defined(b)&&(this.filterValue=this.column.filterValue.call(this.column,b))},a.Cell.extend("define",function(a){this._super(a),this.__filtering_define__(a)}),a.Cell.extend("val",function(a,b,c){var d=this._super(a,b,c);return this.__filtering_val__(a),d})}(FooTable),function(a,b){b.Column.prototype.filterable=!0,b.Column.prototype.filterValue=function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("filterValue");return b.is.defined(d)?""+d:a(c).text()}if(b.is.hash(c)&&b.is.hash(c.options)){if(b.is.string(c.options.filterValue))return c.options.filterValue;b.is.defined(c.value)&&(c=c.value)}return b.is.defined(c)&&null!=c?c+"":""},b.Column.prototype.__filtering_define__=function(a){this.filterable=b.is["boolean"](a.filterable)?a.filterable:this.filterable,this.filterValue=b.checkFnValue(this,a.filterValue,this.filterValue)},b.Column.extend("define",function(a){this._super(a),this.__filtering_define__(a)})}(jQuery,FooTable),function(a){a.Defaults.prototype.filtering={enabled:!1,filters:[],delay:1200,min:1,space:"AND",placeholder:"Search",dropdownTitle:null,position:"right",connectors:!0,ignoreCase:!0,exactMatch:!1,focus:!0,container:null}}(FooTable),function(a){a.Row.prototype.filtered=function(b){var c=!0,d=this;return a.arr.each(b,function(a){return 0==(c=a.matchRow(d))?!1:void 0}),c}}(FooTable),function(a,b){b.Sorter=b.Class.extend({construct:function(a,b){this.column=a,this.direction=b}})}(jQuery,FooTable),function(a,b){b.Sorting=b.Component.extend({construct:function(a){this._super(a,a.o.sorting.enabled),this.o=a.o.sorting,this.column=null,this.allowed=!0,this.initial=null},preinit:function(a){var c=this;this.ft.raise("preinit.ft.sorting",[a]).then(function(){c.ft.$el.hasClass("footable-sorting")&&(c.enabled=!0),c.enabled=b.is["boolean"](a.sorting)?a.sorting:c.enabled,c.enabled&&(c.column=b.arr.first(c.ft.columns.array,function(a){return a.sorted}))},function(){c.enabled=!1})},init:function(){var c=this;this.ft.raise("init.ft.sorting").then(function(){if(!c.initial){var d=!!c.column;c.initial={isset:d,rows:c.ft.rows.all.slice(0),column:d?c.column.name:null,direction:d?c.column.direction:null}}b.arr.each(c.ft.columns.array,function(b){b.sortable&&b.$el.addClass("footable-sortable").append(a("<span/>",{"class":"fooicon fooicon-sort"}))}),c.ft.$el.on("click.footable",".footable-sortable",{self:c},c._onSortClicked)},function(){c.enabled=!1})},destroy:function(){var a=this;this.ft.raise("destroy.ft.paging").then(function(){a.ft.$el.off("click.footable",".footable-sortable",a._onSortClicked),a.ft.$el.children("thead").children("tr.footable-header").children(".footable-sortable").removeClass("footable-sortable footable-asc footable-desc").find("span.fooicon").remove()})},predraw:function(){if(this.column){var a=this,b=a.column;a.ft.rows.array.sort(function(a,c){return"DESC"==b.direction?b.sorter(c.cells[b.index].sortValue,a.cells[b.index].sortValue):b.sorter(a.cells[b.index].sortValue,c.cells[b.index].sortValue)})}},draw:function(){if(this.column){var a=this,b=a.ft.$el.find("thead > tr > .footable-sortable"),c=a.column.$el;b.removeClass("footable-asc footable-desc").children(".fooicon").removeClass("fooicon-sort fooicon-sort-asc fooicon-sort-desc"),b.not(c).children(".fooicon").addClass("fooicon-sort"),c.addClass("DESC"==a.column.direction?"footable-desc":"footable-asc").children(".fooicon").addClass("DESC"==a.column.direction?"fooicon-sort-desc":"fooicon-sort-asc")}},sort:function(a,b){return this._sort(a,b)},toggleAllowed:function(a){a=b.is["boolean"](a)?a:!this.allowed,this.allowed=a,this.ft.$el.toggleClass("footable-sorting-disabled",!this.allowed)},hasChanged:function(){return!(!this.initial||!this.column||this.column.name===this.initial.column&&(this.column.direction===this.initial.direction||null===this.initial.direction&&"ASC"===this.column.direction))},reset:function(){this.initial&&(this.initial.isset?this.sort(this.initial.column,this.initial.direction):(this.column&&(this.column.$el.removeClass("footable-asc footable-desc"),this.column=null),this.ft.rows.all=this.initial.rows,this.ft.draw()))},_sort:function(c,d){if(!this.allowed)return a.Deferred().reject("sorting disabled");var e=this,f=new b.Sorter(e.ft.columns.get(c),b.Sorting.dir(d));return e.ft.raise("before.ft.sorting",[f]).then(function(){return b.arr.each(e.ft.columns.array,function(a){a!=e.column&&(a.direction=null)}),e.column=e.ft.columns.get(f.column),e.column&&(e.column.direction=b.Sorting.dir(f.direction)),e.ft.draw().then(function(){e.ft.raise("after.ft.sorting",[f])})})},_onSortClicked:function(b){var c=b.data.self,d=a(this).closest("th,td"),e=d.is(".footable-asc, .footable-desc")?d.hasClass("footable-desc")?"ASC":"DESC":"ASC";c._sort(d.index(),e)}}),b.Sorting.dir=function(a){return!b.is.string(a)||"ASC"!=a&&"DESC"!=a?"ASC":a},b.components.register("sorting",b.Sorting,600)}(jQuery,FooTable),function(a){a.Cell.prototype.sortValue=null,a.Cell.prototype.__sorting_define__=function(a){this.sortValue=this.column.sortValue.call(this.column,a)},a.Cell.prototype.__sorting_val__=function(b){a.is.defined(b)&&(this.sortValue=this.column.sortValue.call(this.column,b))},a.Cell.extend("define",function(a){this._super(a),this.__sorting_define__(a)}),a.Cell.extend("val",function(a,b,c){var d=this._super(a,b,c);return this.__sorting_val__(a),d})}(FooTable),function(a,b){b.Column.prototype.direction=null,b.Column.prototype.sortable=!0,b.Column.prototype.sorted=!1,b.Column.prototype.sorter=function(a,b){return"string"==typeof a&&(a=a.toLowerCase()),"string"==typeof b&&(b=b.toLowerCase()),a===b?0:b>a?-1:1},b.Column.prototype.sortValue=function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("sortValue");return b.is.defined(d)?d:this.parser(c)}if(b.is.hash(c)&&b.is.hash(c.options)){if(b.is.string(c.options.sortValue))return c.options.sortValue;b.is.defined(c.value)&&(c=c.value)}return b.is.defined(c)&&null!=c?c:null},b.Column.prototype.__sorting_define__=function(a){this.sorter=b.checkFnValue(this,a.sorter,this.sorter),this.direction=b.is.type(a.direction,"string")?b.Sorting.dir(a.direction):null,this.sortable=b.is["boolean"](a.sortable)?a.sortable:!0,this.sorted=b.is["boolean"](a.sorted)?a.sorted:!1,this.sortValue=b.checkFnValue(this,a.sortValue,this.sortValue)},b.Column.extend("define",function(a){this._super(a),this.__sorting_define__(a)})}(jQuery,FooTable),function(a){a.Defaults.prototype.sorting={enabled:!1}}(FooTable),function(a,b){b.HTMLColumn.extend("__sorting_define__",function(c){this._super(c),this.sortUse=b.is.string(c.sortUse)&&-1!==a.inArray(c.sortUse,["html","text"])?c.sortUse:"html"}),b.HTMLColumn.prototype.sortValue=function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("sortValue");return b.is.defined(d)?d:this.parser(c)}if(b.is.hash(c)&&b.is.hash(c.options)){if(b.is.string(c.options.sortValue))return c.options.sortValue;b.is.defined(c.value)&&(c=c.value)}return b.is.defined(c)&&null!=c?c:null}}(jQuery,FooTable),function(a,b){b.NumberColumn.prototype.sortValue=function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("sortValue");return b.is.number(d)?d:this.parser(c)}if(b.is.hash(c)&&b.is.hash(c.options)){if(b.is.string(c.options.sortValue))return this.parser(c);if(b.is.number(c.options.sortValue))return c.options.sortValue;if(b.is.number(c.value))return c.value}return b.is.string(c)?this.parser(c):b.is.number(c)?c:null}}(jQuery,FooTable),function(a){a.Table.prototype.sort=function(b,c){return this.use(a.Sorting).sort(b,c)}}(FooTable),function(a,b){b.Pager=b.Class.extend({construct:function(a,b,c,d,e){this.total=a,this.current=b,this.size=c,this.page=d,this.forward=e}})}(jQuery,FooTable),function(a,b){b.Paging=b.Component.extend({construct:function(a){this._super(a,a.o.paging.enabled),this.strings=a.o.paging.strings,this.current=a.o.paging.current,this.size=a.o.paging.size,this.limit=a.o.paging.limit,this.position=a.o.paging.position,this.countFormat=a.o.paging.countFormat,this.container=a.o.paging.container,this.total=-1,this.totalRows=0,this.previous=-1,this.formattedCount=null,this.$container=null,this.$wrapper=null,this.$row=null,this.$cell=null,this.$pagination=null,this.$count=null,this.detached=!0,this._createdLinks=0},preinit:function(a){var c=this;this.ft.raise("preinit.ft.paging",[a]).then(function(){c.ft.$el.hasClass("footable-paging")&&(c.enabled=!0),c.enabled=b.is["boolean"](a.paging)?a.paging:c.enabled,c.enabled&&(c.size=b.is.number(a.pagingSize)?a.pagingSize:c.size,c.current=b.is.number(a.pagingCurrent)?a.pagingCurrent:c.current,c.limit=b.is.number(a.pagingLimit)?a.pagingLimit:c.limit,c.ft.$el.hasClass("footable-paging-left")&&(c.position="left"),c.ft.$el.hasClass("footable-paging-center")&&(c.position="center"),c.ft.$el.hasClass("footable-paging-right")&&(c.position="right"),c.position=b.is.string(a.pagingPosition)?a.pagingPosition:c.position,c.countFormat=b.is.string(a.pagingCountFormat)?a.pagingCountFormat:c.countFormat,c.container=b.is.string(a.pagingContainer)?a.pagingContainer:c.container,c.total=Math.ceil(c.ft.rows.all.length/c.size))},function(){c.enabled=!1})},init:function(){var a=this;this.ft.raise("init.ft.paging").then(function(){a.$create()},function(){a.enabled=!1})},destroy:function(){var a=this;this.ft.raise("destroy.ft.paging").then(function(){a.ft.$el.removeClass("footable-paging").find("tfoot > tr.footable-paging").remove(),a.detached=!0,a._createdLinks=0})},predraw:function(){this.total=Math.ceil(this.ft.rows.array.length/this.size),this.current=this.current>this.total?this.total:this.current<1?1:this.current,this.totalRows=this.ft.rows.array.length,this.totalRows>this.size&&(this.ft.rows.array=this.ft.rows.array.splice((this.current-1)*this.size,this.size)),this.formattedCount=this.format(this.countFormat)},draw:function(){if(this.total<=1)this.detached||(this.$row?this.$row.detach():this.$wrapper.detach(),this.detached=!0);else{if(this.detached){if(this.$row){var c=this.ft.$el.children("tfoot");0==c.length&&(c=a("<tfoot/>"),this.ft.$el.append(c)),this.$row.appendTo(c)}else this.$wrapper.appendTo(this.$container);this.detached=!1}b.is.jq(this.$cell)&&this.$cell.attr("colspan",this.ft.columns.visibleColspan),this._createLinks(),this._setVisible(this.current,this.current>this.previous),this._setNavigation(!0),this.$count.text(this.formattedCount)}},$create:function(){this._createdLinks=0;var c="footable-paging-center";switch(this.position){case"left":c="footable-paging-left";break;case"right":c="footable-paging-right"}if(this.ft.$el.addClass("footable-paging").addClass(c),this.$container=null===this.container?null:a(this.container).first(),b.is.jq(this.$container))this.$container.addClass("footable-paging-external").addClass(c);else{var d=this.ft.$el.children("tfoot");0==d.length&&(d=a("<tfoot/>"),this.ft.$el.append(d)),this.$row=a("<tr/>",{"class":"footable-paging"}).prependTo(d),this.$container=this.$cell=a("<td/>").attr("colspan",this.ft.columns.visibleColspan).appendTo(this.$row)}this.$wrapper=a("<div/>",{"class":"footable-pagination-wrapper"}).appendTo(this.$container),this.$pagination=a("<ul/>",{"class":"pagination"}).on("click.footable","a.footable-page-link",{self:this},this._onPageClicked),this.$count=a("<span/>",{"class":"label label-default"}),this.$wrapper.append(this.$pagination,a("<div/>",{"class":"divider"}),this.$count),this.detached=!1},format:function(a){var b=this.size*(this.current-1)+1,c=this.size*this.current;return 0==this.ft.rows.array.length?(b=0,c=0):c=c>this.totalRows?this.totalRows:c,a.replace(/\{CP}/g,this.current).replace(/\{TP}/g,this.total).replace(/\{PF}/g,b).replace(/\{PL}/g,c).replace(/\{TR}/g,this.totalRows)},first:function(){return this._set(1)},prev:function(){return this._set(this.current-1>0?this.current-1:1)},next:function(){return this._set(this.current+1<this.total?this.current+1:this.total)},last:function(){return this._set(this.total)},"goto":function(a){return this._set(a>this.total?this.total:1>a?1:a)},prevPages:function(){var a=this.$pagination.children("li.footable-page.visible:first").data("page")-1;this._setVisible(a,!0),this._setNavigation(!1)},nextPages:function(){var a=this.$pagination.children("li.footable-page.visible:last").data("page")+1;this._setVisible(a,!1),this._setNavigation(!1)},pageSize:function(a){return a=parseInt(a),isNaN(a)?this.size:(this.size=a,this.total=Math.ceil(this.ft.rows.all.length/this.size),b.is.jq(this.$wrapper)&&(this.$container.is("td")?this.$row.remove():this.$wrapper.remove()),this.$create(),void this.ft.draw())},_set:function(c){var d=this,e=new b.Pager(d.total,d.current,d.size,c,c>d.current);return d.ft.raise("before.ft.paging",[e]).then(function(){return e.page=e.page>e.total?e.total:e.page,e.page=e.page<1?1:e.page,d.current==c?a.when():(d.previous=d.current,d.current=e.page,d.ft.draw().then(function(){d.ft.raise("after.ft.paging",[e])}))})},_createLinks:function(){if(this._createdLinks!==this.total){var b=this,c=b.total>1,d=function(b,c,d){return a("<li/>",{"class":d}).attr("data-page",b).append(a("<a/>",{"class":"footable-page-link",href:"#"}).data("page",b).html(c))};b.$pagination.empty(),c&&(b.$pagination.append(d("first",b.strings.first,"footable-page-nav")),b.$pagination.append(d("prev",b.strings.prev,"footable-page-nav")),b.limit>0&&b.limit<b.total&&b.$pagination.append(d("prev-limit",b.strings.prevPages,"footable-page-nav")));for(var e,f=0;f<b.total;f++)e=d(f+1,f+1,"footable-page"),b.$pagination.append(e);c&&(b.limit>0&&b.limit<b.total&&b.$pagination.append(d("next-limit",b.strings.nextPages,"footable-page-nav")),b.$pagination.append(d("next",b.strings.next,"footable-page-nav")),b.$pagination.append(d("last",b.strings.last,"footable-page-nav"))),b._createdLinks=b.total}},_setNavigation:function(a){1==this.current?this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass("disabled"):this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass("disabled"),this.current==this.total?this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass("disabled"):this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass("disabled"),1==(this.$pagination.children("li.footable-page.visible:first").data("page")||1)?this.$pagination.children('li[data-page="prev-limit"]').addClass("disabled"):this.$pagination.children('li[data-page="prev-limit"]').removeClass("disabled"),(this.$pagination.children("li.footable-page.visible:last").data("page")||this.limit)==this.total?this.$pagination.children('li[data-page="next-limit"]').addClass("disabled"):this.$pagination.children('li[data-page="next-limit"]').removeClass("disabled"),this.limit>0&&this.total<this.limit?this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display","none"):this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display",""),
a&&this.$pagination.children("li.footable-page").removeClass("active").filter('li[data-page="'+this.current+'"]').addClass("active")},_setVisible:function(a,b){if(this.limit>0&&this.total>this.limit){if(!this.$pagination.children('li.footable-page[data-page="'+a+'"]').hasClass("visible")){var c=0,d=0;1==b?(d=a>this.total?this.total:a,c=d-this.limit):(c=1>a?0:a-1,d=c+this.limit),0>c&&(c=0,d=this.limit>this.total?this.total:this.limit),d>this.total&&(d=this.total,c=this.total-this.limit<0?0:this.total-this.limit),this.$pagination.children("li.footable-page").removeClass("visible").slice(c,d).addClass("visible")}}else this.$pagination.children("li.footable-page").removeClass("visible").slice(0,this.total).addClass("visible")},_onPageClicked:function(b){if(b.preventDefault(),!a(b.target).closest("li").is(".active,.disabled")){var c=b.data.self,d=a(this).data("page");switch(d){case"first":return void c.first();case"prev":return void c.prev();case"next":return void c.next();case"last":return void c.last();case"prev-limit":return void c.prevPages();case"next-limit":return void c.nextPages();default:return void c._set(d)}}}}),b.components.register("paging",b.Paging,400)}(jQuery,FooTable),function(a){a.Defaults.prototype.paging={enabled:!1,countFormat:"{CP} of {TP}",current:1,limit:5,position:"center",size:10,container:null,strings:{first:"&laquo;",prev:"&lsaquo;",next:"&rsaquo;",last:"&raquo;",prevPages:"...",nextPages:"..."}}}(FooTable),function(a){a.Table.prototype.gotoPage=function(b){return this.use(a.Paging)["goto"](b)},a.Table.prototype.nextPage=function(){return this.use(a.Paging).next()},a.Table.prototype.prevPage=function(){return this.use(a.Paging).prev()},a.Table.prototype.firstPage=function(){return this.use(a.Paging).first()},a.Table.prototype.lastPage=function(){return this.use(a.Paging).last()},a.Table.prototype.nextPages=function(){return this.use(a.Paging).nextPages()},a.Table.prototype.prevPages=function(){return this.use(a.Paging).prevPages()},a.Table.prototype.pageSize=function(b){return this.use(a.Paging).pageSize(b)}}(FooTable),function(a,b){b.Editing=b.Component.extend({construct:function(c){this._super(c,c.o.editing.enabled),this.pageToNew=c.o.editing.pageToNew,this.alwaysShow=c.o.editing.alwaysShow,this.column=a.extend(!0,{},c.o.editing.column,{visible:this.alwaysShow}),this.position=c.o.editing.position,this.showText=c.o.editing.showText,this.hideText=c.o.editing.hideText,this.addText=c.o.editing.addText,this.editText=c.o.editing.editText,this.deleteText=c.o.editing.deleteText,this.viewText=c.o.editing.viewText,this.allowAdd=c.o.editing.allowAdd,this.allowEdit=c.o.editing.allowEdit,this.allowDelete=c.o.editing.allowDelete,this.allowView=c.o.editing.allowView,this._$buttons=null,this.callbacks={addRow:b.checkFnValue(this,c.o.editing.addRow),editRow:b.checkFnValue(this,c.o.editing.editRow),deleteRow:b.checkFnValue(this,c.o.editing.deleteRow),viewRow:b.checkFnValue(this,c.o.editing.viewRow)}},preinit:function(c){var d=this;this.ft.raise("preinit.ft.editing",[c]).then(function(){if(d.ft.$el.hasClass("footable-editing")&&(d.enabled=!0),d.enabled=b.is["boolean"](c.editing)?c.editing:d.enabled,d.enabled){if(d.pageToNew=b.is["boolean"](c.editingPageToNew)?c.editingPageToNew:d.pageToNew,d.alwaysShow=b.is["boolean"](c.editingAlwaysShow)?c.editingAlwaysShow:d.alwaysShow,d.position=b.is.string(c.editingPosition)?c.editingPosition:d.position,d.showText=b.is.string(c.editingShowText)?c.editingShowText:d.showText,d.hideText=b.is.string(c.editingHideText)?c.editingHideText:d.hideText,d.addText=b.is.string(c.editingAddText)?c.editingAddText:d.addText,d.editText=b.is.string(c.editingEditText)?c.editingEditText:d.editText,d.deleteText=b.is.string(c.editingDeleteText)?c.editingDeleteText:d.deleteText,d.viewText=b.is.string(c.editingViewText)?c.editingViewText:d.viewText,d.allowAdd=b.is["boolean"](c.editingAllowAdd)?c.editingAllowAdd:d.allowAdd,d.allowEdit=b.is["boolean"](c.editingAllowEdit)?c.editingAllowEdit:d.allowEdit,d.allowDelete=b.is["boolean"](c.editingAllowDelete)?c.editingAllowDelete:d.allowDelete,d.allowView=b.is["boolean"](c.editingAllowView)?c.editingAllowView:d.allowView,d.column=new b.EditingColumn(d.ft,d,a.extend(!0,{},d.column,c.editingColumn,{visible:d.alwaysShow})),d.ft.$el.hasClass("footable-editing-left")&&(d.position="left"),d.ft.$el.hasClass("footable-editing-right")&&(d.position="right"),"right"===d.position)d.column.index=d.ft.columns.array.length;else{d.column.index=0;for(var e=0,f=d.ft.columns.array.length;f>e;e++)d.ft.columns.array[e].index+=1}d.ft.columns.array.push(d.column),d.ft.columns.array.sort(function(a,b){return a.index-b.index}),d.callbacks.addRow=b.checkFnValue(d,c.editingAddRow,d.callbacks.addRow),d.callbacks.editRow=b.checkFnValue(d,c.editingEditRow,d.callbacks.editRow),d.callbacks.deleteRow=b.checkFnValue(d,c.editingDeleteRow,d.callbacks.deleteRow),d.callbacks.viewRow=b.checkFnValue(d,c.editingViewRow,d.callbacks.viewRow)}},function(){d.enabled=!1})},init:function(){var a=this;this.ft.raise("init.ft.editing").then(function(){a.$create()},function(){a.enabled=!1})},destroy:function(){var a=this;this.ft.raise("destroy.ft.editing").then(function(){a.ft.$el.removeClass("footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view").off("click.ft.editing").find("tfoot > tr.footable-editing").remove()})},$create:function(){var b=this,c="right"===b.position?"footable-editing-right":"footable-editing-left";b.ft.$el.addClass("footable-editing").addClass(c).on("click.ft.editing",".footable-show",{self:b},b._onShowClick).on("click.ft.editing",".footable-hide",{self:b},b._onHideClick).on("click.ft.editing",".footable-edit",{self:b},b._onEditClick).on("click.ft.editing",".footable-delete",{self:b},b._onDeleteClick).on("click.ft.editing",".footable-view",{self:b},b._onViewClick).on("click.ft.editing",".footable-add",{self:b},b._onAddClick),b.$cell=a("<td/>").attr("colspan",b.ft.columns.visibleColspan).append(b.$buttonShow()),b.allowAdd&&b.$cell.append(b.$buttonAdd()),b.$cell.append(b.$buttonHide()),b.alwaysShow&&b.ft.$el.addClass("footable-editing-always-show"),b.allowAdd||b.ft.$el.addClass("footable-editing-no-add"),b.allowEdit||b.ft.$el.addClass("footable-editing-no-edit"),b.allowDelete||b.ft.$el.addClass("footable-editing-no-delete"),b.allowView||b.ft.$el.addClass("footable-editing-no-view");var d=b.ft.$el.children("tfoot");0==d.length&&(d=a("<tfoot/>"),b.ft.$el.append(d)),b.$row=a("<tr/>",{"class":"footable-editing"}).append(b.$cell).appendTo(d)},$buttonShow:function(){return'<button type="button" class="btn btn-primary footable-show">'+this.showText+"</button>"},$buttonHide:function(){return'<button type="button" class="btn btn-default footable-hide">'+this.hideText+"</button>"},$buttonAdd:function(){return'<button type="button" class="btn btn-primary footable-add">'+this.addText+"</button> "},$buttonEdit:function(){return'<button type="button" class="btn btn-default footable-edit">'+this.editText+"</button> "},$buttonDelete:function(){return'<button type="button" class="btn btn-default footable-delete">'+this.deleteText+"</button>"},$buttonView:function(){return'<button type="button" class="btn btn-default footable-view">'+this.viewText+"</button> "},$rowButtons:function(){return b.is.jq(this._$buttons)?this._$buttons.clone():(this._$buttons=a('<div class="btn-group btn-group-xs" role="group"></div>'),this.allowView&&this._$buttons.append(this.$buttonView()),this.allowEdit&&this._$buttons.append(this.$buttonEdit()),this.allowDelete&&this._$buttons.append(this.$buttonDelete()),this._$buttons)},draw:function(){this.$cell.attr("colspan",this.ft.columns.visibleColspan)},_onEditClick:function(c){c.preventDefault();var d=c.data.self,e=a(this).closest("tr").data("__FooTableRow__");e instanceof b.Row&&d.ft.raise("edit.ft.editing",[e]).then(function(){d.callbacks.editRow.call(d.ft,e)})},_onDeleteClick:function(c){c.preventDefault();var d=c.data.self,e=a(this).closest("tr").data("__FooTableRow__");e instanceof b.Row&&d.ft.raise("delete.ft.editing",[e]).then(function(){d.callbacks.deleteRow.call(d.ft,e)})},_onViewClick:function(c){c.preventDefault();var d=c.data.self,e=a(this).closest("tr").data("__FooTableRow__");e instanceof b.Row&&d.ft.raise("view.ft.editing",[e]).then(function(){d.callbacks.viewRow.call(d.ft,e)})},_onAddClick:function(a){a.preventDefault();var b=a.data.self;b.ft.raise("add.ft.editing").then(function(){b.callbacks.addRow.call(b.ft)})},_onShowClick:function(a){a.preventDefault();var b=a.data.self;b.ft.raise("show.ft.editing").then(function(){b.ft.$el.addClass("footable-editing-show"),b.column.visible=!0,b.ft.draw()})},_onHideClick:function(a){a.preventDefault();var b=a.data.self;b.ft.raise("hide.ft.editing").then(function(){b.ft.$el.removeClass("footable-editing-show"),b.column.visible=!1,b.ft.draw()})}}),b.components.register("editing",b.Editing,850)}(jQuery,FooTable),function(a,b){b.EditingColumn=b.Column.extend({construct:function(a,b,c){this._super(a,c,"editing"),this.editing=b,this.internal=!0},$create:function(){(this.$el=!this.virtual&&b.is.jq(this.$el)?this.$el:a("<th/>",{"class":"footable-editing"})).html(this.title)},parser:function(c){if(b.is.string(c)&&(c=a(a.trim(c))),b.is.element(c)&&(c=a(c)),b.is.jq(c)){var d=c.prop("tagName").toLowerCase();return"td"==d||"th"==d?c.data("value")||c.contents():c}return null},createCell:function(c){var d=this.editing.$rowButtons(),e=a("<td/>").append(d);return b.is.jq(c.$el)&&(0===this.index?e.prependTo(c.$el):e.insertAfter(c.$el.children().eq(this.index-1))),new b.Cell(this.ft,c,this,e||e.html())}}),b.columns.register("editing",b.EditingColumn)}(jQuery,FooTable),function(a,b){b.Defaults.prototype.editing={enabled:!1,pageToNew:!0,position:"right",alwaysShow:!1,addRow:function(){},editRow:function(a){},deleteRow:function(a){},viewRow:function(a){},showText:'<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit rows',hideText:"Cancel",addText:"New row",editText:'<span class="fooicon fooicon-pencil" aria-hidden="true"></span>',deleteText:'<span class="fooicon fooicon-trash" aria-hidden="true"></span>',viewText:'<span class="fooicon fooicon-stats" aria-hidden="true"></span>',allowAdd:!0,allowEdit:!0,allowDelete:!0,allowView:!1,column:{classes:"footable-editing",name:"editing",title:"",filterable:!1,sortable:!1}}}(jQuery,FooTable),function(a,b){b.is.defined(b.Paging)&&(b.Paging.prototype.unpaged=[],b.Paging.extend("predraw",function(){this.unpaged=this.ft.rows.array.slice(0),this._super()}))}(jQuery,FooTable),function(a,b){b.Row.prototype.add=function(c){c=b.is["boolean"](c)?c:!0;var d=this;return a.Deferred(function(a){var b=d.ft.rows.all.push(d)-1;return c?d.ft.draw().then(function(){a.resolve(b)}):void a.resolve(b)})},b.Row.prototype["delete"]=function(c){c=b.is["boolean"](c)?c:!0;var d=this;return a.Deferred(function(a){var e=d.ft.rows.all.indexOf(d);return b.is.number(e)&&e>=0&&e<d.ft.rows.all.length&&(d.ft.rows.all.splice(e,1),c)?d.ft.draw().then(function(){a.resolve(d)}):void a.resolve(d)})},b.is.defined(b.Paging)&&b.Row.extend("add",function(a){a=b.is["boolean"](a)?a:!0;var c,d=this,e=this._super(a),f=d.ft.use(b.Editing);return f&&f.pageToNew&&(c=d.ft.use(b.Paging))&&a?e.then(function(){var a=c.unpaged.indexOf(d),b=Math.ceil((a+1)/c.size);return c.current!==b?c["goto"](b):void 0}):e}),b.is.defined(b.Sorting)&&b.Row.extend("val",function(a,c){c=b.is["boolean"](c)?c:!0;var d=this._super(a);if(!b.is.hash(a))return d;var e=this;return c&&e.ft.draw().then(function(){var a,c=e.ft.use(b.Editing);if(b.is.defined(b.Paging)&&c&&c.pageToNew&&(a=e.ft.use(b.Paging))){var d=a.unpaged.indexOf(e),f=Math.ceil((d+1)/a.size);if(a.current!==f)return a["goto"](f)}}),d})}(jQuery,FooTable),function(a){a.Rows.prototype.add=function(b,c){var d=b;a.is.hash(b)&&(d=new FooTable.Row(this.ft,this.ft.columns.array,b)),d instanceof FooTable.Row&&d.add(c)},a.Rows.prototype.update=function(b,c,d){var e=this.ft.rows.all.length,f=b;a.is.number(b)&&b>=0&&e>b&&(f=this.ft.rows.all[b]),f instanceof FooTable.Row&&a.is.hash(c)&&f.val(c,d)},a.Rows.prototype["delete"]=function(b,c){var d=this.ft.rows.all.length,e=b;a.is.number(b)&&b>=0&&d>b&&(e=this.ft.rows.all[b]),e instanceof FooTable.Row&&e["delete"](c)}}(FooTable),function(a,b){var c=0,d=function(a){var b,c,d=2166136261;for(b=0,c=a.length;c>b;b++)d^=a.charCodeAt(b),d+=(d<<1)+(d<<4)+(d<<7)+(d<<8)+(d<<24);return d>>>0}(location.origin+location.pathname);b.State=b.Component.extend({construct:function(a){this._super(a,a.o.state.enabled),this._key="1",this.key=this._key+(b.is.string(a.o.state.key)?a.o.state.key:this._uid()),this.filtering=b.is["boolean"](a.o.state.filtering)?a.o.state.filtering:!0,this.paging=b.is["boolean"](a.o.state.paging)?a.o.state.paging:!0,this.sorting=b.is["boolean"](a.o.state.sorting)?a.o.state.sorting:!0},preinit:function(a){var c=this;this.ft.raise("preinit.ft.state",[a]).then(function(){c.enabled=b.is["boolean"](a.state)?a.state:c.enabled,c.enabled&&(c.key=c._key+(b.is.string(a.stateKey)?a.stateKey:c.key),c.filtering=b.is["boolean"](a.stateFiltering)?a.stateFiltering:c.filtering,c.paging=b.is["boolean"](a.statePaging)?a.statePaging:c.paging,c.sorting=b.is["boolean"](a.stateSorting)?a.stateSorting:c.sorting)},function(){c.enabled=!1})},get:function(a){return JSON.parse(localStorage.getItem(this.key+":"+a))},set:function(a,b){localStorage.setItem(this.key+":"+a,JSON.stringify(b))},remove:function(a){localStorage.removeItem(this.key+":"+a)},read:function(){this.ft.execute(!1,!0,"readState")},write:function(){this.ft.execute(!1,!0,"writeState")},clear:function(){this.ft.execute(!1,!0,"clearState")},_uid:function(){var a=this.ft.$el.attr("id");return d+"_"+(b.is.string(a)?a:++c)}}),b.components.register("state",b.State,700)}(jQuery,FooTable),function(a){a.Component.prototype.readState=function(){},a.Component.prototype.writeState=function(){},a.Component.prototype.clearState=function(){}}(FooTable),function(a){a.Defaults.prototype.state={enabled:!1,filtering:!0,paging:!0,sorting:!0,key:null}}(FooTable),function(a){a.Filtering&&(a.Filtering.prototype.readState=function(){if(this.ft.state.filtering){var b=this.ft.state.get("filtering");a.is.hash(b)&&!a.is.emptyArray(b.filters)&&(this.filters=this.ensure(b.filters))}},a.Filtering.prototype.writeState=function(){if(this.ft.state.filtering){var b=a.arr.map(this.filters,function(b){return{name:b.name,query:b.query instanceof a.Query?b.query.val():b.query,columns:a.arr.map(b.columns,function(a){return a.name}),hidden:b.hidden,space:b.space,connectors:b.connectors,ignoreCase:b.ignoreCase}});this.ft.state.set("filtering",{filters:b})}},a.Filtering.prototype.clearState=function(){this.ft.state.filtering&&this.ft.state.remove("filtering")})}(FooTable),function(a){a.Paging&&(a.Paging.prototype.readState=function(){if(this.ft.state.paging){var b=this.ft.state.get("paging");a.is.hash(b)&&(this.current=b.current,this.size=b.size)}},a.Paging.prototype.writeState=function(){this.ft.state.paging&&this.ft.state.set("paging",{current:this.current,size:this.size})},a.Paging.prototype.clearState=function(){this.ft.state.paging&&this.ft.state.remove("paging")})}(FooTable),function(a){a.Sorting&&(a.Sorting.prototype.readState=function(){if(this.ft.state.sorting){var b=this.ft.state.get("sorting");if(a.is.hash(b)){var c=this.ft.columns.get(b.column);c instanceof a.Column&&(this.column=c,this.column.direction=b.direction)}}},a.Sorting.prototype.writeState=function(){this.ft.state.sorting&&this.column instanceof a.Column&&this.ft.state.set("sorting",{column:this.column.name,direction:this.column.direction})},a.Sorting.prototype.clearState=function(){this.ft.state.sorting&&this.ft.state.remove("sorting")})}(FooTable),function(a){a.Table.extend("_construct",function(a){return this.state=this.use(FooTable.State),this._super(a)}),a.Table.extend("_preinit",function(){var a=this;return a._super().then(function(){a.state.enabled&&a.state.read()})}),a.Table.extend("draw",function(){var a=this;return a._super().then(function(){a.state.enabled&&a.state.write()})})}(FooTable),function(a,b){b.Export=b.Component.extend({construct:function(a){this._super(a,!0),this.snapshot=[]},predraw:function(){this.snapshot=this.ft.rows.array.slice(0)},columns:function(){var a=[];return b.arr.each(this.ft.columns.array,function(b){b.internal||a.push({type:b.type,name:b.name,title:b.title,visible:b.visible,hidden:b.hidden,classes:b.classes,style:b.style})}),a},rows:function(a){a=b.is["boolean"](a)?a:!1;var c=a?this.ft.rows.all:this.snapshot,d=[];return b.arr.each(c,function(a){d.push(a.val())}),d},json:function(a){return JSON.parse(JSON.stringify({columns:this.columns(),rows:this.rows(a)}))},csv:function(a){var c,d,e="",f=this.columns();b.arr.each(f,function(a,b){d='"'+a.title.replace(/"/g,'""')+'"',e+=0===b?d:","+d}),e+="\n";var g=a?this.ft.rows.all:this.snapshot;return b.arr.each(g,function(a){b.arr.each(a.cells,function(a,b){a.column.internal||(c=a.column.stringify.call(a.column,a.value,a.ft.o,a.row.value),d='"'+c.replace(/"/g,'""')+'"',e+=0===b?d:","+d)}),e+="\n"}),e}}),b.components.register("export",b.Export,490)}(jQuery,FooTable),function(a){a.Column.prototype.__export_define__=function(b){this.stringify=a.checkFnValue(this,b.stringify,this.stringify)},a.Column.extend("define",function(a){this._super(a),this.__export_define__(a)}),a.Column.prototype.stringify=function(a,b,c){return a+""},a.is.defined(a.DateColumn)&&(a.DateColumn.prototype.stringify=function(b,c,d){return a.is.object(b)&&a.is["boolean"](b._isAMomentObject)&&b.isValid()?b.format(this.formatString):""}),a.ObjectColumn.prototype.stringify=function(b,c,d){return a.is.object(b)?JSON.stringify(b):""},a.ArrayColumn.prototype.stringify=function(b,c,d){return a.is.array(b)?JSON.stringify(b):""}}(FooTable),function(a){a.Table.prototype.toJSON=function(b){return this.use(a.Export).json(b)},a.Table.prototype.toCSV=function(b){return this.use(a.Export).csv(b)}}(FooTable);;
// ==================================================
// fancyBox v3.3.5
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2018 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a=[],s=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=t&&t.data?t.data.options:e||{},o=e.$target||n(t.currentTarget),i=o.attr("data-fancybox")||"",i?(a=e.selector?n(e.selector):t.data?t.data.items:[],a=a.length?a.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]'),s=a.index(o),s<0&&(s=0)):a=[o],n.fancybox.open(a,e,s))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={loop:!1,gutter:50,keyboard:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',arrowLeft:'<a data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></a>',arrowRight:'<a data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></a>'},parentEl:"body",autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t];return"transitionend"}(),f=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},h=function(t,o,i){var a=this;a.opts=p({index:i},n.fancybox.defaults),n.isPlainObject(o)&&(a.opts=p(a.opts,o)),n.fancybox.isMobile&&(a.opts=p(a.opts,a.opts.mobile)),a.id=a.opts.id||++c,a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=!0,a.group=[],a.slides={},a.addContent(t),a.group.length&&(a.$lastFocus=n(e.activeElement).trigger("blur"),a.init())};n.extend(h.prototype,{init:function(){var i,a,s,r=this,c=r.group[r.currIndex],l=c.opts,d=n.fancybox.scrollbarWidth;n.fancybox.getInstance()||l.hideScrollbar===!1||(n("body").addClass("fancybox-active"),!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(d===o&&(i=n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"),d=n.fancybox.scrollbarWidth=i[0].offsetWidth-i[0].clientWidth,i.remove()),n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+d+"px; }</style>"),n("body").addClass("compensate-for-scrollbar"))),s="",n.each(l.buttons,function(t,e){s+=l.btnTpl[e]||""}),a=n(r.translate(r,l.baseTpl.replace("{{buttons}}",s).replace("{{arrows}}",l.btnTpl.arrowLeft+l.btnTpl.arrowRight))).attr("id","fancybox-container-"+r.id).addClass("fancybox-is-hidden").addClass(l.baseClass).data("FancyBox",r).appendTo(l.parentEl),r.$refs={container:a},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){r.$refs[t]=a.find(".fancybox-"+t)}),r.trigger("onInit"),r.activate(),r.jumpTo(r.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},addContent:function(t){var e,i=this,a=n.makeArray(t);n.each(a,function(t,e){var a,s,r,c,l,d={},u={};n.isPlainObject(e)?(d=e,u=e.opts||e):"object"===n.type(e)&&n(e).length?(a=n(e),u=a.data()||{},u=n.extend(!0,{},u,u.options),u.$orig=a,d.src=i.opts.src||u.src||a.attr("href"),d.type||d.src||(d.type="inline",d.src=e)):d={type:"html",src:e+""},d.opts=n.extend(!0,{},i.opts,u),n.isArray(u.buttons)&&(d.opts.buttons=u.buttons),s=d.type||d.opts.type,c=d.src||"",!s&&c&&((r=c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))?(s="video",d.opts.videoFormat||(d.opts.videoFormat="video/"+("ogv"===r[1]?"ogg":r[1]))):c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":c.match(/\.(pdf)((\?|#).*)?$/i)?s="iframe":"#"===c.charAt(0)&&(s="inline")),s?d.type=s:i.trigger("objectNeedsType",d),d.contentType||(d.contentType=n.inArray(d.type,["html","inline","ajax"])>-1?"html":d.type),d.index=i.group.length,"auto"==d.opts.smallBtn&&(d.opts.smallBtn=n.inArray(d.type,["html","inline","ajax"])>-1),"auto"===d.opts.toolbar&&(d.opts.toolbar=!d.opts.smallBtn),d.opts.$trigger&&d.index===i.opts.index&&(d.opts.$thumb=d.opts.$trigger.find("img:first")),d.opts.$thumb&&d.opts.$thumb.length||!d.opts.$orig||(d.opts.$thumb=d.opts.$orig.find("img:first")),"function"===n.type(d.opts.caption)&&(d.opts.caption=d.opts.caption.apply(e,[i,d])),"function"===n.type(i.opts.caption)&&(d.opts.caption=i.opts.caption.apply(e,[i,d])),d.opts.caption instanceof n||(d.opts.caption=d.opts.caption===o?"":d.opts.caption+""),"ajax"===d.type&&(l=c.split(/\s+/,2),l.length>1&&(d.src=l.shift(),d.opts.filter=l.shift())),d.opts.modal&&(d.opts=n.extend(!0,d.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),i.group.push(d)}),Object.keys(i.slides).length&&(i.updateControls(),e=i.Thumbs,e&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}).on("click.fb","[data-fancybox-zoom]",function(t){o[o.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?d(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},n.fancybox.isMobile?600:250))}),r.on("focusin.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null;o.isClosing||!o.current||!o.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||o&&"fixed"!==n(t.target).css("position")&&!o.$refs.container.has(t.target).length&&(t.stopPropagation(),o.focus())}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!(t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input")||n(t.target).is("textarea")))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&!o.isDragging&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var i,a,s,r,c,l,d,u=this,p=u.group.length;if(!(u.isDragging||u.isClosing||u.isAnimating&&u.firstRun)){if(t=parseInt(t,10),a=u.current?u.current.opts.loop:u.opts.loop,!a&&(t<0||t>=p))return!1;if(i=u.firstRun=!Object.keys(u.slides).length,!(p<2&&!i&&u.isDragging)){if(r=u.current,u.prevIndex=u.currIndex,u.prevPos=u.currPos,s=u.createSlide(t),p>1&&((a||s.index>0)&&u.createSlide(t-1),(a||s.index<p-1)&&u.createSlide(t+1)),u.current=s,u.currIndex=s.index,u.currPos=s.pos,u.trigger("beforeShow",i),u.updateControls(),l=n.fancybox.getTranslate(s.$slide),s.isMoved=(0!==l.left||0!==l.top)&&!s.$slide.hasClass("fancybox-animated"),s.forcedDuration=o,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[i?"animationDuration":"transitionDuration"],e=parseInt(e,10),i)return s.opts.animationEffect&&e&&u.$refs.container.css("transition-duration",e+"ms"),u.$refs.container.removeClass("fancybox-is-hidden"),f(u.$refs.container),u.$refs.container.addClass("fancybox-is-open"),f(u.$refs.container),s.$slide.addClass("fancybox-slide--previous"),u.loadSlide(s),s.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"),void u.preload("image");n.each(u.slides,function(t,e){n.fancybox.stop(e.$slide)}),s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),s.isMoved?(c=Math.round(s.$slide.width()),n.each(u.slides,function(t,o){var i=o.pos-s.pos;n.fancybox.animate(o.$slide,{top:0,left:i*c+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===u.currPos&&(s.isMoved=!1,u.complete())})})):u.$refs.stage.children().removeAttr("style"),s.isLoaded?u.revealContent(s):u.loadSlide(s),u.preload("image"),r.pos!==s.pos&&(d="fancybox-slide--"+(r.pos>s.pos?"next":"previous"),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),r.isComplete=!1,e&&(s.isMoved||s.opts.transitionEffect)&&(s.isMoved?r.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+s.opts.transitionEffect,n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,d=this,u=d.current,f=u.$content,p=n.fancybox.getTranslate(u.$slide).width,h=n.fancybox.getTranslate(u.$slide).height,g=u.width,b=u.height;!d.isAnimating&&f&&"image"==u.type&&u.isLoaded&&!u.hasError&&(n.fancybox.stop(f),d.isAnimating=!0,t=t===o?.5*p:t,e=e===o?.5*h:e,a=n.fancybox.getTranslate(f),a.top-=n.fancybox.getTranslate(u.$slide).top,a.left-=n.fancybox.getTranslate(u.$slide).left,c=g/a.width,l=b/a.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),d.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){d.isAnimating=!1}),d.SlideShow&&d.SlideShow.isActive&&d.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;!o.isAnimating&&a&&"image"==i.type&&i.isLoaded&&!i.hasError&&(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,n,o,i,a,s=this,r=t.$content,c=t.width||t.opts.width,l=t.height||t.opts.height,d={};return!!(t.isLoaded&&r&&r.length)&&(i={top:parseInt(t.$slide.css("paddingTop"),10),right:parseInt(t.$slide.css("paddingRight"),10),bottom:parseInt(t.$slide.css("paddingBottom"),10),left:parseInt(t.$slide.css("paddingLeft"),10)},e=parseInt(s.$refs.stage.width(),10)-(i.left+i.right),n=parseInt(s.$refs.stage.height(),10)-(i.top+i.bottom),c&&l||(c=e,l=n),o=Math.min(1,e/c,n/l),c=Math.floor(o*c),l=Math.floor(o*l),"image"===t.type?(d.top=Math.floor(.5*(n-l))+i.top,d.left=Math.floor(.5*(e-c))+i.left):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?c/l:t.opts.ratio||16/9,l>c/a?l=c/a:c>l*a&&(c=l*a)),d.width=c,d.height=l,d)},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height;i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),t.$slide.trigger("refresh"),o.$refs.toolbar.toggleClass("compensate-for-scrollbar",t.$slide.get(0).scrollHeight>t.$slide.get(0).clientHeight),o.trigger("onUpdate",t)},centerSlide:function(t,e){var i,a,s=this;s.current&&(i=Math.round(t.$slide.width()),a=t.pos-s.current.pos,n.fancybox.animate(t.$slide,{top:0,left:a*i+a*t.opts.gutter,opacity:1},e===o?0:e,null,!1))},updateCursor:function(t,e){var o,i=this,a=i.current,s=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");a&&!i.isClosing&&(o=i.isZoomable(),s.toggleClass("fancybox-is-zoomable",o),n("[data-fancybox-zoom]").prop("disabled",!o),o&&("zoom"===a.opts.clickContent||n.isFunction(a.opts.clickContent)&&"zoom"===a.opts.clickContent(a))?i.isScaledDown(t,e)?s.addClass("fancybox-can-zoomIn"):a.opts.touch?s.addClass("fancybox-can-drag"):s.addClass("fancybox-can-zoomOut"):a.opts.touch&&"video"!==a.contentType&&s.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if(t=e.getFitPos(n),n.width>t.width||n.height>t.height)return!0}return!1},isScaledDown:function(t,e){var i=this,a=!1,s=i.current,r=s.$content;return t!==o&&e!==o?a=t<s.width&&e<s.height:r&&(a=n.fancybox.getTranslate(r),a=a.width<s.width&&a.height<s.height),a},canPan:function(){var t,e=this,n=!1,o=e.current;return"image"===o.type&&(t=o.$content)&&!o.hasError&&(n=e.getFitPos(o),n=Math.abs(t.width()-n.width)>1||Math.abs(t.height()-n.height)>1),n},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,'<video class="fancybox-video" controls controlsList="nodownload"><source src="'+t.src+'" type="'+t.opts.videoFormat+"\">Your browser doesn't support HTML5 video</video");break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r,c=this,l=e.opts.srcset||e.opts.image.srcset;if(e.timouts=setTimeout(function(){var t=e.$image;!e.isLoading||t&&t[0].complete||e.hasError||c.showLoading(e)},350),l){s=t.devicePixelRatio||1,r=t.innerWidth*s,a=l.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),a.sort(function(t,e){return t.value-e.value});for(var d=0;d<a.length;d++){var u=a[d];if("w"===u.postfix&&u.value>=r||"x"===u.postfix&&u.value>=s){i=u;break}}!i&&a.length&&(i=a[a.length-1]),i&&(e.src=i.url,e.width&&e.height&&"w"==i.postfix&&(e.height=e.width/e.height*i.value,e.width=i.value),e.opts.srcset=l)}e.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),o=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&o&&(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null}).one("load",function(){c.afterLoad(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",o)),c.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){var n;t.$ghost||(e.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),e.afterLoad(t)),t.timouts&&(clearTimeout(t.timouts),t.timouts=null),e.isClosing||(t.opts.srcset&&(n=t.opts.sizes,n&&"auto"!==n||(n=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),o.attr("sizes",n).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!e.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),e.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(o[0].complete||"complete"==o[0].readyState)&&o[0].naturalWidth&&o[0].naturalHeight?o.trigger("load"):o[0].error&&o.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),s.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,s=t.$content,r=a.css.width,c=a.css.height;if(1===e[0].isReady){try{n=e.contents(),i=n.find("body")}catch(t){}i&&i.length&&i.children().length&&(s.css({width:"",height:""}),r===o&&(r=Math.ceil(Math.max(i[0].clientWidth,i.outerWidth(!0)))),r&&s.width(r),c===o&&(c=Math.ceil(Math.max(i[0].clientHeight,i.outerHeight(!0)))),c&&s.height(c)),s.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),s.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?(e.parent().parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.pos===e.currPos&&e.updateCursor(),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).prependTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r=this,c=t.$slide,l=!1,d=!1;return e=t.opts[r.firstRun?"animationEffect":"transitionEffect"],a=t.opts[r.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),t.pos===r.currPos&&(t.isComplete?e=!1:r.isAnimating=!0),!t.isMoved&&t.pos===r.currPos&&a||(e=!1),"zoom"===e&&(t.pos===r.currPos&&a&&"image"===t.type&&!t.hasError&&(d=r.getThumbPos(t))?l=r.getFitPos(t):e="fade"),"zoom"===e?(l.scaleX=l.width/d.width,l.scaleY=l.height/d.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-d.width/d.height)>.1),s&&(d.opacity=.1,l.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),d),f(t.$content),void n.fancybox.animate(t.$content,l,a,function(){r.isAnimating=!1,r.complete()})):(r.updateSlide(t),e?(n.fancybox.stop(c),i="fancybox-animated fancybox-slide--"+(t.pos>=r.prevPos?"next":"previous")+" fancybox-fx-"+e,c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(c),void n.fancybox.animate(c,"fancybox-slide--current",a,function(e){c.removeClass(i).removeAttr("style"),t.pos===r.currPos&&r.complete()},!0)):(f(c),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===r.currPos&&r.complete())))},getThumbPos:function(o){var i,a=this,s=!1,r=o.opts.$thumb,c=r&&r.length&&r[0].ownerDocument===e?r.offset():0,l=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()};return c&&l(r)&&(i=a.$refs.stage.offset(),s={top:c.top-i.top+parseFloat(r.css("border-top-width")||0),left:c.left-i.left+parseFloat(r.css("border-left-width")||0),width:r.width(),height:r.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,i={};!o.isMoved&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),t.preload("inline"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),t.slides=i),t.isAnimating=!1,t.updateCursor(),t.trigger("afterShow"),o.$slide.find("video,audio").filter(":visible:first").trigger("play"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(t){var e=this,n=e.slides[e.currPos+1],o=e.slides[e.currPos-1];n&&n.type===t&&e.loadSlide(n),o&&o.type===t&&e.loadSlide(o)},focus:function(){var t,e=this.current;this.isClosing||e&&e.isComplete&&e.$content&&(t=e.$content.find("input[autofocus]:enabled:visible:first"),t.length||(t=e.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")),t=t&&t.length?t:e.$content,t.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,p=this,h=p.current,g=function(){p.cleanUp(t)};return!p.isClosing&&(p.isClosing=!0,p.trigger("beforeClose",t)===!1?(p.isClosing=!1,d(function(){p.update()}),!1):(p.removeEvents(),h.timouts&&clearTimeout(h.timouts),a=h.$content,o=h.opts.animationEffect,i=n.isNumeric(e)?e:o?h.opts.animationDuration:0,h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),h.$slide.siblings().trigger("onReset").remove(),i&&p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),p.hideLoading(h),p.hideControls(),p.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===h.type&&!h.hasError&&(l=p.getThumbPos(h))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=h.opts.zoomOpacity,"auto"==r&&(r=Math.abs(h.width/h.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),f(a),n.fancybox.animate(a,l,i,g),!0):(o&&i?t===!0?setTimeout(g,i):n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,g):g(),!0)))},cleanUp:function(t){var e,o=this,i=n("body");o.current.$slide.trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.$lastFocus&&o.current.opts.backFocus&&o.$lastFocus.trigger("focus"),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(i.removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i))},updateControls:function(t){var e=this,n=e.current,o=n.index,i=n.opts.caption,a=e.$refs.container,s=e.$refs.caption;n.$slide.trigger("refresh"),e.$caption=i&&i.length?s.html(i):null,e.isHiddenControls||e.isIdle||e.showControls(),a.find("[data-fancybox-count]").html(e.group.length),a.find("[data-fancybox-index]").html(o+1),a.find("[data-fancybox-prev]").toggleClass("disabled",!n.opts.loop&&o<=0),a.find("[data-fancybox-next]").toggleClass("disabled",!n.opts.loop&&o>=e.group.length-1),"image"===n.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",n.opts.image.src||n.src).show():n.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.3.5",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof h&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new h(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){var r=!1;n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),n.fancybox.stop(t),t.on(u,function(o){(!o||!o.originalEvent||t.is(o.originalEvent.target)&&"z-index"!=o.originalEvent.propertyName)&&(n.fancybox.stop(t),r&&n.fancybox.setTranslate(t,r),
n.isPlainObject(e)?s===!1&&t.removeAttr("style"):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(o))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?(e.scaleX!==o&&e.scaleY!==o&&(r=n.extend({},e,{width:t.width()*e.scaleX,height:t.height()*e.scaleY,scaleX:1,scaleY:1}),delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){t&&t.length&&(clearTimeout(t.data("timer")),t.off("transitionend").css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-trigger]",function(t){i(t,{$target:n('[data-fancybox="'+n(t.currentTarget).attr("data-trigger")+'"]').eq(n(t.currentTarget).attr("data-index")||0),$trigger:n(this)})})}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},n,a.opts.media),t.each(s,function(n,o){if(c=p.match(o.matcher)){if(h=o.type,f=n,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[n],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):e(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):e(o.thumb,c),"youtube"===n?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===n&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)})}(window.jQuery||jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){this.$container.off(".fb.touch")},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$content,p="touchstart"==o.type;if(p&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||d.isClosing)return o.stopPropagation(),void o.preventDefault();if(i.realPoints=i.startPoints=a(o),i.startPoints.length){if(o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=f,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(u.$slide[0].clientWidth),i.canvasHeight=Math.round(u.$slide[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=i.sliderLastPos||n.fancybox.getTranslate(u.$slide),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(p?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(p?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),!i.opts&&!d.canPan()||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is(".fancybox-image")&&o.preventDefault());n.fancybox.isMobile&&(l(c)||l(c.parent()))||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.instance.canPan()?(n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-controls--isGrabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this,o=n(t.target);return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling||!o.is(e.$stage)&&!e.$stage.find(o).length?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.instance.canPan())&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&e.isSwiping===!0||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.isSwiping,c=s.sliderStartPos.left||0;if(r!==!0)"x"==r&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?c+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?c-=Math.pow(-s.distanceX,.8):c+=s.distanceX),s.sliderLastPos={top:"x"==r?0:s.sliderStartPos.top+s.distanceY,left:c},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,s.instance.group.length<2&&s.opts.vertical?s.isSwiping="y":s.instance.isDragging||s.opts.vertical===!1||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),s.canTap=!1,"y"===s.isSwiping&&n.fancybox.isMobile&&(l(s.$target)||l(s.$target.parent())))return void(s.isScrolling=!0);s.instance.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(s.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration",""),e.inTransition=!1,e.pos===s.instance.current.pos&&(s.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left-n.fancybox.getTranslate(s.instance.$refs.stage).left)}),s.instance.SlideShow&&s.instance.SlideShow.isActive&&s.instance.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;return s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&(i(t.requestId),t.requestId=null),void(t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),y=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),v=m-e.centerPointStartX,x=y-e.centerPointStartY,w=l+(g+v),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming,d=o.isScrolling;return o.endPoints=a(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r,d)))},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length;o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,200)):"x"==t&&o.distanceX>50&&a>1?i=o.instance.previous(o.speedX):"x"==t&&o.distanceX<-50&&a>1&&(i=o.instance.next(o.speedX)),i!==!1||"x"!=t&&"y"!=t||(e||a<2?o.instance.centerSlide(o.instance.current,150):o.instance.jumpTo(o.instance.current.index)),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.opts.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.$content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls(!0);break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))})}(window,document,window.jQuery||jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this;e.instance&&e.instance.current&&(t===!0||e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.isActive&&e.instance.jumpTo((e.instance.currIndex+1)%e.instance.group.length)},e.instance.current.opts.slideShow.speed):(e.stop(),e.instance.idleSecondsCounter=0,e.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;e&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.set(!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(!n)return void(e&&e.fancybox&&(e.fancybox.defaults.btnTpl.fullScreen=!1));var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on({"onInit.fb":function(t,e){var n;e&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t))})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n="fancybox-thumbs",o=n+"-active",i=n+"-loading";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var a=function(t){this.init(t)};e.extend(a.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e,n,o=this;o.instance=t,t.Thumbs=o,o.opts=t.group[t.currIndex].opts.thumbs,e=t.group[0],e=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),t.group.length>1&&(n=t.group[1],n=n.opts.thumb||!(!n.opts.$thumb||!n.opts.$thumb.length)&&n.opts.$thumb.attr("src")),o.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]"),o.opts&&e&&n&&e&&n?(o.$button.show().on("click",function(){o.toggle()}),o.isActive=!0):o.$button.hide()},create:function(){var t,o=this,a=o.instance,s=o.opts.parentEl,r=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(a.$refs.container.find(s).addBack().filter(s)),o.$grid.on("click","li",function(){a.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e("<ul>").appendTo(o.$grid)),e.each(a.group,function(e,n){t=n.opts.thumb||(n.opts.$thumb?n.opts.$thumb.attr("src"):null),t||"image"!==n.type||(t=n.src),r.push('<li data-index="'+e+'" tabindex="0" class="'+i+'"'+(t&&t.length?' style="background-image:url('+t+')" />':"")+"></li>")}),o.$list[0].innerHTML=r.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+a.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,i=this,a=i.$list,s=i.$grid;i.instance.current&&(e=a.children().removeClass(o).filter('[data-index="'+i.instance.current.index+'"]').addClass(o),n=e.position(),"y"===i.opts.axis&&(n.top<0||n.top>a.height()-e.outerHeight())?a.stop().animate({scrollTop:a.scrollTop()+n.top},t):"x"===i.opts.axis&&(n.left<s.scrollLeft()||n.left>s.scrollLeft()+(s.width()-e.outerWidth()))&&a.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new a(e),n.isActive&&n.opts.autoStart===!0&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,window.jQuery||jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__links a").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})}}}))})}(document,window.jQuery||jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:t,index:o<1?1:o,gallery:i}}function i(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).trigger("click.fb-start"))}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,n=e.hash||(e.$orig?e.$orig.data("fancybox"):""),""!==n&&n)}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)}),n(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&i.opts.hash!==!1&&(r=a(o),r&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),e.location.hash!=="#"+o.currentHash&&(o.origHash||(o.origHash=e.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in e.history?(e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):e.location.hash=o.currentHash,o.hashTimer=null},300))))},"beforeClose.fb":function(n,o,i){var s;i.opts.hash!==!1&&(s=a(o),o.currentHash&&o.hasCreatedHistory?e.history.back():o.currentHash&&("replaceState"in e.history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+(o.origHash||"")):e.location.hash=o.origHash),o.currentHash=null,clearTimeout(o.hashTimer))}}),n(e).on("hashchange.fb",function(){var t,e=o();n.each(n(".fancybox-container").get().reverse(),function(e,o){var i=n(o).data("FancyBox");if(i.currentHash)return t=i,!1}),t?!t.currentHash||t.currentHash===e.gallery+"-"+e.index||1===e.index&&t.currentHash==e.gallery||(t.currentHash=null,t.close()):""!==e.gallery&&i(e)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(document,window,window.jQuery||jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||o.opts.wheel===!1||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,window.jQuery||jQuery);;
const wrapperElement = 'div';
const wrapperClass = 'mobile-table';
const wrapperActiveClass = 'mobile-table--scroll';

/**
 * Initialize each table, wrapping it in the element and saving the warpper as
 * a property on the table object.
 */
const tablesTarget = '#main-content table';
document.querySelectorAll(tablesTarget).forEach(table => {
  table.wrapper = document.createElement(wrapperElement);
  table.wrapper.classList.add(wrapperClass);
  table.parentNode.insertBefore(table.wrapper, table);
  table.wrapper.appendChild(table);

  window.addEventListener('load', () => {
    toggleResponsiveTable(table);
  });
})

/**
 * Update each table on resize, adding the active class if the table width is
 * greater than the wrapper width.
 */
window.addEventListener('resize', function (event) {
  document.querySelectorAll(tablesTarget).forEach(table => {
    toggleResponsiveTable(table);
  });
}, true);


function toggleResponsiveTable(table) {
  if (initResponsiveTable(table) == true) {
    responsiveTable(table, true);
  } else {
    responsiveTable(table, false);
  }
}

/**
  * Check if the table needs to be initialized
  *
  * @param {HTMLElement} table
  *   The table of the size that is in questions
*/
function initResponsiveTable(table) {
  return table.offsetWidth > table.wrapper.offsetWidth;
}

/**
 * A function to construct and deconstruct a responsive table
 *
 * @param {HTMLElement} table
 *   The table in which the responsive attributes are being added
 * @param {Boolean} init
 *   Whether to init the table or not
 */
function responsiveTable(table, init) {
  /**
  * Store the individual widths of the table and its container to check against each other.
  * If we do not, the widths read the same after the mobile table classes init
  */
  const tableWrapperWidth = table.wrapper.offsetWidth;
  const tableWidth = table.offsetWidth;

  // Setup a function to bind to a scroll event
  function tableScroll(tableWrapper) {
    if (tableWrapper.scrollLeft > 2) {
      tableWrapper.classList.add('scrolled');
    } else {
      tableWrapper.classList.remove('scrolled');
    }
    if (table.wrapper.scrollLeft >= tableWidth - tableWrapperWidth) {
      tableWrapper.classList.add('scrolled-to-edge');
    } else {
      tableWrapper.classList.remove('scrolled-to-edge');
    }
  }

  if (init == true) {
    // add the initialized class
    table.wrapper.classList.add(wrapperActiveClass);

    /**
    * bind @function tableScroll to scroll event listener
    */
    table.wrapper.addEventListener('scroll', () => {
      tableScroll(table.wrapper);
    });
  } else if (init == false) {
    table.wrapper.classList.remove(wrapperActiveClass);
  }
}
;

(function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);;
