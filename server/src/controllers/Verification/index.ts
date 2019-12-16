import { path } from 'ramda'
import { Request, Response } from 'express'
import VerificationModel from 'services/Mongo/Verification'

class Verification {
  public create = async (req: Request, res: Response) => {
    try {
      const community = path(['community'])(req.body)
      const email = path(['email'])(req.body)
      return res.status(200).json({ message: 'Verification saved to the database', data: {} })
    } catch (err) {
      console.log('CREATE VERIFICATION ERROR: ', err)
      return res.status(500).json({ message: 'Error saving verification to database', data: err })
    }
  }
}

export default new Verification()
