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
  const [products, setProducts] = useState([{
    _id: '',
    createdAt: '',
    description: '',
    img_url: '',
    name: '',
    price: 0,
    stock: 0,
    updatedAt: '',
  }]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [productsFilter, setProductsFilter] = useState('');

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
    setProducts,
    cartProducts,
    setCartProducts,
    productsFilter,
    setProductsFilter
  };

  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Provider;
