import AppContext from "./appContext"

const Provider = (props: any) => {

  let value = {
    username: '',
    password: '',
    isLogged: false,
  };
  
  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Provider;
