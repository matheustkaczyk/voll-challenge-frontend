import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext, { userInfo } from "../../context/appContext";
import httpRequest from "../../utils/httpRequest";
import Button from "../Button";
import Input from "../Input";
import ProductCard from "../ProductCard";
import coin from '../../coin.svg';

const Header = ({ name, balance, role }: userInfo) => {
  const { cartProducts, loggedUserInfo, setProductsFilter } = useContext(AppContext);
  const [checkout, setCheckout] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleRedirect = () => {
    return navigate('/manager');
  }

  const handleOpen = () => {
    setCheckout(!checkout);
  }

  const handleCheckout = async () => {
    if (!token) {
      return navigate("/signin");
    }

    const request = await httpRequest()
    .post('/sale', { products: cartProducts, user: loggedUserInfo }, { headers: { Authorization: token } });

    if (request.status === 201) {
      return alert('Pedido efetuado com sucesso!');
    } else {
      return alert('Erro ao efetuar pedido, verifique se o seu saldo é suficiente');
    }
  }

  return(
    <header>
      <div className="search-cart">
        <img src={coin} alt="coin-logo" />
        <Input
          type="text"
          placeholder="Buscar produto"
          classN="search"
          handleChange={(e) => setProductsFilter(e.target.value)}
          />
        <h2 className="cart" onClick={() => handleOpen()}>Carrinho: {cartProducts.length}</h2>
      </div>
      <div>
        <h2>{name}</h2>
        <h2>Pontos: {balance}</h2>
        { role === 'admin' && <h2 className="admin" onClick={() => handleRedirect()}>Gerenciar</h2> }
      </div>
      {
        checkout && 
        <aside>
          <h2>Checkout</h2>
          <h2>Total: {cartProducts.reduce((acc, item) => acc + (item.quantity * item.price), 0)}</h2>
          { cartProducts.length > 0 && cartProducts.map(item => {
            return <div key={item.name}>
              <h4>{item.name}</h4>
              <h5>{item.price}</h5>
              <h5>{item.quantity}</h5>
            </div>
          })
          }
        <Button
          type={"button"}
          text={"Finalizar compra"}
          handleClick={() => handleCheckout()}
          classN={"button"}
        />
        </aside>
      }
    </header>
  )
}

export default Header;
