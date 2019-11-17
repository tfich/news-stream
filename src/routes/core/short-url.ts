import { NextFunction, Request, Response, Router }  from 'express'

import { getLinkFromKey } from '../../controllers/link-key-controller'

export const shortUrlRouter = Router()

shortUrlRouter.get('/:key', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const link = await getLinkFromKey(req.params.key)
    return res.redirect(link)
  } catch (err) {
    return next(err)
  }
})