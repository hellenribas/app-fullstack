module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        nome: 'fulano1',
        email: 'test@test.com',
        senha: 'a4c86edecc5aee06eff8fdeda69e0d04',
        telefone: '21999999999'
      },
      {
        id: 2,
        nome: 'fulano2',
        email: 'test2@test.com',
        senha: 'a4c86edecc5aee06eff8fdeda69e0d06',
        telefone: '21900000000'
      },
      {
        id: 3,
        nome: 'fulano3',
        email: 'test3@test.com',
        senha: 'a4c86edecc5aee06eff8fdeda69e0d07',
        telefone: '21912345678'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};