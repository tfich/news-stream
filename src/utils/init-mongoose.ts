require('dotenv').config()
import mongoose, { ConnectionOptions } from 'mongoose'
import signale from 'signale'

export async function initMongoose() {
  const mongoConfig: ConnectionOptions = { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }
  await mongoose.connect(process.env.MONGO_URI!, mongoConfig)
    .then(() => { signale.start('Successfully connected to mongo!') })
}