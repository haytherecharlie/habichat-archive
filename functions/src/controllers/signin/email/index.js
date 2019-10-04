import { https } from 'firebase-functions'
import { signCustomToken } from 'services/firebase'

const helloWorld = https.onRequest((request, response) => {
  response.send('shoot from Firebase!')
})

export default helloWorld
