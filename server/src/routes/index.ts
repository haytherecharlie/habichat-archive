import { Router } from 'express'
import community from 'src/controllers/community'
import communites from 'src/controllers/communities'
import message from 'src/controllers/message'
import messages from 'src/controllers/messages'

const routes = Router()

routes.post('/community', community.POST)
routes.get('/communities/stream', communites.SUBSCRIBE)
routes.get('/communities/fetch/:limit', communites.GET)
routes.post('/message', message.POST)
routes.get('/messages/stream/:community', messages.SUBSCRIBE)
routes.get('/messages/fetch/:community/:limit', messages.GET)

export default routes
