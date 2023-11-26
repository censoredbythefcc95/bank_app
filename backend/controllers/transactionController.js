const Transaction = require('../models/Transaction');
const BankAccount = require('../models/BankAccount');

const TransactionController = {
    credit: async (req, res) => {
        try {
            const { accountId, amount, description } = req.body;
            const bankAccount = await BankAccount.findById(accountId);
            if (!bankAccount) {
                return res.status(404).json({ message: "Bank account not found."});
            }

            const newTransaction = new Transaction({
                bankAccount: accountId,
                amount,
                type: 'credit',
                description,
            });
            await newTransaction.save();

            bankAccount.balance += amount;
            await bankAccount.save();

            res.status(201).json({ message: "Credit transaction applied." });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error.'});
        }
    },

    debit: async (req, res) => {
        //debit logic coming soon.
    },

    getAccountTransactions: async (req, res) => {
        //logic for getting transactions coming soon. 
    },
};

module.exports = TransactionController;