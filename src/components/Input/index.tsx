import { IInput } from "./input.interface"

const Input = ({ type, handleChange, placeholder, classN, min, max }: IInput) => {
  return(
    <input
      type={type}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      className={ classN }
      min={min}
      max={max}
    />
  )
}

export default Input;
