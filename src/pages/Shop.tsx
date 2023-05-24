import { useEffect, useState } from "react";
import { Product } from "../AppRouter";
import CategoryCard from "../components/CategoryCard";
import { useQuery } from "react-query";
import ProductCard from "../components/ProductCard";
import styles from "./Shop.module.css";

interface ShopProps {
  categories?: Array<string> | Array<Product>;
  fetchData: (url: string) => Promise<Array<string> | Array<Product>>;
}

const Shop: React.FC<ShopProps> = ({ categories, fetchData }) => {
  const [activeShop, setActiveShop] = useState<string | Product>(
    categories ? categories[0] : ""
  );
  const BASE_URL: string = import.meta.env.VITE_API_BASE_URL_PRODUCTS;
  const [productsData, setProductsData] = useState<Array<Product>>([]);
  const { isLoading: isLoadingProducts, error: errorProducts } = useQuery<
    Array<string> | Array<Product>
  >("products", () => fetchData(`${BASE_URL}/${activeShop}`), {
    onSuccess: (data) => {
      setProductsData(data as Array<Product>);
    },
  });

  useEffect(() => {
    fetchData(`${BASE_URL}/${activeShop}`).then((data) => {
      setProductsData(data as Array<Product>);
    });
  }, [activeShop]);

  const clickHandler: React.MouseEventHandler<HTMLLIElement> = (e) => {
    let selectedShop = e.currentTarget.textContent || "";
    setActiveShop(selectedShop);
  };

  if (isLoadingProducts) return <div>Loading...</div>;
  if (errorProducts) return <div>Error</div>;
  return (
    <div className={styles.wrapper}>
      <aside>
        <h3>Shops:</h3>
        <ul>
          {categories
            ? categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  category={category}
                  clickHandler={clickHandler}
                />
              ))
            : null}
        </ul>
      </aside>
      <main>
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            src={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </main>
    </div>
  );
};
export default Shop;
