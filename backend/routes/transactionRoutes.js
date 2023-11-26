const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/transactionController');

router.post('/create', TransactionController.createAccount);
router.get('/get/:userId/accounts', TransactionController.getUserAccounts);

module.exports = router;