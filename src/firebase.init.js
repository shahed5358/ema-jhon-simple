// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANgHa_IH7G421uCrE9hO2NpkgIos0TkSU",
  authDomain: "ema-john-simple-566be.firebaseapp.com",
  projectId: "ema-john-simple-566be",
  storageBucket: "ema-john-simple-566be.appspot.com",
  messagingSenderId: "264162057177",
  appId: "1:264162057177:web:9eff9eb53bf013a27fd7c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;