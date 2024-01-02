import BackToTop from "./components/BackToTop/BackToTop";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProductList from "./pages/ProductList/ProductList";
import Homepage from "./pages/Homepage/Homepage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import CartPage from "./pages/CartPage/CartPage";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector((store) => store.user);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/productlist/:category" element={<ProductList />} />
        <Route path="/singleproduct/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <BackToTop />
    </div>
  );
}

export default App;
