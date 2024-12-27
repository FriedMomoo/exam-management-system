const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('./config/db');

const authRoutes = require('./routes/auth');
const examRoutes = require('./routes/exams');
const aiRoutes = require('./routes/ai');
const logRoutes = require('./routes/logs');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
require('./passport-config')(passport);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/exams', authMiddleware, examRoutes);
app.use('/api/ai', authMiddleware, aiRoutes);
app.use('/api/logs', authMiddleware, logRoutes);

// Real-time Monitoring
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('stream-data', (data) => {
    console.log('Received stream data');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(5000, () => console.log('Server running on port 5000'));
