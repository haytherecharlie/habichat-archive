import { Schema } from 'mongoose'
import addressSchema from 'lib/mongo/models/schemas/community/address-schema'
import neighborSchema from 'lib/mongo/models/schemas/community/neighbor-schema'
import postSchema from 'lib/mongo/models/schemas/community/post/post-schema'
import validator from 'mongoose-unique-validator'

const communitySchema = new Schema({
  address: { type: addressSchema, required: true },
  neighbors: { type: [neighborSchema], required: true },
  posts: { type: [postSchema], required: true }
})

communitySchema.plugin(validator)
export default communitySchema
