const router = require('express').Router();
const auth =require('./auth');
const miembroMiddleware =require('../middleware/miembro');

const {
    crearTarea,
    consultarTareas,
    editarTarea,
    eliminarTarea
} = require('../controllers/tareas');


router.post('/',[auth.requerido,miembroMiddleware],crearTarea);
router.get('/',[auth.requerido,miembroMiddleware],consultarTareas);
router.put('/:id',[auth.requerido,miembroMiddleware],editarTarea);
router.delete('/:id',[auth.requerido,miembroMiddleware],eliminarTarea);


module.exports = router;