const http = require('http');

const server = http.createServer((req, res) => {
    let returnValue = { 
        ok: true,
        message: 'vacio' 
    };

    if(req.url == '/'){
        returnValue.message = 'Recibido !'
    }else if (req.url == '/bye'){
        returnValue.message = 'Adios !'
    }

    const RESPONSE_BODY = JSON.stringify(returnValue);

    
    //////////////////////////////////////////////////////////////
    
    console.log('Solicitud recibida');
    console.log('------------------------------------');
    console.log('URL: ' + req.url);
    console.log('Verbo HTTP: ' + req.method);
    console.log('User-Agent: ' + req.headers['user-agent']);
    console.log('Content-Type: ' + req.headers['content-type']);
    console.log('Content-Length: ' + req.headers['content-length']);
    console.log('------------------------------------\n');
    
    res.writeHead(200, {'content-type': 'application/json'});
    res.write(RESPONSE_BODY);
    res.end();

});

server.listen(7744);