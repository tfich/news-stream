export const validCategories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
]

export interface INewsAPIResponse {
  status: string
  totalResults: number
  articles: INewsAPIArticle[]
}

interface INewsAPIArticle {
  source: INewsAPISource
  author: null | string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: Date
  content: string
}

interface INewsAPISource {
  id: null
  name: string
}


export type TNewsApiCategory =
  'business' |
  'entertainment' |
  'general' |
  'health' |
  'science'|
  'sports' |
  'technology'

export type TNewsApiCountry = 
  'ae' |
  'ar' |
  'at' |
  'au' |
  'be' |
  'bg' |
  'br' |
  'ca' |
  'ch' |
  'cn' |
  'co' |
  'cu' |
  'cz' |
  'de' |
  'eg' |
  'fr' |
  'gb' |
  'gr' |
  'hk' |
  'hu' |
  'id' |
  'ie' |
  'il' |
  'in' |
  'it' |
  'jp' |
  'kr' |
  'lt' |
  'lv' |
  'ma' |
  'mx' |
  'my' |
  'ng' |
  'nl' |
  'no' |
  'nz' |
  'ph' |
  'pl' |
  'pt' |
  'ro' |
  'rs' |
  'ru' |
  'sa' |
  'se' |
  'sg' |
  'si' |
  'sk' |
  'th' |
  'tr' |
  'tw' |
  'ua' |
  'us' |
  've' |
  'za'