const Input = ({ type, handleChange, placeholder, classN }) => {
  return(
    <input
      type={type}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
      className={ classN }
    />
  )
}