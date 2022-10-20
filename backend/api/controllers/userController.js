const userService = require('../services/userService');
const { StatusCodes } = require('http-status-codes');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const request = await userService.login({ email, password });
    if (request.message) {
      res.status(request.status).send(request.message)
    }
    res.status(StatusCodes.OK).send(request);
  } catch (e) {
    next(e);
  }
}

const register = async (req, res, next) => {
  try {
    const request = await userService.login(req.body);
    res.status(StatusCodes.OK).send(request);
  } catch (e) {
    next(e)
  }
}

module.exports = {
  login,
  register,
}