const express = require('express');
const router = express.Router();
const authorize = require('../middleware/auth');

// Only Admins can delete
router.delete('/delete/:id', authorize(['Admin']), (req, res) => {
  res.json({ message: "Sensitive data deleted by Admin." });
});

// Admins and Editors can update
router.put('/update/:id', authorize(['Admin', 'Editor']), (req, res) => {
  res.json({ message: "Data updated." });
});

module.exports = router;