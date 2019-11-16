import Message from 'src/services/mongo/Message'

const GET = async (req, res) => {
  try {
    const { limit = '50' } = req.params
    console.log('these are the params', req.params)
    const messages = await Message.find().limit(parseInt(limit, 10))
    return res.status(200).json({ message: 'Messages fetched', data: messages })
  } catch (err) {
    console.log('GET MESSAGES ERROR: ', err)
    return res.status(500).json({ message: 'Error fetching latest messages.', data: err })
  }
}

export default GET
