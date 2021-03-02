import { dbContext } from "../db/DbContext"


class JobsService {

    async find (query = {}) {
        return await dbContext.Jobs.find(query);
    }

    async findById(id) {
        const car = await dbContext.Jobs.findById(id)
        if(!car) {
            throw new Error("Invalid Id");
        }

        return car;
    }

    async edit(id, body) {
        return await dbContext.Jobs.findByIdAndUpdate(id, body, {new: true})
    }
    async create (newCar) {
        return await dbContext.Jobs.create(newCar)
    }

    async delete(id) {
        return dbContext.Jobs.findByIdAndDelete(id)
    }
}

export const jobsService = new JobsService()