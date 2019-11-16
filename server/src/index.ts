import 'module-alias/register'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import parser from 'body-parser'
import mongodb from 'src/services/mongo'
// import config from 'config'
// import authorizeRequest from 'middleware/authorize-request'
// import router from 'routes/router'

const app = express()
const port = 8080

// mongodb.start()
app.use(cors())
app.use(parser.json({ type: 'application/json' }))
app.use(morgan('dev'))
// app.use(authorizeRequest)
// app.use(router)

app.listen(port, () => console.log(`Habichat Server: http://localhost:${port}`))