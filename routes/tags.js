const router = require('express').Router();
const {
    crearTag,
    obtenerTag,
    modificarTag,
    eliminarTag,
} = require('../controllers/Tags')

router.get('/',obtenerTag);
router.get('/:id', obtenerTag);
router.post('/',crearTag);
router.put('/:id',modificarTag);
router.delete('/:id',eliminarTag);

module.exports = router;
