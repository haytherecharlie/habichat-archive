import { publishMessage } from 'src/services/sse'
import Message from 'src/services/mongo/Message'

const POST = async (req, res) => {
  try {
    const { author, body } = req.body
    const message = new Message({ created: new Date().getTime(), author, body })
    await Promise.all([message.save(), publishMessage(body)])
    return res.status(200).json({ message: 'Message saved to database', data: message })
  } catch (err) {
    console.log('POST MESSAGES ERROR: ', err)
    return res.status(500).json({ message: 'Error saving message to database', data: err })
  }
}

export default POST
