import express from 'express'
import { messageRoute } from './messageRoutes.js'
import { userRoute } from './userRoutes.js'

const Router = express.Router()

// Check APIs v1/status
Router.get('/status', (req, res) => {
  res.status(200).json({ message: 'APIs V1 are ready to use.' })
})

// Message APIs
Router.use('/messages', messageRoute)

// users APIs
Router.use('/users', userRoute)

export const APIs_V1 = Router
