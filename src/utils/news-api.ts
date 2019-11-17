import rp from 'request-promise'

import { TNewsApiCategory, TNewsApiCountry } from '../types'

const baseUrl = 'https://newsapi.org/v2'
const apiKey = process.env.NEWS_API_KEY!

export class NewsApi {
  public static async pullNews(country: TNewsApiCountry, category: TNewsApiCategory) {
    const options: rp.Options = {
      url: `${baseUrl}/top-headlines`,
      qs: { category, apiKey,  },
      json: true
    }
    return await rp(options)
  }
}