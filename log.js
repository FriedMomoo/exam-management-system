const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  examId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: Date,
  action: String,
});

module.exports = mongoose.model('Log', logSchema);