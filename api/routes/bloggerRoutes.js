const express = require('express');
const router = express.Router();
const bloggerController = require('../controllers/bloggerController');
const userController = require('../controllers/userController');  // For authentication middleware

// Blogger routes
router.post('/create',  bloggerController.createBlogger); // Create blogger profile (authenticated)
router.get('/blogs', bloggerController.getAllBloggers); // Get all bloggers (public)
router.get('/blogs/:userId', bloggerController.getBloggerBlogs); 
router.delete('/deleteblog/:blogId', bloggerController.deleteBloggerBlogs); 

module.exports = router;