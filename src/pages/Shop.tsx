import { Product } from "../AppRouter";

interface ShopProps {
  categories?: Array<string> | Array<Product>;
}

const Shop: React.FC<ShopProps> = ({ categories }) => {
  return (
    <aside>
      <ul></ul>
    </aside>
  );
};
export default Shop;
