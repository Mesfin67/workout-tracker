const express = require('express');
const router = express.Router();

// Dummy exercise data — in a real app, you might read from your database.
const exercises = [
    {
      id: '1',
      name: 'Push Up',
      imageUrl: './images/pushup.jpg',
      description: 'A basic push-up to build upper body strength.'
    },
    {
      id: '2',
      name: 'Squat',
      imageUrl: './images/squat.jpg',
      description: 'A squat exercise to strengthen your legs and glutes.'
    },
    {
      id: '3',
      name: 'Plank',
      imageUrl: './images/plank.jpg',
      description: 'A core stability exercise that develops endurance in your abs and lower back.'
    }
];
router.get('/', (req, res) => {
    res.json(exercises);
});

module.exports = router;
