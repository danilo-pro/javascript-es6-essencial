let user = {
    name: 'Danilo'
};

// ALterando a propriedade de um objeto
user.name = 'Danillo';
user['name'] = 'Danilo';
console.log(user);

const prop = 'name';
user[prop] = 'Danillo';
console.log(user);

// Criando uma propriedade
user.lastName = 'Perez';
console.log(user);

// Deletando uma propriedade
delete user.name;

console.log(user);