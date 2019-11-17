import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const Community = model('community', new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  created: { type: Number, required: true },
  founder: { type: String, required: true }
}).plugin(validator))

export default Community
