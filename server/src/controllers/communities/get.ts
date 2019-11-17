import Community from 'src/services/mongo/Community'

const GET = async (req, res) => {
  try {
    const { limit = '50' } = req.params
    const communities = await Community.find().limit(parseInt(limit, 10))
    return res.status(200).json({ message: 'Communites fetched', data: communities })
  } catch (err) {
    console.log('GET COMMUNIITES ERROR: ', err)
    return res.status(500).json({ message: 'Error fetching communities.', data: err })
  }
}

export default GET
