import { useContext } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import AppContext from "../../context/appContext";

const Login = () => {
  const { setUsername, setPassword } = useContext(AppContext);
  
  return(
    <form>
      <Input
        type={"text"}
        handleChange={() => {}}
        placeholder={"Username"}
        classN={"input"}
      />
      <Input
        type={"password"}
        handleChange={() => {}}
        placeholder={"Password"}
        classN={"input"}
      />
      <Button
        text={"Entrar"}
        classN={"button"}
        handleClick={() => {}}
        type="button"
      />
    </form>
  )
}

export default Login;
