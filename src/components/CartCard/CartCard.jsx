import './CartCard.css'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';

const CartCard = ({name, price, image, id}) => {
  let dispatch = useDispatch()
  return (
    <div className='Cartcard'>
      <div className="left-card">
        <img src={image} alt="" />
        <div className="name-price">
          <span>{name}</span>
          <span>Rs {price}</span>
        </div>
      </div>

      <div className='right-card'>
        <button onClick={() =>{
          dispatch(RemoveItem(id))
           alert("Product Removed Successfully!")
        }}>Remove <MdDelete /></button>
      </div>
    </div>
  )
}

export default CartCard
