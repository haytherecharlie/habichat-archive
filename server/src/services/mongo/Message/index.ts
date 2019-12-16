import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const Message = model('message', new Schema({
  author: { type: Schema.Types.ObjectId, required: true },
  community: { type: Schema.Types.ObjectId, required: true },
  image: { type: String, required: false },
  link: { type: Object, required: false },
  text: { type: String, required: false }
}, { collection: 'messages', timestamps: true }).plugin(validator))

export default Message
