const brandsRepository = require('../../database/repositories/LocationsRepository')

class brandsService {
    async getAll(fields = undefined) {
        return await brandsRepository.getAll(fields)
    }

    async getOne(id) {
        return await brandsRepository.getOne(id)
    }

    async create(car) {
        return await brandsRepository.create(car)
    }

    async update(id, car) {
        const existingBrand = await brandsRepository.getOne(id)
        if (existingBrand) {
            return await existingBrand.update(car);
        }
        return null;
    }

    async delete(id) {
        return await brandsRepository.delete(id)
    }
}

module.exports = new brandsService()