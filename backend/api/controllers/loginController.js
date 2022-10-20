const loginService = require('../services/loginService');
const { StatusCodes } = require('http-status-codes');

const login = async (req, res, next) => {
  try {
    const request = await loginService.login(req.body);
    if (request.message) {
      return res.status(request.status).send(request.message)
    }
    return res.status(StatusCodes.OK).send(request);
  } catch (e) {
    next(e);
  }
}

const register = async (req, res, next) => {
  try {
    const request = await loginService.register(req.body);
    return res.status(StatusCodes.OK).send(request);
  } catch (e) {
    next(e)
  }
}


module.exports = {
  login,
  register,
}