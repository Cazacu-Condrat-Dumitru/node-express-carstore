const { Op } = require("sequelize");
const carRepository = require('./RegionsRepository')
const Location = require('../models').Location

class brandsRepository {
    async getAll(fields = undefined) {
        return await Location.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Location.findByPk(id)
    }

    async create(car) {
        return await Location.create(car)
    }

    async update(id, car) {
        const existingcars = await Location.findByPk(id)
        if (existingcars) {
            return await existingcars.update(car);
        }
        return null;
    }

    async delete(id) {
        return await car.destroy({
            where: { id: id }
        })
    }

    async getAllOfCar(id_carId, fields = undefined) {
        return await car.findAll({
            where: { id_carId: id_carId },
            attributes: fields
        })
    }

    async getAllOfCarType(id_carId, fields = undefined) {
        const car = await RegionsRepository.getAllOfCarType(id_carId, ['id'])
        
        return await car.findAll({
            where: {
                id_carId: { [Op.in]: car.map(car => car.id) }
            },
            attributes: fields
        })
    }
}

module.exports = new brandsRepository()