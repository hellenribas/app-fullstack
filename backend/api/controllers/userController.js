const userService = require('../services/userService');
const { StatusCodes } = require('http-status-codes');

const update = async (req, res, next) => {
  try {
    const request = await userService.update(req.body);
    return res.status(StatusCodes.OK).send(request);
  } catch (e) {
    next(e)
  }
}

module.exports = {
  update,
}