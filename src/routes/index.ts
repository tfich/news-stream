import { Router } from 'express'
import path from 'path'

import { checkDialogflowAuth } from '../utils' 
import { dialogflowRouter } from './api/dialogflow'
import { shortUrlRouter } from './core/short-url'

export const apiRouter = Router()
apiRouter.use('/dialogflow', checkDialogflowAuth, dialogflowRouter)

export const coreRouter = Router()
coreRouter.use('/l', shortUrlRouter)
coreRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})