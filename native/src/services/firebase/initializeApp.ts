import fetch from 'cross-fetch'
import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

app.initializeApp({
  apiKey: 'AIzaSyDKNEY1lzsiDJOTRNHixbQQGzYquHMLCM4',
  authDomain: 'habichat-75c78.firebaseapp.com',
  databaseURL: 'https://habichat-75c78.firebaseio.com',
  projectId: 'habichat-75c78',
  storageBucket: 'habichat-75c78.appspot.com',
  messagingSenderId: '196965469083',
  appId: '1:196965469083:web:d5033f3280936b37f22f3e'
})

export const db = app.firestore()
export const auth = app.auth()