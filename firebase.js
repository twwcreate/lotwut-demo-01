// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
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



