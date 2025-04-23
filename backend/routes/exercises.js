const express = require('express');
const router = express.Router();

// Dummy exercise data — in a real app, you might read from your database.
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
    description: 'Core stability exercise to develop endurance in your abs and lower back.'
  }
];

// GET /api/exercises
router.get('/', (req, res) => {
  res.json(exercises);
});

module.exports = router;
