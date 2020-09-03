// import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import "firebase/storage";

import firebase from "firebase/app";

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
// // firebase.firestore().settings({ timestampsInSnapshots: true });
// // Initialize other services on firebase instance
//firebase.firestore();
firebase.functions();
firebase.storage();

// export const storage = firebase.storage();
// export const storageRef = storage.ref();
// export const database = firebase.firestore();

export default firebase;
