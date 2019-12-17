import express from 'express'
import Community from 'controllers/Community'
import Message from 'controllers/Message'
import User from 'controllers/User'

class Router {
  router = express.Router()

  constructor() {
    this.setRoutes()
  }

  private setRoutes() {
    this.router.post('/user/signin', User.signin)
    // this.router.post('/user/verify', User.verify)

    this.router.get('/community/read', Community.read)
    this.router.get('/community/stream', Community.stream)
    this.router.post('/community/create', Community.create)

    this.router.get('/message/read', Message.read)
    this.router.get('/message/stream', Message.stream)
    this.router.post('/message/create', Message.create)
  }

  public get routes() {
    return this.router
  }
}

export const { routes } = new Router()
