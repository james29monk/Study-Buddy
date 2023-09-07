'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flashcards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      questions: {
        type: Sequelize.STRING
      },
      answers: {
        type: Sequelize.STRING
      },
      user_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'Users',
          key:'id'
        },
        allowNull:false

      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flashcards');
  }
};