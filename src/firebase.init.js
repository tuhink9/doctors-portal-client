// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLaGStFirsG7aH54yFyIjJVdSp3mPlTsA",
    authDomain: "doctors-portal-c9fa7.firebaseapp.com",
    projectId: "doctors-portal-c9fa7",
    storageBucket: "doctors-portal-c9fa7.appspot.com",
    messagingSenderId: "971773967175",
    appId: "1:971773967175:web:33f232c19a8327009c2a62",
    measurementId: "G-38BMBQMRM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;