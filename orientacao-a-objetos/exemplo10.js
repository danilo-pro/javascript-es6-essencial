'use strict';

function Animal() {
    this.qtdPatas = 4;
}

const cachorro = new Animal();

console.log(cachorro instanceof Animal);
// true

console.log(cachorro instanceof Function);
// false