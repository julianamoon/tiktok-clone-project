import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDK5h75j5K4wfd-6yooGjLu5dRopRy5FdY",
  authDomain: "tiktok-clone---jornadade-20f5c.firebaseapp.com",
  projectId: "tiktok-clone---jornadade-20f5c",
  storageBucket: "tiktok-clone---jornadade-20f5c.appspot.com",
  messagingSenderId: "220817578145",
  appId: "1:220817578145:web:cf732518a78736a0a738e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db