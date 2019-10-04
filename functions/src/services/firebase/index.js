import { initializeApp, auth, firestore } from 'firebase-admin'

initializeApp()
const fb = auth()
const db = firestore()

export const signCustomToken = async (email) => {
  const token = await fb.createCustomToken(email).catch((err) => {
    throw `Error creating custom token ${token}`
  })
  return token
}
