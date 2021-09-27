const router = require('express').Router();
const admin = require('../middleware/admin');
const miembro = require('../middleware/miembro');
const tarea = require('../middleware/tarea');
const auth = require('./auth');
const {
    crearTarea,
    consultarTareas,
    editarTarea,
    eliminarTarea
} = require('../controllers/tareas');

router.post('/',[auth.requerido,admin,miembro],crearTarea);
router.get('/',[auth.requerido,admin,miembro,tarea],consultarTareas);
router.put('/:id',[auth.requerido,admin,miembro],editarTarea);
router.delete('/:id',[auth.requerido,admin,miembro],eliminarTarea);



module.exports = router;