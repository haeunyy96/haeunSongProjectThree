// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4Ix5i-Y-v83jX8fYt6ADc99YDGIKsrh4",
    authDomain: "project3-cfda8.firebaseapp.com",
    projectId: "project3-cfda8",
    storageBucket: "project3-cfda8.appspot.com",
    messagingSenderId: "61624098069",
    appId: "1:61624098069:web:e941fc3305d7a986621d1c"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// export the configured version of your firebase
export default firebase;