import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "finance-tracker-e8ed1.firebaseapp.com",
  projectId: "finance-tracker-e8ed1",
  storageBucket: "finance-tracker-e8ed1.appspot.com",
  messagingSenderId: "419153027540",
  appId: "1:419153027540:web:1ef755d24f39ac9202b641"
};

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth();