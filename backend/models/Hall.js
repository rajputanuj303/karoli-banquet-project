const mongoose = require('mongoose');

const HallSchema = new mongoose.Schema({
  name: { type: String, required: true },
  venue: { type: mongoose.Schema.Types.ObjectId, ref: 'Venue' },
  capacity: Number,
  pricing: Number,
  layout: String,
  images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
  virtualTourUrl: String
});

module.exports = mongoose.model('Hall', HallSchema);
