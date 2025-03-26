import { createContext, useContext } from 'react';

import { IUserContext } from './types';

const defaultContent = {
  getUser: () => null,
  setUser: () => null,
};

export const UserContext = createContext<IUserContext>(defaultContent);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('UserContext is not defined. Make sure you use the Provider before using the context.');
  }
  return context;
};
