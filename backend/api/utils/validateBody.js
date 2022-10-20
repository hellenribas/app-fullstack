const Joi = require('joi');

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

module.exports = {
  validateBody
}