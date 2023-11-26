const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/transactionController');
const Transaction = require('../models/Transaction');

//POST credit
router.post('/credit', TransactionController.credit);

//POST debit
router.post('/debit', TransactionController.debit);

//GET account transactions by accountId
router.get('/account-transactions/:accountId', TransactionController.getAccountTransactions);

module.exports = router;