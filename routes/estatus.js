const router = require('express').Router();
const auth =require('./auth');
const {
    crearEstatus,
    obtenerEstatus,
    modificarEstatus,
    eliminarEstatus,
} = require('../controllers/estatus')

router.get('/',auth.requerido, obtenerEstatus);
router.get('/:id', auth.requerido, obtenerEstatus);
router.post('/',auth.requerido, crearEstatus);
router.put('/:id',auth.requerido, modificarEstatus);
router.delete('/:id',auth.requerido, eliminarEstatus);

module.exports = router;



