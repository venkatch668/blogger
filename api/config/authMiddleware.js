// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Replace with actual secret

// Middleware to verify the JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract the token from Authorization header

    if (!token) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // Verify the token with the secret
        req.user = decoded; // Attach user info to the request object
        next(); // Call the next middleware/route handler
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Invalid token.' });
    }
};

module.exports = verifyToken;
