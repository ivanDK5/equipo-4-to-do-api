const router = require('express').Router();

const {
    crearUsuarioProyecto,
    consultarUsuariosProyectos,
    editarUsuarioProyecto,
    eliminarUsuarioProyecto
} = require('../controllers/usuarioProyecto');

router.post('/',crearUsuarioProyecto);
router.get('/',consultarUsuariosProyectos);
router.put('/:id',editarUsuarioProyecto);
router.delete('/:id',eliminarUsuarioProyecto);


module.exports = router;
