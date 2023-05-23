import { Product } from "../AppRouter";
import CategoryCard from "../components/CategoryCard";

interface ShopProps {
  categories?: Array<string> | Array<Product>;
}

const Shop: React.FC<ShopProps> = ({ categories }) => {
  return (
    <aside>
      <ul>
        {categories
          ? categories.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))
          : null}
      </ul>
    </aside>
  );
};
export default Shop;
