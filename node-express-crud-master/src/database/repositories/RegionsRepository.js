const Car = require('../models').car

class carRepository {
    async getAll(fields = undefined) {
        return await Car.findAll({attributes: fields})
    }

    async getOne(id) {
        return await Car.findByPk(id)
    }

    async create( car) {
        return await Region.create(car)
    }

    async update(id, car) {
        const existingCar = await Car.findByPk(id)
        if (existingCar) {
            return await existingCar.update(car);
        }
        return null;
    }

    async delete(id) {
        const deletedCar = await Car.destroy({
            where: { id: id }
        })
        if (deletedCar) {
            return {};
        }
        return null;
    }

    async getAllOfCar(id_typeId, fields = undefined) {
        return await Car.findAll({
            where: { id_typeId: id_typeId },
            attributes: fields
        })
    }
}

module.exports = new carRepository()