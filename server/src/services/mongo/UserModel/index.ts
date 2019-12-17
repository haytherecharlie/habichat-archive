import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

class UserModel {
  private Model = model('user', new Schema({
    community: { type: Schema.Types.ObjectId, required: false },
    email: { type: String, required: true, unique: true },
    interests: { type: [String], required: false },
    name: { type: String, required: false },
    picture: { type: String, required: false },
    statusCd: { type: String, enum: ['A', 'C', 'P', 'D'], required: true }
  }, { collection: 'users', timestamps: true }).plugin(validator))

  public create = async (email: String) => {
    try {
      const user = await this.read(email)
      if (user) return user
      const newUser = new this.Model({ email, statusCd: 'P' })
      return await newUser.save()
    } catch (err) {
      throw Error(err.message)
    }
  }

  private read = async ({ _id, email }) => {
    try {
      return _id ? await this.Model.findById(_id) : await this.Model.findOne({ email })
    } catch (err) {
      throw Error(err.message)
    }
  }

  private update = () => {}

  private delete = () => {}
}

export default new UserModel()
