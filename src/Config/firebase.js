import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDld1Mj-1_pYLs2KUDVLfNMube3B5I-SYk",
    authDomain: "bookmyshow-97bea.firebaseapp.com",
    projectId: "bookmyshow-97bea",
    storageBucket: "bookmyshow-97bea.appspot.com",
    messagingSenderId: "933212331610",
    appId: "1:933212331610:web:8cd07f0993f18766994263",
    measurementId: "G-Z6Z62GXXVF"
  };

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }