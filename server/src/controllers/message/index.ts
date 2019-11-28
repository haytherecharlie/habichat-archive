import { pathOr } from 'ramda'
import { Request, Response } from 'express'
import { newMessageEvent } from 'src/constants'
import MessageModel from 'src/services/mongo/Message'
import SSE from 'src/utils/sse'

type newBody = {
  message: string | undefined
  author: string | undefined
  timestamp: number | undefined
  community: string | undefined
}

type multipleQuery = {
  limit: string | undefined
  community: string | undefined
}

type streamQuery = {
  community: string | undefined
}

class Message {
  // Post a new message to community.
  public new = async (req: Request, res: Response) => {
    try {
      const { message, author, timestamp, community }: newBody = req.body
      const newMessage = new MessageModel({ timestamp, author, message, community })
      await Promise.all([newMessage.save(), SSE.publish(`${community}-${newMessageEvent}`, newMessage)])
      return res.status(200).json({ message: 'Message saved to database', data: newMessage })
    } catch (err) {
      console.log('POST MESSAGES ERROR: ', err)
      return res.status(500).json({ message: 'Error saving message to database', data: err })
    }
  }

  // Get multiple messages from community.
  public multiple = async (req: Request, res: Response) => {
    try {
      const { limit = '50', community }: multipleQuery = req.query
      const messages = await MessageModel.find({ community }).limit(parseInt(limit, 10))
      return res.status(200).json({ message: 'Messages fetched', data: messages })
    } catch (err) {
      console.log('GET MESSAGES ERROR: ', err)
      return res.status(500).json({ message: 'Error fetching messages.', data: err })
    }
  }

  // Stream messages from community.
  public stream = (req: Request, res: Response) => {
    const { community }: streamQuery = req.query
    return SSE.subscribe(req, res, `${community}-${newMessageEvent}`)
  }
}

export default new Message()
