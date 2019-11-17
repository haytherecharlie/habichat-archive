import Community from 'src/services/mongo/Community'
import { newCommunityEvent } from 'src/constants'
import { publishEvent } from 'src/utils/emitEvent'

const POST = async (req, res) => {
  try {
    const { name, founder, slug } = req.body
    const created = new Date().getTime()
    const community = new Community({ created, name, founder, slug })
    await Promise.all([community.save(), publishEvent(newCommunityEvent, community)])
    return res.status(200).json({ message: 'Community saved to database.', data: community })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Error creating community.', data: err })
  }
}

export default POST
