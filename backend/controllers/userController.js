const User = require('../models/User');

const UserController = {
    signup: async (req, res) => {
        try {
            const { username, password } = req.body;
            const newUser = new User({ username, password });
            await newUser.save();
            res.status(201).json({ message: "User has been created successfully."});
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal servor error."});
        }
    },

    login: async (req, res) => {
        //I will add in login logic later on. For now this will be jwt and bcrypt.
    },
};

module.exports = UserController;