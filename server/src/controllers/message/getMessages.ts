import { findLast50Messages } from 'src/services/mongo/messages'

const getMessages = async (req, res) => {
  try {
    const messages = await findLast50Messages()
    return res.status(200).json({ messages })
  } catch ({ code, message }) {
    return res.status(code).json({ message })
  }
}

export default getMessages
