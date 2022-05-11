import React from 'react';

export type newUser  = {
  name: string;
  email: string;
  password: string;
};

export type requestUserInfo = {
  _doc: {
    _id: string;
    balance: number;
    created_at: string;
    email: string;
    name: string;
    role: string;
  };
};

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
  loggedUserInfo: any;
  setLoggedUserInfo: React.Dispatch<React.SetStateAction<any>>;
} 

const AppContext = React.createContext({} as IdefaultValue);

export default AppContext;
