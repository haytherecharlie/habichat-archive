import 'module-alias/register'
import 'services/Mongo'
import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import parser from 'body-parser'
import { routes } from 'routes/Router'

class HabichatServer {
  app: Application = express()
  port: number = 4000

  constructor() {
    this.useMiddlewares()
    this.startApp()
  }

  useMiddlewares = () => {
    this.app.use(cors())
    this.app.use(parser.json())
    this.app.use(morgan('dev'))
    this.app.use(routes)
  }

  startApp = () => {
    this.app.listen(this.port, () => console.log(`Habichat Server: http://localhost:${this.port}`))
  }
}

export default new HabichatServer()
