import 'module-alias/register'
import 'src/services/mongo'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import parser from 'body-parser'
import routes from 'src/routes'

export const app = express()
export const port = 4000

app.use(cors())
app.use(parser.json({ type: 'application/json' }))
app.use(morgan('dev'))
app.use(routes)

app.listen(port, () => console.log(`Habichat Server: http://localhost:${port}`))
