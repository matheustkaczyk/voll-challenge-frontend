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
    // const cart = [...cartProducts];

    // if (cart.length > 0) {
    //   cart.map((item, index) => {
    //     console.log(item);
    //       console.log(item._id === thisProduct._id)
    //       if (item._id === thisProduct._id) {
    //         console.log(item, item._id)
    //         cart[index].quantity += quantity;
    //         return false;
    //       } else {
    //         cart.push(thisProduct);
    //         return false;
    //       }
    //   })
    // } else {
    //   cart.push({...thisProduct});
    // }
    // console.log(cart);
    // setCartProducts(cart);
  }

  return(
    <section>
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
