import { Router } from 'express'
import * as message from 'src/controllers/message'

const routes = Router()

routes.get('/', (req, res) => res.sendStatus(200))
routes.post('/message', message.post)
routes.get('/messages', message.get)
routes.get('/message/stream', message.stream)

export default routes
