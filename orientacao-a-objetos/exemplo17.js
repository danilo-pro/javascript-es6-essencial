'use strict';

class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const p = new Person('Danilo Perez');

console.log(p);
// Person {}

console.log(p.getName());
// Danilo Perez

console.log(p.name);
// undefined

p.setName('Karina Venezian');
console.log(p.getName());
// Karina Venezian