import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

 
const firebaseConfig = {
  apiKey: "AIzaSyDyDkmh3BF0nK7nMszJN4BvkqNiUPHisTg",
  authDomain: "desafio-3---compass-uol.firebaseapp.com",
  projectId: "desafio-3---compass-uol",
  storageBucket: "desafio-3---compass-uol.firebasestorage.app",
  messagingSenderId: "530849331446",
  appId: "1:530849331446:web:6c8469ea5468ab11c514d7",
  measurementId: "G-X9RPZT82WX"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
