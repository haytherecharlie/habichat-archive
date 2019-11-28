import { Request, Response } from 'express'
import CommunityModel from 'src/services/mongo/Community'
import { newCommunityEvent } from 'src/constants'
import SSE from 'src/utils/sse'

type newBody = {
  name: string | undefined
  founder: string | undefined
  slug: string | undefined
}

type multipleQuery = {
  limit: string | undefined
}

class Community {
  // Post a new community.
  public new = async (req: Request, res: Response) => {
    try {
      const { name, founder, slug }: newBody = req.body
      const created = new Date().getTime()
      const community = new CommunityModel({ created, name, founder, slug })
      await Promise.all([community.save(), SSE.publish(newCommunityEvent, community)])
      return res.status(200).json({ message: 'Community saved to database.', data: community })
    } catch (err) {
      console.log(err)
      return res.status(500).json({ message: 'Error creating community.', data: err })
    }
  }

  // Get multiple communities.
  public multiple = async (req: Request, res: Response) => {
    try {
      const { limit = '50' }: multipleQuery = req.query
      const communities = await CommunityModel.find().limit(parseInt(limit, 10))
      return res.status(200).json({ message: 'Communites fetched', data: communities })
    } catch (err) {
      console.log('GET COMMUNIITES ERROR: ', err)
      return res.status(500).json({ message: 'Error fetching communities.', data: err })
    }
  }

  // Stream communities.
  public stream = (req: Request, res: Response) => {
    return SSE.subscribe(req, res, newCommunityEvent)
  }
}

export default new Community()
