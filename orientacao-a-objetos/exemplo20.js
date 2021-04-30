'use strict';

function Person() {}

Person.walk = function() {
    console.log('Walking... dead!');
}

console.log(Person.walk());
// Walking... dead!
// undefined