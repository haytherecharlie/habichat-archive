import { Router } from 'express'
import Community from 'src/controllers/Community'
import Message from 'src/controllers/Message'

const routes = Router()

routes.get('/community/read/multiple', Community.multiple)
routes.get('/community/read/stream', Community.stream)
routes.post('/community/create/new', Community.new)

routes.get('/message/read/multiple', Message.multiple)
routes.get('/message/read/stream', Message.stream)
routes.post('/message/create/new', Message.new)

export default routes
