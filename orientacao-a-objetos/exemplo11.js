'use strict';

function Animal(qtdPatas) {
    this.qtdPatas = qtdPatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);
// Cachorro { qtdPatas: 4, morde: false }