import { subscribeMessages } from 'src/services/sse'

const SUBSCRIBE = (req, res) => subscribeMessages(req, res)

export default SUBSCRIBE
