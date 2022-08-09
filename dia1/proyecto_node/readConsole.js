const readline = require('readline');
const Person = require('../Person.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readConsole(callBack) {
    rl.question('Name: ', (name) => {
        rl.question('Surname: ', (surname) => {
            rl.question('Age: ', (age) => {
                rl.close()

                let person = new Person(name, surname, age)
                callBack(person);

            });
        });
    });
}

module.exports = readConsole;