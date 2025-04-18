// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbZxIIUM1uj50CORTJRv6NvxLsgzHaoNU",
  authDomain: "bmit-ai-bot.firebaseapp.com",
  projectId: "bmit-ai-bot",
  storageBucket: "bmit-ai-bot.firebasestorage.app",
  messagingSenderId: "354009717659",
  appId: "1:354009717659:web:22ef81a10691aa732edf3e",
  measurementId: "G-DFN7JV9TR4"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);