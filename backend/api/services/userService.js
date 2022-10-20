const Joi = require('joi');
const { User } = require('../database/models/index');
const { generateToken } = require('../utils/token');

const validateBody = ({ email, senha }) => {
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
  const validate = validateBody({ email, senha });
  if (validate.message) return validate
  const data = await User.findOne({ where: { email, senha } });
  if (!data) {
    throw new Error('Email ou senha inválidos')
  }
  return generateToken({email, senha})
}

const register = async ({ email, senha, nome, telefone }) => {
    const validateUser = validateBody({ email, senha });
    if (validateUser.message) return validateUser;
    const existUser = await User.findOne({ where: { email } });
    if (existUser) return { status: 409, message: 'Usuário já cadastrado' };
    await User.create({ nome, email, senha, telefone });
    return generateToken({ email, senha });
}

module.exports = {
  login,
  register,
}