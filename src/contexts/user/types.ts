export interface AuthData {
  user: {
    uid: string;
    displayName: string | null;
    photoURL: string | null;
  };
};

interface IUser {
  id: string;
  name: string;
  photo: string;
};

export type User = IUser | null;

export interface UserContextInterface {
    getUser: () => User;
    setUser: (data: AuthData) => void;
}