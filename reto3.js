const fs = require('fs');
const readline = require ('readline');
const Person = require('./Person.js');

let path = './reto3.json';

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let person;

rl.question('Name: ', (name) => {
    
    rl.question('Surname: ', (surname) => {
        
        rl.question('Age: ', (age) => {
            
            rl.close(); 

            //Aqui ya tenemos tenemos todos los datos, entonces escribo

            person = new Person(name, surname, age);
            
            fs.writeFile(path, JSON.stringify(person), { flag: 'w' }, () => {

                //Leo siemre despues de escribir (en la callback de writeFile)

                fs.readFile(path, 'utf8', (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            });
        });
    });
});
