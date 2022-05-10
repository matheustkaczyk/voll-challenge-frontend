import axios from "axios";
import { useContext } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
import AppContext from "../../context/appContext";
import httpRequest from "../../utils/httpRequest";

const Login = () => {
  const { username, setUsername, password, setPassword } = useContext(AppContext);

  const handleLogin = async () => {
    const request = await httpRequest(
      "POST",
      {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      "http://localhost:3001/login",
      { "data":{ username, password } }
      );

    // console.log(request);
    // axios.post("http://localhost:3001/login", { data: { username, password } }, { headers: {
    //   "Content-Type": "*",
    //   "Accept": "*",
    //   "Access-Control-Allow-Origin": "*"
    // } })
  };

  return(
    <form>
      <Input
        type={"email"}
        handleChange={(e) => setUsername(e.target.value)}
        placeholder={"Email"}
        classN={"input"}
      />
      <Input
        type={"password"}
        handleChange={(e) => setPassword(e.target.value)}
        placeholder={"Password"}
        classN={"input"}
      />
      <Button
        text={"Entrar"}
        classN={"button"}
        handleClick={() => handleLogin()}
        type="button"
      />
    </form>
  )
}

export default Login;
