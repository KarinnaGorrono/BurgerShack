import { generateId } from '../utils/generateId'
import { FakeDb } from '../db/FakeDB'
import { BadRequest } from '../utils/Errors'

class BurgersService {
    async getAll() {
        return FakeDb.burgers
    }


    async createBurger(burgerData) {
        burgerData.id = FakeDb.burgers.length.toString()
        await FakeDb.burgers.push(burgerData)
        return burgerData
    }

    async editBurger(id, updatedBurger) {
        const burgerIndex = await FakeDb.burgers.findIndex(b => b.id === id)
        if (burgerIndex === -1) { throw new BadRequest("there's no burger with this ID") }
        FakeDb.burgers.splice(burgerIndex, 1, updatedBurger)
        return updatedBurger
    }

    async removeBurger(id) {
        const burgerIndex = await FakeDb.burgers.findIndex(b => b.id === id)
        if (burgerIndex === -1) { throw new BadRequest("there's no burger with this ID") }
        FakeDb.burgers.splice(burgerIndex, 1)
        return 'Burger Removed'
    }

}

export const burgersService = new BurgersService()


