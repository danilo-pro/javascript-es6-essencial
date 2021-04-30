'use strict';

function Animal() {}

Animal.prototype.qtdPatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdPatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log('Au au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);