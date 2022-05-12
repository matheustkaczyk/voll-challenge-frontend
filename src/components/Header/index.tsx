import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext, { userInfo } from "../../context/appContext";

const Header = ({ name, balance, role }: userInfo) => {
  const { cartProducts } = useContext(AppContext);
  const navigate = useNavigate();

  const handleRedirect = () => {
    return navigate('/manager');
  }

  const handleCheckout = () => {
    return navigate('/checkout');
  }

  return(
    <header>
      <h2>{name}</h2>
      <h2>{balance}</h2>
      { role === 'admin' && <h2 onClick={() => handleRedirect()}>Gerenciar</h2> }
      <h2 onClick={() => handleCheckout()}>Carrinho {cartProducts.length}</h2>
    </header>
  )
}

export default Header;
