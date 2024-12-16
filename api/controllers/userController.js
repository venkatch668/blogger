const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// In-memory store for refresh tokens (use a database for production)
const refreshTokens = new Set();

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new user
exports.createUser = async (req, res) => {
    const { username, email, password_hash } = req.body;
    try {
        const [result] = await db.query('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)', [username, email, password_hash]);
        res.status(201).json({ message: 'User created', id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Register a new user
exports.register = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const userRole = role || 1;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const [result] = await db.query('INSERT INTO users (username, email, password_hash, role_id) VALUES (?, ?, ?, ?)', [
            username,
            email,
            hashedPassword,
            userRole,
        ]);

        res.status(201).json({ message: 'User registered successfully', id: result.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Login a user and issue tokens
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (user.length === 0) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const userData = user[0];
        const isMatch = await bcrypt.compare(password, userData.password_hash);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

      
        const accessToken = jwt.sign(
            { id: userData.id, username: userData.username, role: userData.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
        );

        const refreshToken = jwt.sign(
            { id: userData.id, username: userData.username, role: userData.role },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION }
        );

        refreshTokens.add(refreshToken);

        res.status(200).json({
            message: 'Login successful',
            accessToken,
            refreshToken,
           ...userData
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Refresh access token
exports.refreshToken = (req, res) => {
    const { token } = req.body;

    if (!token || !refreshTokens.has(token)) {
        return res.status(403).json({ message: 'Access denied or invalid token' });
    }

    try {
        const user = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        const newAccessToken = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
        );

        res.status(200).json({ accessToken: newAccessToken });
    } catch (error) {
        console.log(error);
        res.status(403).json({ message: 'Invalid or expired refresh token' });
    }
};

// Logout user and invalidate refresh token
exports.logout = (req, res) => {
    const { token } = req.body;

    if (token && refreshTokens.has(token)) {
        refreshTokens.delete(token);
    }

    res.status(200).json({ message: 'Logout successful' });
};

// Middleware: Authenticate access token
exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};

// Middleware: Authorize roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        if (!roles.includes(userRole)) {
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }
        next();
    };
};
