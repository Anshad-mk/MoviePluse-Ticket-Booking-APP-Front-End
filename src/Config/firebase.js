import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import 'firebase/compat/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyDld1Mj-1_pYLs2KUDVLfNMube3B5I-SYk",
//     authDomain: "bookmyshow-97bea.firebaseapp.com",
//     projectId: "bookmyshow-97bea",
//     storageBucket: "bookmyshow-97bea.appspot.com",
//     messagingSenderId: "933212331610",
//     appId: "1:933212331610:web:8cd07f0993f18766994263",
//     measurementId: "G-Z6Z62GXXVF"
//   };
const firebaseConfig = {
  apiKey: 'AIzaSyBP7LIwhCMwO3mQsgVKGplhX_7etZzjgiw',
  authDomain: 'bookmyticket-c9405.firebaseapp.com',
  projectId: 'bookmyticket-c9405',
  storageBucket: 'bookmyticket-c9405.appspot.com',
  messagingSenderId: '555679436964',
  appId: '1:555679436964:web:f6084251eba7783737d631',
  measurementId: 'G-RFQM4SHT0V',
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }


