import React from 'react';

export type newUser  = {
  name?: string;
  email?: string;
  password?: string;
}

interface IdefaultValue {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  newUser: React.Dispatch<React.SetStateAction<newUser>>;
  setNewUser: React.Dispatch<React.SetStateAction<newUser>>;
}

const AppContext = React.createContext({} as IdefaultValue);

export default AppContext;
