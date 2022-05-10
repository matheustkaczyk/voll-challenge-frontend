import Input from "../../components/Input";

const Login = () => {
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
    </form>
  )
}

export default Login;
