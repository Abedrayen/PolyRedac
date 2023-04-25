// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4xUZRNEeSa9qQK1GM-D3ocfB3A6AIwrg",
    authDomain: "polyredac-2c46f.firebaseapp.com",
    projectId: "polyredac-2c46f",
    storageBucket: "polyredac-2c46f.appspot.com",
    messagingSenderId: "475967142111",
    appId: "1:475967142111:web:a9285d080e4f3c3064d16a",
    measurementId: "G-WR7C0EFWRM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();