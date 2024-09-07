  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyByrbv7aD-WCrcmT6L2H6KNSulB1oi3o7A",
    authDomain: "coffeebeanhub.firebaseapp.com",
    projectId: "coffeebeanhub",
    storageBucket: "coffeebeanhub.appspot.com",
    messagingSenderId: "14936728073",
    appId: "1:14936728073:web:ae2aa51688dfbe6be18ed8",
    measurementId: "G-5ENKBGD6N9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);