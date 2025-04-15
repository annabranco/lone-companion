import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider } from 'firebase/auth';

import { firebaseConfig } from '../../.secrets';

const googleProvider = new GoogleAuthProvider();
let firebaseApp: FirebaseApp | null = null;
let auth: Auth | null = null;

try {
   firebaseApp = initializeApp(firebaseConfig);
   auth = getAuth(firebaseApp);
    
} catch (error) {
    console.error('Firebase config error. Please check your .secrets file.', error);
}

export { firebaseApp, auth, googleProvider };