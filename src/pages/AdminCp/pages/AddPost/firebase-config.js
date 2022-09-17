import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBbVHqIO8kbggDBWoVOwEgcFG_qCbHirvE',
  authDomain: 'aocuoiromantic-posts.firebaseapp.com',
  projectId: 'aocuoiromantic-posts',
  storageBucket: 'aocuoiromantic-posts.appspot.com',
  messagingSenderId: '878707475329',
  appId: '1:878707475329:web:9e0329a01a357a468cde80',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);
