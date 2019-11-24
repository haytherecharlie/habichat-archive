import { Request, Response } from 'express'
import CommunityModel from 'src/services/mongo/Community'
import SSE from 'src/utils/sse'
import { newCommunityEvent } from 'src/constants'

class Communities {
  public GET = async (req: Request, res: Response) => {
    try {
      const { limit = '50' } = req.params
      const communities = await CommunityModel.find().limit(parseInt(limit, 10))
      return res.status(200).json({ message: 'Communites fetched', data: communities })
    } catch (err) {
      console.log('GET COMMUNIITES ERROR: ', err)
      return res.status(500).json({ message: 'Error fetching communities.', data: err })
    }
  }

  public SUBSCRIBE = (req: Request, res: Response) => {
    return SSE.subscribe(req, res, newCommunityEvent)
  }
}

export default new Communities()
