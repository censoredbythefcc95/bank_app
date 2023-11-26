const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/create', UserController.createAccount);
router.get('/get/:userId/accounts', UserController.getUserAccounts);

module.exports = router;