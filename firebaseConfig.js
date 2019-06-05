import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyAo2l7cHn-kQz7NBFK2NadH6-0BvFP8oRM',
  authDomain: 'qizzes-5bc87.firebaseapp.com',
  databaseURL: 'https://qizzes-5bc87.firebaseio.com',
  projectId: 'qizzes-5bc87',
  storageBucket: 'qizzes-5bc87.appspot.com',
  messagingSenderId: '847948489503',
  appId: '1:847948489503:web:ca2184bfccc41fff',
}

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const firebaseAppAuth = firebaseApp.auth()
// const firebaseAppDb = firebaseApp.database()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
}

export { providers, firebaseAppAuth }
