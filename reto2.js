const fs = require('fs');
const Person = require ('./Person.js')

let path = './reto2.json';
let yo = new Person('Daniel', 'Vazquez', 27);

fs.writeFile(path, JSON.stringify(yo), { flag: 'w' }, () => {

    console.log('File writting --> success\n')


    fs.readFile(path, 'utf8', (err, data) => {
        
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }

    });


});

