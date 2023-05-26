import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}
const fetchData = async (
  url: string
): Promise<Array<string> | Array<Product>> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const AppRouter: React.FC = () => {
  const BASE_URL: string = import.meta.env.VITE_API_BASE_URL;
  const {
    isLoading: isLoadingCategories,
    error: errorCategories,
    data: categoriesData,
  } = useQuery<Array<string> | Array<Product>>("categories", () =>
    fetchData(BASE_URL)
  );

  if (isLoadingCategories) return <div>Loading...</div>;
  if (errorCategories) return <div>Error</div>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Shop categories={categoriesData} fetchData={fetchData} />}
          ></Route>
          <Route path="/cart" element={<ShoppingCart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
