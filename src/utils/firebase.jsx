// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo29PXpH4PwpP8I-LzTr9YAIr2z4JI3_k",
  authDomain: "promocionavon-ef092.firebaseapp.com",
  projectId: "promocionavon-ef092",
  storageBucket: "promocionavon-ef092.appspot.com",
  messagingSenderId: "649245993674",
  appId: "1:649245993674:web:f9c7ae4ce4ab5837b82233"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);