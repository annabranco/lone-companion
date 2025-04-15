import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

import { auth, googleProvider } from '../config/firebase';
import { useUserContext } from '../contexts/user/UserContext';
import { AuthData } from '../contexts/user/types';
import { withErrorHandler } from '../utils/withErrorHandler';

enum AUTH_FIELDS {
  EMAIL = 'email',
  PASSWORD = 'Password',
}

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { getUser, setUser } = useUserContext();

  const updateInput = ({ value, type }: { value: string; type: AUTH_FIELDS }) => {
    if (type === AUTH_FIELDS.EMAIL) {
      setEmail(value);
    } else if (type === AUTH_FIELDS.PASSWORD) {
      setPassword(value);
    }
  };

  const handleSignUp = async () => {
    if (auth) {
      const authData: AuthData = await createUserWithEmailAndPassword(auth, email, password);
      setUser(authData);
    }

  };

  const handleSignInWithGoogle = async () => {
    if (auth) {
      const authData = await signInWithPopup(auth, googleProvider);
      setUser(authData);
    }
  };

  console.log('>>>>>>> user', getUser());

  const handleSignOut = () => withErrorHandler(() => {
    if (auth) {
      signOut(auth);
    }
  });

  return (
    <div>
      {auth?.currentUser ? (
        <div>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <>
          <input
            onChange={event =>
              updateInput({
                value: event.currentTarget.value,
                type: AUTH_FIELDS.EMAIL,
              })
            }
            placeholder="email"
            type="text"
          />
          <input
            onChange={event =>
              updateInput({
                value: event.currentTarget.value,
                type: AUTH_FIELDS.PASSWORD,
              })
            }
            placeholder="Password"
            type="password"
          />
          <button onClick={handleSignUp}>Log In</button>
          <div>
            <button onClick={handleSignInWithGoogle}>Log in with Google</button>
          </div>
        </>
      )}
    </div>
  );
};
