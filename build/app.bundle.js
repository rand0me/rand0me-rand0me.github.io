/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}__webpack_require__(2);var _motd=__webpack_require__(7),_motd2=_interopRequireDefault(_motd),body=document.querySelector("body");(0,_motd2["default"])();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var content=__webpack_require__(4);"string"==typeof content&&(content=[[module.id,content,""]]);var update=__webpack_require__(6)(content,{});content.locals&&(module.exports=content.locals),module.hot&&(content.locals||module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss",function(){var e=__webpack_require__(4);"string"==typeof e&&(e=[[module.id,e,""]]),update(e)}),module.hot.dispose(function(){update()}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Bowlby+One+SC);", ""]);

	// module
	exports.push([module.id, "body {\n  font-family: sans-serif;\n  background: black;\n  color: tomato;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Bowlby One SC', sans-serif; }\n\n@keyframes tomato-glow {\n  from {\n    text-shadow: 0px 0px 0px lime; }\n  50% {\n    text-shadow: 0 0 40px lime; }\n  to {\n    text-shadow: 0px 0px 0px lime; } }\n\n.header {\n  width: 100%;\n  text-align: center;\n  cursor: pointer; }\n  .header * {\n    text-transform: uppercase;\n    animation: tomato-glow 2s linear infinite; }\n\n.sound-track {\n  align-self: center;\n  height: 150px;\n  min-width: 320px;\n  max-width: 600px;\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports=function(){var t=[];return t.toString=function(){for(var t=[],n=0;n<this.length;n++){var r=this[n];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(e[i]=!0)}for(o=0;o<n.length;o++){var u=n[o];"number"==typeof u[0]&&e[u[0]]||(r&&!u[2]?u[2]=r:r&&(u[2]="("+u[2]+") and ("+r+")"),t.push(u))}},t};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(){console.log("\n          _____                    _____                    _____                    _____                    _____                    _____          \n         /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\         \n        /::\\    \\                /::\\    \\                /::\\____\\                /::\\    \\                /::\\____\\                /::\\    \\        \n       /::::\\    \\              /::::\\    \\              /::::|   |               /::::\\    \\              /::::|   |               /::::\\    \\       \n      /::::::\\    \\            /::::::\\    \\            /:::::|   |              /::::::\\    \\            /:::::|   |              /::::::\\    \\      \n     /:::/\\:::\\    \\          /:::/\\:::\\    \\          /::::::|   |             /:::/\\:::\\    \\          /::::::|   |             /:::/\\:::\\    \\     \n    /:::/__\\:::\\    \\        /:::/__\\:::\\    \\        /:::/|::|   |            /:::/  \\:::\\    \\        /:::/|::|   |            /:::/__\\:::\\    \\    \n   /::::\\   \\:::\\    \\      /::::\\   \\:::\\    \\      /:::/ |::|   |           /:::/    \\:::\\    \\      /:::/ |::|   |           /::::\\   \\:::\\    \\   \n  /::::::\\   \\:::\\    \\    /::::::\\   \\:::\\    \\    /:::/  |::|   | _____    /:::/    / \\:::\\    \\    /:::/  |::|___|______    /::::::\\   \\:::\\    \\  \n /:::/\\:::\\   \\:::\\____\\  /:::/\\:::\\   \\:::\\    \\  /:::/   |::|   |/\\    \\  /:::/    /   \\:::\\ ___\\  /:::/   |::::::::\\    \\  /:::/\\:::\\   \\:::\\    \\ \n/:::/  \\:::\\   \\:::|    |/:::/  \\:::\\   \\:::\\____\\/:: /    |::|   /::\\____\\/:::/____/     \\:::|    |/:::/    |:::::::::\\____\\/:::/__\\:::\\   \\:::\\____\\\n\\::/   |::::\\  /:::|____|\\::/    \\:::\\  /:::/    /\\::/    /|::|  /:::/    /\\:::\\    \\     /:::|____|\\::/    / ~~~~~/:::/    /\\:::\\   \\:::\\   \\::/    /\n \\/____|:::::\\/:::/    /  \\/____/ \\:::\\/:::/    /  \\/____/ |::| /:::/    /  \\:::\\    \\   /:::/    /  \\/____/      /:::/    /  \\:::\\   \\:::\\   \\/____/ \n       |:::::::::/    /            \\::::::/    /           |::|/:::/    /    \\:::\\    \\ /:::/    /               /:::/    /    \\:::\\   \\:::\\    \\     \n       |::|\\::::/    /              \\::::/    /            |::::::/    /      \\:::\\    /:::/    /               /:::/    /      \\:::\\   \\:::\\____\\    \n       |::| \\::/____/               /:::/    /             |:::::/    /        \\:::\\  /:::/    /               /:::/    /        \\:::\\   \\::/    /    \n       |::|  ~|                    /:::/    /              |::::/    /          \\:::\\/:::/    /               /:::/    /          \\:::\\   \\/____/     \n       |::|   |                   /:::/    /               /:::/    /            \\::::::/    /               /:::/    /            \\:::\\    \\         \n       \\::|   |                  /:::/    /               /:::/    /              \\::::/    /               /:::/    /              \\:::\\____\\        \n        \\:|   |                  \\::/    /                \\::/    /                \\::/____/                \\::/    /                \\::/    /        \n         \\|___|                   \\/____/                  \\/____/                  ~~                       \\/____/                  \\/____/         \n                                                                                                                                                      \n    ")};

/***/ }
/******/ ]);