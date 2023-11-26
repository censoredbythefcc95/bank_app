const express = require('express');
const router = express.Router();
//const BankAccountController = require('../controllers/bankAccountController');

router.post('/create', BankAccountController.createAccount);
router.get('/get/:userId/accounts', BankAccountController.getUserAccounts);

module.exports = router;