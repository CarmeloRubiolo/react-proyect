// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhGIW0KoekH0j_7eVIEkaS2_UGlkDP_t8",
    authDomain: "invdigreact.firebaseapp.com",
    projectId: "invdigreact",
    storageBucket: "invdigreact.appspot.com",
    messagingSenderId: "209807250200",
    appId: "1:209807250200:web:6793c0bf985f6c7e5b846d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)