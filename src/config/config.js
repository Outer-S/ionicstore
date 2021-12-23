import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQoMXHBTKv5rRnWaGI0H4sZLlvwesGpHU",
  authDomain: "ionicstore-1b77e.firebaseapp.com",
  projectId: "ionicstore-1b77e",
  storageBucket: "ionicstore-1b77e.appspot.com",
  messagingSenderId: "119924727141",
  appId: "1:119924727141:web:17b85893b7b7220005558c",
  measurementId: "G-HQET4DQ45H",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
