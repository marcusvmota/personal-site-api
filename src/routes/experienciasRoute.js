const express = require('express');

const expeienciasController = require('../controllers/experienciasController');

const router = express.Router();


router.get('/', expeienciasController.getAllExperiencias); 

router.get('/:id', expeienciasController.getExperienciaById);

router.post('/', expeienciasController.createExperiencia);

router.put('/:id', expeienciasController.updateExperiencia);

router.delete('/:id', expeienciasController.deleteExperiencia);
   
module.exports = router


