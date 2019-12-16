import { path } from 'ramda'
import { Request, Response } from 'express'
import UserModel from 'services/Mongo/User'

class User {
  public create = async (req: Request, res: Response) => {
    try {
      const email = path(['email'])(req.body)
      return res.status(200).json({ message: 'User saved to the database', data: {} })
    } catch (err) {
      console.log('CREATE USER ERROR: ', err)
      return res.status(500).json({ message: 'Error saving user to database', data: err })
    }
  }
}

export default new User()
