module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Tasks',
      [{
        id: 1,
        tarefa: 'estudar python',
        descricao: 'pesquisar por cursos no youtube',
        userId: 1
      },
      {
        id: 2,
        tarefa: 'ler um livro',
        descricao: 'Ler 10 páginas do livro Poder do Hábito',
        userId: 2,
      },
      {
        id: 3,
        tarefa: 'arrumar cronograma',
        descricao: 'lembrar de ir ao mercado na quarta',
        userId: 1
      },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};