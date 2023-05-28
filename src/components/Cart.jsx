import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { removefromCart, addItemsQuantity } from "../fature/savice/cardSlide";
const Cart = (props) => {
  // const { id, title, price, image, quantity } = props;
  const { cartItems } = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();

  return (
    <div className='flex justify-around  items-center mt-10  '>
      <div className='flex gap-5  '>
        <img
          src={cartItems.image}
          className='max-w-[100px] h-[100px] '
          alt=''
        />
        <div>
          <h3>{cartItems.substring(0, 25)}...</h3>
          <p>{cartItems.price}</p>
          <p
            onClick={() => dispatch(removefromCart(props))}
            className='cursor-pointer select-none text-red-500'
          >
            remove
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <p
          onClick={() => dispatch(addItemsQuantity())}
          className='cursor-pointer select-none'
        >
          <IoIosArrowUp />
        </p>
        <p>{quantity}</p>
        <p className='cursor-pointer select-none'>
          <IoIosArrowDown />
        </p>
      </div>
    </div>
  );
};

export default Cart;
