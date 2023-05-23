import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<ShoppingCart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
