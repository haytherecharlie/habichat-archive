import { Router } from 'express'
// import * as message from 'src/controllers/message'
// import * as messages from 'src/controllers/messages'
import * as community from 'src/controllers/community'
import * as communites from 'src/controllers/communities'

const routes = Router()

routes.get('/', (req, res) => res.sendStatus(200))
// routes.post('/message', message.POST)
routes.post('/community', community.POST)
routes.get('/communities/stream', communites.SUBSCRIBE)
routes.get('/communities/:limit', communites.GET)
// routes.get('/messages/stream', messages.SUBSCRIBE)
// routes.get('/messages/:limit', messages.GET)

export default routes
