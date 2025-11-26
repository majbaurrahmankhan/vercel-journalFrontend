// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAFe47PEqAjiFhdFLnoaHOBrNWY5RJzPBs",
  authDomain: "csecujournal-d4c2f.firebaseapp.com",
  projectId: "csecujournal-d4c2f",
  storageBucket: "csecujournal-d4c2f.firebasestorage.app",
  messagingSenderId: "912142283236",
  appId: "1:912142283236:web:9c1a16c27ccdbceddfd7f1",
  measurementId: "G-KMYF1EKSKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Named exports
export { auth, provider };