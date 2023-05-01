// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmPmIFoVNLfpJFQ1OhVBFyrjMpJotxYZQ",
  authDomain: "hotel-room-book-auth.firebaseapp.com",
  projectId: "hotel-room-book-auth",
  storageBucket: "hotel-room-book-auth.appspot.com",
  messagingSenderId: "277106479121",
  appId: "1:277106479121:web:b4429a54461e6380f9e1b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;