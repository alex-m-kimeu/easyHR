/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDopn7uVVq7iX52mGpxVlbUCO9XTe_JpfU",
  authDomain: "easyhr-66e34.firebaseapp.com",
  projectId: "easyhr-66e34",
  storageBucket: "easyhr-66e34.appspot.com",
  messagingSenderId: "347278550871",
  appId: "1:347278550871:web:31f9bfc47eaf4095c34012"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);