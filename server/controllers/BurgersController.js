import BaseController from '../utils/BaseController'
import { burgersService } from '../services/BurgersService'
import { logger } from '../utils/Logger'
export class BurgerController extends BaseController {
    constructor() {
        super('api/burgerShack')
        this.router
            .get('', this.getAllBurgers)
            .post('', this.createBurger)
            .put('/:burgerId', this.editBurger)
            .delete('/:burgerId/removed', this.removeBurger)
    }

    async getAllBurgers(req, res, next) {
        try {
            logger.log('Shack controller get all')
            const burgers = await burgersService.getAll()
            return res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(req, res, next) {
        try {
            const burgerData = req.body
            const burger = await burgersService.createBurger(burgerData)
            return res.send({ message: 'burger created', result: burger })
        } catch (error) {
            next(error)
        }
    }

    async editBurger(req, res, next) {
        try {
            const id = req.param.burgerId
            const updatedBurger = req.body
            updatedBurger.id = id
            const burger = await burgersService.editBurger(id, updatedBurger)
            return res.send({ message: 'burger edited', results: burger })
        } catch (error) {
            next(error)
        }
    }

    async removeBurger(req, res, next) {
        try {
            const id = req.params.burgerId
            const message = await burgersService.removeBurger(id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
}
