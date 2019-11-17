require('dotenv').config()
import mongoose, { ConnectionOptions } from 'mongoose'
import cookieParser from 'cookie-parser'
import envalid, { str } from 'envalid'
import express from 'express'
import signale from 'signale'
import path from 'path'

import { apiRouter, coreRouter } from './routes'

envalid.cleanEnv(process.env, {
  MONGO_URI: str(),
  NEWS_API_KEY: str()
})

const app = express()

app.use( express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/api', apiRouter)
app.use('/', coreRouter)


const port = process.env.PORT || 3000
app.listen(port, () => {
  signale.start(`App listening on port ${port}`)
})

const mongoConfig: ConnectionOptions = { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }
mongoose.connect(process.env.MONGO_URI!, mongoConfig)
  .then(() => { signale.start('Successfully connected to mongo!') })