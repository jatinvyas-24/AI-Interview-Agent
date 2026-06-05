import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-b07fa.firebaseapp.com",
  projectId: "interviewiq-b07fa",
  storageBucket: "interviewiq-b07fa.firebasestorage.app",
  messagingSenderId: "160484283638",
  appId: "1:160484283638:web:813da8138335d591e748d7"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
