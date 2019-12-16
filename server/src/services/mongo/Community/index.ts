import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const Community = model('community', new Schema({
  leader: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  messages: { type: [Schema.Types.ObjectId], required: true, default: [] },
  users: { type: [Schema.Types.ObjectId], required: true, default: [] }
}, { collection: 'communities', timestamps: true }).plugin(validator)
)

export default Community
