import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiDlwj_5FZge6QHjUwmkT3lRyrEYqTagw",
  authDomain: "triveousdb.firebaseapp.com",
  projectId: "triveousdb",
  storageBucket: "triveousdb.appspot.com",
  messagingSenderId: "415577789218",
  appId: "1:415577789218:web:42fe3ed2f0427d2f7bcb7b",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
