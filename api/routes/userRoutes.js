const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.get('/users', userController.getAllUsers);  // Assuming getAllUsers is defined in userController
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/logout', userController.logout);

// Protected route (requires authentication)
router.get('/profile', userController.authenticate, (req, res) => {
    res.status(200).json({ message: 'Welcome to your profile', user: req.user });
});

// Admin-only route (requires authentication and authorization)
router.get('/admin', userController.authenticate, userController.authorize('admin'), (req, res) => {
    res.status(200).json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;