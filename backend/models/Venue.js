const mongoose = require('mongoose');

const VenueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  description: String,
  halls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hall' }],
  media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
  location: {
    lat: Number,
    lng: Number,
    mapUrl: String
  }
});

module.exports = mongoose.model('Venue', VenueSchema);
