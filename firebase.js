// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjNzsm73h46gJXryP6ja2cDK9HOQ-QV3E",
  authDomain: "ekolojik-be444.firebaseapp.com",
  projectId: "ekolojik-be444",
  storageBucket: "ekolojik-be444.firebasestorage.app",
  messagingSenderId: "607737261068",
  appId: "1:607737261068:web:78aa2c0c00b95e40b35229",
  measurementId: "G-2SBFPK2RW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, getDocs, query, where };
