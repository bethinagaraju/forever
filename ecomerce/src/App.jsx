import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./assets/components/navbar";
import Footer from "./assets/components/footer";
import Home from "./assets/pages/home";
import ProductPage from "./assets/pages/productdesc";
import Checkout from "./assets/pages/checkout";
import Mens from "./assets/pages/mens";
import Womens from "./assets/pages/womens";
import Gadgets from "./assets/pages/gadgets";
// import Beauty from "./assets/pages/beauty";
import Searchpage from "./assets/pages/searchpage";
import CartPage from "./assets/pages/cart";
import LikedProduct from "./assets/pages/likedproduct";
import Orders from "./assets/pages/orders";
import Beauty from "./assets/pages/beauty";

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <br/>
      <br/>
      <br/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/gadgets" element={<Gadgets />} />
          <Route path="/searchpage" element={<Searchpage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/likedproduct" element={<LikedProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/beauty" element={<Beauty />} />

        </Routes>
       
      </div>
    </Router>
  );
}

export default App;