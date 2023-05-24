import AddToCartButton from "./AddToCartButton";

interface ProductCardProp {
  src: string;
  title: string;
  price: number;
}
const clickHandler = () => {};

const ProductCard: React.FC<ProductCardProp> = ({ src, title, price }) => {
  return (
    <div>
      <img src={src} />
      <h3>{title}</h3>
      <div>
        {price} <span>&#8372;</span>
      </div>
      <AddToCartButton clickHandler={clickHandler} />
    </div>
  );
};
export default ProductCard;
