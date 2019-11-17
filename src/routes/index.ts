import { Router } from 'express'
import path from 'path'

export const apiRouter = Router()
// apiRouter.use('/dialogflow', checkBackendAuth, userRouter)

export const coreRouter = Router()
coreRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})