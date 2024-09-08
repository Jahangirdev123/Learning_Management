import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZqhMbajRNA029ansPv1TuN3wxme4I_vQ",
    authDomain: "myapp-2b60e.firebaseapp.com",
    projectId: "myapp-2b60e",
    storageBucket: "myapp-2b60e.appspot.com",
    messagingSenderId: "1905845125",
    appId: "1:1905845125:web:3f2d4986ed6121147b1aec"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app