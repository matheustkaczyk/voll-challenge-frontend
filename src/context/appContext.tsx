import React from 'react';

export type newUser  = {
  name: string;
  email: string;
  password: string;
};

export type userInfo = {
  _id: string;
  balance: number;
  created_at: string;
  email: string;
  name: string;
  role: string;
};

export type productsInfo = {
  createdAt: string;
  description: string;
  img_url: string;
  name: string;
  price: number;
  stock: number;
  updatedAt: string;
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
  loggedUserInfo: userInfo;
  setLoggedUserInfo: React.Dispatch<React.SetStateAction<any>>;
  products: productsInfo;
  setProducts: React.Dispatch<React.SetStateAction<any>>;
} 

const AppContext = React.createContext({} as IdefaultValue);

export default AppContext;
