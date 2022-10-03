'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class brand extends Model {
    static associate(models) {
      brand.belongsTo(models.car)
    }
  }
  brand.init(
    {
      name: DataTypes.STRING(50),
      id_carId: DataTypes.INTEGER
    }, 
    {
      sequelize,
      modelName: 'brand'
    }
  );
  return brand;
};