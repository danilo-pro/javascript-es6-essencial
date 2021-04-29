var test = 'Exemplo';

(() => {
    console.log(`Valor dentro da função: "${test}"`);

    if(true) {
        var test = 'Exemplo';
        console.log(`Valor dentro do if: "${test}"`);
    }

    console.log(`Valor após a execução do if: "${test}"`);
})();

// var test = 'Exemplo';

// (() => {
//     var test;
//     console.log(`Valor dentro da função: "${test}"`);

//     if(true) {
//         test = 'Exemplo';
//         console.log(`Valor dentro do if: "${test}"`);
//     }

//     console.log(`Valor após a execução do if: "${test}"`);
// })();