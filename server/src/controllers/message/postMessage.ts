import { saveMessage } from 'src/services/mongo/messages'
import { publishMessage } from 'src/services/sse'

const postMessage = async (req, res) => {
  try {
    const { text } = req.body
    const [message] = await Promise.all([saveMessage(text), publishMessage(text)])
    return res.status(200).json({ message })
  } catch ({ code, message }) {
    return res.status(code).json({ message })
  }
}

export default postMessage
