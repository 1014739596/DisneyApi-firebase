import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBHWQiF_oTuE-U9Wrphd9kxLqByWxN0frQ",
  authDomain: "disneyapp-19b18.firebaseapp.com",
  projectId: "disneyapp-19b18",
  storageBucket: "disneyapp-19b18.firebasestorage.app",
  messagingSenderId: "370730118107",
  appId: "1:370730118107:web:b1de432cec2a1203d955fe"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };