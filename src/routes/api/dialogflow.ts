import { NextFunction, Request, Response, Router }  from 'express'
import { WebhookClient } from 'dialogflow-fulfillment'

const dialogflowRouter = Router()

dialogflowRouter.post('/', async (request: Request, response: Response, next: NextFunction) => {
  try {
    const agent = new WebhookClient({ request, response })
    await agent.handleRequest(intentMap)
  } catch (err) {
    return next(err)
  }
})

const intentMap = new Map()
intentMap.set('Subscribe', handleSubscribe)
intentMap.set('Fallback', handleFallback)

function handleSubscribe(agent: any) {

}

function handleFallback(agent: any) {
  const query = agent.query.toLowerCase()
  if (query.startsWith('start') || query.startsWith('stop') || query.startsWith('help')) {
    // no response because these messages are handled by twilio opt-out
    // throws 500 error since no response but nothing we can do about it and this will rarely ever happen ¯\_(ツ)_/¯
  } else {
    agent.add(`I'm sorry, I don't understand. I understand phrases such as 'Subscribe', 'Change Region', 'Cancel Sub' and 'Update Billing'.`)
  }
}