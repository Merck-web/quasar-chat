import { boot } from "quasar/wrappers";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCsBQabUjqGr6Z4SN9LWWLzcnITvz0KpY",
  authDomain: "firechat-2b8e9.firebaseapp.com",
  projectId: "firechat-2b8e9",
  storageBucket: "firechat-2b8e9.appspot.com",
  messagingSenderId: "166434381641",
  appId: "1:166434381641:web:632438f4d385f6a25c4498",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = {
  auth: getAuth(app),
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
//const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp();

export { db, auth };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});
