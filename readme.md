# Jumpa.js

A simple page jumping plugin written in ES6 JS. Compiles to simple & lightweight pure JS to be used easily by anyone by including the file from the dist folder.



###### Made by Jonathan Port. Any contructive criticism/feedback is welcome. Any negatives I haven't got time for. Life's too short.

### This is my first git repo so please help out where you can. I'm learning as I go so any positive suggestions are welcome :)

---

## Installation

Install through NPM: (Or manually via copying file through dist folder..)

`npm install jumpa --save`

After NPM install, simply require Jumpa into a variable:

`const Jumpa = require('jumpa');`

Now Jumpa is loaded into your source code. It's really lightweight. Don't worry!

---

### Automatic Mode

For Automatic mode simply add `data-jumpy` and then the tsrget `data-jumpy-target=".target-jump-to-elem"` to the element that you want to be clicked on to jump. Do this for each element you wish this to happen for and:

`Jumpa.automatic()`

will take care of the rest.


#### Ofcource you can pass through options...

The default options so far are:

..* Duration: (How long the animation between jumps should last)<br>
..* Easing: (What kind of animation should happen)<br>
..* Callback: (What custom stuff you want to happen after jump is finished)

`let options = {
	duration: 2000,
	easing: 'linear',
	callback: () => {
		console.log('Custom callback function that activates once jump animation has finished.');
	}
};`

`Jumpa.automatic(options);`

### Semi-Automatic Mode

Semi automatic allows you to set individual elements to jump instead of auto selecting every elem on page via dat attributes. This way you can target custem elements via JS by setting the clickable jumpa elem and target individually:

`let jumper = '.section-hero__jumper',
	 targetElement = '.section-next';`

`Jumpa.semiAutomatic(jumper, targetElement, options);`


### Manual Mode

Manual mode cuts out the event listeners and allows you to use the Jumpa scripts how you like:

`let jumper = document.querySelector('.section-hero__jumper'),
	 targetElement = '.section-next';`

`jumper.addEventListener('click', () => {
	Jumpa.manual(targetElement, options);
});
`



