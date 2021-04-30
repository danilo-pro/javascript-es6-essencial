'use strict';

function Animal() {
    this.qtdPatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.__proto__ === Animal.prototype);
// true