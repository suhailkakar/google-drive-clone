import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyC2dom46kXi1HYN5oU4Q6MbfpuDnjC7qWI",
  authDomain: "drive-clone-f6d7c.firebaseapp.com",
  projectId: "drive-clone-f6d7c",
  storageBucket: "drive-clone-f6d7c.appspot.com",
  messagingSenderId: "431148479307",
  appId: "1:431148479307:web:94ea99865eb1f9cdc12ece"

})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
