import { https } from 'firebase-functions'
import express from 'express'
import authEmail from 'controllers/auth/email/'
import authVerify from 'controllers/auth/verify/'

const app = express()
app.get('/email/:email', authEmail)
app.get('/verify/:email/:code', authVerify)

export default https.onRequest(app)
