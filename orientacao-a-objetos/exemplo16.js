'use strict';

function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person('Danilo Perez');

console.log(p);
// Person {
//     getName: [Function (anonymous)],
//     setName: [Function (anonymous)]
// }

console.log(p.getName());
// Danilo Perez

console.log(p.name);
// undefined

p.setName('Karina');
console.log(p.getName());
// Karina