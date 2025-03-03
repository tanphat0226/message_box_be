import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { APIs_V1 } from './routes/index.js'
import cookieParser from 'cookie-parser'
import { corsOptions } from './configs/cors.js'
import cors from 'cors'

const app = express()

// Xử lý CORS
app.use(cors(corsOptions))

// Init Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })) // Parses URL-encoded bodies
app.use(cookieParser())

app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// Init routes
app.use('/v1', APIs_V1)

// Handle error

export default app
