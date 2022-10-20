const taskService = require('../services/taskService');
const { StatusCodes } = require('http-status-codes');


const getTasks = async (req, res, next) => {
  try {
    const { id } = req.body;
    const request = await taskService.getTasks(id);
    return res.status(StatusCodes.OK).send(request);
  } catch (e) {
    next(e)
  }
}

const addTask = async (req, res, next) => {
  try {
    const request = await taskService.addTask(req.body);
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