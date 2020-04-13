import { Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const neighborSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  picture: { type: String, required: true },
  interests: { type: [String], required: true }
})

neighborSchema.plugin(validator)
export default neighborSchema
