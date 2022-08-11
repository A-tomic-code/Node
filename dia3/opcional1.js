const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    let RESPONSE_BODY;

    if (req.query.name && req.query.name.length > 0) {
        RESPONSE_BODY = req.query.name;
    }else{
        RESPONSE_BODY = 'No hay query name'
    }
    
    const plantilla =
        `<html>
            <head>
                <style>
                *{    
                    background: #2a2a2a;
                    color: white;
                    font-size:150%;
                }
                </style>
            </head>
            
            <body>
                <p>${RESPONSE_BODY}</p>
            </body>
            
        </html>`

    res.send(plantilla);    
});


app.post('/', (req, res) => {
    console.log(req.body);

    let RESPONSE_BODY = "NO POST DATA";

    if(req.body){
        RESPONSE_BODY = {
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age
        };
    }

    const plantilla =
        `<html>
            <head>
                <style>
                *{    
                    background: #2a2a2a;
                    color: white;
                    font-size:120%;
                }
                </style>
            </head>
            
            <body>
                <p>${JSON.stringify(RESPONSE_BODY)}</p>
            </body>
            
        </html>`

    res.send(plantilla)
});

app.listen(5555, () => console.log('Servidor activo en el puerto 5555'));