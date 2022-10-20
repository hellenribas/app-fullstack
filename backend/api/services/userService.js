const { User } = require('../database/models/index');
const { validateBody } = require('../utils/validateBody');
const tokenValid = require('../utils/token');


const update = async ({ id, email, senha, nome, telefone }) => {
  const validateUser = validateBody({ email, senha });
  if (validateUser.message) return validateUser;
  const idUser = await User.update({ nome, email, senha, telefone }, { where: { id } });
  return idUser;
}

const deleted = async (token) => {
  const { email } = tokenValid.decoded(token.authorization);
  const existUser = await User.findOne({ where: { email } });
  if (!existUser) throw new Error('Usuário inválido');
  await User.destroy({ where: { id: existUser.id }});
}


module.exports = {
  update,
  deleted,
}