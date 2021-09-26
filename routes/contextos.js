const router = require('express').Router();
const {
    crearContexto,
    obtenerContexto,
    modificarContexto,
    eliminarContexto
} = require('../controllers/contextos');

router.post('/',crearContexto);
router.get('/',obtenerContexto);
router.put('/:id',modificarContexto);
router.delete('/:id',eliminarContexto);

module.exports = router;