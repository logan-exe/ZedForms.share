// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp9xo7o6AEf00C2WVvkCpxSKJ0aOWbTCc",
  authDomain: "zedforms.firebaseapp.com",
  projectId: "zedforms",
  storageBucket: "zedforms.appspot.com",
  messagingSenderId: "280696276770",
  appId: "1:280696276770:web:4f765c0f2ca71b1469077b",
  measurementId: "G-BHFZP96HYP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
