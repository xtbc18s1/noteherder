import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB9NOWvtiSapmeE6_FmYKnd8FmO9UoU_og",
  authDomain: "notes18s1afternoon.firebaseapp.com",
  databaseURL: "https://notes18s1afternoon.firebaseio.com",
  projectId: "notes18s1afternoon",
  storageBucket: "notes18s1afternoon.appspot.com",
  messagingSenderId: "933182586296"
}
const app = firebase.initializeApp(config)

export const githubProvider = new firebase.auth.GithubAuthProvider()
export const auth = firebase.auth()

export default Rebase.createClass(app.database())
