import { https } from 'firebase-functions'

const helloWorld = https.onRequest((request, response) => {
  response.send('shoot from Firebase!')
})

export default helloWorld