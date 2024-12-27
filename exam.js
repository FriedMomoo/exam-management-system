const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: String,
  date: Date,
  duration: Number,
  questions: Array,
  logs: Array,
});

module.exports = mongoose.model('Exam', examSchema);