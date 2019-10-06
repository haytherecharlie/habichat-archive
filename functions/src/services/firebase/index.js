import admin from 'firebase-admin'
import { key } from 'services/firebase/serviceAccount'

admin.initializeApp({
  credential: admin.credential.cert(key),
  databaseURL: 'https://habichat-75c78.firebaseio.com'
})

export const auth = admin.auth()
export const db = admin.firestore()

// USERS
export const getUserDocId = (email) =>
  db.collection('users').where('email', '==', email).limit(1).get()
    .then((snap) => snap.empty ? false : snap.docs[0].id)
    .catch((err) => { throw err })

export const setUserDoc = (userObj) =>
  db.collection('users').add(userObj)
    .then((doc) => doc.id)
    .catch((err) => { throw err })

// VERIFY
export const getVerifyDoc = (email) =>
  db.collection('verify').doc(email).get()
    .then((doc) => doc.data())
    .catch((err) => { throw err })

export const setVerifyDoc = (id, email, code) =>
  db.collection('verify').doc(email).set({ id, code })
    .catch((err) => { throw err })

export const deleteVerifyDoc = (email) =>
  db.collection('verify').doc(email).delete()
  .then(() => true)
  .catch((err) => { throw err })

// AUTH
export const getCustomToken = (uuid, options = {}) =>
  auth.createCustomToken(uuid, options)
    .then((token) => token)
    .catch((err) => { throw err })