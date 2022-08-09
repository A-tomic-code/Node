const Person = require('../Person.js');
const writeAndRead = require('./writeAndReadObject.js');
const readConsole = require('./readConsole.js');
const question = require('./readConsole.js');

let path = './reto4.json';
let user = new Person('noName', 'noSurname', -1);

question('Username >> ')
.then((username) => {
    user.name = username;
    return question('Surname >> ')
})
.then((surname) => {
    user.surname = surname;
    return question('Age >> ')
})
.then((age) => {
    user.age = age;

    writeAndRead(path, user);
})
.catch((e) => {
    console.log(e);
})