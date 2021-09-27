const router = require('express').Router();
const adminMiddleware =require('../middleware/admin');
const userMiddleware =require('../middleware/usuario');

const auth =require('./auth');
const {
  obtenerUsuarios,
  editarUsuario,
  eliminarUsuario,
  obtenerUsuario
} = require('../controllers/usuario');



router.get('/',[auth.requerido,userMiddleware],obtenerUsuarios);
router.get('/:id',[auth.requerido],obtenerUsuario); 
router.put('/:id',[auth.requerido],editarUsuario);


module.exports= router;
