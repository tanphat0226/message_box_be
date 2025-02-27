import app from './src/app.js'

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed')
  })
})
