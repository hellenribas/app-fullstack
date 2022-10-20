const errorHandler = async ({ name, message }, _req, res, _next) => {
  return res.status(500).json({ [name]: message });
};

module.exports = errorHandler;
