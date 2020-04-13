import { Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

const commentSchema = new Schema({
  timestamp: { type: Number, required: true },
  author: { type: String, required: true },
  type: { type: String, enum: ['text'], required: true },
  content: {
    body: { type: String, required: true }
  }
})

commentSchema.plugin(validator)
export default commentSchema
