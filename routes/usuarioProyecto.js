const router = require('express').Router();
const admin = require('../middleware/admin');
const miembro = require('../middleware/miembro');
const usuarioProyecto = require('../middleware/usuarioProyecto');
const auth=require('./auth');
const {
    crearUsuarioProyecto,
    consultarUsuariosProyectos,
    editarUsuarioProyecto,
    eliminarUsuarioProyecto
} = require('../controllers/usuarioProyecto');


router.post('/',[auth.requerido,admin],crearUsuarioProyecto);
router.get('/',[auth.requerido,admin,miembro,usuarioProyecto],consultarUsuariosProyectos);
router.put('/:id',[auth.requerido,admin],editarUsuarioProyecto);
router.delete('/:id',[auth.requerido,admin],eliminarUsuarioProyecto);


module.exports = router;
