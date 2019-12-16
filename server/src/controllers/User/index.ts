import { path } from 'ramda'
import { Request, Response } from 'express'
import UserModel from 'services/Mongo/UserModel'
import VerificationModel from 'services/Mongo/VerificationModel'

class User {
  public create = async (req: Request, res: Response) => {
    try {
      const email = path(['email'])(req.body)
      await Promise.all([UserModel.create(email), VerificationModel.create(email)])
      return res.status(200).json({ message: 'User saved to the database', data: email })
    } catch (err) {
      console.log('CREATE USER ERROR: ', err.message)
      return res.status(400).json({ message: 'Error saving user to database', data: err })
    }
  }
}

export default new User()
