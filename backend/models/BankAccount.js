const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    accountNumber: { type: String, required: true, unique: true },
    balance: { type: Number, default : 0 },
});

const BankAccount = mongoose.model('BankAccount', bankAccountSchema);

module.exports = BankAccount;