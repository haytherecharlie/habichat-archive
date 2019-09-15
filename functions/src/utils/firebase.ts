import * as admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.cert(require('../config/service-account.json')),
  databaseURL: 'https://habichat-75c78.firebaseio.com'
})

const auth = admin.auth()
const firestore = admin.firestore()

export { auth, firestore }
