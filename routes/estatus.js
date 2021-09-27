const router = require('express').Router();
const admin = require('../middleware/admin');
const auth =require('./auth');
const {
    crearEstatus,
    obtenerEstatus,
    modificarEstatus,
    eliminarEstatus,
} = require('../controllers/estatus');


router.get('/',[auth.requerido,admin], obtenerEstatus);
router.get('/:id',[auth.requerido,admin], obtenerEstatus);
router.post('/',[auth.requerido,admin], crearEstatus);
router.put('/:id',[auth.requerido,admin], modificarEstatus);
router.delete('/:id',[auth.requerido,admin], eliminarEstatus);

module.exports = router;



