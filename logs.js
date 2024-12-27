const express = require('express');
const Log = require('../models/Log');

const router = express.Router();

router.post('/', async (req, res) => {
  const log = new Log(req.body);
  await log.save();
  res.status(201).json({ message: 'Log created successfully' });
});

router.get('/', async (req, res) => {
  const logs = await Log.find();
  res.json(logs);
});

module.exports = router;
