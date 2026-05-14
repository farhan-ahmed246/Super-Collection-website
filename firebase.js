import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB36u8iB6Y6Uu0tHn_fL6m4A9pQ3G0XgUo",
  authDomain: "super-collection-55c42.firebaseapp.com", // <-- ID check karein
  projectId: "super-collection-55c42", // <--- Ye wali ID honi chahiye
  storageBucket: "super-collection-55c42.appspot.com",
  messagingSenderId: "374523675037",
  appId: "1:374523675037:web:7573f5a11f23b7e770732d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
