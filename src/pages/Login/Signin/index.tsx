import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import AppContext from "../../../context/appContext";
import httpRequest from "../../../utils/httpRequest";

const Signin = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    setIsLogged,
    isLogged,
  } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('/home');
    }
  }, [isLogged]);

  const handleLogin = async () => {
    const request = await httpRequest()
    .post("/auth/signin", { email, password });

    if (request.status === 200) {
      localStorage.setItem("token", request.data.token);
      setIsLogged(true);
    }
  };

  return(
    <div className="login">
      <div className="login-div">
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
        </form>
        <div className="btns">
          <Button
            text={"Criar conta"}
            classN={"button"}
            handleClick={() => navigate('/signup')}
            type="button"
          />
          <Button
            text={"Entrar"}
            classN={"button"}
            handleClick={() => handleLogin()}
            type="button"
          />
        </div>
      </div>
      <div className="img-login">
      </div>
    </div>
  )
}

export default Signin;
