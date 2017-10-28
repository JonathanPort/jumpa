var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
			}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
				var n = t[o][1][e];return s(n ? n : e);
			}, l, l.exports, e, t, n, r);
		}return n[o].exports;
	}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
		s(r[o]);
	}return s;
})({ 1: [function (require, module, exports) {
		var Jumpa = function () {
			function Jumpa() {
				_classCallCheck(this, Jumpa);

				this.moduleName = 'Jumpa.js';

				this.defaults = {
					duration: 800,
					easing: 'easeInOutQuint',
					callback: null
				};

				this.supportedEasings = ['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint'];
			}

			/**
    * Public method to select all DOM nodes that have appropriate data attributes
    * and add event listeners to them to trigger jump on click.
    *
    * @param  {[object]} options [Object of options]
    */


			_createClass(Jumpa, [{
				key: "automatic",
				value: function automatic() {
					var _this = this;

					var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


					var jumpers = document.querySelectorAll('[data-jumpa]');

					if (jumpers.length > 0) {

						if (options) {
							options = this._setOptions(options);
						} else {
							options = this.defaults;
						}

						jumpers.forEach(function (jumper) {

							jumper.addEventListener('click', function (e) {

								var target = jumper.getAttribute('data-jumpa-target');

								if (target) {

									var targetElement = document.querySelector(target);

									if (targetElement) {

										_this._jumpToTarget(targetElement, options);
									} else {
										console.warn(_this.moduleName + ': Target element not found');
										return;
									}
								} else {
									console.warn(_this.moduleName + ': Target not set');
									return;
								}
							});
						});
					} else {
						console.trace(this.moduleName + ': No jumpa\'s found in the document.');
					}
				}

				/**
     * Public method to jump individually.
     *
     * @param  {[string]} jumper        [Element that will trigger jump and have event listener]
     * @param  {[string]} targetElement [Element to jumo to]
     * @param  {[object]} options       [Object of options]
     */

			}, {
				key: "semiAutomatic",
				value: function semiAutomatic(jumper, targetElement) {
					var _this2 = this;

					var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


					jumper = document.querySelector(jumper);

					if (jumper) {

						targetElement = document.querySelector(targetElement);

						if (targetElement) {

							if (options) {
								options = this._setOptions(options);
							} else {
								options = this.defaults;
							}

							jumper.addEventListener('click', function (e) {

								_this2._jumpToTarget(targetElement, options);
							});
						} else {
							console.error(this.moduleName + ': Target element not found.');
						}
					} else {

						console.error(this.moduleName + ': jumpa element not found.');
					}
				}

				/**
     * Public method to jump individually without event listener.
     *
     * @param  {[string]} jumper        [Element that will trigger jump and have event listener]
     * @param  {[string]} targetElement [Element to jumo to]
     * @param  {[object]} options       [Object of options]
     */

			}, {
				key: "manual",
				value: function manual(targetElement) {
					var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


					targetElement = document.querySelector(targetElement);

					if (targetElement) {

						if (options) {
							options = this._setOptions(options);
						} else {
							options = this.defaults;
						}

						this._jumpToTarget(targetElement, options);
					} else {
						console.error(this.moduleName + ': Target element not found.');
					}
				}
			}, {
				key: "_setOptions",
				value: function _setOptions(options) {

					if ((typeof options === "undefined" ? "undefined" : _typeof(options)) == 'object') {

						// Check and Set duration option
						if (!options.duration) {
							options.duration = this.defaults.duration;
						} else {

							if (typeof options.duration != 'number') {
								console.warn(this.moduleName + ': The Duration option needs to be an integer. Reverting to default option.');
								options.duration = this.defaults.duration;
							}
						}

						// Check and set easing option
						if (!options.easing) {
							options.easing = this.defaults.easing;
						} else {

							if (typeof options.easing != 'string') {
								console.warn(this.moduleName + ': The Easing option needs to be a string. Reverting to default option.');
								options.easing = this.defaults.easing;
							} else {

								var supported = false;

								this.supportedEasings.forEach(function (easing) {

									if (easing == options.easing) {
										supported = true;
									}
								});

								if (!supported) {
									console.warn(this.moduleName + ': This Easing option isn\'t supported by this plugin, reverting to defaults. You can see a list of supported easings at https://github.com/JonathanPort. If you think your easing code is sound and you would like it added, Submit a request to my Github and i\'ll add it in.');
									options.easing = this.defaults.easing;
								}
							}
						}

						// Check and set callback function option
						if (!options.callback) {
							options.callback = this.defaults.callback;
						} else {

							if (typeof options.callback != 'function') {
								console.warn(this.moduleName + ': The Callback option needs to be a function. Reverting to default option.');
								options.callback = this.defaults.callback;
							}
						}
					} else {
						console.warn(this.moduleName + ': Options passed not an object. Reverting to defaults.');
						options = this.defaults;
					}

					return options;
				}
			}, {
				key: "_getEasing",
				value: function _getEasing(easing, time) {

					var easings = {
						linear: function linear(t) {
							return t;
						},
						easeInQuad: function easeInQuad(t) {
							return t * t;
						},
						easeOutQuad: function easeOutQuad(t) {
							return t * (2 - t);
						},
						easeInOutQuad: function easeInOutQuad(t) {
							return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
						},
						easeInCubic: function easeInCubic(t) {
							return t * t * t;
						},
						easeOutCubic: function easeOutCubic(t) {
							return --t * t * t + 1;
						},
						easeInOutCubic: function easeInOutCubic(t) {
							return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
						},
						easeInQuart: function easeInQuart(t) {
							return t * t * t * t;
						},
						easeOutQuart: function easeOutQuart(t) {
							return 1 - --t * t * t * t;
						},
						easeInOutQuart: function easeInOutQuart(t) {
							return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
						},
						easeInQuint: function easeInQuint(t) {
							return t * t * t * t * t;
						},
						easeOutQuint: function easeOutQuint(t) {
							return 1 + --t * t * t * t * t;
						},
						easeInOutQuint: function easeInOutQuint(t) {
							return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
						}
					};

					return easings[easing](time);
				}
			}, {
				key: "_jumpToTarget",
				value: function _jumpToTarget(targetElement, options) {

					var duration = options.duration,
					    easing = options.easing,
					    callback = options.callback;

					var start = window.pageYOffset,
					    startTime = 'now' in window.performance ? performance.now() : new Date().getTime(),
					    documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
					    windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight,
					    targetElementOffset = typeof targetElement === 'number' ? targetElement : targetElement.offsetTop,
					    targetElementOffsetToScroll = Math.round(documentHeight - targetElementOffset < windowHeight ? documentHeight - windowHeight : targetElementOffset);

					if ('requestAnimationFrame' in window === false) {
						window.scroll(0, targetElementOffsetToScroll);

						if (callback) {
							callback();
						}

						return;
					}

					var thisToPass = this;

					function scroll() {
						var now = 'now' in window.performance ? performance.now() : new Date().getTime(),
						    time = Math.min(1, (now - startTime) / duration),
						    timeFunction = thisToPass._getEasing(easing, time);

						window.scroll(0, Math.ceil(timeFunction * (targetElementOffsetToScroll - start) + start));

						if (window.pageYOffset === targetElementOffsetToScroll) {

							if (callback) {
								callback();
							}
							return;
						}

						requestAnimationFrame(scroll);
					}

					scroll();
				}
			}]);

			return Jumpa;
		}();

		module.exports = new Jumpa();
	}, {}], 2: [function (require, module, exports) {
		window.Jumpa = require('../components/Jumpa');
	}, { "../components/Jumpa": 1 }] }, {}, [2]);