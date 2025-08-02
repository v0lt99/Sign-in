// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7eZ3JWPsUuH9cefAcWwTahBCCT65acI0",
  authDomain: "volt-site9643.firebaseapp.com",
  databaseURL: "https://volt-site9643-default-rtdb.firebaseio.com",
  projectId: "volt-site9643",
  storageBucket: "volt-site9643.firebasestorage.app",
  messagingSenderId: "592162071466",
  appId: "1:592162071466:web:3570ef4a56004c04f701d3",
  measurementId: "G-PJM01XDX2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
