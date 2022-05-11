import { productsInfo } from "../../context/appContext";

const Card = ({ name, description, price, stock, img_url, createdAt, updatedAt }: productsInfo) => {
  return(
    <section>
      <img src={img_url} alt={`${name} image`} />
      <h4>{name}</h4>
      <p>{description}</p>
      <h3>{price}</h3>
      <p>{`${stock} unit(s) available`}</p>
    </section>
  )
}

export default Card;
