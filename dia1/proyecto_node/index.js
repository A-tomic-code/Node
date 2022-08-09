const writeAndRead = require('./writeAndReadObject.js')
const readConsole = require('./readConsole.js');

readConsole((person) => {
    writeAndRead('./reto4.json', person);
});