function FakeUser(customProperties) {
    return {
        name: 'Danilo',
        lastName: 'Perez',
        ...customProperties
    }
}

// Factory
const user = FakeUser({name: 'Custon Name', age: 23});

console.log(user);