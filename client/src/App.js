import BackToTop from "./components/BackToTop/BackToTop";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductList from "./pages/ProductList/ProductList";
import Homepage from "./pages/Homepage/Homepage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import CartPage from "./pages/CartPage/CartPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/singleproduct" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <BackToTop />
    </div>
  );
}

export default App;
