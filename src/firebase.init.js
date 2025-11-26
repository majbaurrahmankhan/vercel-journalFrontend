// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from 'firebase/auth'
// TODO:  SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFe47PEqAjiFhdFLnoaHOBrNWY5RJzPBs",
  authDomain: "csecujournal-d4c2f.firebaseapp.com",
  projectId: "csecujournal-d4c2f",
  storageBucket: "csecujournal-d4c2f.firebasestorage.app",
  messagingSenderId: "912142283236",
  appId: "1:912142283236:web:9c1a16c27ccdbceddfd7f1",
  measurementId: "G-KMYF1EKSKH"

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const analytics = getAnalytics(app);
export default auth