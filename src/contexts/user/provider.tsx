import { PropsWithChildren } from 'react';
import { useUserState } from './state';
import { UserContext } from './context';

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const state = useUserState();

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  );
};
