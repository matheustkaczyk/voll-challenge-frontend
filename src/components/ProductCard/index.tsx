import { useContext, useState } from 'react';

import AppContext, { productsInfo } from "../../context/appContext";
import Button from "../Button";
import Input from "../Input";

const ProductCard = ({ _id, name, description, price, stock, img_url, createdAt, updatedAt }: productsInfo) => {
  const { cartProducts, setCartProducts } = useContext(AppContext);
  const [quantity, setQuantity] = useState(Number(1));
  const [thisProduct, setThisProduct] = useState({
    _id,
    name,
    description,
    price,
    stock,
    quantity,
    total: quantity * price
  });

  const handleBuy = () => {
    const cart = [...cartProducts];
    const index = cart.findIndex(item => item._id === thisProduct._id);
    if (index !== -1) {
      cart[index].quantity += quantity;
    } else {
      cart.push({ ...thisProduct });
    }

    setCartProducts(cart);
  }

  return(
    <section className='product-card'>
      <img src={img_url} alt={`${name} image`} />
      <h4>{name}</h4>
      <p>{description}</p>
      <h3>{price}</h3>
      <p>{stock === 1 ? `${stock} unidade disponível` : `${stock} unidades disponíveis`}</p>
      <Input
        type={"number"}
        handleChange={(e) => setQuantity(Number(e.target.value))}
        placeholder={"Quantidade"}
        classN={"input"}
        min={1}
        max={stock}
      />
      <Button
        type={"button"}
        text={"Adicionar ao carrinho"}
        handleClick={() => handleBuy()}
        classN={"button"}
      />
    </section>
  )
}

export default ProductCard;
