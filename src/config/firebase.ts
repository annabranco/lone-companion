import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
let firebaseApp: FirebaseApp | null = null;
let auth: Auth | null = null;

const { MODE } = import.meta.env;

let apiKey;
let projectId;
let messagingSenderId;
let appId;

console.log('❗firebase.ts:16 >> import.meta.env', import.meta.env);

if (MODE === 'development') {
    const {
        VITE_FIREBASE_API_KEY,
        VITE_FIREBASE_PROJECT_ID,
        VITE_FIREBASE_MESSAGING_SENDER_ID,
        VITE_FIREBASE_APP_ID,
    } = import.meta.env;

    apiKey = VITE_FIREBASE_API_KEY;
    projectId = VITE_FIREBASE_PROJECT_ID
    messagingSenderId = VITE_FIREBASE_MESSAGING_SENDER_ID;
    appId = VITE_FIREBASE_APP_ID;
} else {
    const {
        REACT_APP_FIREBASE_API_KEY,
        REACT_APP_FIREBASE_PROJECT_ID,
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        REACT_APP_FIREBASE_APP_ID,
    } = process.env || {};

    apiKey = REACT_APP_FIREBASE_API_KEY;
    projectId = REACT_APP_FIREBASE_PROJECT_ID
    messagingSenderId = REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
    appId = REACT_APP_FIREBASE_APP_ID;
}


const firebaseConfig = {
    apiKey,
    appId,
    authDomain: `${projectId}.firebaseapp.com`,
    messagingSenderId,
    projectId,
    storageBucket: `${projectId}.firebasestorage.app`,
};

if (firebaseConfig.apiKey) {
    try {
        firebaseApp = initializeApp(firebaseConfig);
        auth = getAuth(firebaseApp);
    } catch (error) {
        console.error('Firebase config error. Please check your config', error);
    }
}

export { firebaseApp, auth, googleProvider };