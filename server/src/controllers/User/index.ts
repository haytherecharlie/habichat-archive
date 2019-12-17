import { path } from 'ramda'
import { Request, Response } from 'express'
import Notification from 'services/Notification'
import UserModel from 'services/Mongo/UserModel'
import VerificationModel from 'services/Mongo/VerificationModel'

class User {
  public create = async (req: Request, res: Response) => {
    try {
      const email = path(['email'])(req.body)
      const user = await UserModel.create(email)
      const { code } = await VerificationModel.create(user._id, email)
      Notification.sendVerificationEmail(email, code)
      return res.status(200).json({ message: 'User saved to the database', data: user })
    } catch (err) {
      console.log('CREATE USER ERROR: ', err.message)
      return res.status(400).json({ message: 'Error saving user to database', data: err.message })
    }
  }
}

export default new User()
