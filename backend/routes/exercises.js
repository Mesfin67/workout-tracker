const express = require('express');
const router = express.Router();

// Dummy exercise data — in a real app, you might read from your database.
const exercises = [
    {
      id: '1',
      name: 'Push Up',
      imageUrl: 'https://learn.athleanx.com/wp-content/uploads/2021/12/AX_PERFECT-PUSH-UP-830x467.jpg',
      description: 'A basic push-up to build upper body strength.'
    },
    {
      id: '2',
      name: 'Squat',
      imageUrl: 'https://www.healthline.com/hlcmsresource/images/AN_images/squat-steps-1296x728-squat-steps.jpg',
      description: 'A squat exercise to strengthen your legs and glutes.'
    },
    {
      id: '3',
      name: 'Plank',
      imageUrl: 'https://static01.nyt.com/images/2023/02/03/multimedia/WELL-CORE-WORKOUTS0-pqlt/WELL-CORE-WORKOUTS0-pqlt-articleLarge.jpg',
      description: 'A core stability exercise that develops endurance in your abs and lower back.'
    }
];
router.get('/', (req, res) => {
    res.json(exercises);
});

module.exports = router;
