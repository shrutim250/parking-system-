const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  bookedSlots: {
    type: Number,
    required: true,
  },
  totalSlots: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Slot', slotSchema);
