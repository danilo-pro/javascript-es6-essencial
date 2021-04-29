const name = 'Danilo';

// Não podemos alterar o valor
// name = 'Danillo';

const user = {
    name: 'Danilo'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Danillo';

// Não podemos fazer o objeto "apontar" para outro lugar
// user = {
//     name: 'Danillo'
// };

const persons = ['Danilo', 'Adriele', 'Gabriela'];

// Podemos adicionar novos itens
persons.push('Karina');
// ['Danilo', 'Adriele', 'Gabriela', 'Karina']

// Podemos remover algum item
persons.shift();
// ['Adriele', 'Gabriela', 'Karina']

// Podemos alterar diretamente
persons[1] = 'Sabrina';
// ['Adriele', 'Sabrina', 'Karina']

console.log('\nArray após as alterações', persons);