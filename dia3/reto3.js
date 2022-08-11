const express = require('express');
const app = express();

function printReq(req){
    console.log('Solicitud recibida')
    console.log('---------------------------------------------')
    console.log('URL: ' + req.hostname)
    console.log('Verbo HTTP: ' + req.method)
    console.log('User-agent: ' + req.header('user-agent'))
    console.log('---------------------------------------------\n')
}

let response = {
    ok: true,
    message: 'Vacio'
}

app.get('/', (req, res) => {
    response.message = 'Recibido !'

    
    res.statusCode = 200;
    res.contentType = 'application/json'
    res.send(JSON.stringify(response));

    printReq(req)

});

app.get('/bye', (req, res) => {
    response.message = 'Adios !'

    
    res.statusCode = 200;
    res.contentType = 'application/json'
    res.send(JSON.stringify(response));

    printReq(req)

});

app.listen(7745)