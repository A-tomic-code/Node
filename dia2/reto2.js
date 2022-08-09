const fs = require('fs/promises');
const Person = require('./Person.js');


let path = 'reto2.json';
let yo = new Person('daniel', 'vazquez', 28);

async function writeFile(obj, path){

    await fs.writeFile(path, JSON.stringify(obj));

}

async function readFile(path){
    const file = await fs.readFile(path);

    console.log(JSON.parse(file));
}

// **** PROGRAMA PRINCIPAL **** //

writeFile(yo, path)
readFile(path)