import { useCallback, useState } from 'react';
import { getAuth } from '@firebase/auth';
import { AuthData, User } from './types';
import { firebaseApp } from '../../config/firebase';

export const useUserState = () => {
  const [user, updateUser] = useState<User | null>(null);

  const setUser = (authData: AuthData) => {
    if (authData.user?.uid) {
      updateUser({
        id: authData.user.uid,
        name: authData.user.displayName || '',
        photo: authData.user.photoURL || '',
      });
    }
  };

  const getUser = useCallback((): User | null => {
    let loggedUser = user;

    if (!loggedUser) {
      const auth = getAuth(firebaseApp);
      const { currentUser } = auth;

      if (currentUser) {
        loggedUser = {
          id: currentUser.uid,
          name: currentUser.displayName || '',
          photo: currentUser.photoURL || '',
        };
        updateUser(loggedUser);
      }
    }

    return loggedUser;
  }, [user]);

  return {
    getUser,
    setUser,
  };
};
