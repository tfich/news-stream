import { NextFunction, Request, Response, Router }  from 'express'
import { WebhookClient } from 'dialogflow-fulfillment'

import { getUserByNumber, createUser, addUserCategories, removeUserCategories, deleteUserByNumber } from '../../controllers/user-controller'
import { getCountryFromCode, prettyArrayToString } from '../../utils'
import { validCategories } from '../../types'

export const dialogflowRouter = Router()

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
intentMap.set('ChangeInterests', handleChangeInterests)
intentMap.set('InterestResponse', handleInterestResponse)
intentMap.set('MyInterests', handleMyInterests)
intentMap.set('Unsubscribe', handleUnsubscribe)
intentMap.set('Fallback', handleFallback)

async function handleSubscribe(agent: any) {
  const number: string = agent.originalRequest.payload.data.From
  const user = await getUserByNumber(number)
  if (user) {
    agent.add(`You already have a subscription, silly. If you would like to change your interests, please respond with 'Change Interests'.`) 
  } else {
    const countryCode = number.substr(0, number.length-10).replace('+','')
    const countryInfo = getCountryFromCode(countryCode)
    await createUser(number, countryInfo.abbr)
    agent.add(`Great, I've registered you to receive ${countryInfo.name} related news. Specifically, what type of news are you interested in? Sports, Technology, Science, Business, etc.`)
  }
}

async function handleChangeInterests(agent: any) {
  const number: string = agent.originalRequest.payload.data.From
  const user = await getUserByNumber(number)
  if (user) {
    if (user.categories.length) {
      agent.add(`Your current interests are ${prettyArrayToString(user.categories)}. If you would like to add or remove one say 'Add/Remove <Interest>'.`)
    } else {
      agent.add(`You don't have any interests saved. If you would like to add one say 'Add <Interest>'.`)
    }
  } else {
    agent.add(`You don't have a subscription. Respond with 'Subscribe' to start one.`)
  }
}

async function handleInterestResponse(agent: any) {
  const number: string = agent.originalRequest.payload.data.From
  const user = await getUserByNumber(number)
  const query = agent.query.toLowerCase()
  if (user) {
    const categories = query.split(' ')
    .map((i: any) => i.replace(',', ''))
      .filter((c: any) => validCategories.includes(c))
    if (query.includes('remove')) {
      await removeUserCategories(number, categories)
      agent.add(`Ok. I've updated your interests list.`)
    } else {
      await addUserCategories(number, categories)
      agent.add(`Ok. I've updated your interests list.`)
    }
  } else {
    agent.add(`You don't have a subscription. Respond with 'Subscribe' to start one.`)
  }
}

async function handleMyInterests(agent: any) {
  const number: string = agent.originalRequest.payload.data.From
  const user = await getUserByNumber(number)
  if (user) {
    if (user.categories.length) {
      agent.add(`Your current interests are ${prettyArrayToString(user.categories)}.`)
    } else {
      agent.add(`You don't have any interests saved. If you would like to add one say 'Add <Interest>'.`)
    }
  } else {
    agent.add(`You don't have a subscription. Respond with 'Subscribe' to start one.`)
  }
}

async function handleUnsubscribe(agent: any) {
  const number: string = agent.originalRequest.payload.data.From
  const user = await getUserByNumber(number)
  if (user) {
    await deleteUserByNumber(number)
    agent.add(`Ok, I've unsubscribed you from News Stream. If you ever wish to subscribe again, please repsond with 'Subscribe'.`)
  } else {
    agent.add(`You don't have a subscription. Respond with 'Subscribe' to start one.`)
  }
}

async function handleFallback(agent: any) {
  const query = agent.query.toLowerCase()
  if (query.startsWith('start') || query.startsWith('stop') || query.startsWith('help')) {
    // no response because these messages are handled by twilio opt-out
    // throws 500 error since no response but nothing we can do about it and this will rarely ever happen ¯\_(ツ)_/¯
  } else {
    const number: string = agent.originalRequest.payload.data.From
    const user = await getUserByNumber(number)
    if (user) {
      agent.add(`I'm sorry, I don't understand. I understand phrases such as 'My Interests', 'Change Interests' and 'Unsubscribe'.`)
    } else {
      agent.add(`I'm sorry, I don't understand. If you would like to start a subscription please respond with 'Subscribe'.`)
    }
  }
}