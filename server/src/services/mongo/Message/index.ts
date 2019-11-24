import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const Message = model('message', new Schema({
  timestamp: { type: Number, required: true },
  author: { type: String, required: true },
  message: { type: String, required: true },
  community: { type: String, required: true }
}).plugin(validator))

export default Message
