const express = require('express');
require('express-async-errors');
const cors = require('cors');
const { 
  userRouter, taskRouter, loginRouter
 } = require('./routes');
 const errorHandler = require('./middlewares/errorHandler');
 const tokenValidate = require('./middlewares/tokenValidate');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/', tokenValidate);
app.use('/tasks', taskRouter);
app.use('/user', userRouter);
app.use(errorHandler)

module.exports = app;
