const router = require('express').Router();
const {
    crearContexto,
    obtenerContexto,
    modificarContexto,
    eliminarContexto
} = require('../controllers/contextos');


router.get('/',obtenerContexto);
router.get('/:id', obtenerContexto);
router.post('/',crearContexto);
router.put('/:id',modificarContexto);
router.delete('/:id',eliminarContexto);

module.exports = router;