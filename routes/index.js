
// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('Bienvenido a To-Do');
});


router.use('/usuarios',require('./usuarios'));
router.use('/tareas', require('./tareas'));
router.use('/proyectos', require('./proyectos'));

// exportamos nuestro nuevo router
module.exports = router;

