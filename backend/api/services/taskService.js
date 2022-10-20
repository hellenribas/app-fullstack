const { Task, User } = require('../database/models/index');
const tokenValid = require('../utils/token');


const getTasks = async (id) => {
  const tasks = await Task.findAll({ where: { userId: id }, attributes: { exclude: ['userId'] } });
  return tasks;
}

const addTask = async ({ tarefa, descricao='', userId }) => {
  const idCreate =  await Task.create({ tarefa, descricao, userId });
  return idCreate;
}

const deletedTask = async (token) => {
  const { email } = tokenValid.decoded(token.authorization);
  const existUser = await User.findOne({ where: { email } });
  if (!existUser) throw new Error('Usuário inválido');
  await Task.destroy({ where: { userId: existUser.id }});
}


module.exports = {
  getTasks,
  addTask,
  deletedTask,
}