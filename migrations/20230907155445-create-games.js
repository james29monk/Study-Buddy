'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id1: {
        type: Sequelize.INTEGER,
        references:{
          model:'Categories',
          key:'id'
        }, allowNull: false
      },
      category_id2: {
        type: Sequelize.INTEGER,
        references:{
          model:'Categories',
          key:'id'
        }, allowNull: false
      },
      category_id3: {
        type: Sequelize.INTEGER,
        references:{
          model:'Categories',
          key:'id'
        }, allowNull: false
      },
      category_id4: {
        type: Sequelize.INTEGER,
        references:{
          model:'Categories',
          key:'id'
        }, allowNull: false
      },
      category_id5: {
        type: Sequelize.INTEGER,
        references:{
          model:'Categories',
          key:'id'
        }, allowNull: false
      },
      category_id6: {
        type: Sequelize.INTEGER,
        references:{
          model:'Categories',
          key:'id'
        }, allowNull: false
      },
      category_id7: {
        type: Sequelize.INTEGER,
        references:{
          model:'Categories',
          key:'id'
        },
        allowNull: false
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
    await queryInterface.dropTable('games');
  }
};