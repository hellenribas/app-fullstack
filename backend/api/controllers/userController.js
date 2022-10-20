const userService = require('../services/userService');
const { StatusCodes } = require('http-status-codes');

const update = async (req, res, next) => {
  try {
    const request = await userService.update(req.body);
    if (request.message) return res.status(request.status)
    return res.status(StatusCodes.OK).send(request);
  } catch (e) {
    next(e)
  }
}

const deleted = async (req, res, next) => {
  try {
    await userService.deleted(req.headers);
    return res.status(StatusCodes.OK).end();
  } catch (e) {
    next(e)
  }
}

module.exports = {
  update,
  deleted,
}