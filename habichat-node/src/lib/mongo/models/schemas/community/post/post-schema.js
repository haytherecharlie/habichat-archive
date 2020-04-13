import { Schema } from 'mongoose'
import commentSchema from 'lib/mongo/models/schemas/community/post/comment-schema'
import validator from 'mongoose-unique-validator'

const postSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  createdAt: { type: Number, required: true },
  updatedAt: { type: Number, required: true },
  author: { type: String, required: true },
  type: { type: String, enum: ['text'], required: true }, //'text', 'embed', 'link', 'image'
  content: {
    body: { type: String, required: true }
  },
  comments: { type: [commentSchema], required: false, default: [] },
  seenBy: { type: [String], required: false, default: [] }
})

postSchema.plugin(validator)
export default postSchema
