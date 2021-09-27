const router = require('express').Router();
const adminMiddleware =require('../middleware/miembro');

const {
    crearUsuarioProyecto,
    consultarUsuariosProyectos,
    editarUsuarioProyecto,
    eliminarUsuarioProyecto
} = require('../controllers/usuarioProyecto');

router.post('/',[auth.requerido,adminMiddleware], crearUsuarioProyecto);
router.get('/',[auth.requerido,adminMiddleware],consultarUsuariosProyectos);
router.put('/:id',[auth.requerido,adminMiddleware],editarUsuarioProyecto);
router.delete('/:id',[auth.requerido,adminMiddleware],eliminarUsuarioProyecto);


module.exports = router;
