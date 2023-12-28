const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  code: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;
