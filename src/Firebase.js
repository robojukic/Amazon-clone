import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2qNQqCE-o6R9k1Ibokt78PSqLq7L5sTU",
  authDomain: "clone-636d9.firebaseapp.com",
  projectId: "clone-636d9",
  storageBucket: "clone-636d9.appspot.com",
  messagingSenderId: "507586639227",
  appId: "1:507586639227:web:3742efa43b10f9e00df9de",
  measurementId: "G-PRL00MX8W2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
