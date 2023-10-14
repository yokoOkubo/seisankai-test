import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCqTQZVw_sGgIw4TMXnS-eMJCTO9fOOn88',
  authDomain: 'seisankai.firebaseapp.com',
  projectId: 'seisankai',
  storageBucket: 'seisankai.appspot.com',
  messagingSenderId: '189724036783',
  appId: '1:189724036783:web:9372f44221e85c8fd20e5a',
  measurementId: 'G-59GGS931XZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;