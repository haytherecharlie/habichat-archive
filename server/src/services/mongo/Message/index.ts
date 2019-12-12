import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const Message = model('message', new Schema({
  author: { type: String, required: true },
  community: { type: String, required: true },
  message: { type: String, required: true }
}, { collection: 'messages', timestamps: true }).plugin(validator))

export default Message
