const express = require('express');
const router = express.Router();
const { getSlots, addSlot } = require('./controllers/slotController');

// Get all slots
router.get('/', getSlots);

// Add new slot
router.post('/', addSlot);

module.exports = router;
