const Professional = require("../models/Professional");

let tmp_professional = new Professional('Daniel', 27, 'Male', 70, 174, 'Brown', 'Mixed', false, 'esp', 0, 'back-end developer');

function getProfesional(req, res) {
    let response;

    if (!tmp_professional) {
        response = { error: true, code: 404, message: "Empty response" };
    } else {
        response = tmp_professional;
    }

    res.send(response)
}

function postProfesional(req, res) {
    let response;

    if(req.body){

        printBody(req)
        assign(req)

        response = {
            error: false,
            code: 201,
            message: 'Object created'
        };

    } else {

        response = {
            error: true,
            code: 400,
            message: 'No data received'
        };
    }

    res.send(response);
}

function putProfesional(req, res) {
    let response;

    printBody(req)
    assign(req);

    response = {
        error: false,
        code: 202,
        message: 'Object changed'
    };

    res.send(response)

}

function deleteProfesional(req, res) {
    let response;

    printBody(req)

    tmp_professional= null;

    response = {
        error: false,
        code: 202,
        message: 'Object deleted'
    };

    res.send(response)
}

module.exports = {
  getProfesional,
  postProfesional,
  putProfesional,
  deleteProfesional,
};


function printBody(req){
    console.log('Peticion recibida');
    console.log('-------------------');
    console.log(req.body);
    console.log('-------------------\n');
}

function assign(req){
    tmp_professional.name = req.body.name ? req.body.name : tmp_professional.name;
    tmp_professional.age = req.body.age ? req.body.age : tmp_professional.age;
    tmp_professional.genre = req.body.genre ? req.body.genre : tmp_professional.genre;
    tmp_professional.weight = req.body.weight ? req.body.weight : tmp_professional.weight;
    tmp_professional.height = req.body.height ? req.body.height : tmp_professional.height;
    tmp_professional.eyeColor = req.body.eyeColor ? req.body.eyeColor : tmp_professional.eyeColor;
    tmp_professional.race = req.body.race ? req.body.race : tmp_professional.race;
    tmp_professional.isRetired = req.body.isRetired ? req.body.isRetired : tmp_professional.isRetired;
    tmp_professional.nationality = req.body.nationality ? req.body.nationality : tmp_professional.nationality;
    tmp_professional.oscarsNumber = req.body.oscarsNumber ? req.body.oscarsNumber : tmp_professional.oscarsNumber;
    tmp_professional.profession = req.body.profession ? req.body.profession : tmp_professional.profession;
}