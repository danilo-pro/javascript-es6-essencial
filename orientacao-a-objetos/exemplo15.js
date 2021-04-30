'use strict';

class Animal {
    constructor() {
        this.qtdPatas = 0;
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdPatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log('Au au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);