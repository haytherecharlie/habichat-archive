import { subscribeEvent } from 'src/utils/emitEvent'
import { newCommunityEvent } from 'src/constants'

const SUBSCRIBE = (req, res) => {
  return subscribeEvent(req, res, newCommunityEvent)
}

export default SUBSCRIBE
