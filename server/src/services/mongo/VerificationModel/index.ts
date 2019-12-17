import { model, Schema } from 'mongoose'
import validator from 'mongoose-unique-validator'

class VerificationModel {
  private Model = model('verification', new Schema({
    code: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    user: { type: Schema.Types.ObjectId, required: true }
  }, { collection: 'verifications', timestamps: true }).plugin(validator))

  private generateCode = () => {
    const digit = () => Math.floor(Math.random() * 10)
    return `${digit()}${digit()}${digit()}${digit()}`
  }

  public create = async (user: String, email: String) => {
    try {
      let verificationCode = await this.read(email)
      if (!verificationCode) {
        const code = this.generateCode()
        verificationCode = new this.Model({ code, email, user })
        await verificationCode.save()
      }
      return verificationCode
    } catch(err) {
      console.log(err)
      throw Error(err.message)
    }
  }

  private read = async (email: String) => {
    try {
      return await this.Model.findOne({ email })
    } catch(err) {
      throw Error(err.message)
    }
  }

  private update = () => {}

  private delete = () => {}

}

export default new VerificationModel()
