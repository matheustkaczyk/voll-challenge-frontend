import { productsInfo } from "../../context/appContext";
import Button from "../Button";
import Input from "../Input";

const Card = ({ name, description, price, stock, img_url, createdAt, updatedAt }: productsInfo) => {
  return(
    <section>
      <img src={img_url} alt={`${name} image`} />
      <h4>{name}</h4>
      <p>{description}</p>
      <h3>{price}</h3>
      <p>{`${stock} unidade(s) disponiveis`}</p>
      <Input
        type={"number"}
        handleChange={() => {}}
        placeholder={"Quantidade"}
        classN={"input"}
        min={1}
        max={stock}
      />
      <Button
        type={"button"}
        text={"Adicionar ao carrinho"}
        handleClick={() => {}}
        classN={"button"}
      />
    </section>
  )
}

export default Card;
