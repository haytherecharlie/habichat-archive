import { model } from 'mongoose'
import communitySchema from 'lib/mongo/models/schemas/community/community-schema'

export default model('communities', communitySchema)
