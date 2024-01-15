// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7r4PA2AVhAf53__0Ik11O1rKLdNsnELs",
  authDomain: "netflixclone-a58bf.firebaseapp.com",
  projectId: "netflixclone-a58bf",
  storageBucket: "netflixclone-a58bf.appspot.com",
  messagingSenderId: "994649409269",
  appId: '1:994649409269:web:478d1e7fd40f72bcca67bc',
  measurementId: "G-G7Q48LLSLJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);


