const Professional = require("../models/Professional");

const data_center = [];

let tmp;

function getProfessionals(req, res) {
    let query = req.query
    let response;


    if(data_center.length > 0){

        if(query.id){

            response = {
                error: false,
                code: 200,
                message: 'Data collected xx',
                data: data_center[query.id]
            };

        }else{

            response = {
                error: false,
                code: 200,
                message: 'Data collected yy',
                data: data_center
            };

        }
        
    }else {
        response = {
            error: true,
            code: 404,
            message: 'Empty response',
            data: data_center
        };
    }

    res.send(response);
}

function postProfessionals(req, res) {
    let response;

    if (req.body) {
        let {name, age, genre, weight,height ,eyeColor, race, isRetired,
             nationality, oscarsNumber, profession} = req.body;

        tmp = new Professional(name, age, genre, weight, height, eyeColor,
             race, isRetired, nationality, oscarsNumber, profession);

        data_center.push(tmp); //lo guardo

        response = {
            error:false,
            code: 200,
            message: 'Object created'
        }
    } else {
        response = {
            error:true,
            code: 400,
            message: 'Bad request'
        }
    }

    res.send(response);
}

function putProfessionals(req, res) {
    let response;

    if (req.body) {
        let {id, name, age, genre, weight,height ,eyeColor, race, isRetired,
             nationality, oscarsNumber, profession} = req.body;

        tmp = new Professional(name, age, genre, weight, height, eyeColor,
             race, isRetired, nationality, oscarsNumber, profession);

        data_center[id] = tmp;

        response = {
            error:false,
            code: 200,
            message: 'Object modified'
        }
    } else {
        response = {
            error:true,
            code: 200,
            message: 'Object modified'
        }
    }

    res.send(response);

}

function deleteProfessionals(req, res) {
    let response;

    console.log('...............');
    console.log(req.body);

    if(req.body && req.body.id){
        data_center.splice(parseInt(req.body.id), 1);

        response = {
            error:false,
            code: 200,
            message: 'Object deleted'
        }
    } else {
        response = {
            error:true,
            code: 400,
            message: 'Bad request'
        }
    }

    res.send(response);

}

module.exports = {
  getProfessionals,
  postProfessionals,
  putProfessionals,
  deleteProfessionals,
};
