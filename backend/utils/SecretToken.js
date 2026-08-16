require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
    const secretKey = process.env.TOKEN_KEY;
    if (!secretKey) {
        throw new Error('TOKEN_KEY is required in your environment variables');
    }

    return jwt.sign({ id }, secretKey, {
        expiresIn: 3 * 24 * 60 * 60,
    });
};

module.exports.verifySecretToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ status: false, error: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    const secretKey = process.env.TOKEN_KEY;
    if (!secretKey) {
        return res.status(500).json({ error: "TOKEN_KEY is required in environment variables" });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ status: false, error: "Invalid or expired token" });
        }
        req.user = decoded;
        next();
    });
};