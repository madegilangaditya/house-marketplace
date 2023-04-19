// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeD3IaIe3Fh43Sqxd6raqoXyDRjaVIwHk",
  authDomain: "house-marketplace-3897f.firebaseapp.com",
  projectId: "house-marketplace-3897f",
  storageBucket: "house-marketplace-3897f.appspot.com",
  messagingSenderId: "881075848462",
  appId: "1:881075848462:web:46ad57f6b83673ad37835f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()