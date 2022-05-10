import React from 'react';

interface IdefaultValue {
  username: string;
  password: string;
  isLogged: boolean;
}

const AppContext = React.createContext({} as IdefaultValue);

export default AppContext;
