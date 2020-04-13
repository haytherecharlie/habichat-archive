import mongoose from 'mongoose'
import config from 'config'

export const start = async () => {
  let error = false
  const { url, options } = config.mongoose
  await mongoose.connect(url, options).catch(() => error = true)
  return error ? console.log('No MongoDb Running!') : console.log('MongoDb Connected!')
}
