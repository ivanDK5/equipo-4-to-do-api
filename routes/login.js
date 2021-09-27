const router = require('express').Router();
const adminMiddleware =require('../middleware/admin');
const miembro = require('../middleware/miembro');

const {
  signUp,
  login,
  deleteAccount
}= require('../controllers/login');

router.post('/signup',signUp);
router.post('/login',login);
router.delete('/account',[auth.requerido,adminMiddleware,miembro],deleteAccount);

module.exports=router;