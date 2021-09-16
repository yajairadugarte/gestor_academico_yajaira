const express = require('express');
const router = express.Router();

//llamnado controlador
const {getAdmins, getAdmin, createProfesor, createPersona, createEstudiante, createPrograma, 
    createAdministrador, createAsignatura, editPersona, editAsignatura, editPrograma} = require('../controllers/admin.controllers');

//Rutas para obtener datos (Tipo GET)
router.route('/')
    .get(getAdmins); 

router.route('/:id')
    .get(getAdmin); 

//Rutas para crear datos (Insertar en tablas) (Tipo POST)
router.route('/crearPersona')
    .post(createPersona)

router.route('/crearProfesor')
    .post(createProfesor)

router.route('/crearEstudiante')
    .post(createEstudiante)

router.route('/crearAdministrador')
    .post(createAdministrador)

router.route('/crearPrograma')
    .post(createPrograma)

router.route('/crearAsignatura')
    .post(createAsignatura)


//Rutas para editar datos (Tipo PUT)    
router.route('/editPersona/:id')
    .put(editPersona)


router.route('/editPrograma/:id')
    .put(editPrograma)


router.route('/editAsignatura/:id')
    .put(editAsignatura)


module.exports = router;