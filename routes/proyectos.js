const router = require('express').Router();
const auth =require('./auth');
const miembroMiddleware =require('../middleware/miembro');

const {
    crearProyecto,
    consultarProyectos,
    editarProyecto,
    eliminarProyecto,
} = require('../controllers/proyectos');

router.post('/',[auth.requerido,miembroMiddleware],crearProyecto);
router.get('/',[auth.requerido,miembroMiddleware],consultarProyectos);
router.put('/:id',[auth.requerido,miembroMiddleware],editarProyecto);
router.delete('/:id',[auth.requerido,miembroMiddleware],eliminarProyecto);



module.exports = router;
