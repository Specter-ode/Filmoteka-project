!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire37c5;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire37c5=a),a("lyT68");var i,s=a("bpxeT"),o=a("2TvXO"),c=a("BRQVA"),u=a("1hEYs"),l=new(0,c.MovieApi),p=document.querySelector("#genre_choice"),f=(i=e(s)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.fetchMovieGenres();case 3:n=e.sent.data,(0,u.saveInStorage)("genres",n.genres),p.insertAdjacentHTML("beforeend",d(n.genres)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])}))),function(){return i.apply(this,arguments)});function d(e){return e.map((function(t){return e='<option value="'.concat(t.id,'">').concat(t.name,"</option>")}))}f();s=a("bpxeT"),o=a("2TvXO");var v=a("lyT68"),h=a("1oqgH");c=a("BRQVA"),u=a("1hEYs");function g(e){return e.map((function(t){var n=t.title,r=t.original_title,a=t.name,i=t.original_name,s=t.poster_path,o=t.release_date,c=t.genre_ids,l=t.vote_average,p=t.id,f=new Date(o),d=n||r||a||i,v=l.toString().padEnd(3,".0").slice(0,3);return s=s?"https://image.tmdb.org/t/p/w500/".concat(s):"https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg",e='\n            <li class="movie-card gallery_item" data-id="'.concat(p,'">\n              <img src="').concat(s,'" alt="').concat(d,'" loading="lazy" class="movie-card__img" id="').concat(p,'"/>\n\n              <div class="movie-card__info">\n                <div class="movie-card__info-name-wraper"\n                  <p class="movie-card__info-name">').concat(d.length<=31?d.toUpperCase():d.toUpperCase().slice(0,28)+"...",'\n                  </p>\n                </div>\n                <div class="movi-card__info-wraper">\n                  <div class="movi-card">\n                  <p class="movie-card__info-item">').concat(function(e){var t=((0,u.loadFromStorage)("genres")||[]).filter((function(t){var n=t.id;return e.includes(n)}));return 0===t.length?void 0:t.length<3?t.map((function(e){return e.name})).join(", "):t.map((function(e){return e.name})).slice(0,2).join(", ")+"..."}(c)," | ").concat(f.getFullYear()||"",'\n                  </p>\n                  </div>\n                  <div class="card__rating">\n                    <p class="card__text card__rating--text">').concat(v,"</p>\n                  </div>\n                </div>\n              </div>\n            </li>\n          ")})).join("")}var m;function _(e,t,n){var r,a,i,s,o;function c(){var u=Date.now()-s;u<t&&u>=0?r=setTimeout(c,t-u):(r=null,n||(o=e.apply(i,a),i=a=null))}null==t&&(t=100);var u=function(){i=this,a=arguments,s=Date.now();var u=n&&!r;return r||(r=setTimeout(c,t)),u&&(o=e.apply(i,a),i=a=null),o};return u.clear=function(){r&&(clearTimeout(r),r=null)},u.flush=function(){r&&(o=e.apply(i,a),i=a=null,clearTimeout(r),r=null)},u}_.debounce=_,m=_;s=a("bpxeT"),o=a("2TvXO");var y,x={};window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
y=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){"use strict";e.exports=function(e,t){var n,r,a,i,s=Object.prototype.hasOwnProperty;for(a=1,i=arguments.length;a<i;a+=1)for(r in n=arguments[a])s.call(n,r)&&(e[r]=n[r]);return e}},function(e,t,n){"use strict";e.exports=function(e){return void 0===e}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Array}},function(e,t,n){"use strict";var r=n(2),a=n(17),i=n(6);e.exports=function(e,t,n){r(e)?a(e,t,n):i(e,t,n)}},function(e,t,n){"use strict";e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Function}},function(e,t,n){"use strict";e.exports=function(e,t,n){var r;for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){"use strict";var r=n(18),a=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&r(n,e),t.hasOwnProperty("static")&&(a(n,t.static),delete t.static),a(n.prototype,t),n}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){var a,i;if(n=n||0,!r(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(i=t.length,a=n;n>=0&&a<i;a+=1)if(t[a]===e)return a;return-1}},function(e,t,n){"use strict";var r=n(29),a=n(30),i=n(5),s={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),a=i(e)?e(t):r(e,t);return n.innerHTML=a,n.firstChild},bind:function(e,t){var n,r=Array.prototype.slice;return e.bind?e.bind.apply(e,r.call(arguments,1)):(n=r.call(arguments,2),function(){return e.apply(t,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){a("pagination","UA-129987462-1")}};e.exports=s},function(e,t,n){"use strict";n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){"use strict";var r=n(13),a=n(7),i=n(0),s=n(1),o=n(20),c=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=a({init:function(e,t){this._options=i({},u,t),this._currentPage=0,this._view=new o(e,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===e;return this._options.centerAlign?r?t-1:t+n:r?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),r=this._getPageIndex(e),a=this._getPageIndex(n),i=this._getEdge(e);return t.leftPageNumber=i.left,t.rightPageNumber=i.right,t.prevMore=r>1,t.nextMore=r<a,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,r,a=this._getLastPage(),i=this._options.visiblePages,s=this._getPageIndex(e);return this._options.centerAlign?(r=Math.floor(i/2),(n=(t=Math.max(e-r,1))+i-1)>a&&(t=Math.max(a-i+1,1),n=a)):(t=(s-1)*i+1,n=s*i,n=Math.min(n,a)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){s(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(l),e.exports=l},function(e,t,n){"use strict";var r=n(0),a=n(14),i=n(4),s=n(16),o=n(2),c=n(5),u=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(e){r(e.prototype,p.prototype)},p.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},p.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},p.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},p.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(e){var t,n;a(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},p.prototype._forgetContext=function(e){var t,n;a(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},p.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e);this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},p.prototype.on=function(e,t,n){var r=this;i(e)?(e=e.split(l),u(e,(function(e){r._bindEvent(e,t,n)}))):s(e)&&(n=t,u(e,(function(e,t){r.on(t,e,n)})))},p.prototype.once=function(e,t,n){var r=this;if(s(e))return n=t,void u(e,(function(e,t){r.once(t,e,n)}));this.on(e,(function a(){t.apply(n,arguments),r.off(e,a,n)}),n)},p.prototype._spliceMatches=function(e,t){var n,r=0;if(o(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},p.prototype._matchHandler=function(e){var t=this;return function(n){var r=e===n.handler;return r&&t._forgetContext(n.context),r}},p.prototype._matchContext=function(e){var t=this;return function(n){var r=e===n.context;return r&&t._forgetContext(n.context),r}},p.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(r){var a=e===r.handler,i=t===r.context,s=a&&i;return s&&n._forgetContext(r.context),s}},p.prototype._offByEventName=function(e,t){var n=this,r=c(t),a=n._matchHandler(t);e=e.split(l),u(e,(function(e){var t=n._safeEvent(e);r?n._spliceMatches(t,a):(u(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},p.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);u(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},p.prototype._offByObject=function(e,t){var n,r=this;this._indexOfContext(e)<0?u(e,(function(e,t){r.off(t,e)})):i(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):c(t)?(n=this._matchHandlerAndContext(t,e),u(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),u(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},p.prototype.off=function(e,t){i(e)?this._offByEventName(e,t):arguments.length?c(e)?this._offByHandler(e):s(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},p.prototype.fire=function(e){this.invoke.apply(this,arguments)},p.prototype.invoke=function(e){var t,n,r,a;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(a=t[r]).handler.apply(a.context,n))return!1;r+=1}return!0},p.prototype.hasListener=function(e){return this.getListenerLength(e)>0},p.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=p},function(e,t,n){"use strict";var r=n(1),a=n(15);e.exports=function(e){return!r(e)&&!a(e)}},function(e,t,n){"use strict";e.exports=function(e){return null===e}},function(e,t,n){"use strict";e.exports=function(e){return e===Object(e)}},function(e,t,n){"use strict";e.exports=function(e,t,n){var r=0,a=e.length;for(n=n||null;r<a&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){"use strict";var r=n(19);e.exports=function(e,t){var n=r(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){"use strict";e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){"use strict";var r=n(3),a=n(7),i=n(21),s=n(22),o=n(24),c=n(25),u=n(0),l=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},v=["first","prev","next","last"],h=["prev","next"],g=a({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=u({},d,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(l(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!p(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){r(v,(function(e){this._buttons[e]=f.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){r(v,(function(e){var t="disabled"+f.capitalizeFirstLetter(e);this._buttons[t]=f.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){r(h,(function(e){var t=e+"More";this._buttons[t]=f.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,c(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,c(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,r=e.leftPageNumber,a=e.rightPageNumber;for(n=r;n<=a;n+=1)n===e.page?t=f.createElementByTemplate(this._template.currentPage,{page:n}):(t=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==r||e.prevMore||c(t,this._firstItemClassName),n!==a||e.nextMore||c(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();s(t,"click",(function(t){var n,r,a=i(t);o(t),(r=this._getButtonType(a))||(n=this._getPageNumber(a)),e(r,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return r(n,(function(n,r){return!f.isContained(e,n)||(t=r,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(t=this._enabledPageElements[n],f.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){"use strict";e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){"use strict";var r=n(4),a=n(3),i=n(23);function s(e,t,n,r){function s(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,s):"attachEvent"in e&&e.attachEvent("on"+t,s),function(e,t,n,r){var s=i(e,t),o=!1;a(s,(function(e){return e.handler!==n||(o=!0,!1)})),o||s.push({handler:n,wrappedHandler:r})}(e,t,n,s)}e.exports=function(e,t,n,i){r(t)?a(t.split(/\s+/g),(function(t){s(e,t,n,i)})):a(t,(function(t,r){s(e,r,t,n)}))}},function(e,t,n){"use strict";var r="_feEventKey";e.exports=function(e,t){var n,a=e[r];return a||(a=e[r]={}),(n=a[t])||(n=a[t]=[]),n}},function(e,t,n){"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){"use strict";var r=n(3),a=n(8),i=n(26),s=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),o=e.classList,c=[];o?r(n,(function(t){e.classList.add(t)})):((t=i(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){a(e,c)<0&&c.push(e)})),s(e,c))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){"use strict";var r=n(2),a=n(1);e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),a(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){"use strict";var r=n(8),a=n(3),i=n(2),s=n(4),o=n(0),c=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,v=/"|'/g,h=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var r=function(e,t){var n=[e],r=[],i=0,s=0;return a(t,(function(e,a){0===e.indexOf("if")?i+=1:"/if"===e?i-=1:i||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),r.push(t.slice(s,a)),s=a+1)})),r.push(t.slice(s)),{exps:n,sourcesInsideIf:r}}(e,t),i=!1,s="";return a(r.exps,(function(e,t){return(i=x(e,n))&&(s=b(r.sourcesInsideIf[t],n)),!i})),s},each:function(e,t,n){var r=x(e,n),s=i(r)?"@index":"@key",c={},u="";return a(r,(function(e,r){c[s]=r,c["@this"]=e,o(n,c),u+=b(t.slice(),n)})),u},with:function(e,t,n){var a=r("as",e),i=e[a+1],s=x(e.slice(0,a),n),c={};return c[i]=s,b(t,o(n,c))||""}},m=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,r,a=[],i=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)r=n.index,a.push(e.slice(i,r)),i=r+n[0].length,n=t.exec(e);return a.push(e.slice(i)),a};function _(e,t){var n,r=t[e];return"true"===e?r=!0:"false"===e?r=!1:d.test(e)?r=e.replace(v,""):u.test(e)?r=_((n=e.split(l))[0],t)[_(n[1],t)]:p.test(e)?r=_((n=e.split(f))[0],t)[n[1]]:h.test(e)&&(r=parseFloat(e)),r}function y(e,t,n){for(var r,a,i,o,c=g[e],u=1,l=2,p=t[l];u&&s(p);)0===p.indexOf(e)?u+=1:0===p.indexOf("/"+e)&&(u-=1,r=l),p=t[l+=2];if(u)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=c(t[0].split(" ").slice(1),(a=0,i=r,(o=t.splice(a+1,i-a)).pop(),o),n),t}function x(e,t){var n=_(e[0],t);return n instanceof Function?function(e,t,n){var r=[];return a(t,(function(e){r.push(_(e,n))})),e.apply(null,r)}(n,e.slice(1),t):n}function b(e,t){for(var n,r,a,i=1,o=e[i];s(o);)r=(n=o.split(" "))[0],g[r]?(a=y(r,e.splice(i,e.length-i),t),e=e.concat(a)):e[i]=x(n,t),o=e[i+=2];return e.join("")}e.exports=function(e,t){return b(m(e,c),t)}},function(e,t,n){"use strict";var r=n(1),a=n(31);e.exports=function(e,t){var n=location.hostname,i="TOAST UI "+e+" for "+n+": Statistics",s=window.localStorage.getItem(i);(r(window.tui)||!1!==window.tui.usageStatistics)&&(s&&!function(e){return(new Date).getTime()-e>6048e5}(s)||(window.localStorage.setItem(i,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||a("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t){var n=document.createElement("img"),a="";return r(t,(function(e,t){a+="&"+t+"="+e})),a=a.substring(1),n.src=e+"?"+a,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},x=y();v=a("lyT68");var b=new(0,(c=a("BRQVA")).MovieApi),E={totalItems:"",itemsPerPage:20,visiblePages:5,page:1,centerAlign:!0},w=new(e(x))("pagination",E);function L(t){return t.total_results>1e4&&(t.total_results=1e4),E.totalItems=t.total_results,w=new(e(x))("pagination",E)}function M(e){return P.apply(this,arguments)}function P(){return(P=e(s)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.page=n.page,!b.genre){e.next=8;break}return e.next=5,b.fetchMovieFilterWithGenres();case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,b.fetchMovieFilterWithoutGenres();case 10:r=e.sent;case 11:v.refs.galleryEl.innerHTML=g(r.data.results);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function T(e){return k.apply(this,arguments)}function k(){return(k=e(s)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.page=n.page,b.query=v.refs.searchInputEl.value,e.next=4,b.fetchFilmsByInput();case 4:r=e.sent.data,v.refs.galleryEl.innerHTML=g(r.results);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function C(e){return B.apply(this,arguments)}function B(){return(B=e(s)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.page=n.page,e.next=3,b.fetchPopularFilms();case 3:r=e.sent.data,v.refs.galleryEl.innerHTML=g(r.results);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function I(e){return N.apply(this,arguments)}function N(){return(N=e(s)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.page=n.page,b.query=v.refs.searchInputEl.value,e.next=4,b.fetchFilmsByInput();case 4:r=e.sent.data,v.refs.galleryEl.innerHTML=g(r.results);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var S=new(0,c.MovieApi),A=function(){var t=e(s)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.off("afterMove",M),w.off("afterMove",T),w.off("afterMove",I),w.off("afterMove",C),w.movePageTo(1),e.prev=5,e.next=8,S.fetchPopularFilms();case 8:L(n=e.sent.data),v.refs.galleryEl.innerHTML=g(n.results),w.on("afterMove",C),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0);case 17:case"end":return e.stop()}}),t,null,[[5,14]])})));return function(){return t.apply(this,arguments)}}();A();var F=function(){var t=e(s)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),w.off("afterMove",C),w.off("afterMove",M),w.off("afterMove",I),w.off("afterMove",T),S.query=n.target.value.toLowerCase(),S.page=1,w.reset(),e.prev=8,""!==S.query){e.next=14;break}return(0,h.alertNoEmptySearch)(),v.refs.galleryEl.innerHTML="",v.refs.paginationWrap.classList.add("tui-pagination","hidden"),e.abrupt("return");case 14:return e.next=16,S.fetchFilmsByInput();case 16:if((r=e.sent.data).total_pages<2?v.refs.paginationWrap.classList.add("tui-pagination","hidden"):v.refs.paginationWrap.classList.remove("tui-pagination","hidden"),0!==r.total_results){e.next=25;break}return(0,h.alertNoFilmsFound)(),v.refs.paginationWrap.classList.add("tui-pagination","hidden"),v.refs.galleryEl.innerHTML="",e.abrupt("return");case 25:v.refs.galleryEl.innerHTML=g(r.results);case 26:w.on("afterMove",T),w.reset(r.total_results),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(8),v.refs.galleryEl.innerHTML="",console.log(e.t0.message);case 34:case"end":return e.stop()}}),t,null,[[8,30]])})));return function(e){return t.apply(this,arguments)}}();v.refs.searchInputEl.addEventListener("input",(0,m.debounce)(F,500));s=a("bpxeT"),o=a("2TvXO"),c=a("BRQVA"),v=a("lyT68");var H=a("jLMai"),O=function(e){var t=e.id,n=e.title,r=e.poster_path,a=e.popularity,i=e.original_title,s=e.vote_average,o=e.vote_count,c=e.genres,u=e.overview;r=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://upload.wikimedia.org/wikipedia/commons/4/47/GarvaGriha_in_KaryaBinayak.jpg",c=c.map((function(e){return e.name})).join(", "),a=parseFloat(a).toFixed(1);var l=n.toUpperCase(),p=i.toUpperCase(),f=s.toFixed(1);return'\n      <div class="image__place" id='.concat(t,'>\n      <button type="button" class="button__trailer js-trailer" name="trailer">\n      </button>\n        <img class="modal-poster" src="').concat(r,'" alt="').concat(i,'" />\n      </div>\n      <div class="content__place">\n          <h2 class="modal__header">').concat(l,'</h2>\n          <div class="details">\n              <ul class="details-head">\n                  <li class="details-string">Vote / Votes</li>\n                  <li class="details-string">Popularity</li>\n                  <li class="details-string">Original Title</li>\n                  <li class="details-string">Genre</li>\n              </ul>\n              <ul class="details-content">\n                  <li class="details-string"><span class="vote--modal">').concat(f,"</span> / ").concat(o,'</li>\n                  <li class="details-string">').concat(a,'</li>\n                  <li class="details-string">').concat(p,'</li>\n                  <li class="details-string">').concat(c,'</li>\n              </ul>\n          </div>\n          <h3>ABOUT</h3>\n          <p class="modal-annotation">\n              ').concat(u,'\n          </p>\n          <ul class="button__place">\n          <button type="button" class="film-modal__button film-modal__button--active" data-id="').concat(t,'" name="queue">').concat((0,H.renderBtnQueueFromLocalStorage)(t),'</button>\n          <button type="button" class="film-modal__button " data-id="').concat(t,'" name="watched" >').concat((0,H.renderBtnWatchedFromLocalStorage)(t),"</button>\n          </ul>")},j=(h=a("1oqgH"),a("dyT35")),q=new(0,c.MovieApi),D="",R=function(){var t=e(s)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.refs.loader.classList.remove("is-hidden"),v.refs.modalContainer.innerHTML="",q.id=n,e.prev=3,e.next=6,q.fetchMovieById();case 6:r=e.sent.data,v.refs.modalContainer.insertAdjacentHTML("beforeend",O(r)),v.refs.closeModalFilmBtn.addEventListener("click",V),setTimeout((function(){document.querySelector(".js-trailer").addEventListener("click",G)}),0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:v.refs.modal.classList.remove("is-hidden"),v.refs.loader.classList.add("is-hidden");case 17:case"end":return e.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}();function W(e){e.results.forEach((function(e){e.name.includes("Official Trailer")&&(D=e.key)}))}var G=function(){var t=e(s)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.fetchMovieByIdForTrailer();case 3:if(W(e.sent.data),D){e.next=8;break}return(0,h.alertNoTrailer)(),e.abrupt("return");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:j.create("\n        <iframe src='https://www.youtube.com/embed/".concat(D,'\'frameborder="0" allowfullscreen class="trailer_video" width="80%" height="80%"></iframe>')).show();case 15:case"end":return e.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();function V(){v.refs.modal.classList.add("is-hidden"),v.refs.backdrop.classList.add("is-hidden"),document.body.classList.remove("modal-is-open"),v.refs.modalContainer.innerHTML="",D="",v.refs.closeModalFilmBtn.removeEventListener("click",V)}v.refs.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&V()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&V()})),v.refs.galleryEl.addEventListener("click",(function(e){e.preventDefault(),"IMG"===e.target.nodeName&&(v.refs.backdrop.classList.remove("is-hidden"),document.body.classList.add("modal-is-open"),R(e.target.id))})),a("jLMai");s=a("bpxeT"),o=a("2TvXO"),c=a("BRQVA"),v=a("lyT68");var U=new(0,c.MovieApi),z=document.querySelector("#year_choice");!function(){var e=(new Date).getFullYear(),t=[];z.insertAdjacentHTML("beforeend",'<option value="">Choose year</option>');for(var n=e;n>1969;n-=1)t.push('<option value="'.concat(n,'">').concat(n,"</option>"));z.insertAdjacentHTML("beforeend",t)}();var Q=function(){var t=e(s)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),w.off("afterMove",C),w.off("afterMove",T),w.off("afterMove",I),w.off("afterMove",Z),w.movePageTo(1),v.refs.searchInputEl.value="",U[n.target.name]=n.target.value,e.prev=8,U.page=1,!U.genre){e.next=17;break}return e.next=14,U.fetchMovieFilterWithGenres();case 14:r=e.sent,e.next=20;break;case 17:return e.next=19,U.fetchMovieFilterWithoutGenres();case 19:r=e.sent;case 20:r.data.total_pages<2&&v.refs.paginationWrap.classList.add("tui-pagination","hidden"),0===r.data.results.length&&v.refs.paginationWrap.classList.add("tui-pagination","hidden"),L(r.data),v.refs.galleryEl.innerHTML=g(r.data.results),w.on("afterMove",Z),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(8),console.log(message.err);case 30:case"end":return e.stop()}}),t,null,[[8,27]])})));return function(e){return t.apply(this,arguments)}}();function Z(e){return X.apply(this,arguments)}function X(){return(X=e(s)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U.page=n.page,!U.genre){e.next=8;break}return e.next=5,U.fetchMovieFilterWithGenres();case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,U.fetchMovieFilterWithoutGenres();case 10:r=e.sent;case 11:v.refs.galleryEl.innerHTML=g(r.data.results);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}v.refs.filterInput.forEach((function(e){return e.addEventListener("change",Q)}));s=a("bpxeT"),o=a("2TvXO"),c=a("BRQVA"),v=a("lyT68"),h=a("1oqgH");var Y=window.SpeechRecognition||window.webkitSpeechRecognition,$=new(0,c.MovieApi),K=document.querySelector(".header-search__btn-mic"),J=document.querySelector(".header-search__icon-record"),ee=new Y;function te(e){var t=e.results[0][0].transcript;v.refs.searchInputEl.value=t,e.results[0].isFinal&&(ee.onspeechend=(console.log("Speech has stopped being detected"),ee.removeEventListener("result",te),J.classList.add("is-hidden"),K.classList.remove("-active"),void ee.stop())),ne(t)}ee.lang="en-EN",ee.interimResults=!1,ee.maxAlternatives=1,K.addEventListener("click",(function(){v.refs.searchInputEl.value="",ee.addEventListener("result",te),J.classList.remove("is-hidden"),K.classList.add("-active"),ee.start(),console.log("Ready to receive a movieName command.")})),ee.onnomatch=function(e){alert("I didn't recognise that movie."),J.classList.add("is-hidden"),K.classList.remove("-active"),ee.stop()},ee.onerror=function(e){alert("Error occurred in recognition: ".concat(e.error)),J.classList.add("is-hidden"),K.classList.remove("-active"),ee.stop()};var ne=function(){var t=e(s)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.off("afterMove",C),w.off("afterMove",T),w.off("afterMove",M),w.off("afterMove",I),w.movePageTo(1),$.page=1,$.query=n,e.prev=7,e.next=10,$.fetchFilmsByInput();case 10:if((r=e.sent.data).total_pages<2?v.refs.paginationWrap.classList.add("tui-pagination","hidden"):v.refs.paginationWrap.classList.remove("tui-pagination","hidden"),""!==$.query){e.next=17;break}return(0,h.alertNoEmptySearch)(),e.abrupt("return");case 17:if(0!==r.total_results){e.next=22;break}return(0,h.alertNoFilmsFound)(),e.abrupt("return");case 22:v.refs.galleryEl.innerHTML=g(r.results);case 23:w.on("afterMove",I),w.reset(r.total_results),e.next=31;break;case 27:e.prev=27,e.t0=e.catch(7),v.refs.galleryEl.innerHTML="",console.log(e.t0.message);case 31:case"end":return e.stop()}}),t,null,[[7,27]])})));return function(e){return t.apply(this,arguments)}}();v=a("lyT68");window.onscroll=function(){window.scrollY>700?v.refs.btnGoTop.classList.remove("is-hidden"):v.refs.btnGoTop.classList.add("is-hidden")},v.refs.btnGoTop.onclick=function(){window.scrollTo(0,0)};var re=a("iU1Pc"),ae=a("6Urw1"),ie=a("3SEMc"),se={openModalBtn:document.querySelector("[data-signup-open]"),crossBtn:document.querySelector(".close-auth-btn"),modal:document.querySelector("[data-signup-modal]")};function oe(e){e.target.classList.contains("auth-backdrop")&&ue()}function ce(e){"Escape"===e.key&&ue()}function ue(){document.body.classList.remove("modal-open"),se.modal.classList.add("visual-hidden"),document.removeEventListener("keydown",ce),se.modal.removeEventListener("click",oe)}se.openModalBtn.addEventListener("click",(function(){document.body.classList.add("modal-open"),se.modal.classList.remove("visual-hidden"),document.addEventListener("keydown",ce),se.modal.addEventListener("click",oe)})),se.crossBtn.addEventListener("click",ue);var le={openModalBtn:document.querySelector("[data-signin-open]"),modal:document.querySelector("[data-signin-modal]"),crossBtn:document.querySelector(".close-auth-btn")};function pe(e){console.dir(e.target.nodeName),(e.target.classList.contains("auth-backdrop")||"BUTTON"===e.target.nodeName||"use"===e.target.nodeName)&&de()}function fe(e){"Escape"===e.key&&de()}function de(){document.body.classList.remove("modal-open"),le.modal.classList.add("visual-hidden"),document.removeEventListener("keydown",fe),le.modal.removeEventListener("click",pe)}le.openModalBtn.addEventListener("click",(function(){document.body.classList.add("modal-open"),le.modal.classList.remove("visual-hidden"),document.addEventListener("keydown",fe),le.modal.addEventListener("click",pe)})),le.crossBtn.addEventListener("click",de);(0,ae.initializeApp)({apiKey:"AIzaSyBz5_WEoInvREC_39QfDZZZECl5U8Gjy9s",authDomain:"auth-film.firebaseapp.com",projectId:"auth-film",storageBucket:"auth-film.appspot.com",messagingSenderId:"298945320872",appId:"1:298945320872:web:2c146219caa9b256beef9d"});var ve=(0,ie.getAuth)(),he=document.querySelector("[data-signin-form]"),ge=document.querySelector("[data-signup-form]"),me=document.querySelector("[data-logout]"),_e=document.querySelector(".nav-menu__link.library-link.is-unactive");(0,ie.onAuthStateChanged)(ve,(function(e){if(e)e.uid;!function(e){e?(xe.classList.add("is-hidden"),ye.classList.remove("is-hidden"),_e.classList.remove("is-unactive")):(xe.classList.remove("is-hidden"),ye.classList.add("is-hidden"),_e.classList.add("is-unactive"))}(e)})),he.addEventListener("submit",(function(t){t.preventDefault();var n=t.target.elements.email.value,r=t.target.elements.password.value;(0,ie.signInWithEmailAndPassword)(ve,n,r).then((function(n){t.target.reset();n.user;e(re).Notify.success("Now you have access to your library. Enjoy!")})).catch((function(t){var n=t.code;e(re).Notify.failure(n)})).finally((function(){de()}))})),ge.addEventListener("submit",(function(t){t.preventDefault();var n=t.target.elements.email.value,r=t.target.elements.password.value;(0,ie.createUserWithEmailAndPassword)(ve,n,r).then((function(n){t.target.reset();n.user;e(re).Notify.success("Now you have access to your library. Enjoy!")})).catch((function(t){var n=t.code;e(re).Notify.failure(n)})).finally((function(){ue()}))})),me.addEventListener("click",(function(t){t.preventDefault(),(0,ie.signOut)(ve).then((function(){e(re).Notify.warning("You are now successfully logged out!")})).catch((function(t){var n=t.code;e(re).Notify.failure(n)}))}));var ye=document.querySelector(".logout-wrap"),xe=document.querySelector(".login-wrap");a("8ebkk")}();
//# sourceMappingURL=index.05bc7399.js.map