const professionalCtrl = require("../controller/professional.controller");
const Router = require("express");
const router = Router();

/// endpoints aqui

router.get("/professional", professionalCtrl.getProfesional);

router.post("/professional", professionalCtrl.postProfesional);

router.put("/professional", professionalCtrl.putProfesional);

router.delete("/professional", professionalCtrl.deleteProfesional);

module.exports =  router;