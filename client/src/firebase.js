// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "vipin-mern-blog.firebaseapp.com",
  projectId: "vipin-mern-blog",
  storageBucket: "vipin-mern-blog.appspot.com",
  messagingSenderId: "359049278984",
  appId: "1:359049278984:web:37d057c36065cd76e343bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);