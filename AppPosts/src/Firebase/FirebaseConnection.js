import firebase, { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Importar de acordo com cada projeto
const firebaseConfig = {
  apiKey: "AIzaSyCEbIgP72YMP3laY2jboTAnTqHURWtSsCs",
  authDomain: "cursoreactnativedeschamps.firebaseapp.com",
  projectId: "cursoreactnativedeschamps",
  storageBucket: "cursoreactnativedeschamps.appspot.com",
  messagingSenderId: "438009942677",
  appId: "1:438009942677:web:a5f602a7007cc1d696419c",
  measurementId: "G-8YHB6R8D9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

export default database;
