const router = require('express').Router();
const adminMiddleware =require('../middleware/admin');
const auth =require('./auth');
const {
  obtenerUsuarios,
  editarUsuario,
  eliminarUsuario,
  obtenerUsuario
} = require('../controllers/usuario');

router.get('/',[auth.requerido],obtenerUsuarios);
router.get('/:id',[auth.requerido,adminMiddleware],obtenerUsuario);
router.put('/:id',[auth.requerido],editarUsuario);
router.delete('/:id',[auth.requerido],eliminarUsuario);

module.exports= router;
