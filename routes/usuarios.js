const router = require('express').Router();
const {
  obtenerUsuarios,
  editarUsuario,
  eliminarUsuario,
  obtenerUsuario
} = require('../controllers/usuario');

router.get('/',obtenerUsuarios);
router.get('/:id',obtenerUsuario);
router.put('/:id',editarUsuario);
router.delete('/:id',eliminarUsuario);

module.exports= router;
