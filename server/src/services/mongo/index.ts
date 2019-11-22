import { connect } from 'mongoose'
import { config } from 'dotenv'

class Mongo {
  constructor() {
    this.startMongo()
  }

  private options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }

  startMongo = async () => {
    try {
      config()
      await connect(process.env.MONGO_URL, this.options)
      return console.log('MongoDb Connected!')
    } catch (err) {
      return console.log('No MongoDb Running!')
    }
  }
}

export default new Mongo()
