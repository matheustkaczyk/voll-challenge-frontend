import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import AppContext from "../../context/appContext";
import httpRequest from "../../utils/httpRequest";

const Login = () => {
  const { email, setEmail, password, setPassword, setIsLogged, isLogged } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('/home');
    }
  }, [isLogged]);

  const handleLogin = async () => {
    const request = await httpRequest('http://localhost:3001')
    .post("/user/signin", { email, password });

    if (request.status === 200) {
      setIsLogged(true);
      localStorage.setItem("token", request.data.token);
    }

  };

  return(
    <form>
      <Input
        type={"email"}
        handleChange={(e) => setEmail(e.target.value)}
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
