import express from 'express'
import { messageController } from '../controllers/messageController.js'

const Router = express.Router()

Router.route('/random').get(messageController.getRandomMessage)
Router.route('/').get(messageController.getAllMessages)
Router.route('/:id').get(messageController.getMessageById)
Router.route('/').post(messageController.createMessage)
Router.route('/:id').delete(messageController.deleteMessage)

export const messageRoute = Router
