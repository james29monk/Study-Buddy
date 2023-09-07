'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Categories', [
        {
       title: 'Geography'
      },
      {
        title: 'Science'
      },
      {
        title: 'English and Language Arts'
      },
      {
        title: 'Social Studies'
      },
      {
        title: 'Math'
      },
      {
        title: 'History'
      },
      {
        title: 'Tricky Questions'
      }
    ], {});
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
