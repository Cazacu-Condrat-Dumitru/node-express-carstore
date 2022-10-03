const car_type = require('../models').car_type

class carsRepository {
    async getAll(fields = undefined) {
        return await car_type.findAll({attributes: fields})
    }

    async getOne(id) {
        return await car_type.findByPk(id)
    }

    async create(car_type) {
        return await car_type.create(car_type)
    }

    async update(id, car_type) {
        const existingcar_type = await car_type.findByPk(id)
        if (existingcar_type) {
            return await existingcar_type.update(car_type);
        }
        return null;
    }

    async delete(id) {
        return await car_type.destroy({
            where: { id: id }
        })
    }
}

module.exports = new carsRepository()