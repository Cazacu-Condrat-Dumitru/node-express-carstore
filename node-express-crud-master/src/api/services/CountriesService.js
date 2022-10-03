const carsRepository = require('../../database/repositories/CountriesRepository')
const carRepository = require('../../database/repositories/RegionsRepository')
const brandsRepository = require('../../database/repositories/LocationsRepository')

class carsService {
    async getAll(fields = undefined) {
        return await carsRepository.getAll(fields)
    }

    async getOne(id) {
        return await carsRepository.getOne(id)
    }

    async create(cars) {
        return await carsRepository.create(cars)
    }

    async update(id, cars) {
        const existingCountry = await CountriesRepository.getOne(id)
        if (existingCountry) {
            return await existingCountry.update(cars);
        }
        return null;
    }

    async delete(id) {
        return await carsRepository.delete(id)
    }

    async getcar(carId, fields) {
        return await RegionsRepository.getAllOfcar(carId, fields);
    }

    async getbrands(carId, fields) {
        return await carRepository.getAllOfcars(carId, fields);
    }
}

module.exports = new carsService()