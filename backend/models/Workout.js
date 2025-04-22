const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    load: { type: Number, required: true },       // in kg
    reps: { type: Number, required: true },
    sets: { type: Number, required: true },
    duration: { type: Number, required: true },     // in minutes
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Workout', WorkoutSchema);
