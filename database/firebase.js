// import "firebase/firestore";

import "firebase/auth";

import firebase from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASEE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_NATIVE_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDI8AvbbdjZHuK6bPdZwIiTLgKNIQxGPWY",
  authDomain: "reactnativesignupin.firebaseapp.com",
  databaseURL: "https://reactnativesignupin.firebaseio.com",
  projectId: "reactnativesignupin",
  storageBucket: "reactnativesignupin.appspot.com",
  messagingSenderId: "542697700239",
  appId: "1:542697700239:web:f0e6a64e3fab26119469fa",
  measurementId: "G-FQCPMRPG6H",
};
// // Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
