import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const User = model('user', new Schema({
  community: { type: Schema.Types.ObjectId, required: false },
  email: { type: String, required: true },
  name: { type: String, required: false },
  picture: { type: String, required: false },
  interests: { type: [String], required: false }
}, { collection: 'users', timestamps: true }).plugin(validator))

export default User
