import { useState } from "react";
import AppContext from "./appContext"

const Provider = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loggedUserInfo, setLoggedUserInfo] = useState({
    _id: '',
    balance: 0,
    created_at: '',
    email: '',
    name: '',
    role: '',
  });
  const [products, setProducts] = useState({
    createdAt: '',
    description: '',
    img_url: '',
    name: '',
    price: 0,
    stock: 0,
    updatedAt: '',
  });
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  let value = {
    email,
    setEmail,
    password,
    setPassword,
    isLogged,
    setIsLogged,
    newUser,
    setNewUser,
    isAdmin,
    setIsAdmin,
    loggedUserInfo,
    setLoggedUserInfo,
    products,
    setProducts
  };

  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Provider;
