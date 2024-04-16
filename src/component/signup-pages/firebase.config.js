// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from "firebase/storage"
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyUfQ-d06mUlVe5fmjs0Thr57IHvOUKtc",
  authDomain: "otp-authentication-826eb.firebaseapp.com",
  projectId: "otp-authentication-826eb",
  storageBucket: "otp-authentication-826eb.appspot.com",
  messagingSenderId: "1016608711240",
  appId: "1:1016608711240:web:a1cf91c8702bf18cdb2e7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
const db = getStorage(app)
const textdb = getFirestore(app)


export {db,textdb};