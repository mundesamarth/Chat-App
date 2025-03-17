import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reactchat-app-f20e4.firebaseapp.com",
  projectId: "reactchat-app-f20e4",
  storageBucket: "reactchat-app-f20e4.firebasestorage.app",
  messagingSenderId: "715670698074",
  appId: "1:715670698074:web:d5555adb3baf8d1dc80063",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();