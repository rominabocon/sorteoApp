// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const { REACT_APP_DB_apiKey,REACT_APP_DB_authDomain,REACT_APP_DB_projectId,REACT_APP_DB_storageBucket, REACT_APP_DB_messagingSenderId,REACT_APP_DB_appId} = process.env;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_DB_apiKey,
  authDomain: REACT_APP_DB_authDomain,
  projectId: REACT_APP_DB_projectId,
  storageBucket: REACT_APP_DB_storageBucket,
  messagingSenderId: REACT_APP_DB_messagingSenderId,
  appId: REACT_APP_DB_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);