const faker = require('faker');

faker.locale = 'pt_BR';

const people = [];

    for (let i = 0; i < 1; i++) {
        const person = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            gender: faker.name.gender(),
            birthDay: faker.date.past(),
            email: faker.internet.email(),
            userName: faker.internet.userName(),
            password: faker.internet.password(),
        };
        people.push(person)
    };

console.log(people);