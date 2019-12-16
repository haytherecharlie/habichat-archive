import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

class VerificationModel {
  private Model = model('verification', new Schema({
    code: { type: String, required: true },
    email: { type: String, required: true, unique: true }
  }, { collection: 'verifications', timestamps: true }).plugin(validator))

  private generateCode = () => {
    const digit = () => Math.floor(Math.random() * 10)
    return `${digit()}${digit()}${digit()}${digit()}`
  }

  public create = async (email: String) => {
    try {
      const code = this.generateCode()
      const newVerification = new this.Model({ email, code })
      return await newVerification.save()
    } catch(err) {
      throw Error(err.message)
    }
  }

  private read = () => {}

  private update = () => {}

  private delete = () => {}

}

export default new VerificationModel()
