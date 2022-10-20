const errors = {
  NotFoundError: 404,
  UserAlreadyRegisteredError: 409,
};

const errorHandler = async ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  if (!status) return res.status(500).json({ message });
  return res.status(status).json({ message });
};

module.exports = errorHandler;
