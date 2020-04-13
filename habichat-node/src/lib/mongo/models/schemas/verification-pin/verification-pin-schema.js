import { Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const verificationPinSchema = new Schema({
  email: { type: String, required: true, unique: true },
  pin: { type: String, required: true }
})

verificationPinSchema.plugin(validator)
export default verificationPinSchema
