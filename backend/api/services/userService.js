const Joi = require('joi');

const encryptPassword = ({ password }) => {
  return md5(password);
}

const validateBodyLogin = ({ email, password }) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

const { error, value } = schema.validate({ email, password });
if (error) {
  return { status: 400, message: error.details[0].message };
}
return value;
} 

const login = ({ email, password }) => {
  const validate = validateBodyLogin({ email, password });
  const encry = encryptPassword(password);
  if (validate.message) {
    return validate
  }
  const data = User.findOne({ where: { email, senha: encry} });
  if (!data) {
    throw new Error('Email ou senha inválidos')
  }
  return data;
}

module.exports = {
  login
}