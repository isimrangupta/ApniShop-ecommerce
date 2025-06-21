import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
