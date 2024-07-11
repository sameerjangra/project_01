const express = require('express');
const userHandler = require('../controllers/userController');
const router = express.Router();
const { maintenance } = require('../middlewares/main');
const auth = require('../middlewares/verify');

router.post('/register', userHandler.register);
router.put('/update/:id',userHandler.update)
router.put('/delete/:id',userHandler.delete)
router.get('/findallusers',auth,userHandler.findalluser)
router.get('/auth',maintenance,userHandler.clientauth)


module.exports = router;
