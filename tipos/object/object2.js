const user = {
    name: 'Danilo',
    lastName: 'Perez'
};

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valor das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Danilo Perez'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos:', Object.assign({}, user, {age: 23}));

// Previne todas as alterações em um objeto
const newObjt = { foo: 'bar' };
Object.freeze(newObjt);

newObjt.foo = 'changes';
delete newObjt.foo;
newObjt.bar = 'foo';

console.log('\nVariável newObjt após alterações', newObjt);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Danilo' };
Object.seal(person);

person.name = 'Danilo Perez';
delete person.name;
person.age = 23;

console.log('\nVariável person após alterações:', person);