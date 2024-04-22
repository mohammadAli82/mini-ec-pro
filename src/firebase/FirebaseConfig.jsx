// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcD4xLjJPJAS9O4DDUbeoXzb0g5zMP9RM",
    authDomain: "online-shop-6c4b8.firebaseapp.com",
    projectId: "online-shop-6c4b8",
    storageBucket: "online-shop-6c4b8.appspot.com",
    messagingSenderId: "827223565610",
    appId: "1:827223565610:web:140fe6e948ddcabb20ea53"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
