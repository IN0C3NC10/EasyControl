import firebase from "firebase"
import "firebase/storage"

// ..para o projeto em questão alterar "const>var" e o "initialize" foi feito direto ao firebase
// ..não se esqueça de nas "Regras" do database, na linha 5, alterar o "false>true" [allow read, write: if tsrue;]
// ..configurações da base de dados obtidas nas configurações do database (Firestore)
var firebaseConfig = {
    apiKey: "AIzaSyDVDkrbolTerjm1iDOItXj7ueOnPA7xGaw",
    authDomain: "reactnative-688b7.firebaseapp.com",
    projectId: "reactnative-688b7",
    storageBucket: "reactnative-688b7.appspot.com",
    messagingSenderId: "917486679648",
    appId: "1:917486679648:web:3022ca074171f879bc3505"
  };
  
  // Inicialização do Firebase
  firebase.initializeApp(firebaseConfig);

  // const database = firebase.firestore()
  export default firebase