import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const Community = model('community', new Schema({
  founder: { type: String, required: true },
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  users: { type: Array, required: true, default: [] },
  messages: { type: Array, required: true, default: [] }
}, { collection: 'communities', timestamps: true }).plugin(validator)
)

export default Community
