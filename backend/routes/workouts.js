const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');
const requireAuth = require('../middleware/requireAuth');

// Apply authentication middleware to all routes in this file
router.use(requireAuth);

// GET /api/workouts
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find({ user_id: req.user.userId }).sort({ createdAt: -1 });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/workouts
router.post('/', async (req, res) => {
  const { title, load, reps, sets, duration } = req.body;
  try {
    const workout = new Workout({ title, load, reps, sets, duration, user_id: req.user.userId });
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/workouts/:id - Update a workout
router.put('/:id', async (req, res) => {
  const { title, load, reps, sets, duration } = req.body;
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, user_id: req.user.userId },
      { title, load, reps, sets, duration },
      { new: true }
    );
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/workouts/:id
router.delete('/:id', async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({ _id: req.params.id, user_id: req.user.userId });
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' });
    }
    res.json({ message: 'Workout deleted', workout });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
