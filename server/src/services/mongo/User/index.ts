import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const User = model('user', new Schema({
  community: { type: String, required: false, default: null },
  email: { type: String, required: true, default: null },
  name: { type: String, required: false, default: null },
  picture: { type: String, required: true, default: null }
}, { collection: 'users', timestamps: true }).plugin(validator))

export default User
