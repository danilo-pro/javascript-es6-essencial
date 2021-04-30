'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split);
// true

console.log(myText.constructor === String);
// true

// __proto__ -> prototype -> constructor

// const myText = 'Hello prototype!';

// myText.constructor -> String
// myText.__proto__ -> String.prototype