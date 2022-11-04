// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaIccPEE-2YomjdRmo4d9avHV5Tryr7pU",
  authDomain: "hillfair-3869d.firebaseapp.com",
  projectId: "hillfair-3869d",
  storageBucket: "hillfair-3869d.appspot.com",
  messagingSenderId: "453231256466",
  appId: "1:453231256466:web:177b91b2e603981063574b",
  measurementId: "G-N35P5D7G8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);