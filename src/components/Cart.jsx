import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  removefromCart,
  addItemsQuantity,
  deleteItemsQuantity,
} from "../fature/savice/cardSlide";
const Cart = (props) => {
  const { id, title, price, image, quantity } = props;
  const dispatch = useDispatch();

  const oneItemPrice = price * quantity;

  return (
    <div className='flex justify-around  items-center mt-10  '>
      <div className='flex gap-5  '>
        <img src={image} className='max-w-[100px] h-[100px] ' alt='' />
        <div>
          <h3>{title}</h3>
          <p>{oneItemPrice.toFixed(2)}</p>
          <p
            onClick={() => dispatch(removefromCart(props))}
            className='cursor-pointer select-none text-red-500'
          >
            remove
          </p>
        </div>
      </div>
      
      <div className='flex flex-col gap-2 items-center'>
        <p
          onClick={() => dispatch(addItemsQuantity(props))}
          className='cursor-pointer select-none'
        >
          <IoIosArrowUp />
        </p>
        <p>{quantity}</p>
        <p
          onClick={() => dispatch(deleteItemsQuantity(props))}
          className='cursor-pointer select-none'
        >
          <IoIosArrowDown />
        </p>
      </div>
    </div>
  );
};

export default Cart;
