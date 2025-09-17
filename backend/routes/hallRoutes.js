const express = require('express');
const router = express.Router();
const Hall = require('../models/Hall');

// Create a new hall
router.post('/', async (req, res) => {
  try {
    const hall = new Hall(req.body);
    await hall.save();
    res.status(201).json(hall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all halls
router.get('/', async (req, res) => {
  try {
    const halls = await Hall.find().populate('venue').populate('images');
    res.json(halls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single hall
router.get('/:id', async (req, res) => {
  try {
    const hall = await Hall.findById(req.params.id).populate('venue').populate('images');
    if (!hall) return res.status(404).json({ error: 'Hall not found' });
    res.json(hall);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a hall
router.put('/:id', async (req, res) => {
  try {
    const hall = await Hall.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!hall) return res.status(404).json({ error: 'Hall not found' });
    res.json(hall);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a hall
router.delete('/:id', async (req, res) => {
  try {
    const hall = await Hall.findByIdAndDelete(req.params.id);
    if (!hall) return res.status(404).json({ error: 'Hall not found' });
    res.json({ message: 'Hall deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
