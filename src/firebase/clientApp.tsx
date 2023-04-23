import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCwzZxkEWB0kjO8Bbc_u_LQuL-H7Hqc_ZU",
	authDomain: "buketochka-test.firebaseapp.com",
	projectId: "buketochka-test",
	storageBucket: "buketochka-test.appspot.com",
	messagingSenderId: "254598002227",
	appId: "1:254598002227:web:73b48ac4224f343d5b5546"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
