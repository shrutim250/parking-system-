const Slot = require('../models/Slot');

exports.getSlots = async (req, res) => {
  try {
    const slots = await Slot.find();
    res.status(200).json(slots);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addSlot = async (req, res) => {
  const { location, bookedSlots, totalSlots } = req.body;

  try {
    const newSlot = new Slot({ location, bookedSlots, totalSlots });
    await newSlot.save();
    res.status(201).json({ success: true, message: 'Slot added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
