const BankAccount = require('../models/BankAccount');

const BankAccountController = {
    createAccount: async (req, res) => {
        try {
            const { userId } = req.body;
            const accountNumber = generateAccountNumber();
            const newAccount = new BankAccount({ user: userId, accountNumber });
            await newAccount.save();
            res.status(201).json({ message: "Bank account created successfully.", accountNumber });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error.'});
        }
    },

    getUserAccounts: async (req, res) => {
        try {
            const { userId } = req.params;
            const userAccounts = await BankAccount.find({ user: userId });
            res.status(200).json(userAccounts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error'});
        }
    },
};

//function that generates random bank account numbers
function generateAccountNumber () {
    return Math.floor(10000000 + Math.random() * 900000000).toString();
}

module.exports = BankAccountController;