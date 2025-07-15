// controllers/contactController.js
const Contact = require('../models/Contact');

// @desc    Get all contacts for a user
// @route   GET /api/contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch contacts', error: error.message });
  }
};

// @desc    Create a new contact
// @route   POST /api/contacts
exports.createContact = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const contact = await Contact.create({
      user: req.user.id,
      name,
      email,
      phone,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: 'Could not create contact', error: error.message });
  }
};

// @desc    Update a contact
// @route   PUT /api/contacts/:id
exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact || contact.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Could not update contact', error: error.message });
  }
};

// @desc    Delete a contact
// @route   DELETE /api/contacts/:id
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact || contact.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await contact.deleteOne();
    res.json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete contact', error: error.message });
  }
};
