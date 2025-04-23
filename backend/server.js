const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const router = express.Router();

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Global Middleware
app.use(express.json());
app.use(cors("*"));

// Route handlers
app.use('/api/auth', require('./routes/auth'));
app.use('/api/workouts', require('./routes/workouts'));
app.use('/api/profile', require('./routes/profile'));
const exercises = [
    {
      id: '1',
      name: 'Push Up',
      imageUrl: 'https://via.placeholder.com/300x200?text=Push+Up',
      description: 'A basic push-up to build upper body strength.'
    },
    {
      id: '2',
      name: 'Squat',
      imageUrl: 'https://via.placeholder.com/300x200?text=Squat',
      description: 'A squat exercise to strengthen your legs and glutes.'
    },
    {
      id: '3',
      name: 'Plank',
      imageUrl: 'https://via.placeholder.com/300x200?text=Plank',
      description: 'A core stability exercise that develops endurance in your abs and lower back.'
    }
  ];
  router.get('/', (req, res) => {
    res.json(exercises);
  });

app.use('/api/exercises', require('./routes/exercises'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = router;
