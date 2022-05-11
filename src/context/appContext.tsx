import React from 'react';

export type newUser  = {
  name: string;
  email: string;
  password: string;
}

interface IdefaultValue {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  newUser: newUser;
  setNewUser: React.Dispatch<React.SetStateAction<newUser>>;
  isAdmin: boolean;
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  loggedUserInfo: object;
  setLoggedUserInfo: React.Dispatch<React.SetStateAction<object>>;
} 

const AppContext = React.createContext({} as IdefaultValue);

export default AppContext;
