const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require('./api/auth/auth-router.js');
const recipesRouter = require('./api/recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);

server.use('/recipes', recipesRouter);

server.get('/', (req, res) => {
  res.send('Server running...');
 });

module.exports = server;