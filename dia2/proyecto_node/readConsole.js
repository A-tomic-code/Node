const readline = require('readline');

function question(q){
    
    const query = new Promise((resolve, reject) => {
        
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(q, (answer) => {

            if(answer){
                resolve(answer);
            }else{
                reject('Has introducido un dato vacío')
            }

            rl.close();
        });
    });

    return query
}

module.exports = question;