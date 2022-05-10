import { IInput } from "./input.interface"

const Input = ({ type, handleChange, placeholder, classN }: IInput) => {
  return(
    <input
      type={type}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      className={ classN }
    />
  )
}

export default Input;
