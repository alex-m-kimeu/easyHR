// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbCQsb0pOEJD15GLBZzBVFZvSoz7lSrEM",
  authDomain: "easyhr-f46c9.firebaseapp.com",
  projectId: "easyhr-f46c9",
  storageBucket: "easyhr-f46c9.appspot.com",
  messagingSenderId: "659047171830",
  appId: "1:659047171830:web:b626718ca200f5fc31ced7",
  measurementId: "G-HVTVR2P94Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;