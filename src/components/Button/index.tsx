import { IButton } from "./button.interface"

const Button = ({ text, type, handleClick, classN }: IButton) => {
  return(
    <button
      type={ type }
      onClick={ () => handleClick() }
      className={ classN }
    >
      {text}
    </button>
  )
}