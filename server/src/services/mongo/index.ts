import { connect } from 'mongoose'
import { config } from 'dotenv'

const startMongo = async () => {
  try {
    config()
    await connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true })
    return console.log('MongoDb Connected!')
  } catch (err) {
    return console.log('No MongoDb Running!')
  }
}

export default startMongo()