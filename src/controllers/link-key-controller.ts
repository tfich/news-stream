import short from 'short-uuid'

import { LinkKeyModel } from '../models/link-key-model'

export async function createLinkKey(number: string, link: string) {
  const key = short.generate().substring(0, 5)
  return await LinkKeyModel.create({ number, key, link })
}

export async function getLinkFromKey(key: string) {
  const linkKey = await LinkKeyModel.findOne({ key })
  if (!linkKey) { throw new Error(`Could not find link from key ${key}!`) }
  return linkKey.link
}

// createLinkKey('+14805892651', 'https://paste.tfich.dev')