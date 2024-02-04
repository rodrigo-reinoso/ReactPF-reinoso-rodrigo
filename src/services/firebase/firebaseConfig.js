// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHnMvKAYUdY1mOanTlbkRecJm3b2My9Ds",
  authDomain: "ecommercereinoso.firebaseapp.com",
  projectId: "ecommercereinoso",
  storageBucket: "ecommercereinoso.appspot.com",
  messagingSenderId: "792597209293",
  appId: "1:792597209293:web:69a0293625a3f11a090984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)