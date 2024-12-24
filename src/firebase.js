import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCo0sPbgKx2rv6-Y0eIVajADy9tOJ5SrWw",
  authDomain: "bubu-99bcd.firebaseapp.com",
  projectId: "bubu-99bcd",
  storageBucket: "bubu-99bcd.firebasestorage.app",
  messagingSenderId: "802988482882",
  appId: "1:802988482882:web:ec9c6f686f670a3e9228db",
  measurementId: "G-47CXWREX6K"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };