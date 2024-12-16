const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use(cors());

// // If you need specific configurations
// const corsOptions = {
//     origin: 'http://example.com', // Allow only this origin
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
// };

app.use(cors());

// Routes
app.use('/api', require('./routes'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});