import { Router } from 'express'
import path from 'path'

import { checkDialogflowAuth } from '../utils' 
import { dialogflowRouter } from './api/dialogflow'

export const apiRouter = Router()
apiRouter.use('/dialogflow', checkDialogflowAuth, dialogflowRouter)

export const coreRouter = Router()
coreRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})