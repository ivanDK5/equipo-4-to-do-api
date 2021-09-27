const router = require('express').Router();
const admin = require('../middleware/admin');
const miembro = require('../middleware/miembro');
const proyecto = require('../middleware/proyecto');
const auth = require('./auth');
const {
    crearProyecto,
    consultarProyectos,
    editarProyecto,
    eliminarProyecto,
  
} = require('../controllers/proyectos');



router.post('/',[auth.requerido,admin],crearProyecto);
router.get('/',[auth.requerido,admin,miembro,proyecto],consultarProyectos);
router.put('/:id',[auth.requerido,admin],editarProyecto);
router.delete('/:id',[auth.requerido,admin],eliminarProyecto);


module.exports = router;
