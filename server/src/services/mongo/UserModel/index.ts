import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

class UserModel {
  private Model = model('user', new Schema({
    community: { type: Schema.Types.ObjectId, required: false },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: false },
    picture: { type: String, required: false },
    interests: { type: [String], required: false }
  }, { collection: 'users', timestamps: true }).plugin(validator))

  public create = async (email: String) => {
    try {
      const newUser = new this.Model({ email })
      return await newUser.save()
    } catch(err) {
      throw Error(err.message)
    }
  }

  private read = () => {}

  private update = () => {}

  private delete = () => {}

}

export default new UserModel()
