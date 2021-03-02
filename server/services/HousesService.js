import { dbContext } from "../db/DbContext"


class HousesService {

    async find (query = {}) {
        return await dbContext.Houses.find(query);
    }

    async findById(id) {
        const house = await dbContext.Houses.findById(id)
        if(!house) {
            throw new Error("Invalid Id");
        }

        return house;
    }

    async edit(id, body) {
        return await dbContext.Houses.findByIdAndUpdate(id, body, {new: true})
    }
    async create (newCar) {
        return await dbContext.Houses.create(newCar)
    }

    async delete(id) {
        return dbContext.Houses.findByIdAndDelete(id)
    }
}

export const housesService = new HousesService()