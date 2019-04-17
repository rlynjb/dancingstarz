import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: 'AIzaSyC3lIhe4mWkFy60rPY0xdj5xik2SGqviwg',
  authDomain: 'dancestarzcafe-4c077.firebaseapp.com',
  databaseURL: 'https://dancestarzcafe-4c077.firebaseio.com/',
  storageBucket: 'gs://dancestarzcafe-4c077.appspot.com/',
  projectId: 'dancestarzcafe-4c077'
}
firebase.initializeApp(config)

export default ({ app, router, store, Vue }) => {
  Vue.prototype.$db = firebase.database()
  Vue.prototype.$storage = firebase.storage()
  Vue.prototype.$firestore = firebase.firestore()
}

const db = firebase.database()
const storage = firebase.storage()
const firestore = firebase.firestore()

export {
  db,
  storage,
  firestore,
}