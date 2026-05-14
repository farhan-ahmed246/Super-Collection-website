import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "super-collection-website.firebaseapp.com",
  projectId: "super-collection-website",
  storageBucket: "super-collection-website.appspot.com",
  messagingSenderId: "37452367....",
  appId: "1:37452367....:web:...."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
