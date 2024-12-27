const express = require('express');
const { PythonShell } = require('python-shell');

const router = express.Router();

router.post('/analyze', (req, res) => {
  const { videoFeed } = req.body;
  const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: './ai-scripts',
    args: [videoFeed],
  };

  PythonShell.run('analyze_behavior.py', options, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ analysis: results });
  });
});

module.exports = router;
