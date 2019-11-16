import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const Message = model('message', new Schema({
  created: { type: Number, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true }
}).plugin(validator))

export default Message
