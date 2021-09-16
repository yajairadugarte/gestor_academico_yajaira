//conexión a mysql
const mysqlConnection = require('../databases/driverMySql');



//Controladors para acciones de rol administrador en mysql
const adminCtrl = {};

//Este método selecciona solo un administrador de la base de datos
adminCtrl.getAdmin = async (req, res) => {  //obtenemos error, filas y campos de la tabla
  const {id} = req.params;
  await mysqlConnection.query(
    'SELECT * FROM persona INNER JOIN administrador ON '+
    'persona.DocIdent = administrador.DocIdent WHERE administrador.DocIdent = ?',
      [id], (err, rows, fields)=> {
        if(!err){
            res.json(rows[0]);//retorna un arreglo. 
        }
        else{
          console.log("=====> " + err);
        };
    });
};


//Este metodo selecciona todos los administradores de la base de datos
adminCtrl.getAdmins = async (req, res) => {  //obtenemos error, filas y campos de la tabla
  mysqlConnection.query(
    'SELECT * FROM persona INNER JOIN administrador ON persona.DocIdent = administrador.DocIdent'
    , (err, rows, fields)=> {
    if(!err){
      res.json(rows);
    }
    else{
      console.log("=====> " + err);
    };
  });
};



//Este metodo Crea una persona en la tabla persona
adminCtrl.createPersona = async (req, res) => {  
  const {DocIdent, nombre, apellido, genero, fechaNac, nacionalidad, 
      direccion, celular, correoElectronico } = req.body;
    await mysqlConnection.query(
    'INSERT INTO persona values (?, ?, ?, ?, ?, ?, ?, ?, ?) ',
    [DocIdent, nombre, apellido, genero, fechaNac, nacionalidad, 
      direccion, celular, correoElectronico]
    , (err, rows, fields) => {
    if(!err)() =>{  
      res.json({message: 200});
    }
    else{
      console.log("=====> Error profesor en tabla profesor" + err);
    };
  });
  
};


//Este metodo Crea un profesor en la tabla profesor
adminCtrl.createProfesor = async (req, res) => {  
  const {DocIdent, id_admin, profesion} = req.body;
  await mysqlConnection.query(
    'INSERT INTO profesor values (?, ?, ?) ',
       [DocIdent, id_admin, profesion]
       , (err, rows, fields) => {
       if(!err){
         res.json({message: "saved profesor"});
       }
       else{
         console.log("=====> Error en crear profesor" + err);
       };
    
      }
  );     
};

//Este metodo Crea un estudianteen la tabla estudiante
adminCtrl.createEstudiante = async (req, res) => {  
  const {DocIdent} = req.body;
  await mysqlConnection.query(
    'INSERT INTO estudiante values (?) ',
       [DocIdent]
       , (err, rows, fields) => {
       if(!err){
         res.json({message: 200});
       }
       else{
         console.log("=====> Error en crear estudiante" + err);
       };
    }
  );     
};


//Este metodo Crea un administrador en la tabla administrador
adminCtrl.createAdministrador = async (req, res) => {  
  const {DocIdent, permissions_delete} = req.body;
  await mysqlConnection.query(
    'INSERT INTO estudiante values (?, ?) ',
       [DocIdent, permissions_delete]
       , (err, rows, fields) => {
       if(!err){
         res.json({message: "saved Estudiante"});
       }
       else{
         console.log("=====> Error en crear estudiante" + err);
       };
    }
  );     
};


//Este metodo Crea un programa en la tabla programa
adminCtrl.createPrograma = async (req, res) => {  
  const {id_programa, name_programa} = req.body;
  await mysqlConnection.query(
    'INSERT INTO programa values (?, ?) ',
       [id_programa, name_programa]
       , (err, rows, fields) => {
       if(!err){
         res.json({message: "saved programa"});
       }
       else{
         console.log("=====> Error en crear programa" + err);
       };
    }
  );     
};


//Este metodo Crea una asignatura en la tabla asignatura
adminCtrl.createAsignatura = async (req, res) => {  
  const {id_asignatura, name_asignatura, id_programa} = req.body;
  await mysqlConnection.query(
    'INSERT INTO programa values (?, ?) ',
       [id_asignatura, name_asignatura, id_programa]
       , (err, rows, fields) => {
       if(!err){
         res.json({message: "saved Asignatura"});
       }
       else{
         console.log("=====> Error en crear Asignatura" + err);
       };
    }
  );     
};


//Este metodo edita una persona en la tabla personaa
adminCtrl.editPersona = async (req, res) => {
  const{id} = req.params  
  const {nombre, apellido, genero, fechaNac, nacionalidad, 
    direccion, celular, correoElectronico } = req.body;
  await mysqlConnection.query(
    'UPDATE persona SET nombre = ?, apellido = ?, genero = ?, fechaNac = ?, nacionalidad = ?, '+
    'direccion = ?, celular = ?, correoElectronico = ?  WHERE Docident = ?;',
       [nombre, apellido, genero, fechaNac, nacionalidad, 
        direccion, celular, correoElectronico, id]
       , (err, rows, fields) => {
       if(!err){
         res.json({message:200});
       }
       else{
         console.log("=====> Error en editar persona" + err);
       };
    }
  );     
};

//Este metodo edita un programa en  la tabla programas
adminCtrl.editPrograma = async (req, res) => {
  const{id} = req.params  
  const {nombre_programa} = req.body;
  await mysqlConnection.query(
    'UPDATE programas SET nombre_programa = ?  WHERE id_programa = ?;',
       [nombre_programa, id]
       , (err, rows, fields) => {
       if(!err){
         res.json({message:200});
       }
       else{
         console.log("=====> Error en editar programa" + err);
       };
    }
  );     
};

//Este metodo editar una asignatura en la tabla asignaturas
adminCtrl.editAsignatura = async (req, res) => {
  const{id} = req.params  
  const {nombre_asignatura} = req.body;
  await mysqlConnection.query(
    'UPDATE asignaturas SET nombre_asignatura = ?  WHERE id_asignatura = ?;',
       [nombre_asignatura, id]
       , (err, rows, fields) => {
       if(!err){
         res.json({message:200});
       }
       else{
         console.log("=====> Error en editar asignatura" + err);
       };
    }
  );     
};


module.exports = adminCtrl;