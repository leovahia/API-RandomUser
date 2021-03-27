const faker = require('faker');
const moment = require('moment');

faker.locale = 'pt_BR';

const people = [];

    for (let i = 0; i < 10; i++) {

        const person = {

            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            gender: faker.name.gender(),
            birthDay: moment(faker.date.past('01','2003')).format('DD/MM/YYYY'),
            email: faker.internet.email(),
            userName: faker.internet.userName(),
            password: faker.internet.password(),
        };
        people.push(person)
    };

module.exports = people;
