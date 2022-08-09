const readline = require('readline');
const fs = require('fs/promises');
const Person = require('./Person.js');

let user = new Person('noName', 'noSurname', -1);
let path = 'reto3.json';

function question(q) {

    const query = new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(q, (answer) => {

            if (answer) {
                resolve(answer);
            } else {
                reject('Introduce algo');
            }
            rl.close();
        });
    });

    return query;
}

async function writeFile(path, obj) {

    await fs.writeFile(path, JSON.stringify(obj));

}

async function readFile(path) {

    const data = await fs.readFile(path);

    console.log(JSON.parse(data));
}

// **** PROGRAMA PRINCIPAL **** //

question('Name --> ')
.then((name) => {
    user.name = name;
    return question('Surname --> ')
})

.then((surname) => {

    user.surname = surname;
    return question('Age --> ')
})

.then((age) => {
    user.age = age;

    writeFile(path, user);
    readFile(path);
})

.catch((e) => {
    console.log(e);
})

