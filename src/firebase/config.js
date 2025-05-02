import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAViOxa3FlbyM-KTpGVD3cClIZlHFfTZC0",
  authDomain: "skillpass-2301.firebaseapp.com",
  projectId: "skillpass-2301",
  storageBucket: "skillpass-2301.firebasestorage.app",
  messagingSenderId: "64761332025",
  appId: "1:64761332025:web:bbba61b1b72f1f987a28e8",
  measurementId: "G-QCRHF9QCJ9"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация сервисов
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app); 