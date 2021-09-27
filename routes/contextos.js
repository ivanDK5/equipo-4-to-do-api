const router = require('express').Router();
const adminMiddleware =require('../middleware/admin');

const auth =require('./auth');
const {
    crearContexto,
    obtenerContexto,
    modificarContexto,
    eliminarContexto
} = require('../controllers/contextos');

router.get('/',[auth.requerido,adminMiddleware],obtenerContexto);
router.get('/:id',[auth.requerido,adminMiddleware], obtenerContexto);
router.post('/',[auth.requerido,adminMiddleware],crearContexto);
router.put('/:id',[auth.requerido,adminMiddleware],modificarContexto);
router.delete('/:id',[auth.requerido,adminMiddleware],eliminarContexto);

module.exports = router;