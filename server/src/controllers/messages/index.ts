import { Request, Response } from 'express'
import MessageModel from 'src/services/mongo/Message'
import SSE from 'src/utils/sse'
import { newMessageEvent } from 'src/constants'

class Messages {
  public GET = async (req: Request, res: Response) => {
    try {
      const { limit = '50', community } = req.params
      const messages = await MessageModel.find({ community }).limit(parseInt(limit, 10))
      console.log('these are the messages', messages)
      return res.status(200).json({ message: 'Messages fetched', data: messages })
    } catch (err) {
      console.log('GET MESSAGES ERROR: ', err)
      return res.status(500).json({ message: 'Error fetching messages.', data: err })
    }
  }

  public SUBSCRIBE = (req: Request, res: Response) => {
    const { community } = req.params
    return SSE.subscribe(req, res, `${community}-${newMessageEvent}`)
  }
}

export default new Messages()
