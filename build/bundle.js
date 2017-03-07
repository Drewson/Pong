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

	'use strict';

	__webpack_require__(1);

	var _Game = __webpack_require__(9);

	var _Game2 = _interopRequireDefault(_Game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create a game instance
	var game = new _Game2.default('game', 512, 256);

	(function gameLoop() {
	    game.render();
	    requestAnimationFrame(gameLoop);
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./game.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./game.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n  background-color:#7DAB87;\n}\n\n\nol, ul {\n\tlist-style: none;\n  visibility: hidden;\n  height: 0px;\n  width: 0px;\n  transition: height 1.5s, width 1s;\n}\n\n\nh2 {\n  text-decoration: underline;\n  font-size: 20px;\n}\n\n#game {\n  box-shadow: 3px 7px 7px black;\n}\n\n#controls {\n  /*height: 30px;*/\n  overflow: hidden;\n  display: block;\n  margin: 20px;\n  padding: 15px 5px;\n  border: 2px outset black;\n  border-radius: 3px;\n  background-color: wheat;\n}\n\n#controls :hover ~ ul{\n  visibility: visible;\n  height: 70px;\n  width: 330px;\n  padding: 10px;\n}\n\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n  font-family: 'Silkscreen Web';\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + "?#iefix) format('embedded-opentype'),\n    url(" + __webpack_require__(5) + ") format('woff'),\n    url(" + __webpack_require__(6) + ") format('truetype'),\n    url(" + __webpack_require__(7) + "#silkscreennormal) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  align-items: center;\n  display: flex;\n  font-family: 'Silkscreen Web', monotype;\n  height: 100vh;\n  justify-content: center;\n  width: 100%;\n}\n\nh1 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem; \n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	var _Board = __webpack_require__(11);

	var _Board2 = _interopRequireDefault(_Board);

	var _Paddle = __webpack_require__(12);

	var _Paddle2 = _interopRequireDefault(_Paddle);

	var _Ball = __webpack_require__(13);

	var _Ball2 = _interopRequireDefault(_Ball);

	var _Score = __webpack_require__(14);

	var _Score2 = _interopRequireDefault(_Score);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Game = function () {
		function Game(element, width, height, destroy) {
			var _this = this;

			_classCallCheck(this, Game);

			this.destroy = destroy;
			this.element = element;
			this.width = width;
			this.height = height;
			this.pause = false;
			this.bomb = false;
			this.gameElement = document.getElementById(this.element);

			this.boardGap = 10;
			this.paddleWidth = 12;
			this.paddleHeight = 56;

			this.board = new _Board2.default(this.width, this.height);

			this.paddle2();
			this.paddle1();

			this.ball();
			this.newBall();

			this.score1();
			this.score2();

			document.addEventListener('keydown', function (event) {
				switch (event.keyCode) {
					case _settings.KEYS.spaceBar:
						_this.pause = !_this.pause;
						break;
					case _settings.KEYS.shiftKey:
						_this.bomb = true;
				}
			});
		}

		//PLAYER 1


		_createClass(Game, [{
			key: 'score1',
			value: function score1() {
				this.score1 = new _Score2.default(this.width / 2 - 70, 30, 30);
			}

			//PLAYER 2

		}, {
			key: 'score2',
			value: function score2() {
				this.score2 = new _Score2.default(this.width / 2 + 50, 30, 30);
			}
		}, {
			key: 'ball',
			value: function ball() {
				this.ball = new _Ball2.default(8, this.width, this.height, _settings.KEYS.plus, _settings.KEYS.minus);
			}

			//BOMB BALL

		}, {
			key: 'newBall',
			value: function newBall() {
				this.newBall = new _Ball2.default(8, this.width, this.height);
			}
		}, {
			key: 'paddle1',
			value: function paddle1() {
				this.paddle1 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight) / 2, _settings.KEYS.w, _settings.KEYS.s, _settings.KEYS.a, _settings.KEYS.d);
			}
		}, {
			key: 'paddle2',
			value: function paddle2() {
				this.paddle2 = new _Paddle2.default(this.height, this.paddleWidth, this.paddleHeight, this.width - this.boardGap - this.paddleWidth, (this.height - this.paddleHeight) / 2, _settings.KEYS.up, _settings.KEYS.down, _settings.KEYS.left, _settings.KEYS.right);
			}
		}, {
			key: 'render',
			value: function render(i) {

				this.gameElement.innerHTML = '';

				var svg = document.createElementNS(_settings.SVG_NS, 'svg');

				svg.setAttributeNS(null, 'width', this.width);
				svg.setAttributeNS(null, 'height', this.height);
				svg.setAttributeNS(null, 'viewBox', '0 0 ' + this.width + ' ' + this.height);
				this.gameElement.appendChild(svg);

				this.board.render(svg);

				if (this.paddle1.score === 5 || this.paddle2.score === 5) {
					var gg = document.createElementNS(_settings.SVG_NS, 'text');
					gg.setAttributeNS(null, 'fill', 'yellow');
					gg.setAttributeNS(null, 'stroke', 'black');
					gg.setAttributeNS(null, 'stroke-width', '5px');
					gg.setAttributeNS(null, 'stroke-opacity', .25);
					gg.setAttributeNS(null, 'x', 10);
					gg.setAttributeNS(null, 'y', 150);
					gg.setAttributeNS(null, 'font-size', '80px');
					gg.setAttributeNS(null, 'kerning', '10');

					gg.innerHTML = 'GAME OVER!';
					svg.appendChild(gg);

					i = 1;
				}

				if (this.pause || i) {
					return;
				}

				this.ball.render(svg, this.paddle1, this.paddle2);

				if (this.bomb) {
					this.newBall.render(svg, this.paddle1, this.paddle2, 1);
				}

				this.paddle1.render(svg);
				this.paddle2.render(svg);
				this.score1.render(svg, this.paddle1.score);
				this.score2.render(svg, this.paddle2.score);
			}
		}]);

		return Game;
	}();

	exports.default = Game;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg';

	var KEYS = exports.KEYS = {
	  a: 65,
	  w: 87,
	  s: 83,
	  d: 68,
	  up: 38,
	  down: 40,
	  left: 37,
	  right: 39,
	  plus: 187,
	  minus: 189,
	  spaceBar: 32,
	  shiftKey: 16

	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Board = function () {
	  function Board(width, height) {
	    _classCallCheck(this, Board);

	    this.width = width;
	    this.height = height;
	  }

	  _createClass(Board, [{
	    key: 'render',
	    value: function render(svg) {

	      var rect = document.createElementNS(_settings.SVG_NS, 'rect');
	      rect.setAttributeNS(null, 'width', this.width);
	      rect.setAttributeNS(null, 'height', this.height);
	      rect.setAttributeNS(null, 'fill', '#B25C4E');
	      rect.setAttributeNS(null, 'x', '0');
	      rect.setAttributeNS(null, 'y', '0');
	      rect.setAttributeNS(null, 'stroke', 'white');
	      rect.setAttributeNS(null, 'stroke-width', '10');

	      var line = document.createElementNS(_settings.SVG_NS, 'line');
	      line.setAttributeNS(null, 'x1', this.width / 2);
	      line.setAttributeNS(null, 'x2', this.width / 2);
	      line.setAttributeNS(null, 'y1', '0');
	      line.setAttributeNS(null, 'y2', this.height);
	      line.setAttributeNS(null, 'width', '7');
	      line.setAttributeNS(null, 'stroke', 'silver');
	      line.setAttributeNS(null, 'stroke-width', '7');

	      var line2 = document.createElementNS(_settings.SVG_NS, 'line');
	      line2.setAttributeNS(null, 'x1', 0);
	      line2.setAttributeNS(null, 'x2', this.width);
	      line2.setAttributeNS(null, 'y1', 20);
	      line2.setAttributeNS(null, 'y2', 20);
	      line2.setAttributeNS(null, 'width', '1');
	      line2.setAttributeNS(null, 'stroke', 'white');
	      line2.setAttributeNS(null, 'stroke-width', '3');

	      var line3 = document.createElementNS(_settings.SVG_NS, 'line');
	      line3.setAttributeNS(null, 'x1', 0);
	      line3.setAttributeNS(null, 'x2', this.width);
	      line3.setAttributeNS(null, 'y1', this.height - 20);
	      line3.setAttributeNS(null, 'y2', this.height - 20);
	      line3.setAttributeNS(null, 'width', '1');
	      line3.setAttributeNS(null, 'stroke', 'white');
	      line3.setAttributeNS(null, 'stroke-width', '3');

	      var line4 = document.createElementNS(_settings.SVG_NS, 'line');
	      line4.setAttributeNS(null, 'x1', this.width * .25);
	      line4.setAttributeNS(null, 'x2', this.width * .75);
	      line4.setAttributeNS(null, 'y1', this.height / 2);
	      line4.setAttributeNS(null, 'y2', this.height / 2);
	      line4.setAttributeNS(null, 'width', '1');
	      line4.setAttributeNS(null, 'stroke', 'white');
	      line4.setAttributeNS(null, 'stroke-width', '3');

	      var line5 = document.createElementNS(_settings.SVG_NS, 'line');
	      line5.setAttributeNS(null, 'x1', this.width * .25);
	      line5.setAttributeNS(null, 'x2', this.width * .25);
	      line5.setAttributeNS(null, 'y1', 20);
	      line5.setAttributeNS(null, 'y2', this.height - 20);
	      line5.setAttributeNS(null, 'width', '1');
	      line5.setAttributeNS(null, 'stroke', 'white');
	      line5.setAttributeNS(null, 'stroke-width', '3');

	      var line6 = document.createElementNS(_settings.SVG_NS, 'line');
	      line6.setAttributeNS(null, 'x1', this.width * .75);
	      line6.setAttributeNS(null, 'x2', this.width * .75);
	      line6.setAttributeNS(null, 'y1', 20);
	      line6.setAttributeNS(null, 'y2', this.height - 20);
	      line6.setAttributeNS(null, 'width', '1');
	      line6.setAttributeNS(null, 'stroke', 'white');
	      line6.setAttributeNS(null, 'stroke-width', '3');

	      svg.appendChild(rect);
	      svg.appendChild(line);
	      svg.appendChild(line2);
	      svg.appendChild(line3);
	      svg.appendChild(line4);
	      svg.appendChild(line5);
	      svg.appendChild(line6);
	    }
	  }]);

	  return Board;
	}();

	exports.default = Board;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Paddle = function () {
	    function Paddle(boardHeight, width, height, x, y, up, down, left, right) {
	        var _this = this;

	        _classCallCheck(this, Paddle);

	        this.boardHeight = boardHeight;
	        this.width = width;
	        this.height = height;
	        this.x = x;
	        this.y = y;
	        this.speed = 30;
	        this.score = 0;

	        document.addEventListener('keydown', function (event) {
	            switch (event.keyCode) {
	                case up:
	                    _this.up();
	                    break;
	                case down:
	                    _this.down();
	                    break;
	                case right:
	                    _this.right();
	                    break;
	                case left:
	                    _this.left();
	                    break;
	            }
	        });
	    }

	    _createClass(Paddle, [{
	        key: 'up',
	        value: function up() {
	            this.y = Math.max(this.y - this.speed, 0);
	        }
	    }, {
	        key: 'down',
	        value: function down() {
	            this.y = Math.min(this.y + this.speed, this.boardHeight - this.height);
	        }
	    }, {
	        key: 'left',
	        value: function left() {
	            this.x = Math.min(this.boardHeight * 2, this.x - this.speed);
	        }
	    }, {
	        key: 'right',
	        value: function right() {
	            this.x = Math.max(this.x + this.speed, 0);
	        }
	    }, {
	        key: 'coordinates',
	        value: function coordinates(x, y, width, height) {
	            var leftX = x;
	            var rightX = x + width;
	            var topY = y;
	            var bottomY = y + height;
	            return [leftX, rightX, topY, bottomY];
	        }
	    }, {
	        key: 'render',
	        value: function render(svg) {

	            var rect = document.createElementNS(_settings.SVG_NS, 'rect');
	            rect.setAttributeNS(null, 'width', this.width);
	            rect.setAttributeNS(null, 'height', this.height);
	            rect.setAttributeNS(null, 'x', this.x);
	            rect.setAttributeNS(null, 'y', this.y);
	            rect.setAttributeNS(null, 'fill', '#275880');
	            rect.setAttributeNS(null, 'stroke', 'black');
	            rect.setAttributeNS(null, 'stroke-width', '1');
	            svg.appendChild(rect);
	        }
	    }]);

	    return Paddle;
	}();

	exports.default = Paddle;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	var _Game = __webpack_require__(9);

	var _Game2 = _interopRequireDefault(_Game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Ball = function () {
	    function Ball(radius, boardWidth, boardHeight, plus, minus) {
	        var _this = this;

	        _classCallCheck(this, Ball);

	        this.radius = radius;
	        this.boardWidth = boardWidth;
	        this.boardHeight = boardHeight;
	        this.direction = 1;
	        this.ping = new Audio('public/sounds/pong-01.wav');
	        this.pang = new Audio('public/sounds/pong-04.wav');
	        this.ballSpeed = 6;
	        this.plus = plus;
	        this.minus = minus;

	        this.reset();

	        document.addEventListener('keydown', function (event) {
	            switch (event.keyCode) {
	                case plus:
	                    _this.ballSpeed++;
	                    break;
	                case minus:
	                    _this.ballSpeed--;
	                    break;
	            }
	        });
	    }

	    _createClass(Ball, [{
	        key: 'wallCollision',
	        value: function wallCollision() {
	            var hitLeft = this.x - this.radius <= 0;
	            var hitRight = this.x + this.radius >= this.boardWidth;
	            var hitTop = this.y - this.radius <= 0;
	            var hitBottom = this.y + this.radius >= this.boardHeight;

	            if (hitLeft || hitRight) {
	                this.vx = -this.vx;
	            } else if (hitTop || hitBottom) {
	                this.vy = -this.vy;
	            }
	        }
	    }, {
	        key: 'paddleCollision',
	        value: function paddleCollision(paddle1, paddle2) {
	            if (this.vx > 0) {
	                //player 2 coords
	                var paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);

	                var _paddle = _slicedToArray(paddle, 4),
	                    leftX = _paddle[0],
	                    rightX = _paddle[1],
	                    topY = _paddle[2],
	                    bottomY = _paddle[3];

	                if (this.x + this.radius >= leftX && this.x + this.radius <= rightX && this.y >= topY && this.y <= bottomY) {
	                    this.vx = -this.vx;
	                    this.ping.play();
	                }
	            } else {
	                var _paddle2 = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

	                var _paddle3 = _slicedToArray(_paddle2, 4),
	                    _leftX = _paddle3[0],
	                    _rightX = _paddle3[1],
	                    _topY = _paddle3[2],
	                    _bottomY = _paddle3[3];

	                if (this.x - this.radius >= _leftX && this.x - this.radius <= _rightX && this.y >= _topY && this.y <= _bottomY) {
	                    this.vx = -this.vx;
	                    this.ping.play();
	                }
	            }
	        }
	    }, {
	        key: 'reset',
	        value: function reset() {
	            this.x = this.boardWidth / 2;
	            this.y = this.boardHeight / 2;

	            this.vy = 0;

	            while (this.vy === 0) {
	                this.vy = Math.floor(Math.random() * 10 - 5);
	            }

	            this.vx = this.direction * (this.ballSpeed - Math.abs(this.vy));
	        }
	    }, {
	        key: 'goal',
	        value: function goal(player) {
	            player.score++;
	            this.reset();
	        }
	    }, {
	        key: 'render',
	        value: function render(svg, paddle1, paddle2, bomb) {

	            this.x += this.vx;
	            this.y += this.vy;

	            this.wallCollision();
	            this.paddleCollision(paddle1, paddle2);

	            var ball = document.createElementNS(_settings.SVG_NS, 'circle');

	            ball.setAttributeNS(null, 'r', this.radius);
	            ball.setAttributeNS(null, 'cx', this.x);
	            ball.setAttributeNS(null, 'cy', this.y);
	            ball.setAttributeNS(null, 'fill', 'yellow');
	            ball.setAttributeNS(null, 'stroke', 'black');
	            ball.setAttributeNS(null, 'stroke-width', '1px');

	            if (bomb) {
	                ball.setAttributeNS(null, 'fill', 'black');
	                ball.setAttributeNS(null, 'r', '20px');
	                ball.setAttributeNS(null, 'stroke', 'red');
	                ball.setAttributeNS(null, 'stroke-width', '15px');
	                ball.setAttributeNS(null, 'stroke-opacity', '.5');
	            }

	            svg.appendChild(ball);
	            var rightGoal = this.x + this.radius >= this.boardWidth;
	            var leftGoal = this.x - this.radius <= 0;
	            if (rightGoal) {
	                this.direction = -this.direction;
	                this.goal(paddle1);

	                if (bomb) {
	                    this.pang.play();

	                    var gg = document.createElementNS(_settings.SVG_NS, 'text');

	                    gg.setAttributeNS(null, 'fill', 'yellow');
	                    gg.setAttributeNS(null, 'stroke', 'black');
	                    gg.setAttributeNS(null, 'stroke-width', '5px');
	                    gg.setAttributeNS(null, 'stroke-opacity', .25);
	                    gg.setAttributeNS(null, 'x', 40);
	                    gg.setAttributeNS(null, 'y', 120);
	                    gg.setAttributeNS(null, 'font-size', '50px');
	                    gg.setAttributeNS(null, 'kerning', '5');

	                    gg.innerHTML = 'PLAYER 2 WINS!';
	                    svg.appendChild(gg);

	                    _Game2.default.render(1);
	                }
	            } else if (leftGoal) {

	                if (bomb) {
	                    this.pang.play();

	                    var _gg = document.createElementNS(_settings.SVG_NS, 'text');

	                    _gg.setAttributeNS(null, 'fill', 'yellow');
	                    _gg.setAttributeNS(null, 'stroke', 'black');
	                    _gg.setAttributeNS(null, 'stroke-width', '5px');
	                    _gg.setAttributeNS(null, 'stroke-opacity', .25);
	                    _gg.setAttributeNS(null, 'x', 40);
	                    _gg.setAttributeNS(null, 'y', 120);
	                    _gg.setAttributeNS(null, 'font-size', '50px');
	                    _gg.setAttributeNS(null, 'kerning', '5');

	                    _gg.innerHTML = 'PLAYER 1 WINS!';
	                    svg.appendChild(_gg);

	                    _Game2.default.render(1);
	                }

	                this.direction = -this.direction;
	                this.goal(paddle2);
	            }
	        }
	    }]);

	    return Ball;
	}();

	exports.default = Ball;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _settings = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Score = function () {
	    function Score(x, y, size) {
	        _classCallCheck(this, Score);

	        this.x = x;
	        this.y = y;
	        this.size = size;
	    }

	    _createClass(Score, [{
	        key: 'render',
	        value: function render(svg, point) {

	            var score = document.createElementNS(_settings.SVG_NS, 'text');

	            score.setAttributeNS(null, 'fill', 'black');
	            score.setAttributeNS(null, 'x', this.x);
	            score.setAttributeNS(null, 'y', this.y + 10);
	            score.setAttributeNS(null, 'font-size', '40px');
	            score.setAttributeNS(null, 'kerning', '10');

	            score.innerHTML = point;

	            svg.appendChild(score);
	        }
	    }]);

	    return Score;
	}();

	exports.default = Score;

/***/ }
/******/ ]);