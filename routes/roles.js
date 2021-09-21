const router =require('express').Router();
const{
  crearRol,
  obtenerRoles,
  modificarRol,
  eliminarRol,
} =require('../controllers/roles');

router.get('/:id?',obtenerRoles);
router.post('/',crearRol);
router.put('/:id',modificarRol);
router.delete('/:id',eliminarRol);

module.exports=router;