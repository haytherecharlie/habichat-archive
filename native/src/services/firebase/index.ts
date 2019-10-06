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

const db = app.firestore()
const auth = app.auth()

const refs = {
  account: db.collection('users').doc('3EgYN5H9lXCXffC495Nc'),
  community: db.collection('communities').doc('IBBctiYxdd4n7tAeCevD'),
  members: db.collection('communities').doc('IBBctiYxdd4n7tAeCevD').collection('members'),
  posts: db.collection('communities').doc('IBBctiYxdd4n7tAeCevD').collection('posts'),
}

export const unsubscribe = {
  account: undefined,
  community: undefined,
  members: undefined,
  posts: undefined,
}

export const authListener = (ref, callback) => {
  unsubscribe[ref] = auth.onAuthStateChanged((user) => user ? callback(user) : callback(false))
}

export const documentListener = (ref, callback) => {
  unsubscribe[ref] = refs[ref].onSnapshot((doc) => callback({ id: doc.id, ...doc.data() }))
}

export const collectionListener = (ref, callback) => {
  unsubscribe[ref] = refs[ref].onSnapshot((snapshot) => {
    const array = []
    snapshot.forEach((doc) => array.push({ id: doc.id, ...doc.data() }))
    callback(array)
  })
}