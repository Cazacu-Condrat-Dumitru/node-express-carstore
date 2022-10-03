'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class car_type extends Model {
        static associate(models) {
            car_type.hasMany(models.car)
        }
    }
    car_type.init(
        {
            id_type: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            type_name: {
                type: DataTypes.STRING(50)
            },
        },
        {
            sequelize,
            modelName: 'car_type'
        });
    return car_type;
};