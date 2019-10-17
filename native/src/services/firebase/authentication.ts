import { auth } from './initializeApp'

export const signInWithToken = (token) =>
  auth.signInWithCustomToken(token).catch((err) => console.error(err.message))

export const signOut = () =>
  auth.signOut().catch((err) => console.log(err.message))
