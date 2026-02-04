// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUXQJE62MM9zmaVInu418g3K3qC-cikZg",
  authDomain: "explore-email-password-a-a387a.firebaseapp.com",
  projectId: "explore-email-password-a-a387a",
  storageBucket: "explore-email-password-a-a387a.firebasestorage.app",
  messagingSenderId: "1024293525185",
  appId: "1:1024293525185:web:f63a427be8d827a92fe640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);