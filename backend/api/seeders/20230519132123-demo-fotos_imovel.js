'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fotos_imoveis', [
      {
        url:'https://1drv.ms/i/s!AvAmvar16TpjjjzYeUnW8VNiyFTs?e=PHOSPN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url:'https://1drv.ms/i/s!AvAmvar16Tpjjj1jWj3pYqsmZ-pL?e=ddsaOh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url:'https://1drv.ms/i/s!AvAmvar16Tpjjj4FOkwEU5zYtMSl?e=BpNPXC',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fotos_imoveis', null, {});
  }
};
