// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFgA6JpGqNBrWPfR-lKercjvy5Y6ky7zc",
  authDomain: "webportofolio-8498b.firebaseapp.com",
  projectId: "webportofolio-8498b",
  storageBucket: "webportofolio-8498b.firebasestorage.app",
  messagingSenderId: "543954266098",
  appId: "1:543954266098:web:029e84a24273fd15d62d6b"
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
