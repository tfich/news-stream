import { UserModel } from '../models/user-model'
import { TNewsApiCountry, TNewsApiCategory } from '../types'

export async function createUser(number: string, country: TNewsApiCountry) {
  return await UserModel.create({ number, country })
}

export async function addUserCategories(number: string, categories: TNewsApiCategory[]) {
  const user = await getUserByNumber(number)
  if (!user) { throw new Error(`Could not find user with number ${number}!`) }
  const newCategories = user.categories.concat(categories)
  return await UserModel.findOneAndUpdate({ number }, { categories: newCategories }).exec()
}

export async function getUserByNumber(number: string) {
  return await UserModel.findOne({ number }).exec()
}