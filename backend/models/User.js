const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Profile details which can be updated later via the profile API:
    name: { type: String, default: '' },
    age: { type: Number, default: null },
    gender: { type: String, default: '' },
    weight: { type: Number, default: null },
    height: { type: Number, default: null },
    fitnessGoal: { type: String, default: '' },
    profilePicture: { type: String, default: '' } // Use a URL or file path as needed
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
