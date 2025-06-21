import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";
import "./Cart.css";
import ec from "../../assets/emptycart.png";

const Cart = () => {
  let items = useSelector((state) => state);
  let total = items.cart.reduce((a, b) => a + b.price, 0)
  return (
    <div className="cart">
      {items.cart.length <= 0 ? (
        <div className="empty-cart">
          <img src={ec} alt="" />
          <h1>Empty Cart</h1>
        </div>
      ) : (
        <div className="cartCard-section">
          {items.cart.map((item, id) => (
            <CartCard key={id} id={item.id} name={item.name} price={item.price} image={item.image}/>
          ))}

          <div className="price-section">
            <span>Total Products : {items.cart.length}</span>
            <span>Total Price: {total}</span>
          </div>
        </div> 
      )}
    </div>
  );
};

export default Cart;
