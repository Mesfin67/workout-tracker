const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
// const router = express.Router();
// const path = require('path');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Global Middleware
app.use(express.json());
app.use(cors("*"));

// Serve static content from the public directory
// app.use(express.static(path.join(__dirname, '..', 'public')));

// Route handlers
app.use('/api/auth', require('./routes/auth'));
app.use('/api/workouts', require('./routes/workouts'));
app.use('/api/profile', require('./routes/profile'));


// app.use('/api/exercises', require('./routes/exercises'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
