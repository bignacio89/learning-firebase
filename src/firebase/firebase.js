// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRaITAt9MfXzehXYA8lKJQ1gNI2Os1oBY",
  authDomain: "dine-app-afffe.firebaseapp.com",
  projectId: "dine-app-afffe",
  storageBucket: "dine-app-afffe.appspot.com",
  messagingSenderId: "146032261321",
  appId: "1:146032261321:web:6a1ee7a98cf66086183518"
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
