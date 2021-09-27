const router =require('express').Router();
const auth=require('./auth');
const{
  crearRol,
  obtenerRoles,
  modificarRol,
  eliminarRol,
} =require('../controllers/roles');

router.get('/:id?'[auth.requerido],obtenerRoles);
router.post('/',[auth.requerido],crearRol);
router.put('/:id',[auth.requerido],modificarRol);
router.delete('/:id',[auth.requerido],eliminarRol);

module.exports=router;