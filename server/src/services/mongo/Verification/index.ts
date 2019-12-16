import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const Verification = model('verification', new Schema({
  code: { type: String, required: true },
  email: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true }
}, { collection: 'verifications', timestamps: true }).plugin(validator))

export default Verification
