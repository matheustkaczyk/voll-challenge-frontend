import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext, { userInfo } from "../../context/appContext";
import httpRequest from "../../utils/httpRequest";
import Button from "../Button";
import Input from "../Input";

import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import coin from '../../coin.svg';

const Header = ({ name, balance, role }: userInfo) => {
  const { cartProducts, loggedUserInfo, setProductsFilter, setIsLogged, setIsAdmin } = useContext(AppContext);
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

    if (loggedUserInfo.balance < cartProducts.reduce((acc, curr) => acc + curr.price, 0)) {
      return alert("Você não tem pontos suficientes para efetuar a compra!");
    }

    console.log(cartProducts, loggedUserInfo);
    const request = await httpRequest()
    .post('/sale', { products: cartProducts, user: loggedUserInfo }, { headers: { Authorization: token } });

    if (request.status === 201) {
      return alert('Pedido efetuado com sucesso!');
    } else {
      return alert('Erro ao efetuar pedido, verifique se o seu saldo é suficiente');
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    setIsAdmin(false);
    return navigate("/signin");
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
        <h2 className="cart" onClick={() => handleOpen()}><AiOutlineShoppingCart /> {cartProducts.length}</h2>
        <AiOutlineLogout className="logout" onClick={() => handleLogout()} />
      </div>
      <div className="header-infos">
        <h2 className="name"><AiOutlineUser />{name}</h2>
        <h2 className="points"><span>Pontos:</span> {balance}</h2>
        { role === 'admin' && <h2 className="admin" onClick={() => handleRedirect()}>Gerenciar</h2> }
      </div>
      {
        checkout && 
        <aside className="checkout">
          <div className="checkout-total">
            <h2>Checkout</h2>
            <h2>Total: {cartProducts.reduce((acc, item) => acc + (item.quantity * item.price), 0)}</h2>
          </div>
          { cartProducts.length > 0 && cartProducts.map(item => {
            return <div key={item.name} className="cart-item">
              <h4>{item.name}</h4>
              <h5>Preço: {item.price}</h5>
              <h5>Quantidade: {item.quantity}</h5>
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
