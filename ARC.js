!function(){function t(e){try{window.subvaAllowRightClick(e.document)}catch(n){}for(var o=0;o<e.frames.length;o++)t(e.frames[o])}void 0===window.subvaAllowRightClick&&(window.subvaAllowRightClick=function(t){!function(){var e=t.createElement("style");e.type="text/css";var n="*{user-select:text!important;-webkit-user-select:text!important;}";e.styleSheet?e.styleSheet.cssText=n:e.appendChild(t.createTextNode(n)),t.getElementsByTagName("head")[0].appendChild(e)}(),function(){for(var e=["copy","cut","paste","select","selectstart"],n=0;n<e.length;n++)t.addEventListener(e[n],function(t){t.stopPropagation()},!0)}(),function(){var e=null,n=document,o=t.body;[n.oncontextmenu=e,n.onselectstart=e,n.ondragstart=e,n.onmousedown=e],[o.oncontextmenu=e,o.onselectstart=e,o.ondragstart=e,o.onmousedown=e,o.oncut=e,o.oncopy=e,o.onpaste=e]}(),function(){function e(){this.events=["DOMAttrModified","DOMNodeInserted","DOMNodeRemoved","DOMCharacterDataModified","DOMSubtreeModified"],this.bind()}function n(t){this.event=t,this.contextmenuEvent=this.createEvent(this.event.type)}function o(t){t.stopPropagation(),t.stopImmediatePropagation();var i=new n(t);window.removeEventListener(t.type,o,!0);var s=new e(function(){});i.fire(),window.addEventListener(t.type,o,!0),i.isCanceled&&s.isCalled&&t.preventDefault()}setTimeout(function(){t.oncontextmenu=null},2e3),e.prototype.bind=function(){this.events.forEach(function(e){t.addEventListener(e,this,!0)}.bind(this))},e.prototype.handleEvent=function(){this.isCalled=!0},e.prototype.unbind=function(){this.events.forEach(function(){}.bind(this))},n.prototype.createEvent=function(t){var e=this.event.target,n=e.ownerDocument.createEvent("MouseEvents");return n.initMouseEvent(t,this.event.bubbles,this.event.cancelable,e.ownerDocument.defaultView,this.event.detail,this.event.screenX,this.event.screenY,this.event.clientX,this.event.clientY,this.event.ctrlKey,this.event.altKey,this.event.shiftKey,this.event.metaKey,this.event.button,this.event.relatedTarget),n},n.prototype.fire=function(){var t=this.event.target;(function(t){t.preventDefault()}).bind(this);t.dispatchEvent(this.contextmenuEvent),this.isCanceled=this.contextmenuEvent.defaultPrevented},window.addEventListener("contextmenu",o,!0)}(),function(){for(var e=["contextmenu","copy","cut","paste","mouseup","mousedown","keyup","keydown","drag","dragstart","select","selectstart"],n=0;n<e.length;n++)t.addEventListener(e[n],function(t){t.stopPropagation()},!0)}()}),t(window)}();
