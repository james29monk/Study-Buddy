'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('games', [{
      category_id1: 1,
      category_id2: 2,
      category_id3: 3,
      category_id4: 4,
      category_id5: 5,
      category_id6: 6,
      category_id7: 7
     }], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
