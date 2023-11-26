const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


//POST new account upon signup function returning as successful.
router.post('/signup', UserController.signup);

//POST upon login.
router.post('/login', UserController.login);

module.exports = router;