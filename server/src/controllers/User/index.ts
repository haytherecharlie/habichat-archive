import { path } from 'ramda'
import { Request, Response } from 'express'
import Notification from 'services/Notification'
import UserModel from 'services/Mongo/UserModel'
import VerificationModel from 'services/Mongo/VerificationModel'

class User {
  public signin = async (req: Request, res: Response) => {
    try {
      const email = path(['email'])(req.body)
      const user = await UserModel.create(email)
      const { code } = await VerificationModel.create(user._id, email)
      Notification.sendVerificationEmail(email, code)
      return res.status(200).json({ message: 'Verification email sent', data: user })
    } catch (err) {
      console.log('CREATE USER ERROR: ', err.message)
      return res.status(400).json({ message: 'Error saving user to database', data: err.message })
    }
  }

  public verify = async (req: Request, res: Response) => {
    try {
      const { email, code } = req.body

      const verification = VerificationModel.read({ email })
      if (verification.code === code) {
        const user = await UserModel.read({ _id })
        if(user) {
          await VerificationModel.delete(_id)
          return res.status(200).json({ message: 'User verified', data: user })
        }
      }
      return res.status(401).json({ message: 'Invalid verification email or code', data: user })
    } catch (err) {
      return res.status(400).json({ message: 'Error verifying user', data: err.message })
    }
  }
}

export default new User()
