import { initializeApp, getApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCbZxIIUM1uj50CORTJRv6NvxLsgzHaoNU",
  authDomain: "bmit-ai-bot.firebaseapp.com",
  projectId: "bmit-ai-bot",
  storageBucket: "bmit-ai-bot.appspot.com",
  messagingSenderId: "354009717659",
  appId: "1:354009717659:web:22ef81a10691aa732edf3e",
  measurementId: "G-DFN7JV9TR4",
}

// Initialize Firebase app (prevent re-initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

// Use client-side Firebase SDKs
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
