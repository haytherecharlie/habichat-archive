import { https } from 'firebase-functions'
import express from 'express'
import tokenMiddleware from 'middleware/token'
import authEmail from 'controllers/auth/email'
import authVerify from 'controllers/auth/verify'

const app = express()

app.use(tokenMiddleware)
app.post('/email', authEmail)
app.post('/verify', tokenMiddleware, authVerify)

export default https.onRequest(app)
