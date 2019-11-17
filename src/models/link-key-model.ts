import { model, Schema, Document } from 'mongoose'

import { TNewsApiCategory, TNewsApiCountry } from '../types'

export interface LinkKey extends Document {
  number: string,
  key: string,
  link: string
}

const LinkKeySchema = new Schema({
  number: String,
  key: String,
  link: String
})

export const LinkKeyModel = model<LinkKey>('LinkKey', LinkKeySchema)