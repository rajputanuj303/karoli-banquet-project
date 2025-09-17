const express = require('express');
const router = express.Router();
const Venue = require('../models/Venue');

// Create a new venue
router.post('/', async (req, res) => {
	try {
		const venue = new Venue(req.body);
		await venue.save();
		res.status(201).json(venue);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

// Get all venues
router.get('/', async (req, res) => {
	try {
		const venues = await Venue.find().populate('halls').populate('media');
		res.json(venues);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Get a single venue
router.get('/:id', async (req, res) => {
	try {
		const venue = await Venue.findById(req.params.id).populate('halls').populate('media');
		if (!venue) return res.status(404).json({ error: 'Venue not found' });
		res.json(venue);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

// Update a venue
router.put('/:id', async (req, res) => {
	try {
		const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!venue) return res.status(404).json({ error: 'Venue not found' });
		res.json(venue);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
});

// Delete a venue
router.delete('/:id', async (req, res) => {
	try {
		const venue = await Venue.findByIdAndDelete(req.params.id);
		if (!venue) return res.status(404).json({ error: 'Venue not found' });
		res.json({ message: 'Venue deleted' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

module.exports = router;
