// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9udMQ0ZBhCI0edi_qp0BM1sAefq6CkQU",
  authDomain: "line-diary.firebaseapp.com",
  projectId: "line-diary",
  storageBucket: "line-diary.appspot.com",
  messagingSenderId: "929758881815",
  appId: "1:929758881815:web:afb84daca9ccf6aba61452",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
