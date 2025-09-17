const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  password: { type: String, required: true }
});

module.exports = mongoose.model('Customer', CustomerSchema);
