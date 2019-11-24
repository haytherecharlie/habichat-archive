import { Request, Response } from 'express'
import MessageModel from 'src/services/mongo/Message'
import { newMessageEvent } from 'src/constants'
import SSE from 'src/utils/sse'

class Message {
  POST = async (req: Request, res: Response) => {
    try {
      const { message, author, timestamp, community } = req.body
      const newMessage = new MessageModel({ timestamp, author, message, community })
      await Promise.all([newMessage.save(), SSE.publish(`${community}-${newMessageEvent}`, newMessage)])
      return res.status(200).json({ message: 'Message saved to database', data: newMessage })
    } catch (err) {
      console.log('POST MESSAGES ERROR: ', err)
      return res.status(500).json({ message: 'Error saving message to database', data: err })
    }
  }
}

export default new Message()
