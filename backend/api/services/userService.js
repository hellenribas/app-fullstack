const Joi = require('joi');
// const md5 = require('md5');
const { User } = require('../database/models/index');
const { generateToken } = require('../utils/token');

// const encryptPassword = ({ senha }) => {
//   return md5(senha);
// }

const validateBodyLogin = ({ email, senha }) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().min(6).required(),
  });

const { error, value } = schema.validate({ email, senha });
if (error) {
  return { status: 400, message: error.details[0].message };
}
return value;
} 

const login = async (email, senha) => {
  const validate = validateBodyLogin({ email, senha });
  // const encry = encryptPassword(senha);
  if (validate.message) return validate
  const data = await User.findOne({ where: { email, senha } });
  if (!data) {
    throw new Error('Email ou senha inválidos')
  }
  return generateToken({email, senha})
}

module.exports = {
  login,
}