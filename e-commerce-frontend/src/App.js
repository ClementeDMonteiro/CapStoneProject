import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import cat_banner from "./Components/Assets/banner_cat.png";
import dog_banner from "./Components/Assets/banner_dog.png";
import birds_banner from "./Components/Assets/banner_birds.png";
import LoginSignup from "./Pages/LoginSignup";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/dogs" element={<ShopCategory banner={dog_banner} category="dog" />} />
          <Route path="/cats" element={<ShopCategory banner={cat_banner} category="cat" />} />
          <Route path="/birds" element={<ShopCategory banner={birds_banner} category="bird" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
