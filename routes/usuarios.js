const router = require('express').Router();
const {
  crearUsuario,
  obtenerUsuarios,
  editarUsuario,
  eliminarUsuario
} = require('../controllers/usuario');

router.get('/',obtenerUsuarios);
router.post('/',crearUsuario);
router.put('/:id',editarUsuario);
router.delete('/:id',eliminarUsuario);

module.exports= router;
