'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      games.belongsTo(models.Categories,{
        foreignKey:'category_id1'
      }); 
      games.belongsTo(models.Categories,{
        foreignKey:'category_id2'
      }); 
      games.belongsTo(models.Categories,{
        foreignKey:'category_id3'
      }); 
      games.belongsTo(models.Categories,{
        foreignKey:'category_id4'
      }); 
      games.belongsTo(models.Categories,{
        foreignKey:'category_id5'
      }); 
      games.belongsTo(models.Categories,{
        foreignKey:'category_id6'
      }); 
      games.belongsTo(models.Categories,{
        foreignKey:'category_id7'
      }); 
    }
  }
  games.init({
    category_id1: DataTypes.INTEGER,
    category_id2: DataTypes.INTEGER,
    category_id3: DataTypes.INTEGER,
    category_id4: DataTypes.INTEGER,
    category_id5: DataTypes.INTEGER,
    category_id6: DataTypes.INTEGER,
    category_id7: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'games',
  });
  return games;
};