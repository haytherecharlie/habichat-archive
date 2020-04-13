import { model } from 'mongoose'
import userSchema from 'lib/mongo/models/schemas/user/user-schema'

export default model('users', userSchema)
