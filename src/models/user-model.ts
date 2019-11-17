import { model, Schema, Document } from 'mongoose'

import { TNewsApiCategory, TNewsApiCountry } from '../types'

export interface User extends Document {
  number: string,
  country: TNewsApiCountry,
  categories: TNewsApiCategory[],
}

const UserSchema = new Schema({
  number: String,
  country: String,
  categories: { type: [String], default: null },
})

export const UserModel = model<User>('User', UserSchema)