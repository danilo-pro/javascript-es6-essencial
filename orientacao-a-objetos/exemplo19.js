'use strict';

class Person {
    #name = '';

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const p = new Person('Danilo Perez');

console.log(p);
// Person {}

console.log(p.name);
// undefined

p.name='Gabriela Silio';
console.log(p.name);
// Gabriela Silio