import express from 'express'
import { userController } from '../controllers/userController.js'

const Router = express.Router()

Router.route('/register').post(userController.register)
Router.route('/login').post(userController.login)
Router.route('/logout').delete(userController.logout)

export const userRoute = Router
