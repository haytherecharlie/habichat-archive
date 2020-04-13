import { model } from 'mongoose'
import verificationPinSchema from 'lib/mongo/models/schemas/verification-pin/verification-pin-schema'

export default model('verificationPins', verificationPinSchema)
