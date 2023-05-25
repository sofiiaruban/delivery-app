import styles from "./OrderedProductCard.module.css";

export interface OrderedProductCardProps {
  src: string;
  title: string;
  price: number;
  quantity: number;
}

const OrderedProductCard: React.FC<OrderedProductCardProps> = ({
  src,
  title,
  price,
  quantity,
}) => {
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
        <input type="number" min="1" name="quantity" placeholder="1" />
      </div>
    </div>
  );
};
export default OrderedProductCard;
