import express from 'express'
import { messageController } from '../controllers/messageController.js'
import { authenticateToken } from '../middlewares/authenticateToken.js'

const Router = express.Router()

Router.route('/random').get(authenticateToken, messageController.getRandomMessage)
Router.route('/').get(authenticateToken, messageController.getAllMessages)
Router.route('/:id').get(authenticateToken, messageController.getMessageById)

Router.route('/').post(authenticateToken, messageController.createMessage)
Router.route('/:id').put(authenticateToken, messageController.updateMessage)
Router.route('/:id').delete(authenticateToken, messageController.deleteMessage)

export const messageRoute = Router
