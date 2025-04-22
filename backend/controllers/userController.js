require("dotenv").config({
  path: "./.env",
});
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = function (_id) {
  //.sign(payload, secret,)
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

// Login user
async function loginUser(req, res) {
  let { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    let user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message }); // Use 400 for bad request
  }
}

// Signup user
async function signupUser(req, res) {
  let { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Save user to database
    let user = await User.signup(email, password);

    // Create a token
    const token = createToken(user._id);

    res.status(201).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message }); // Use 400 for bad request
  }
}

module.exports = {
  loginUser,
  signupUser,
};
