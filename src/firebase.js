// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU_KbJ13vASUrzwonerkw5SfIUPDj65-I",
  authDomain: "third-react-blog.firebaseapp.com",
  projectId: "third-react-blog",
  storageBucket: "third-react-blog.appspot.com",
  messagingSenderId: "572213404767",
  appId: "1:572213404767:web:f0085ece7a41eebb13a7ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
