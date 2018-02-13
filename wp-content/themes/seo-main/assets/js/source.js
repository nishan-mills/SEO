"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"===("undefined"==typeof exports?"undefined":_typeof(exports))?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,o,r,a,s="Close",c="BeforeClose",l="AfterClose",u="BeforeAppend",d="MarkupParse",p="Open",f="Change",m="mfp",g="."+m,h="mfp-ready",y="mfp-removing",v="mfp-prevent-close",w=function(){},b=!!window.jQuery,C=e(window),k=function(e,n){t.ev.on(m+e+g,n)},S=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},x=function(n,i){t.ev.triggerHandler(m+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},I=function(n){return n===a&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),a=n),t.currTemplate.closeBtn},E=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},T=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=n.indexOf("MSIE 7.")!==-1,t.isIE8=n.indexOf("MSIE 8.")!==-1,t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=T(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var a,s=n.items;for(o=0;o<s.length;o++)if(a=s[o],a.parsed&&(a=a.el[0]),a===n.el[0]){t.index=o;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],r="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=S("bg").on("click"+g,function(){t.close()}),t.wrap=S("wrap").attr("tabindex",-1).on("click"+g,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=S("container",t.wrap)),t.contentContainer=S("content"),t.st.preloader&&(t.preloader=S("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(o=0;o<c.length;o++){var l=c[o];l=l.charAt(0).toUpperCase()+l.slice(1),t["init"+l].call(t)}x("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(k(d,function(e,t,n,i){n.close_replaceWith=I(i.type)}),r+=" mfp-close-btn-in"):t.wrap.append(I())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:C.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup"+g,function(e){27===e.keyCode&&t.close()}),C.on("resize"+g,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var u=t.wH=C.height(),f={};if(t.fixedContentPos&&t._hasScrollBar(u)){var m=t._getScrollbarSize();m&&(f.marginRight=m)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):f.overflow="hidden");var y=t.st.mainClass;return t.isIE7&&(y+=" mfp-ie7"),y&&t._addClassToMFP(y),t.updateItemHTML(),x("BuildControls"),e("html").css(f),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(h),t._setFocus()):t.bgOverlay.addClass(h),i.on("focusin"+g,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),x(p),n},close:function(){t.isOpen&&(x(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(y),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){x(s);var n=y+" "+h+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup"+g+" focusin"+g),t.ev.off(g),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,x(l)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||C.height();t.fixedContentPos||t.wrap.css("height",t.wH),x("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(x("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var r=!!t.st[i]&&t.st[i].markup;x("FirstMarkupParse",r),r?t.currTemplate[i]=e(r):t.currTemplate[i]=!0}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,x(f,n),o=n.type,t.container.prepend(t.contentContainer),x("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(I()):t.content=e:t.content="",x(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;a<r.length;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,x("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(C.width()<a)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};x("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(v)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||C.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){if(n.target!==t.wrap[0]&&!e.contains(t.wrap[0],n.target))return t._setFocus(),!1},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),x(d,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(g+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(g+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return E(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){E();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var j,_,M,O="inline",z=function(){M&&(_.after(M.addClass(j)).detach(),M=null)};e.magnificPopup.registerModule(O,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(O),k(s+"."+O,function(){z()})},getInline:function(n,i){if(z(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(_||(j=o.hiddenClass,_=S(j),j="mfp-"+j),M=r.after(_).detach().removeClass(j)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var A,P="ajax",Q=function(){A&&e(document.body).removeClass(A)},B=function(){Q(),t.req&&t.req.abort()};e.magnificPopup.registerModule(P,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(P),A=t.st.ajax.cursor,k(s+"."+P,B),k("BeforeChange."+P,B)},getAjax:function(n){A&&e(document.body).addClass(A),t.updateStatus("loading");var i=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};x("ParseAjax",a),t.appendContent(e(a.data),P),n.finished=!0,Q(),t._setFocus(),setTimeout(function(){t.wrap.addClass(h)},16),t.updateStatus("ready"),x("AjaxContentAdded")},error:function(){Q(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(i),""}}});var F,L=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image";t.types.push("image"),k(p+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),k(s+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),C.off("resize"+g)}),k("Resize"+i,t.resizeImage),t.isLowIE&&k("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,F&&clearInterval(F),e.isCheckingImgSize=!1,x("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function r(o){F&&clearInterval(F),F=setInterval(function(){return i.naturalWidth>0?void t._onImageHasSize(e):(n>200&&clearInterval(F),n++,void(3===n?r(10):40===n?r(50):100===n&&r(500)))},o)};o(1)},getImage:function(n,i){var o=0,r=function u(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,x("ImageLoadComplete")):(o++,o<200?setTimeout(u,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,c=i.find(".mfp-img");if(c.length){var l=document.createElement("img");l.className="mfp-img",n.el&&n.el.find("img").length&&(l.alt=n.el.find("img").attr("alt")),n.img=e(l).on("load.mfploader",r).on("error.mfploader",a),l.src=n.src,c.is("img")&&(n.img=n.img.clone()),l=n.img[0],l.naturalWidth>0?n.hasSize=!0:l.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:L(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(F&&clearInterval(F),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var N,H=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,l=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},u=function(){t.content.css("visibility","visible")};k("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void u();r=l(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){u(),setTimeout(function(){r.remove(),e=r=null,x("ZoomAnimationEnded")},16)},a)},16)}}),k(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=l(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),k(s+i,function(){t._allowZoom()&&(u(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return H()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var W="iframe",U="//about:blank",R=function(e){if(t.currTemplate[W]){var n=t.currTemplate[W].find("iframe");n.length&&(e||(n[0].src=U),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(W,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(W),k("BeforeChange",function(e,t,n){t!==n&&(t===W?R():n===W&&R(!0))}),k(s+"."+W,function(){R()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var q=function(e){var n=t.items.length;return e>n-1?e-n:e<0?n+e:e},$=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery",a=Boolean(e.fn.mfpFastClick);return t.direction=!0,!(!n||!n.enabled)&&(r+=" mfp-gallery",k(p+o,function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),i.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),k("UpdateStatus"+o,function(e,n){n.text&&(n.text=$(n.text,t.currItem.index,t.items.length))}),k(d+o,function(e,i,o,r){var a=t.items.length;o.counter=a>1?$(n.tCounter,r.index,a):""}),k("BuildControls"+o,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(v),r=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(v),s=a?"mfpFastClick":"click";o[s](function(){t.prev()}),r[s](function(){t.next()}),t.isIE7&&(S("b",o[0],!1,!0),S("a",o[0],!1,!0),S("b",r[0],!1,!0),S("a",r[0],!1,!0)),t.container.append(o.add(r))}}),k(f+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void k(s+o,function(){i.off(o),t.wrap.off("click"+o),t.arrowLeft&&a&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=q(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=q(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=q(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),x("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,x("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var D="retina";e.magnificPopup.registerModule(D,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(k("ImageHasSize."+D,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),k("ElementParse."+D,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){C.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var c,l,u,d,p,f;s.on("touchstart"+r,function(e){d=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],l=p.clientX,u=p.clientY,C.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-l)>10||Math.abs(p.clientY-u)>10)&&(d=!0,i())}).on("touchend"+r,function(e){i(),d||f>1||(a=!0,e.preventDefault(),clearTimeout(c),c=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&C.off("touchmove"+r+" touchend"+r)}}(),E()}),jQuery.fn.extend({meerkat:function(e){function t(e,t,n){if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var o="; expires="+i.toGMTString()}else var o="";document.cookie=e+"="+t+o+"; path=/"}function n(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var o=n[i];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null}function i(e){t(e,"",-1)}var o={background:"none",opacity:null,height:"auto",width:"100%",position:"bottom",close:".close",dontShowAgain:"#dont-show",dontShowAgainAuto:!1,animationIn:"none",animationOut:null,easingIn:"swing",easingOut:"swing",animationSpeed:"normal",cookieExpires:0,removeCookie:".removeCookie",delay:0,onMeerkatShow:function(){},timer:null},r=jQuery.extend(o,e);return jQuery.easing.def?(r.easingIn=r.easingIn,r.easingOut=r.easingOut):(r.easingIn="swing",r.easingOut="swing"),null===r.animationOut&&(r.animationOut=r.animationIn),r.delay=1e3*r.delay,null!=r.timer&&(r.timer=1e3*r.timer),jQuery(r.removeCookie).click(function(){i("meerkat")}),this.each(function(){var e=jQuery(this);if("dontshow"!=n("meerkat")){var i=function(n,i){var o=jQuery("#meerkat-wrap");if("slide"===i)if("left"===r.position||"right"===r.position)var a="width";else var a="height";else var a="opacity";var s={};s[a]=n,"show"===n&&("none"!==i?r.delay>0?jQuery(o).hide().delay(r.delay).animate(s,r.animationSpeed,r.easingIn):jQuery(o).hide().animate(s,r.animationSpeed,r.easingIn):"none"===i&&r.delay>0?jQuery(o).hide().delay(r.delay).show(0):jQuery(o).show(),jQuery(e).show(0)),"hide"===n&&("none"!==i?(null!==r.timer&&jQuery(o).delay(r.timer).animate(s,r.animationSpeed,r.easingOut,function(){jQuery(this).destroyMeerkat(),r.dontShowAgainAuto===!0&&t("meerkat","dontshow",r.cookieExpires)}),jQuery(r.close).click(function(){return jQuery(o).stop().animate(s,r.animationSpeed,r.easingOut,function(){jQuery(this).destroyMeerkat()}),!1}),jQuery(r.dontShowAgain).click(function(){return jQuery(o).stop().animate(s,r.animationSpeed,r.easingOut,function(){jQuery(this).destroyMeerkat()}),t("meerkat","dontshow",r.cookieExpires),!1})):"none"===i&&null!==r.timer?jQuery(o).delay(r.timer).hide(0).queue(function(){jQuery(this).destroyMeerkat()}):(jQuery(r.close).click(function(){return jQuery(o).hide().queue(function(){jQuery(this).destroyMeerkat()}),!1}),jQuery(r.dontShowAgain).click(function(){return jQuery(o).hide().queue(function(){jQuery(this).destroyMeerkat()}),t("meerkat","dontshow",r.cookieExpires),!1})))};if(r.onMeerkatShow.call(this),jQuery("html, body").css({margin:"0",height:"100%"}),jQuery(e).wrap('<div id="meerkat-wrap"><div id="meerkat-container"></div></div>'),jQuery("#meerkat-wrap").css({position:"fixed","z-index":"10000",width:r.width,height:r.height}).css(r.position,"0"),jQuery("#meerkat-container").css({background:r.background,height:r.height}),"left"!==r.position&&"right"!==r.position||jQuery("#meerkat-wrap").css("top",0),null!=r.opacity&&(jQuery("#meerkat-wrap").prepend('<div class="opacity-layer"></div>'),jQuery("#meerkat-container").css({background:"transparent","z-index":"2",position:"relative"}),jQuery(".opacity-layer").css({position:"absolute",top:"0",height:"100%",width:"100%",background:r.background,opacity:r.opacity})),jQuery.browser.msie&&jQuery.browser.version<=6){if(jQuery("#meerkat-wrap").css({position:"absolute",bottom:"-1px","z-index":"0"}),0==jQuery("#ie6-content-container").length){jQuery("body").children().filter(function(e){return"meerkat-wrap"!=jQuery(this).attr("id")}).wrapAll('<div id="ie6-content-container"></div>'),jQuery("html, body").css({height:"100%",width:"100%",overflow:"hidden"}),jQuery("#ie6-content-container").css({overflow:"auto",width:"100%",height:"100%",position:"absolute"});var o=document.body.currentStyle.backgroundColor+" ";o+=document.body.currentStyle.backgroundImage+" ",o+=document.body.currentStyle.backgroundRepeat+" ",o+=document.body.currentStyle.backgroundAttachment+" ",o+=document.body.currentStyle.backgroundPositionX+" ",o+=document.body.currentStyle.backgroundPositionY,jQuery("body").css({background:"none"}),jQuery("#ie6-content-container").css({background:o})}var a=document.getElementById("ie6-content-container");a.clientHeight<a.scrollHeight&&"left"!=r.position&&jQuery("#meerkat-wrap").css({right:"17px"})}switch(r.animationIn){case"slide":i("show","slide");break;case"fade":i("show","fade");break;case"none":i("show","none");break;default:alert('The animationIn option only accepts "slide", "fade", or "none"')}switch(r.animationOut){case"slide":i("hide","slide");break;case"fade":i("hide","fade");break;case"none":null!=r.timer&&jQuery("#meerkat-wrap").delay(r.timer).hide(0).queue(function(){jQuery(this).destroyMeerkat()}),jQuery(r.close).click(function(){jQuery("#meerkat-wrap").hide().queue(function(){jQuery(this).destroyMeerkat()})}),jQuery(r.dontShowAgain).click(function(){jQuery("#meerkat-wrap").hide().queue(function(){jQuery(this).destroyMeerkat()}),t("meerkat","dontshow",r.cookieExpires)});break;default:alert('The animationOut option only accepts "slide", "fade", or "none"')}}else jQuery(e).hide()})},destroyMeerkat:function(){jQuery("#meerkat-wrap").replaceWith(jQuery("#meerkat-container").contents().hide())}});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};window.matchMedia||(window.matchMedia=function(){var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),n=document.getElementsByTagName("script")[0],i=null;t.type="text/css",t.id="matchmediajs-test",n.parentNode.insertBefore(t,n),i="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=n:t.textContent=n,"1px"===i.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t,n){function i(t){"object"==("undefined"==typeof module?"undefined":_typeof(module))&&"object"==_typeof(module.exports)?module.exports=t:"function"==typeof define&&define.amd&&define("picturefill",function(){return t}),"object"==("undefined"==typeof e?"undefined":_typeof(e))&&(e.picturefill=t)}function o(e){var t,n,i,o,r,c=e||{};t=c.elements||a.getAllElements();for(var l=0,u=t.length;u>l;l++)if(n=t[l],i=n.parentNode,o=void 0,r=void 0,"IMG"===n.nodeName.toUpperCase()&&(n[a.ns]||(n[a.ns]={}),c.reevaluate||!n[a.ns].evaluated)){if(i&&"PICTURE"===i.nodeName.toUpperCase()){if(a.removeVideoShim(i),o=a.getMatch(n,i),o===!1)continue}else o=void 0;(i&&"PICTURE"===i.nodeName.toUpperCase()||!a.sizesSupported&&n.srcset&&s.test(n.srcset))&&a.dodgeSrcset(n),o?(r=a.processSourceSet(o),a.applyBestCandidate(r,n)):(r=a.processSourceSet(n),(void 0===n.srcset||n[a.ns].srcset)&&a.applyBestCandidate(r,n)),n[a.ns].evaluated=!0}}function r(){function n(){clearTimeout(i),i=setTimeout(s,60)}a.initTypeDetects(),o();var i,r=setInterval(function(){return o(),/^loaded|^i|^c/.test(t.readyState)?void clearInterval(r):void 0},250),s=function(){o({reevaluate:!0})};e.addEventListener?e.addEventListener("resize",n,!1):e.attachEvent&&e.attachEvent("onresize",n)}if(e.HTMLPictureElement)return void i(function(){});t.createElement("picture");var a=e.picturefill||{},s=/\s+\+?\d+(e\d+)?w/;a.ns="picturefill",function(){a.srcsetSupported="srcset"in n,a.sizesSupported="sizes"in n,a.curSrcSupported="currentSrc"in n}(),a.trim=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},a.makeUrl=function(){var e=t.createElement("a");return function(t){return e.href=t,e.href}}(),a.restrictsMixedContent=function(){return"https:"===e.location.protocol},a.matchesMedia=function(t){return e.matchMedia&&e.matchMedia(t).matches},a.getDpr=function(){return e.devicePixelRatio||1},a.getWidthFromLength=function(e){var n;if(!e||e.indexOf("%")>-1!=0||!(parseFloat(e)>0||e.indexOf("calc(")>-1))return!1;e=e.replace("vw","%"),a.lengthEl||(a.lengthEl=t.createElement("div"),a.lengthEl.style.cssText="border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden",a.lengthEl.className="helper-from-picturefill-js"),a.lengthEl.style.width="0px";try{a.lengthEl.style.width=e}catch(i){}return t.body.appendChild(a.lengthEl),n=a.lengthEl.offsetWidth,0>=n&&(n=!1),t.body.removeChild(a.lengthEl),n},a.detectTypeSupport=function(t,n){var i=new e.Image;return i.onerror=function(){a.types[t]=!1,o()},i.onload=function(){a.types[t]=1===i.width,o()},i.src=n,"pending"},a.types=a.types||{},a.initTypeDetects=function(){a.types["image/jpeg"]=!0,a.types["image/gif"]=!0,a.types["image/png"]=!0,a.types["image/svg+xml"]=t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),a.types["image/webp"]=a.detectTypeSupport("image/webp","data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")},a.verifyTypeSupport=function(e){var t=e.getAttribute("type");if(null===t||""===t)return!0;var n=a.types[t];return"string"==typeof n&&"pending"!==n?(a.types[t]=a.detectTypeSupport(t,n),"pending"):"function"==typeof n?(n(),"pending"):n},a.parseSize=function(e){var t=/(\([^)]+\))?\s*(.+)/g.exec(e);return{media:t&&t[1],length:t&&t[2]}},a.findWidthFromSourceSize=function(n){for(var i,o=a.trim(n).split(/\s*,\s*/),r=0,s=o.length;s>r;r++){var c=o[r],l=a.parseSize(c),u=l.length,d=l.media;if(u&&(!d||a.matchesMedia(d))&&(i=a.getWidthFromLength(u)))break}return i||Math.max(e.innerWidth||0,t.documentElement.clientWidth)},a.parseSrcset=function(e){for(var t=[];""!==e;){e=e.replace(/^\s+/g,"");var n,i=e.search(/\s/g),o=null;if(-1!==i){n=e.slice(0,i);var r=n.slice(-1);if((","===r||""===n)&&(n=n.replace(/,+$/,""),o=""),e=e.slice(i+1),null===o){var a=e.indexOf(",");-1!==a?(o=e.slice(0,a),e=e.slice(a+1)):(o=e,e="")}}else n=e,e="";(n||o)&&t.push({url:n,descriptor:o})}return t},a.parseDescriptor=function(e,t){var n,i=t||"100vw",o=e&&e.replace(/(^\s+|\s+$)/g,""),r=a.findWidthFromSourceSize(i);if(o)for(var s=o.split(" "),c=s.length-1;c>=0;c--){var l=s[c],u=l&&l.slice(l.length-1);if("h"!==u&&"w"!==u||a.sizesSupported){if("x"===u){var d=l&&parseFloat(l,10);n=d&&!isNaN(d)?d:1}}else n=parseFloat(parseInt(l,10)/r)}return n||1},a.getCandidatesFromSourceSet=function(e,t){for(var n=a.parseSrcset(e),i=[],o=0,r=n.length;r>o;o++){var s=n[o];i.push({url:s.url,resolution:a.parseDescriptor(s.descriptor,t)})}return i},a.dodgeSrcset=function(e){e.srcset&&(e[a.ns].srcset=e.srcset,e.srcset="",e.setAttribute("data-pfsrcset",e[a.ns].srcset))},a.processSourceSet=function(e){var t=e.getAttribute("srcset"),n=e.getAttribute("sizes"),i=[];return"IMG"===e.nodeName.toUpperCase()&&e[a.ns]&&e[a.ns].srcset&&(t=e[a.ns].srcset),
t&&(i=a.getCandidatesFromSourceSet(t,n)),i},a.backfaceVisibilityFix=function(e){var t=e.style||{},n="webkitBackfaceVisibility"in t,i=t.zoom;n&&(t.zoom=".999",n=e.offsetWidth,t.zoom=i)},a.setIntrinsicSize=function(){var n={},i=function(e,t,n){t&&e.setAttribute("width",parseInt(t/n,10))};return function(o,r){var s;o[a.ns]&&!e.pfStopIntrinsicSize&&(void 0===o[a.ns].dims&&(o[a.ns].dims=o.getAttribute("width")||o.getAttribute("height")),o[a.ns].dims||(r.url in n?i(o,n[r.url],r.resolution):(s=t.createElement("img"),s.onload=function(){if(n[r.url]=s.width,!n[r.url])try{t.body.appendChild(s),n[r.url]=s.width||s.offsetWidth,t.body.removeChild(s)}catch(e){}o.src===r.url&&i(o,n[r.url],r.resolution),o=null,s.onload=null,s=null},s.src=r.url)))}}(),a.applyBestCandidate=function(e,t){var n,i,o;e.sort(a.ascendingSort),i=e.length,o=e[i-1];for(var r=0;i>r;r++)if(n=e[r],n.resolution>=a.getDpr()){o=n;break}o&&(o.url=a.makeUrl(o.url),t.src!==o.url&&(a.restrictsMixedContent()&&"http:"===o.url.substr(0,"http:".length).toLowerCase()?void 0!==window.console&&console.warn("Blocked mixed content image "+o.url):(t.src=o.url,a.curSrcSupported||(t.currentSrc=t.src),a.backfaceVisibilityFix(t))),a.setIntrinsicSize(t,o))},a.ascendingSort=function(e,t){return e.resolution-t.resolution},a.removeVideoShim=function(e){var t=e.getElementsByTagName("video");if(t.length){for(var n=t[0],i=n.getElementsByTagName("source");i.length;)e.insertBefore(i[0],n);n.parentNode.removeChild(n)}},a.getAllElements=function(){for(var e=[],n=t.getElementsByTagName("img"),i=0,o=n.length;o>i;i++){var r=n[i];("PICTURE"===r.parentNode.nodeName.toUpperCase()||null!==r.getAttribute("srcset")||r[a.ns]&&null!==r[a.ns].srcset)&&e.push(r)}return e},a.getMatch=function(e,t){for(var n,i=t.childNodes,o=0,r=i.length;r>o;o++){var s=i[o];if(1===s.nodeType){if(s===e)return n;if("SOURCE"===s.nodeName.toUpperCase()){null!==s.getAttribute("src")&&void 0!==("undefined"==typeof console?"undefined":_typeof(console))&&console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");var c=s.getAttribute("media");if(s.getAttribute("srcset")&&(!c||a.matchesMedia(c))){var l=a.verifyTypeSupport(s);if(l===!0){n=s;break}if("pending"===l)return!1}}}}return n},r(),o._=a,i(o)}(window,window.document,new window.Image),function e(t,n,i){function o(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){(function(t){function n(e){return e&&e.__esModule?e:{"default":e}}var i="undefined"!=typeof window?window.jQuery:"undefined"!=typeof t?t.jQuery:null,o=n(i),r=e("modules/accordion.js"),a=n(r),s=e("modules/custom.js"),c=n(s);!function(e){function t(){(0,a["default"])(),(0,c["default"])()}e(document).ready(function(){t(),e(window).bind("styleguide:onRendered",function(e){t()})})}(o["default"])}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"modules/accordion.js":2,"modules/custom.js":3}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){$(".toggle").click(function(e){e.preventDefault();var t=$(this);t.find(".answer").hasClass("show")?(t.find(".answer").removeClass("show"),t.removeClass("active"),t.find(".answer").slideUp(350)):(t.find(".answer").removeClass("show"),$(".toggle").removeClass("active"),t.find(".answer").slideUp(350),t.addClass("active"),t.find(".answer").toggleClass("show"),t.find(".answer").slideToggle(350)),console.log(t.find("li .answer"))}),console.log("test")}},{}],3:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){$(".c-uie__dropdown-heading").hover(function(){$(".c-uie__dropdown-heading .c-uie__dropdown-options").addClass("drop")},function(){$(".c-uie__dropdown-heading .c-uie__dropdown-options").removeClass("drop")}),$(".cross").hide(),$(".hamburger").click(function(){$(".c-menu__container").slideToggle("slow",function(){$(".hamburger").hide(),$(".cross").show()})}),$(".cross").click(function(){$(".c-menu__container").slideToggle("slow",function(){$(".cross").hide(),$(".hamburger").show()})})}},{}]},{},[1]);