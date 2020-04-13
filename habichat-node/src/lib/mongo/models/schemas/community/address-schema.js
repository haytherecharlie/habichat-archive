import { Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const addressSchema = new Schema({
  name: { type: String, required: true, unique: true, uniqueCaseInsensitive: true },
  unit: { type: String, required: false },
  number: { type: String, required: false },
  street: { type: String, required: true },
  city: { type: String, required: true },
  region: { type: String, required: true },
  country: { type: String, required: true },
  postcode: { type: String, required: false },
  passphrase: { type: String, required: true },
  coordinates: { type: [Number], required: true, unique: true }
})

addressSchema.plugin(validator)
export default addressSchema
