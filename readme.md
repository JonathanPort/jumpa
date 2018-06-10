# Jumpa.js
#### A simple, lightweight **Page Jumping** plugin written in ES6 JS.


###### *(Any contructive criticism/feedback is welcome. Any negatives I haven't got time for. Life's too short. This is my first git repo so please help out where you can. I'm learning as I go so any positive suggestions are welcome!)*

---

## Installation

##### Via NPM and Require:

```javascript
npm install jumpa --save
```

After NPM install, simply require Jumpa into a variable:

```javascript
const Jumpa = require('jumpa');
```

Now Jumpa is loaded into your source code. It's really lightweight. Don't worry!


##### Via the normal way:
1. Simply download or Git Clone the repo
2. Navigate to the dist folder
3. Choose between the regular or minified Jumpa.js
4. Load file into your website

```html
<script src="Jumpa.js"></script>
```

In your code, you can now call on Jumpa through a pre-defined `Jumpa` variable



## Usage

#### Automatic Mode

For Automatic mode simply add `data-jumpa` and then the target `data-jumpa-target=".target-jump-to-elem"` to the element that you want to be clicked on to perform the jump. Do this for each element you wish this to happen for and call:

```javascript
Jumpa.automatic();
```

This method will take care of the rest for you. Easy peasy!


##### Of course you can pass through options...

The default options so far are:

* **Duration**: (How long the animation between jumps should last)
* **Easing**: (What kind of animation should happen)
* **Callback**: (What custom stuff you want to happen after jump is finished)

```javascript
let options = {
	duration: 2000,
	easing: 'linear',
	callback: () => {
		console.log('Custom callback function that activates once jump animation has finished.');
	}
};

Jumpa.automatic(options);
```

#### Semi-Automatic Mode

Semi automatic allows you to set individual elements to jump instead of auto selecting every elem on page via data attributes. This way you can target custom elements via JS by setting the clickable jumpa elem and target individually:

```javascript
let jumper = '.section-hero__jumper'; 	// Element you want to click on
let target = '.section-next'; 			// Elem you want to jump to

Jumpa.semiAutomatic(jumper, target, options);
```


#### Manual Mode

Manual mode cuts out the event listeners and allows you to use the Jumpa scripts how you like:

```javascript
let jumper = document.querySelector('.section-hero__jumper');
let target = '.section-next';

jumper.addEventListener('click', () => {
	Jumpa.manual(target, options);
});
```



