// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZxmugvq2TdAXLUHE6XmE0AgHS5-j0Bs4",
    authDomain: "netflix-react-d75c0.firebaseapp.com",
    projectId: "netflix-react-d75c0",
    storageBucket: "netflix-react-d75c0.appspot.com",
    messagingSenderId: "7124376286",
    appId: "1:7124376286:web:2bf4124de4bbd0c9a2c04f"
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    // appId: process.env.REACT_APP_APP_ID
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)