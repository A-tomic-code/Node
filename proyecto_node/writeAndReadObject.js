const fs = require('fs');

function writeAndRead(path, obj) {
    fs.writeFile(path, JSON.stringify(obj), {flag: 'w'}, () => {

        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });

    });
}

module.exports = writeAndRead;