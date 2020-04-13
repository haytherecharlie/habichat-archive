import 'app-module-path/register'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import parser from 'body-parser'
import * as mongodb from 'lib/mongo'
import config from 'config'
import authorizeRequest from 'middleware/authorize-request'
import router from 'routes/router'

const app = express()
const port = config.node.port || 8080

mongodb.start()
app.use(cors())
app.use(parser.json({ type: 'application/json' }))
app.use(morgan('dev'))
app.use(authorizeRequest)
app.use(router)

app.listen(port, () => console.log(`Server started on port: ${port}`))