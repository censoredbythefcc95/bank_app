const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || '', {}); //You no longer need topology object, so I removed it here.
        console.log('Successfully connected to the MongoDB database.');
    } catch (error) {
        console.error('There was a problem connecting to MongoDB.', error);
    };
};

module.exports = connectDB;