'use strict';

function Person(initialName) {
    var name = initialName;

    Object.defineProperty(this, 'name', {
        get: function() {
            return name;
        },
        set: function(value) {
            name = value;
        }
    });
}

const p = new Person('Danilo Perez');

console.log(p);
// Person {}

console.log(p.name);
// Danilo Perez

p.name='Juliana Dias';
console.log(p.name);
// Juliana Dias