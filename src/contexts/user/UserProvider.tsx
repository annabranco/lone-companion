import { PropsWithChildren, useCallback, useState } from 'react';
import { UserContext } from './UserContext';
import type { AuthData, User } from './types';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../../config/firebase';

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
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
  return (
    <UserContext.Provider value={{
      getUser,
      setUser,
    }}>
      {children}
    </UserContext.Provider>
  );
};
