import express from 'express';
import UserModel from "../models/user.model.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserErrors from '../errors/userserrors.js';

const router = express.Router();

// Register user route
//Sending request and extracting username and password from body
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  //find a user with the given username
  try {
    const user = await UserModel.findOne({ username });
    //checking if the user alrwadu exist
    if (user) {
      return res.status(400).json({ type: UserErrors.USERNAME_ALREADY_EXISTS });
    }
    //Hashing the users password
    const hashedPassword = await bcrypt.hash(password, 10);
    //create new username and password and save it
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    res.json({ "User Registered Successfully": true });
  } catch (err) {
    res.status(500).json({ type: err });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
   //Find user with the given username
  try {
    //if no user is found return status code
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(400).json({ type: UserErrors.NO_USER_FOUND });
    }
      // if user is found compare provided password with hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ type: UserErrors.WRONG_CREDENTIALS });
    }
    // if passwords match use JWT containing id use errors
    const token = jwt.sign({ id: user._id }, "secretwebapp");
    res.json({ token, userID: user._id });
  } catch (error) {
    res.status(500).json({ type: 'Internal Server Error' });
  }
});

// Export the router
export default router;