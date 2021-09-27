const router =require('express').Router();
const admin = require('../middleware/admin');

const auth=require('./auth');
const{
  crearRol,
  obtenerRoles,
  modificarRol,
  eliminarRol,
} =require('../controllers/roles');

router.get('/:id?',[auth.requerido,admin],obtenerRoles);
router.post('/',[auth.requerido,admin],crearRol);
router.put('/:id',[auth.requerido,admin],modificarRol);
router.delete('/:id',[auth.requerido,admin],eliminarRol);

module.exports=router;