import moment from 'moment-timezone'

import { initMongoose, TwilioSender, NewsApi } from '../utils'
import { getAllUsers } from '../controllers/user-controller'

async function routineSener() {
  await initMongoose()
  const date = moment(new Date()).format('ll')
  const users = await getAllUsers()
  for (const user of users) {
    const topThree = await NewsApi.getTopThreeNews(user.country, user.categories, user.number)
    const formattedTxt = `[${date}]\n${topThree.map(a => `${a.title} - newsstream.us/l/${a.short}`).join('\n')}`
    await TwilioSender.sendPrivateMessage(formattedTxt, user.number)
  }
}

routineSener()