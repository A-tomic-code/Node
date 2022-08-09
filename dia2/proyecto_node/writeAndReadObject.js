const fs = require('fs/promises');

async function writeAndRead(path, obj){
    await fs.writeFile(path, JSON.stringify(obj));
    
    let data = await fs.readFile(path);
    console.log(JSON.parse(data));
}

module.exports = writeAndRead;