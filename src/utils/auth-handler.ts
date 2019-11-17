import { Request, Response, NextFunction } from 'express'

export async function checkDialogflowAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.token || req.cookies.token 
  if (token === process.env.DIALOGFLOW_API_KEY!) {
    return next()
  } else {
    return res.status(401).json()
  }
}