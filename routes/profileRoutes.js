const express = require('express');
const profileHandler = require('../controllers/profileController');
const router = express.Router();

router.post('/login', profileHandler.login);
module.exports = router;