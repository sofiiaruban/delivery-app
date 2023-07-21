import { useState } from 'react';
import styles from './OrderedProductCard.module.css';

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
  updateFirebaseQuantity
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newQuantity = parseInt(e.target.value, 10);
    handleQuantityChange(title, newQuantity);
    updateFirebaseQuantity(title, newQuantity);
    setProductsPrice(price * newQuantity);
  };
  const [productsPrice, setProductsPrice] = useState<number>(price * quantity);

  //const MAX_TITLE_SIZE = 30;
  //{title.length > MAX_TITLE_SIZE
  //  ? title.slice(0, MAX_TITLE_SIZE) + '...'
  //  : title}
  return (
    <div className={styles.orderedCard}>
      <img src={src} className={styles.orderedCardImg} />
      <div className={styles.orderedCardDetails}>
        <h3 className={styles.orderedCardTitle}>{title}</h3>
        <span className={styles.orderedCaredPrice}>
          {productsPrice || 0} &#8372;
        </span>
        <input
          type="number"
          min="1"
          name="quantity"
          placeholder={quantity ? quantity.toString() : '0'}
          onInput={handleInputChange}
          className={styles.orderedCardInput}
        />
      </div>
    </div>
  );
};
export default OrderedProductCard;
