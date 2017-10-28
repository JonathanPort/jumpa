class Jumpa {

	constructor() {

		this.moduleName = 'Jumpa.js';

		this.defaults = {
			duration: 800,
			easing: 'easeInOutQuint',
			callback: null
		};

		this.supportedEasings = [
			'linear',
			'easeInQuad',
			'easeOutQuad',
			'easeInOutQuad',
			'easeInCubic',
			'easeOutCubic',
			'easeInOutCubic',
			'easeInQuart',
			'easeOutQuart',
			'easeInOutQuart',
			'easeInQuint',
			'easeOutQuint',
			'easeInOutQuint'
		];

	}



	/**
	 * Public method to select all DOM nodes that have appropriate data attributes
	 * and add event listeners to them to trigger jump on click.
	 *
	 * @param  {[object]} options [Object of options]
	 */
	automatic(options = null) {

		let jumpers = document.querySelectorAll('[data-jumpa]');

		if (jumpers.length > 0) {

			if (options) {
				options = this._setOptions(options);
			} else {
				options = this.defaults;
			}

			jumpers.forEach((jumper) => {

				jumper.addEventListener('click', (e) => {

					let target = jumper.getAttribute('data-jumpa-target');

					if (target) {

						let targetElement = document.querySelector(target);

						if (targetElement) {

							this._jumpToTarget(targetElement, options);

						} else {
							console.warn(this.moduleName + ': Target element not found');
							return;
						}

					} else {
						console.warn(this.moduleName + ': Target not set');
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
	semiAutomatic(jumper, targetElement, options = null) {

		jumper = document.querySelector(jumper);

		if (jumper) {

			targetElement = document.querySelector(targetElement);

			if (targetElement) {

				if (options) {
					options = this._setOptions(options);
				} else {
					options = this.defaults;
				}

				jumper.addEventListener('click', (e) => {

					this._jumpToTarget(targetElement, options);

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
	manual(targetElement, options = null) {

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

	_setOptions(options) {

		if (typeof options == 'object') {

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

					let supported = false;

					this.supportedEasings.forEach((easing) => {

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

	_getEasing(easing, time) {

		const easings = {
			linear(t) {
				return t;
			},
			easeInQuad(t) {
				return t * t;
			},
			easeOutQuad(t) {
				return t * (2 - t);
			},
			easeInOutQuad(t) {
				return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
			},
			easeInCubic(t) {
				return t * t * t;
			},
			easeOutCubic(t) {
				return (--t) * t * t + 1;
			},
			easeInOutCubic(t) {
				return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
			},
			easeInQuart(t) {
				return t * t * t * t;
			},
			easeOutQuart(t) {
				return 1 - (--t) * t * t * t;
			},
			easeInOutQuart(t) {
				return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
			},
			easeInQuint(t) {
				return t * t * t * t * t;
			},
			easeOutQuint(t) {
				return 1 + (--t) * t * t * t * t;
			},
			easeInOutQuint(t) {
				return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
			}
		};

		return easings[easing](time);

	}

	_jumpToTarget(targetElement, options) {

		let duration = options.duration,
			easing = options.easing,
			callback = options.callback;

		let start = window.pageYOffset,
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

		let thisToPass = this;

		function scroll() {
			let now = 'now' in window.performance ? performance.now() : new Date().getTime(),
				time = Math.min(1, ((now - startTime) / duration)),
				timeFunction = thisToPass._getEasing(easing, time);

			window.scroll(0, Math.ceil((timeFunction * (targetElementOffsetToScroll - start)) + start));

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

}

module.exports = new Jumpa();