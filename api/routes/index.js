const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const bloggerRoutes = require('./bloggerRoutes');




// Use the user routes under the /users endpoint
router.use('/users', userRoutes);

// Use the blogger routes under the /bloggers endpoint
router.use('/bloggers', bloggerRoutes);

module.exports = router;