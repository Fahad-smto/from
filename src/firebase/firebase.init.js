// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACAnirxNHGPpZdy5FPmm7FYuPo7wi97O8",
  authDomain: "form-react-conceptual.firebaseapp.com",
  projectId: "form-react-conceptual",
  storageBucket: "form-react-conceptual.appspot.com",
  messagingSenderId: "165050947246",
  appId: "1:165050947246:web:695e64acfa6acb97a5bf3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);