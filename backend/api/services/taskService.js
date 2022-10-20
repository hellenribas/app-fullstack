const { Task } = require('../database/models/index');

const getTasks = async (id) => {
  const tasks = await Task.findAll({ where: { userId: id }, attributes: { exclude: ['userId'] } });
  return tasks;
}

const addTask = async ({ tarefa, descricao='', userId }) => {
  const idCreate =  await Task.create({ tarefa, descricao, userId });
  return idCreate;
}


module.exports = {
  getTasks,
  addTask,
}