import firebase from "firebase"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyDVDkrbolTerjm1iDOItXj7ueOnPA7xGaw",
    authDomain: "reactnative-688b7.firebaseapp.com",
    projectId: "reactnative-688b7",
    storageBucket: "reactnative-688b7.appspot.com",
    messagingSenderId: "917486679648",
    appId: "1:917486679648:web:3022ca074171f879bc3505"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.firestore()
  export default database