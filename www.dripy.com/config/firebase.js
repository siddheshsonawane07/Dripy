import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyB2lRwbInMSBFVdnpTMyO3UnopZJgRx77I",
  authDomain: "ecommerce-e6531.firebaseapp.com",
  projectId: "ecommerce-e6531",
  storageBucket: "ecommerce-e6531.appspot.com",
  messagingSenderId: "724471387691",
  appId: "1:724471387691:web:129f26bbf031716443bc6e",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, auth, db, storage };
console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");
