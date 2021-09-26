const router = require('express').Router();
const auth =require('./auth');
const {
    crearTag,
    obtenerTag,
    modificarTag,
    eliminarTag,
} = require('../controllers/tags')

router.get('/',auth.requerido, obtenerTag);
router.get('/:id', auth.requerido, obtenerTag);
router.post('/',auth.requerido, crearTag);
router.put('/:id',auth.requerido, modificarTag);
router.delete('/:id',auth.requerido, eliminarTag);

module.exports = router;
