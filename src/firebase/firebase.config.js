// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUiL218CX-miDJXQ0YGZGyyDpr5MobAoc",
    authDomain: "tap-skills-app.firebaseapp.com",
    projectId: "tap-skills-app",
    storageBucket: "tap-skills-app.appspot.com",
    messagingSenderId: "701800904024",
    appId: "1:701800904024:web:88299aee1fe1e11ad6a12d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;