// var SETTINGS = {
//     api: 'http://localhost',
//     trackJsToken: '12345'
// }

function Pessoa() {
    if(!Pessoa.istance) {
        Pessoa.istance = this;
    }

    return Pessoa.istance;
}

const p = Pessoa.call({ name: 'Danilo' });

const p2 = Pessoa.call({ name: 'Gabriela' });

console.log(p);

console.log(p2);