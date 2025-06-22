import bg from "../../assets/bg0.gif";
import "./Home.css";
import { category } from "../../category";
import Product from "../../components/Product/Product";
import { dummydata } from "../../dummyData";
import { useEffect, useState } from "react";

const Home = ({searchTerm}) => {
  const [cate, setCate] = useState(dummydata);

  useEffect(() => {
  if (searchTerm.trim() === "") {
    setCate(dummydata);
  } else {
    const filtered = dummydata.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCate(filtered);
  }
}, [searchTerm]);

  function filterProducts(category) {
    const updateData = dummydata.filter((item) => item.category === category);
    setCate(updateData);
  }

  return (
    <div className="home">
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>

      <div className="category-section">
        {category.slice(0, 5).map((item, id) => {
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

      <h1>Trending Products</h1>
      <div className="production-section">
        {cate.slice(0, 7).map((item, id) => {
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

export default Home;
