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

export interface productsInfo {
  _id: string;
  createdAt?: string;
  description: string;
  img_url?: string;
  name: string;
  price: number;
  stock: number;
  updatedAt?: string;
  quantity?: number;
}

export type productCart = {
  _id: string;
  description: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
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
  products: productsInfo[];
  setProducts: React.Dispatch<React.SetStateAction<any>>;
  cartProducts: productCart[];
  setCartProducts: React.Dispatch<React.SetStateAction<any>>;
  productsFilter: string;
  setProductsFilter: React.Dispatch<React.SetStateAction<string>>;
} 

const AppContext = React.createContext({} as IdefaultValue);

export default AppContext;
