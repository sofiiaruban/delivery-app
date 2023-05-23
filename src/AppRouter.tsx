import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";

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
