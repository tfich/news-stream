require('dotenv').config()
import mongoose, { ConnectionOptions } from 'mongoose'
import cookieParser from 'cookie-parser'
import envalid, { str } from 'envalid'
import express from 'express'
import signale from 'signale'
import path from 'path'

envalid.cleanEnv(process.env, {
  MONGO_URI: str(),
  NEWS_API_KEY: str()
})

const app = express()

const mongoConfig: ConnectionOptions = { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }
mongoose.connect(process.env.MONGO_URI!, mongoConfig)
  .then(() => { signale.start('Successfully connected to mongo!') })

// database

// {
//   phone: dsafaw,
//   categories: [
//     'sports',
//     'tech'
//   ],
//   location: 'cali'
// }