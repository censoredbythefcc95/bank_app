const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const transactionRoutes =  require('./routes/transactionRoutes');
const bankAccountRoutes = require('./routes/bankAccountRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is a test of the banking API. Successful.');
});

connectDB();

//ROUTES
app.use('/users', userRoutes);
app.use('/bank-accounts', bankAccountRoutes);
app.use('/transactions', transactionRoutes);


app.listen(PORT, () => {
    console.log(`The server is now running on Port ${PORT}`);
});