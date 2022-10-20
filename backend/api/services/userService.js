const { User } = require('../database/models/index');
const { validateBody } = require('../utils/validateBody');


const update = async ({ id, email, senha, nome, telefone }) => {
  const validateUser = validateBody({ email, senha });
  if (validateUser.message) return validateUser;
  const idUser = await User.update({ nome, email, senha, telefone }, { where: { id } });
  return idUser;
}

module.exports = {
  update,
}