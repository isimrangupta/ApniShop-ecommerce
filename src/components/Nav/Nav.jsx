import { FaShopify } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Nav = ({ setSearchTerm }) => {
  let dispatch = useDispatch();
  let items = useSelector((state) => state);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="nav">
      <div className="top-nav">
        <NavLink to="/">
          <div className="logo">
            <span>A-Shop</span>
            <FaShopify />
          </div>
        </NavLink>

        <form
          className="search-box"
          onSubmit={(e) => {
            e.preventDefault();
            setSearchTerm(inputValue);
            setInputValue("");
          }}
        >
          <input
            type="text"
            placeholder="Search Items..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>
            <IoSearchOutline />
          </button>
        </form>

        <Link to="/cart" className="cart-box">
          <IoCartOutline />
          <span>{items.cart.length}</span>
        </Link>

        {/* Hamburger icon */}
        <div className="hamburger-menu">
          <RxHamburgerMenu />
        </div>
      </div>

      <div className="bottom-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <li>Shop</li>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <li>Cart</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <li>Contact</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
