const express = require('express');
const router = express.Router();


//Llamado al controlador
const {getAsignaturasProfesor, getEstudiantesAsignatura} = require('../controllers/teacher.controllers');

//Esta ruta hace referencia a /api/teacher en app.js
//Este metodo permite a un profesor ver sus asignaturas
router.route('/:id')
  .get(getAsignaturasProfesor)

//Ruta para que un profesor pueda ver sus estudiantes por asignatura
router.route('/misEstudiantesAsignatura/:id_asignatura&:id_profesor')
  .get(getEstudiantesAsignatura)  
  


module.exports = router;