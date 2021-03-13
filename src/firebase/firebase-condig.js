  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'



  const  firebaseConfig = {
    apiKey: "AIzaSyA1OQhsDA2F9dSfLXVcyZIx0_utHZMGCm4",
    authDomain: "cursoreactapp-f37f2.firebaseapp.com",
    projectId: "cursoreactapp-f37f2",
    storageBucket: "cursoreactapp-f37f2.appspot.com",
    messagingSenderId: "781874692631",
    appId: "1:781874692631:web:4f3b27b31b9a6d8a139252",
    measurementId: "G-P8FVDBFB9H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase
  }