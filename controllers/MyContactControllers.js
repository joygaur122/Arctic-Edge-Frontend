import Contact from "../models/contact.model.js";
import UserError from "../errors/userserrors.js";

export const handleSubmit = async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Check if there's missing data
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ type: UserError.MISSING_DATA });
  }

  // Initialize contact data
  const contactData = { name, email, phone, message };

  // Create new contact
  const contact = new Contact(contactData);

  // Validate contact
  contact.validate()
    .then(() => {
      // Save contact
      contact.save()
        .then(() => {
          return res.status(200).json({ message: 'Contact form submitted. We will be in touch shortly.' });
        })
        .catch((err) => {
          return res.status(500).json({ type: 'Database Error', message: err.message });
        });
    })
    .catch((err) => {
      return res.status(400).json({ type: 'Validation Error', message: err.message });
    });
};