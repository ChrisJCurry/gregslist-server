import { dbContext } from "../db/DbContext"


class CarsService {

    async find (query = {}) {
        return await dbContext.Cars.find(query);
    }

    async findById(id) {
        const car = await dbContext.Cars.findById(id)
        if(!car) {
            throw new Error("Invalid Id");
        }

        return car;
    }

    async edit(id, body) {
        return await dbContext.Cars.findByIdAndUpdate(id, body, {new: true})
    }
    async create (newCar) {
        return await dbContext.Cars.create(newCar)
    }

    async delete(id) {
        return dbContext.Cars.findByIdAndDelete(id)
    }
}

export const carsService = new CarsService()