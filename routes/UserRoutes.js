const express = require('express');
const router = express.Router();

// Example route for user profile
router.get('/profile', (req, res) => {
  res.json({ message: 'User profile data' });
});

module.exports = router;
