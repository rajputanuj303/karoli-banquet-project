const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  hall: { type: mongoose.Schema.Types.ObjectId, ref: 'Hall' },
  date: { type: Date, required: true },
  package: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' },
  addons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'AddOn' }],
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
