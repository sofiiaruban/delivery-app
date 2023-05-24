import AddToCartButton from "./AddToCartButton";
import styles from "./ProductCard.module.css";
interface ProductCardProp {
  src: string;
  title: string;
  price: number;
}
const clickHandler = () => {};

const ProductCard: React.FC<ProductCardProp> = ({ src, title, price }) => {
  return (
    <div className={styles.card}>
      <img src={src} className={styles.img} />
      <h3 className={styles.h3}>{title}</h3>
      <div>
        {price} <span>&#8372;</span>
      </div>
      <AddToCartButton clickHandler={clickHandler} />
    </div>
  );
};
export default ProductCard;
