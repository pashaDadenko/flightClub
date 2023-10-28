import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDAoWAorKnbOPXpqGtHIH9_BEfkriaOyUQ',
	authDomain: 'authflightclub.firebaseapp.com',
	databaseURL: 'https://authflightclub-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'authflightclub',
	storageBucket: 'authflightclub.appspot.com',
	messagingSenderId: '719718642889',
	appId: '1:719718642889:web:c379858be61cba048e4918',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
