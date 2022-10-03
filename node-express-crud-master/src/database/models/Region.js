'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    static associate(models) {
      car.belongsTo(models.car_type)
      car.hasMany(models.brand)
    }
  }
  car.init(
    {
      type_name: DataTypes.STRING(50),
      id_typeId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'car'
    }
  );
  return car;
};