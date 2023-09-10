// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmNEYArnMPCT7Bw_xWaxY5fhkbpqI5dtw",
  authDomain: "newproject-397609.firebaseapp.com",
  projectId: "newproject-397609",
  storageBucket: "newproject-397609.appspot.com",
  messagingSenderId: "1000410376015",
  appId: "1:1000410376015:web:98c5cb598b8f36f0c2473a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export { app, db, storage, auth };



