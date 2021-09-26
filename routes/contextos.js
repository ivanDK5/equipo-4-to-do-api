const router = require('express').Router();
const adminMiddleware =require('../middleware/admin');
const userMiddleware =require('../middleware/usuario');
const auth =require('./auth');
const {
    crearContexto,
    obtenerContexto,
    modificarContexto,
    eliminarContexto
} = require('../controllers/contextos');

router.get('/',[auth.requerido,userMiddleware],obtenerContexto);
router.get('/:id',[auth.requerido,userMiddleware], obtenerContexto);
router.post('/',[auth.requerido,userMiddleware],crearContexto);
router.put('/:id',[auth.requerido,userMiddleware],modificarContexto);
router.delete('/:id',[auth.requerido,userMiddleware],eliminarContexto);

module.exports = router;