// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4MFBAoZ0xKF5K2MZ3VOwNJG7stWiMQwY",
  authDomain: "assignment-10-ae122.firebaseapp.com",
  projectId: "assignment-10-ae122",
  storageBucket: "assignment-10-ae122.appspot.com",
  messagingSenderId: "107869245021",
  appId: "1:107869245021:web:6a598b0455a71852a587b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app