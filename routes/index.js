
// importamos las dependencias necesarias
var router = require('express').Router();

// definimos el comportamiento en la raíz del endpoint
router.get('/', (req, res)=>{
  res.send('Bienvenido a To-Do');
});

router.use('/',require('./login'));
router.use('/usuarios',require('./usuarios'));
router.use('/tareas', require('./tareas'));
router.use('/proyectos', require('./proyectos'));
router.use('/contextos', require('./contextos'));
router.use('/estatus', require('./estatus'));

// exportamos nuestro nuevo router
module.exports = router;

