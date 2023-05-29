import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";
const Addtocart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  console.log(totalAmount);

  if (cartItems.length === 0) {
    return (
      <div className='flex justify-center h-screen items-center'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl tracking-wider'>Your cart is emty</h1>
          <Link to={"/"}>
            <button className=' rounded  px-4 py-1 bg-violet-600 text-white'>
              Fill it
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        {cartItems?.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>

      <hr className='mt-5 border border-gray-500 w-[70%] mx-auto' />
      <div className='flex justify-around mt-3 items-center'>
        <p className='text-gray-500 font-bold'>Total</p>
        <p className='text-violet-700 font-semibold '>
          ${totalAmount.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Addtocart;
