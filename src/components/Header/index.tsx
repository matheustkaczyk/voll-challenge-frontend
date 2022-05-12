import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext, { userInfo } from "../../context/appContext";
import Button from "../Button";
import ProductCard from "../ProductCard";

const Header = ({ name, balance, role }: userInfo) => {
  const { cartProducts } = useContext(AppContext);
  const [checkout, setCheckout] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    return navigate('/manager');
  }

  const handleCheckout = () => {
    // return navigate('/checkout');
  }

  return(
    <header>
      <h2>{name}</h2>
      <h2>{balance}</h2>
      { role === 'admin' && <h2 onClick={() => handleRedirect()}>Gerenciar</h2> }
      <h2 onClick={() => handleCheckout()}>Carrinho {cartProducts.length}</h2>
      {
        checkout && 
        <aside>
          <h2>Checkout</h2>
          <h2>Total: {cartProducts.reduce((acc, item) => acc + (item.quantity * item.price), 0)}</h2>
          { cartProducts.map(item => {
            return <ProductCard
              key={item._id}
              _id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              stock={item.stock}
              quantity={item.quantity}
            />
            })
          }
        <Button
          type={"button"}
          text={"Finalizar compra"}
          handleClick={() => {}}
          classN={"button"}
        />
        </aside>
      }
    </header>
  )
}

export default Header;
