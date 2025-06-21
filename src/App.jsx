import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
      <BrowserRouter>
        <Nav setSearchTerm={setSearchTerm}/>
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm}/>} />
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
