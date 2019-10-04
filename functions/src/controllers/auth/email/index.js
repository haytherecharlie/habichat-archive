import { https } from 'firebase-functions'
import { auth } from 'services/firebase'

const helloWorld = https.onRequest(async (req, res) => {
  res.send(req.query)
  // const token = await auth.createCustomToken(email).catch((err) => {
  //   throw `Error creating custom token ${token}`
  // })
  // res.status(200).send(token)
})

export default helloWorld
