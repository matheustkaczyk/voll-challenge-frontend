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
  const [isLogged, setIsLogged] = useState(false);

  let value = {
    email,
    setEmail,
    password,
    setPassword,
    isLogged,
    setIsLogged,
    newUser,
    setNewUser
  };

  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Provider;
