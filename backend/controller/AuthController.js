const User = require("../models/user");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = new User({ name, email, password });
        const token = createSecretToken(user._id);
        user.token = token;
        await user.save();
        
        return res.status(201).json({ message: "User signed up successfully", success: true, token, user });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message || 'Internal server error' });
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "Email is invalid!" });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "password invalid!" });
        }
        
        const token = createSecretToken(user._id);
        user.token = token;
        await user.save();

        return res.status(200).json({ message: "Login successfully", success: true, token, user });

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: err.message || 'Internal server error' });
    }
}