// const http = require('http')
import http from 'http'
import app from './app'
import connectDB from './config/database'
const server = http.createServer(app)

const port = 8000

server.listen(port, () => console.log(`Server is started and run on ${port}`))
connectDB()