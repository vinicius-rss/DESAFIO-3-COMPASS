import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey:"AIzaSyDyDkmh3BF0nK7nMszJN4BvkqNiUPHisTg",
  authDomain: "desafio-3---compass-uol.firebaseapp.com",
  projectId: "desafio-3---compass-uol",
  storageBucket: "desafio-3---compass-uol.appspot.com",
  messagingSenderId: "116583203377693694465",
  appId: "ed458a3e308ef32005d5159b2b4e41a69ba3947a",
};

 
 
const app = initializeApp(firebaseConfig);

 
export const auth = getAuth(app);
 
export const googleProvider = new GoogleAuthProvider();