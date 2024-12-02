import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSuRlo8gUmIPIFOwvNB1JsnhcPeix8AaM",
    authDomain: "fluke-vue-vite-ts-vuetify.firebaseapp.com",
    projectId: "fluke-vue-vite-ts-vuetify",
    storageBucket: "fluke-vue-vite-ts-vuetify.firebasestorage.app",
    messagingSenderId: "88309892349",
    appId: "1:88309892349:web:ad3796efddbdd366aaea94"
  }

  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage()
  const db = firebase.firestore()

  export { storage, db}