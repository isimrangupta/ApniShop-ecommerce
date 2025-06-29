import './CartCard.css'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { DecrementQuantity, IncrementQuantity, RemoveItem } from '../../redux/cartSlice';

const CartCard = ({name, price, image, id, quantity}) => {
  let dispatch = useDispatch()
  return (
    <div className='Cartcard'>
      <div className="left-card">
        <img src={image} alt="" />
        <div className="name-price">
          <span>{name}</span>
          <span>Rs {price * quantity}</span>
        </div>
      </div>

      <div className='right-card'>
 <div className="quantity-controls">
          <button onClick={() => dispatch(DecrementQuantity(id))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => dispatch(IncrementQuantity(id))}>+</button>
        </div>




        <button onClick={() =>{
          dispatch(RemoveItem(id))
           alert("Product Removed Successfully!")
        }}>Remove <MdDelete /></button>
      </div>
    </div>
  )
}

export default CartCard
