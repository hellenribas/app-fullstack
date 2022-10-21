const taskService = require('../services/taskService');
const { StatusCodes } = require('http-status-codes');


const getTasks = async (req, res, next) => {
  try {
    const token = req.headers;
    const request = await taskService.getTasks(token);
    return res.status(StatusCodes.OK).send(request);
  } catch (e) {
    next(e)
  }
}

const addTask = async (req, res, next) => {
  try {
    const request = await taskService.addTask(req.body, req.headers);
    return res.status(StatusCodes.OK).send(request);
  } catch (e) {
    next(e)
  }
}

const deletedTask = async (req, res, next) => {
  try {
    await taskService.deletedTask(req.headers);
    return res.status(StatusCodes.OK).end();
  } catch (e) {
    next(e)
  }
}

module.exports = {
  getTasks,
  addTask,
  deletedTask,
}