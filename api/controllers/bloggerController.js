// controllers/bloggerController.js

const pool = require('../config/db'); // MySQL database connection
const verifyToken = require('../config/authMiddleware'); // JWT middleware

// Create Blogger
exports.createBlogger = [
    verifyToken, // Apply token verification middleware
    async (req, res) => {
        try {
            const { content, title, user_id } = req.body;

            if (!content || !title || !user_id) {
                return res.status(400).json({ message: 'content, title, and user_id are required' });
            }

            // Create blogger entry
            await pool.query('INSERT INTO blog_posts (user_id, title, content) VALUES (?, ?, ?)', [
                user_id, title, content
            ]);

            res.status(201).json({ message: 'blog posted' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
];

// Get all bloggers
exports.getAllBloggers = [
    verifyToken, // Apply token verification middleware
    async (req, res) => {
        try {
            const [bloggers] = await pool.query('SELECT * FROM blog_posts');
            res.status(200).json(bloggers);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
];

// Get blogs for a specific blogger based on userId
exports.getBloggerBlogs = [
    verifyToken, // Apply token verification middleware
    async (req, res) => {
        // console.log(req.params)
        // console.log(userId);
        try {
            const { userId } = req.params; // Get userId from route params
            if (!userId) {
                return res.status(400).json({ message: 'UserId is required' });
            }
            console.log(userId);
            // Fetch blogs for a specific blogger (userId)
            const [blogs] = await pool.query(`SELECT blog_posts.id AS post_id, blog_posts.title AS title, blog_posts.content AS content, blog_posts.created_at AS created_at, users.username AS username FROM blog_posts INNER JOIN users ON blog_posts.user_id = users.id WHERE blog_posts.user_id = ?`, [userId]);

            if (blogs.length === 0) {
                return res.status(404).json({ message: 'No blogs found for this user' });
            }

            res.status(200).json(blogs);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
];

exports.deleteBloggerBlogs = [
    verifyToken, // Apply token verification middleware
    async (req, res) => {
        try {
            console.log(req.params)
            const { blogId } = req.params; // Get userId from route params

            if (!blogId) {
                return res.status(400).json({ message: 'blogId is required' });
            }

            // Delete blogs for the given userId
            const [result] = await pool.query(`DELETE FROM blog_posts WHERE id = ?`, [blogId]);

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'No blogs found for this user to delete' });
            }

            res.status(200).json({ message: 'Blogs successfully deleted', affectedRows: result.affectedRows });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
];