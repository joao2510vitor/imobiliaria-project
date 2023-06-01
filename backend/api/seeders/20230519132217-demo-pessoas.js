'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      {
        endereco_id: 1,
        nome: 'Mario Aparecido',
        cnpj_cpf: '48562031408',
        telefone: '',
        email: 'mario@gmail.com',
        rg_ie: '52402369-5',
        dta_nasc: new Date("1995-02-20"),
        sexo: 'M',
        celular: '18995207891',
        usuario: 'mario3294',
        hash: '$2y$04$67kMqcGgLyK.aIaWEzTzTeP66cUatc/tkcSwS/KlJzTWlA1USvxfW',
        dta_encerramento: null,
        nivel_acesso: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        endereco_id: 2,
        nome: 'Jacira Dantas',
        cnpj_cpf: '48202031460',
        telefone: '',
        email: 'jacira@gmail.com',
        rg_ie: '52204369-5',
        dta_nasc: new Date("1985-05-10"),
        sexo: 'F',
        celular: '18997208791',
        usuario: 'jacira3294123',
        hash: '$2y$04$67kMqcGgLyK.aIaWEzTzTeP66cUatc/tkcSwS/KlJzTWlA1USvxfW',
        dta_encerramento: null,
        nivel_acesso: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
