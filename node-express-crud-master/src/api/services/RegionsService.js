const carRepository = require('../../database/repositories/RegionsRepository')
const brandsRepository = require('../../database/repositories/LocationsRepository')

class carService {
    async getAll(fields = undefined) {
        return await carRepository.getAll(fields)
    }

    async getOne(id) {
        return await carRepository.getOne(id)
    }

    async create(car) {
        return await carRepository.create(car)
    }

    async update(id, car) {
        const existingcar = await carRepository.getOne(id)
        if (existingcar) {
            return await existingcar.update(car);
        }
        return null;
    }

    async delete(id) {
        return await carRepository.delete(id)
    }

    async getLocations(carId) {
        return await brandsRepository.getAllOfcar(carId)
    }
}

module.exports = new carService()