import styles from "./OrderedProductCard.module.css";

export interface OrderedProductCardProps {
  src: string;
  title: string;
  price: number;
  quantity: number;
  handleQuantityChange: (quantity: number) => void;
}

const OrderedProductCard: React.FC<OrderedProductCardProps> = ({
  src,
  title,
  price,
  quantity,
  handleQuantityChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    handleQuantityChange(newQuantity);
  };
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
        <span>{price} &#8372;</span>
        <input
          type="number"
          min="1"
          name="quantity"
          placeholder={quantity.toString()}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
export default OrderedProductCard;
