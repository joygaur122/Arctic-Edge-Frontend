import express from "express";
import { handleSubmit } from "../controllers/MyContactController.js";
import Contact from "../models/contact.model.js";
import UserErrors from '../errors/UserErrors.js';

const router = express.Router();

router.post('/submit-contact', handleSubmit, async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ type: UserErrors.MISSING_DATA });
  }

  const contactData = { name, email, phone, message };
  const contact = new Contact(contactData);

  contact.validate((err) => {
    if (err) {
      // Handle validation error
      return res.status(400).json({ type: 'Validation Error', message: err.message });
    } else {
      // Save the contact form data to the database
      contact.save((err) => {
        if (err) {
          // Handle database error
          return res.status(500).json({ type: 'Database Error', message: err.message });
        } else {
          // Return a success response
          return res.status(201).json({ message: 'Contact form submitted successfully' });
        }
      });
    }
  });
});

export default router;