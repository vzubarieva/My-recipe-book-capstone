// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0V4Reln8wXsCWczT1QsTmdQ-wzWPeVxY",
  authDomain: "my-recipe-book-e2c62.firebaseapp.com",
  projectId: "my-recipe-book-e2c62",
  storageBucket: "my-recipe-book-e2c62.appspot.com",
  messagingSenderId: "36522286835",
  appId: "1:36522286835:web:b69f15dd4f47ae47266186",
  measurementId: "G-XLFD33G2HL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
