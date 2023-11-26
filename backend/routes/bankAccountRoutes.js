const express = require('express');
const router = express.Router();
const BankAccountController = require('../controllers/bankAccountController');

//POST upon create account function returning as successful.
router.post('/create-account', BankAccountController.createAccount);

//GET user-accounts/:userId
router.get('/user-accounts/:userId/', BankAccountController.getUserAccounts);

module.exports = router;