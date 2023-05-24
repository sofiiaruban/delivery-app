interface AddToCartButtonProp {
  clickHandler: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProp> = ({ clickHandler }) => {
  return <button onClick={clickHandler}>Add to cart</button>;
};
export default AddToCartButton;
