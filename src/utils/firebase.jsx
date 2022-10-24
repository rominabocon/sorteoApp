// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const { DB_apiKey,DB_authDomain,DB_projectId,DB_storageBucket, DB_messagingSenderId,DB_appId} = process.env;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: DB_apiKey,
  authDomain: DB_authDomain,
  projectId: DB_projectId,
  storageBucket: DB_storageBucket,
  messagingSenderId: DB_messagingSenderId,
  appId: DB_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);