const express = require('express');
const router = express.Router();
const User = require('../models/User');
const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

// GET /api/profile - Retrieve the current user's profile
router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/profile - Update profile details
router.put('/', async (req, res) => {
  const { name, age, gender, weight, height, fitnessGoal, profilePicture } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      { name, age, gender, weight, height, fitnessGoal, profilePicture },
      { new: true }
    ).select('-password');
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
