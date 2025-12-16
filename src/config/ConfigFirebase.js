import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWikHwMu0lZJnKuVlI0hu7LpqdSZDjNGw",
  authDomain: "workout-c6fdf.firebaseapp.com",
  projectId: "workout-c6fdf",
  storageBucket: "workout-c6fdf.firebasestorage.app",
  messagingSenderId: "workout-c6fdf.firebasestorage.app",
  appId: "1:812899066062:web:671ffa485da42ba870f09f"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;