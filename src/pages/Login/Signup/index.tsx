import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import AppContext from "../../../context/appContext"

import Button from "../../../components/Button"
import Input from "../../../components/Input"
import httpRequest from "../../../utils/httpRequest"

const Signup = () => {
  const { newUser, setNewUser } = useContext(AppContext);
  const navigation = useNavigate();

  const handleSignup = async () => {
    const request = await httpRequest('http://localhost:3001')
    .post("/auth/signup", newUser);

    if (request.status === 201) return navigation('/login/signin');
  }

  return(
    <form>
        <Input
          type={"text"}
          handleChange={(e) => setNewUser({ ...newUser, name: e.target.value})}
          placeholder={"Name"}
          classN={"input"}
        />
        <Input
          type={"email"}
          handleChange={(e) => setNewUser({ ...newUser, email: e.target.value})}
          placeholder={"Email"}
          classN={"input"}
        />
        <Input
          type={"password"}
          handleChange={(e) => setNewUser({ ...newUser, password: e.target.value})}
          placeholder={"Password"}
          classN={"input"}
        />
        <Button
          handleClick={() => handleSignup()}
          classN={"button"}
          text={"Cadastrar"}
          type="button"
        />
      </form>
  )
}

export default Signup;
