// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBmNEYArnMPCT7Bw_xWaxY5fhkbpqI5dtw",process.env.REACT_APP_API_KEY,
//   authDomain: "newproject-397609.firebaseapp.com",process.env.REACT_APP_AUTHDOMAIN,
//   projectId: "newproject-397609",process.env.REACT_APP_PROJECTID,
//   storageBucket: "newproject-397609.appspot.com",process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: "1000410376015",process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: "1:1000410376015:web:98c5cb598b8f36f0c2473a",process.env.REACT_APP_APPID,
// };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export { app, db, storage, auth };



