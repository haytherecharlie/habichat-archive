import { subscribeMessage } from 'src/services/sse'

const streamMessage = (req, res) => subscribeMessage(req, res)

export default streamMessage
