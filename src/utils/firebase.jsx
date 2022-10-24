// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
console.log(process.env.REACT_APP_DB_apiKey)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_DB_apiKey,
  authDomain: process.env.REACT_APP_DB_authDomain,
  projectId: process.env.REACT_APP_DB_projectId,
  storageBucket: process.env.REACT_APP_DB_storageBucket,
  messagingSenderId: process.env.REACT_APP_DB_messagingSenderId,
  appId: process.env.REACT_APP_DB_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);