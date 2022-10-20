const express = require('express');
require('express-async-errors');
const cors = require('cors');
const { 
  loginRouter,
 } = require('./routes');
 const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRouter);

app.use(errorHandler)

module.exports = app;
