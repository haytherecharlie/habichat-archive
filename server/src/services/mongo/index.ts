import mongoose from 'mongoose'

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
      await mongoose.connect('mongodb://127.0.0.1/habichat', this.options)
      return console.log('MongoDb Connected!')
    } catch (err) {
      return console.log('No MongoDb Running!')
    }
  }
}

export default new Mongo()
