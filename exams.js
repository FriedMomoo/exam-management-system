const express = require('express');
const Exam = require('../models/Exam');
const Log = require('../models/Log');

const router = express.Router();

router.post('/', async (req, res) => {
  const exam = new Exam(req.body);
  await exam.save();
  res.status(201).json({ message: 'Exam created successfully' });
});

router.get('/', async (req, res) => {
  const exams = await Exam.find();
  res.json(exams);
});

router.get('/:id/logs', async (req, res) => {
  const logs = await Log.find({ examId: req.params.id });
  res.json(logs);
});

module.exports = router;
