import { useState } from "react";
import AppContext from "./appContext"

const Provider = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  let value = {
    username,
    setUsername,
    password,
    setPassword,
    isLogged,
    setIsLogged
  };

  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Provider;
