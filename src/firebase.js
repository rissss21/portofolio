// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWPzULJKa7ApK7psIpr38_iChCZM-_dxQ",
  authDomain: "bangaldy21-51f0b.firebaseapp.com",
  projectId: "bangaldy21-51f0b",
  storageBucket: "bangaldy21-51f0b.firebasestorage.app",
  messagingSenderId: "528551198877",
  appId: "1:528551198877:web:3aec52590ebdbd26159474"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
