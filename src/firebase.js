import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAEaAeWcn4-ajg0y4ss1D8oo6xZ7MUpJZY",
    authDomain: "packit-d7ecc.firebaseapp.com",
    databaseURL: "https://packit-d7ecc.firebaseio.com",
    projectId: "packit-d7ecc",
    storageBucket: "packit-d7ecc.appspot.com",
    messagingSenderId: "564975539060",
    appId: "1:564975539060:web:16d9047486804c10019221",
    measurementId: "G-JWTDQRWV38"
  };

firebase.initializeApp(firebaseConfig)

export default firebase