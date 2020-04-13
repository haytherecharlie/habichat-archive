import { Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, uniqueCaseInsensitive: true },
  firstname: { type: String, required: false, default: null },
  lastname: { type: String, required: false, default: null },
  picture: { type: String, required: false, default: null },
  interests: { type: [String], required: false, default: null },
  address: {
    unit: { type: String, required: false, default: null },
    number: { type: String, required: false, default: null },
    street: { type: String, required: false, default: null },
    city: { type: String, required: false, default: null },
    region: { type: String, required: false, default: null },
    country: { type: String, required: false, default: null },
    postcode: { type: String, required: false, default: null }
  },
  community: { type: String, required: false, default: null },
  userCreatedAt: { type: String, required: false, default: null },
  userLastLogin: { type: String, required: false, default: null }
})

userSchema.plugin(validator)
export default userSchema
