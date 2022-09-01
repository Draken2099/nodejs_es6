import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { readdirSync } from 'fs'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
// app.use("/api", )

readdirSync("./routes").map((r) => {
    app.use("/api", require(`./routes/${r}`))
})

module.exports = app