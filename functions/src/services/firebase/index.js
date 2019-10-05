import admin from 'firebase-admin'
import generatePin from 'utils/four-digit-pin'
import { key } from 'services/firebase/serviceAccount'

admin.initializeApp({
  credential: admin.credential.cert(key),
  databaseURL: 'https://habichat-75c78.firebaseio.com'
})
export const auth = admin.auth()
export const db = admin.firestore()

export const createVerifyEntry = (email) =>
  db.collection('verify').doc(email).set({ pin: generatePin(), email })
    .catch((err) => { throw err })
