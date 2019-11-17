import rp from 'request-promise'
import moment from 'moment-timezone'

import { TNewsApiCategory, TNewsApiCountry, INewsAPIResponse } from '../types'
import { createLinkKey } from '../controllers/link-key-controller'

const baseUrl = 'https://newsapi.org/v2'
const apiKey = process.env.NEWS_API_KEY!

export class NewsApi {
  public static async getTopThreeNews(country: TNewsApiCountry, categories: TNewsApiCategory[], number: string) {
    const allNews = []
    for (const catergory of categories) {
      const stories = await this.pullNews(country, catergory)
      for (const story of stories.articles) {
        const { title, url } = story
        const short = await createLinkKey(number, url)
        allNews.push({ title, short: short.key })
      }
    }
    return this.sortArray(allNews.slice(0, 3)) as { title: string, short: string }[]
  }

  private static async pullNews(country: TNewsApiCountry, category: TNewsApiCategory): Promise<INewsAPIResponse> {
    const from = moment(new Date()).format('YYYY-MM-DD')
    const options: rp.Options = {
      url: `${baseUrl}/top-headlines`,
      qs: { category, apiKey, pageSize: 3, from, sortBy: 'publishedAt', country },
      json: true
    }
    return await rp(options)
  }

  private static sortArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }
}