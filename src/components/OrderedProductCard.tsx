import { useState } from "react";
import styles from "./OrderedProductCard.module.css";

export interface OrderedProductCardProps {
  src: string;
  title: string;
  price: number;
  quantity: number;
  handleQuantityChange: (productId: string, newQuantity: number) => void;
  updateFirebaseQuantity: (
    productId: string,
    newQuantity: number
  ) => Promise<void>;
}

const OrderedProductCard: React.FC<OrderedProductCardProps> = ({
  src,
  title,
  price,
  quantity,
  handleQuantityChange,
  updateFirebaseQuantity,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newQuantity = parseInt(e.target.value, 10);
    handleQuantityChange(title, newQuantity);
    updateFirebaseQuantity(title, newQuantity);
    setProductsPrice(price * newQuantity);
  };
  const [productsPrice, setProductsPrice] = useState<number>(price * quantity);

  const MAX_TITLE_SIZE = 20;
  return (
    <div className={styles.card}>
      <img src={src} />
      <div>
        <h3>
          {title.length > MAX_TITLE_SIZE
            ? title.slice(0, MAX_TITLE_SIZE) + "..."
            : title}
        </h3>
        <span>{productsPrice} &#8372;</span>
        <input
          type="number"
          min="1"
          name="quantity"
          placeholder={quantity.toString()}
          onInput={handleInputChange}
        />
      </div>
    </div>
  );
};
export default OrderedProductCard;
