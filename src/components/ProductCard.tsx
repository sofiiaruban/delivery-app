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
      <div className={styles.cardImg}>
        <img src={src} />
      </div>
      <h3>{title.length > 40 ? title.slice(0, 40) + "..." : title}</h3>
      <div className={styles.cardDetails}>
        <span> {price} &#8372;</span>
        <AddToCartButton clickHandler={clickHandler} />
      </div>
    </div>
  );
};
export default ProductCard;
