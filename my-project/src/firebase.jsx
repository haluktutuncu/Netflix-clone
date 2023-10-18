// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKOmSOjQ5_rx7cGuPPNAXwhtNIqbnavB0",
  authDomain: "netflix-clone-928a7.firebaseapp.com",
  projectId: "netflix-clone-928a7",
  storageBucket: "netflix-clone-928a7.appspot.com",
  messagingSenderId: "778456445421",
  appId: "1:778456445421:web:16d814af928144301db7e4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
