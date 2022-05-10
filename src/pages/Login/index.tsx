import Input from "../../components/Input";

const Login = () => {
  return(
    <div>
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
    </div>
  )
}

export default Login;
