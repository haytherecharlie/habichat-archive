import { Request, Response } from 'express'
import CommunityModel from 'src/services/mongo/Community'
import { newCommunityEvent } from 'src/constants'
import SSE from 'src/utils/sse'

class Community {
  POST = async (req: Request, res: Response) => {
    try {
      const { name, founder, slug } = req.body
      const created = new Date().getTime()
      const community = new CommunityModel({ created, name, founder, slug })
      await Promise.all([community.save(), SSE.publish(newCommunityEvent, community)])
      return res.status(200).json({ message: 'Community saved to database.', data: community })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Error creating community.', data: err })
    }
  }
}

export default new Community()
