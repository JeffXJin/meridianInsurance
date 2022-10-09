// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6fkHNLOLFZ15Ssj9CaODbeqrK8e98T20",
  authDomain: "meridianinsurance-12549.firebaseapp.com",
  projectId: "meridianinsurance-12549",
  storageBucket: "meridianinsurance-12549.appspot.com",
  messagingSenderId: "366117415539",
  appId: "1:366117415539:web:258243382b872939779806",
  measurementId: "G-LRWEGKH0V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export {firestore};