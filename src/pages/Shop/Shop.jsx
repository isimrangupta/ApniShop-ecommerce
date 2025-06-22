import { useState } from "react";
import { category } from "../../category";
import "./Shop.css";
import { dummydata } from "../../dummyData";
import Product from "../../components/Product/Product";
import { FaShopify } from "react-icons/fa6";

const Shop = () => {
  const [cate, setCate] = useState(dummydata);

  function filterProducts(category) {
    if (category === "All") {
      setCate(dummydata);
    } else {
      const updateData = dummydata.filter((item) => item.category === category);
      setCate(updateData);
    }
  };

  return (
    <div className="shop">
      <div className="heading">
        <span>Shop</span>
        <FaShopify />
      </div>

      <div className="category-section">
        {category.map((item, id) => {
          return (
            <div
              key={id}
              className="category-cart"
              onClick={() => {
                filterProducts(item.name);
              }}
            >
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>

      <div className="production-section">
        {cate.map((item, id) => {
          return (
            <Product
              key={id}
              image={item.image}
              name={item.name}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
