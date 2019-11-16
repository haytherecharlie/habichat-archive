import { Router } from 'express'
import * as message from 'src/controllers/message'
import * as messages from 'src/controllers/messages'

const routes = Router()

routes.get('/', (req, res) => res.sendStatus(200))
routes.post('/message', message.POST)
routes.get('/messages/stream', messages.SUBSCRIBE)
routes.get('/messages/:limit', messages.GET)

export default routes
